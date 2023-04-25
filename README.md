# README-Generator

## Description
User Story

AS A developer <br>
I WANT a README generator <br>
SO THAT I can quickly create a professional README for a new project <br>

Acceptance Criteria

GIVEN a command-line application that accepts user input <br>
WHEN I am prompted for information about my application repository <br>
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions <br>
WHEN I enter my project title <br>
THEN this is displayed as the title of the README <br>
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions <br>
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests <br>
WHEN I choose a license for my application from a list of options <br>
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under <br>
WHEN I enter my GitHub username <br>
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile <br>
WHEN I enter my email address <br>
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions <br>
WHEN I click on the links in the Table of Contents <br>
THEN I am taken to the corresponding section of the README <br>

Starter code URL: https://utah.bootcampcontent.com/utah-coding-bootcamp/UofU-VIRT-FSF-PT-02-2023-U-LOLC/-/tree/main/01%20-%20Class%20Content/09-NodeJS/02-Challenge/Develop 

The motivation behind this project was to create a generator that would create a README.md for the user based on the answers they submit in the command line. I learned how to use the template string literals to input the answers of the user into the readme. 

## Installation

To install this project the user needs to access the code from the repository and clone it or download a zip file. When the user has the code open they will need to open the integrated terminal of the index.js and run "node index.js"

## Usage

The user will access the terminal with the code and when they are in the index.js they will type "node index.js" They will then answer each question as it applies to the project that they are creating. Most of the questions require input from the user, but the license will require a selection after scrolling through the options and pressing space bar. When all of the selections are made the user will get a message that their readme was created successfully and they can find it in the list of files under "readMESample.md. The user will be able to go through the table of contents and go directly to the section they chose. 

Screenshot: (https://user-images.githubusercontent.com/123035338/234189424-0d28eb6e-6e37-43fc-a9d8-99bd800eb5c6.jpeg)
Sample Video: [README-Generator Video.webm](https://user-images.githubusercontent.com/123035338/234187043-f887921e-ee2f-4941-bdcf-e053b13ee2e3.webm)

## License

MIT License

Copyright (c) 2023 DMemmott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
