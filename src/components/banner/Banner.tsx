import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
        <img className='logo_bg' src="/unibadan-logo.png" alt="University of Ibadan" />
        <div className="content">
            <h1>Alumni, Lead the Way!</h1>
            <p>Commemorate 75 years of excellence at the University of Ibadan. Join fellow alumni in shaping the future. Contribute to our crowdfunding campaign today!</p>
            <button className="btn" >Donate</button>
        </div>
    </div>
  )
}

export default Banner
