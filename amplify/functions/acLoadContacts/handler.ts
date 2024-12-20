import type { Handler } from 'aws-lambda';
import axios from 'axios';

export const handler: Handler = async (event, context) => {
    // pull data from AC with user's URL and Key
    //const url = 'https://sduplessis12312.api-us1.com/api/3/contacts';
    //const key = '2e816a5d87518f84abb715eed5698e126d0c6c5617a2d1bb277cc45e2e10cd983dac276b';

    let res = await axios.get('https://sduplessis12312.api-us1.com/api/3/contacts', {
        headers: {
          'Api-Token': '2e816a5d87518f84abb715eed5698e126d0c6c5617a2d1bb277cc45e2e10cd983dac276b',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    });

    return JSON.stringify(res.data);
}
