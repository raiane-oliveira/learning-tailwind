import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex items-center gap-3 ">
      <Image
        src="https://github.com/raiane-oliveira.png"
        alt=""
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Raiane Oliveira
        </span>
        <span className="truncate text-sm text-zinc-500">
          raiane.oliveira404@gmail.com
        </span>
      </div>

      <button
        className="mb-auto ml-auto rounded-md p-2 transition-colors hover:bg-zinc-50"
        type="button"
      >
        <LogOut aria-hidden className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
