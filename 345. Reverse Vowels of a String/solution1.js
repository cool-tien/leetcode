/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let idx = [];
    let vowel = [];
    let obj = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split("");
    
    s.forEach((x,i)=>{
        if(obj.indexOf(x)!=-1){
            idx.push(i);
            vowel.push(x);
        }
    });
    
    vowel = vowel.reverse();
    let i = 0;
    idx.forEach(x=>s[x]=vowel[i++]);
    
    return s.join("");
};