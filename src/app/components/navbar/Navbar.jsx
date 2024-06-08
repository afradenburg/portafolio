'use Client'
import Link from "next/link";
import './navbar.css';

const NavBar = () => {
  return (
    <div className="navBar">
        <Link href={"https://drive.google.com/file/d/1I6dCJQMjLm1qXgIsg6yc8aSq-XTMJ3wn/view?usp=drive_link"}  style={{textDecoration: 'none'}} download>
        <p style={{marginRight: "20px"}}>
            CV
        </p>
        </Link>
    </div>
  )
}
export default NavBar;
