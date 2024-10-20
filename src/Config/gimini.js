/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */



import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai' ;

const apiKey = 'AIzaSyAT1cgjejBSmUC5G7T4y9YTyGE8tx5MXuU';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

async function runChat(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  // const response = result.response;
  // console.log(response.text());
  ;
}

export default runChat;