{
    // Problem 2

    type FindLargestNumber = (arr: number[]) => number 

    const findLargestNumber : FindLargestNumber = arr => {
        let maxNumber = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > maxNumber){
                maxNumber = arr[i];
            }
        }
    
        return maxNumber;
    }
    
    const result = findLargestNumber([10, 65, 80, 20, 300]);
    console.log(result);
    
}