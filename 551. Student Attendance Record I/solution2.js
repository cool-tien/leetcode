/**
    O(n)
    68~99 ms
    42~42.6 MB

 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
    let hash = {
        'A': 0, 
        'L': 0, 
        'P': 0,
    };
    
    let absent = 0;
    let late = 0;
    
    for(let c of s){
        late = (c === 'L')? late+1: 0;
        
        if(late === 3)
            return false;
        
        if(c === 'A'){
            absent++;
            
            if(absent === 2)
                return false;
        }
    }
        
    return true;
};