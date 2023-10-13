import Arrow from '../../svg/Arrow/Arrow';
import { isScrollable } from '../helpers/dontaion.helper';
import classes from './Button.module.scss';

const Button = (props: { click: (val: boolean) => void }) => {
  return (
    <button
      onClick={() => {
        props.click(true);
        isScrollable(true);
      }}
      className={classes['btn']}
      title='View All Button'
    >
      <span>View all</span> <Arrow />
    </button>
  );
};

export default Button;
