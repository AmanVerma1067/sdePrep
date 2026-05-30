// DSA Roadmap based on Striver A2Z + 2-month interview plan
export const dsaRoadmap = {
  id: "dsa",
  title: "DSA & Problem Solving",
  accent: "#f59e0b",
  icon: "🏆",
  subjects: [
    {
      name: "✅ Completed Foundations",
      phases: [
        {
          title: "Arrays (Done)",
          topics: [
            { name: "Kadane's Algorithm — Maximum Subarray Sum", desc: "Core pattern: track current max ending here vs global max. O(n). Asked in almost every OA.", links: [{ text: "▶ Striver — Kadane's Algorithm", url: "https://www.youtube.com/watch?v=AHZpyENo7k4" }] },
            { name: "Two Sum / Three Sum / Four Sum", desc: "Hashing for 2-sum O(n), sorting+two-pointer for 3-sum O(n²). Pattern: reduce N-sum to (N-1)-sum.", links: [{ text: "↗ LeetCode — Two Sum", url: "https://leetcode.com/problems/two-sum/" }] },
            { name: "Next Permutation", desc: "Find rightmost ascending pair, swap with next larger, reverse suffix. O(n). Direct interview question.", links: [{ text: "▶ Striver — Next Permutation", url: "https://www.youtube.com/watch?v=JDOXKqF60RQ" }] },
            { name: "Merge Overlapping Intervals", desc: "Sort by start, merge if current.start <= prev.end. O(n log n). Very frequent in OAs.", links: [{ text: "↗ LeetCode — Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/" }] },
            { name: "Rotate Matrix 90°, Spiral Matrix, Set Matrix Zeroes", desc: "Matrix manipulation patterns. Transpose + reverse for rotation. O(1) space trick for zeroes using first row/col as markers.", links: [] }
          ]
        },
        {
          title: "Binary Search (Done)",
          topics: [
            { name: "Binary Search on Answer — Min/Max Optimization", desc: "KEY PATTERN: When answer is monotonic, binary search on the answer space. Used in: Aggressive Cows, Book Allocation, Koko Eating Bananas.", links: [{ text: "▶ Striver — BS on Answers", url: "https://www.youtube.com/watch?v=aJikrSk4dLQ" }] },
            { name: "Search in Rotated Sorted Array", desc: "Identify which half is sorted, then check if target lies in sorted half. O(log n). Top interview question.", links: [{ text: "↗ LeetCode — Search Rotated", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" }] },
            { name: "Median of Two Sorted Arrays", desc: "Binary search on smaller array to find partition. O(log(min(m,n))). Hard but frequently asked.", links: [{ text: "▶ Striver — Median of 2 Sorted Arrays", url: "https://www.youtube.com/watch?v=F9c7LpRZWVQ" }] }
          ]
        },
        {
          title: "Strings & Sliding Window (Done)",
          topics: [
            { name: "Sliding Window — Fixed & Variable Size", desc: "Fixed: sum of k elements. Variable: longest substring with at most k distinct chars. Pattern: expand right, shrink left when constraint violated.", links: [{ text: "▶ Striver — Sliding Window", url: "https://www.youtube.com/watch?v=9kdHxplyl5I" }] },
            { name: "Two Pointer Combined Problems", desc: "Container With Most Water, Trapping Rain Water. Left/right pointer convergence pattern.", links: [{ text: "↗ LeetCode — Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/" }] },
            { name: "Linked List — Reversal, Cycle Detection, Merge", desc: "Floyd's cycle detection, reverse in groups of k, merge two sorted lists. All completed from Striver A2Z.", links: [] }
          ]
        }
      ]
    },
    {
      name: "🔥 Phase 1 — Core Topics (35 Days)",
      phases: [
        {
          title: "Recursion & Backtracking (6 Days)",
          topics: [
            { name: "Pick/Not-Pick Pattern — Subsequences & Subsets", desc: "Foundation of all DP. At each index, either include or exclude. Generates 2^n subsequences. Master this pattern first.", links: [{ text: "▶ Striver — Subsequences", url: "https://www.youtube.com/watch?v=AxNNVECce8c" }] },
            { name: "Combination Sum I, II, III", desc: "Backtracking with constraints. Sum I: unlimited picks. Sum II: each element once, skip duplicates. Sum III: k numbers summing to n.", links: [{ text: "↗ LeetCode — Combination Sum", url: "https://leetcode.com/problems/combination-sum/" }] },
            { name: "Generate Parentheses", desc: "Backtrack with open/close count constraints. Only add close if close < open. Classic interview question.", links: [{ text: "↗ LeetCode — Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/" }] },
            { name: "N-Queens Problem", desc: "Place N queens on N×N board. Backtrack row by row, check column + both diagonals. Use hash sets for O(1) conflict check.", links: [{ text: "▶ Striver — N Queens", url: "https://www.youtube.com/watch?v=i05Ju7AftcM" }] },
            { name: "Sudoku Solver", desc: "Try 1-9 in each empty cell, validate row/col/box, backtrack if stuck. Classic backtracking template.", links: [{ text: "↗ LeetCode — Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/" }] },
            { name: "Word Search (Grid Backtracking)", desc: "DFS on grid with visited marking. 4-directional exploration. Template for all grid backtracking.", links: [{ text: "↗ LeetCode — Word Search", url: "https://leetcode.com/problems/word-search/" }] },
            { name: "Palindrome Partitioning", desc: "Partition string so every substring is palindrome. Backtrack at each index trying all possible cuts.", links: [{ text: "▶ Striver — Palindrome Partitioning", url: "https://www.youtube.com/watch?v=WBgsABoClE0" }] }
          ]
        },
        {
          title: "Bit Manipulation (3 Days)",
          topics: [
            { name: "XOR Patterns — Single Number, Missing Number", desc: "XOR of same numbers = 0. XOR all elements to find the unique one. Very high OA frequency.", links: [{ text: "↗ LeetCode — Single Number", url: "https://leetcode.com/problems/single-number/" }] },
            { name: "Subsets via Bitmask", desc: "For n elements, iterate 0 to 2^n-1. If bit i is set, include element i. Alternative to recursive approach.", links: [{ text: "▶ Striver — Power Set", url: "https://www.youtube.com/watch?v=b7AYbpM5YrE" }] },
            { name: "Count Set Bits — Brian Kernighan's Algorithm", desc: "n & (n-1) clears the lowest set bit. Loop until n=0, counting iterations. O(set bits).", links: [{ text: "↗ LeetCode — Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/" }] },
            { name: "Power of Two & Bit Tricks", desc: "n & (n-1) == 0 means power of 2. XOR swap, check if ith bit is set: n & (1 << i).", links: [] },
            { name: "Two Numbers Appearing Once (XOR + Grouping)", desc: "XOR all to get a^b. Use any set bit to partition into two groups. XOR each group separately.", links: [{ text: "▶ Striver — Two Numbers Once", url: "https://www.youtube.com/watch?v=pFh5bFFrdrc" }] }
          ]
        },
        {
          title: "Stack & Queue (5 Days)",
          topics: [
            { name: "Monotonic Stack Pattern — Next Greater/Smaller Element", desc: "CRITICAL PATTERN. Maintain decreasing stack. For each element, pop all smaller elements (they found their NGE). O(n). Used everywhere.", links: [{ text: "▶ Striver — Next Greater Element", url: "https://www.youtube.com/watch?v=Du881K7Jtk8" }] },
            { name: "Largest Rectangle in Histogram", desc: "Use monotonic stack to find left/right smaller boundaries for each bar. Area = height × (right - left - 1). VERY important.", links: [{ text: "▶ Striver — Largest Rectangle", url: "https://www.youtube.com/watch?v=X0X6G-eWgQ8" }] },
            { name: "Sliding Window Maximum (Deque)", desc: "Use monotonic deque. Remove front if out of window. Remove back while smaller than current. Front is always max.", links: [{ text: "↗ LeetCode — Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" }] },
            { name: "Min Stack — O(1) Push, Pop, GetMin", desc: "Store (value, currentMin) pairs. Or use single stack with math trick: push 2*val - min when val < min.", links: [{ text: "↗ LeetCode — Min Stack", url: "https://leetcode.com/problems/min-stack/" }] },
            { name: "Valid Parentheses & Longest Valid Parentheses", desc: "Stack of indices for longest valid. For basic valid: push open, pop and match for close.", links: [] },
            { name: "Online Stock Span & Daily Temperatures", desc: "Monotonic stack applications. Stock span: count consecutive days with price ≤ today. Temperatures: next warmer day.", links: [{ text: "↗ LeetCode — Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/" }] }
          ]
        },
        {
          title: "Heaps / Priority Queue (3 Days)",
          topics: [
            { name: "Top K Frequent Elements / K Closest Points", desc: "Use min-heap of size k. Or use bucket sort for O(n) solution. Very common OA pattern.", links: [{ text: "↗ LeetCode — Top K Frequent", url: "https://leetcode.com/problems/top-k-frequent-elements/" }] },
            { name: "Kth Largest/Smallest Element", desc: "Min-heap of size k for kth largest. Or use QuickSelect for average O(n).", links: [{ text: "▶ Striver — Kth Largest", url: "https://www.youtube.com/watch?v=fnbImb8lo88" }] },
            { name: "Merge K Sorted Lists/Arrays", desc: "Min-heap with (value, list_index, element_index). Always extract minimum, push next from same list.", links: [{ text: "↗ LeetCode — Merge K Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/" }] },
            { name: "Median from Data Stream", desc: "Two heaps: max-heap for lower half, min-heap for upper half. Balance sizes. Median from tops.", links: [{ text: "↗ LeetCode — Find Median", url: "https://leetcode.com/problems/find-median-from-data-stream/" }] }
          ]
        },
        {
          title: "Greedy Algorithms (4 Days)",
          topics: [
            { name: "Activity Selection / Meeting Rooms", desc: "Sort by end time. Greedily pick non-overlapping activities. Proof: earliest finish leaves most room.", links: [{ text: "▶ Striver — N Meetings", url: "https://www.youtube.com/watch?v=II6ziNnub1Q" }] },
            { name: "Jump Game I & II", desc: "I: Track farthest reachable index. II: BFS-level approach for min jumps. Both O(n).", links: [{ text: "↗ LeetCode — Jump Game", url: "https://leetcode.com/problems/jump-game/" }] },
            { name: "Interval Scheduling — Merge, Insert, Non-overlapping", desc: "Sort by start/end depending on problem. Greedy merge or count. High OA frequency.", links: [] },
            { name: "Fractional Knapsack", desc: "Sort by value/weight ratio. Take greedily. Unlike 0/1 knapsack, fractions allowed → greedy works.", links: [{ text: "▶ Striver — Fractional Knapsack", url: "https://www.youtube.com/watch?v=F_DDzYnxO14" }] },
            { name: "Job Sequencing Problem", desc: "Sort by profit descending. For each job, find latest available slot before deadline. Use DSU for optimization.", links: [] }
          ]
        },
        {
          title: "Binary Trees (8 Days) ⭐",
          topics: [
            { name: "Traversals — Inorder, Preorder, Postorder, Level Order", desc: "Foundation. Iterative versions using stack (in/pre/post) and queue (level). Morris traversal for O(1) space.", links: [{ text: "▶ Striver — All Traversals", url: "https://www.youtube.com/watch?v=jmy0LaGET1I" }] },
            { name: "Height/Depth, Diameter, Balanced Tree Check", desc: "Height: max(left, right) + 1. Diameter: max path through any node = left_height + right_height. Balanced: |left_h - right_h| ≤ 1 at every node.", links: [{ text: "▶ Striver — Diameter of Tree", url: "https://www.youtube.com/watch?v=Rezetez59Nk" }] },
            { name: "Maximum Path Sum", desc: "At each node: max path through it = node.val + max(0, left) + max(0, right). Track global max. Hard but important.", links: [{ text: "↗ LeetCode — Max Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }] },
            { name: "Lowest Common Ancestor (LCA)", desc: "If root is p or q, return root. Recurse left and right. If both return non-null, root is LCA. O(n).", links: [{ text: "▶ Striver — LCA", url: "https://www.youtube.com/watch?v=_-QHfMDde90" }] },
            { name: "Views — Left, Right, Top, Bottom View", desc: "Use level-order with horizontal distance. Top view: first node at each HD. Bottom view: last node at each HD.", links: [{ text: "▶ Striver — Top View", url: "https://www.youtube.com/watch?v=Et9OCDNvJ78" }] },
            { name: "Vertical Order Traversal", desc: "Track (column, row, value) tuples. Sort by column, then row, then value. Use TreeMap or sorted dict.", links: [{ text: "↗ LeetCode — Vertical Order", url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" }] },
            { name: "Serialize & Deserialize Binary Tree", desc: "Use preorder with null markers. Serialize to string, deserialize with queue. Important design question.", links: [{ text: "↗ LeetCode — Serialize Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }] },
            { name: "BST — Validate, Search, Insert, Delete, Iterator", desc: "Validate: inorder must be sorted. Delete: 3 cases (leaf, one child, two children → inorder successor). Iterator: controlled inorder with stack.", links: [{ text: "▶ Striver — Validate BST", url: "https://www.youtube.com/watch?v=f-sj7I5oXEI" }] }
          ]
        },
        {
          title: "Graphs (8 Days) ⭐",
          topics: [
            { name: "BFS & DFS — Adjacency List, Matrix Traversal", desc: "BFS: queue, level-by-level, shortest path in unweighted. DFS: stack/recursion, explore as deep as possible. Template for everything.", links: [{ text: "▶ Striver — BFS & DFS", url: "https://www.youtube.com/watch?v=M3_pLsDdeuU" }] },
            { name: "Flood Fill & Number of Islands", desc: "BFS/DFS on grid. Mark visited. Count connected components. Foundation for all grid graph problems.", links: [{ text: "↗ LeetCode — Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" }] },
            { name: "Cycle Detection — Directed (DFS + path visited) & Undirected (BFS/DFS + parent)", desc: "Undirected: if neighbor is visited and not parent → cycle. Directed: maintain path-visited array, cycle if revisit on same path.", links: [{ text: "▶ Striver — Cycle Detection", url: "https://www.youtube.com/watch?v=9twcmtQj4DU" }] },
            { name: "Topological Sort — Kahn's BFS & DFS", desc: "Only for DAGs. Kahn's: process nodes with in-degree 0. DFS: post-order gives reverse topo sort. Used in course scheduling, build systems.", links: [{ text: "▶ Striver — Topological Sort", url: "https://www.youtube.com/watch?v=5lZ0iJMrUMk" }] },
            { name: "Shortest Path — Dijkstra's Algorithm", desc: "Min-heap based. Greedy: always process closest unvisited node. O((V+E) log V). Does NOT work with negative weights.", links: [{ text: "▶ Striver — Dijkstra's", url: "https://www.youtube.com/watch?v=V6H1qAeB-l4" }] },
            { name: "Shortest Path — Bellman-Ford & Floyd-Warshall", desc: "Bellman-Ford: single source, handles negative weights, detects negative cycles. Floyd-Warshall: all-pairs shortest path O(V³).", links: [{ text: "▶ Striver — Bellman-Ford", url: "https://www.youtube.com/watch?v=0vVofAhAYjc" }] },
            { name: "Disjoint Set Union (DSU) / Union-Find", desc: "Union by rank + path compression → near O(1) per operation. Used for: connected components, cycle detection, Kruskal's MST.", links: [{ text: "▶ Striver — DSU", url: "https://www.youtube.com/watch?v=aBxjDBC4M1U" }] },
            { name: "MST — Prim's & Kruskal's Algorithm", desc: "Prim's: grow tree from source using min-heap. Kruskal's: sort edges, add if no cycle (use DSU). Both find minimum spanning tree.", links: [{ text: "▶ Striver — MST", url: "https://www.youtube.com/watch?v=mJcZjjKzeqk" }] },
            { name: "Bipartite Check, Bridges & Articulation Points", desc: "Bipartite: 2-colorable via BFS. Bridges/APs: Tarjan's algorithm with discovery/low arrays. Advanced but asked.", links: [] }
          ]
        },
        {
          title: "Tries (2 Days)",
          topics: [
            { name: "Trie — Insert, Search, StartsWith", desc: "Node with children[26] and isEnd flag. Insert: create nodes. Search: traverse and check isEnd. O(word length).", links: [{ text: "▶ Striver — Implement Trie", url: "https://www.youtube.com/watch?v=dBGUmUQhjaM" }] },
            { name: "Count Distinct Substrings & Longest Common Prefix", desc: "Insert all suffixes → count nodes = distinct substrings. LCP: traverse trie while single child path.", links: [] },
            { name: "Maximum XOR — XOR Trie", desc: "Insert numbers bit by bit (MSB first). For max XOR, greedily choose opposite bit at each level.", links: [{ text: "▶ Striver — Max XOR", url: "https://www.youtube.com/watch?v=EIhAwfHubE8" }] }
          ]
        },
        {
          title: "Dynamic Programming (14 Days) ⭐⭐",
          topics: [
            { name: "DP Foundation — Recursion → Memoization → Tabulation", desc: "ALWAYS start with recursive solution. Add memo array. Convert to bottom-up table. Space optimize if possible. This is THE framework.", links: [{ text: "▶ Striver — DP Introduction", url: "https://www.youtube.com/watch?v=FfXoiwwnxFw" }] },
            { name: "Fibonacci, Climbing Stairs, Frog Jump", desc: "Warmup problems. f(n) = f(n-1) + f(n-2). Frog: min cost with variable jumps. Master the recursion→memo→tabulation flow here.", links: [{ text: "↗ LeetCode — Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" }] },
            { name: "0/1 Knapsack — Take or Not Take", desc: "MOST IMPORTANT DP PATTERN. For each item: take (add value, reduce capacity) or skip. 2D DP[i][w]. Space optimize to 1D.", links: [{ text: "▶ Striver — 0/1 Knapsack", url: "https://www.youtube.com/watch?v=GqOQ87IXFMM" }] },
            { name: "Subset Sum, Partition Equal Subset Sum, Target Sum", desc: "All variants of knapsack. Subset sum: can we reach target? Partition: can we split into two equal halves? Target: assign +/- signs.", links: [{ text: "▶ Striver — Subset Sum", url: "https://www.youtube.com/watch?v=fWX9xDmIzRI" }] },
            { name: "Unbounded Knapsack — Coin Change, Rod Cutting", desc: "Unlike 0/1, items can be reused. Coin Change: min coins for amount. Rod Cutting: max profit from cutting.", links: [{ text: "▶ Striver — Unbounded Knapsack", url: "https://www.youtube.com/watch?v=OgvOZ6OrJoY" }] },
            { name: "Longest Increasing Subsequence (LIS)", desc: "O(n²) DP or O(n log n) with patience sorting (binary search on tails array). Print LIS using parent tracking.", links: [{ text: "▶ Striver — LIS", url: "https://www.youtube.com/watch?v=ekcwMsSIzVc" }] },
            { name: "DP on Strings — LCS, Edit Distance, Distinct Subsequences", desc: "LCS: dp[i][j] = match ? 1+dp[i-1][j-1] : max(dp[i-1][j], dp[i][j-1]). Edit Distance: insert/delete/replace costs. VERY frequent.", links: [{ text: "▶ Striver — LCS", url: "https://www.youtube.com/watch?v=NPZn9jBrX8U" }] },
            { name: "Longest Common Substring & Palindromic Subsequence", desc: "Substring: reset to 0 on mismatch (unlike subsequence). Palindromic: LCS of string and its reverse.", links: [] },
            { name: "Grid DP — Unique Paths, Min Path Sum, Cherry Pickup", desc: "dp[i][j] = min/max of dp[i-1][j] and dp[i][j-1] + grid[i][j]. Cherry Pickup: two traversals simultaneously.", links: [{ text: "▶ Striver — Grid DP", url: "https://www.youtube.com/watch?v=sdE0A2Oxofw" }] },
            { name: "Stock Buy & Sell — I, II, III, IV, with Cooldown", desc: "State machine DP. Track buy/sell states. I: one transaction. II: unlimited. III: at most 2. IV: at most k. Cooldown: skip day after sell.", links: [{ text: "▶ Striver — Stock Problems", url: "https://www.youtube.com/watch?v=excAOvwF_Wk" }] },
            { name: "Matrix Chain Multiplication / Partition DP", desc: "Try all possible partition points. MCM: min multiplications to multiply chain. Burst Balloons, Palindrome Partitioning II.", links: [{ text: "▶ Striver — MCM", url: "https://www.youtube.com/watch?v=vRVfmbCFW7Y" }] },
            { name: "DP on Subsequences — Count, Longest, Distinct", desc: "Count subsequences matching pattern. Number of distinct subsequences. All use the take/not-take framework.", links: [] }
          ]
        }
      ]
    },
    {
      name: "⚡ Phase 2 — OA Practice & Revision (25 Days)",
      phases: [
        {
          title: "OA Patterns to Master",
          topics: [
            { name: "Sliding Window Patterns — Fixed & Variable", desc: "VERY HIGH frequency. Max sum subarray of size k, longest substring without repeating chars, minimum window substring.", links: [{ text: "↗ LeetCode — Min Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" }] },
            { name: "Binary Search on Answer", desc: "VERY HIGH frequency. Koko Eating Bananas, Aggressive Cows, Book Allocation, Split Array Largest Sum. Monotonic check function + binary search.", links: [{ text: "↗ LeetCode — Koko Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/" }] },
            { name: "Prefix Sum & Difference Array", desc: "Prefix sum for range queries O(1). Difference array for range updates O(1). Subarray sum equals k using hashmap.", links: [{ text: "↗ LeetCode — Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/" }] },
            { name: "Hashing Patterns — Frequency Map, Two Sum Pattern", desc: "HashMap for O(1) lookup. Group anagrams, longest consecutive sequence, count pairs with given sum.", links: [] },
            { name: "Monotonic Stack Applications", desc: "Next greater/smaller, largest rectangle, stock span, trapping rain water. Single pattern, many applications.", links: [] },
            { name: "BFS/DFS on Grids — Rotten Oranges, Shortest Path", desc: "Multi-source BFS (rotten oranges), shortest path in binary matrix, surrounded regions. Very common in OAs.", links: [{ text: "↗ LeetCode — Rotten Oranges", url: "https://leetcode.com/problems/rotting-oranges/" }] },
            { name: "Subsequence DP Patterns", desc: "LIS, LCS, edit distance, coin change. Master the 5 core patterns and you can solve any DP medium.", links: [] },
            { name: "Heap Top-K Pattern", desc: "Kth largest, top k frequent, k closest. Min-heap of size k or max-heap depending on problem.", links: [] }
          ]
        },
        {
          title: "Daily Practice Structure",
          topics: [
            { name: "Daily Routine: 2 Timed Problems (45-60 min each)", desc: "Solve UNSEEN problems under time pressure. Simulate real OA conditions. Use LeetCode contest problems or random medium picks.", links: [{ text: "↗ LeetCode — Problems", url: "https://leetcode.com/problemset/" }] },
            { name: "Revision Block: Review Patterns & Mistakes", desc: "After solving, review: What pattern did this use? Where did I get stuck? Add to your pattern notebook.", links: [] },
            { name: "Weak Topic Improvement: Revisit Failed Problems", desc: "Retry problems you couldn't solve. Understanding WHY you failed is more valuable than solving new problems.", links: [] },
            { name: "Maintain: Mistake Notebook + Pattern Notebook + Template Notebook", desc: "MOST IMPORTANT habit. Write down every mistake, every pattern, every code template. This improves speed massively during OAs.", links: [] }
          ]
        }
      ]
    }
  ]
};
