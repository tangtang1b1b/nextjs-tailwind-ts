'use client'
import { useRef, useState, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import Matter from 'matter-js'

export default function Deco() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rockRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const renderRef = useRef<Matter.Render | null>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  const init = () => {
    if (!rockRef.current) return
    gsap.fromTo(
      rockRef.current,
      {
        opacity: 0,
        x: -8,
        y: -16,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        x: -8,
        y: -16,
        ease: 'power2.inOut',
      },
    )
  }

  useEffect(() => {
    if (!containerRef.current) return

    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }
    init()
    setTimeout(() => {
      updateContainerSize()
    }, 33)
    window.addEventListener('resize', updateContainerSize)

    return () => {
      window.removeEventListener('resize', updateContainerSize)
    }
  }, [])

  // 第二個 useEffect：負責初始化物理引擎（依賴 containerSize）
  useEffect(() => {
    if (!containerRef.current) return

    // 現在可以正確使用更新後的 containerSize
    const containerWidth = containerSize.width
    const containerHeight = containerSize.height

    const rockSize = window.innerWidth > 768 ? 300 : 200

    // 創建物理引擎
    const engine = Matter.Engine.create()
    const world = engine.world
    engine.world.gravity.y = 0.3
    engine.world.gravity.x = 0
    engine.constraintIterations = 10 // 增加約束迭代次數
    engine.positionIterations = 10 // 增加位置迭代次數
    engine.velocityIterations = 10 // 增加速度迭代次數

    // 創建渲染器（使用正確的尺寸）
    const render = Matter.Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: 'transparent',
        showVelocity: false,
        showAngleIndicator: false,
        showDebug: false,
      },
    })

    // 創建響應式邊界
    const wallThickness = 20
    const walls = [
      // 底部
      Matter.Bodies.rectangle(containerWidth / 2, containerHeight - wallThickness / 2, containerWidth, wallThickness, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      // 左側
      Matter.Bodies.rectangle(wallThickness / 2, containerHeight / 2, wallThickness, containerHeight, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      // 右側
      Matter.Bodies.rectangle(containerWidth - wallThickness / 2, containerHeight / 2, wallThickness, containerHeight, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      // 頂部
      Matter.Bodies.rectangle(containerWidth / 2, wallThickness / 2, containerWidth, wallThickness, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
    ]

    const vertices = [
      { x: rockSize * (0.53 - 0.5), y: rockSize * (0.1 - 0.5) },
      { x: rockSize * (0.84 - 0.5), y: rockSize * (0.25 - 0.5) },
      { x: rockSize * (0.89 - 0.5), y: rockSize * (0.61 - 0.5) },
      { x: rockSize * (0.75 - 0.5), y: rockSize * (1.0 - 0.5) },
      { x: rockSize * (0.36 - 0.5), y: rockSize * (0.96 - 0.5) },
      { x: rockSize * (0.0 - 0.5), y: rockSize * (0.6 - 0.5) },
      { x: rockSize * (0.14 - 0.5), y: rockSize * (0.28 - 0.5) },
    ]

    const rock = Matter.Bodies.fromVertices(
      containerWidth * 0.9, // 移除偏移，直接使用中心位置
      containerHeight * 0.7,
      [vertices],
      {
        restitution: 0.5,
        friction: 0.1,
        frictionAir: 0.01,
        render: { fillStyle: 'transparent' },
      },
      true,
    )

    Matter.World.add(world, [...walls, rock])
    engineRef.current = engine
    renderRef.current = render

    Matter.Render.run(render)
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)

    // 創建跟隨滑鼠的游標物體（用於碰撞判斷）
    const cursorSize = 20 // 游標物體大小
    const cursor = Matter.Bodies.circle(0, 0, cursorSize, {
      isSensor: true, // 設為感應器，不會產生物理碰撞但能檢測碰撞
      isStatic: true, // 靜態物體，不受重力影響
      render: {
        fillStyle: 'transparent', // 半透明紅色，方便調試
      },
    })

    Matter.World.add(world, cursor)

    // 滑鼠移動事件處理
    const mousePosition = { x: 0, y: 0 }
    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        mousePosition.x = event.clientX - rect.left
        mousePosition.y = event.clientY - rect.top

        // 更新游標物體位置
        Matter.Body.setPosition(cursor, mousePosition)

        // 調試信息（每100次輸出一次，避免太多log）
        if (Math.random() < 0.01) {
        }
      }
    }

    // 碰撞檢測
    const handleCollision = () => {
      // 使用簡單的距離檢測替代 SAT 碰撞檢測
      const dx = rock.position.x - cursor.position.x
      const dy = rock.position.y - cursor.position.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // 如果距離小於兩個物體的半徑之和，就認為碰撞
      const collisionDistance = cursorSize + 100 // 增大碰撞檢測範圍

      if (distance < collisionDistance) {
        // 碰撞時對石頭施加推力
        const forceMultiplier = 0.002 // 增加推力大小
        const force = {
          x: dx * forceMultiplier, // 推力方向從游標指向石頭
          y: dy * forceMultiplier,
        }
        Matter.Body.applyForce(rock, rock.position, force)
      }
    }

    // 註冊滑鼠事件
    containerRef.current.addEventListener('mousemove', handleMouseMove)

    // 邊界檢測和重置功能
    const checkBoundariesAndReset = () => {
      const position = rock.position
      const margin = 50 // 邊界容忍度

      // 檢查是否超出邊界
      if (position.x < -margin || position.x > containerWidth + margin || position.y < -margin || position.y > containerHeight + margin) {
        // 重置位置到容器中心
        Matter.Body.setPosition(rock, {
          x: containerWidth * 0.7,
          y: containerHeight * 0.3,
        })

        // 重置速度和角速度
        Matter.Body.setVelocity(rock, { x: 0, y: 0 })
        Matter.Body.setAngularVelocity(rock, 0)
      }
    }

    // 同步 DOM 元素並檢查邊界
    const updateRockPosition = () => {
      if (rockRef.current) {
        const position = rock.position
        const angle = rock.angle

        // 使用固定尺寸和中心點定位
        rockRef.current.style.width = `${rockSize}px`
        rockRef.current.style.height = `${rockSize}px`
        rockRef.current.style.transform = `translate(${position.x - rockSize / 2}px, ${position.y - rockSize / 2}px) rotate(${angle}rad)`

        // 每幀檢查邊界和碰撞
        checkBoundariesAndReset()
        handleCollision()
      }
      requestAnimationFrame(updateRockPosition)
    }
    updateRockPosition()

    // 清理函數
    return () => {
      // 複製 ref 值到變數中，避免 cleanup 時 ref 已改變
      const container = containerRef.current
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }

      if (renderRef.current) {
        Matter.Render.stop(renderRef.current)
        renderRef.current.canvas.remove()
        renderRef.current = null
      }
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false)
        Matter.Engine.clear(engineRef.current)
        engineRef.current = null
      }
    }
  }, [containerSize])

  return (
    <div ref={containerRef} className="absolute right-0 size-full overflow-hidden">
      <div
        ref={rockRef}
        className="bg-foreground pointer-events-none absolute size-[300px] mix-blend-difference"
        style={{
          clipPath: 'polygon(53% 10%, 84% 25%, 89% 61%, 75% 100%, 36% 96%, 0% 60%, 14% 28%)',
        }}
      />
    </div>
  )
}
