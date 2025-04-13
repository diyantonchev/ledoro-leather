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
      // Validate required fields
      if (!record.id || !record.name || !record.price || !record.description || !record.image || !record.category) {
        throw new Error(`Missing required fields in row: ${JSON.stringify(record)}`);
      }

      return {
        id: record.id,
        name: record.name,
        price: record.price,
        description: record.description,
        image: transformGoogleDriveUrl(record.image),
        category: record.category,
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