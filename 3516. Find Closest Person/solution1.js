/*
  https://leetcode.com/problems/find-closest-person/submissions/1778608165/
    Runtime 0 ms Beats 100.00% 
    Memory 54.87 MB Beats 85.63% 
*/
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
  let p1_steps = Math.abs(z - x);
  let p2_steps = Math.abs(z - y);

  if(p1_steps > p2_steps) return 2;
  else if(p1_steps < p2_steps) return 1;
  else return 0;
};