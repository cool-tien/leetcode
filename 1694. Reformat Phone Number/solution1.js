/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let str = number.match(/[0-9]/g).join("");
    let res = [];
    
    while(str!=""){
        if(str.length==4){
            res.push(str.substr(0, 2), str.substr(2));
            str = "";
        }
        else{
            res.push(str.substr(0, 3));
            str = str.substr(3);
        }
    }
    
    return res.join("-");
};