import type { Handler } from 'aws-lambda';
import { getAmplifyDataClientConfig } from '@aws-amplify/backend/function/runtime';
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';
import { type Schema } from "../../data/resource";
import { generateClient } from 'aws-amplify/data';
import { env } from '$amplify/env/post-confirmation';
import axios from 'axios';

Amplify.configure(outputs);

export const handler: Handler = async (event, context) => {
    let jwt = event.requestContext.authorizer?.jwt?.claims?.['id_token'];
    if (!jwt) {
      const authHeader = event.request.headers['Authorization'];
      jwt = authHeader;
    }

    const client = generateClient<Schema>({
      authMode: "identityPool",
      authToken: jwt,
    });

    const users = await client.models.UserProfile.list({
      authMode: "identityPool",
      authToken: jwt,
    }); // todo confirm profileOwner matches? test if other users are coming in or just the one?
    const prof = users.data[0];

    // pull data from AC with user's URL and Key
    const url = prof.acUrl;
    const key = prof.acKey;
    //const url = 'https://sduplessis12312.api-us1.com/api/3/contacts';
    //const key = '2e816a5d87518f84abb715eed5698e126d0c6c5617a2d1bb277cc45e2e10cd983dac276b';

    // todo verify url format
    let res = await axios.get(url + '/contacts', {
        headers: {
          'Api-Token': key,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    });

    return JSON.stringify(res.data);
}
