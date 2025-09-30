import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL
});


export async function* generateStream(
  model: string,
  messages: { role: string; content: string }[]
) {
  const lastMessage = messages[messages.length - 1].content;

      const openaiStream = await openai.chat.completions.create({
        model: model,
        messages,
        stream: true,
      });

      for await (const chunk of openaiStream) {
        yield chunk.choices?.[0]?.delta?.content || '';
      }
}
