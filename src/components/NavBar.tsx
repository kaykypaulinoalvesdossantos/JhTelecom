'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '@/../public/img/Logo.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const Links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Sobre',
      link: '/About',
    },
    {
      name: 'Noticias',
      link: '/Noticias',
    },
    {
      name: 'Trabalhe Conosco',
      link: '/WorkWithUs',
    },
    {
      name: 'Contato',
      link: '/Contact',
    },
  ]

  return (
    <nav className="w-full shadow-nabBarShadow">
      <div className="items-center justify-between bg-[#FBF8F5] px-7 py-4 md:flex md:px-10">
        <Link
          href={'/'}
          className="flex cursor-pointer items-center  text-3xl text-[#0D0A09] sm:text-sm 
      md:text-xl"
        >
          <Image src={Logo} className="w-48 max-md:w-32 max-sm:w-28" alt="Logo JHTelecom" />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl min-[901px]:hidden"
        >
          {open ? (
            <Menu className="hidden" />
          ) : (
            <Menu className="h-[40px] w-[40px] text-center text-[#0D0A09]" />
          )}
        </div>
        

        <ul
          className={`absolute top-0 z-50 flex flex-col items-center gap-14 rounded-l-3xl bg-[#FBF8F5] px-20 py-56 shadow-navBarShadow transition-all duration-500 ease-in min-[901px]:static
          min-[901px]:w-auto min-[901px]:flex-row min-[901px]:items-center min-[901px]:px-0 min-[901px]:py-0 ${
              open
                ? 'right-0 block'
                : 'right-[-490px] shadow-none max-[900px]:hidden'
            }`}
        >
          
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer text-3xl min-[901px]:hidden"
          >
            {open ? (
              <X className="h-[40px] w-[40px] text-[#0D0A09]" />
            ) : (
              <X className="hidden" />
            )}
          </div>
          {Links.map((link) => (
            <li key={link.name} className="text-4xl md:text-base text-center">
              <Link href={link.link} className="text-[#000000] font-inter font-bold duration-500 text-center">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
