'use client'
import { useSidebarContext } from '@/providers/sidebar/SidebarProvider'
import Hamburger from 'hamburger-react'
import React from 'react'

export default function HamburgerIcon() {
    const {isOpen, toggle} = useSidebarContext()
  return (
    <Hamburger distance='md' label="Show menu" color='black' direction='right' rounded toggled={isOpen} toggle={toggle}  />
  )
}
