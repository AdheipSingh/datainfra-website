import React from "react"
import DropdownNavbarItem from "@theme-original/NavbarItem/DropdownNavbarItem"

export default function DropdownNavbarItemWrapper(props) {
    function hideDropdown() {
        document.querySelector(".dropdown__menu").style.display = "none"
        setTimeout(() => {
            document.querySelector(".dropdown__menu").style.display = "block"
        }, 100)
    }

    return (
        <div onClick={hideDropdown}>
            <DropdownNavbarItem {...props} />
        </div>
    )
}
