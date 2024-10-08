// Next Imports
import Link from 'next/link'

// MUI Imports
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import NavSearch from '@components/layout/shared/search'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-start justify-between gap-4 is-full')}>
      <div className='flex items-start gap-2 sm:gap-4'>
        <div>
          <img
            src='https://res.cloudinary.com/dcb4ilgmr/image/upload/v1727911221/utilities/photo_2024-10-03_00-17-53-removebg-preview_yzc41h.png'
            alt='logo'
            className=' rounded-sm w-[150px] h-auto'
          />{' '}
          <p className=' text-[12px]'>
            {' '}
            <p className=' text-[12px]'>Rewarding eco-friendly actions with blockchain. </p>
          </p>
        </div>
      </div>
      <div className='flex items-center'>
        <div></div>
        <ModeDropdown />

        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
