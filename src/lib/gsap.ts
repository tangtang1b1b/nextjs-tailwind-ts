import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// 註冊 GSAP 插件
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  // 全域 GSAP 設定
  gsap.defaults({
    duration: 0.5,
    ease: 'power2.inOut',
  })

  // 自訂動畫函數
  type AnimationTarget = gsap.TweenTarget
  type AnimationConfig = { duration?: number; delay?: number }
  
  const animations = {
    fadeUp: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(target, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: config.duration || 1, delay: config.delay || 0 })
    },
    fadeDown: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(target, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: config.duration || 1, delay: config.delay || 0 })
    },
    fadeLeft: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(target, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: config.duration || 1, delay: config.delay || 0 })
    },
    fadeRight: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(target, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: config.duration || 1, delay: config.delay || 0 })
    },
    zoomIn: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(
        target,
        { opacity: 0, scale: 0.3 },
        { opacity: 1, scale: 1, duration: config.duration || 1, delay: config.delay || 0 },
      )
    },
    zoomOut: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(
        target,
        { opacity: 0, scale: 1.5 },
        { opacity: 1, scale: 1, duration: config.duration || 1, delay: config.delay || 0 },
      )
    },
    flipX: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(
        target,
        { opacity: 0, rotationX: -90 },
        { opacity: 1, rotationX: 0, duration: config.duration || 1, delay: config.delay || 0 },
      )
    },
    slideUp: (target: AnimationTarget, config: AnimationConfig) => {
      return gsap.fromTo(target, { y: 100 }, { y: 0, duration: config.duration || 1, delay: config.delay || 0 })
    },
  }

  const initGSAP = () => {
    // 找到所有帶有 data-fade 屬性的元素
    const elements = document.querySelectorAll('[data-fade]')

    elements.forEach((element) => {
      const animationType = element.getAttribute('data-fade') as keyof typeof animations
      const duration = parseFloat(element.getAttribute('data-duration') || '1')
      const once = element.getAttribute('data-once') !== 'false'
      const delay = parseFloat(element.getAttribute('data-delay') || '0')

      if (animations[animationType]) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 85%',
          onEnter: () => {
            animations[animationType](element, { duration, delay })
          },
          once: once,
        })
      }
    })
  }

  Object.entries(animations).forEach(([name, effect]) => {
    gsap.registerEffect({
      name,
      effect,
      defaults: { duration: 1 },
      extendTimeline: true,
    })
  })

  // 自動初始化（延遲執行，確保 DOM 已載入）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGSAP)
  } else {
    setTimeout(initGSAP, 100)
  }

  // 導出初始化函數，供手動調用
  ;(window as unknown as Record<string, unknown>).initGSAP = initGSAP
}

export { gsap }
export default gsap
