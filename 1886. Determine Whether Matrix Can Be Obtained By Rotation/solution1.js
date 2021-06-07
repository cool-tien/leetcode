/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */

const check = (mat, target)=>{
    for(let i=0; i<mat.length; i++)
        for(let j=0; j<mat.length; j++)
            if(mat[i][j]!=target[i][j])
                return false;
    return true;
}

const rotate = mat=>{
    let res = new Array(mat.length);
    
    for(let i=0; i<mat.length; i++){
        res[i] = [];
        for(let j=0; j<mat.length; j++)
            res[i].unshift(mat[j].shift());
    }
    
    return res;
}

var findRotation = function(mat, target) {
    if(check(mat, target)) return true;
    
    for(let i=0; i<3; i++){
        mat = rotate(mat);
        
        let flag = check(mat, target);
        
        if(flag)
            return true;
    }
    
    return false;
};