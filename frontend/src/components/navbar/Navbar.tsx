import {FC, useState} from "react";
import "./navbar.scss";
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";

export const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset !== 0);
        return () => window.onscroll = null
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/150px-Netflix_2014_logo.svg.png" alt=""/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className={"icon"}/>
                    <span>KID</span>
                    <Notifications className={"icon"}/>
                    <img src="https://lh3.googleusercontent.com/ogw/AOh-ky2_sfkuPmYi1fg8FB1e70LhkFvk6Np1yb9WOEvT=s32-c-mo" alt=""/>
                    <div className="profile">
                        <ArrowDropDown className={"icon"}/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

