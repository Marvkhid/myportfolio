import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src="/portfolio.png"
      alt='logo'
      width={40}
      height={40}
      className='rounded' />
    </div>
  )
}

export default Logo