/** product: calculate the product of an array of numbers. */

function product(nums,i=0) {

  if(i===nums.length) return 1
    return nums[i]*product(nums,i+1)

}

/** longest: return the length of the longest word in an array of words. */

function longest(words,i=0,w="") {
  // if(i===words.length) return {[w]:w.length}
  if(i===words.length) return w.length


    words[i].length>w.length?w=words[i]:null
    return longest(words,i+1,w)
}

/** everyOther: return a string with every other letter. */

function everyOther(word,i=0,charList="") {
  if (word.length===0) return ""
    
    if (word.length-1===i){
        if(i%2===0){
            charList+=word[i]
            return charList
        } 
        else{
            return charList
        }
    }

    i%2===0?charList+=word[i]:null
    return everyOther(word,i+1,charList)
    
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(word,i=0,j=word.length-1) {
  let len=word.length;
    if (word.length===0) return true
    if (word[i]!==word[j]) return false

    if(word.length%2===0){
        console.log('i am in',i,j)
        if(i===(len/2-1) && j===(len/2)){
            if (word[i] ===word[j]) return true
            else {return false}
        } 
    }
    else if(word.length%2!==0){
        if(i===j) return true
    }
    
    return isPalindrome(word,i+1,j-1) 
  
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(itemList,item,i=0) {
  if(i===itemList.length) return -1

    if(item===itemList[i]) return i


    return findIndex(itemList,item,i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str,newStr="",i=str.length-1) {
  if(i===-1) return newStr

    newStr+=str[i]

    return revString(str,newStr,i-1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj,elements=[]) {
  for (let i of Object.values(obj)){
    if(i.constructor.name==="Object"){
        gatherStrings(i,elements) 
        
    }
    else{
        if(i.constructor.name==="String"){

            elements.push(i)

        }
    }
}
return elements

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val,leftIdx=0,rightIdx=arr.length-1) {

  let midIdx=Math.floor((leftIdx+rightIdx)/2)

  if(val===arr[midIdx]) return midIdx

  else if(leftIdx>=rightIdx) return -1

  else if(val>arr[midIdx]){
            leftIdx=midIdx+1

    return binarySearch(arr,val,leftIdx,rightIdx)
    
  }
  else if(val<arr[midIdx]){
        rightIdx=midIdx-1

       return  binarySearch(arr,val,leftIdx,rightIdx)
  }


}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
