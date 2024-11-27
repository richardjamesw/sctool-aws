import type { Schema } from "../data/resource";

export const handler: Schema["acGetContactsFunc"]["functionHandler"] = async (event) => {
    // args from .arguments()
    const { name } = event.arguments;
    // return typed from .returns()
    return 'Hello from ${name}!';
  };