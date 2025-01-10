import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Clock, Target } from "lucide-react";

interface AnalysisResultProps {
  content: string;
  streamSpeed?: number;
}

export function AnalysisResult({
  content,
  streamSpeed = 5,
}: AnalysisResultProps) {
  const [streamedContent, setStreamedContent] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    setIsComplete(false);
    setStreamedContent("");

    const interval = setInterval(() => {
      if (currentIndex < content.length) {
        const charToAdd = content[currentIndex];
        if (charToAdd !== undefined) {
          setStreamedContent((prev) => prev + charToAdd);
        }
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, streamSpeed);

    return () => clearInterval(interval);
  }, [content, streamSpeed]);

  const stats = [
    { icon: BarChart2, label: "Performance Metrics" },
    { icon: TrendingUp, label: "Growth Analysis" },
    { icon: Clock, label: "Timing Insights" },
    { icon: Target, label: "Audience Reach" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
    >
      <div className="flex flex-col space-y-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isComplete ? "100%" : "0%" }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg dark:prose-invert prose-indigo max-w-none mt-4"
          >
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-600 dark:text-gray-300 mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-gray-600 dark:text-gray-300" {...props} />
                ),
              }}
            >
              {streamedContent}
            </ReactMarkdown>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
