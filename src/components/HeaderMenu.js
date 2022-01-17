import React from "react"
import SocialIcon from '../UI/SocialIcon';
import { NavLink } from "react-router-dom";
import vkIcon from '../assets/social/vkIcon.png';
import githubIcon from '../assets/social/githubIcon.png';
import instagramIcon from '../assets/social/instagramIcon.png';

const HeaderMenu = ({ open, setOpen }) => {

    const newPage = () => {
        setOpen(false)
    }

    return (
        <div className={open ? "menu open" : "menu"}>
            <nav className="menu__navigation">
                <NavLink onClick={newPage} className="menu__link" to="/React_portfolio">Работы</NavLink>
                <NavLink onClick={newPage} className="menu__link" to="/React_portfolio/about">Обо мне</NavLink>
                <NavLink onClick={newPage} className="menu__link" to="/React_portfolio/contact">Контакты</NavLink>
            </nav>
            <div className="menu__socials">
                <SocialIcon href={"https://vk.com/one_hundred_zips"} src={vkIcon} />
                <SocialIcon href={"https://vk.com/one_hundred_zips"} src={githubIcon} />
                <SocialIcon href={"https://vk.com/one_hundred_zips"} src={instagramIcon} />
            </div>
        </div>)
}

export default HeaderMenu