/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Contacts = {
  __typename: "Contacts",
  associatedUser?: string | null,
  createdAt: string,
  email?: string | null,
  fName?: string | null,
  id: string,
  lName?: string | null,
  profileOwner?: string | null,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  acUrl?: string | null,
  company?: string | null,
  createdAt: string,
  email: string,
  fName?: string | null,
  id: string,
  joinedDateTime?: string | null,
  lName?: string | null,
  profileOwner?: string | null,
  role?: UserProfileRole | null,
  updatedAt: string,
};

export enum UserProfileRole {
  Admin = "Admin",
  Client = "Client",
  ClientManager = "ClientManager",
}


export type ModelContactsFilterInput = {
  and?: Array< ModelContactsFilterInput | null > | null,
  associatedUser?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lName?: ModelStringInput | null,
  not?: ModelContactsFilterInput | null,
  or?: Array< ModelContactsFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelContactsConnection = {
  __typename: "ModelContactsConnection",
  items:  Array<Contacts | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  acUrl?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  company?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  joinedDateTime?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  role?: ModelUserProfileRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileRoleInput = {
  eq?: UserProfileRole | null,
  ne?: UserProfileRole | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelContactsConditionInput = {
  and?: Array< ModelContactsConditionInput | null > | null,
  associatedUser?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fName?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  not?: ModelContactsConditionInput | null,
  or?: Array< ModelContactsConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateContactsInput = {
  associatedUser?: string | null,
  email?: string | null,
  fName?: string | null,
  id?: string | null,
  lName?: string | null,
};

export type ModelUserProfileConditionInput = {
  acUrl?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  company?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fName?: ModelStringInput | null,
  joinedDateTime?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  role?: ModelUserProfileRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  acUrl?: string | null,
  company?: string | null,
  email: string,
  fName?: string | null,
  id?: string | null,
  joinedDateTime?: string | null,
  lName?: string | null,
  profileOwner?: string | null,
  role?: UserProfileRole | null,
};

export type DeleteContactsInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateContactsInput = {
  associatedUser?: string | null,
  email?: string | null,
  fName?: string | null,
  id: string,
  lName?: string | null,
};

export type UpdateUserProfileInput = {
  acUrl?: string | null,
  company?: string | null,
  email?: string | null,
  fName?: string | null,
  id: string,
  joinedDateTime?: string | null,
  lName?: string | null,
  profileOwner?: string | null,
  role?: UserProfileRole | null,
};

export type ModelSubscriptionContactsFilterInput = {
  and?: Array< ModelSubscriptionContactsFilterInput | null > | null,
  associatedUser?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  fName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionContactsFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  acUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  company?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  fName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  joinedDateTime?: ModelSubscriptionStringInput | null,
  lName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetContactsQueryVariables = {
  id: string,
};

export type GetContactsQuery = {
  getContacts?:  {
    __typename: "Contacts",
    associatedUser?: string | null,
    createdAt: string,
    email?: string | null,
    fName?: string | null,
    id: string,
    lName?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    acUrl?: string | null,
    company?: string | null,
    createdAt: string,
    email: string,
    fName?: string | null,
    id: string,
    joinedDateTime?: string | null,
    lName?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactsConnection",
    items:  Array< {
      __typename: "Contacts",
      associatedUser?: string | null,
      createdAt: string,
      email?: string | null,
      fName?: string | null,
      id: string,
      lName?: string | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      acUrl?: string | null,
      company?: string | null,
      createdAt: string,
      email: string,
      fName?: string | null,
      id: string,
      joinedDateTime?: string | null,
      lName?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateContactsMutationVariables = {
  condition?: ModelContactsConditionInput | null,
  input: CreateContactsInput,
};

export type CreateContactsMutation = {
  createContacts?:  {
    __typename: "Contacts",
    associatedUser?: string | null,
    createdAt: string,
    email?: string | null,
    fName?: string | null,
    id: string,
    lName?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    acUrl?: string | null,
    company?: string | null,
    createdAt: string,
    email: string,
    fName?: string | null,
    id: string,
    joinedDateTime?: string | null,
    lName?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type DeleteContactsMutationVariables = {
  condition?: ModelContactsConditionInput | null,
  input: DeleteContactsInput,
};

export type DeleteContactsMutation = {
  deleteContacts?:  {
    __typename: "Contacts",
    associatedUser?: string | null,
    createdAt: string,
    email?: string | null,
    fName?: string | null,
    id: string,
    lName?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    acUrl?: string | null,
    company?: string | null,
    createdAt: string,
    email: string,
    fName?: string | null,
    id: string,
    joinedDateTime?: string | null,
    lName?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type UpdateContactsMutationVariables = {
  condition?: ModelContactsConditionInput | null,
  input: UpdateContactsInput,
};

export type UpdateContactsMutation = {
  updateContacts?:  {
    __typename: "Contacts",
    associatedUser?: string | null,
    createdAt: string,
    email?: string | null,
    fName?: string | null,
    id: string,
    lName?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    acUrl?: string | null,
    company?: string | null,
    createdAt: string,
    email: string,
    fName?: string | null,
    id: string,
    joinedDateTime?: string | null,
    lName?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnCreateContactsSubscriptionVariables = {
  filter?: ModelSubscriptionContactsFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateContactsSubscription = {
  onCreateContacts?:  {
    __typename: "Contacts",
    associatedUser?: string | null,
    createdAt: string,
    email?: string | null,
    fName?: string | null,
    id: string,
    lName?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    acUrl?: string | null,
    company?: string | null,
    createdAt: string,
    email: string,
    fName?: string | null,
    id: string,
    joinedDateTime?: string | null,
    lName?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactsSubscriptionVariables = {
  filter?: ModelSubscriptionContactsFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteContactsSubscription = {
  onDeleteContacts?:  {
    __typename: "Contacts",
    associatedUser?: string | null,
    createdAt: string,
    email?: string | null,
    fName?: string | null,
    id: string,
    lName?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    acUrl?: string | null,
    company?: string | null,
    createdAt: string,
    email: string,
    fName?: string | null,
    id: string,
    joinedDateTime?: string | null,
    lName?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactsSubscriptionVariables = {
  filter?: ModelSubscriptionContactsFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateContactsSubscription = {
  onUpdateContacts?:  {
    __typename: "Contacts",
    associatedUser?: string | null,
    createdAt: string,
    email?: string | null,
    fName?: string | null,
    id: string,
    lName?: string | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    acUrl?: string | null,
    company?: string | null,
    createdAt: string,
    email: string,
    fName?: string | null,
    id: string,
    joinedDateTime?: string | null,
    lName?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};
