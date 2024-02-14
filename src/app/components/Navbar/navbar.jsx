'use Client'
import Link from "next/link";
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navBar">
        {/* <Link  href={'/proyects'} style={{textDecoration: 'none'}}>
        <p> PROYECTOS </p>
        </Link> */}
        <Link href={'/'} style={{textDecoration: 'none'}}>
        <p style={{marginLeft: "20px"}}>
            HOME
        </p>
        </Link>
        <Link href={"https://drive.google.com/file/d/1uSOZ7asx-ZWn-hSaX87n1RyI_Q9i9w4G/view?usp=drive_link"} style={{textDecoration: 'none'}} download>
        <p style={{marginRight: "20px"}}>
            CV
        </p>
        </Link>
    </div>
  )
}
export default Navbar;
