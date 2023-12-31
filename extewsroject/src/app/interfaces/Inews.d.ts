interface Source {
  id: string;
  name: string;
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
}

export default interface IApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}