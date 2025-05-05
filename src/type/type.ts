export interface Comment {
    id: string;
    author: string;
    message: string;
    timestamp: string;
    replyTo?: string;
  }
  