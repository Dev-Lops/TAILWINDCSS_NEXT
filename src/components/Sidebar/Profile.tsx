import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image className="h-10 w-10 rounded-full" alt="logo" src="" />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Anderson Lopes
        </span>
        <span className="truncate text-sm text-zinc-500">
          develops@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-50"
        title=""
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
