import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
        .then(() => {

            console.log('user log Out successfully')
        })
        .catch(error => {
            console.log(error)
        })
}
    const navlink = [
        {
            title : 'Home',
            path:'/'
        },
        {
            title : 'About',
            path:'/about'
        },
        {
            title : 'Dashboard',
            path:'/dashboard'
        },
        {
            title : 'Login',
            path:'/login'
        },
    ]
  return (

    
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            RAI Ticket
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {navlink.map((item, i) => (<li key={i}  className="flex">
              <a
                rel="noopener noreferrer"
                href={item.path}
                className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
              >
                {item.title}
              </a>
            </li>))}
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link to={'/login'}><button className="self-center px-8 py-3 rounded">Sign in</button></Link>
            <Link to={'/signup'}><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              Sign up
            </button></Link>
            <Link to={'/signup'}><button onClick={handleLogOut} className="self-center px-8 py-3 font-semibold btn btn-sm bg-green-500 text-white  rounded dark:bg-violet-600 dark:text-gray-50">
              Log Out
            </button></Link>
            
            
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
