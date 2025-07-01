"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun, User, Plus, Pencil, Heart, Eye, Star, Sparkles, Palette } from "lucide-react"

export default function FreekyApp() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [designMode, setDesignMode] = useState("Simple Design") // "Simple Design" or "FREEKY!"
  const [selectedBoard, setSelectedBoard] = useState("World Board")
  const [isNewThoughtOpen, setIsNewThoughtOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [newThought, setNewThought] = useState("")
  const [selectedMood, setSelectedMood] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [selectedColor, setSelectedColor] = useState("") // Declare the color variable

  const isFreaky = designMode === "FREEKY!"

  const boards = [
    { name: "World Board", icon: "🌍", tag: "Always Open", active: true },
    { name: "Travel Board", icon: "✈️", tag: "Ends in 3 days", active: false },
    { name: "Unsent Letters", icon: "💌", tag: "New", active: false },
    { name: "Midnight Thoughts", icon: "🌙", tag: "Night Only", active: false },
    { name: "Dream Log", icon: "💭", tag: "Weekly", active: false },
  ]

  const stickyNotes = [
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

  const unlockedItems = [
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

  const colors = [
    "bg-gradient-to-br from-pink-400 to-purple-400",
    "bg-gradient-to-br from-cyan-400 to-blue-400",
    "bg-gradient-to-br from-yellow-400 to-red-400",
    "bg-gradient-to-br from-green-400 to-teal-400",
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
      {/* Top Navigation */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${
          isDarkMode
            ? isFreaky
              ? "bg-gray-900/70 border-purple-500/50"
              : "bg-gray-900/80 border-gray-700"
            : isFreaky
              ? "bg-white/70 border-pink-300/50"
              : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <h1
                className={`text-2xl font-bold ${
                  isFreaky
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                    : isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                }`}
              >
                FREEKY!
              </h1>
              {isFreaky && <Sparkles className="h-6 w-6 text-pink-500 animate-pulse" />}
            </div>

            <div className="flex items-center space-x-4">
              {/* Design Mode Selector */}
              <Select value={designMode} onValueChange={setDesignMode}>
                <SelectTrigger className={`w-40 ${isFreaky ? "border-purple-300" : "border-gray-300"}`}>
                  <div className="flex items-center space-x-2">
                    <Palette className="h-4 w-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Simple Design">Simple Design</SelectItem>
                  <SelectItem value="FREEKY!">FREEKY! 🌈</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`rounded-full transition-all duration-300 ${
                  isFreaky ? "hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200" : ""
                }`}
              >
                {isDarkMode ? (
                  <Sun className={`h-5 w-5 ${isFreaky ? "text-yellow-400" : "text-yellow-500"}`} />
                ) : (
                  <Moon className={`h-5 w-5 ${isFreaky ? "text-purple-600" : "text-gray-600"}`} />
                )}
              </Button>

              <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full transition-all duration-300 ${
                      isFreaky ? "hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200" : ""
                    }`}
                  >
                    <User className={`h-5 w-5 ${isFreaky ? "text-purple-600" : "text-gray-600"}`} />
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className={`max-w-md ${
                    isFreaky
                      ? "bg-gradient-to-br from-white to-pink-50 border-2 border-pink-200"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <DialogHeader>
                    <DialogTitle
                      className={`text-xl ${
                        isFreaky
                          ? "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                          : "text-gray-900"
                      }`}
                    >
                      {isFreaky ? "Your FREEKY Profile! ✨" : "Your Profile"}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className={`h-16 w-16 ${isFreaky ? "ring-4 ring-pink-300" : ""}`}>
                        <AvatarImage src="/placeholder.svg?height=64&width=64" />
                        <AvatarFallback
                          className={
                            isFreaky
                              ? "bg-gradient-to-br from-pink-400 to-purple-400 text-white font-bold"
                              : "bg-gray-200 text-gray-700"
                          }
                        >
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">Jane Doe</h3>
                        <p
                          className={`text-sm font-semibold ${
                            isFreaky
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                              : "text-gray-600"
                          }`}
                        >
                          Cosmic Soul {isFreaky ? "✨" : ""}
                        </p>
                      </div>
                    </div>

                    <Separator
                      className={isFreaky ? "bg-gradient-to-r from-pink-300 to-purple-300 h-0.5" : "bg-gray-200"}
                    />

                    <div>
                      <h4 className="font-bold mb-3 text-gray-800">
                        {isFreaky ? "Unlocked Freaky Items! 🎉" : "Unlocked Items"}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {unlockedItems.map((item, index) => (
                          <Card
                            key={index}
                            className={`p-3 border-0 shadow-sm transition-all duration-300 ${
                              isFreaky
                                ? `${item.colorFreaky} hover:shadow-xl hover:scale-105`
                                : `${item.colorSimple} hover:shadow-md`
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  isFreaky ? "bg-white/30 backdrop-blur-sm" : "bg-white/70"
                                }`}
                              >
                                <span className="text-sm">{item.icon}</span>
                              </div>
                              <span
                                className={`text-xs font-bold ${
                                  isFreaky ? "text-white drop-shadow-sm" : "text-gray-700"
                                }`}
                              >
                                {item.name}
                              </span>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <Button
                      className={`w-full font-bold py-3 rounded-xl shadow-lg transition-all duration-300 ${
                        isFreaky
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      {isFreaky ? "My Freaky Archive 📚" : "My Archive"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Motivational Banner - Only in FREEKY mode */}
      {isFreaky && (
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center py-3 font-bold text-lg shadow-lg">
          🌈 Be Free, Be FREEKY! Express Yourself Without Limits! 🚀
        </div>
      )}

      {/* Board Tabs */}
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
                onClick={() => setSelectedBoard(board.name)}
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

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stickyNotes.map((note) => (
            <Card
              key={note.id}
              className={`border-0 shadow-lg transition-all duration-300 cursor-pointer ${
                isFreaky
                  ? `${note.colorFreaky} hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1`
                  : `${note.colorSimple} hover:shadow-xl hover:-translate-y-1`
              }`}
            >
              <CardContent className="p-5 space-y-4">
                <p
                  className={`text-sm leading-relaxed font-medium ${
                    isFreaky ? "text-white drop-shadow-sm" : "text-gray-800"
                  }`}
                >
                  {note.text}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className={`text-2xl ${isFreaky ? "drop-shadow-sm" : ""}`}>{note.mood}</span>
                    <div
                      className={`flex items-center space-x-3 text-xs font-medium ${
                        isFreaky ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      <div
                        className={`flex items-center space-x-1 rounded-full px-2 py-1 ${
                          isFreaky ? "bg-white/20 backdrop-blur-sm" : "bg-white/70"
                        }`}
                      >
                        <Heart className="h-3 w-3" />
                        <span>{note.hearts}</span>
                      </div>
                      <div
                        className={`flex items-center space-x-1 rounded-full px-2 py-1 ${
                          isFreaky ? "bg-white/20 backdrop-blur-sm" : "bg-white/70"
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
                        isFreaky ? "bg-white/30 text-white backdrop-blur-sm" : "bg-gray-200 text-gray-700"
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
                        isFreaky ? "bg-white/30 text-white backdrop-blur-sm" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <Star className="h-3 w-3 mr-1" />
                      {note.stamp}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Floating New Thought Button */}
      <Dialog open={isNewThoughtOpen} onOpenChange={setIsNewThoughtOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className={`fixed bottom-6 right-6 rounded-full shadow-2xl transition-all duration-300 px-8 py-4 font-bold text-lg ${
              isFreaky
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white hover:scale-110 animate-pulse"
                : "bg-gray-900 hover:bg-gray-800 text-white hover:scale-105"
            }`}
          >
            <Plus className="h-6 w-6 mr-2" />
            {isFreaky ? "Get FREEKY! ✨" : "New Thought"}
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`max-w-md ${
            isFreaky
              ? "bg-gradient-to-br from-white to-purple-50 border-2 border-purple-300"
              : "bg-white border border-gray-200"
          }`}
        >
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-xl">
              <Pencil className={`h-6 w-6 ${isFreaky ? "text-purple-600" : "text-gray-600"}`} />
              <span
                className={
                  isFreaky
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold"
                    : "text-gray-900 font-semibold"
                }
              >
                {isFreaky ? "Share Your Freaky Thought! 🌈" : "Share a Thought"}
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            <div>
              <Label htmlFor="thought" className="font-semibold text-gray-800">
                Your {isFreaky ? "freaky " : ""}thought (max 500 characters)
              </Label>
              <Textarea
                id="thought"
                placeholder={isFreaky ? "What's making you feel FREEKY today? 🚀" : "What's on your mind?"}
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)}
                maxLength={500}
                className={`mt-2 min-h-[120px] resize-none rounded-xl ${
                  isFreaky
                    ? "border-2 border-purple-200 focus:border-purple-400"
                    : "border border-gray-300 focus:border-gray-400"
                }`}
              />
              <p className={`text-xs mt-1 font-medium ${isFreaky ? "text-purple-600" : "text-gray-500"}`}>
                {newThought.length}/500 characters
              </p>
            </div>

            <div>
              <Label htmlFor="mood" className="font-semibold text-gray-800">
                Your {isFreaky ? "vibe" : "mood"}
              </Label>
              <Select value={selectedMood} onValueChange={setSelectedMood}>
                <SelectTrigger
                  className={`mt-2 rounded-xl ${
                    isFreaky
                      ? "border-2 border-purple-200 focus:border-purple-400"
                      : "border border-gray-300 focus:border-gray-400"
                  }`}
                >
                  <SelectValue placeholder={isFreaky ? "What's your freaky mood? 🎭" : "Choose your mood"} />
                </SelectTrigger>
                <SelectContent className={isFreaky ? "bg-gradient-to-br from-white to-purple-50" : "bg-white"}>
                  <SelectItem value="😌">😌 {isFreaky ? "Zen & Peaceful" : "Peaceful"}</SelectItem>
                  <SelectItem value="☁️">☁️ {isFreaky ? "Dreamy & Floating" : "Dreamy"}</SelectItem>
                  <SelectItem value="☀️">☀️ {isFreaky ? "Energetic & Bright" : "Energetic"}</SelectItem>
                  <SelectItem value="📚">📚 {isFreaky ? "Deep & Thoughtful" : "Thoughtful"}</SelectItem>
                  <SelectItem value="🌧️">🌧️ {isFreaky ? "Nostalgic & Moody" : "Nostalgic"}</SelectItem>
                  <SelectItem value="💃">💃 {isFreaky ? "Wild & Joyful" : "Joyful"}</SelectItem>
                  <SelectItem value="🌌">🌌 {isFreaky ? "Cosmic & Mystical" : "Mystical"}</SelectItem>
                  <SelectItem value="🤔">🤔 {isFreaky ? "Curious & Wondering" : "Curious"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div
              className={`flex items-center space-x-3 p-3 rounded-xl ${
                isFreaky ? "bg-gradient-to-r from-pink-100 to-purple-100" : "bg-gray-50"
              }`}
            >
              <Switch
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={setIsAnonymous}
                className={
                  isFreaky
                    ? "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-pink-500 data-[state=checked]:to-purple-500"
                    : ""
                }
              />
              <Label htmlFor="anonymous" className="font-semibold text-gray-800">
                {isFreaky ? "Go anonymous (be extra freaky!) 🎭" : "Post anonymously"}
              </Label>
            </div>

            <div>
              <Label className="font-semibold text-gray-800">
                Choose your {isFreaky ? "freaky " : ""}style! {isFreaky ? "🎨" : ""}
              </Label>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {colors.map((color, index) => (
                  <div
                    key={color}
                    className={`${color} h-16 rounded-xl cursor-pointer transition-all duration-300 ${
                      isFreaky
                        ? "border-4 border-transparent hover:border-white hover:scale-105 shadow-lg hover:shadow-xl"
                        : "hover:scale-105 shadow-sm hover:shadow-md"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <Button
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ${
                isFreaky
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white hover:shadow-xl hover:scale-105"
                  : "bg-gray-900 hover:bg-gray-800 text-white"
              }`}
              onClick={() => setIsNewThoughtOpen(false)}
              disabled={!newThought.trim() || !selectedMood}
            >
              {isFreaky ? "Release Your Freaky Thought! 🚀✨" : "Share Thought"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
