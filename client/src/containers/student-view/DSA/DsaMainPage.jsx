import React, { useState } from "react";
import { ChevronDown, ArrowUp, Circle} from "lucide-react";

const DsaMainPage = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [completedItems, setCompletedItems] = useState([]);
  
  const Topics = [
    {
      id: '1',
      title: 'Time and Space Complexity',
      difficulty: 'Easy', 
      estimatedTime: '25 min',
      progress: 0,
      total: 5,
      subtopics: [
        {
          id: 'complexity_1',
          title: 'Understanding Big O Notation',
          problems: [
            { id: 'bo_1', title: 'Analyzing Time Complexity', difficulty: 'Easy', time: '10 min' },
            { id: 'bo_2', title: 'Analyzing Space Complexity', difficulty: 'Easy', time: '10 min' },
            { id: 'bo_3', title: 'Best, Average and Worst Cases', difficulty: 'Medium', time: '15 min' }
          ]
        },
        {
          id: 'complexity_2',
          title: 'Common Complexity Classes',
          problems: [
            { id: 'cc_1', title: 'Constant, Linear and Quadratic Time', difficulty: 'Easy', time: '15 min' },
            { id: 'cc_2', title: 'Logarithmic and Linearithmic Time', difficulty: 'Medium', time: '15 min' }
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Arrays',
      difficulty: 'Easy',
      estimatedTime: '30 min',
      progress: 0,
      total: 15,
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
    {
      id: '3',
      title: 'Strings',
      difficulty: 'Easy',
      estimatedTime: '35 min',
      progress: 0,
      total: 15,
      subtopics: [
        {
          id: 'str_1',
          title: 'Basic String Operations',
          problems: [
            { id: 'bs_1', title: 'Reverse String', difficulty: 'Easy', time: '10 min' },
            { id: 'bs_2', title: 'Valid Palindrome', difficulty: 'Easy', time: '15 min' },
            { id: 'bs_3', title: 'String to Integer (atoi)', difficulty: 'Medium', time: '20 min' }
          ]
        },
        {
          id: 'str_2',
          title: 'Pattern Matching',
          problems: [
            { id: 'pm_1', title: 'Implement strStr()', difficulty: 'Easy', time: '20 min' },
            { id: 'pm_2', title: 'Longest Common Prefix', difficulty: 'Easy', time: '15 min' },
            { id: 'pm_3', title: 'Regular Expression Matching', difficulty: 'Hard', time: '30 min' }
          ]
        },
        {
          id: 'str_3',
          title: 'String Manipulation',
          problems: [
            { id: 'sm_1', title: 'Generate Parentheses', difficulty: 'Medium', time: '25 min' },
            { id: 'sm_2', title: 'Letter Combinations of Phone Number', difficulty: 'Medium', time: '25 min' },
            { id: 'sm_3', title: 'Group Anagrams', difficulty: 'Medium', time: '20 min' }
          ]
        }
      ]
    },
    {
      id: '4',
      title: 'Sorting',
      difficulty: 'Medium',
      estimatedTime: '45 min', 
      progress: 0,
      total: 15,
      subtopics: [
        {
          id: 'sort_1',
          title: 'Basic Sorting',
          problems: [
            { id: 'bs_1', title: 'Bubble Sort Implementation', difficulty: 'Easy', time: '15 min' },
            { id: 'bs_2', title: 'Selection Sort Implementation', difficulty: 'Easy', time: '15 min' },
            { id: 'bs_3', title: 'Insertion Sort Implementation', difficulty: 'Easy', time: '15 min' }
          ]
        },
        {
          id: 'sort_2', 
          title: 'Advanced Sorting',
          problems: [
            { id: 'as_1', title: 'Merge Sort Implementation', difficulty: 'Medium', time: '25 min' },
            { id: 'as_2', title: 'Quick Sort Implementation', difficulty: 'Medium', time: '25 min' },
            { id: 'as_3', title: 'Heap Sort Implementation', difficulty: 'Medium', time: '25 min' }
          ]
        },
        {
          id: 'sort_3',
          title: 'Sorting Problems',
          problems: [
            { id: 'sp_1', title: 'Sort Colors', difficulty: 'Medium', time: '20 min' },
            { id: 'sp_2', title: 'Merge Intervals', difficulty: 'Medium', time: '25 min' },
            { id: 'sp_3', title: 'Kth Largest Element', difficulty: 'Medium', time: '20 min' }
          ]
        }
      ]
    },
    
    {
      id: '5',
      title: 'Stack',
      difficulty: 'Easy',
      estimatedTime: '40 min',
      progress: 0,
      total: 12,
      subtopics: [
        {
          id: 'stack_1',
          title: 'Basic Stack Operations',
          problems: [
            { id: 'st_1', title: 'Implement Stack using Array', difficulty: 'Easy', time: '15 min' },
            { id: 'st_2', title: 'Valid Parentheses', difficulty: 'Easy', time: '15 min' },
            { id: 'st_3', title: 'Min Stack Implementation', difficulty: 'Medium', time: '20 min' }
          ]
        },
        {
          id: 'stack_2',
          title: 'Stack Applications',
          problems: [
            { id: 'sa_1', title: 'Next Greater Element', difficulty: 'Medium', time: '20 min' },
            { id: 'sa_2', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', time: '25 min' },
            { id: 'sa_3', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', time: '30 min' }
          ]
        },
        {
          id: 'stack_3',
          title: 'Advanced Stack Problems',
          problems: [
            { id: 'asp_1', title: 'Basic Calculator', difficulty: 'Medium', time: '25 min' },
            { id: 'asp_2', title: 'Remove All Adjacent Duplicates', difficulty: 'Easy', time: '20 min' },
            { id: 'asp_3', title: 'Daily Temperatures', difficulty: 'Medium', time: '25 min' }
          ]
        }
      ]
    },
    {
      id: '6',
      title: 'Queue',
      difficulty: 'Easy', 
      estimatedTime: '40 min',
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'queue_1',
          title: 'Basic Queue Operations',
          problems: [
            { id: 'q_1', title: 'Implement Queue using Array', difficulty: 'Easy', time: '15 min' },
            { id: 'q_2', title: 'Implement Queue using Stacks', difficulty: 'Medium', time: '20 min' },
            { id: 'q_3', title: 'Circular Queue Implementation', difficulty: 'Medium', time: '20 min' }
          ]
        },
        {
          id: 'queue_2', 
          title: 'Queue Applications',
          problems: [
            { id: 'qa_1', title: 'First Unique Character', difficulty: 'Easy', time: '15 min' },
            { id: 'qa_2', title: 'Number of Recent Calls', difficulty: 'Easy', time: '15 min' },
            { id: 'qa_3', title: 'Design Hit Counter', difficulty: 'Medium', time: '25 min' }
          ]
        },
        {
          id: 'queue_3',
          title: 'Advanced Queue Problems',
          problems: [
            { id: 'aq_1', title: 'Sliding Window Maximum', difficulty: 'Hard', time: '30 min' },
            { id: 'aq_2', title: 'Design Circular Deque', difficulty: 'Medium', time: '25 min' },
            { id: 'aq_3', title: 'Task Scheduler', difficulty: 'Medium', time: '25 min' }
          ]
        }
      ]
    },
    {
      id: '7',
      title: 'Hashing',
      difficulty: 'Medium',
      estimatedTime: '45 min', 
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'hash_1',
          title: 'Basic Hashing Concepts',
          problems: [
            { id: 'h_1', title: 'Design HashMap', difficulty: 'Easy', time: '20 min' },
            { id: 'h_2', title: 'Design HashSet', difficulty: 'Easy', time: '20 min' },
            { id: 'h_3', title: 'Implement Hash Function', difficulty: 'Medium', time: '25 min' }
          ]
        },
        {
          id: 'hash_2',
          title: 'Hash Table Applications',
          problems: [
            { id: 'ha_1', title: 'Two Sum', difficulty: 'Easy', time: '15 min' },
            { id: 'ha_2', title: 'Group Anagrams', difficulty: 'Medium', time: '25 min' },
            { id: 'ha_3', title: 'Longest Consecutive Sequence', difficulty: 'Medium', time: '25 min' }
          ]
        },
        {
          id: 'hash_3',
          title: 'Advanced Hashing Problems',
          problems: [
            { id: 'ah_1', title: 'LRU Cache', difficulty: 'Medium', time: '30 min' },
            { id: 'ah_2', title: 'Subarray Sum Equals K', difficulty: 'Medium', time: '25 min' },
            { id: 'ah_3', title: 'Copy List with Random Pointer', difficulty: 'Hard', time: '30 min' }
          ]
        }
      ]
    },
    {
      id: '8',
      title: 'Recursion',
      difficulty: 'Medium', 
      estimatedTime: '60 min',
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'rec_1',
          title: 'Basic Recursion',
          problems: [
            { id: 'br_1', title: 'Factorial', difficulty: 'Easy', time: '15 min' },
            { id: 'br_2', title: 'Fibonacci Number', difficulty: 'Easy', time: '15 min' },
            { id: 'br_3', title: 'Power Function', difficulty: 'Easy', time: '20 min' }
          ]
        },
        {
          id: 'rec_2', 
          title: 'Recursive Backtracking',
          problems: [
            { id: 'rb_1', title: 'Generate Parentheses', difficulty: 'Medium', time: '25 min' },
            { id: 'rb_2', title: 'Subsets', difficulty: 'Medium', time: '25 min' },
            { id: 'rb_3', title: 'Permutations', difficulty: 'Medium', time: '25 min' }
          ]
        },
        {
          id: 'rec_3',
          title: 'Advanced Recursion',
          problems: [
            { id: 'ar_1', title: 'N-Queens Problem', difficulty: 'Hard', time: '35 min' },
            { id: 'ar_2', title: 'Sudoku Solver', difficulty: 'Hard', time: '35 min' },
            { id: 'ar_3', title: 'Word Search II', difficulty: 'Hard', time: '35 min' }
          ]
        }
      ]
    },
    {
      id: '9',
      title: 'Backtracking',
      difficulty: 'Hard',
      estimatedTime: '90 min', 
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'bt_1',
          title: 'Basic Backtracking',
          problems: [
            { id: 'bb_1', title: 'Letter Combinations of Phone Number', difficulty: 'Medium', time: '25 min' },
            { id: 'bb_2', title: 'Combination Sum', difficulty: 'Medium', time: '25 min' },
            { id: 'bb_3', title: 'Word Search', difficulty: 'Medium', time: '30 min' }
          ]
        },
        {
          id: 'bt_2',
          title: 'Intermediate Backtracking',
          problems: [
            { id: 'ib_1', title: 'Palindrome Partitioning', difficulty: 'Medium', time: '30 min' },
            { id: 'ib_2', title: 'Path With Maximum Gold', difficulty: 'Medium', time: '30 min' },
            { id: 'ib_3', title: 'Restore IP Addresses', difficulty: 'Medium', time: '30 min' }
          ]
        },
        {
          id: 'bt_3',
          title: 'Advanced Backtracking',
          problems: [
            { id: 'ab_1', title: 'Expression Add Operators', difficulty: 'Hard', time: '35 min' },
            { id: 'ab_2', title: 'Remove Invalid Parentheses', difficulty: 'Hard', time: '35 min' },
            { id: 'ab_3', title: 'Regular Expression Matching', difficulty: 'Hard', time: '35 min' }
          ]
        }
      ]
    },
    {
      id: '10',
      title: 'Divide and Conquer',
      difficulty: 'Medium',
      estimatedTime: '90 min',
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'dc_1', 
          title: 'Basic Divide and Conquer',
          problems: [
            { id: 'bdc_1', title: 'Binary Search', difficulty: 'Easy', time: '20 min' },
            { id: 'bdc_2', title: 'Merge Sort', difficulty: 'Medium', time: '25 min' },
            { id: 'bdc_3', title: 'Quick Sort', difficulty: 'Medium', time: '25 min' }
          ]
        },
        {
          id: 'dc_2',
          title: 'Intermediate Divide and Conquer',
          problems: [
            { id: 'idc_1', title: 'Count of Range Sum', difficulty: 'Medium', time: '30 min' },
            { id: 'idc_2', title: 'Different Ways to Add Parentheses', difficulty: 'Medium', time: '30 min' },
            { id: 'idc_3', title: 'Beautiful Array', difficulty: 'Medium', time: '30 min' }
          ]
        },
        {
          id: 'dc_3',
          title: 'Advanced Divide and Conquer',
          problems: [
            { id: 'adc_1', title: 'Burst Balloons', difficulty: 'Hard', time: '35 min' },
            { id: 'adc_2', title: 'Count of Smaller Numbers After Self', difficulty: 'Hard', time: '35 min' },
            { id: 'adc_3', title: 'Reverse Pairs', difficulty: 'Hard', time: '35 min' }
          ]
        }
      ]
    },
    {
      id: '11',
      title: 'Trees',
      difficulty: 'Medium',
      estimatedTime: '120 min', 
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'tr_1',
          title: 'Basic Tree Operations',
          problems: [
            { id: 'bt_1', title: 'Binary Tree Traversal', difficulty: 'Easy', time: '25 min' },
            { id: 'bt_2', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', time: '20 min' },
            { id: 'bt_3', title: 'Symmetric Tree', difficulty: 'Easy', time: '25 min' }
          ]
        },
        {
          id: 'tr_2',
          title: 'Intermediate Tree Problems',
          problems: [
            { id: 'it_1', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', time: '30 min' },
            { id: 'it_2', title: 'Construct Binary Tree from Preorder and Inorder', difficulty: 'Medium', time: '35 min' },
            { id: 'it_3', title: 'Binary Tree Maximum Path Sum', difficulty: 'Medium', time: '30 min' }
          ]
        },
        {
          id: 'tr_3',
          title: 'Advanced Tree Concepts',
          problems: [
            { id: 'at_1', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', time: '40 min' },
            { id: 'at_2', title: 'Binary Tree Cameras', difficulty: 'Hard', time: '35 min' },
            { id: 'at_3', title: 'Recovery Binary Search Tree', difficulty: 'Hard', time: '40 min' }
          ]
        }
      ]
    },
    {
      id: '12',
      title: 'Graphs',
      difficulty: 'Hard',
      estimatedTime: '150 min',
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'gr_1', 
          title: 'Graph Basics',
          problems: [
            { id: 'gb_1', title: 'DFS and BFS Implementation', difficulty: 'Easy', time: '30 min' },
            { id: 'gb_2', title: 'Number of Islands', difficulty: 'Medium', time: '25 min' },
            { id: 'gb_3', title: 'Clone Graph', difficulty: 'Medium', time: '30 min' }
          ]
        },
        {
          id: 'gr_2',
          title: 'Shortest Path Algorithms',
          problems: [
            { id: 'sp_1', title: 'Network Delay Time', difficulty: 'Medium', time: '35 min' },
            { id: 'sp_2', title: 'Cheapest Flights Within K Stops', difficulty: 'Medium', time: '35 min' },
            { id: 'sp_3', title: 'Path With Minimum Effort', difficulty: 'Medium', time: '35 min' }
          ]
        },
        {
          id: 'gr_3',
          title: 'Advanced Graph Problems',
          problems: [
            { id: 'ag_1', title: 'Critical Connections in a Network', difficulty: 'Hard', time: '40 min' },
            { id: 'ag_2', title: 'Alien Dictionary', difficulty: 'Hard', time: '40 min' },
            { id: 'ag_3', title: 'Bus Routes', difficulty: 'Hard', time: '35 min' }
          ]
        }
      ]
    },
    {
      id: '13',
      title: 'Dynamic Programming',
      difficulty: 'Hard',
      estimatedTime: '180 min', 
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'dp_1',
          title: 'Basic DP Concepts',
          problems: [
            { id: 'dp_b1', title: 'Climbing Stairs', difficulty: 'Easy', time: '25 min' },
            { id: 'dp_b2', title: 'House Robber', difficulty: 'Medium', time: '30 min' },
            { id: 'dp_b3', title: 'Coin Change', difficulty: 'Medium', time: '35 min' }
          ]
        },
        {
          id: 'dp_2', 
          title: 'String DP Problems',
          problems: [
            { id: 'dp_s1', title: 'Longest Common Subsequence', difficulty: 'Medium', time: '35 min' },
            { id: 'dp_s2', title: 'Edit Distance', difficulty: 'Medium', time: '35 min' },
            { id: 'dp_s3', title: 'Distinct Subsequences', difficulty: 'Hard', time: '40 min' }
          ]
        },
        {
          id: 'dp_3',
          title: 'Advanced DP Problems',
          problems: [
            { id: 'dp_a1', title: 'Best Time to Buy and Sell Stock IV', difficulty: 'Hard', time: '40 min' },
            { id: 'dp_a2', title: 'Burst Balloons', difficulty: 'Hard', time: '40 min' },
            { id: 'dp_a3', title: 'Regular Expression Matching', difficulty: 'Hard', time: '40 min' }
          ]
        }
      ]
    },
    {
      id: '14',
      title: 'Greedy Algorithms',
      difficulty: 'Medium',
      estimatedTime: '120 min',
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'gr_1',
          title: 'Basic Greedy Problems',
          problems: [
            { id: 'gr_b1', title: 'Jump Game', difficulty: 'Medium', time: '30 min' },
            { id: 'gr_b2', title: 'Gas Station', difficulty: 'Medium', time: '30 min' },
            { id: 'gr_b3', title: 'Task Scheduler', difficulty: 'Medium', time: '35 min' }
          ]
        },
        {
          id: 'gr_2',
          title: 'Interval Problems',
          problems: [
            { id: 'gr_i1', title: 'Merge Intervals', difficulty: 'Medium', time: '30 min' },
            { id: 'gr_i2', title: 'Non-overlapping Intervals', difficulty: 'Medium', time: '35 min' },
            { id: 'gr_i3', title: 'Meeting Rooms II', difficulty: 'Medium', time: '35 min' }
          ]
        },
        {
          id: 'gr_3',
          title: 'Advanced Greedy Problems',
          problems: [
            { id: 'gr_a1', title: 'Maximum Subarray', difficulty: 'Medium', time: '30 min' },
            { id: 'gr_a2', title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium', time: '35 min' },
            { id: 'gr_a3', title: 'Queue Reconstruction by Height', difficulty: 'Hard', time: '40 min' }
          ]
        }
      ]
    },
    {
      id: '15',
      title: 'Trie Data Structure',
      difficulty: 'Medium',
      estimatedTime: '120 min', 
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'trie_1',
          title: 'Basic Trie Operations',
          problems: [
            { id: 'trie_b1', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', time: '35 min' },
            { id: 'trie_b2', title: 'Design Add and Search Words Data Structure', difficulty: 'Medium', time: '35 min' },
            { id: 'trie_b3', title: 'Replace Words', difficulty: 'Medium', time: '30 min' }
          ]
        },
        {
          id: 'trie_2', 
          title: 'Word Search Problems',
          problems: [
            { id: 'trie_w1', title: 'Word Search II', difficulty: 'Hard', time: '45 min' },
            { id: 'trie_w2', title: 'Word Break', difficulty: 'Medium', time: '35 min' },
            { id: 'trie_w3', title: 'Word Break II', difficulty: 'Hard', time: '40 min' }
          ]
        },
        {
          id: 'trie_3',
          title: 'Advanced Trie Problems',
          problems: [
            { id: 'trie_a1', title: 'Maximum XOR of Two Numbers in an Array', difficulty: 'Medium', time: '35 min' },
            { id: 'trie_a2', title: 'Concatenated Words', difficulty: 'Hard', time: '40 min' },
            { id: 'trie_a3', title: 'Stream of Characters', difficulty: 'Hard', time: '40 min' }
          ]
        }
      ]
    },
    {
      id: '16',
      title: 'Binary Search Trees',
      difficulty: 'Medium',
      estimatedTime: '120 min',
      progress: 0,
      total: 9,
      subtopics: [
        {
          id: 'bst_1',
          title: 'BST Fundamentals',
          problems: [
            { id: 'bst_f1', title: 'Validate Binary Search Tree', difficulty: 'Easy', time: '25 min' },
            { id: 'bst_f2', title: 'Search in a Binary Search Tree', difficulty: 'Easy', time: '20 min' },
            { id: 'bst_f3', title: 'Insert into a Binary Search Tree', difficulty: 'Easy', time: '25 min' }
          ]
        },
        {
          id: 'bst_2',
          title: 'BST Operations',
          problems: [
            { id: 'bst_o1', title: 'Delete Node in a BST', difficulty: 'Medium', time: '30 min' },
            { id: 'bst_o2', title: 'Convert Sorted Array to BST', difficulty: 'Medium', time: '25 min' },
            { id: 'bst_o3', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', time: '30 min' }
          ]
        },
        {
          id: 'bst_3',
          title: 'Advanced BST Problems',
          problems: [
            { id: 'bst_a1', title: 'Binary Search Tree Iterator', difficulty: 'Hard', time: '35 min' },
            { id: 'bst_a2', title: 'Recover Binary Search Tree', difficulty: 'Hard', time: '40 min' },
            { id: 'bst_a3', title: 'Unique Binary Search Trees II', difficulty: 'Hard', time: '35 min' }
          ]
        }
      ]
    },
    
  ]

  const totalProgress = Topics.reduce(
    (acc, Topic) => acc + Topic.progress,
    0
  );
  const totalItems = Topics.reduce((acc, Topic) => acc + Topic.total, 0);
  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-white';
    }
  };
  const toggleCompletion = (itemId) => {
    setCompletedItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
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
                    {console.log("Topic",Topic)}
              {expandedTopic === Topic.id && (
                <div className="px-6 py-4 bg-gray-750 border-t border-gray-700">
                  {Topic.subtopics.map((subtopic) => (
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
                                  className={true ? 'text-gray-300' : 'text-green-400'}
                                  // onClick={() => toggleCompletion(problem.id)}
                                />
                                <span className="text-sm text-white">{problem.title}</span>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <span 
                                className={getDifficultyColor(problem.difficulty)}
                                >
                                  {problem.difficulty}
                                </span>
                                <span className="text-gray-400">{problem.time}</span>
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
      </div>
    </div>
  );
};

export default DsaMainPage;
