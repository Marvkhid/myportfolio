import React from 'react'
import Image from 'next/image'

const SocialMediaLink = ( {src, hasBg = false}: {src: string, hasBg?: Boolean}) => {
  return (
   <a href="" target='_blank' className={hasBg ? 'bg-green-500 p-2 rounded' : ''}>
                                   <Image src={src}
                                   alt='socialmediaicon'
                                   width={24}
                                   height={24} />
                               </a>
   
  )
}

export default SocialMediaLink