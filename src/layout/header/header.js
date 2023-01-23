import Logo from "./logo";
import Menu from "./menu";
import ProfileIcon from "./profileIcon";

function Header() {

    return (

        <nav className="navbar navbar-expand-sm bg-white shadow-sm py-0 fixed-top">
            <div className="container-fluid mx-1">
                <Logo />
                <Menu />
                <ProfileIcon />
            </div>
        </nav>

    )

}export default Header;