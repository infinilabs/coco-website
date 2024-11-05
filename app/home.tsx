"use client";

import { useState } from "react";
import { Bot, Github, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-800">
      {/* Neural network animation overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Coco AI
            </h1>
          </div>
          <Button variant="outline" className="gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Search. Connect. Collaborate.
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            All in one place. Powered by advanced AI to help you discover, learn, and create.
          </p>
        </div>

        {/* Search Section */}
        <Card className="max-w-2xl mx-auto bg-black/50 border border-gray-800 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Ask whatever you want..."
              className="w-full pl-12 pr-12 py-6 text-lg bg-gray-900/50 border-gray-700 rounded-xl"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
          </div>

          {/* Sample Result */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-900/30 border border-gray-800">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Latest Insights</h3>
              <p className="text-gray-300">
                Discover how AI is transforming collaboration across industries. Our latest analysis shows a 300% increase in AI-powered productivity tools.
              </p>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Search className="w-6 h-6 text-purple-400" />,
              title: "Smart Search",
              description: "Advanced AI-powered search across multiple data sources"
            },
            {
              icon: <Bot className="w-6 h-6 text-pink-400" />,
              title: "AI Assistant",
              description: "24/7 intelligent assistance for your queries and tasks"
            },
            {
              icon: <Sparkles className="w-6 h-6 text-blue-400" />,
              title: "Neural Processing",
              description: "State-of-the-art neural networks for precise results"
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 bg-black/30 border border-gray-800 backdrop-blur-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
