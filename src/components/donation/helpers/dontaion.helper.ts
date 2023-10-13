export const responsivity = (
  mobile: number,
  larger: number,
  breakpoint: number
): number => {
  if (innerWidth >= breakpoint) return larger;
  else return mobile;
};

export const isScrollable = (val: boolean) => {
  const { body } = document;
  const html = document.querySelector('html')!;

  if (val) {
    if (!body.classList.contains('noscroll')) body.classList.add('noscroll');
    if (!html.classList.contains('noscroll')) html.classList.add('noscroll');
  } else {
    if (body.classList.contains('noscroll')) body.classList.remove('noscroll');
    if (html.classList.contains('noscroll')) html.classList.remove('noscroll');
  }
};
