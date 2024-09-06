'use client'

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blend-screen bg-violet-800 relative">
      {/* Background Image
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Smiling woman looking down"
          className="w-full h-full object-cover"
        />
      </div> /*}
      
      {/* Content */}
      <div className="z-10 w-full max-w-3xl px-4 space-y-8">
        {/* CTA */}
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-xl">
          How can I help you today?
        </h1>
        
        {/* Chat Input */}
        <div className="flex items-center space-x-2">
          <Input 
            className="flex-grow bg-white/90 backdrop-blur-sm" 
            placeholder="Type your message here..." 
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Sample Prompts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Add something to my todo list", "show me my budget", "transcribe some audio"].map((prompt, index) => (
            <Button 
              key={index} 
              variant="secondary" 
              className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
              onClick={() => window.location.assign("/todo")}
            >
              {prompt}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}