import { useEffect, useRef, useState } from 'react'
import { ArrowLeft } from 'lucide-react'

function App() {
  const [scaleY, setScaleY] = useState(1)
  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const updateScale = () => {
      if (!textRef.current) return
      const height = textRef.current.offsetHeight
      if (!height) return
      setScaleY(window.innerHeight / height)
    }

    updateScale()
    window.addEventListener('resize', updateScale)

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(180deg, #FF8233 0%, #FDAC55 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.8,
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <h1
              ref={textRef}
              className="select-none text-white font-black leading-none tracking-tighter whitespace-nowrap"
              style={{
                fontSize: 'clamp(200px, 48vw, 800px)',
                transform: `scale(1.15, ${scaleY * 1.4})`,
              }}
            >
              404
            </h1>

            <div
              className="absolute rounded-full bg-white h-[22vh] sm:h-[26vh] md:h-[50vh]"
              style={{
                width: 'clamp(120px, 20vw, 400px)',
                transform: `scaleY(${scaleY})`,
                transformOrigin: 'center',
              }}
            />
          </div>
        </div>
      </div>

      <header className="relative z-20 flex items-center px-4 sm:px-6 md:px-12 py-4 sm:py-5">
        <div className="flex items-center">
          <div className="grid grid-cols-2 gap-0.5">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"
              />
            ))}
          </div>
          <span className="text-white font-bold text-lg sm:text-xl ml-1">Streamverse</span>
        </div>
      </header>

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ marginTop: 'calc(-6vh - 40px)' }}
      >
        <div className="w-[120vw] h-[85vh] sm:w-[70vw] sm:h-[70vh] md:w-[62vw] md:h-[78vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none mix-blend-darken"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <main className="relative z-30 mt-auto pb-8 sm:pb-16 flex flex-col items-center text-center px-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Oops, something went wrong!
        </h2>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg transition-all"
          style={{ backgroundColor: '#F16524' }}
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </a>
      </main>
    </div>
  )
}

export default App
