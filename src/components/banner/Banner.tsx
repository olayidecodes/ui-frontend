import Countdown from '../countdown/CountDown'
import './Banner.scss'

const Banner = () => {
  return (
    <div className='hero__banner'>
        <div className="banner">
            <img className='logo_bg' src="/unibadan-logo.png" alt="University of Ibadan" />
            <div className="content">
                <h1>Alumni, Lead the Way!</h1>
                <p>Commemorate 75 years of excellence at the University of Ibadan. Join fellow alumni in shaping the future. Contribute to our crowdfunding campaign today!</p>
                <button className="btn" >Donate</button>
            </div>
            <div className="countdown">
                <Countdown />
            </div>
            <div className="lead section">
                <h1>LEAD THE WAY</h1>
                <p>Join us, proud alumni of the University of Ibadan, as we celebrate 75 years of academic excellence and chart a bold course for the future. Your support in this crowdfunding campaign will ensure that our alma mater continues to inspire and educate generations to come. Lead the way!</p>
            </div>
        </div>
    </div>
  )
}

export default Banner
