import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const client = new OpenAI({
  // apiKey: process.env.REACT_APP_OPENAI_KEY,
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default client;
