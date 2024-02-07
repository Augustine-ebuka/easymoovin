import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
 
 function Header() {
    return ( 
        <header className="bg-slate-200 shadow-sm">
           <div className="flex justify-between items-center max-w-6xl m-auto p-3">
           <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-sky-500">Easy</span>
                <span className="text-sky-800">Moovin</span>
            </h1>
            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                <input type="text" placeholder="search..." className="bg-transparent outline-none w-26 sm:w-64 "></input>
                <FaSearch className='text-slate-00' style={{cursor:"pointer"}} />
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='hidden sm:inline hover:underline text-slate-900 no-underline'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='hidden sm:inline hover:underline text-slate-500'>About</li>
                </Link>
                <Link to='/signin'>
                <li className='hidden sm:inline hover:underline text-slate-500'>signin</li>
                </Link>
            </ul>
           </div>
        </header>
     );
}

export default Header;