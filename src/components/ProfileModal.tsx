"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { UnlockedItem } from "@/types"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  isFreaky: boolean
  unlockedItems: UnlockedItem[]
}

export function ProfileModal({ isOpen, onClose, isFreaky, unlockedItems }: ProfileModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
              isFreaky ? "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-900"
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

          <Separator className={isFreaky ? "bg-gradient-to-r from-pink-300 to-purple-300 h-0.5" : "bg-gray-200"} />

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
                    <span className={`text-xs font-bold ${isFreaky ? "text-white drop-shadow-sm" : "text-gray-700"}`}>
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
  )
}
