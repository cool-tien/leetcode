/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diff = 0;
    let ch1 = [];
    let ch2 = [];
    
    for(let i=0; i<s1.length; i++)
        if(s1[i]!=s2[i]){
            diff++;
            
            ch1.push(s1[i]);
            ch2.push(s2[i]);
        }
            
    return diff==0 || (diff==2 && ch1[0]==ch2[1] && ch1[1]==ch2[0]) ;
};