import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-emerald-800">
          <div>Logo</div>
          <ul className='flex gap-4'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/register'>Register</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
              
          </ul>
    </div>
  )
}

export default Header
