import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const res = await fetch('https://lm.ainz.uk/v1/models', {
    headers: {
      'Authorization': 'Bearer UzUgpip1etAnmpYb6HWaR0G6M5by452CE91fCTMOGPwzWn5l',
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch models' }), { status: 500 });
  }
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
