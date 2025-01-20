'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';

import { useState } from 'react';

export const AcmeLogo = () => {
  return (
    <svg
      fill='none'
      height='36'
      viewBox='0 0 32 32'
      width='36'
    >
      <path
        clipRule='evenodd'
        d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Posts', 'Sobre Autor', 'Contato'];

  return (
    <Navbar
      className='h-16'
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <Link
          href='/'
          color='foreground'
        >
          <NavbarBrand>
            <AcmeLogo />
            <p className='font-bold text-inherit'>ACME</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex gap-4'
        justify='center'
      >
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Sobre Autor
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='#'
            variant='flat'
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color='foreground'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
