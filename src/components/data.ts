export const site = {
  name: 'Yoga Sandhy Winata', initials: 'YSW', role: 'Flutter Developer',
  github: 'https://github.com/Yogasandhy', location: 'Indonesia',
  linkedin: 'https://www.linkedin.com/in/yoga-sandhy-winata-35100b229/',
  email: 'yogasandhywinata@gmail.com', whatsapp: 'https://wa.me/6281265073404',
};
export const navigation = [
  { href: '/', label: 'Home' }, { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
] as const;
export const projects = [
  { id: 'esign-nusawork', title: 'eSign Nusawork', type: 'Digital signature · mobile app',
    description: 'The mobile app for Nusawork e-Sign: digital signatures and e-Meterai for HR and business documents on Android and iOS.',
    summary: 'The Nusawork e-Sign service, available for signing and managing documents on mobile.', accent: 'esign',
    icon: '/projects/esign-nusawork-icon.png',
    platforms: ['Android', 'iOS'], tags: ['Flutter', 'E-signature'],
    links: [{ label: 'Google Play', icon: 'google-play', href: 'https://play.google.com/store/apps/details?id=id.net.nusa.esigner' },
      { label: 'App Store', icon: 'app-store', href: 'https://apps.apple.com/id/app/esign-nusawork/id6759240769' }] },
  { id: 'sumut-cerdas', title: 'Sumut Cerdas', type: 'Public service super app',
    description: 'Public services, government information, and local news for North Sumatra—brought together in one app.',
    summary: 'Everyday public services and local information in one place.', accent: 'sumut',
    icon: '/projects/sumut-cerdas-icon.png',
    platforms: ['Android'], tags: ['Flutter', 'Public services', 'Localization'], links: [] },
] as const;
export const strengths = [
  ['Flutter development', 'Building mobile apps with Flutter and Dart.'],
  ['Android and iOS', 'Considering platform conventions and device behavior.'],
  ['Product collaboration', 'Turning product requirements into useful mobile flows.'],
] as const;
