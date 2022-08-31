/**
    O(n)
    73~78 ms
    42.6~42.9 MB

 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
    let hash = {
        'A': 0, 
        'L': 0, 
        'P': 0,
    };
    let late = 0;
    
    for(let c of s){
        late = (c === 'L')? late+1: 0;
        
        if(late === 3)
            return false;
        
        hash[c]++;
    }
        
    return (hash['A'] < 2);
};