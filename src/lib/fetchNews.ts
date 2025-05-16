import { client } from "./sanity";

export type NewsType = {
  title: string;
  mainImage: {
    asset: {
      url: string; 
    };
    alt?: string;
  };
  publishedAt: string; 
};

export const fetchNews = async (): Promise<NewsType[]> => {
  const query = `*[_type == "news"]{
    title, 
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },  
    publishedAt, 
  }`;

  const news: NewsType[] = await client.fetch(query);
  return news;
};
