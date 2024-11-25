import React, { useState } from "react";
import { ChevronDown, ArrowUp, Circle } from "lucide-react";
import { FileText, X, Copy } from "lucide-react"; // Importing icons from Lucide React
import "../styles/DsaMainPage.css";
import { Topics } from "../../../../../Topics";
const DsaMainPage = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [completedItems, setCompletedItems] = useState([]);
  const [notesPopup, setNotesPopup] = useState({ show: false, subtopic: null });
  const [copied, setCopied] = useState(false);

  const totalProgress = Topics.reduce((acc, Topic) => acc + Topic.progress, 0);
  const totalItems = Topics.reduce((acc, Topic) => acc + Topic.total, 0);
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-400";
      case "medium":
        return "text-yellow-400";
      case "hard":
        return "text-red-400";
      default:
        return "text-white";
    }
  };
  const toggleCompletion = (itemId) => {
    setCompletedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };
  return (
    <div className="min-h-screen bg-[#efe7e7] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-orange-500">
            Data Structures and Algorithms
          </h1>
          <div className="flex items-center gap-2">
            <span>
              {0}/{10}
            </span>
            <button
              className="p-2 rounded-md hover:bg-orange-800 transition-colors"
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
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-400 transition-colors"
                onClick={() =>
                  setExpandedTopic(expandedTopic === Topic.id ? null : Topic.id)
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
              {console.log("Topic", Topic)}
              {expandedTopic === Topic.id && (
                <div className="px-6 py-4 bg-gray-750 border-t border-gray-700">
                  {Topic.subtopics.map((subtopic) => (
                    <div
                      key={subtopic.id}
                      className="pl-12 pr-6 py-2 bg-gray-800"
                    >
                      <div className="flex justify-between items-center font-medium text-orange-400 mb-2 ">
                        {subtopic.title}
                        <button
                          className="text-orange-400 hover:text-orange-500 bg-gray-700 p-2 rounded-lg"
                          onClick={() =>
                            setNotesPopup({ show: true, subtopic })
                          }
                        >
                          <FileText size={20} />
                        </button>
                      </div>

                      {subtopic.problems.map((problem) => (
                        <div
                          key={problem.id}
                          className="flex items-center justify-between py-2 hover:bg-gray-700 px-4 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <Circle
                              size={14}
                              className={
                                true ? "text-gray-300" : "text-green-400"
                              }
                              // onClick={() => toggleCompletion(problem.id)}
                            />
                            {console.log("problem.url", problem.url)}
                            <a
                              className="text-sm text-white"
                              href={problem.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {problem.title}
                            </a>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span
                              className={getDifficultyColor(problem.difficulty)}
                            >
                              {problem.difficulty}
                            </span>
                            <span className="text-gray-400">
                              {problem.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {notesPopup.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Notes for {notesPopup.subtopic.title}
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setNotesPopup({ show: false, subtopic: null })}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="relative">
                {/* Copy Button */}
                <button
                  className="absolute top-2 right-2 bg-green-800 text-white px-3 py-1 rounded text-sm hover:bg-orange-600"
                  onClick={() => {
                    navigator.clipboard.writeText(notesPopup.subtopic.notes);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
                  }}
                >
                  <Copy size={16} />
                </button>

                {/* Code Block */}
                <div className="text-white rounded-lg p-1 overflow-auto">
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-6">
                    {copied && (
                      <span className="ml-2 text-green-500 text-sm font-medium">
                        Copied!
                      </span>
                    )}
                    <code
                      dangerouslySetInnerHTML={{
                        __html: notesPopup.subtopic.notes.replace(
                          /(\/\/[^\n]*)/g,
                          '<span class="comment">$1</span>'
                        ), // Highlight comments
                      }}
                    />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DsaMainPage;
