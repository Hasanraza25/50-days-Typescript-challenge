"use strict";
// Describe how to use breakpoints in browser developer tools to debug JavaScript code.
function triggerBreakpoint() {
    debugger; // This line sets a breakpoint in the browser's developer tools
}
console.log("Before breakpoint");
triggerBreakpoint();
console.log("After breakpoint");
// Debugging instructions
console.log("To use breakpoints, open this code in your browser and set a breakpoint on the 'debugger;' line. Then reload or run your page to pause execution at that point.");
