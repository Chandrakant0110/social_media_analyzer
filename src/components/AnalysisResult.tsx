import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { BarChart2 } from "lucide-react";

interface AnalysisResultProps {
  content: string; // Full content to stream
  streamSpeed?: number; // Optional: Speed of streaming (characters per interval)
}

export function AnalysisResult({
  content,
  streamSpeed = 5,
}: AnalysisResultProps) {
  const [streamedContent, setStreamedContent] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    // Stream content character by character
    const interval = setInterval(() => {
      if (currentIndex < content.length) {
        setStreamedContent((prev) => prev + content[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval); // Stop when complete
      }
    }, streamSpeed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [content, streamSpeed]);

  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">
          Performance Analysis Results
        </h2>
      </div>
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{streamedContent}</ReactMarkdown>
      </div>
    </div>
  );
}
