import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { loadingMessages } from '../constants'

export function LoadingScreen() {
  const { progress, loaded, total } = useProgress()
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (loaded === total) {
      setTimeout(() => setShow(false), 500) // Slight delay for smooth transition
    }
  }, [loaded, total])

  if (!show) return null

  const currentMessage = loadingMessages
    .reduce((acc, curr) => 
      progress >= curr.threshold ? curr.message : acc, 
      loadingMessages[0].message
    )

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[1000]">
      <div className="w-[300px] text-center">
        <div className="w-full h-[3px] bg-neutral-800 rounded-[3px] overflow-hidden mb-[10px]">
          <div 
            className="h-full bg-white transition-[width] duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-neutral-400 text-[14px] font-mono mb-2">
          {currentMessage}
        </div>
        <div className="text-white text-[14px] font-mono">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
}
