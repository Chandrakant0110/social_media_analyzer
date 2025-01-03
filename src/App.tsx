import React, { useState } from 'react';
import { PostType } from './types/api';
import { PostTypeSelector } from './components/PostTypeSelector';
import { AnalysisResult } from './components/AnalysisResult';
import { ErrorMessage } from './components/ErrorMessage';
import { fetchAnalysis } from './services/api';
import { Loader2 } from 'lucide-react';

function App() {
  const [postType, setPostType] = useState<PostType>('reels');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    setResult('');

    try {
      const analysisResult = await fetchAnalysis(postType);
      setResult(analysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Social Media Performance Analysis
          </h1>
          <p className="text-gray-600">
            Analyze performance metrics for different types of social media posts
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <PostTypeSelector
            value={postType}
            onChange={setPostType}
            disabled={loading}
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>

          {error && <ErrorMessage message={error} />}
          {result && <AnalysisResult content={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;