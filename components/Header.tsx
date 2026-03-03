import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'
import UserDropdown from './UserDropDown'

function Header() {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href='/'>
          <Image src="/assets/images/logo-2.png" alt="logo" width={190} height={102} className='h-8 w-auto cursor-pointer' />
        </Link>

        <nav className='hidden sm:block'>
          <NavItems />
        </nav>
        {/* user dropdown */}
        <UserDropdown/>
      </div>
    </header>
  )
}

export default Header
