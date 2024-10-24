import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

const {username, userId, signInDetails} = await getCurrentUser();
const {attrib} = await fetchUserAttributes();

// Todo: remove, debugging only
console.log("username: " + username);
console.log("user id: " + userId);
console.log("signin details: " + signInDetails);

export function curUserHasRole(role) {
    return attrib.role == role;
}
