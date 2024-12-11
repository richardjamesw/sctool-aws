/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContacts = /* GraphQL */ `subscription OnCreateContacts(
  $filter: ModelSubscriptionContactsFilterInput
  $profileOwner: String
) {
  onCreateContacts(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContactsSubscriptionVariables,
  APITypes.OnCreateContactsSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteContacts = /* GraphQL */ `subscription OnDeleteContacts(
  $filter: ModelSubscriptionContactsFilterInput
  $profileOwner: String
) {
  onDeleteContacts(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContactsSubscriptionVariables,
  APITypes.OnDeleteContactsSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateContacts = /* GraphQL */ `subscription OnUpdateContacts(
  $filter: ModelSubscriptionContactsFilterInput
  $profileOwner: String
) {
  onUpdateContacts(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContactsSubscriptionVariables,
  APITypes.OnUpdateContactsSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
