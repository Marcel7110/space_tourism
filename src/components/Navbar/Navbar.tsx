import type { Page } from "../../types"
import logo from '../../assets/shared/logo.svg'
import menu from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import { useRef } from "react"

type Props = {
    currentPage: Page,
    setCurrentPage: React.Dispatch<React.SetStateAction<Page>>
}


const Navbar = ({currentPage,setCurrentPage}:Props) => {
    const navRef =  useRef<any>()

    const handleMenu = () => {
        navRef.current.classList.toggle('nav-open')
    }

    return ( 
        <header>
            <img src={logo} alt="logo"/>
            <div className="splitter"></div>
            <button className="btn-menu" onClick={handleMenu}>
                <img src={menu} alt=""/>
            </button>
            <nav ref={navRef}>
                <button className="btn-close" onClick={handleMenu}>
                    <img src={close} alt=""/>
                </button>
                <button className={`btn-first ${currentPage === 1 ? 'active' : ''}`} onClick={() => {setCurrentPage(1);handleMenu()}}>
                    <span>00</span> HOME
                </button>
                <button className={`${currentPage === 2 ? 'active' : ''}`} onClick={() => {setCurrentPage(2);handleMenu()}}>
                    <span>01</span> DESTINATION
                </button>
                <button className={`${currentPage === 3 ? 'active' : ''}`} onClick={() => {setCurrentPage(3);handleMenu()}}>
                    <span>02</span> CREW
                </button>
                <button className={`${currentPage === 4 ? 'active' : ''}`} onClick={() => {setCurrentPage(4);handleMenu()}}>
                    <span>03</span> TECHNOLOGY
                </button>
            </nav>
        </header>
     );
}
 
export default Navbar;