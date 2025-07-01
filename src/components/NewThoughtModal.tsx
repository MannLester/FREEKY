"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

interface NewThoughtModalProps {
  isOpen: boolean
  onClose: () => void
  isFreaky: boolean
}

export function NewThoughtModal({ isOpen, onClose, isFreaky }: NewThoughtModalProps) {
  const [newThought, setNewThought] = useState("")
  const [selectedMood, setSelectedMood] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")

  const colors = [
    "bg-gradient-to-br from-pink-400 to-purple-400",
    "bg-gradient-to-br from-cyan-400 to-blue-400",
    "bg-gradient-to-br from-yellow-400 to-red-400",
    "bg-gradient-to-br from-green-400 to-teal-400",
  ]

  const handleSubmit = () => {
    // Handle form submission logic here
    onClose()
    setNewThought("")
    setSelectedMood("")
    setIsAnonymous(false)
    setSelectedColor("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                  } ${selectedColor === color ? "ring-4 ring-blue-500" : ""}`}
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
            onClick={handleSubmit}
            disabled={!newThought.trim() || !selectedMood}
          >
            {isFreaky ? "Release Your Freaky Thought! 🚀✨" : "Share Thought"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
