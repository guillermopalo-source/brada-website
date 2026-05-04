import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function SiteLoader() {

    const loaderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const loader = loaderRef.current
        if (!loader) return

        const tl = gsap.timeline()

        tl.to(loader, {
            opacity: 0,
            duration: 0.6,
            delay: 1.8,
            ease: "power2.out"
        })
            .set(loader, { display: "none" })

    }, [])

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
            <img
                src="/assets/loader.gif"
                alt="Loading"
                className="w-12 h-auto"
            />
        </div>
    )
}