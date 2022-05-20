import { useMediaQuery } from "./MediaQuery";

// I use TailwindCSS's breakpoint
// https://tailwindcss.com/docs/responsive-design
export const useIsSmall = () => useMediaQuery('(max-width: 640px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');
export const useIsLarge = () => useMediaQuery('(min-width: 1024px)');
export const useIsExtraLarge = () => useMediaQuery('(min-width: 1280px)');
export const useIs2ExtraLarge = () => useMediaQuery('(min-width: 1536px)');