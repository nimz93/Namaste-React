1. What is `NPM`?
npm is the world's largest Software Library (Registry)
npm is also a software Package Manager and Installer

The registry contains over 800,000 code packages.
Open-source developers use npm to share software.
Many organizations also use npm to manage private development.

npm is free to use.
You can download all npm public software packages without any registration or logon.

npm includes a CLI (Command Line Client) that can be used to download and install software:
Windows Example
C:\>npm install <package>

npm is installed with Node.js
This means that you have to install Node.js to get npm installed on your computer.

Software Package Manager
The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.
All npm packages are defined in files called package.json.
The content of package.json must be written in JSON.
At least two fields must be present in the definition file: name and version.

2. What is `Parcel/Webpack`? Why do we need it?
`Parcel/Webpack` are bundlers.
Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.
A JavaScript bundler is a tool that puts your code and all its dependencies together in one JavaScript file.
It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins

3.What is `.parcel-cache`
The .cache folder is used by Parcel as a temporary cache directory when building your app for development and production.
The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. Committing it to git would be a bad idea - it would add a large number of (unnecessary) changes to your commit history, and it could easily get out-of-sync with the code that generated it.

4.What is `npx` ?
NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above

npx will check whether <command> exists in $PATH, or in the local project binaries, and execute it. So, for the above example, if you wish to execute the locally-installed package some-package all you need to do is type:

npx some-package
Another major advantage of npx is the ability to execute a package which wasn't previously installed:

$ npx create-react-app my-app
The above example will generate a react app boilerplate within the path the command had run in, and ensures that you always use the latest version of a generator or build tool without having to upgrade each time you’re about to use it.

5.What is difference between `dependencies` vs `devDependencies`
"dependencies": Packages required by your application in production.
"devDependencies": Packages that are only needed for local development and testing.

6. What is Tree Shaking?
Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

7.What is Hot Module Replacement?
Hot module replacement is one of the most useful features offered by bundler. It allows all kinds of modules, including JSON, CSS, and JS files, to be updated at runtime without needing a full refresh.
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.

    1. Dev Server
    Parcel has a built in server with it. The server will be started automatically by default parcel run command( npm parcel index.html). 
    By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used.
    2. Caching
    Parcel caches every files. If we restart the server then parcel will rebuild the updated files only.
    Parcel stores cache information inside .parcel-cache directory. We don't deploy this directory into git.
    Parcel uses efficeinet file watcher alogrithams to enable caching.
    3.Supports HTTPS
    Parcel supports HTTPS. We can simply make a https server using the command "parcel src/index.html --https".

    4.Hot reloading
    5. Zero configuration required

9. What is `.gitignore`? What should we add and not add into it?
The .gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo.
We should add node_modules, .parcel-cache and dist folder inside .gitignore.
We shouldn't add package.json & package-lock.json inside .gitignore

10. What is the difference between `package.json` and `package-lock.json`
package-lock.json: records the exact version of each installed package which allows you to re-install them. Future installs will be able to build an identical dependency tree.

In general, `package.json` doesn’t specify exact version numbers for dependencies (although it can if you want it to). Instead, `package.json` generally sets the minimum version for each dependency, and it can also set a range of versions. In addition, `package.json` only tracks top-level dependencies for the project. You don’t need to specify dependencies of dependencies; that’s handled automatically for you. This makes `package.json` smaller in size, more accurate, and much more human-readable.

11. Why should I not modify `package-lock.json`?
It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency.

You should commit package-lock.json to your code repository. Sharing this file with teammates and the production environment is the best way to make sure that everyone has the same configuration for their copy of the project.

12. What is `node_modules` ? Is it a good idea to push that on git?
The node_modules folder is used to save all downloaded packages from npm in your computer for the JavaScript project that you have.When we npm install them, they are downloaded from the web and copied into the node_modules folder.
We shouldn't push it to github , bacause everyone who clones our repository can download it themselves (based on your package.json or package-lock.json). node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in your project folders).

13.What is the `dist` folder?
The /dist stands for distributable.
The /dist folder contains the minimized version of the source code.
The code present in the /dist folder is actually the code which is used on production web applications.
Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
It is a production-ready compiled version of your code.

14. What is `browserlists`
Shared browser compatibility config for popular JavaScript tools like Autoprefixer, Babel, ESLint, PostCSS, and Webpack.
All tools will find target browsers automatically, when you add the following to package.json:

  "browserslist": [
    "defaults and supports es6-module",
    "maintained node versions"
  ]

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
Why would we want it?
During development we want to use the latest javascript features (e.g ES6) as it makes our jobs easier, leads to cleaner code, possibly better performance.

As javascript evolves, browsers won't support new features at the same pace, for instance not all browsers have built-in support for ES6 (aka ES2015). By using browserslist, transpilers/bundlers know what browsers you want to support, so they can "group" browsers in different categories and generate separate bundles, for example:

Legacy Bundle: Contains polyfills, larger bundle size, compatible with old browsers without ES6 support.
Modern Bundle: Smaller bundle size, optimized for modern browsers.
So our entrypoint (e.g index.html) is generated in a way that it'll load the required bundles according to current browser being used by a user.

This process is done by Angular, Vue and React. In the future, bundler tools may generate even more bundles depending on how different browsers are, one bundle per group of browsers. Generating more bundles optimizes your app even more, at the price of making the build slower (and more complex), it's a tradeoff.

