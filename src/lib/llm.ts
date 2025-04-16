import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function* generateStream(
  model: string,
  messages: { role: string; content: string }[]
) {
  const lastMessage = messages[messages.length - 1].content;
  
  switch(model) {
    case 'gpt-4.1':
      const openaiStream = await openai.chat.completions.create({
        model: 'gpt-4-1106-preview',
        messages,
        stream: true,
      });

      for await (const chunk of openaiStream) {
        yield chunk.choices?.[0]?.delta?.content || '';
      }
      break;

    case 'gemini-pro':
      const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const geminiResult = await geminiModel.generateContentStream(lastMessage);
      
      for await (const chunk of geminiResult.stream) {
        yield chunk.text();
      }
      break;
  }
}
