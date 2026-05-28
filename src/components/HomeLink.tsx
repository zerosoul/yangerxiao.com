import { Link } from '@tanstack/react-router'
import { Home } from 'lucide-react'

export default function HomeLink() {
  return (
    <Link
      to="/"
      className="fixed right-2 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 p-2 text-white"
      aria-label="回首页"
    >
      <Home className="h-full w-full" />
    </Link>
  )
}
