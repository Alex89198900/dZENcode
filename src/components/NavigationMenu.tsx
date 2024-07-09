
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavigationMenu = () => {


const pathName = usePathname();
 
 
  return ( 
    <nav className="col-md-2 d-md-block bg-light shadow-lg sidebar z-2 pt-4 calcHeight">
      <ul className="nav flex-column text-center gap-2">
        <li className={pathName == "/orders" ? "active nav-link" : "nav-link"}>
          <Link  href={"/orders"} className="nav-link-item" >Orders</Link>
        </li>
        <li className={pathName == "/" ? "active nav-link" : "nav-link"}>
          <Link className="nav-link-item" href={"/"}  >Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
