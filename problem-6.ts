{
    // Problem 6

    type Book = {
        title: string;
        author: string;
        publishedYear: number
    };

    const isRecentBook = (book: Book): boolean => {

        const currYear = new Date().getFullYear();

        if(book.publishedYear > currYear){
            return false
        };
        
        return (currYear - book.publishedYear) <= 5;
    }

    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };

    const result = isRecentBook(book1);

    console.log(result);




}