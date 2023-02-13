# Namaste-Dev-Assignment-1
1. What is Emmet ?
Emmet is a web-developer’s toolkit for boosting HTML & CSS code writing.

With Emmet, you can type expressions (abbreviations) similar to CSS selectors and convert them into code fragment with a single keystroke. For example, this abbreviation:
PUSHED ITEMS TO BRANCH MAIN
ul#nav>li.item$*4>a{Item $}
...can be expanded into:

<ul id="nav">
    <li class="item1"><a href="">Item 1</a></li>
    <li class="item2"><a href="">Item 2</a></li>
    <li class="item3"><a href="">Item 3</a></li>
    <li class="item4"><a href="">Item 4</a></li>
</ul>

Emmet is built in visual studio code,
In Vs Code, Emmet abbreviation and snippet expansions are enabled by default in html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less and stylus files, as well as any language that inherits from any of the above like handlebars and php.

2. Difference between library and framework
a.Library is used to avoid writing time consuming repetitive functions. Library implements a particular function. Some examples of popular libraries are React, and JQuery.
b. framework as a collection of libraries implementing a particular methodology. Some of the more commonly   known frameworks are Angular, Vue, Model View Controller, and Model View Presenter.
when an application code uses a library, the developer writing the code is in charge of the application flow. This means the developer decides when to call the library. However, when we use a framework, the framework decides when to call the library. This shift in control of calling the library from the application code to the framework is an inversion of control.

3.What is CDN? Why do we use it?
A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are. Data centers across the globe use caching, a process that temporarily stores copies of files, so that you can access internet content from a web-enabled device or browser more quickly through a server near you. CDNs cache content like web pages, images, and video in proxy servers near to your physical location. This allows you to do things like watch a movie, download software, check your bank balance, post on social media, or make purchases, without having to wait for content to load.

4.Why is React known as React?
The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

“And it’s called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.”

5.What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

Tip: The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).

Tip: Also look at the integrity attribute.

Values: This attribute contains three values which are given below –

anonymous: It has a default value. It defines a CORS request which will be sent without passing the credential information.
use-credentials: A cross-origin request will be sent with credentials, cookies, and certificate.
""
Setting the attribute name to an empty value, like crossorigin or crossorigin="", is the same as anonymous.

6. What is diference between React and ReactDOM
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.
The react package holds the react source for components, state, props and all the code that is react.

The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().
Why separate them?

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development).

React components are such a great way to organize UI that it has now spread to mobile to react is used in web and in mobile. react-dom is used only in web apps.

7.What is difference between react.development.js and react.production.js files via CDN?
React.development.js is the development version of React, which is intended for use during the development process of a web application. This version of React includes additional features such as error messages and warnings that can help developers diagnose and fix issues in their code. It also includes additional comments and documentation that can help developers understand how the code works.

React.production.js, on the other hand, is the production version of React, which is intended for use in a live, production environment. This version of React has been minified and optimized for performance, and it does not include the additional features and comments found in the development version. It will be smaller in size than the development version.

8.What is async and defer?

Async in script tag in JavaScript is a way to load scripts asynchronously. That means, if a script is async, it will be loaded independently of other scripts on the page, and will not block the page from loading.

If you have a page with several external scripts, loading them all asynchronously can speed up the page load time, because the browser can download and execute them in parallel.

To use async, simply add the async attribute to your script tag:

<script async src="script.js"></script>

Code language: JavaScript (javascript)
What is defer in script tag in JavaScript?
By using the defer attribute in HTML, the browser will load the script only after parsing (loading) the page. This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load.

To use defer, simply add the defer attribute to your script tag:

<script defer src="script.js"></script>
The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.

Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.