export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error('ingredients is required');
  return sandwich.fillings
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error('person is required');
  if(person.city == "Manchester") {
    return true
  }
  return false
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error('people is required');
  let busNumber = 0
  while (people > 0) {
    people -= 40
    busNumber += 1
  } 
  return busNumber
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error('arr is required');
  let count = 0;
  arr.map(i => {
    if(i == "sheep"){
      count += 1
    }
  })
  return count
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error('person is required');
  console.log(person)
  if(person.address.postCode.startsWith("M") && person.address.city == "Manchester"){

    return true
  }
  return false
}
