interface MotivationalBannerProps {
  isFreaky: boolean
  isDarkMode?: boolean
}

export function MotivationalBanner({ isFreaky, isDarkMode = false }: MotivationalBannerProps) {
  if (!isFreaky) return null

  return (
    <div 
      className={`bg-gradient-to-r 
        ${isDarkMode ? 'from-pink-300 via-purple-400 to-indigo-300 text-gray-900 border-t border-b border-white/30 font-extrabold' : 'from-pink-500 via-purple-500 to-indigo-500'} 
        text-white text-center py-3 text-lg shadow-lg`}
    >
      🌈 Be Free, Be FREEKY! Express Yourself Without Limits! 🚀
    </div>
  )
}