// Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
    value: 18,
    traditionalFunction: function () {
      console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value); 
    },
  };
  
  traditionalVsArrow.traditionalFunction(); // Output: 18
  traditionalVsArrow.arrowFunction(); // Output: undefined