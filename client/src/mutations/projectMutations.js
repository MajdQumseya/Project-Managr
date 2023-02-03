import { gql } from '@apollo/client';

const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $status: String!) {
    addProject(name: $name, description: $description, status: $status) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description   
      status
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!) {
    updateProject(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };