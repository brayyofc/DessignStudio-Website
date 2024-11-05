import React from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdMenu as MenuIcon } from "react-icons/md";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="py-2 z-20 fixed w-full bg-white shadow-md flex items-center justify-between lg:justify-center px-6">
      {/* Logo */}
      <svg
        className="lg:collapse w-24 lg:w-32"
        viewBox="0 0 112 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10.5" cy="23.5" r="8.5" stroke="#00AEEF" stroke-width="4" />
        <rect x="17" width="5" height="29" fill="#00AEEF" />
        <mask id="path-3-inside-1_45_353" fill="white">
          <path d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z" />
        </mask>
        <path d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z" stroke="#00AEEF" stroke-width="34" mask="url(#path-3-inside-1_45_353)" />
        <rect x="21" y="24.7082" width="16" height="4.4785" transform="rotate(-28.8005 21 24.7082)" fill="#00AEEF" />
        <path d="M53 17.5C48.5 14.3333 38.9 11.1 36.5 23.5H54.5C53.5 28 49.5 36 40 29.5" stroke="#00AEEF" stroke-width="4" />
        <path d="M71.5 17.5C67 14.3333 57.4 11.1 55 23.5H73C72 28 68 36 58.5 29.5" stroke="#00AEEF" stroke-width="4" />
        <rect x="73" y="12" width="5" height="22" fill="#00AEEF" />
        <rect x="73" y="1" width="5" height="5" fill="#00AEEF" />
        <circle cx="85" cy="23" r="8.5" stroke="#00AEEF" stroke-width="5" />
        <path d="M94 12.5V36.5C93.3333 38 91.4 41.1 89 41.5" stroke="#00AEEF" stroke-width="4" />
        <path d="M94 18C97.6667 15 105.9 10.8 109.5 18V34" stroke="#00AEEF" stroke-width="4" />
      </svg>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-center w-full">
        <svg
          className="w-24 lg:w-32"
          viewBox="0 0 112 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10.5" cy="23.5" r="8.5" stroke="#00AEEF" stroke-width="4" />
            <rect x="17" width="5" height="29" fill="#00AEEF" />
            <mask id="path-3-inside-1_45_353" fill="white">
              <path d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z" />
            </mask>
            <path d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z" stroke="#00AEEF" stroke-width="34" mask="url(#path-3-inside-1_45_353)" />
            <rect x="21" y="24.7082" width="16" height="4.4785" transform="rotate(-28.8005 21 24.7082)" fill="#00AEEF" />
            <path d="M53 17.5C48.5 14.3333 38.9 11.1 36.5 23.5H54.5C53.5 28 49.5 36 40 29.5" stroke="#00AEEF" stroke-width="4" />
            <path d="M71.5 17.5C67 14.3333 57.4 11.1 55 23.5H73C72 28 68 36 58.5 29.5" stroke="#00AEEF" stroke-width="4" />
            <rect x="73" y="12" width="5" height="22" fill="#00AEEF" />
            <rect x="73" y="1" width="5" height="5" fill="#00AEEF" />
            <circle cx="85" cy="23" r="8.5" stroke="#00AEEF" stroke-width="5" />
            <path d="M94 12.5V36.5C93.3333 38 91.4 41.1 89 41.5" stroke="#00AEEF" stroke-width="4" />
            <path d="M94 18C97.6667 15 105.9 10.8 109.5 18V34" stroke="#00AEEF" stroke-width="4" />
        </svg>
        <ul className="flex justify-between w-full xl:w-8/12 px-36 text-sm font-semibold items-center">
          <Link to="/">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer hover:text-blue-600">About</li>
          </Link>
          <Menu allowHover>
            <MenuHandler>
              <Link to="/services"><p className="flex gap-2 cursor-pointer hover:text-blue-600 items-center">
                Our Services <MdOutlineKeyboardArrowDown />
              </p></Link>
            </MenuHandler>
            <MenuList className="max-h-72">
              <Link to="/services/1"><MenuItem>Menu Item 1</MenuItem></Link>
              <Link to="/services/2"><MenuItem>Menu Item 2</MenuItem></Link>

              {/* Add more menu items as needed */}
            </MenuList>
          </Menu>
          <Link to="#">
            <li className="cursor-pointer hover:text-blue-600">Work</li>
          </Link>
          {/* <Link to="#">
            <li className="cursor-pointer hover:text-blue-600">Careers</li>
          </Link> */}
          <Link to="/contact">
            <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
          </Link>
        </ul>
        <div className="flex gap-6 text-sm items-center">
          <div>
            <p className="font-light text-gray-600">HotLine:</p>
            <h1 className="text-md font-semibold w-32 text-green-700">
              +91-0000000000
            </h1>
          </div>
          <Button size="md">Enquire Now</Button>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      <div className="flex lg:collapse">
        <IconButton size="sm" onClick={toggleDrawer}>
          <MenuIcon className="text-xl" />
        </IconButton>
        <Drawer
          open={isDrawerOpen}
          onClose={toggleDrawer}
          className="p-4 w-64 bg-white drop-shadow-xl"
        >
          <ul className="flex flex-col justify-between h-full gap-4 text-xl font-bold">
            <div className="grid gap-4">
              <svg
                className="w-24 lg:w-32"
                viewBox="0 0 112 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.5"
                  cy="23.5"
                  r="8.5"
                  stroke="#00AEEF"
                  stroke-width="4"
                />
                <rect x="17" width="5" height="29" fill="#00AEEF" />
                <mask id="path-3-inside-1_45_351" fill="white">
                  <path d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z" />
                </mask>
                <path
                  d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z"
                  stroke="#00AEEF"
                  stroke-width="34"
                  mask="url(#path-3-inside-1_45_351)"
                />
                <rect
                  x="21"
                  y="24.7082"
                  width="16"
                  height="4.4785"
                  transform="rotate(-28.8005 21 24.7082)"
                  fill="#00AEEF"
                />
                <path
                  d="M53 17.5C48.5 14.3333 38.9 11.1 36.5 23.5H54.5C53.5 28 49.5 36 40 29.5"
                  stroke="#00AEEF"
                  stroke-width="4"
                />
                <path
                  d="M71.5 17.5C67 14.3333 57.4 11.1 55 23.5H73C72 28 68 36 58.5 29.5"
                  stroke="#00AEEF"
                  stroke-width="4"
                />
                <rect x="73" y="12" width="5" height="22" fill="#00AEEF" />
                <rect x="73" y="1" width="5" height="5" fill="#00AEEF" />
                <circle
                  cx="85"
                  cy="23"
                  r="8.5"
                  stroke="#00AEEF"
                  stroke-width="5"
                />
                <path
                  d="M94 12.5V36.5C93.3333 38 91.4 41.1 89 41.5"
                  stroke="#00AEEF"
                  stroke-width="4"
                />
                <path
                  d="M94 18C97.6667 15 105.9 10.8 109.5 18V34"
                  stroke="#00AEEF"
                  stroke-width="4"
                />
              </svg>
              <Link to="/" onClick={toggleDrawer}>
                <li className="cursor-pointer hover:text-blue-600">Home</li>
              </Link>
              <Link to="/about" onClick={toggleDrawer}>
                <li className="cursor-pointer hover:text-blue-600">About</li>
              </Link>
              <li className="cursor-pointer hover:text-blue-600">
                Our Services
              </li>
              <ul className="pl-4">
                <li className="cursor-pointer hover:text-blue-600">
                  Menu Item 1
                </li>
                <li className="cursor-pointer hover:text-blue-600">
                  Menu Item 2
                </li>
                {/* Add more sub-menu items if needed */}
              </ul>
              <Link to="#" onClick={toggleDrawer}>
                <li className="cursor-pointer hover:text-blue-600">Work</li>
              </Link>
              {/* <Link to="#" onClick={toggleDrawer}>
                <li className="cursor-pointer hover:text-blue-600">Careers</li>
              </Link> */}
              <Link to="#" onClick={toggleDrawer}>
                <li className="cursor-pointer hover:text-blue-600">
                  Contact Us
                </li>
              </Link>
            </div>
            <div className="mt-4 text-md">
              <p className="font-light text-gray-600">HotLine:</p>
              <h1 className="text-md font-semibold text-green-700">
                +91 0000000000
              </h1>
              <Button size="lg" fullWidth onClick={toggleDrawer}>
                Enquire Now
              </Button>
            </div>
          </ul>
        </Drawer>
      </div>
    </nav>
  );
}
