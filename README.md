# Read-you README.md file Generator
## Description

Read-you is a command line interface app that allows users to create a professional README.md file for other applications and repositories. This CLI app allows the user to efficiently create a professional readme file for any and all projects and cut down on time.

![badge](https://img.shields.io/badge/License%20-MIT--License-brightgreen)

## Table of Contents

- [Technology](#Technology)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Credits](#credits)
- [License](#license)

## Technology

- JavaScript
- Node.js
- Inquirer

## Installation

Click on the repository link below to download the CLI app. Once there, download the zip file and copy into a directory or clone the repository into a directory using your terminal. Then, go to the directory where the CLI is housed and open in VS Code. Open the terminal in VS Code and make sure to download inquirer by running `npm i` in the terminal.

https://github.com/CullenKnott/read-you

## Usage

In the terminal, run the command `node index.js` and the inquirer package will begin to prompt you for information for the README.md file. Go through each prompt and answer them with the appropriate information. Once all the prompts are completed, then the information that was given by the user will then be converted into markdown format and the README.md file will then be generated.

Here is a video walkthrough on how to use the application

https://www.youtube.com/watch?v=za8Tdo5rxrI

## Test

To test this app, open up the file in VS Code. Open the terminal, change directory into the root folder `read-you`, and run ‘node index.js’. Answer the prompts and view the preview of the `new-README.md` file in the `utils` folder and then under the `generateMarkdown.js` file.

## License

MIT License

Copyright (c) [2023] [CullenKnott]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

