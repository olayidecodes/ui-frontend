import './Footer.scss'
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <nav className="footer">
        <img src="/logo.webp" alt='University of Ibadan'/>
        <div className="links">
            <a className="link" href="twitter.com"><FaTwitterSquare  /></a>
            <a className="link" href="https://www.linkedin.com/"><FaLinkedin /></a>
            <a className="link" href=""><FaFacebookSquare /></a>
        </div>
    </nav>
  )
}

export default Footer