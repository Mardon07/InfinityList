export interface Item {
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  id: number;
}
