//  Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function categorizeAge(age: number): string {
    if(age < 13){
        return 'Child';
    } else if(age >= 13 && age <= 20){
        return 'teenager';
    } else{
        return 'adult';
    }
}

const ageGroup = categorizeAge(18);
console.log(`Person's age group: ${ageGroup}`); // Output: teenager