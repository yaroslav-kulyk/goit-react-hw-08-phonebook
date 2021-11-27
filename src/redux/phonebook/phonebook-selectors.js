import { createSelector } from '@reduxjs/toolkit';

// // const getLoading = state => state.todos.loading;

// // const getFilter = state => state.todos.filter;

// const getAllContacts = state => state.phonebook.contacts;

const getContacts = state => state.phonebook.contacts;
const getIsLoading = state => state.phonebook.isLoading;
const getFilter = state => state.filter;

// // const getTotalTodoCount = state => {
// //   const todos = getAllTodos(state);
// //   return todos.length;
// // };

// // const getCompletedTodoCount = createSelector([getAllTodos], todos => {
// //   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// // });

// const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

// const todosSelectors = {
//   getLoading,
//   getFilter,
//   getVisibleTodos,
//   getTotalTodoCount,
//   getCompletedTodoCount,
// };
// export default todosSelectors;

const phonebookSelectors = {
  getContacts,
  getIsLoading,
  getFilter,
  //   getVisibleContacts,
};

// const getUsername = state => state.auth.user.name;

// const phonebookSelectors = {
//   getIsLoggedIn,
//   getUsername,
// };
// export default phonebookSelectors;
export default phonebookSelectors;
