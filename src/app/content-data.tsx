import { parse } from 'csv-parse/sync';
import { env } from '~/env';

export type CommonContent = {
  header_shop: string;
  link_about: string;
  link_contacts: string;
  link_all_products: string;
  link_wallets: string;
  link_accessories: string;
  link_delivery: string;
  link_terms: string;
  link_privacy: string;
  link_belts: string;
  footer_tagline: string;
  footer_copy_text: string;
  footer_shop: string;
  footer_info: string;
  footer_blog: string;
}

type CsvRecord = {
  key: string;
  value: string;
}

export const getCommonContent = async (): Promise<CommonContent> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const res = await fetch(env.COMMON_CONTENT_SHEET_URL, {
    cache: 'force-cache',
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    console.error('❌ CSV fetch failed:', errorText);
    throw new Error('Failed to fetch common site content');
  }

  const csvText = await res.text();
  
  try {
    const records = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    }) as CsvRecord[];

    const content = records.reduce((acc, record) => {
      if (record.key in acc) {
        acc[record.key as keyof CommonContent] = record.value;
      }
      return acc;
    }, {
      header_shop: '',
      link_about: '',
      link_contacts: '',
      link_all_products: '',
      link_wallets: '',
      link_accessories: '',
      link_belts: '',
      link_delivery: '',
      link_terms: '',
      link_privacy: '',
      footer_tagline: '',
      footer_copy_text: '',
      footer_shop: '',
      footer_info: '',
      footer_blog: '',
    } as CommonContent);

    return content;
  } catch (error) {
    throw new Error(`Failed to parse CSV: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};