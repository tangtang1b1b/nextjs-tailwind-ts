import * as SimpleIcons from 'simple-icons'
import { SimpleIcon } from 'simple-icons'
import { useEffect, useState } from 'react'

interface SkillIconProps {
  iconName: string
  className?: string
}

export default function SkillIcon({ iconName, className = 'w-8 h-8' }: SkillIconProps) {
  const [localSvg, setLocalSvg] = useState<string>('')
  const normalizedIconName = iconName.replace(/^si/, '').toLowerCase()

  const iconKey = `si${normalizedIconName.charAt(0).toUpperCase() + normalizedIconName.slice(1)}` as keyof typeof SimpleIcons
  const icon = SimpleIcons[iconKey] as SimpleIcon | undefined

  // 載入本地 SVG 檔案
  useEffect(() => {
    const loadLocalSvg = async () => {
      const svgMap: Record<string, string> = {
        aws: '/images/siAWS.svg',
        motion: '/images/motion.svg',
      }

      const svgPath = svgMap[normalizedIconName]
      if (svgPath) {
        try {
          const response = await fetch(svgPath)
          if (response.ok) {
            const svgText = await response.text()
            // 將顏色改為白色
            const whiteSvg = svgText
              .replace(/fill="[^"]*"/g, 'fill="white"')
              .replace(/stroke="[^"]*"/g, 'stroke="white"')
              .replace(/#[0-9a-fA-F]{6}/g, 'white')
              .replace(/#[0-9a-fA-F]{3}/g, 'white')
              .replace(/<path/g, '<path fill="white"')
              .replace(/<svg/g, '<svg fill="white"')
            setLocalSvg(whiteSvg)
          }
        } catch (error) {
          console.error('載入 SVG 失敗:', error)
        }
      }
    }

    if (!icon || typeof icon === 'function') {
      loadLocalSvg()
    }
  }, [normalizedIconName, icon])

  // 如果找到 Simple Icons 的圖標
  if (icon && typeof icon !== 'function') {
    const modifiedSvg = icon.svg
      .replace(/fill="[^"]*"/g, 'fill="white"')
      .replace(/stroke="[^"]*"/g, 'stroke="white"')
      .replace(/#[0-9a-fA-F]{6}/g, 'white')
      .replace(/#[0-9a-fA-F]{3}/g, 'white')
      .replace(/<path/g, '<path fill="white"')
      .replace(/<svg/g, '<svg fill="white"')

    return <div className={className} dangerouslySetInnerHTML={{ __html: modifiedSvg }} />
  }

  // 如果有載入到本地 SVG
  if (localSvg) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: localSvg }} />
  }

  // 預設顯示
  return (
    <div className={className} style={{ fontSize: '1.5rem', textAlign: 'center', lineHeight: '1.5rem' }}>
      ❓
    </div>
  )
}
