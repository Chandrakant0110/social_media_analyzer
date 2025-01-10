import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PostType } from "../types/api";
import { PostTypeSelector } from "../components/PostTypeSelector";
import { AnalysisResult } from "../components/AnalysisResult";
import { ErrorMessage } from "../components/ErrorMessage";
import { fetchAnalysis } from "../services/api";
import { Loader2, BarChart2, TrendingUp, AlertCircle } from "lucide-react";

function HomePage() {
  const [postType, setPostType] = useState<PostType>("reels");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    setResult("");

    try {
      const analysisResult = await fetchAnalysis(postType);
      setResult(analysisResult);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto space-y-12 max-w-7xl"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-5xl">
              Social Media Performance Analysis
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Analyze performance metrics for different types of social media posts
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center gap-8 mt-8"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <BarChart2 className="w-5 h-5 text-indigo-600" />
              <span>Real-time Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span>Performance Metrics</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <PostTypeSelector
              value={postType}
              onChange={setPostType}
              disabled={loading}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? "Analyzing..." : "Analyze Now"}
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                <div className="flex items-center gap-2 p-4 text-red-800 bg-red-100 dark:bg-red-900/30 dark:text-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <ErrorMessage message={error} />
                </div>
              </motion.div>
            )}
            
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl"
              >
                <AnalysisResult content={result} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
