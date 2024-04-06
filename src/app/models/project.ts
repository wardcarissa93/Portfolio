import { Category } from './category';

export interface Project {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    url: string | null;
    published_date: string | null;
    images: string[] | null;
    category_id: number | null;
    category: Category | null;
    tags: any;
    code_snippet: string | null;
}
