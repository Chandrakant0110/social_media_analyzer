import axios from 'axios';
import { ApiResponse, PostType } from '../types/api';

const API_TOKEN = 'AstraCS:LHhEdGqZnFEdXknAANvtAxIx:0de347acfeb7af202ac932a707ae34a942b896f8913cd40ecd05f2a4e2425a53';

export async function fetchAnalysis(postType: PostType): Promise<string> {
  try {
    const response = await axios.post<ApiResponse>(
      `/api/lf/fbcce4ce-a7e6-479f-b6cb-b90114ece650/api/v1/run/f8ee21a8-e6db-4286-9bcf-b112e2ed6c17?stream=false`,
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