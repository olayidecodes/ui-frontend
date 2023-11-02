import { ReactElement } from 'react';
import classes from './Ruler.module.scss';

const Ruler = (props: { width: number }) => {
  const marks: ReactElement[] = [];

  for (let i = 0; i <= 40; i++) {
    if (i % 5 > 0)
      marks.push(
        <div
          key={i}
          className={classes['mark']}
          style={{ height: `${(props.width * 1) / 86}px` }}
        ></div>
      );
    else
      marks.push(
        <div
          key={i}
          className={classes['thick-mark']}
          style={{ height: `${(props.width * 2) / 86}px` }}
        >
          {!(i % 20) ? (
            <div className={classes['mark-label']}>${40 - i} million </div>
          ) : (
            ''
          )}
        </div>
      );
  }

  return (
    <div
      className={classes['ruler']}
      style={{ height: `${(props.width * 140) / 43}px` }}
    >
      {marks}
    </div>
  );
};

export default Ruler;
