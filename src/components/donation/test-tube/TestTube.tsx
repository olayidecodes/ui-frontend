import Curved from '../../svg/Curved/Curved';
import Ruler from './Ruler';
import Shadow from './Shadow';
import classes from './TestTube.module.scss';
import { useState, useEffect } from 'react';

const TestTube = (props: {
  width: number;
  color: string;
  value: number;
  total: number;
}) => {
  const { total, value, width, color } = props;
  const scale: number = width / 43;

  const [sphereHeight, setSphereHeight] = useState(0);
  const [cylindarHeight, setCylindarHeight] = useState(0);
  const [filled, setFilled] = useState(false);
  const [sphereFilled, setSphereFilled] = useState(true);

  const sphere: number = (total * 2) / 3;
  const cylindar: number = total / 3;

  useEffect(() => {
    let timeout: number;

    if (total > 0 && value > 0 && value <= total) {
      if (value > sphere) {
        setSphereHeight(105);

        setTimeout(() => {
          setCylindarHeight(((value - sphere) / cylindar) * 100);
          setFilled(true);
        }, 2000);
      } else {
        setSphereHeight((value / sphere) * 100);
      }
      setSphereFilled(true);
    }

    return () => clearTimeout(timeout);
  }, [value, cylindar, sphere]);

  return (
    <div
      className={classes['container']}
      style={{
        width: `${width + 10 * scale}px`,
        padding: `${5 * scale}px 0`,
      }}
    >
      <div
        className={classes['test-tube']}
        style={{ transform: `scale(${scale})` }}
      >
        <div className={classes['cylindar-border']}></div>
        <div className={classes['sphere-border']}></div>

        <div className={classes['cylindar']}>
          <div
            className={`${classes['cylindar-fill']} ${
              filled ? classes['filled'] : ''
            }`}
            style={{ backgroundColor: color, height: `${cylindarHeight}%` }}
          >
            <div className={classes['wavy-cylindar']}></div>
          </div>
          <div
            className={`${classes['cylindar']} ${classes['cylindar-shadow']}`}
          >
            <div className={classes['left-cylindar__shadow']}></div>
          </div>
        </div>

        <div className={classes['sphere']}>
          <div
            className={`${classes['sphere-fill']} ${
              sphereFilled ? classes['sphere-animate'] : ''
            }`}
            style={{ backgroundColor: color, height: `${sphereHeight}%` }}
          >
            <div className={classes['wavy-sphere']}></div>
          </div>
          <div className={`${classes['sphere']} ${classes['sphere-shadow']}`}>
            <div className={classes['circle-shadow']}></div>
            <Curved />
          </div>
        </div>

        <Shadow />
      </div>

      <Ruler width={width} />
    </div>
  );
};

export default TestTube;
