import React, { useState } from 'react';
import { ChevronDown, ArrowUp, Circle, CheckCircle } from 'lucide-react';

const CourseCurriculum = () => {
  const [expandedLecture, setExpandedLecture] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  
  const lectures = [
    {
      id: 1,
      title: 'Things to Know in C++/Java/Python or any language',
      progress: 0,
      total: 9,
      questions: [
        {
          id: 'q1_1',
          title: 'Time Complexity and Space Complexity',
          difficulty: 'Easy',
          estimatedTime: '20 min'
        },
        {
          id: 'q1_2',
          title: 'Arrays, Strings and basic implementation',
          difficulty: 'Easy',
          estimatedTime: '30 min'
        },
        {
          id: 'q1_3',
          title: 'Number Theory (Basic)',
          difficulty: 'Medium',
          estimatedTime: '45 min'
        },
        {
          id: 'q1_4',
          title: 'Sorting Algorithms and their time complexities',
          difficulty: 'Medium',
          estimatedTime: '40 min'
        },
        {
          id: 'q1_5',
          title: 'Basic knowledge about trees',
          difficulty: 'Easy',
          estimatedTime: '25 min'
        },
        {
          id: 'q1_6',
          title: 'Basic knowledge about graphs',
          difficulty: 'Medium',
          estimatedTime: '35 min'
        },
        {
          id: 'q1_7',
          title: 'Knowledge of basic data structures',
          difficulty: 'Easy',
          estimatedTime: '30 min'
        },
        {
          id: 'q1_8',
          title: 'Basic Dynamic Programming',
          difficulty: 'Hard',
          estimatedTime: '50 min'
        },
        {
          id: 'q1_9',
          title: 'Basic knowledge of searching',
          difficulty: 'Easy',
          estimatedTime: '25 min'
        }
      ]
    },
    {
      id: 2,
      title: 'Build-up Logical Thinking',
      progress: 0,
      total: 1,
      questions: []
    },
    // ... other lectures remain the same
  ];

  const toggleQuestionComplete = (questionId) => {
    setCompletedQuestions(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-400';
      case 'medium':
        return 'text-yellow-400';
      case 'hard':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#efe7e7]  p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-orange-500">Step 1: Learn the basics</h1>
          <div className="flex items-center gap-2">
            <span>{completedQuestions.length}/{lectures.reduce((acc, lec) => acc + lec.total, 0)}</span>
            <button 
              className="p-2 bg-orange-900 rounded-md hover:bg-orange-800 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {lectures.map((lecture) => (
            <div
              key={lecture.id}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-700 transition-colors"
                onClick={() => setExpandedLecture(expandedLecture === lecture.id ? null : lecture.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg">Lec {lecture.id}:</span>
                  <span className="text-lg">{lecture.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>
                    {lecture.questions.filter(q => completedQuestions.includes(q.id)).length}/{lecture.total}
                  </span>
                  <ChevronDown 
                    className={`transition-transform ${expandedLecture === lecture.id ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </div>
              </button>
              
              {expandedLecture === lecture.id && (
                <div className="px-6 py-4 bg-gray-750 border-t border-gray-700">
                  <div className="space-y-4">
                    {lecture.questions.map((question) => (
                      <div 
                        key={question.id}
                        className="flex items-center justify-between py-2 border-b border-gray-700 group"
                      >
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => toggleQuestionComplete(question.id)}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            {completedQuestions.includes(question.id) 
                              ? <CheckCircle className="text-green-500" size={20} />
                              : <Circle size={20} />
                            }
                          </button>
                          <span className={`${completedQuestions.includes(question.id) ? 'line-through text-gray-500' : 'text-white'}`}>
                            {question.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className={`${getDifficultyColor(question.difficulty)}`}>
                            {question.difficulty}
                          </span>
                          <span className="text-gray-400">
                            {question.estimatedTime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
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