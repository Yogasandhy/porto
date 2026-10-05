export const site = {
  name: 'Yoga Sandhy Winata', avatar: '/yoga-sandhy-winata.png', role: 'Flutter Developer',
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
    summary: 'The Nusawork e-Sign service, available for signing and managing documents on mobile.', accent: 'esign', featured: true,
    icon: '/projects/esign-nusawork-icon.png',
    platforms: ['Android', 'iOS'], tags: ['Flutter', 'E-signature', 'Multilingual'], releaseStatus: 'Released',
    links: [{ label: 'Google Play', icon: 'google-play', href: 'https://play.google.com/store/apps/details?id=id.net.nusa.esigner' },
      { label: 'App Store', icon: 'app-store', href: 'https://apps.apple.com/id/app/esign-nusawork/id6759240769' }] },
  { id: 'sumut-cerdas', title: 'SUMUT Cerdas', type: 'Public services · mobile app',
    description: 'The mobile companion to SUMUT Cerdas, North Sumatra’s public-service portal. It brings together key areas like licensing, health, vehicle tax, tourism, and public reports, alongside government information and local news.',
    summary: 'One mobile gateway to public services, regional information, and news for North Sumatra.', accent: 'sumut', featured: true,
    icon: '/projects/sumut-cerdas-icon.png',
    platforms: ['Android', 'iOS'], tags: ['Flutter', 'Public services', 'Multilingual'], releaseStatus: 'Not released', links: [] },
  { id: 'manajemen-pelayanan', title: 'Manajemen Pelayanan', type: 'Community reports · mobile app',
    description: 'A mobile workspace for reviewing community reports, updating their service status, and seeing totals across report stages.',
    summary: 'A focused workspace for reviewing community reports and tracking progress across service statuses.', accent: 'community', featured: false,
    icon: '/projects/manajemen-pelayanan-icon.svg',
    platforms: ['Android', 'iOS'], tags: ['Flutter', 'BLoC', 'Multilingual'], releaseStatus: 'Not released', links: [],
    repository: 'https://github.com/Yogasandhy/manajemen_pelayanan' },
  { id: 'expense-tracker', title: 'Expense Tracker', type: 'Personal finance · mobile app',
    description: 'A personal finance app for tracking income and expenses, organizing transactions by category, and reviewing recent activity.',
    summary: 'A clear daily view of balances, spending, and transaction history.', accent: 'expense', featured: false,
    icon: '/projects/expense-tracker-icon.svg',
    platforms: ['Android', 'iOS'], tags: ['Flutter', 'BLoC', 'Supabase', 'Multilingual'], releaseStatus: 'Not released', links: [],
    repository: 'https://github.com/Yogasandhy/expanse_tracker' },
] as const;
export const featuredProjects = projects.filter((project) => project.featured);
export const strengths = [
  ['Flutter development', 'Building mobile apps with Flutter and Dart.'],
  ['Android and iOS', 'Considering platform conventions and device behavior.'],
  ['Product collaboration', 'Turning product requirements into useful mobile flows.'],
] as const;
