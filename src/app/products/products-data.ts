import { parse } from 'csv-parse/sync';
import { env } from '~/env';

export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  gallery: string[];
  details: string[];
  featured: boolean;
}

type CsvRecord = Omit<Product, 'featured' | 'gallery' | 'details'> & {
  featured: string;
  gallery: string;
  details: string;
}

export async function getProducts(): Promise<Product[]> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const res = await fetch(env.PRODUCTS_SHEET_URL, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('❌ CSV fetch failed:', errorText);
    throw new Error('Failed to fetch products');
  }

  const csvText = await res.text();
  
  try {
    const records = parse(csvText, {
      columns: true, // Use the first row as headers
      skip_empty_lines: true,
      trim: true
    }) as CsvRecord[];

    return records.map((record) => {
      // Provide default values for missing fields instead of throwing error
      return {
        id: record.id || `product-${Math.random().toString(36).substring(7)}`,
        name: record.name || 'Без име',
        price: record.price || '0',
        description: record.description || 'Няма описание',
        image: transformGoogleDriveUrl(record.image || ''),
        category: record.category || '',
        gallery: record.gallery?.split(';').map((s) => transformGoogleDriveUrl(s.trim())).filter(Boolean) ?? [],
        details: record.details?.split(';').map((s) => s.trim()).filter(Boolean) ?? [],
        featured: record.featured?.toUpperCase() === 'TRUE'
      };
    });
  } catch (error) {
    throw new Error(`Failed to parse CSV: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}


function transformGoogleDriveUrl(url: string): string {
  const match = /\/file\/d\/(.*?)\/view/.exec(url);
  if (!match) return url;
  return `https://drive.google.com/uc?export=view&id=${match[1]}`;
}