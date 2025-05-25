'use client'

import { type ReactNode, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InfiniteScrollProps {
  children: ReactNode
  direction?: "up" | "down"
  speed?: number
  pauseOnHover?: boolean
  className?: string
  contentClassName?: string
  height?: string | number
}

export function InfiniteScroll({
  children,
  direction = "up",
  speed = 20,
  pauseOnHover = true,
  className,
  contentClassName,
  height = "400px",
}: InfiniteScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    // Clone the content to create the illusion of infinite scrolling
    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerRef.current?.appendChild(duplicatedItem)
    })

    // Set animation start after content is duplicated
    setStart(true)

    // Check if we need to duplicate more items for taller screens
    const checkContentHeight = () => {
      if (!scrollerRef.current || !containerRef.current) return

      const scrollerHeight = scrollerRef.current.offsetHeight
      const containerHeight = containerRef.current.offsetHeight

      // If the content is not tall enough to create a seamless loop
      if (scrollerHeight < containerHeight * 2) {
        const currentChildren = Array.from(scrollerRef.current.children)
        const childrenToClone = currentChildren.slice(0, scrollerContent.length)

        childrenToClone.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          scrollerRef.current?.appendChild(duplicatedItem)
        })
      }
    }

    checkContentHeight()
    window.addEventListener("resize", checkContentHeight)

    return () => {
      window.removeEventListener("resize", checkContentHeight)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex flex-col",
          start && "transition-transform",
          pauseOnHover && "hover:[animation-play-state:paused]",
          contentClassName,
        )}
        style={{
          animation: start
            ? `scroll${direction === "up" ? "Up" : "Down"} ${scrollerRef.current?.offsetHeight ? scrollerRef.current.offsetHeight / speed : 50}s linear infinite`
            : "none",
        }}
      >
        {children}
      </div>

      <style jsx global>{`
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        
        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
