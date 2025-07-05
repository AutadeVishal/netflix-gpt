import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});
//below function asking question to groq and getting response
// it is used in GPTSearchBar.jsx

export const getGroqChatCompletion = async (gptQuery) => {
  return await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: gptQuery,
      },
    ],
    model: "allam-2-7b",
  });
};