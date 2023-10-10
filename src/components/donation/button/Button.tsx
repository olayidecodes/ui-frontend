import Arrow from '../../svg/Arrow/Arrow';
import classes from './Button.module.scss';

const Button = () => {
  return (
    <button className={classes['btn']} title='View All Button'>
      <span>View all</span> <Arrow />
    </button>
  );
};

export default Button;
