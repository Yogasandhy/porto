export const site = {
  name: 'Yoga Sandhy Winata',
  avatar: '/yoga-sandhy-winata.png',
  role: 'Flutter Developer',
  github: 'https://github.com/Yogasandhy',
  location: 'Indonesia',
  linkedin: 'https://www.linkedin.com/in/yoga-sandhy-winata-35100b229/',
  email: 'yogasandhywinata@gmail.com',
};

export const navigation = [
  { href: '/', label: 'Home', labelId: 'Beranda' },
  { href: '/work/', label: 'Work', labelId: 'Proyek' },
  { href: '/about/', label: 'About', labelId: 'Tentang' },
] as const;

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  summary: string;
  accent: string;
  featured: boolean;
  icon: string;
  platforms: readonly string[];
  tags: readonly string[];
  releaseStatus: string;
  contributionLabel?: string;
  links: readonly { label: string; icon: 'google-play' | 'app-store'; href: string }[];
  gallery?: readonly ProjectImage[];
  repository?: string;
  localized: {
    id: {
      type: string;
      description: string;
      summary: string;
      tags: readonly string[];
      releaseStatus: string;
      contributionLabel?: string;
      galleryAlts?: readonly string[];
    };
  };
}

export const projects: Project[] = [
  {
    id: 'esign-nusawork',
    title: 'eSign Nusawork',
    type: 'Digital signatures | mobile app',
    description: 'A multi-tenant electronic-signature app built with Flutter. I contributed to secure sign-in and role-based access, document signing, KYC, and document-validation flows integrated with Laravel services.',
    summary: 'Mobile signing workflows for business documents, built for the Nusawork e-Sign platform.',
    accent: 'esign',
    featured: true,
    icon: '/projects/esign-nusawork-icon.png',
    platforms: ['Android', 'iOS'],
    tags: ['Flutter', 'Laravel', 'E-signature', 'Multilingual'],
    releaseStatus: 'Released',
    links: [
      { label: 'Google Play', icon: 'google-play', href: 'https://play.google.com/store/apps/details?id=id.net.nusa.esigner' },
      { label: 'App Store', icon: 'app-store', href: 'https://apps.apple.com/id/app/esign-nusawork/id6759240769' },
    ],
    gallery: [
      { src: '/projects/esign-overview.webp', alt: 'Nusawork e-Sign dashboard with document and user-management shortcuts.' },
      { src: '/projects/esign-upload-sign.webp', alt: 'Document upload and signing-mode selection in the e-Sign app.' },
      { src: '/projects/esign-signing.webp', alt: 'A business agreement ready for review and signing on mobile.' },
      { src: '/projects/esign-status.webp', alt: 'Document list showing the status of signature workflows.' },
    ],
    localized: { id: {
      type: 'Tanda tangan digital | aplikasi mobile',
      description: 'Aplikasi tanda tangan elektronik multi-tenant dengan Flutter. Saya berkontribusi pada autentikasi aman dan akses berbasis peran, alur penandatanganan dokumen, KYC, serta validasi dokumen yang terintegrasi dengan layanan Laravel.',
      summary: 'Alur penandatanganan dokumen bisnis untuk platform e-Sign Nusawork.',
      tags: ['Flutter', 'Laravel', 'Tanda tangan digital', 'Multibahasa'],
      releaseStatus: 'Dirilis',
      galleryAlts: ['Dashboard e-Sign Nusawork dengan akses cepat ke dokumen dan manajemen pengguna.', 'Pemilihan dokumen dan metode tanda tangan pada aplikasi e-Sign.', 'Dokumen perjanjian bisnis yang siap ditinjau dan ditandatangani melalui ponsel.', 'Daftar dokumen yang menampilkan status proses tanda tangan.'],
    } },
  },
  {
    id: 'sumut-cerdas',
    title: 'Super App Sumatera Utara',
    type: 'SUMUT Cerdas | public services',
    description: 'I develop the Flutter mobile experience for Super App Sumatera Utara (SUMUT Cerdas), an integrated government-services platform. It brings public-service access and regional information together, including nearby health facilities, cultural heritage, vehicle tax, and local news.',
    summary: 'The Flutter mobile experience for North Sumatra\'s public-service super app, SUMUT Cerdas.',
    accent: 'sumut',
    featured: true,
    icon: '/projects/sumut-cerdas-icon.png',
    platforms: ['Android', 'iOS'],
    tags: ['Flutter', 'REST APIs', 'Clean Architecture', 'Multilingual'],
    releaseStatus: 'In progress',
    links: [],
    gallery: [
      { src: '/projects/sumut-home.jpg', alt: 'SUMUT Cerdas home screen with public-service shortcuts and regional news.' },
      { src: '/projects/sumut-health-facilities.jpg', alt: 'Map and nearby list of health facilities in the SUMUT Cerdas app.' },
      { src: '/projects/sumut-cultural-heritage.jpg', alt: 'Cultural heritage discovery screen featuring Istana Maimun.' },
      { src: '/projects/sumut-vehicle-tax.jpg', alt: 'Vehicle tax lookup form in the SUMUT Cerdas app.' },
    ],
    localized: { id: {
      type: 'SUMUT Cerdas | layanan publik',
      description: 'Mengembangkan pengalaman mobile Flutter untuk Super App Sumatera Utara (SUMUT Cerdas), sebuah platform layanan pemerintahan terintegrasi. Aplikasi ini menyatukan akses layanan publik dan informasi daerah, termasuk fasilitas kesehatan terdekat, cagar budaya, pajak kendaraan, dan berita lokal.',
      summary: 'Pengalaman mobile Flutter untuk super app layanan publik Sumatera Utara, SUMUT Cerdas.',
      tags: ['Flutter', 'REST API', 'Arsitektur Bersih', 'Multibahasa'],
      releaseStatus: 'Dalam pengembangan',
      galleryAlts: ['Halaman utama SUMUT Cerdas dengan akses layanan publik dan berita daerah.', 'Peta dan daftar fasilitas kesehatan terdekat di aplikasi SUMUT Cerdas.', 'Halaman informasi cagar budaya yang menampilkan Istana Maimun.', 'Formulir pengecekan pajak kendaraan di aplikasi SUMUT Cerdas.'],
    } },
  },
  {
    id: 'studyo',
    title: 'Studyo',
    type: 'Learning game | Flutter Web',
    description: 'During my remote internship, I migrated an existing Flutter mobile game to Flutter Web. I adapted rendering, asset handling, and layouts for browser use while preserving the core gameplay experience.',
    summary: 'An interactive learning game adapted from mobile to the browser.',
    accent: 'studyo',
    featured: false,
    icon: '/projects/studyo-anymath-icon.png',
    platforms: ['Mobile', 'Web'],
    tags: ['Flutter', 'Flutter Web', 'Game UI', 'Multilingual'],
    releaseStatus: 'Released',
    contributionLabel: 'Internship contribution',
    links: [],
    gallery: [
      { src: '/projects/studyo-games.webp', alt: 'A collection of colorful arithmetic mini-games from Studyo.' },
      { src: '/projects/studyo-math-game.webp', alt: 'An interactive fraction game with answer choices and a friendly cat character.' },
      { src: '/projects/studyo-pet-worlds.webp', alt: 'A virtual-pet game screen for decorating and sharing pet worlds.' },
    ],
    localized: { id: {
      type: 'Game edukasi | Flutter Web',
      description: 'Selama magang jarak jauh, saya memigrasikan game mobile Flutter yang sudah ada ke Flutter Web. Saya menyesuaikan rendering, aset, dan tata letak untuk browser tanpa mengubah pengalaman bermain utamanya.',
      summary: 'Game edukasi interaktif yang diadaptasi dari mobile ke browser.',
      tags: ['Flutter', 'Flutter Web', 'Antarmuka Game', 'Multibahasa'],
      releaseStatus: 'Dirilis',
      contributionLabel: 'Kontribusi magang',
      galleryAlts: ['Kumpulan mini-game berhitung penuh warna dari Studyo.', 'Game pecahan interaktif dengan pilihan jawaban dan karakter kucing.', 'Layar permainan hewan virtual untuk menghias dan berbagi dunia peliharaan.'],
    } },
  },
  {
    id: 'manajemen-pelayanan',
    title: 'Manajemen Pelayanan',
    type: 'Community reports | mobile app',
    description: 'A mobile workspace for reviewing community reports, updating their service status, and seeing totals across report stages.',
    summary: 'A focused workspace for reviewing community reports and tracking progress across service statuses.',
    accent: 'community',
    featured: false,
    icon: '/projects/manajemen-pelayanan-icon.svg',
    platforms: ['Android', 'iOS'],
    tags: ['Flutter', 'BLoC', 'Multilingual'],
    releaseStatus: 'Not released',
    links: [],
    repository: 'https://github.com/Yogasandhy/manajemen_pelayanan',
    localized: { id: {
      type: 'Laporan masyarakat | aplikasi mobile',
      description: 'Ruang kerja mobile untuk meninjau laporan masyarakat, memperbarui status layanan, dan melihat jumlah laporan pada setiap tahap.',
      summary: 'Ruang kerja terarah untuk meninjau laporan masyarakat dan melacak progres layanan.',
      tags: ['Flutter', 'BLoC', 'Multibahasa'],
      releaseStatus: 'Belum dirilis',
    } },
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    type: 'Personal finance | mobile app',
    description: 'A personal finance app for tracking income and expenses, organizing transactions by category, and reviewing recent activity.',
    summary: 'A clear daily view of balances, spending, and transaction history.',
    accent: 'expense',
    featured: false,
    icon: '/projects/expense-tracker-icon.svg',
    platforms: ['Android', 'iOS'],
    tags: ['Flutter', 'BLoC', 'Supabase', 'Multilingual'],
    releaseStatus: 'Not released',
    links: [],
    repository: 'https://github.com/Yogasandhy/expanse_tracker',
    localized: { id: {
      type: 'Keuangan pribadi | aplikasi mobile',
      description: 'Aplikasi keuangan pribadi untuk mencatat pemasukan dan pengeluaran, mengelompokkan transaksi berdasarkan kategori, serta meninjau aktivitas terbaru.',
      summary: 'Ringkasan harian yang jelas untuk saldo, pengeluaran, dan riwayat transaksi.',
      tags: ['Flutter', 'BLoC', 'Supabase', 'Multibahasa'],
      releaseStatus: 'Belum dirilis',
    } },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const experience = [
  {
    role: 'Mobile Developer',
    organization: 'Dinas Komunikasi dan Informatika',
    period: 'Jun 2026 - Present',
    periodId: 'Jun 2026 - Sekarang',
    description: 'Developing and improving the Flutter mobile experience for Super App Sumatera Utara (SUMUT Cerdas), including REST API integration, maintainable architecture, and collaboration across product and engineering teams.',
    localized: { role: 'Developer Mobile', description: 'Mengembangkan dan meningkatkan pengalaman mobile Flutter untuk Super App Sumatera Utara (SUMUT Cerdas), termasuk integrasi REST API, arsitektur yang mudah dirawat, serta kolaborasi dengan tim produk dan engineering.' },
  },
  {
    role: 'Mobile Developer Intern',
    organization: 'PT Media Antar Nusa',
    period: 'Dec 2025 - Jun 2026',
    periodId: 'Des 2025 - Jun 2026',
    description: 'Built Flutter features for a multi-tenant e-signature app, contributing to authentication, role-based access, document workflows, KYC, and validation with Laravel services.',
    localized: { role: 'Magang Developer Mobile', description: 'Membangun fitur Flutter untuk aplikasi tanda tangan elektronik multi-tenant, mencakup autentikasi, akses berbasis peran, alur dokumen, KYC, dan validasi dengan layanan Laravel.' },
  },
  {
    role: 'Mobile Developer Intern | Remote',
    organization: 'Studyo',
    period: 'Sep - Nov 2025',
    periodId: 'Sep - Nov 2025',
    description: 'Migrated an existing Flutter mobile game to Flutter Web and adapted rendering, assets, and layouts for responsive browser use.',
    localized: { role: 'Magang Developer Mobile | Remote', description: 'Memigrasikan game mobile Flutter yang sudah ada ke Flutter Web serta menyesuaikan rendering, aset, dan tata letaknya agar responsif di browser.' },
  },
] as const;

export const learningPrograms = [
  {
    name: 'Mojadi App Indonesia',
    program: 'Mobile Apps Developer',
    period: 'Feb - Jul 2024',
    periodId: 'Feb - Jul 2024',
    description: 'Built Sicare, a healthcare app with role-based features and appointment scheduling.',
    localized: { program: 'Developer Aplikasi Mobile', description: 'Membangun Sicare, aplikasi kesehatan dengan fitur berbasis peran dan penjadwalan janji temu.' },
  },
  {
    name: 'Bangkit Academy by Google',
    program: 'Mobile Development',
    period: 'Aug 2023 - Jan 2024',
    periodId: 'Agu 2023 - Jan 2024',
    description: 'Completed the Android and Kotlin learning path and collaborated on an AI-focused capstone.',
    localized: { program: 'Pengembangan Mobile', description: 'Menyelesaikan jalur pembelajaran Android dan Kotlin serta berkolaborasi dalam proyek akhir bertema AI.' },
  },
] as const;

export const education = {
  institution: 'Universitas Mikroskil',
  degree: 'Informatics Engineering',
  period: 'Sep 2021 - Oct 2025',
  periodId: 'Sep 2021 - Okt 2025',
  gpa: '3.86 / 4.00',
  languages: 'Indonesian (native) | English (intermediate)',
  localized: { degree: 'Teknik Informatika', languages: 'Bahasa Indonesia (fasih) | Inggris (menengah)' },
};

export const strengths = [
  { title: 'Flutter development', text: 'Building cross-platform apps with Flutter and Dart.', titleId: 'Pengembangan Flutter', textId: 'Membangun aplikasi lintas platform dengan Flutter dan Dart.' },
  { title: 'Mobile architecture', text: 'Applying state management and maintainable app structure.', titleId: 'Arsitektur mobile', textId: 'Menerapkan manajemen state dan struktur aplikasi yang mudah dirawat.' },
  { title: 'Product collaboration', text: 'Working with design, backend, QA, and product teams.', titleId: 'Kolaborasi produk', textId: 'Berkolaborasi dengan tim desain, backend, QA, dan produk.' },
] as const;
