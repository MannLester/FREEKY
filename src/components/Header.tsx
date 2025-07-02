"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Moon, Sun, User, Sparkles, Palette } from "lucide-react"
import { FreekyTransition } from "./FreekyTransition"
import type { DesignMode } from "../types"

interface HeaderProps {
  isDarkMode: boolean
  designMode: DesignMode
  isFreaky: boolean
  onDarkModeToggle: () => void
  onDesignModeChange: (mode: DesignMode) => void
  onProfileClick: () => void
}

export function Header({
  isDarkMode,
  designMode,
  isFreaky,
  onDarkModeToggle,
  onDesignModeChange,
  onProfileClick,
}: HeaderProps) {
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null)
  const [isHoveringFreeky, setIsHoveringFreeky] = useState(false)

  // Function to handle design mode change with position tracking
  const handleDesignModeChange = (value: DesignMode, event?: React.MouseEvent) => {
    if (value === "FREEKY!" && event) {
      // Record the click position for the animation
      setClickPosition({ x: event.clientX, y: event.clientY })
    }
    onDesignModeChange(value)
  }
  
  // Handle dropdown state to detect when it's open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  // Function to handle the dropdown open/close
  const handleDropdownOpenChange = (open: boolean) => {
    setIsDropdownOpen(open)
    if (!open) {
      setIsHoveringFreeky(false)
    }
  }
  return (
    <>
      <FreekyTransition 
        isActive={isFreaky} 
        clickPosition={clickPosition} 
        isHoveringFreeky={isHoveringFreeky} 
      />
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
            <Select 
              value={designMode} 
              onValueChange={(value: DesignMode) => handleDesignModeChange(value)}
              onOpenChange={handleDropdownOpenChange}
              open={isDropdownOpen}
            >
              <SelectTrigger className={`w-40 ${isFreaky ? "border-purple-300" : "border-gray-300"}`}>
                <div className="flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Simple Design">Simple Design</SelectItem>
                <SelectItem 
                  value="FREEKY!" 
                  onClick={(e) => handleDesignModeChange("FREEKY!", e as React.MouseEvent)}
                  onMouseEnter={() => setIsHoveringFreeky(true)}
                  onMouseLeave={() => setIsHoveringFreeky(false)}
                  className="relative z-50"
                >
                  FREEKY! 🌈
                </SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              onClick={onDarkModeToggle}
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

            <Button
              variant="ghost"
              size="icon"
              onClick={onProfileClick}
              className={`rounded-full transition-all duration-300 ${
                isFreaky ? "hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200" : ""
              }`}
            >
              <User className={`h-5 w-5 ${isFreaky ? "text-purple-600" : "text-gray-600"}`} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
