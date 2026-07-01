'use client'

import { useEffect, useRef } from 'react'

export default function ClientEffects() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const barRef    = useRef(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const ringX  = useRef(0)
  const ringY  = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    const bar    = barRef.current
    if (!cursor || !ring || !bar) return

    // Mouse tracking
    const onMove = (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }
    window.addEventListener('mousemove', onMove)

    // Smooth ring
    let rafId
    const animRing = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12
      ringY.current += (mouseY.current - ringY.current) * 0.12
      ring.style.left = ringX.current + 'px'
      ring.style.top  = ringY.current + 'px'
      rafId = requestAnimationFrame(animRing)
    }
    animRing()

    // Hover effect on interactive elements
    const targets = document.querySelectorAll('a, button, [data-hover]')
    const enter = () => { cursor.classList.add('cursorHover'); ring.classList.add('cursorHover') }
    const leave = () => { cursor.classList.remove('cursorHover'); ring.classList.remove('cursorHover') }
    targets.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })

    // Scroll: navbar + progress bar
    const navbar = document.getElementById('navbar')
    const onScroll = () => {
      if (!navbar) return
      const scrolled = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = ((scrolled / docH) * 100) + '%'
      navbar.classList.toggle('scrolled', scrolled > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    revealEls.forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursorRing" ref={ringRef} />
      <div className="progressBar" ref={barRef} />
    </>
  )
}
