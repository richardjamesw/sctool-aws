/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContacts = /* GraphQL */ `query GetContacts($id: ID!) {
  getContacts(id: $id) {
    associatedUser
    createdAt
    email
    fName
    id
    lName
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContactsQueryVariables,
  APITypes.GetContactsQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    acUrl
    company
    createdAt
    email
    fName
    id
    joinedDateTime
    lName
    profileOwner
    role
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listContacts = /* GraphQL */ `query ListContacts(
  $filter: ModelContactsFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      associatedUser
      createdAt
      email
      fName
      id
      lName
      profileOwner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactsQueryVariables,
  APITypes.ListContactsQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      acUrl
      company
      createdAt
      email
      fName
      id
      joinedDateTime
      lName
      profileOwner
      role
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
