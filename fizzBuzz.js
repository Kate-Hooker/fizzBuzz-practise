const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const fizzBuzz = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    const num = arr[i]

    if (num % 15 === 0) {
      console.log('FizzBuzz')
    } else if (num % 3 === 0) {
      console.log('Fizz')
    } else if (num % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(num)
    }
    if (i === arr.length - 1) {
      break
    }
  }
}

fizzBuzz(testArray)
