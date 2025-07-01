export interface StickyNote {
    id: number
    text: string
    mood: string
    hearts: number
    views: number
    colorFreaky: string
    colorSimple: string
    stamp: string | null
    anonymous: boolean
  }
  
  export interface Board {
    name: string
    icon: string
    tag: string
    active: boolean
  }
  
  export interface UnlockedItem {
    type: "stamp" | "style"
    name: string
    icon: string
    colorFreaky: string
    colorSimple: string
  }
  
  export type DesignMode = "Simple Design" | "FREEKY!"
  