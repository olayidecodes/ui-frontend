import classes from '../Arrow/Arrow.module.scss';

const Arrow = () => {
  return (
    <svg
      className={classes['svg']}
      width='16'
      height='9'
      viewBox='0 0 16 9'
      fill='none'
    >
      <rect width='16' height='9' fill='#524E4E' />
      <g id='Mobile' clip-path='url(#clip0_566_2)'>
        <rect
          width='375'
          height='3135'
          transform='translate(-202 -2413)'
          fill='white'
        />
        <g id='Frame 118'>
          <rect
            width='375'
            height='997'
            transform='translate(-202 -530)'
            fill='#F6F8FE'
          />
          <g id='Donate Button'>
            <g id='Rectangle 5497' filter='url(#filter0_d_566_2)'>
              <rect
                x='-65'
                y='-10'
                width='100'
                height='28'
                rx='14'
                fill='#234CEB'
              />
            </g>
          </g>
          <g id='Frame 119'>
            <path
              id='Arrow 1'
              d='M15.3536 4.85355C15.5488 4.65829 15.5488 4.34171 15.3536 4.14645L12.1716 0.964466C11.9763 0.769204 11.6597 0.769204 11.4645 0.964466C11.2692 1.15973 11.2692 1.47631 11.4645 1.67157L14.2929 4.5L11.4645 7.32843C11.2692 7.52369 11.2692 7.84027 11.4645 8.03553C11.6597 8.2308 11.9763 8.2308 12.1716 8.03553L15.3536 4.85355ZM0 5H15V4H0V5Z'
              fill='white'
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d_566_2'
          x='-112'
          y='-39'
          width='194'
          height='122'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='4'
            operator='dilate'
            in='SourceAlpha'
            result='effect1_dropShadow_566_2'
          />
          <feOffset dy='18' />
          <feGaussianBlur stdDeviation='21.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.137255 0 0 0 0 0.298039 0 0 0 0 0.921569 0 0 0 0.21 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_566_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_566_2'
            result='shape'
          />
        </filter>
        <clipPath id='clip0_566_2'>
          <rect
            width='375'
            height='3135'
            fill='white'
            transform='translate(-202 -2413)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrow;
