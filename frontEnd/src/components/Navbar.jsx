import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink} from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,navigate,getCartCount,token, setToken,setCartItems}=useContext(ShopContext)

  const logout=()=>{
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }
  
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'><img src={assets.logo} className="w-36" alt="logo" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 hidden">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={()=>{navigate('/collection'),setShowSearch(true)}}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search-icon"
        />

        <div className="group relative">
          <img
            onClick={()=> token? null:navigate('/login')}
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-5 cursor-pointer"
          />
          {/* Drop down */}
          {token && <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flec flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded">
              <Link to='/login'><p className="cursor-pointer hover:text-black"> My Profile</p></Link>
              <Link to="/orders"><p className="cursor-pointer hover:text-black">Orders</p></Link>
              <p className="cursor-pointer hover:text-black" onClick={logout}>Logout</p>
            </div>
          </div>}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} alt="droppdown-icon" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/'>Home</NavLink>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/collection'>Collection</NavLink>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/about'>About</NavLink>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
