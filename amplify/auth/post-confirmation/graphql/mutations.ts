/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContacts = /* GraphQL */ `mutation CreateContacts(
  $condition: ModelContactsConditionInput
  $input: CreateContactsInput!
) {
  createContacts(condition: $condition, input: $input) {
    associatedUser
    createdAt
    email
    fName
    id
    lName
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactsMutationVariables,
  APITypes.CreateContactsMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteContacts = /* GraphQL */ `mutation DeleteContacts(
  $condition: ModelContactsConditionInput
  $input: DeleteContactsInput!
) {
  deleteContacts(condition: $condition, input: $input) {
    associatedUser
    createdAt
    email
    fName
    id
    lName
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactsMutationVariables,
  APITypes.DeleteContactsMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateContacts = /* GraphQL */ `mutation UpdateContacts(
  $condition: ModelContactsConditionInput
  $input: UpdateContactsInput!
) {
  updateContacts(condition: $condition, input: $input) {
    associatedUser
    createdAt
    email
    fName
    id
    lName
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactsMutationVariables,
  APITypes.UpdateContactsMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
