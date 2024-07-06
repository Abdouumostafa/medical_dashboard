import { pathList } from "../../routes/routesPaths";
import {
  baricon,
  baricon1,
  logo,
}
  from "../../imagesPath/imagesPath";
import { Link } from "react-router-dom";
import SearchComponent from "../../features/search/components/SearchComponent";

const Navbar = () => {
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };

  const handlesidebarmobilemenu = (e: any) => {
    e.preventDefault()
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle('menu-opened');
    document.getElementsByClassName("sidebar-overlay")[0].classList.toggle("opened");
  };

  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="header-left">
          <Link to={pathList.homePage} className="logo">
            <img src={logo} width={35} height={35} alt="" />{" "}
            <span>مستشفي الملك عبدالعزيز</span>
          </Link>
        </div>
        <Link id="toggle_btn" to="#" onClick={handlesidebar}>
          <img src={baricon} alt="" />
        </Link>
        <Link id="mobile_btn" className="mobile_btn float-end" to="#" onClick={handlesidebarmobilemenu}>
          <img src={baricon1} alt="" />
        </Link>
        <SearchComponent />
      </div>
    </div>
  );
}

export default Navbar