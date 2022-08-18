/**
    O(2n)
    84~102 ms
    44.2~44.7 MB

 * @param {string[]} sentences
 * @return {number}
 */
 const mostWordsFound = (sentences) => Math.max(...sentences.map(s => s.split(" ").length));