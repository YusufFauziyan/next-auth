import { gql } from "@apollo/client";

export const POST_LOGIN = gql`
  mutation execLogin($input: LoginInput) {
    login(input: $input) {
      token
      user {
        id
        email
        firstName
        lastName
        avatar
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation($id: String!, $input: UpdateUserInput) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      avatar
    }
  }
`;

export const POST_REGISTER = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      user {
        id
        firstName
        lastName
        email
        avatar
      }
      token
    }
  }
`;

export const POST_GITHUB = gql`
  mutation Github($input: CreateUserGithubInput!) {
    createUserGithub(input: $input) {
      id
      username
      accessToken
      refreshToken
      createdBy {
        email
        firstName
      }
    }
  }
`;

export const UPDATE_GITHUB = gql`
  mutation ($id: String!, $input: UpdateUserGithubInput!) {
    updateUserGithub(id: $id, input: $input) {
      id
      username
      accessToken
      refreshToken
      createdBy {
        email
        firstName
      }
    }
  }
`;

export const GET_GITHUB = gql`
  query {
    userGithubs {
      id
      username
      accessToken
      refreshToken
      createdBy {
        firstName
        email
      }
    }
  }
`;

export const GET_USER_GITHUB = gql`
  query getUserGithub($id: String) {
    userGithubs(where: { createdById: $id }) {
      id
      accessToken
      username
      createdBy {
        firstName
      }
    }
  }
`;
