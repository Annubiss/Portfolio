export function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');
  return nums.map(n => n * n) //I used .map to iterate over the numbers
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error('words is required');
  const result = words.map((w, i) => {
    //check to ignore first word or empty strings                
    if(i == 0 || w.length == 0) return w              
    return w[0].toUpperCase() + w.slice(1)
  })
  //Join without separation to produce a single string
  .join("")
  return result
  }


export function getTotalSubjects(people) {
  if (people === undefined) throw new Error('people is required');
  console.log(people)
  let totalSubjects = 0
  people.forEach(p => totalSubjects += p.subjects.length)
  return totalSubjects
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');
  //Checks every ingredient list for specified item
  return menu.some(menu => menu.ingredients.includes(ingredient))
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');
  const firstArray = new Set(arr1)
  //returns a new array with the common numbers sorted and unique
  return [...new Set(arr2.filter(x => firstArray.has(x)))].sort((x, y) => x - y)
}
