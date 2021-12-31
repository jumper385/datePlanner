/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNewLocation = /* GraphQL */ `
  query GetNewLocation($id: ID!) {
    getNewLocation(id: $id) {
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
export const listNewLocations = /* GraphQL */ `
  query ListNewLocations(
    $filter: ModelNewLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        prev_address
        arrival_time
        leave_time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
