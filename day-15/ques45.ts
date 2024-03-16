function car_info( manufacturer: string, model: string, ...options:[string, any][]){
    let car = {
        manufacturer: manufacturer,
        model: model
    }
    if(options){
        options.forEach(([key, value]) => {
            car[key] = value; 
        }) 
    }
    return car;
}

console.log(car_info("Honda", "Civic", ["color", "red"], ["year", 2020]));
console.log(car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));