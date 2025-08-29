1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> getElementById → Returns a single element by its unique ID.
getElementsByClassName → Returns an HTMLCollection of elements by class name.
querySelector → Returns the first element that matches a CSS selector.
querySelectorAll → Returns a NodeList of all elements that match a CSS selector.

2. How to create and insert a new element into the DOM?

=> A new element is creating using document.createElement() , content can be added using properties like textContent or innerHTML, and finally we insert it into the DOM with methods like appendChild() or append().

3. What is Event Bubbling and how does it work?

=> Event bubbling is the process where an event starts from the target element and than propagates upward through its ancestors in the DOM hierarchy.

4. What is Event Delegation in JavaScript? Why is it useful?

=> Event delegations is a technique where a single event listener is attached to a parent element to manage events for multiple child elements through events bubbling.

5. What is the difference between preventDefault() and stopPropagation() methods?

=> preventDefault() --> cancels the default behaviors of an element .
stopPropagation() --> Prevents the event from propagating further up the DOM tree. 