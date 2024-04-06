let laptop = {
    make: "Lenovo",
    model: "ThinkPad X1 Carbon Gen 11",
    year: 2021,
    describe: function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);   
    }
}

laptop.describe();