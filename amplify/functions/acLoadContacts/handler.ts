import axios from 'axios';
import { type Schema } from '../../data/resource';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
//import outputs from '../../../amplify_outputs.json';
import type { Handler } from 'aws-lambda';

//Amplify.configure(outputs);

export const handler: Handler = async (event, context) => {
  //const jwt = event.request.headers['authorization'];
  
  //const client = generateClient<Schema>({
  //  authMode: 'identityPool',
  //  authToken: jwt
  //});
  //const users = await client.models.UserProfile.list(); // todo confirm profileOwner matches? test if other users are coming in or just the one?
  //const prof = users.data[0];
  // pull data from AC with user's URL and Key
  //const url = prof.acUrl;
  //const key = prof.acKey;
  const url = 'https://sduplessis12312.api-us1.com/api/3/contacts';
  const key = '2e816a5d87518f84abb715eed5698e126d0c6c5617a2d1bb277cc45e2e10cd983dac276b';

  // todo verify url format
  let res = await axios.get(url + '/contacts', {
      headers: {
        'Api-Token': key,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
  });
  
  return JSON.stringify(res.data);
};