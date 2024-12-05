import { Handler } from 'aws-lambda'
import { get } from 'aws-amplify/api'

export const handler: Handler = async (event) => {
    console.log("event", event);
    const resOp = get({
        apiName: 'https://sduplessis12312.api-us1.com/api/3/',
        path: 'contacts'
    });
    return await resOp.response;
};
