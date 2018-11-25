import { Link } from 'react-router'
import { IoIosRocket } from 'react-icons/io'
import { IoMdSnow } from 'react-icons/io'
import { IoIosCalendar } from 'react-icons/io' 

export const Menu = () =>
    <nav className="menu">
        <Link to ="/" activeClassName= "selected">
            <IoIosCalendar />
        </Link>
        <Link to ="/add-day" activeClassName= "selected">
            <IoMdSnow />
        </Link>
        <Link to ="/list-days" activeClassName= "selected">
            <IoIosRocket />
        </Link>    
    </nav>