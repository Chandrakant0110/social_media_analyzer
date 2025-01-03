export interface ApiResponse {
  session_id: string;
  outputs: Array<{
    outputs: Array<{
      artifacts: {
        message: string;
      };
    }>;
  }>;
}

export type PostType = 'reels' | 'carousel' | 'static image';