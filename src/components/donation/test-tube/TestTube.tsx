import Curved from '../../svg/Curved/Curved';
import classes from './TestTube.module.scss';
import Ruler from './Ruler';
import Shadow from './Shadow';

const TestTube = (props: { width: number; color: string }) => {
  const scale: number = props.width / 43;

  return (
    <div
      className={classes['container']}
      style={{ width: `${props.width * scale}px` }}
    >
      <div
        className={classes['test-tube']}
        style={{ transform: `scale(${scale})` }}
      >
        <div className={classes['cylindar-border']}></div>
        <div className={classes['sphere-border']}></div>

        <div className={classes['cylindar']}>
          <div
            className={classes['cylindar-fill']}
            style={{ backgroundColor: props.color }}
          ></div>
          <div
            className={`${classes['cylindar']} ${classes['cylindar-shadow']}`}
          >
            <div className={classes['left-cylindar__shadow']}></div>
          </div>
        </div>

        <div className={classes['sphere']}>
          <div
            className={classes['sphere-fill']}
            style={{ backgroundColor: props.color }}
          ></div>
          <div className={`${classes['sphere']} ${classes['sphere-shadow']}`}>
            <div className={classes['circle-shadow']}></div>
            <Curved />
          </div>
        </div>

        <Shadow />
      </div>

      <Ruler width={props.width} />
    </div>
  );
};

export default TestTube;
