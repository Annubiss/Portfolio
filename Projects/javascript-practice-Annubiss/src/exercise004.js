export function findSmallNums(nums) {
  if (!nums) throw new Error('nums is required');
  let smallNumArr = []
  for( let i = 0; i < nums.length; i ++){
    if (nums[i] < 1){
      smallNumArr.push(nums[i])
    }
  }
  return smallNumArr.sort((x, y) => y - x)
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error('names is required');
  if (!char) throw new Error('char is required');
  let foundNamesArr = []
  for(const name of names) {
    if(name[0] == char) {
      foundNamesArr.push(name)
    }
  }
  return foundNamesArr
}

export function findVerbs(words) {
  if (!words) throw new Error('words is required');
  let wordsArr = []
  for(const word of words){
    if(word.includes("to ")){
      wordsArr.push(word)
    }
  }
  return wordsArr
}

export function getIntegers(nums) {
  if (!nums) throw new Error('nums is required');
  let numArr = []
  for(const n of nums) {
    if(n == n.toFixed(0)) {
      numArr.push(n)
    }
  }
  return numArr
}

export function getCities(users) {
  if (!users) throw new Error('users is required');
  let citiesArr = []
  for(let i = 0; i < users.length; i++) {
    citiesArr.push(users[i].data.city.displayName)
  }
  return citiesArr
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error('nums is required');
  let sqrtRootArr = []
  for(const n of nums) {
    sqrtRootArr.push(Number(Math.sqrt(n).toFixed(2)))
  }
  return sqrtRootArr
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');
  let selectedSentences = []
  for(const sentence of sentences) {
    if(sentence.contains(str)){
      selectedSentences.push(sentence)
    }
  }
  return selectedSentences
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error('triangles is required');
  let maxArr = []
 for(let i = 0; i < triangles.length; i++){
    let max = 0;
  for(let j = 0; j < 3; j++){
    if(triangles[i][j] > max){
      max = triangles[i][j]
    }
  }
  maxArr.push(max)
 }
 return maxArr
}
