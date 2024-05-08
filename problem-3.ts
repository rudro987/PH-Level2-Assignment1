{
  // Problem 3

  type EvenNumbersArray = (array: number[]) => number[];

  const filterEvenNumbers: EvenNumbersArray = (arr) => {
    
    let evenNumbersArray : number[] = [];

    for (let i of arr){
        if(i % 2 === 0){
            evenNumbersArray.push(i);
        }
    }

    return evenNumbersArray;
  };

  const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(result);
  




}
