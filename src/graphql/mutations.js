/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createNewLocation = /* GraphQL */ `
  mutation CreateNewLocation(
    $input: CreateNewLocationInput!
    $condition: ModelNewLocationConditionInput
  ) {
    createNewLocation(input: $input, condition: $condition) {
      id
      address
      prev_address
      arrival_time
      leave_time
      createdAt
      updatedAt
    }
  }
`;
export const updateNewLocation = /* GraphQL */ `
  mutation UpdateNewLocation(
    $input: UpdateNewLocationInput!
    $condition: ModelNewLocationConditionInput
  ) {
    updateNewLocation(input: $input, condition: $condition) {
      id
      address
      prev_address
      arrival_time
      leave_time
      createdAt
      updatedAt
    }
  }
`;
export const deleteNewLocation = /* GraphQL */ `
  mutation DeleteNewLocation(
    $input: DeleteNewLocationInput!
    $condition: ModelNewLocationConditionInput
  ) {
    deleteNewLocation(input: $input, condition: $condition) {
      id
      address
      prev_address
      arrival_time
      leave_time
      createdAt
      updatedAt
    }
  }
`;
