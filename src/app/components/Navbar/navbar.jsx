'use Client'
import Link from "next/link";
import './navbar.css';



const Navbar = () => {
  return (
    <div className="navBar">
        <Link  href={'/proyects'} style={{textDecoration: 'none'}}>
        <p> PROYECTOS </p>
        </Link>

        <Link href={'/'} style={{textDecoration: 'none'}}>
        <p>
            HOME
        </p>
        </Link>
    </div>
  
  )
}

export default Navbar;
