function every(array, test) {
  return array.some(each => test(each))
}
console.log(every([1,2,3], n => n>1));