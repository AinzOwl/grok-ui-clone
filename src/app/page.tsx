import { GrokLogo } from "@/components/ui/grok-logo";
import ChatGrok from "@/components/ChatGrok";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Paperclip, ChevronDown, Bell, ArrowUp, Search, Lightbulb, MessageSquare, Image, Edit, Users, Folder } from "lucide-react";

export default function Home() {
  const userName = "Antony";
  const greeting = "Good evening";

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1A1B1E]">
      {/* Header */}
      <header className="w-full px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GrokLogo className="w-6 h-6 text-white" />
          <span className="font-semibold text-lg">Grok</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="grok-icon-button">
            <Bell className="w-4 h-4" />
          </button>
          <button className="grok-icon-button">
            <Search className="w-4 h-4" />
          </button>
          <Avatar className="bg-purple-700 h-8 w-8 text-white text-sm">
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </header>


      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl px-4 pb-8 mt-24">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-medium mb-2 text-white">
            {greeting}, {userName}.
          </h1>
          <p className="text-xl text-gray-400 font-normal">How can I help you today?</p>
        </div>

        {/* Chat Area */}
        <ChatGrok />

        {/* Action Buttons */}
        <div className="flex gap-2 items-center">
          <button className="grok-icon-button">
            <Paperclip className="w-4 h-4" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="grok-action-button">
                <Search className="w-4 h-4" />
                DeepSearch
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-800 border-zinc-700">
              <DropdownMenuItem className="hover:bg-zinc-700">Option 1</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-700">Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="grok-action-button">
            <Lightbulb className="w-4 h-4" />
            Think
          </button>

          <div className="ml-auto flex gap-2 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="grok-action-button">
                  Grok 3
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-800 border-zinc-700">
                <DropdownMenuItem className="hover:bg-zinc-700">Grok 1</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-700">Grok 2</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-700">Grok 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="grok-icon-button">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto mb-8">
        <button className="grok-action-button">
          <Search className="w-4 h-4" />
          Research
        </button>
        <button className="grok-action-button">
          <Image className="w-4 h-4" />
          Create images
        </button>
        <button className="grok-action-button">
          <Edit className="w-4 h-4" />
          Edit Image
        </button>
        <button className="grok-action-button">
          <Users className="w-4 h-4" />
          Personas
        </button>
        <button className="grok-action-button flex items-center">
          <Folder className="w-4 h-4" />
          Workspaces
          <span className="new-tag ml-1">New</span>
        </button>
      </div>
    </main>
  );
}
