export interface Comment {
    id: string;
    name: string;
    message: string;
    email: string;
    timestamp: string;
    replyTo?: string;
    slug: string;
  }
  