import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialIcon from '../UI/SocialIcon';
import vkIcon from '../assets/social/vkIcon.png';
import githubIcon from '../assets/social/githubIcon.png';
import instagramIcon from '../assets/social/instagramIcon.png';
import Burger from "../UI/Burger";
import HeaderMenu from './HeaderMenu';


const Header = ({ routes }) => {
    const [open, setOpen] = useState(false)

    return (
        <div><header className="header">
            <nav className="header__navigation">
                {routes.map(route => (
                    <NavLink key={route.path} exact to={route.path} className="header__link">
                        {route.name}
                    </NavLink>
                ))}
            </nav>

            <div className="header__socials">
                <SocialIcon href={"https://vk.com/one_hundred_zips"} src={vkIcon} />
                <SocialIcon href={"https://vk.com/one_hundred_zips"} src={githubIcon} />
                <SocialIcon href={"https://vk.com/one_hundred_zips"} src={instagramIcon} />
            </div>
            <Burger open={open} setOpen={setOpen} />
            <HeaderMenu open={open} setOpen={setOpen} routes={routes} />
        </header>
        </div>)
}

export default Header