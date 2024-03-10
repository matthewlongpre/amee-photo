import { merge } from '../utils/merge'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={merge('container mx-auto px-5', className)}>{children}</div>
  )
}
