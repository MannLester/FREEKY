"use client"

import { StickyNoteCard } from "./StickyNoteCard"
import type { StickyNote } from "@/types"

interface StickyNotesGridProps {
  notes: StickyNote[]
  isFreaky: boolean
}

export function StickyNotesGrid({ notes, isFreaky }: StickyNotesGridProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notes.map((note) => (
          <StickyNoteCard key={note.id} note={note} isFreaky={isFreaky} />
        ))}
      </div>
    </main>
  )
}
