import React, { useState } from 'react';
import { ChevronDown, ArrowUp, Circle, CheckCircle, ChevronRight } from 'lucide-react';

const CourseCurriculum = () => {
  const [expandedLecture, setExpandedLecture] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [completedItems, setCompletedItems] = useState([]);
  
  const lectures = [
    {
      id: 1,
      title: 'Things to Know in C++/Java/Python or any language',
      progress: 0,
      total: 9,
      topics: [
        {
          id: 'q1_1',
          title: 'Time Complexity and Space Complexity',
          difficulty: 'Easy',
          estimatedTime: '20 min',
          subtopics: []
        },
        {
          id: 'q1_2',
          title: 'Arrays, Strings and basic implementation',
          difficulty: 'Easy',
          estimatedTime: '30 min',
          subtopics: [
            {
              id: 'array_1',
              title: 'Sliding Window Technique',
              problems: [
                { id: 'sw_1', title: 'Maximum Sum Subarray of size K', difficulty: 'Easy', time: '15 min' },
                { id: 'sw_2', title: 'First Negative Number in Window', difficulty: 'Easy', time: '20 min' },
                { id: 'sw_3', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', time: '25 min' }
              ]
            },
            {
              id: 'array_2',
              title: 'Two Pointer Technique',
              problems: [
                { id: 'tp_1', title: 'Container With Most Water', difficulty: 'Medium', time: '20 min' },
                { id: 'tp_2', title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', time: '15 min' },
                { id: 'tp_3', title: '3Sum Problem', difficulty: 'Medium', time: '30 min' }
              ]
            },
            {
              id: 'array_3',
              title: 'Kadane\'s Algorithm',
              problems: [
                { id: 'ka_1', title: 'Maximum Subarray Sum', difficulty: 'Easy', time: '20 min' },
                { id: 'ka_2', title: 'Maximum Circular Subarray Sum', difficulty: 'Medium', time: '25 min' }
              ]
            }
          ]
        },
        // ... other topics
      ]
    },
    // ... other lectures
  ];

  const toggleCompletion = (itemId) => {
    setCompletedItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#efe7e7]  p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-orange-500">Step 1: Learn the basics</h1>
          <div className="flex items-center gap-2">
            <span>{completedItems.length} completed</span>
            <button className="p-2 bg-orange-900 rounded-md hover:bg-orange-800 transition-colors">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {lectures.map((lecture) => (
            <div key={lecture.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-700 transition-colors"
                onClick={() => setExpandedLecture(expandedLecture === lecture.id ? null : lecture.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg">Lec {lecture.id}:</span>
                  <span className="text-lg">{lecture.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <ChevronDown 
                    className={`transition-transform ${expandedLecture === lecture.id ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </div>
              </button>
              
              {expandedLecture === lecture.id && (
                <div className="bg-gray-750 border-t border-gray-700">
                  {lecture.topics.map((topic) => (
                    <div key={topic.id} className="border-b border-gray-700">
                      <button
                        className={`w-full px-6 py-4 flex justify-between items-center hover:bg-gray-700 transition-colors
                          ${topic.subtopics.length > 0 ? 'cursor-pointer' : ''}`}
                        onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                      >
                        <div className="flex items-center gap-4">
                          {topic.subtopics.length > 0 && (
                            <ChevronRight 
                              className={`transition-transform ${expandedTopic === topic.id ? 'rotate-90' : ''}`}
                              size={16}
                            />
                          )}
                          <Circle 
                            size={16} 
                            className={completedItems.includes(topic.id) ? 'text-green-500' : 'text-gray-400'}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCompletion(topic.id);
                            }}
                          />
                          <span>{topic.title}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className={getDifficultyColor(topic.difficulty)}>
                            {topic.difficulty}
                          </span>
                          <span className="text-gray-400">{topic.estimatedTime}</span>
                        </div>
                      </button>

                      {expandedTopic === topic.id && topic.subtopics.map((subtopic) => (
                        <div key={subtopic.id} className="pl-12 pr-6 py-2 bg-gray-800">
                          <div className="font-medium text-orange-400 mb-2">{subtopic.title}</div>
                          {subtopic.problems.map((problem) => (
                            <div 
                              key={problem.id}
                              className="flex items-center justify-between py-2 hover:bg-gray-700 px-4 rounded-lg"
                            >
                              <div className="flex items-center gap-4">
                                <Circle 
                                  size={14} 
                                  className={completedItems.includes(problem.id) ? 'text-green-500' : 'text-gray-400'}
                                  onClick={() => toggleCompletion(problem.id)}
                                />
                                <span className="text-sm text-white">{problem.title}</span>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <span className={getDifficultyColor(problem.difficulty)}>
                                  {problem.difficulty}
                                </span>
                                <span className="text-gray-400">{problem.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;