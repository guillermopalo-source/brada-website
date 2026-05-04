import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function CursorFollower() {
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        // Centrado via GSAP xPercent/yPercent — no interfiere con x/y
        gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 })

        let mouseX = 0
        let mouseY = 0
        let posX = 0
        let posY = 0
        let firstMove = true
        const speed = 0.15

        const moveMouse = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY

            // Snap al primer move — evita viaje desde (0,0)
            if (firstMove) {
                posX = mouseX
                posY = mouseY
                gsap.set(cursor, { x: posX, y: posY, opacity: 1 })
                firstMove = false
            }

            // Ocultar sobre data-hide-cursor
            const target = e.target as HTMLElement
            const shouldHide = !!target.closest('[data-hide-cursor]')
            gsap.to(cursor, {
                opacity: shouldHide ? 0 : 1,
                duration: 0.15,
                ease: 'power2.out',
                overwrite: true,
            })
        }

        // Delegación en document — captura links/buttons dinámicos (SPA)
        const handleEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button')) {
                gsap.to(cursor, { scale: 2.5, duration: 0.25, ease: "power3.out", overwrite: true })
            }
        }
        const handleLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button')) {
                gsap.to(cursor, { scale: 1, duration: 0.25, ease: "power3.out", overwrite: true })
            }
        }

        window.addEventListener("mousemove", moveMouse)
        document.addEventListener("mouseover", handleEnter)
        document.addEventListener("mouseout", handleLeave)

        const update = () => {
            posX += (mouseX - posX) * speed
            posY += (mouseY - posY) * speed
            gsap.set(cursor, { x: posX, y: posY })
        }

        gsap.ticker.add(update)

        return () => {
            window.removeEventListener("mousemove", moveMouse)
            document.removeEventListener("mouseover", handleEnter)
            document.removeEventListener("mouseout", handleLeave)
            gsap.ticker.remove(update)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 bg-foreground mix-blend-difference"
            style={{ borderRadius: '50%' }}
        />
    )
}