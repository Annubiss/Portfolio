// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding documentation in the issue

export function capitalize(word) {
  if (word === undefined) throw new Error('word is required');
  return word[0].toUpperCase() + word.slice(1)
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');
  return `${firstName[0]}.${lastName[0]}`
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (vatRate === undefined) throw new Error('vatRate is required');
  let price = originalPrice
  console.log(vatRate)
  price += originalPrice * (vatRate / 100)
  if(Math.abs(price) % 1 > 0.01){
  return Number(price.toFixed(2))
  } else {
    return Number(Math.round(price))
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');
  let price = originalPrice
  price -= originalPrice * (reduction / 100)
  if(Math.abs(price) % 1 > 0.01){
  return Number(price.toFixed(2))
  } else {
    return Number(Math.round(price))
  }
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');
  const midLength = Math.floor(str.length / 2)
  if (str.length % 2 == 1) {
    return str[midLength]
  }
  return str[midLength - 1] + str[midLength]
}

export function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');
  return word.split("").reverse().join("")
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');
   return words.map((word) => {
      return word.split("").reverse().join("")
   })
  }
  


export function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');
  return users.filter(u => u.type == "Linux").length
}


export function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');
  let sum = 0
  scores.forEach(s => sum+= s)
  return Number((sum / scores.length).toFixed(2))
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');
  console.log(n)
  if( n % 3 != 0 && n % 5 != 0) {return n}
  if( n % 3 == 0 && n % 5 == 0) {return "fizzbuzz"}
  if(n % 3 != 0) {return "buzz"}
  if(n % 5 != 0) {return "fizz"}
}
