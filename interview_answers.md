# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   A stateful component makes use of the useState hook, which allows you to store data locally within the component.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   componentWillMount executes right before the initial rendering. componentWillUpdate renders each time right before the component updates.

3. Define stateful logic.
   Stateful logic are functions that manipulate the state of a component.

4. What are the three step of creating a successful test? What is done in each phase?
   The 3 steps of creating a successful test are Arrange, Act, Assert. In arrange, you would render the component you are testing. In act you would define all the elements and user actions you need for the test. For assert you would set a condition that you expect to happen, and if it does, the test passes, otherwise the test fails.
