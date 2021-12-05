function answer(arr) {
  const sum = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0)

  let newArr = [...arr];

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; i++) {
      if((sum - (arr[i]+ arr[j])) === 100) {
        newArr.splice(i, 1);
        newArr.splice(j, 1);

        return newArr;
      }
    }
  }

}

console.log(answer([20, 7, 23, 19, 10, 15, 25, 8, 13]));