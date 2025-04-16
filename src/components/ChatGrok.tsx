"use client";
import { useRef, useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatGrok() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState<string>(process.env.NEXT_PUBLIC_DEFAULT_MODEL || "gpt-4.1");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    let aiContent = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, model }),
      });
      if (!res.body) throw new Error("No response body");
      const reader = res.body.getReader();
      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = value ? new TextDecoder().decode(value) : "";
        aiContent += chunk;
        setMessages((msgs) => {
          const last = msgs[msgs.length - 1];
          if (last && last.role === "assistant") {
            return [...msgs.slice(0, -1), { role: "assistant", content: aiContent }];
          } else {
            return [...msgs, { role: "assistant", content: aiContent }];
          }
        });
      }
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: "assistant", content: "[Error getting response]" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex-1 w-full overflow-y-auto px-2 py-2 space-y-4" style={{ maxHeight: 300 }}>
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "assistant" && (
              <Avatar className="bg-teal-500 h-8 w-8 mr-2">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}
            <div className={`rounded-xl px-4 py-2 text-base max-w-[70%] ${m.role === "user" ? "bg-[#0EA5E9] text-white" : "bg-[#2A2D34] text-gray-100"}`}>
              {m.content}
            </div>
            {m.role === "user" && (
              <Avatar className="bg-purple-700 h-8 w-8 ml-2">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 items-center w-full mt-2">
        <select
          name="model"
          className="bg-[#23272F] text-white p-2 rounded border border-[#444] outline-none"
          value={model}
          onChange={e => setModel(e.target.value)}
        >
          <option value="gpt-4.1">GPT-4.1</option>
          <option value="gemini-pro">Gemini Pro</option>
        </select>
        <Input
          className="flex-1 pr-20 py-3 pl-4 rounded-xl text-white border border-[#444] bg-[#23272F]"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="What do you want to know?"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !input.trim()} className="ml-2">
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </div>
  );
}
