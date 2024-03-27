const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const fizzBuzz = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    const num = arr[i];

    if (num % 15 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else if (i === arr.length-1) 
    {break} else {
      console.log(num);
    }

    
  }
}

fizzBuzz(testArray);
