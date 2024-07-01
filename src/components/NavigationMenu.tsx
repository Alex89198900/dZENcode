
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavigationMenu = () => {


const pathName = usePathname();
 
 
  return (
   
    <ul className=" navBar  d-flex  flex-xl-column col-sm-1 calcHeight justify-content-md-around  fixed-bottom  m-0">
      <li className={pathName == "/orders" ? "active nav-link" : "nav-link"}>
        <Link href={"/orders"}  >Orders</Link>
      </li>
      <li className={pathName == "/" ? "active nav-link" : "nav-link"}>
        <Link href={"/"}  >Products</Link>
      </li>
    </ul>
    
  );
};

export default NavigationMenu;
