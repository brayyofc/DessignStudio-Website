import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';


export function Navbar() {
    return (
        <nav className='py-4 fixed w-full bg-white shadow-md flex items-center justify-center'>
            <h1 className='text-black font-black text-2xl'>LOGO</h1>
            <ul className='flex justify-evenly w-1/2 px-32 text-sm font-semibold items-center'>
                <Link to="#"><li className='cursor-pointer'>Home</li></Link>
                <Link to="#"><li className='cursor-pointer'>About</li></Link>
                <Menu className="">
                    <MenuHandler>
                    <Link to="#"><p className='flex gap-2 cursor-pointer items-center'>Our Services <MdOutlineKeyboardArrowDown/></p></Link>
                    </MenuHandler>
                    <MenuList className="max-h-72">
                        <MenuItem>Menu Item 1</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                        <MenuItem>Menu Item 3</MenuItem>
                        <MenuItem>Menu Item 4</MenuItem>
                        <MenuItem>Menu Item 5</MenuItem>
                        <MenuItem>Menu Item 6</MenuItem>
                        <MenuItem>Menu Item 7</MenuItem>
                        <MenuItem>Menu Item 8</MenuItem>
                        <MenuItem>Menu Item 9</MenuItem>
                        <MenuItem>Menu Item 10</MenuItem>
                        <MenuItem>Menu Item 11</MenuItem>
                        <MenuItem>Menu Item 12</MenuItem>
                        <MenuItem>Menu Item 13</MenuItem>
                        <MenuItem>Menu Item 14</MenuItem>
                        <MenuItem>Menu Item 15</MenuItem>
                        <MenuItem>Menu Item 16</MenuItem>
                        <MenuItem>Menu Item 17</MenuItem>
                        <MenuItem>Menu Item 18</MenuItem>
                        <MenuItem>Menu Item 19</MenuItem>
                        <MenuItem>Menu Item 20</MenuItem>
                    </MenuList>
                </Menu>
                <Link to="#"><li className='cursor-pointer'>Our Clients</li></Link>
                <Link to="#"><li className='cursor-pointer'>Contact Us</li></Link>
                
            </ul>
            <li className='flex gap-6 text-sm items-center'>
                <div>
                    <p className='font-light text-gray-600'>HotLine:</p>
                    <h1 className='text-md font-semibold text-green-700'>+91 0000000000</h1>
                </div>
                <Button size="lg">Enquire Now</Button>
            </li>
        </nav>
    )
}
