"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface FloatingActionButtonProps {
  onClick: () => void
  isFreaky: boolean
}

export function FloatingActionButton({ onClick, isFreaky }: FloatingActionButtonProps) {
  return (
    <Button
      size="lg"
      onClick={onClick}
      className={`fixed bottom-6 right-6 rounded-full shadow-2xl transition-all duration-300 px-8 py-4 font-bold text-lg ${
        isFreaky
          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white hover:scale-110 animate-pulse"
          : "bg-gray-900 hover:bg-gray-800 text-white hover:scale-105"
      }`}
    >
      <Plus className="h-6 w-6 mr-2" />
      {isFreaky ? "Get FREEKY! ✨" : "New Thought"}
    </Button>
  )
}
