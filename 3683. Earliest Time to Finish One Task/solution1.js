/*
  https://leetcode.com/problems/earliest-time-to-finish-one-task/submissions/1792777603/
    Runtime 0 ms Beats 100.00% 
    Memory 56.38 MB Beats 74.05%
*/
/**
 * @param {number[][]} tasks
 * @return {number}
 */
const earliestTime = tasks => Math.min(...tasks.map(arr => arr[0] + arr[1]));