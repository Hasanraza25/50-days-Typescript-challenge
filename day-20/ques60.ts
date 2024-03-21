// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

// IIFE for encapsulation and scoping
const userProfile = (() => {
    const name = "Hasan";
    const age = 18;

    return {
        showProfile() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    }
})();

userProfile.showProfile(); // Output: Name: Hasan, Age: 18
