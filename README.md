# Mike's React Dev Environment
Based on JS Dev environment from Pluralsight source with Cory House (https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents). 

Modified to use:
- Webpack 2 (upgrade from Webpack 1)
- TypeScript for app code transpilation (instead of transpiling from ES6 to ES5 via Babel)
- TSLint (instead of EsLint) for linting app code.
- React for creating components.
- Hot reloading of React components in dev.
- Also add using JQuery and Toastr libraries.

To get set up (on a Windows machine, using VS Code as editor, with NodeJS installed.):
- If you don't have NodeJS installed, go to https://nodejs.org/en/ and install NodeJS (at least version 6.1).
- Create a folder.
- SHIFT + Right Click, open command window here.
- In command window: 
  - git clone (repo path)
  
    (That will create a reactdev folder with the code in it.)
- Open VS Code:
    - File -> Open Folder -> Open the new reactdev folder
    - CTRL + ` (backtick) will open a command terminal in VS Code
    - In VS Code command terminal:
      - npm install

        (That will download all the dependencies for the application via Node Package Manager.)
      - npm start

        (That will build and start the app in dev mode. It's served up from memory (not built files) and it uses hot reloading, so if you change the .tsx code, it'll rebuild and update the components in memory, without losing their current state. Very kewl. )
      - CTRL-C, then y and Enter

        (That will kill the dev build mode.)
      - npm run build 

        (That will build and start the app in production mode. It's served from the built files in the /dist folder, and does not have hot reloading.)
