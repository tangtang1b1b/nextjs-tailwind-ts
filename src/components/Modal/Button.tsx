import styles from './Button.module.css'
interface ButtonProps {
  text: string
  className?: string
}

export default function Button({ text, className }: ButtonProps) {
  return (
    <button className={`w-full ${styles['gradient-button']} ${className || ''}`}>
      <div>{text}</div>
    </button>
  )
}
