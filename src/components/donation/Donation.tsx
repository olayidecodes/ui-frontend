import classes from './Donation.module.scss';
import TestTube from './test-tube/TestTube';
import idia from '../../assets/donation/idia.png';
import mellanby from '../../assets/donation/mellanby.png';
import elizabethII from '../../assets/donation/elizabethII.png';
import Background from './background/Background';
import Button from './button/Button';

const Donation = () => {
  return (
    <div className={classes['donation-container']}>
      <div className={classes['content']}>
        <h2 className={classes['title']}>DONATION LEADERBOARD</h2>
        <p className={classes['desc']}>
          Check out the donation leaderboard and rep your halls of residence.
          Remember to tell others from your hall to keep staying in first place
          or move from your current position.
        </p>
      </div>

      <div className={classes['donation']}>
        <Background />

        <ul className={classes['test-tube__list']}>
          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={idia} alt='' />
            </div>

            <TestTube width={50} color='#3ACC86' />

            <div className={classes['tube-title']}>Queen Idia hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={mellanby} alt='' />
            </div>

            <TestTube width={57} color='#cc3a48' />

            <div className={classes['tube-title']}>Kenneth Mellanby Hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={elizabethII} alt='' />
            </div>

            <TestTube width={50} color='#A63ACC' />

            <div className={classes['tube-title']}>Queen Elizabeth II hall</div>
          </li>
        </ul>

        <Button />
      </div>
    </div>
  );
};

export default Donation;
