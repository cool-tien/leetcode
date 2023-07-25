/**
    Time Complexity: O(n)
        130 ~ 133 ms    (13.94% ~ 14.63%)
    Space Complexity: O(n)
        56.5 ~ 56.9 MB  (7.32%)
    
    https://leetcode.com/problems/basic-calculator/submissions/989224877/
        Runtime 130 ms, Beats 14.63%; Memory 56.8 MB, Beats 7.32%; 
    https://leetcode.com/problems/basic-calculator/submissions/989277127/
        Runtime 132 ms, Beats 13.94%; Memory 56.9 MB, Beats 7.32%; 
    https://leetcode.com/problems/basic-calculator/submissions/990062294/
        Runtime 133 ms, Beats 13.94%; Memory 56.5 MB, Beats 7.32%; 

 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const buildPostOperate = (s) => {
        let stack = [];
        let res = [];
        
        for(let i=0; i<s.length; i++){
            if(s[i] === '+' || s[i] === '-'){
                if(s[i] === '-' && (i === 0 || s[i-1] === '(')){
                    let num_str = s[i];
                    let idx = i + 1;

                    while(s[idx] >= '0' && s[idx] <= '9'){
                        num_str += s[idx++];
                    }

                    res.push(Number(num_str));
                    i = idx - 1;
                }
                else{
                    if(stack.at(-1) === '+' || stack.at(-1) === '-')
                        res.push(stack.pop());
                    stack.push(s[i]);
                }
            }
            else if(s[i] === ')'){
                while(stack.length && stack.at(-1) !== '('){
                    res.push(stack.pop());
                }

                if(stack.at(-1) === '(')
                    stack.pop();
            }
            else if(s[i] !== '('){
                let num_str = s[i];
                let idx = i + 1;

                while(s[idx] >= '0' && s[idx] <= '9'){
                    num_str += s[idx++];
                }

                res.push(Number(num_str));
                i = idx - 1;
            }
            //  c === '('
            else
                stack.push('(');
        }

        while(stack.length)
            res.push(stack.pop());

        return res;
    }

    //  exist number only
    if(s.length === 1) return Number(s);

    s = s.replace(/ /g, "");
    s = (s[0] === '-')? '0' + s: s;
    let post_operate = buildPostOperate(s);
    let stack = [];
    
    for(const item of post_operate){
        if(item === '+' || item === '-'){
            const num2 = stack.pop() || null;
            const num1 = stack.pop() || null;
            
            (item === '+')?
                stack.push(num1 + num2):
                stack.push(num1 - num2);
        }
        else
            stack.push(item);
    }

    return (stack.length >= 2)?
        -stack[1]: stack[0];
};