import classes from './Donation.module.scss';
import TestTube from './test-tube/TestTube';
import idia from '../../assets/donation/idia.png';
import mellanby from '../../assets/donation/mellanby.png';
import elizabethII from '../../assets/donation/elizabethII.png';
import Background from './background/Background';
import Button from './button/Button';
import { useEffect, useState } from 'react';
import AllDonation from './all-dontaion/AllDonation';
import { responsivity } from './helpers/dontaion.helper';

const Donation = () => {
  const [width, setWidth] = useState(responsivity(50, 83, 1280));
  const [openMore, setOpenMore] = useState(false);
  // const [values, setValues] = useState([0,0,0])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(responsivity(50, 83, 1280));
    });
  }, []);

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

            <TestTube value={85} total={100} width={width} color='#3ACC86' />

            <div className={classes['tube-title']}>Queen Idia hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={mellanby} alt='' />
            </div>

            <TestTube
              value={95}
              total={100}
              width={width + width * 0.1}
              color='#cc3a48'
            />

            <div className={classes['tube-title']}>Kenneth Mellanby Hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={elizabethII} alt='' />
            </div>

            <TestTube value={75} total={100} width={width} color='#A63ACC' />

            <div className={classes['tube-title']}>Queen Elizabeth II hall</div>
          </li>
        </ul>

        <Button click={setOpenMore} />
      </div>

      {openMore && (
        <AllDonation
          onclose={() => {
            setOpenMore(false);
          }}
        />
      )}
    </div>
  );
};

export default Donation;
