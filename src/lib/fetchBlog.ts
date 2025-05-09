import { PortableTextBlock } from "@portabletext/react";
import { client } from "./sanity";

export type PostType = {
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  author: {
    name: string;
    image: {
      asset: {
        url: string; // Now fetching the URL for the author's image
      };
    };
    bio: string;
  };
  mainImage: {
    asset: {
      url: string; // Fetching the image URL directly
    };
    alt?: string;
  };
  categories: Array<{
    title: string;
  }>;
  body: PortableTextBlock[];
  publishedAt: string; // ISO date string
  introduction: PortableTextBlock[];
  firstBody: PortableTextBlock[];
  secondBody: PortableTextBlock[];
  conclusion: PortableTextBlock[];
};

export const fetchBlog = async (): Promise<PostType[]> => {
  const query = `*[_type == "post"]{
    title, 
    slug, 
    author->{
      name, 
      image {
        asset->{
          url
        }
      },
      bio
    }, 
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }, 
    categories[]->{
      title
    }, 
    publishedAt, 
    description, 
    introduction,
        firstbody,
    secondBody,
    conclusion,
body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        url
      }
    }
  }
  }`;

  const posts: PostType[] = await client.fetch(query);
  return posts;
};

export const fetchBlogBySlug = async (
  slug: string
): Promise<PostType | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
 title,
    slug,
    author->{
      name,
      image {
        asset->{
          url
        }
      },
      bio
    },
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      title
    },
    publishedAt,
    description,
    introduction,
    firstbody,
    secondBody,
    conclusion,
body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        url
      }
    }
  }
  }`;

  const post: PostType | null = await client.fetch(query, { slug });
  return post;
};
