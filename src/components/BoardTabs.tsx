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

export const BoardTabs = ({
  boards,
  selectedBoard,
  onBoardSelect,
  isFreaky,
  isDarkMode,
}: BoardTabsProps) => {
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
        <div className="flex space-x-4 py-4 overflow-x-auto relative">
          {boards.map((board) => (
            <Button
              key={board.name}
              variant={selectedBoard === board.name ? "default" : "ghost"}
              className={`flex-shrink-0 rounded-t-lg px-6 py-3 space-x-2 font-medium transition-all duration-300 relative ${
                selectedBoard === board.name
                  ? isFreaky
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                    : isDarkMode
                      ? "bg-gray-800 text-white ring-2 ring-blue-500 ring-inset border-b-4 border-blue-500"
                      : "bg-gray-700 text-white"
                  : isFreaky
                    ? isDarkMode
                      ? "text-white border border-white/30 bg-purple-900/50 hover:bg-purple-800/70 hover:scale-105"
                      : "hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200 hover:scale-105"
                    : isDarkMode
                      ? "text-gray-300 hover:bg-gray-800"
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
                      ? isDarkMode
                        ? "bg-white/40 text-white font-bold backdrop-blur-sm border border-white/30"
                        : "bg-gradient-to-r from-pink-400 to-purple-400 text-white"
                      : isDarkMode
                        ? "bg-gray-700 text-white"
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
