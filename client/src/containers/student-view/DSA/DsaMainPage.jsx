import React, { useState } from "react";
import { ChevronDown, ArrowUp } from "lucide-react";

const DsaMainPage = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const Topics = [
    {
      id: 1,
      title: "Arrays",
      progress: 0,
      total: 9,
    },
    {
      id: 2,
      title: "String",
      progress: 0,
      total: 9,
    },
    {
      id: 3,
      title: "Sorting",
      progress: 0,
      total: 9,
    },
    {
      id: 4,
      title: "Searching",
      progress: 0,
      total: 9,
    },
    {
      id: 5,
      title: "Hashing",
      progress: 0,
      total: 3,
    },
    {
      id: 6,
      title: "Linked List",
      progress: 0,
      total: 1,
    },
    {
      id: 7,
      title: "Stack",
      progress: 0,
      total: 2,
    },
    {
      id: 8,
      title: "Queue",
      progress: 0,
      total: 7,
    },
    {
      id: 9,
      title: "Recursion",
      progress: 0,
      total: 9,
    },
    {
      id: 10,
      title: "Divide and Conquer",
      progress: 0,
      total: 3,
      },
    {
      id: 11,
      title: "Tree",
      progress: 0,
      total: 3,
    },
    {
      id: 12,
      title: "Graph",
      progress: 0,
      total: 3,
    },
    {
      id: 13,
      title: "Dynamic Programming",
      progress: 0,
      total: 3,
    },
    {
      id: 14,
      title: "Backtracking",
      progress: 0,
      total: 3,
    },
    {
      id: 15,
      title: "Greedy Algorithms",
      progress: 0,
      total: 3,
    },
    
  ];

  const totalProgress = Topics.reduce(
    (acc, Topic) => acc + Topic.progress,
    0
  );
  const totalItems = Topics.reduce((acc, Topic) => acc + Topic.total, 0);

  return (
    <div className="min-h-screen bg-[#efe7e7] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-orange-500">
            Data Structures and Algorithms
          </h1>
          <div className="flex items-center gap-2">
            <span>
              {totalProgress}/{totalItems}
            </span>
            <button
              className="p-2 bg-orange-900 rounded-md hover:bg-orange-800 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {Topics.map((Topic) => (
            <div
              key={Topic.id}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-700 transition-colors"
                onClick={() =>
                  setExpandedTopic(
                    expandedTopic === Topic.id ? null : Topic.id
                  )
                }
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg">Topic {Topic.id}:</span>
                  <span className="text-lg">{Topic.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>
                    {Topic.progress}/{Topic.total}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      expandedTopic === Topic.id ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>
              </button>

              {expandedTopic === Topic.id && (
                <div className="px-6 py-4 bg-gray-750 border-t border-gray-700">
                  <p className="text-gray-400">Topic content goes here...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DsaMainPage;
