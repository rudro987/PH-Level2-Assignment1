{
    // Problem 8

    class Car {
        brand: string;
        model: string;
        year: number;

        constructor(brand: string, model: string, year: number){
            this.brand = brand;
            this.model = model;
            this.year = year
        };

        displayInfo(){
            console.log(`Your car model is: ${this.year} ${this.brand} ${this.model}`);
        }
    }

    const car1 = new Car("Toyota", "Corolla", 2020);

    car1.displayInfo();
    






}