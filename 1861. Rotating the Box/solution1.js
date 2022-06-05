/**
    https://leetcode.com/submissions/detail/714592878/
    Runtime: 407 ms, faster than 81.20% of JavaScript online submissions for Rotating the Box.
    Memory Usage: 89.2 MB, less than 18.04% of JavaScript online submissions for Rotating the Box.
    
 * @param {character[][]} box
 * @return {character[][]}
 */
 var rotateTheBox = function(box) {
    const moveDown = (box) => {
        //  last index
        let last = box[0].length - 1;
        
        for(let i=0; i<box.length; i++){
            let bottom = last;
            
            for(let j=last; j>=0; j--){
                if(box[i][j]=="*")
                    bottom = j - 1;
                else if(box[i][j]=="#"){
                    [box[i][j], box[i][bottom]] = [box[i][bottom], box[i][j]];
                    bottom -= 1;
                }
            }
        }
        
        return box;
    }
    
    const rotate = (box) => {
        let row_last = box.length - 1;
        let arr = [];
        
        for(let i=0; i<box[0].length; i++){
            let row = [];
            
            for(let j=row_last; j>=0; j--)
                row.push(box[j][i]);
            arr.push(row);
        }
        
        return arr;
    }
    
    return rotate(moveDown(box));
};