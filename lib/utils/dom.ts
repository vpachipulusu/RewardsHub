export const focusFirstElement = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;
  element?.focus();
};

export const isClient = typeof window !== 'undefined';

export const scrollToTop = (smooth = true) => {
  if (!isClient) return;
  
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
};

export const preventDefaultAndStopPropagation = (e: React.SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};