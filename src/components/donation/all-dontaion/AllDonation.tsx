import TestTube from '../test-tube/TestTube';
import classes from './AllDonation.module.scss';
import { useState, useEffect } from 'react';
import { isScrollable, responsivity } from '../helpers/dontaion.helper';
import elizabethII from '../../../assets/donation/elizabethII.png';
import mellanby from '../../../assets/donation/mellanby.png';
import idia from '../../../assets/donation/idia.png';
import tedder from '../../../assets/donation/tedder.png';
import zik from '../../../assets/donation/zik.png';
import bello from '../../../assets/donation/bello.png';
import awo from '../../../assets/donation/awo.png';
import xander from '../../../assets/donation/xander.png';

const AllDonation = (props: { onclose: (val: boolean) => void }) => {
  const [width, setWidth] = useState(responsivity(38, 50, 1280));

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(responsivity(38, 80, 1280));
    });
  }, []);

  return (
    <>
      <div
        className={classes['backdrop']}
        onClick={() => {
          props.onclose(false);
          isScrollable(false);
        }}
      ></div>

      <div className={classes['popup-container']}>
        <ul className={classes['test-tube__list']}>
          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={elizabethII} alt='' />
            </div>

            <TestTube value={10} total={100} width={width} color='#A63ACC' />

            <div className={classes['tube-title']}>Queen Elizabeth II hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={mellanby} alt='' />
            </div>

            <TestTube value={20} total={100} width={width} color='#CC3A48' />

            <div className={classes['tube-title']}>Kenneth Mellanby Hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={idia} alt='' />
            </div>

            <TestTube value={30} total={100} width={width} color='#3ACC86' />

            <div className={classes['tube-title']}>Queen Idia hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={tedder} alt='' />
            </div>

            <TestTube value={40} total={100} width={width} color='#EFFF3C' />

            <div className={classes['tube-title']}>Tedder Hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={zik} alt='' />
            </div>

            <TestTube value={50} total={100} width={width} color='#5C3DD7' />

            <div className={classes['tube-title']}>Nnamdi Azikiwe Hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={bello} alt='' />
            </div>

            <TestTube value={60} total={100} width={width} color='#FF6B00' />

            <div className={classes['tube-title']}>Sultan bello hall </div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={awo} alt='' />
            </div>

            <TestTube value={70} total={100} width={width} color='#3ACCBA' />

            <div className={classes['tube-title']}>Obafemi Awolowo Hall</div>
          </li>

          <li className={classes['test-tube']}>
            <div className={classes['img-container']}>
              <img width='50' height='50' src={xander} alt='' />
            </div>

            <TestTube value={100} total={100} width={width} color='#CC3A92' />

            <div className={classes['tube-title']}>Alexander brown hall</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AllDonation;
