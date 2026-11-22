// Single source for contact details and social links (previously repeated in five components)
export const CONTACT = {
  email: 'manasx1upadhyay@gmail.com',
  phone: '+91 761732-5347',
  phoneHref: '+917617325347',
};

export const SOCIALS = [
  { label: 'Instagram', handle: '@someone_on.the_internet', href: 'https://www.instagram.com/someone_on.the_internet' },
  { label: 'LinkedIn', handle: 'manas-u', href: 'https://www.linkedin.com/in/manas-u-33245a288' },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Archive', path: '/work' },
  { label: 'Skills', path: '/skills' },
];

// Opens the contact dialog from anywhere (Navbar listens for this event)
export const openContact = () => window.dispatchEvent(new Event('open-contact'));
