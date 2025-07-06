"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Star } from "lucide-react"
import type { StickyNote } from "@/types"

interface StickyNoteCardProps {
  note: StickyNote
  isFreaky: boolean
}

export function StickyNoteCard({ note, isFreaky }: StickyNoteCardProps) {
  return (
    <Card
      className={`border-0 shadow-lg transition-all duration-300 cursor-pointer ${
        isFreaky
          ? `${note.colorFreaky} hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1`
          : `${note.colorSimple} hover:shadow-xl hover:-translate-y-1`
      }`}
    >
      <CardContent className="p-5 space-y-4">
        <p
          className={`text-sm leading-relaxed font-medium ${isFreaky ? "text-gray-900 dark:text-white drop-shadow-sm" : "text-gray-800"}`}
        >
          {note.text}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className={`text-2xl ${isFreaky ? "drop-shadow-sm dark:text-white text-gray-900" : ""}`}>{note.mood}</span>
            <div
              className={`flex items-center space-x-3 text-xs font-medium ${
                isFreaky ? "text-gray-900 dark:text-white/90" : "text-gray-600"
              }`}
            >
              <div
                className={`flex items-center space-x-1 rounded-full px-2 py-1 ${
                  isFreaky ? "bg-black/20 dark:bg-white/30 backdrop-blur-sm" : "bg-white/70"
                }`}
              >
                <Heart className="h-3 w-3" />
                <span>{note.hearts}</span>
              </div>
              <div
                className={`flex items-center space-x-1 rounded-full px-2 py-1 ${
                  isFreaky ? "bg-black/20 dark:bg-white/30 backdrop-blur-sm" : "bg-white/70"
                }`}
              >
                <Eye className="h-3 w-3" />
                <span>{note.views}</span>
              </div>
            </div>
          </div>

          {note.anonymous && (
            <Badge
              className={`text-xs border-0 font-medium ${
                isFreaky ? "bg-black/20 dark:bg-white/30 text-gray-900 dark:text-white backdrop-blur-sm" : "bg-gray-200 text-gray-700"
              }`}
            >
              Anonymous {isFreaky ? "🎭" : ""}
            </Badge>
          )}
        </div>

        {note.stamp && (
          <div className="flex justify-end">
            <Badge
              className={`text-xs border-0 font-medium ${
                isFreaky ? "bg-black/20 dark:bg-white/30 text-gray-900 dark:text-white backdrop-blur-sm" : "bg-gray-200 text-gray-700"
              }`}
            >
              <Star className="h-3 w-3 mr-1" />
              {note.stamp}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
