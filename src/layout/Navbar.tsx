import { ModeToggler } from "@/components/ModeToggler"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className='py-3 text-white font-bold text-lg flex items-center justify-between px-5'> 
      <div>
        Navbar
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <Link to={'/user'}>User</Link>
          <Link to={'/'}>Task</Link>
        </ul>
      </div>
      <div>
        <ModeToggler/>
      </div>
    </div>
  )
}

export default Navbar
