import React from "react";

const SocialIcon = ({ src, alt, href }) => {
    return (
        <div className="social__icon">
            <a href={href}><img src={src} alt={alt} /></a>
        </div>
    )
}

export default SocialIcon