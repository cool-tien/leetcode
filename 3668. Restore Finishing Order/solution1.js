/*
  https://leetcode.com/problems/restore-finishing-order/submissions/1779699252/
    Runtime 4 ms Beats 9.66%
    Memory 58.62 MB Beats 20.78%
*/
/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
  let friend_set = new Set(friends);
  let finish_list = [];
  
  for(const id of order)
    if(friend_set.has(id))
      finish_list.push(id);
  return finish_list;
};