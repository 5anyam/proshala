import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Proshala — home">
      <Image
        src={site.logo}
        alt=""
        width={32}
        height={32}
        sizes="32px"
        className="size-8 rounded-md ring-1 ring-border-strong"
      />
      <span className="text-[15px] font-semibold tracking-[0.18em]">PROSHALA</span>
    </Link>
  )
}
