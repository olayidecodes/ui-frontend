import './Footer.scss'
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <nav className="footer section">
        <img src="/unibadan-logo.png" width={51} height={62} className='logo' alt='University of Ibadan'/>
        <div className="flinks">
            <a className="flink" href="twitter.com"><FaTwitterSquare  /></a>
            <a className="flink" href="https://www.linkedin.com/"><FaLinkedin /></a>
            <a className="flink" href=""><FaFacebookSquare /></a>
        </div>
    </nav>
  )
}

export default Footer