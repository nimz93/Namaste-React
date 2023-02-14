1. What is JSX ?
JSX is a statically-typed, object-oriented programming language compiling to standalone JavaScript. The reason why JSX was developed is our need for a more robust programming language than JavaScript. JSX is, however, fairly close to JavaScript especially in its statements and expressions.

JSX is an extension of the JavaScript language which provides a way to structure component rendering using syntax similar to HTML. JSX gives us the ability to write HTML elements in Javascript and place them in the DOM by converting the HTML tags into React elements without the need for other methods like createElement() or appendChild(). This combination of Javascript and HTML leads to having more powerful applications with boosted performance.
 eg. 
 React element with JSX
 const myElement = <h1>I Love JSX!</h1>;
React element without JSX
 const myElement = React.createElement('h1', {}, 'I do not use JSX!');

 2. Superpowers of JSX
    1. JSX Prevents Injection Attacks
        It is safe to embed user input in JSX:
        const title = response.potentiallyMaliciousInput;
        // This is safe:
        const element = <h1>{title}</h1>;
        By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

    2. JSX Represents Objects
        Babel compiles JSX down to React.createElement() calls.

        These two examples are identical:

        const element = (
        <h1 className="greeting">
            Hello, world!
        </h1>
        );
        const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
        );
        React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

        // Note: this structure is simplified
        const element = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
        };
        These objects are called “React elements”. React reads these objects and uses them to construct the DOM and keep it up to date.

    3. JSX acts as variables
        JSX elements can act as values for identifiers. The following example shows how to declare a variable with a JSX element as the value.
        const hello = <h1>Hello, World!</h1>;   

    4. Expressions in JSX 
       JSX supports all JavaScript Expressions by wrapping them inside a pair of curly brackets. The following example displays how to use a primary expression and a combination of object access and function invocation expression.
       const name = "Danyal";
       const hello = <h1>Hello, {name}</h1>;    

       const time = "Current time: {Clock.getUserTimeZoneCurrentTime()}";

    5. Attributes in JSX
       JSX supports attributes the same way as HTML does except for the fact that attributes are written in camelCasing instead of kebab-casing for an attribute that spans multiple words.
        <!-- HTML -->
        <img src="..path_to_img../img.jpg" accesskey="img" />
        {/* JSX */}
        const imgSrc = "..path_to_img../img.jpg";
        <img src={imgSrc} accessKey="img" />   

    6. Props in JSX
        The values assigned to each attribute are passed down as properties (props) to the React element. This enhances the power of JSX since they can now handle dynamic data to create React elements. The following example shows how a single Profile component can be used to create multiple dynamic instances.
        {/* Creating Profile element using JSX */}
        <Profile name="Danyal" bio="I love developing cool apps" />
        <Profile name="Pikachu" bio="I love Pokémon as well" />
        {/* React Profile Component */}
        const Profile = (props) => (
        <section className="profile">
            <h3>Name: {props.name}</h3>
            <p>{props.bio}</p>
        </section>
        );
        Note: Attributes passed without any value are defaulted as true when received as props <input type="text" disabled />   

3. Role of type attribute in script tag ? What options can I use there ?   
   The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags.

   The value of this attribute will be one of the following:

    Attribute is not set (default), an empty string, or a JavaScript MIME type
    Indicates that the script is a "classic script", containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type. JavaScript MIME types are listed in the IANA media types specification.

    module
    This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect. For information on using module, see our JavaScript modules guide. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.

    importmap
    This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

    Any other value
    The embedded content is treated as a data block, and won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. All of the other attributes will be ignored, including the src attribute. 

4. {TitleComponent} vs <TitleComponent /> vs <TitleComponent></TitleComponent>  
   These all are the different ways of calling components.       
