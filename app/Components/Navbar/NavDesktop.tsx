import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import { Links } from './Links'


export const NavDesktop = () => {
  return (
    <Container>
        <div className='flex justify-between items-center py-4'>
            <Logo />

            <Links />

            
        </div>
    </Container>
  )
}
