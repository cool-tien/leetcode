/**
    【Ugly Solution】
    - not consider when appear collide, the new position will also exist chance of collision

    Time Complexity: O(n²)
        75 ~ 95 ms          (14.16% ~ 24.76%)
    Space Complexity: O(n)
        54.99 ~ 55.37 MB    (5.54%)

    https://leetcode.com/problems/asteroid-collision/submissions/1168604850/
        Runtime 95 ms Beats 14.16%; Memory 55.37 MB Beats 5.54%; 
    https://leetcode.com/problems/asteroid-collision/submissions/1168611617/
        Runtime 90 ms Beats 15.98%; Memory 55.19 MB Beats 5.54%; 
    https://leetcode.com/problems/asteroid-collision/submissions/1168611997/
        Runtime 75 ms Beats 24.76%; Memory 54.99 MB Beats 5.54%; 

 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const isCollide = (num1, num2) => {
        if(num1 == null || num2 == null) return false;

        let is_num1_right = (num1 > 0);
        let is_num2_right = (num2 > 0);

        return (is_num1_right && !is_num2_right);
    }

    let stack = [];

    for(const asteroid of asteroids){
        if(!stack.length){
            stack.push(asteroid);
            continue;
        }

        const last_asteroid = stack.at(-1);
        
        if(isCollide(last_asteroid, asteroid)){
            if(Math.abs(asteroid) === Math.abs(last_asteroid))
                stack.pop();
            else
                stack[stack.length - 1] = (Math.abs(asteroid) > Math.abs(last_asteroid))? 
                    asteroid: last_asteroid;
        }
        else
            stack.push(asteroid);
    }
    
    let is_collide;
    
    do{
        is_collide = false;
        
        for(let i=0; i<stack.length-1; i++){
            if(isCollide(stack[i], stack[i+1])){
                if(Math.abs(stack[i]) === Math.abs(stack[i+1])){
                    stack.splice(i, 2);
                    i--;
                }
                else{
                    const larger = (Math.abs(stack[i]) > Math.abs(stack[i+1]))? 
                        stack[i]: stack[i+1];
                    
                    stack.splice(i, 2, larger);
                    i--;
                }

                is_collide = true;
            }
        }
    }while(is_collide);
    
    return stack;
};