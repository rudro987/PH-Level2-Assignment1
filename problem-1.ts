{
    // Problem 1

    type RepeatString = (str: string, num: number) => string;

    const repeatString : RepeatString = (str, num) => {
        return str.repeat(num);
    }
    
    const result = repeatString("Hello!", 3);
    console.log(result);

    
}