/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      let numArr = String(x).split('')
      
    let left = 0
    let right= numArr.length-1   

    while(left<right){
      if (numArr[left]=== numArr[right]){
            left++
            right--
             console.log(left);
    console.log(right);
      }else{
            return false

      }

    }
    return true
};