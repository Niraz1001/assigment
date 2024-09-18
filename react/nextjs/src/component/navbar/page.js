import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarItem, Button} from "@nextui-org/react";

const Navabar = () => {

  const user = true;

  return (
    <div>
  
  <Navbar className='p-2 'style={{backgroundColor:"#E8ECEF"}} >
       <NavbarBrand>
       <p className="font-bold text-inherit" style={{fontSize:"24px"}}>JOBS <span style={{color:"#219ebc"}}>AAYO</span></p>
       </NavbarBrand>

      <NavbarContent justify='center' style={{fontSize:"16px"}}>
        
        <ul className=" flex gap-10 text-inherit">
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Jobs</li>
          <li className='cursor-pointer'>Browser</li>
          <li className='cursor-pointer'>About Us</li>
        </ul>
      </NavbarContent>

      {
        !user ? (
          <NavbarContent as="div" justify="end" >
            <NavbarItem className='cursor-pointer '> <Button  radius='none' style={{ backgroundColor:"#E8ECEF",color:"#219ebc", border:"solid #219ebc 1px"}}>Sign Up</Button></NavbarItem>
            <NavbarItem className='cursor-pointer '><Button  radius='none' style={{ backgroundColor:"#219ebc",color:"white"}}> Log In </Button></NavbarItem>
          </NavbarContent>
        ): (
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="219ebc"
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
            <DropdownItem key="settings"> Veiw profile</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
        )
      }

    </Navbar>
        
    </div>
  )
}

export default Navabar