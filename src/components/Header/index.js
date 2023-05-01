import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <li className="header-item">
      <Link to="/">Home</Link>
    </li>
    <li className="header-item">
      <Link to="/about">About</Link>
    </li>
  </div>
)

export default Header
