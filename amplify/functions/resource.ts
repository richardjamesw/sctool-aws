import { defineFunction } from "@aws-amplify/backend";
    
export const acGetContactsFunc = defineFunction({
  name: "acGetContactsFunc",
  entry: "./handler.ts"
});