/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContacts = /* GraphQL */ `subscription OnCreateContacts($filter: ModelSubscriptionContactsFilterInput) {
  onCreateContacts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContactsSubscriptionVariables,
  APITypes.OnCreateContactsSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteContacts = /* GraphQL */ `subscription OnDeleteContacts($filter: ModelSubscriptionContactsFilterInput) {
  onDeleteContacts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContactsSubscriptionVariables,
  APITypes.OnDeleteContactsSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateContacts = /* GraphQL */ `subscription OnUpdateContacts($filter: ModelSubscriptionContactsFilterInput) {
  onUpdateContacts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContactsSubscriptionVariables,
  APITypes.OnUpdateContactsSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
