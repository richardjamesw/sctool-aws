import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { loadContacts } from './functions/acLoadContacts/resource';

const backend = defineBackend({
  auth,
  data,
  loadContacts
});
