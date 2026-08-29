export interface NavItem {
  label: string;
  href: string;
  key: string;
}

export const navItems: NavItem[] = [
  { label: 'The Type', href: '/typology/', key: 'typology' },
  { label: 'Atlas', href: '/atlas/', key: 'atlas' },
  { label: 'Why', href: '/why/', key: 'why' },
  { label: 'Berkeley', href: '/berkeley/', key: 'berkeley' },
  { label: 'Scale', href: '/scale/', key: 'scale' },
  { label: 'Cities', href: '/cities/', key: 'cities' },
  { label: 'How', href: '/how/', key: 'how' },
  { label: 'About', href: '/about/', key: 'about' },
];

/** Prefix a site-root-relative path with the configured base (GitHub Pages subpath). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('/') ? base + path : path;
}
