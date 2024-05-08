{
    //Problem 4

    type ReverseArray = <T>(array: T[]) => T[]

    const reverseArray : ReverseArray = (arr) => {
        return arr.reverse();
    }

    const result = reverseArray(["apple", "banana", "cherry"]);

    console.log(result);
    


}

