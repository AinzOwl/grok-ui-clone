import { generateStream } from '@/lib/llm';
import { StreamingTextResponse } from 'ai';

export async function POST(req: Request) {
  const { messages, model } = await req.json();
  const stream = await generateStream(model, messages);
  return new StreamingTextResponse(stream);
}
