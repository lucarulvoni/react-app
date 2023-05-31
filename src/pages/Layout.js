import { Outlet, Link } from "react-router-dom";
import logo from '../assets/imgs/logo-site.jpg';
// Load an icon library to show a hamburger menu (bars) on small screens -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Layout = () => {
  return (
    <>
    <img src={logo} className="App-logo" alt="logo" />
    <div class="topnav" id="myTopnav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
</div>
      <Outlet />
    </>
  )
};

export default Layout;