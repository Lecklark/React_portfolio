import React from "react"
import SocialIcon from '../UI/SocialIcon';
import { NavLink } from "react-router-dom";
import vkIcon from '../assets/social/vkIcon.png';
import githubIcon from '../assets/social/githubIcon.png';
import instagramIcon from '../assets/social/instagramIcon.png';

const HeaderMenu = ({ open, setOpen, routes }) => {

    const newPage = () => {
        setOpen(false)
    }

    return (
        <div className={open ? "menu open" : "menu"}>
            <nav className="menu__navigation">
                {routes.map(route => (
                    <NavLink exact key={route.path} to={route.path} className="menu__link" onClick={newPage}>
                        {route.name}
                    </NavLink>
                ))}
            </nav>
            <div className="menu__socials">
                <SocialIcon href={"https://vk.com/one_hundred_zips"} src={vkIcon} />
                <SocialIcon href={"https://github.com/Lecklark"} src={githubIcon} />
                <SocialIcon href={"https://www.instagram.com/one_hundred_zips/"} src={instagramIcon} />
            </div>
        </div>)
}

export default HeaderMenu