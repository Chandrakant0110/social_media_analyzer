import axios from 'axios';
import { ApiResponse, PostType } from '../types/api';

const API_TOKEN = 'AstraCS:NejzgolyZkkDkmjNaLFpWdiK:f5ffa4243c162225e2f77b5d3cfe45eecc6db651de3c5af3add357990098fd1c';

export async function fetchAnalysis(postType: PostType): Promise<string> {
  try {
    const response = await axios.post<ApiResponse>(
      `https://hackback-4iuo.onrender.com/api/lf/f7875186-7f9a-4c16-9523-3a93771ab793/api/v1/run/e61d8b0b-5ce6-4d22-ae16-8f84f3162248?stream=true`,
      {
        input_value: postType,
        output_type: 'chat',
        input_type: 'chat',
        tweaks: {
          'ChatInput-1r2F2': {},
          'ParseData-IEOpb': {},
          'Prompt-CQjLV': {},
          'SplitText-GdN4H': {},
          'ChatOutput-1HmRy': {},
          'AstraDB-Oi0aw': {},
          'AstraDB-OmaPa': {},
          'File-Mdubu': {},
          'GoogleGenerativeAIModel-OBHs8': {},
          'Google Generative AI Embeddings-BKydC': {},
          'Google Generative AI Embeddings-YX1xm': {}
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      }
    );

    return response.data.outputs[0].outputs[0].artifacts.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch analysis');
    }
    throw error;
  }
}
