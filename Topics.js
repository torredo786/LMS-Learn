export const Topics = [
  {
    id: "1",
    title: "Time and Space Complexity",
    difficulty: "Easy",
    estimatedTime: "25 min",
    progress: 0,
    total: 5,
    subtopics: [
      {
        id: "complexity_1",
        title: "Understanding Big O Notation",
        problems: [
          {
            id: "bo_1",
            title: "Analyzing Time Complexity",
            difficulty: "Easy",
            time: "10 min",
          },
          {
            id: "bo_2",
            title: "Analyzing Space Complexity",
            difficulty: "Easy",
            time: "10 min",
          },
          {
            id: "bo_3",
            title: "Best, Average and Worst Cases",
            difficulty: "Medium",
            time: "15 min",
          },
        ],
      },
      {
        id: "complexity_2",
        title: "Common Complexity Classes",
        problems: [
          {
            id: "cc_1",
            title: "Constant, Linear and Quadratic Time",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "cc_2",
            title: "Logarithmic and Linearithmic Time",
            difficulty: "Medium",
            time: "15 min",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Arrays",
    difficulty: "Easy",
    estimatedTime: "30 min",
    progress: 0,
    total: 41,
    subtopics: [
      {
        id: "array_1",
        title: "Sliding Window Technique",
        problems: [
          {
            id: "sw_1",
            title: "Longest Substring Without Repeating Characters",
            url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "sw_2",
            title: "Minimum Size Subarray Sum",
            url: "https://leetcode.com/problems/minimum-size-subarray-sum/description/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "sw_3",
            title: "Sliding Window Maximum",
            url: "https://leetcode.com/problems/sliding-window-maximum/",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "sw_4",
            title: "Permutation in String",
            url: "https://leetcode.com/problems/permutation-in-string/",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
        notes: `
        //arr = [1, 2, 3, 4, 5, 6] k = 3 ; o/p: 15
        function maxSumSubarray(arr, k):
            if k > length of arr:
                return 0  // Invalid input case
            window_sum = 0
            max_sum = 0
            // Step 1: Compute the sum of the first window (first k elements)
            for i = 0 to k-1:
                window_sum += arr[i]
            // Step 2: Slide the window across the array
            max_sum = window_sum  // Initialize max_sum with the sum of the first window
            for i = k to length of arr - 1:
                // Slide the window: subtract the element going out of the window, add the element coming into the window
                window_sum = window_sum - arr[i - k] + arr[i]
                // Update the max_sum if we get a larger sum
                max_sum = max(max_sum, window_sum)
            return max_sum
        `,
      },
      {
        id: "array_2",
        title: "Two Pointer Technique",
        problems: [
          {
            id: "tp_1",
            title: "Remove Duplicates from Sorted Array",
            url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "tp_2",
            title: "Two Sum II - Input Array Is Sorted",
            url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            difficulty: "Medium",
            time: "20 min",
          },

          {
            id: "tp_3",
            title: "3sum",
            url: "https://leetcode.com/problems/3sum/description/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "tp_4",
            title: "3Sum Closest",
            url: "https://leetcode.com/problems/3sum-closest/",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "tp_5",
            title: "4Sum",
            url: "https://leetcode.com/problems/4sum/description/",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "tp_6",
            title: "Container With Most Water",
            url: "https://leetcode.com/problems/container-with-most-water/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "tp_7",
            title: "Trapping Rain Water",
            url: "https://leetcode.com/problems/trapping-rain-water/",
            difficulty: "Hard",
            time: "30 min",
          },
        ],
        notes: `
            //arr = [1, 2, 3, 4, 5, 6] target = 10; o/p: true
            function findPairWithSum(arr, target):
                left = 0  // Start pointer at the beginning
                right = length of arr - 1  // End pointer at the end
                while left < right:
                    current_sum = arr[left] + arr[right]
                    if current_sum == target:
                        return true  // Pair found with sum equal to target
                    if current_sum < target:
                        left++  // Move the left pointer to the right to increase the sum
                    else:
                        right--  // Move the right pointer to the left to decrease the sum
                return false  // No pair found
        `,
      },
      {
        id: "array_3",
        title: "Prefix sum",
        problems: [
          {
            id: "ps_1",
            title: "Running Sum of 1d Array",
            url: "https://leetcode.com/problems/running-sum-of-1d-array/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ps_2",
            title: "Range Sum Query - Immutable",
            url: "https://leetcode.com/problems/range-sum-query-immutable/description/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ps_3",
            title: "Find Pivot Index",
            url: "https://leetcode.com/problems/find-pivot-index/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ps_4",
            title: "Find Subarray Sum Equals K",
            url: "https://leetcode.com/problems/subarray-sum-equals-k/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "ps_5",
            title: "Subarray Sum Divisible by K",
            url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "ps_6",
            title: "Contiguous Array",
            url: "https://leetcode.com/problems/contiguous-array/description/",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
        notes: `
            //arr = [3, 4, 2, 1, 5] ; prefixSum = [3, 7, 9, 10, 15]
            //getSubarraySum(prefixSum, 1, 3) = prefixSum[3] - prefixSum[0] = 10 - 3 = 7
            function buildPrefixSum(arr):
                n = length of arr
                prefixSum = new array of size n
                prefixSum[0] = arr[0]  // Initialize the first element
                for i = 1 to n - 1:
                    prefixSum[i] = prefixSum[i - 1] + arr[i]  // Cumulative sum
                return prefixSum

            function getSubarraySum(prefixSum, l, r):
                if l == 0:
                    return prefixSum[r]  // Sum from the start to index r
                else:
                    return prefixSum[r] - prefixSum[l - 1]  // Sum from index l to r
        `,
      },
      {
        id: "array_4",
        title: "Kadane's Algorithm",
        problems: [
          {
            id: "ka_1",
            title: "Maximum Subarray",
            url: "https://leetcode.com/problems/maximum-subarray/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ka_2",
            title: "Maximum Product Subarray",
            url: "https://leetcode.com/problems/maximum-product-subarray/description/",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ka_3",
            title: "Jump Game",
            url: "https://leetcode.com/problems/jump-game/description/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "ka_4",
            title: "House Robber",
            url: "https://leetcode.com/problems/house-robber/description/",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
        notes: `
            //arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4] ; Max Sum Subarray = 6
            function kadane(arr):
                maxEndingHere = arr[0]  // Initialize with the first element
                maxSoFar = arr[0]       // Initialize with the first element

                for i = 1 to length(arr) - 1:
                    maxEndingHere = max(arr[i], maxEndingHere + arr[i])  // Update max sum at current position
                    maxSoFar = max(maxSoFar, maxEndingHere)  // Update overall maximum sum

                return maxSoFar
        `,
      },
      {
        id: "array_5",
        title: "Binary Search",
        problems: [
          {
            id: "ka_1",
            title: "Binary Search",
            url: "https://leetcode.com/problems/binary-search/description/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ka_2",
            title: "Search Insert Position",
            url: "https://leetcode.com/problems/search-insert-position/description/",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ka_3",
            title: "Find Minimum in Rotated Sorted Array",
            url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "ka_4",
            title: "Split Array Largest Sum",
            url: "https://leetcode.com/problems/split-array-largest-sum/description/",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
        notes: `
            //arr = [1, 2, 3, 4, 5, 6] target = 10; o/p: true
            function binarySearch(arr, target):
                low = 0
                high = length(arr) - 1

                while low <= high:
                    mid = (low + high) // 2  // Calculate middle index
                    if arr[mid] == target:
                        return mid  // Target found at index mid
                    elif arr[mid] < target:
                        low = mid + 1  // Search in the right half
                    else:
                        high = mid - 1  // Search in the left half
                return -1  // Target not found
        `,
      },
      {
        id: "array_6",
        title: "Dutch National Flag",
        problems: [
          {
            id: "ka_1",
            title: "Sort Colors",
            url: "https://leetcode.com/problems/sort-colors/description/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ka_2",
            title: "Partition Labels",
            url: "https://leetcode.com/problems/partition-labels/description/",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ka_3",
            title: "Wiggle Sort II",
            url: "https://leetcode.com/problems/wiggle-sort-ii/description/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "ka_4",
            title: "Split Array Largest Sum",
            url: "https://leetcode.com/problems/split-array-largest-sum/description/",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
        notes: `
            //arr = [2, 0, 1, 2, 1, 0, 1, 2, 0] ; o/p: [0, 0, 0, 1, 1, 1, 2, 2, 2]
            function dutchNationalFlag(arr):
                low = 0
                mid = 0
                high = length(arr) - 1

                while mid <= high:
                    if arr[mid] == 0:
                        swap(arr[low], arr[mid])  // Move 0 to the beginning
                        low += 1
                        mid += 1
                    elif arr[mid] == 1:
                        mid += 1  // Keep 1 in the middle
                    else:  // arr[mid] == 2
                        swap(arr[mid], arr[high])  // Move 2 to the end
                        high -= 1   
        `,
      },
      {
        id: "array_7",
        title: "Merge Intervals",
        problems: [
          {
            id: "ka_1",
            title: "Merge Intervals",
            url: "https://leetcode.com/problems/merge-intervals/description/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ka_2",
            title: "Non-overlapping Intervals",
            url: "https://leetcode.com/problems/non-overlapping-intervals/description/",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ka_3",
            title: "Insert Interval",
            url: "https://leetcode.com/problems/insert-interval/description/",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
        notes: `
            //intervals = [[1, 3], [2, 4], [5, 7], [6, 8], [8, 10]]
            //merged intervals = [[1, 4], [5, 10]]
            function mergeIntervals(intervals):
                if intervals is empty:
                    return []
                // Sort intervals by their start times
                sort(intervals, by: start)
                merged = [intervals[0]]  // Start with the first interval
                for i = 1 to length(intervals) - 1:
                    current = intervals[i]
                    lastMerged = merged[merged.length - 1]

                    // Check if the current interval overlaps with the last merged one
                    if current.start <= lastMerged.end:
                        // Merge the intervals by updating the end time of the last merged interval
                        lastMerged.end = max(lastMerged.end, current.end)
                    else:
                        // No overlap, add current interval to the result
                        merged.append(current)
                return merged
        `,
      },
      {
        id: "array_8",
        title: "Monotonic Stack/Queue",
        problems: [
          {
            id: "ka_1",
            title: "Next Greater Element I",
            url: "https://leetcode.com/problems/merge-intervals/description/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ka_2",
            title: "Daily Temperatures",
            url: "https://leetcode.com/problems/non-overlapping-intervals/description/",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ka_3",
            title: "Largest Rectangle in Histogram",
            url: "https://leetcode.com/problems/insert-interval/description/",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
        notes: `
        //Pseudocode for Monotonic Increasing Stack:
        //arr = [4, 3, 5, 2, 6]; Final stack (monotonically increasing): [2, 6]
        function monotonicStack(arr):
            stack = []
            result = []
            for i = 0 to length(arr) - 1:
                while stack is not empty and stack[top] >= arr[i]:
                    stack.pop()
                stack.push(arr[i])
            return result
        //Pseudocode for Monotonic Decreasing Queue:
        //arr = [1, 3, 1, 2, 5, 3, 6] ;k = 3  // window size
        //Max in each window: [3, 3, 5, 5, 6]
        function monotonicQueue(arr):
            queue = deque()
            result = []
            for i = 0 to length(arr) - 1:
                while queue is not empty and queue[back] <= arr[i]:
                    queue.pop()
                queue.push(arr[i])
            return result
        `,
      },
      {
        id: "array_9",
        title: "HashMap-Set",
        problems: [
          {
            id: "ka_1",
            title: "Find the Difference of Two Arrays",
            url: "https://leetcode.com/problems/find-the-difference-of-two-arrays/description",
            difficulty: "Easy",
            time: "20 min",
          },

          {
            id: "ka_2",
            title: "Longest Consecutive Sequence",
            url: "https://leetcode.com/problems/longest-consecutive-sequence/description/",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "ka_3",
            title: "Top K Frequent Elements",
            url: "https://leetcode.com/problems/top-k-frequent-elements/description/",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ka_4",
            title: "Group Anagrams",
            url: "https://leetcode.com/problems/group-anagrams/description/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "ka_5",
            title: "Isomorphic Strings",
            url: "https://leetcode.com/problems/isomorphic-strings/description/",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "ka_6",
            title: "Determine if Two Strings Are Close",
            url: "https://leetcode.com/problems/determine-if-two-strings-are-close/description/",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
        notes: `    
            1. Initialize an unordered_map ; unordered_map<KeyType, ValueType> map;
            2. Insert key-value pairs ; map[key] = value;
            3. Search for a key ; if map.find(key) != map.end(): // Key found, retrieve the value ; value = map[key];
            4. Delete a key-value pair ; map.erase(key);
            5. Iterate through all elements ; for each (key, value) in map: // Access key and value
            //in c++
            int main() {
                // Initialize an unordered_map
                std::unordered_map<int, std::string> map;
                // Insert some key-value pairs ; map[1] = "Apple";map[2] = "Banana";map[3] = "Cherry";
                // Search for a key
                if (map.find(2) != map.end()) {
                    std::cout << "Key 2: " << map[2] << std::endl;  // Output: Banana
                } else {
                    std::cout << "Key 2 not found." << std::endl;
                }
                for (const auto& pair : map) {
                    std::cout << pair.first << ": " << pair.second << std::endl;
                }
                return 0;
            }
        `,
      },
    ],
  },
  {
    id: "3",
    title: "Strings",
    difficulty: "Easy",
    estimatedTime: "35 min",
    progress: 0,
    total: 15,
    subtopics: [
      {
        id: "str_1",
        title: "Basic String Operations",
        problems: [
          {
            id: "bs_1",
            title: "Reverse String",
            difficulty: "Easy",
            time: "10 min",
          },
          {
            id: "bs_2",
            title: "Valid Palindrome",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "bs_3",
            title: "String to Integer (atoi)",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
      },
      {
        id: "str_2",
        title: "Pattern Matching",
        problems: [
          {
            id: "pm_1",
            title: "Implement strStr()",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "pm_2",
            title: "Longest Common Prefix",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "pm_3",
            title: "Regular Expression Matching",
            difficulty: "Hard",
            time: "30 min",
          },
        ],
      },
      {
        id: "str_3",
        title: "String Manipulation",
        problems: [
          {
            id: "sm_1",
            title: "Generate Parentheses",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "sm_2",
            title: "Letter Combinations of Phone Number",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "sm_3",
            title: "Group Anagrams",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Sorting",
    difficulty: "Medium",
    estimatedTime: "45 min",
    progress: 0,
    total: 15,
    subtopics: [
      {
        id: "sort_1",
        title: "Basic Sorting",
        problems: [
          {
            id: "bs_1",
            title: "Bubble Sort Implementation",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "bs_2",
            title: "Selection Sort Implementation",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "bs_3",
            title: "Insertion Sort Implementation",
            difficulty: "Easy",
            time: "15 min",
          },
        ],
      },
      {
        id: "sort_2",
        title: "Advanced Sorting",
        problems: [
          {
            id: "as_1",
            title: "Merge Sort Implementation",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "as_2",
            title: "Quick Sort Implementation",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "as_3",
            title: "Heap Sort Implementation",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
      {
        id: "sort_3",
        title: "Sorting Problems",
        problems: [
          {
            id: "sp_1",
            title: "Sort Colors",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "sp_2",
            title: "Merge Intervals",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "sp_3",
            title: "Kth Largest Element",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
      },
    ],
  },

  {
    id: "5",
    title: "Stack",
    difficulty: "Easy",
    estimatedTime: "40 min",
    progress: 0,
    total: 12,
    subtopics: [
      {
        id: "stack_1",
        title: "Basic Stack Operations",
        problems: [
          {
            id: "st_1",
            title: "Implement Stack using Array",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "st_2",
            title: "Valid Parentheses",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "st_3",
            title: "Min Stack Implementation",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
      },
      {
        id: "stack_2",
        title: "Stack Applications",
        problems: [
          {
            id: "sa_1",
            title: "Next Greater Element",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "sa_2",
            title: "Evaluate Reverse Polish Notation",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "sa_3",
            title: "Largest Rectangle in Histogram",
            difficulty: "Hard",
            time: "30 min",
          },
        ],
      },
      {
        id: "stack_3",
        title: "Advanced Stack Problems",
        problems: [
          {
            id: "asp_1",
            title: "Basic Calculator",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "asp_2",
            title: "Remove All Adjacent Duplicates",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "asp_3",
            title: "Daily Temperatures",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Queue",
    difficulty: "Easy",
    estimatedTime: "40 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "queue_1",
        title: "Basic Queue Operations",
        problems: [
          {
            id: "q_1",
            title: "Implement Queue using Array",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "q_2",
            title: "Implement Queue using Stacks",
            difficulty: "Medium",
            time: "20 min",
          },
          {
            id: "q_3",
            title: "Circular Queue Implementation",
            difficulty: "Medium",
            time: "20 min",
          },
        ],
      },
      {
        id: "queue_2",
        title: "Queue Applications",
        problems: [
          {
            id: "qa_1",
            title: "First Unique Character",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "qa_2",
            title: "Number of Recent Calls",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "qa_3",
            title: "Design Hit Counter",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
      {
        id: "queue_3",
        title: "Advanced Queue Problems",
        problems: [
          {
            id: "aq_1",
            title: "Sliding Window Maximum",
            difficulty: "Hard",
            time: "30 min",
          },
          {
            id: "aq_2",
            title: "Design Circular Deque",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "aq_3",
            title: "Task Scheduler",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Hashing",
    difficulty: "Medium",
    estimatedTime: "45 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "hash_1",
        title: "Basic Hashing Concepts",
        problems: [
          {
            id: "h_1",
            title: "Design HashMap",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "h_2",
            title: "Design HashSet",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "h_3",
            title: "Implement Hash Function",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
      {
        id: "hash_2",
        title: "Hash Table Applications",
        problems: [
          { id: "ha_1", title: "Two Sum", difficulty: "Easy", time: "15 min" },
          {
            id: "ha_2",
            title: "Group Anagrams",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ha_3",
            title: "Longest Consecutive Sequence",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
      {
        id: "hash_3",
        title: "Advanced Hashing Problems",
        problems: [
          {
            id: "ah_1",
            title: "LRU Cache",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "ah_2",
            title: "Subarray Sum Equals K",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "ah_3",
            title: "Copy List with Random Pointer",
            difficulty: "Hard",
            time: "30 min",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Recursion",
    difficulty: "Medium",
    estimatedTime: "60 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "rec_1",
        title: "Basic Recursion",
        problems: [
          {
            id: "br_1",
            title: "Factorial",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "br_2",
            title: "Fibonacci Number",
            difficulty: "Easy",
            time: "15 min",
          },
          {
            id: "br_3",
            title: "Power Function",
            difficulty: "Easy",
            time: "20 min",
          },
        ],
      },
      {
        id: "rec_2",
        title: "Recursive Backtracking",
        problems: [
          {
            id: "rb_1",
            title: "Generate Parentheses",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "rb_2",
            title: "Subsets",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "rb_3",
            title: "Permutations",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
      {
        id: "rec_3",
        title: "Advanced Recursion",
        problems: [
          {
            id: "ar_1",
            title: "N-Queens Problem",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "ar_2",
            title: "Sudoku Solver",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "ar_3",
            title: "Word Search II",
            difficulty: "Hard",
            time: "35 min",
          },
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Backtracking",
    difficulty: "Hard",
    estimatedTime: "90 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "bt_1",
        title: "Basic Backtracking",
        problems: [
          {
            id: "bb_1",
            title: "Letter Combinations of Phone Number",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "bb_2",
            title: "Combination Sum",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "bb_3",
            title: "Word Search",
            difficulty: "Medium",
            time: "30 min",
          },
        ],
      },
      {
        id: "bt_2",
        title: "Intermediate Backtracking",
        problems: [
          {
            id: "ib_1",
            title: "Palindrome Partitioning",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "ib_2",
            title: "Path With Maximum Gold",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "ib_3",
            title: "Restore IP Addresses",
            difficulty: "Medium",
            time: "30 min",
          },
        ],
      },
      {
        id: "bt_3",
        title: "Advanced Backtracking",
        problems: [
          {
            id: "ab_1",
            title: "Expression Add Operators",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "ab_2",
            title: "Remove Invalid Parentheses",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "ab_3",
            title: "Regular Expression Matching",
            difficulty: "Hard",
            time: "35 min",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Divide and Conquer",
    difficulty: "Medium",
    estimatedTime: "90 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "dc_1",
        title: "Basic Divide and Conquer",
        problems: [
          {
            id: "bdc_1",
            title: "Binary Search",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "bdc_2",
            title: "Merge Sort",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "bdc_3",
            title: "Quick Sort",
            difficulty: "Medium",
            time: "25 min",
          },
        ],
      },
      {
        id: "dc_2",
        title: "Intermediate Divide and Conquer",
        problems: [
          {
            id: "idc_1",
            title: "Count of Range Sum",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "idc_2",
            title: "Different Ways to Add Parentheses",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "idc_3",
            title: "Beautiful Array",
            difficulty: "Medium",
            time: "30 min",
          },
        ],
      },
      {
        id: "dc_3",
        title: "Advanced Divide and Conquer",
        problems: [
          {
            id: "adc_1",
            title: "Burst Balloons",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "adc_2",
            title: "Count of Smaller Numbers After Self",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "adc_3",
            title: "Reverse Pairs",
            difficulty: "Hard",
            time: "35 min",
          },
        ],
      },
    ],
  },
  {
    id: "11",
    title: "Trees",
    difficulty: "Medium",
    estimatedTime: "120 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "tr_1",
        title: "Basic Tree Operations",
        problems: [
          {
            id: "bt_1",
            title: "Binary Tree Traversal",
            difficulty: "Easy",
            time: "25 min",
          },
          {
            id: "bt_2",
            title: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "bt_3",
            title: "Symmetric Tree",
            difficulty: "Easy",
            time: "25 min",
          },
        ],
      },
      {
        id: "tr_2",
        title: "Intermediate Tree Problems",
        problems: [
          {
            id: "it_1",
            title: "Binary Tree Level Order Traversal",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "it_2",
            title: "Construct Binary Tree from Preorder and Inorder",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "it_3",
            title: "Binary Tree Maximum Path Sum",
            difficulty: "Medium",
            time: "30 min",
          },
        ],
      },
      {
        id: "tr_3",
        title: "Advanced Tree Concepts",
        problems: [
          {
            id: "at_1",
            title: "Serialize and Deserialize Binary Tree",
            difficulty: "Hard",
            time: "40 min",
          },
          {
            id: "at_2",
            title: "Binary Tree Cameras",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "at_3",
            title: "Recovery Binary Search Tree",
            difficulty: "Hard",
            time: "40 min",
          },
        ],
      },
    ],
  },
  {
    id: "12",
    title: "Graphs",
    difficulty: "Hard",
    estimatedTime: "150 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "gr_1",
        title: "Graph Basics",
        problems: [
          {
            id: "gb_1",
            title: "DFS and BFS Implementation",
            difficulty: "Easy",
            time: "30 min",
          },
          {
            id: "gb_2",
            title: "Number of Islands",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "gb_3",
            title: "Clone Graph",
            difficulty: "Medium",
            time: "30 min",
          },
        ],
      },
      {
        id: "gr_2",
        title: "Shortest Path Algorithms",
        problems: [
          {
            id: "sp_1",
            title: "Network Delay Time",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "sp_2",
            title: "Cheapest Flights Within K Stops",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "sp_3",
            title: "Path With Minimum Effort",
            difficulty: "Medium",
            time: "35 min",
          },
        ],
      },
      {
        id: "gr_3",
        title: "Advanced Graph Problems",
        problems: [
          {
            id: "ag_1",
            title: "Critical Connections in a Network",
            difficulty: "Hard",
            time: "40 min",
          },
          {
            id: "ag_2",
            title: "Alien Dictionary",
            difficulty: "Hard",
            time: "40 min",
          },
          {
            id: "ag_3",
            title: "Bus Routes",
            difficulty: "Hard",
            time: "35 min",
          },
        ],
      },
    ],
  },
  {
    id: "13",
    title: "Dynamic Programming",
    difficulty: "Hard",
    estimatedTime: "180 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "dp_1",
        title: "Basic DP Concepts",
        problems: [
          {
            id: "dp_b1",
            title: "Climbing Stairs",
            difficulty: "Easy",
            time: "25 min",
          },
          {
            id: "dp_b2",
            title: "House Robber",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "dp_b3",
            title: "Coin Change",
            difficulty: "Medium",
            time: "35 min",
          },
        ],
      },
      {
        id: "dp_2",
        title: "String DP Problems",
        problems: [
          {
            id: "dp_s1",
            title: "Longest Common Subsequence",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "dp_s2",
            title: "Edit Distance",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "dp_s3",
            title: "Distinct Subsequences",
            difficulty: "Hard",
            time: "40 min",
          },
        ],
      },
      {
        id: "dp_3",
        title: "Advanced DP Problems",
        problems: [
          {
            id: "dp_a1",
            title: "Best Time to Buy and Sell Stock IV",
            difficulty: "Hard",
            time: "40 min",
          },
          {
            id: "dp_a2",
            title: "Burst Balloons",
            difficulty: "Hard",
            time: "40 min",
          },
          {
            id: "dp_a3",
            title: "Regular Expression Matching",
            difficulty: "Hard",
            time: "40 min",
          },
        ],
      },
    ],
  },
  {
    id: "14",
    title: "Greedy Algorithms",
    difficulty: "Medium",
    estimatedTime: "120 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "gr_1",
        title: "Basic Greedy Problems",
        problems: [
          {
            id: "gr_b1",
            title: "Jump Game",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "gr_b2",
            title: "Gas Station",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "gr_b3",
            title: "Task Scheduler",
            difficulty: "Medium",
            time: "35 min",
          },
        ],
      },
      {
        id: "gr_2",
        title: "Interval Problems",
        problems: [
          {
            id: "gr_i1",
            title: "Merge Intervals",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "gr_i2",
            title: "Non-overlapping Intervals",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "gr_i3",
            title: "Meeting Rooms II",
            difficulty: "Medium",
            time: "35 min",
          },
        ],
      },
      {
        id: "gr_3",
        title: "Advanced Greedy Problems",
        problems: [
          {
            id: "gr_a1",
            title: "Maximum Subarray",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "gr_a2",
            title: "Minimum Number of Arrows to Burst Balloons",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "gr_a3",
            title: "Queue Reconstruction by Height",
            difficulty: "Hard",
            time: "40 min",
          },
        ],
      },
    ],
  },
  {
    id: "15",
    title: "Trie Data Structure",
    difficulty: "Medium",
    estimatedTime: "120 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "trie_1",
        title: "Basic Trie Operations",
        problems: [
          {
            id: "trie_b1",
            title: "Implement Trie (Prefix Tree)",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "trie_b2",
            title: "Design Add and Search Words Data Structure",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "trie_b3",
            title: "Replace Words",
            difficulty: "Medium",
            time: "30 min",
          },
        ],
      },
      {
        id: "trie_2",
        title: "Word Search Problems",
        problems: [
          {
            id: "trie_w1",
            title: "Word Search II",
            difficulty: "Hard",
            time: "45 min",
          },
          {
            id: "trie_w2",
            title: "Word Break",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "trie_w3",
            title: "Word Break II",
            difficulty: "Hard",
            time: "40 min",
          },
        ],
      },
      {
        id: "trie_3",
        title: "Advanced Trie Problems",
        problems: [
          {
            id: "trie_a1",
            title: "Maximum XOR of Two Numbers in an Array",
            difficulty: "Medium",
            time: "35 min",
          },
          {
            id: "trie_a2",
            title: "Concatenated Words",
            difficulty: "Hard",
            time: "40 min",
          },
          {
            id: "trie_a3",
            title: "Stream of Characters",
            difficulty: "Hard",
            time: "40 min",
          },
        ],
      },
    ],
  },
  {
    id: "16",
    title: "Binary Search Trees",
    difficulty: "Medium",
    estimatedTime: "120 min",
    progress: 0,
    total: 9,
    subtopics: [
      {
        id: "bst_1",
        title: "BST Fundamentals",
        problems: [
          {
            id: "bst_f1",
            title: "Validate Binary Search Tree",
            difficulty: "Easy",
            time: "25 min",
          },
          {
            id: "bst_f2",
            title: "Search in a Binary Search Tree",
            difficulty: "Easy",
            time: "20 min",
          },
          {
            id: "bst_f3",
            title: "Insert into a Binary Search Tree",
            difficulty: "Easy",
            time: "25 min",
          },
        ],
      },
      {
        id: "bst_2",
        title: "BST Operations",
        problems: [
          {
            id: "bst_o1",
            title: "Delete Node in a BST",
            difficulty: "Medium",
            time: "30 min",
          },
          {
            id: "bst_o2",
            title: "Convert Sorted Array to BST",
            difficulty: "Medium",
            time: "25 min",
          },
          {
            id: "bst_o3",
            title: "Kth Smallest Element in a BST",
            difficulty: "Medium",
            time: "30 min",
          },
        ],
      },
      {
        id: "bst_3",
        title: "Advanced BST Problems",
        problems: [
          {
            id: "bst_a1",
            title: "Binary Search Tree Iterator",
            difficulty: "Hard",
            time: "35 min",
          },
          {
            id: "bst_a2",
            title: "Recover Binary Search Tree",
            difficulty: "Hard",
            time: "40 min",
          },
          {
            id: "bst_a3",
            title: "Unique Binary Search Trees II",
            difficulty: "Hard",
            time: "35 min",
          },
        ],
      },
    ],
  },
];
