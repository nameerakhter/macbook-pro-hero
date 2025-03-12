import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const { progress, loaded, total } = useProgress()
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (loaded === total) {
      setTimeout(() => setShow(false), 500) // Slight delay for smooth transition
    }
  }, [loaded, total])

  if (!show) return null

  const normalizedProgress = Math.round(progress)
  const circleProgress = 314 - (314 * normalizedProgress) / 100

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[1000]">
      <div className="relative w-40 h-40">
        {/* Circular Progress */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
          <circle
            className="stroke-neutral-800 fill-none"
            cx="60"
            cy="60"
            r="50"
            strokeWidth="2"
          />
          <circle
            className="apple-loader-circle stroke-white fill-none"
            cx="60"
            cy="60"
            r="50"
            strokeWidth="2"
            style={{ strokeDashoffset: circleProgress }}
          />
        </svg>
        
        {/* Apple Logo */}
        <svg 
          className="absolute inset-0 w-full h-full p-6"
          viewBox="0 0 120 120"
        >
          <path 
            className="apple-logo-fill"
            style={{ clipPath: `inset(${100 - normalizedProgress}% 0 0 0)` }}
            transform="translate(25, 20)"
            d="M67.998 29.036c-.081-7.142 5.831-10.617 6.106-10.783-3.324-4.86-8.501-5.525-10.347-5.603-4.406-.447-8.602 2.596-10.834 2.596-2.232 0-5.682-2.533-9.343-2.467-4.808.071-9.235 2.797-11.711 7.101-4.986 8.646-1.275 21.45 3.584 28.461 2.376 3.434 5.206 7.293 8.922 7.158 3.582-.144 4.933-2.315 9.26-2.315 4.328 0 5.542 2.315 9.32 2.241 3.844-.074 6.281-3.495 8.635-6.939 2.721-3.975 3.84-7.824 3.906-8.024-.084-.039-7.498-2.881-7.498-11.426zm-7.034-20.981c1.975-2.394 3.306-5.717 2.944-9.028-2.844.115-6.287 1.893-8.32 4.279-1.829 2.118-3.427 5.497-2.994 8.748 3.174.246 6.414-1.608 8.37-3.999"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  )
}
