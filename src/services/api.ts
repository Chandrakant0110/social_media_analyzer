import axios from 'axios';
import { ApiResponse, PostType } from '../types/api';

const API_TOKEN = import.meta.env.VITE_LANGFLOW_API_TOKEN;
const API_URL = import.meta.env.VITE_LANGFLOW_API_URL;

// Add this debug logging
console.log('API URL:', API_URL);
console.log('API Token exists:', !!API_TOKEN);

if (!API_URL || !API_TOKEN) {
  throw new Error('Missing required environment variables. Please check your .env file.');
}

export async function fetchAnalysis(postType: PostType): Promise<string> {
  try {
    const response = await axios.post<ApiResponse>(
      `${API_URL}?stream=false`,
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
      console.error('API Error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to fetch analysis');
    }
    throw error;
  }
}
