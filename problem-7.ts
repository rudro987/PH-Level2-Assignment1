{
    // Problem 7

    const logString = (str: unknown) => {

        if(typeof str === 'string'){
            console.log(str);
        }else{
            console.error('Input is not a string');
        }
        
    }
    
    logString("Hello, TypeScript!");

}