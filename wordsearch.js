const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const horizontalWord = [];
    const verticalWord = [];
    const newArray = [];
    
    for (let word of horizontalJoin) {
        horizontalWord.push(word)
    }``
    for(let i = 0; i < letters[0].length; i++){
        let output = [];
          for(let j = 0; j < letters.length; j++){
            output.push(letters[j][i]);
          };
          newArray.push(output);
    }
    const newStringArray = newArray.map(a => a.join(''))      

    for (let word of newStringArray) {
        verticalWord.push(word)
    }  

    if (horizontalWord.includes(word) || verticalWord.includes(word)){
        return true;
    } else { return false}

}

module.exports = wordSearch