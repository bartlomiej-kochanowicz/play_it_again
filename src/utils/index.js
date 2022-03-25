export const time = {
  longTerm: 'long_term',
  mediumTerm: 'medium_term',
  shortTerm: 'short_term',
};

export const scrollToTop = () => {
  window.scroll(0, 0);
};

export const logout = () => {
  window.localStorage.clear();
};
