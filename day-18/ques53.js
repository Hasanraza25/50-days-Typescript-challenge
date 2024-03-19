//  Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var programmerSkills = {
    codingLanguages: ['JavaScript', 'Python', 'TypeScript', 'Java'],
    tools: ['VS Code', 'Git', 'Docker', 'Postman'],
    frameworks: ['Bootstrap', 'React', 'Node.js', 'Django']
};
var codingLanguages = programmerSkills.codingLanguages, frameworks = programmerSkills.frameworks, tools = programmerSkills.tools;
console.log("Coding Languages:", codingLanguages[0]);
console.log("tools:", tools[0]);
console.log("frameworks:", frameworks[0]);
