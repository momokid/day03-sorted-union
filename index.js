function uniteUnique(...arr) {
  let newArr = []

  arr.forEach( item => {
    newArr = [...newArr, ...item]
  })

  return [...new Set(newArr)]
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
