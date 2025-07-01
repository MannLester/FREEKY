interface MotivationalBannerProps {
    isFreaky: boolean
  }
  
  export function MotivationalBanner({ isFreaky }: MotivationalBannerProps) {
    if (!isFreaky) return null
  
    return (
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center py-3 font-bold text-lg shadow-lg">
        🌈 Be Free, Be FREEKY! Express Yourself Without Limits! 🚀
      </div>
    )
  }
  