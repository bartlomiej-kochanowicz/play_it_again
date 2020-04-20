export const time = {
  longTerm: 'long_term',
  mediumTerm: 'medium_term',
  shortTerm: 'short_term',
};

export function scrollToTop() {
  window.scroll(0, 0);
}

export function logout() {
  window.localStorage.clear();
}
