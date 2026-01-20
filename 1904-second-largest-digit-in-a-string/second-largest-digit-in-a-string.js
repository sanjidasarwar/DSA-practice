/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const numberSet = new Set()
    for(cht of s){
        if(cht>="0" && cht<="9") numberSet.add(Number(cht))
    }

    const numberArr = Array.from(numberSet)
    numberArr.sort((a,b)=> b-a)
    return numberArr.length<2 ? -1 : numberArr[1]
};

secondHighest("dfa12321afd")