# GLOBALS - NO WINDOW

    - __dirname - path to current directory
    - __filename - filename
    - require - fucntion to use modules (commonJS)
    - module - info about current module (file)
    - process - info about env where the program is being executed
        - when we deploy your api or server where it is sitting .it is sitting on resolution . based on env we can make the bunch of decision on our application 
    - console 

In a vanilla JavaScript application running in a browser environment, the `window` object serves as the global object, providing access to various features and APIs related to the browser window. This includes functionalities like DOM manipulation, event handling, and accessing browser-specific properties.

One commonly used feature of the `window` object is the `querySelector` method, which allows developers to select elements from the DOM using CSS selectors. For example, `document.querySelector('.my-class')` would select the first element in the document with the class `my-class`.

However, in a Node.js environment, there is no browser window or DOM, so the `window` object is not available. Node.js is designed for server-side JavaScript execution, where the focus is on tasks like handling network requests, accessing the file system, and running server logic.

Instead of the `window` object, Node.js provides its own set of global objects and modules tailored for server-side development. For example, the `global` object serves as the global namespace in Node.js, and it provides access to utilities like `console`, `setTimeout`, and `setInterval`.

In the context of DOM manipulation or browser-specific functionality, Node.js replaces the `window` object with modules like `domino` or `jsdom`, which allow developers to create a virtual DOM environment within Node.js. These modules simulate a browser-like environment, enabling server-side DOM manipulation and testing.

In Node.js, attempting to access the `window` object will result in an error because `window` is not defined in a non-browser environment. This is because Node.js runs JavaScript code outside of a browser context, so it lacks browser-specific objects like `window`, `document`, and `navigator`.

# To overcome the problem there is Global scope(Anywhere from the app we can access)
