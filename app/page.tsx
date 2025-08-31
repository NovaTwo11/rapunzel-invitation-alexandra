"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, MapPin, MessageCircle, Calendar, Crown, Sparkles } from "lucide-react"

export default function RapunzelInvitation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // 🎉 Fecha del evento: 13 diciembre 2025, 6:30 PM (misa)
  const eventDate = new Date("2025-12-13T18:30:00")

  // 🔹 Lógica contador
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  // 🔹 Música
  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // 🔹 Google Maps
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/XRLk1Y3dPgnm34wG6", "_blank")
  }

  // 🔹 WhatsApp RSVP
  const sendWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Confirmo mi asistencia a los XV años de Alexandra López Segura. ¡Nos vemos ahí!")
    window.open(`https://wa.me/+573188510465?text=${message}`, "_blank")
  }

  // 🔹 Calendario Google
  const addToCalendar = () => {
    const startDate = eventDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    const endDate =
        new Date(eventDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=XV%20A%C3%B1os%20de%20Alexandra%20L%C3%B3pez%20Segura&dates=${startDate}/${endDate}&details=Celebraci%C3%B3n%20de%20XV%20A%C3%B1os%20-%20Misa%206:30pm%20y%20Recepci%C3%B3n%208:00pm&location=Sal%C3%B3n%20de%20Eventos%20Villa%20Carolina`
    window.open(calendarUrl, "_blank")
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-purple-200 via-purple-50 to-yellow-100 relative overflow-hidden">
        {/* Floating Lanterns Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-4 w-8 h-8 bg-purple-400 rounded-full opacity-60 float-animation sparkle"></div>
          <div className="absolute top-32 right-8 w-6 h-6 bg-yellow-400 rounded-full opacity-40 float-animation-delayed"></div>
          <div className="absolute top-64 left-12 w-4 h-4 bg-purple-400 rounded-full opacity-50 float-animation sparkle"></div>
          <div className="absolute top-96 right-4 w-10 h-10 bg-yellow-400 rounded-full opacity-30 float-animation-delayed"></div>
          <div className="absolute bottom-32 left-8 w-6 h-6 bg-purple-400 rounded-full opacity-60 float-animation sparkle"></div>
          <div className="absolute bottom-64 right-12 w-8 h-8 bg-yellow-400 rounded-full opacity-40 float-animation-delayed"></div>
        </div>

        {/* 🎶 Audio oculto con tu canción */}
        <audio ref={audioRef} loop>
          <source src="/Veo en ti la luz.mp3" type="audio/mpeg" />
        </audio>

        <div className="relative z-10 px-4 py-8 max-w-md mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 fade-in-up">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <img src="/sol-rapunzel.png" alt="Rapunzel Sun" className="w-32 h-auto" />
                <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1 sparkle"/>
              </div>
            </div>
            <h1 className="text-2xl font-serif text-purple-700 mb-2 text-balance">¡Queremos celebrarlo contigo!</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Countdown Timer */}
          <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm border-purple-200 fade-in-up">
            <h2 className="text-center text-lg font-serif text-purple-700 mb-4">Faltan:</h2>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-purple-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-700">{timeLeft.days}</div>
                <div className="text-xs text-purple-500">Días</div>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-700">{timeLeft.hours}</div>
                <div className="text-xs text-purple-500">Horas</div>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-700">{timeLeft.minutes}</div>
                <div className="text-xs text-purple-500">Min</div>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-700">{timeLeft.seconds}</div>
                <div className="text-xs text-purple-500">Seg</div>
              </div>
            </div>
          </Card>

          {/* Music Button */}
          <div className="text-center mb-8 fade-in-up">
            <Button
                onClick={toggleMusic}
                className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4"
                size="lg"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            <p className="text-sm text-purple-600 mt-2">{isPlaying ? "Pausar música" : "Reproducir música"}</p>
          </div>

          {/* 🎉 Main Invitation */}
          <Card className="p-8 mb-8 bg-white/90 backdrop-blur-sm border-purple-300 fade-in-up">
            <div className="text-center">
              <h2 className="text-4xl font-serif text-purple-700 mb-2 text-balance">MIS QUINCE AÑOS</h2>
              <h3 className="text-3xl font-serif text-purple-500 mb-6 text-balance">Alexandra López Segura</h3>

              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-700">Sábado, 13 de Diciembre de 2025</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-1">Misa Familiar</h4>
                    <p className="text-sm">Salón de Eventos Villa Carolina - 6:30 PM</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-1">Recepción</h4>
                    <p className="text-sm">Salón de Eventos Villa Carolina - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-yellow-100 rounded-lg">
                <p className="text-sm italic text-purple-700 text-balance">
                  "Como los farolillos que iluminan el cielo, tu presencia hará brillar esta noche especial"
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4 fade-in-up">
            <Button
                onClick={openMaps}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white"
                size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Ver Ubicación
            </Button>

            <Button onClick={sendWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Confirmar Asistencia
            </Button>

            <Button
                onClick={addToCalendar}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                size="lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Evento
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 fade-in-up">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-sm text-purple-700 italic text-balance">
              "Que esta noche sea tan mágica como los sueños que se hacen realidad"
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <Sparkles className="w-4 h-4 text-purple-500 sparkle" />
              <Crown className="w-4 h-4 text-yellow-500" />
              <Sparkles className="w-4 h-4 text-purple-500 sparkle" />
            </div>
          </div>
        </div>
      </div>
  )
}