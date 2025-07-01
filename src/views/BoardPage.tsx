"use client"

import { useState } from "react"
import { Header } from "../components/Header"
import { MotivationalBanner } from "../components/MotivationalBanner"
import { BoardTabs } from "../components/BoardTabs"
import { StickyNotesGrid } from "../components/StickyNoteGrid"
import { FloatingActionButton } from "../components/FloatingActionButton"
import { NewThoughtModal } from "../components/NewThoughtModal"
import { ProfileModal } from "../components/ProfileModal"
import type { DesignMode, Board, StickyNote, UnlockedItem } from "@/types"

export default function FreekyApp() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [designMode, setDesignMode] = useState<DesignMode>("Simple Design")
  const [selectedBoard, setSelectedBoard] = useState("World Board")
  const [isNewThoughtOpen, setIsNewThoughtOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const isFreaky = designMode === "FREEKY!"

  const boards: Board[] = [
    { name: "World Board", icon: "🌍", tag: "Always Open", active: true },
    { name: "Travel Board", icon: "✈️", tag: "Ends in 3 days", active: false },
    { name: "Unsent Letters", icon: "💌", tag: "New", active: false },
    { name: "Midnight Thoughts", icon: "🌙", tag: "Night Only", active: false },
    { name: "Dream Log", icon: "💭", tag: "Weekly", active: false },
  ]

  const stickyNotes: StickyNote[] = [
    {
      id: 1,
      text: "Sometimes the best conversations happen in silence, when you're just sitting with someone and feeling completely understood.",
      mood: "😌",
      hearts: 12,
      views: 45,
      colorFreaky: "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400",
      colorSimple: "bg-pink-100 border border-pink-200",
      stamp: "Quiet Wanderer",
      anonymous: false,
    },
    {
      id: 2,
      text: "I wonder if clouds ever get tired of floating. Do they dream of being rain?",
      mood: "☁️",
      hearts: 8,
      views: 23,
      colorFreaky: "bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500",
      colorSimple: "bg-blue-100 border border-blue-200",
      stamp: null,
      anonymous: true,
    },
    {
      id: 3,
      text: "Coffee tastes different when you're watching the sunrise. It's like the world is waking up with you.",
      mood: "☀️",
      hearts: 15,
      views: 67,
      colorFreaky: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
      colorSimple: "bg-yellow-100 border border-yellow-200",
      stamp: "Early Bird",
      anonymous: false,
    },
    {
      id: 4,
      text: "There's something magical about old bookstores. Each book holds a thousand untold stories waiting to find their reader.",
      mood: "📚",
      hearts: 20,
      views: 89,
      colorFreaky: "bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400",
      colorSimple: "bg-green-100 border border-green-200",
      stamp: "Book Lover",
      anonymous: false,
    },
    {
      id: 5,
      text: "I miss the sound of rain on the roof when I was little. Everything felt safer then.",
      mood: "🌧️",
      hearts: 18,
      views: 56,
      colorFreaky: "bg-gradient-to-br from-violet-400 via-purple-500 to-pink-500",
      colorSimple: "bg-purple-100 border border-purple-200",
      stamp: null,
      anonymous: true,
    },
    {
      id: 6,
      text: "Dancing alone in your room hits different. No judgment, just pure joy and terrible moves.",
      mood: "💃",
      hearts: 25,
      views: 78,
      colorFreaky: "bg-gradient-to-br from-fuchsia-400 via-pink-400 to-rose-400",
      colorSimple: "bg-rose-100 border border-rose-200",
      stamp: "Free Spirit",
      anonymous: false,
    },
    {
      id: 7,
      text: "Why do we whisper in libraries but shout at concerts? Context is everything.",
      mood: "🤔",
      hearts: 14,
      views: 32,
      colorFreaky: "bg-gradient-to-br from-lime-400 via-green-400 to-emerald-500",
      colorSimple: "bg-emerald-100 border border-emerald-200",
      stamp: "Deep Thinker",
      anonymous: false,
    },
    {
      id: 8,
      text: "The universe is under no obligation to make sense to you, and that's beautifully freeing.",
      mood: "🌌",
      hearts: 31,
      views: 95,
      colorFreaky: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      colorSimple: "bg-indigo-100 border border-indigo-200",
      stamp: "Cosmic Soul",
      anonymous: true,
    },
  ]

  const unlockedItems: UnlockedItem[] = [
    {
      type: "stamp",
      name: "Quiet Wanderer",
      icon: "🚶‍♀️",
      colorFreaky: "bg-gradient-to-r from-purple-400 to-pink-400",
      colorSimple: "bg-purple-200",
    },
    {
      type: "stamp",
      name: "Early Bird",
      icon: "🐦",
      colorFreaky: "bg-gradient-to-r from-yellow-400 to-orange-400",
      colorSimple: "bg-yellow-200",
    },
    {
      type: "stamp",
      name: "Book Lover",
      icon: "📖",
      colorFreaky: "bg-gradient-to-r from-green-400 to-teal-400",
      colorSimple: "bg-green-200",
    },
    {
      type: "stamp",
      name: "Free Spirit",
      icon: "✨",
      colorFreaky: "bg-gradient-to-r from-fuchsia-400 to-pink-400",
      colorSimple: "bg-pink-200",
    },
    {
      type: "stamp",
      name: "Deep Thinker",
      icon: "🧠",
      colorFreaky: "bg-gradient-to-r from-lime-400 to-green-400",
      colorSimple: "bg-emerald-200",
    },
    {
      type: "stamp",
      name: "Cosmic Soul",
      icon: "🌌",
      colorFreaky: "bg-gradient-to-r from-indigo-500 to-purple-500",
      colorSimple: "bg-indigo-200",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? isFreaky
            ? "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
            : "bg-gray-900"
          : isFreaky
            ? "bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100"
            : "bg-gray-50"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        designMode={designMode}
        isFreaky={isFreaky}
        onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
        onDesignModeChange={setDesignMode}
        onProfileClick={() => setIsProfileOpen(true)}
      />

      <MotivationalBanner isFreaky={isFreaky} />

      <BoardTabs
        boards={boards}
        selectedBoard={selectedBoard}
        onBoardSelect={setSelectedBoard}
        isDarkMode={isDarkMode}
        isFreaky={isFreaky}
      />

      <StickyNotesGrid notes={stickyNotes} isFreaky={isFreaky} />

      <FloatingActionButton onClick={() => setIsNewThoughtOpen(true)} isFreaky={isFreaky} />

      <NewThoughtModal isOpen={isNewThoughtOpen} onClose={() => setIsNewThoughtOpen(false)} isFreaky={isFreaky} />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        isFreaky={isFreaky}
        unlockedItems={unlockedItems}
      />
    </div>
  )
}
