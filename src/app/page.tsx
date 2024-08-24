import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import type { JSX } from 'react'

const Page = (): JSX.Element => {
  return (
    <div>
      some...
      <Image src='/logo.svg' alt='Juli logo' width={20} height={20} />
      <UserButton />
    </div>
  )
}

export default Page
