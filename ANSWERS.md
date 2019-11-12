- [ ] Why would you use class component over function components (removing hooks from the question)?

When a product is already using class components. When you want to make use of life cycle methods. When you want to use state.


- [ ] Name three lifecycle methods and their purposes.

componentDidMount: to perform any asynchronus actions due to its position in the component lifecycle, after the bare minimum is rendered, and will only be called once in the whole lifecycle.

componentDidUpdate: to modify the DOM when a component has been updated. Can also be used to do network requests if necessary.

componentWillUnmount: to perform cleanup right before a component is destroyed.


- [ ] What is the purpose of a custom hook?

To allow you to reuse non-visual behavior and stateful logic throughout components by calling them over and over again.


- [ ] Why is it important to test our apps?

To make sure all good and bad cases of interaction perform how we intended them to. To save trouble on launch.
