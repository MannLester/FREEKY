"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Board } from "@/types"

interface BoardTabsProps {
  boards: Board[]
  selectedBoard: string
  onBoardSelect: (boardName: string) => void
  isDarkMode: boolean
  isFreaky: boolean
}

export function BoardTabs({ boards, selectedBoard, onBoardSelect, isDarkMode, isFreaky }: BoardTabsProps) {
  return (
    <div
      className={`border-b ${
        isDarkMode
          ? isFreaky
            ? "border-purple-500/50"
            : "border-gray-700"
          : isFreaky
            ? "border-pink-300/50"
            : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 py-4 overflow-x-auto">
          {boards.map((board) => (
            <Button
              key={board.name}
              variant={selectedBoard === board.name ? "default" : "ghost"}
              className={`flex-shrink-0 rounded-full px-6 py-3 space-x-2 font-medium transition-all duration-300 ${
                selectedBoard === board.name
                  ? isFreaky
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                    : "bg-gray-900 text-white"
                  : isFreaky
                    ? "hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200 hover:scale-105"
                    : "hover:bg-gray-100"
              }`}
              onClick={() => onBoardSelect(board.name)}
            >
              <span className="text-lg">{board.icon}</span>
              <span>{board.name}</span>
              <Badge
                variant="secondary"
                className={`ml-2 text-xs font-medium ${
                  selectedBoard === board.name
                    ? isFreaky
                      ? "bg-white/20 text-white"
                      : "bg-white/20 text-white"
                    : isFreaky
                      ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white"
                      : "bg-gray-200 text-gray-700"
                }`}
              >
                {board.tag}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
