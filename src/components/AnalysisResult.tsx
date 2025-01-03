import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BarChart2 } from 'lucide-react';

interface AnalysisResultProps {
  content: string;
}

export function AnalysisResult({ content }: AnalysisResultProps) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Performance Analysis Results</h2>
      </div>
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}