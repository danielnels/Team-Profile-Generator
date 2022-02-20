# Team-Profile-Generator

 ## Description

App to dynamically generate a work team profile using Node JS.

 ## Table Of Contents
  * [Description](#description)
  * [User Story](#user-story)
  * [This Weeks task](#this-weeks-task)
  * [Acceptance Criteria](#acceptance-criteria )
  * [Walkthrough Video](#walkthrough-video)
  * [Generated HTML file image ](#generated-html-file-image)
  * [Generated HTML file ](#generated-html-file)
  * [Usage](#usage)
  * [Technologies Used](#technologies-used)
  * [Packages](#packages)
  * [Tests](#tests)
  * [License](#license)
  

## This weeks Task

This Weeks task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Usage

Open the terminal and run node index.js  and hit the enter key. 
The user will be prompted to anwser the Team profile questions. Once completed the user selecs the option "I am done editing my team", the html file is dynamically generated and will be locating in the dist folder. 

## Technologies Used
-Html
-Node.js
-Bootstrap
-Font awesome 

## Packages
-Package.json
-Npm inquirer
-npm jest

## Tests 
Install the module "jest" make sure the script is correct the the package.json (should be test "jest"), run npm test in the terminal.


## Walkthrough Video


https://user-images.githubusercontent.com/94213022/154829486-7128ef43-94a3-4336-b8e0-0567c8ab990d.mp4


## Generated HTML file 

https://github.com/danielnels/Team-Profile-Generator/blob/main/dist/myTeam.html

## Generated HTML file image

![Screen Shot](https://user-images.githubusercontent.com/94213022/154835798-6d19a05c-090b-4f4f-9ef8-84349f3cf1e3.png)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
