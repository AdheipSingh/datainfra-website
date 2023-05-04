import React from "react"
import NavbarLayout from "@theme/Navbar/Layout"
import NavbarContent from "@theme/Navbar/Content"
import Link from "@docusaurus/Link"

export default function Navbar() {
    return (
        <NavbarLayout>
            {/* <NavbarContent /> */}
            <div className="w-full flex items-center justify-between bg-[transparent] px-5 py-2 ">
                <Link to="/" className="hover:no-underline">
                    <img
                        src={"/img/logo-blue.png"}
                        className="h-9 flex-grow-0 flex-shrink-0"
                    />
                </Link>
                <div className="md:flex flex-1 hidden items-center justify-center space-x-5"></div>
            </div>
        </NavbarLayout>
    )
}
