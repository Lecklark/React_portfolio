import React from "react"

const Burger = ({ open, setOpen }) => {
    return (
        <div className={open ? "burger open" : "burger close"} onClick={() => setOpen(open => !open)}>
            <span></span>
            <span></span>
            <span></span>
        </div>)
}

export default Burger