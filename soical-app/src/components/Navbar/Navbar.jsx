import React, { useContext } from 'react'
import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Badge,
} from "@heroui/react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { RiMessage2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { authContext } from '../../context/AuthContext';

export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function Navbar() {

  const { token, setToken } = useContext(authContext)
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setToken(null)
    navigate("/login");
  }

  return (


    <NavbarUI isBordered maxWidth='full' className='px-16'>

      <NavbarContent justify="start">
       <Link to={'home'} className='cursor-pointer'>

        <NavbarBrand className="mr-4">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <span className=" font-bold">Nexify</span>
        </NavbarBrand>
       </Link>


      </NavbarContent>

      <NavbarContent>
        <NavbarBrand>
          <Input
            classNames={{
              base: "max-w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            radius='full'
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center  " justify="end">

        <NavbarItem className='bg-gray-200 rounded-full  size-10 flex items-center justify-center'>
          <Badge color="danger" content="3" className='text-xs'>
            <RiMessage2Fill className='text-2xl' />
          </Badge>
        </NavbarItem>


        <NavbarItem className='bg-gray-200 rounded-full  size-10 flex items-center justify-center'>

          <Badge color="danger" content="3" className='text-xs'>
            <FaBell className='text-2xl' />
          </Badge>
        </NavbarItem>


        <Dropdown placement="bottom-end">
          <DropdownTrigger className="cursor-pointer">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>

            <DropdownItem key="logout" color="danger" onClick={() => { logout() }}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>


    </NavbarUI>

  )
}