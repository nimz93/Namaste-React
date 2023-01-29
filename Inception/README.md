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
a. Library implements a particular function. Some examples of popular libraries are React, and JQuery.
b. framework as a collection of libraries implementing a particular methodology. Some of the more commonly   known frameworks are Angular, Vue, Model View Controller, and Model View Presenter.
when an application code uses a library, the developer writing the code is in charge of the application flow. This means the developer decides when to call the library. However, when we use a framework, the framework decides when to call the library. This shift in control of calling the library from the application code to the framework is an inversion of control.