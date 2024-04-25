# babel-transpilation-project
- Level 3 Week 5 Day 3 Assignment
  
# Objective  
- This assignment will solidify your understanding of Babel and its role in JavaScript transpilation. You'll configure Babel in a project, use ES6+ features in your JavaScript code, and transpile it for broader browser compatibility.
  
# Instructions  
## Part 1: Setup and Configuration  
### Initialize Your Project:  
  
- Create a new directory named babel-transpilation-project.
- Initialize a new npm project and create a basic project structure including a src folder for your JavaScript files.
npm init -y  
  
### Install Babel:  
  
- Install @babel/core, @babel/cli, and @babel/preset-env as development dependencies in your project.
npm install --save-dev @babel/core @babel/cli @babel/preset-env  
  
### Configure Babel:  
  
- Create a babel.config.json file in the root of your project. Configure it to use @babel/preset-env.
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/cf1534c1-9581-4e8d-9315-4b7b25126ea6)  
  
## Part 2: Writing Modern JavaScript  
### Create JavaScript Files:  
  
- Inside the src directory, create several JavaScript files (index.js, module1.js, and module2.js). Use ES6+ features such as arrow functions, template literals, let, const, classes, default parameters, destructuring, and modules (import/export).
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/a204a14c-93b5-4726-8b22-40eb87372e4b)  
  
### Implement Functionality:  
  
- In module1.js and module2.js, define different functions or classes using ES6+ syntax. Export these modules.
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/54f5e00a-e8ed-4ce5-8949-0701837fc495)  
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/575d2919-d542-4d09-b770-6c1844f72684)  
- In index.js, import the modules from module1.js and module2.js. Use their functionality and ensure your code utilizes a variety of ES6+ features.
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/4e283d1e-6dc9-49f4-867d-61209abe3294)  
  
## Part 3: Transpiling with Babel  
### Transpile Your Code:  
  
- Use Babel to transpile your code from the src directory into a new directory named lib.
npm run babel
  
### Run and Verify:  
  
- Verify the transpiled code in the lib directory to ensure it's converted into a form compatible with older JavaScript versions.
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/f01c3405-7d4b-496c-abf5-c138c2b11cfb)  
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/a27dfd40-eb7d-4135-a010-1884ea2e274d)  
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/a44d224f-b4d3-470d-b2f3-148cd9f76eba)  
![image](https://github.com/rja87sd/babel-transpilation-project/assets/145504216/190a6998-b7a9-426e-a7fc-953096ad5a6c)  
    
## Part 4: Documentation  
### Update README.md:  
- Document how to install dependencies, configure Babel, and transpile the project.
- Include a brief explanation of how Babel transforms the modern JavaScript features used in your code to ensure compatibility with older browsers.
See above commands and screenshots.  Credit to ChatGPT for assistance and explanations of code functionality.
  
