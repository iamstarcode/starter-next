import Link from 'next/link';
import { useRouter } from 'next/router';
import useToggle from '../../hooks/useToggle';
import { Button } from '@vechaiui/button';
import { Switch } from '@vechaiui/switch';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai'
import * as atoms from '../../stores/store'
import ClientOnly from '../../utils/clientonly'
import icon from '../../public/icon.svg'




const NavBar = () => {

  const [menu, toggleMenu] = useToggle(false);
  const [darkMode, setDarkMode] = useAtom(atoms.darkModeAtom)

  useEffect(() => {
    darkMode ?
      document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [darkMode])

  const router = useRouter();
  const activeLink = 'text-[#f59e0b] border-orange-400 border-b-4 '
  const link = 'text-slate-500 dark:text-slate-400 border-b-0 hover:border-b-4 hover:border-gray-400'
  const linkStyle = 'inline-block py-4 px-4 mr-1 text-sm font-medium text-center rounded-t-lg hover:border-b-4 '

  return (<>
    <div className="w-full  text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <div className="hidden md:flex">
            <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M35.6821 18.0403L24.9224 54.0539L28.4005 54.1741L39.1603 18.1689L35.6821 18.0403Z" fill="#3E0EEB" />
              <path fillRule="evenodd" clipRule="evenodd" d="M40.0418 20.1861L44.5741 22.8068L49.1064 25.4191L44.5741 28.0397L40.0418 30.652V20.1861Z" fill="#FE2D04" />
              <path fillRule="evenodd" clipRule="evenodd" d="M40.0418 30.6677L49.0991 25.4191L49.1064 30.652V35.8923L40.0418 30.6677Z" fill="#FF6738" />
              <path fillRule="evenodd" clipRule="evenodd" d="M49.1064 35.8923L49.1148 30.652V25.4191L58.172 30.6593L49.1064 35.8923Z" fill="#FE0000" />
              <path fillRule="evenodd" clipRule="evenodd" d="M49.1064 35.8923L58.1647 30.6447L58.1793 41.1106L53.6471 38.4983L49.1064 35.8923Z" fill="#C10100" />
              <path fillRule="evenodd" clipRule="evenodd" d="M49.1064 35.8923L53.6397 38.5056L58.172 41.1252L49.1064 46.3582V35.8923Z" fill="#FE0000" />
              <path fillRule="evenodd" clipRule="evenodd" d="M40.0492 41.1336L49.1064 35.8923L49.1221 46.3582L40.0492 41.1336Z" fill="#BC0078" />
              <path fillRule="evenodd" clipRule="evenodd" d="M40.0492 41.1336L44.5814 43.7459L49.1148 46.3665L40.0492 51.5995V41.1336Z" fill="#4E0096" />
              <path fillRule="evenodd" clipRule="evenodd" d="M49.1148 25.4191L49.0991 14.9532L58.172 20.1788L49.1148 25.4191Z" fill="#FF6738" />
              <path fillRule="evenodd" clipRule="evenodd" d="M49.1148 14.9689L58.172 9.72026L58.1877 20.1861L49.1148 14.9689Z" fill="#FFCE34" />
              <path fillRule="evenodd" clipRule="evenodd" d="M23.5367 20.48L14.4638 25.7056L23.5221 30.9459L23.5367 20.48Z" fill="#FE2D04" />
              <path fillRule="evenodd" clipRule="evenodd" d="M23.5221 30.9459L14.4638 25.7056L14.4565 30.9386V36.1715L23.5221 30.9459Z" fill="#FF6738" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.4565 36.1715V30.9386L14.4638 25.7056L5.39085 30.9312L14.4565 36.1715Z" fill="#FE0000" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.4565 36.1715L5.39085 30.9312V36.1642L5.38353 41.3971L14.4565 36.1715Z" fill="#C10100" />
              <path fillRule="evenodd" clipRule="evenodd" d="M23.5064 41.4191L18.9814 38.7911L14.4565 36.1715L14.4492 41.4044L14.4335 46.6374L23.5064 41.4191Z" fill="#BC0078" />
              <path fillRule="evenodd" clipRule="evenodd" d="M23.5064 41.4191L18.9741 44.0324L14.4335 46.6374L23.4918 51.885L23.5064 41.4191Z" fill="#4E0096" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.4335 46.6374L14.4492 41.4118L14.4565 36.1715L5.38353 41.3888L14.4335 46.6374Z" fill="#FE0000" />
            </svg>

          </div>
          <svg aria-hidden="true" className="w-6 h-6 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          <button onClick={toggleMenu} className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!menu && <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>}
              {menu && <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>}
            </svg>
          </button>
        </div>
        {/*toggle between flex and flex and hidden*/}
        <nav className={`${menu ? "flex" : "hidden"} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>

          {/*  <Button color="primary" variant="solid" size="lg">xdede</Button> */}
          <Link href="/">
            <a data-color="primary" className={`${linkStyle} ${router.asPath === '/' ? activeLink : link}`} >home</a>
          </Link>

          <Link href="/about">
            <a className={` ${linkStyle} ${router.asPath === '/about' ? activeLink : link}`} >about</a>
          </Link>

          <Link href="/portfolio">
            <a className={` ${linkStyle} ${router.asPath === '/portfolio' ? activeLink : link}`} >about</a>
          </Link>
          <ClientOnly>
            {<Switch color="primary" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
          </ClientOnly>
        </nav>
      </div>
    </div>
  </>);
}

export default NavBar;