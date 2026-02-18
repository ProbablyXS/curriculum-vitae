import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Corantin Berger',
    photo: '/images/photo.jpg',
    photoBackEmoji: '💻',
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeur Fullstack',
    },
    subtitle: {
      en: 'Web, Desktop & Systems Development',
      fr: 'Développement Web, Desktop & Systèmes',
    },
    location: 'Ceske Budejovice, Tchéquie',
  },

  // ===== SEO =====
  seo: {
    title: 'Corantin Berger — Développeur Fullstack',
    description: 'CV interactif de Corantin Berger, Développeur Fullstack, formateur web et développeur desktop/systèmes.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: {
      fr: 'FR',
      en: 'EN',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'ProbablyXS', href: 'https://github.com/ProbablyXS' },
    { type: 'linkedin', label: 'Corantin Berger', href: 'https://www.linkedin.com/in/corantin-berger/' },
    { type: 'email', label: 'corantin.berger@hotmail.com' },
    { type: 'phone', label: '07 85 21 95 02' },
    { type: 'location', label: 'Ceske Budejovice, Tchéquie' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Professionnel', en: 'Professional' } },
      ],
    },
    {
      title: { fr: 'Web Frontend', en: 'Web Frontend' },
      type: 'badges',
      items: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'Bootstrap' },
        { name: 'React' },
        { name: 'Twig' },
        { name: 'Bash' },
      ],
    },
    {
      title: { fr: 'Web Backend', en: 'Web Backend' },
      type: 'badges',
      items: [
        { name: 'PHP' },
        { name: 'Node.js' },
        { name: 'Symfony' },
        { name: 'Apache' },
      ],
    },
    {
      title: { fr: 'Desktop & Systèmes', en: 'Desktop & Systems' },
      type: 'badges',
      items: [
        { name: 'C#' },
        { name: '.NET / WinForms' },
        { name: 'WPF' },
        { name: 'Visual Basic .NET' },
        { name: 'C++' },
        { name: 'Python' },
        { name: 'Shell' },
        { name: 'Xamarin' },
      ],
    },
    {
      title: { fr: 'CMS', en: 'CMS' },
      type: 'badges',
      items: [
        { name: 'WordPress' },
        { name: 'Joomla' },
        { name: 'Drupal' },
        { name: 'Shopify' },
        { name: 'PrestaShop' },
      ],
    },
    {
      title: { fr: 'Bases de données', en: 'Databases' },
      type: 'badges',
      items: [
        { name: 'MongoDB' },
        { name: 'MariaDB' },
        { name: 'SQLite' },
        { name: 'phpMyAdmin' },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'VS Code' },
        { name: 'Visual Studio' },
        { name: 'Notepad++' },
        { name: 'Git / GitHub' },
        { name: 'Figma' },
        { name: 'Photoshop' },
        { name: 'Illustrator' },
        { name: 'PuTTY' },
      ],
    },
    {
      title: { fr: 'Autres', en: 'Other' },
      type: 'text',
      items: [
        { name: { fr: 'Réseaux TCP/IP, réparation informatique, UX/UI, WebRTC, Puppeteer, Tampermonkey', en: 'TCP/IP networks, IT repair, UX/UI, WebRTC, Puppeteer, Tampermonkey' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'concentrix',
      company: { fr: 'Concentrix', en: 'Concentrix' },
      role: { fr: 'Advisor I, Service Client', en: 'Advisor I, Customer Service' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: 'Nov. 2025 - Mars 2026', en: 'Nov. 2025 - March 2026' },
      description: {
        fr: 'Conseiller clientèle en centre de contact hybride à Prague, répondant aux demandes clients par téléphone et email.',
        en: 'Customer advisor in a hybrid contact center in Prague, handling requests via phone and email.',
      },
      techs: [],
      isHighlighted: true,
      details: {
        context: { fr: 'Prague, Tchéquie – mode hybride.', en: 'Prague, Czech Republic – hybrid mode.' },
        tasks: {
          fr: [
            'Répondre aux demandes des clients par téléphone et par email',
            'Résoudre les problématiques clients dans le respect des procédures',
            'Maintenir un haut niveau de qualité de service',
          ],
          en: [
            'Handling customer requests via phone and email',
            'Resolving customer issues following internal procedures',
            'Maintaining high service quality standards',
          ],
        },
        env: { fr: 'Support client / Contact center / Hybride', en: 'Customer support / Contact center / Hybrid' },
      },
    },
    {
      id: 'mooveus',
      company: { fr: 'Moovéus (AKSIS)', en: 'Moovéus (AKSIS)' },
      role: { fr: 'Formateur – Création et gestion de site internet', en: 'Trainer – Web design & management' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: 'Mai 2025 - Juin 2025', en: 'May 2025 - Jun. 2025' },
      description: {
        fr: 'Accompagnement de publics variés dans l\'apprentissage des fondamentaux du web, de la conception à la mise en ligne.',
        en: 'Guiding diverse audiences through web fundamentals, from design to deployment.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Joomla'],
      isHighlighted: true,
      details: {
        context: { fr: 'AKSIS-MOOVEUS – Brignoles, France.', en: 'AKSIS-MOOVEUS – Brignoles, France.' },
        tasks: {
          fr: [
            'Élaboration et animation de modules sur HTML, CSS, JavaScript, WordPress, Joomla et bonnes pratiques UX/UI',
            'Suivi individualisé des apprenants pour favoriser leur autonomie et montée en compétences',
            'Ateliers pratiques orientés projet avec évaluation continue et feedback structuré',
            'Veille technologique et adaptation des contenus aux évolutions du secteur numérique',
          ],
          en: [
            'Designing and delivering modules on HTML, CSS, JavaScript, WordPress, Joomla and UX/UI best practices',
            'Individual learner follow-up to support autonomy and skill development',
            'Hands-on project workshops with continuous assessment and structured feedback',
            'Technology watch and content updates to match digital sector evolutions',
          ],
        },
        env: { fr: 'HTML / CSS / JavaScript / WordPress / Joomla / UX/UI', en: 'HTML / CSS / JavaScript / WordPress / Joomla / UX/UI' },
      },
    },
    {
      id: 'redstack',
      company: { fr: 'RedStack-Dev', en: 'RedStack-Dev' },
      role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
      type: { fr: 'Freelance / Projet', en: 'Freelance / Project' },
      period: { fr: 'Oct. 2023 - Juin 2024', en: 'Oct. 2023 - Jun. 2024' },
      description: {
        fr: 'Développement fullstack (9 mois) dans un contexte projet.',
        en: 'Fullstack development (9 months) in a project context.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PHP'],
      details: {
        context: { fr: 'Mission de développement fullstack sur 9 mois.', en: '9-month fullstack development mission.' },
        tasks: {
          fr: ['Développement et maintenance d\'applications web fullstack'],
          en: ['Development and maintenance of fullstack web applications'],
        },
        env: { fr: 'HTML / CSS / JavaScript / Node.js / PHP', en: 'HTML / CSS / JavaScript / Node.js / PHP' },
      },
    },
    {
      id: 'courtoise',
      company: { fr: 'La Courtoise – Ressourcerie', en: 'La Courtoise – Ressourcerie' },
      role: { fr: 'Agent de récupération et réparation', en: 'Recovery & Repair Agent' },
      type: { fr: 'Emploi', en: 'Employment' },
      period: { fr: 'Déc. 2024 - Avr. 2025', en: 'Dec. 2024 - Apr. 2025' },
      description: {
        fr: 'Récupération, tri et réparation d\'objets et équipements dans une ressourcerie à Brignoles.',
        en: 'Recovery, sorting and repair of items and equipment in a reuse store in Brignoles.',
      },
      techs: [],
      details: {
        context: { fr: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.', en: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Récupération et tri d\'objets', 'Réparation et remise en état du matériel', 'Valorisation et mise en vente des articles'],
          en: ['Recovery and sorting of items', 'Repair and refurbishment of equipment', 'Valuation and resale of articles'],
        },
        env: { fr: '', en: '' },
      },
    },
    {
      id: 'cinema',
      company: { fr: 'Brignoles Liberté Cinéma', en: 'Brignoles Liberté Cinéma' },
      role: { fr: 'Vendeur caissier', en: 'Sales Cashier' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: 'Nov. 2024 - Déc. 2024', en: 'Nov. 2024 - Dec. 2024' },
      description: {
        fr: 'Vente de billets et de produits en caisse dans un cinéma.',
        en: 'Ticket and product sales at the cash register in a cinema.',
      },
      techs: [],
      details: {
        context: { fr: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.', en: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Vente et encaissement', 'Accueil et orientation des clients', 'Gestion de la caisse'],
          en: ['Sales and cash handling', 'Customer welcome and guidance', 'Cash register management'],
        },
        env: { fr: '', en: '' },
      },
    },
    {
      id: 'sweet-saveur',
      company: { fr: 'Sweet Saveur', en: 'Sweet Saveur' },
      role: { fr: 'Vendeur caissier', en: 'Sales Cashier' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: 'Juin 2024 - Juil. 2024', en: 'Jun. 2024 - Jul. 2024' },
      description: {
        fr: 'Vente et encaissement dans un commerce alimentaire.',
        en: 'Sales and cash handling in a food retail store.',
      },
      techs: [],
      details: {
        context: { fr: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.', en: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Accueil et conseil client', 'Vente et encaissement', 'Mise en rayon'],
          en: ['Customer welcome and advice', 'Sales and cash handling', 'Shelf stocking'],
        },
        env: { fr: '', en: '' },
      },
    },
    {
      id: 'mcdo',
      company: { fr: 'McDonald\'s', en: 'McDonald\'s' },
      role: { fr: 'Équipier Polyvalent', en: 'Crew Member' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Déc. 2019 - Sep. 2022', en: 'Dec. 2019 - Sep. 2022' },
      description: {
        fr: 'Poste polyvalent en restauration rapide sur 2 ans et 10 mois à Brignoles.',
        en: 'Versatile position in fast food for nearly 3 years in Brignoles.',
      },
      techs: [],
      details: {
        context: { fr: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.', en: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Accueil et service client', 'Préparation des commandes', 'Respect des normes d\'hygiène et de sécurité alimentaire'],
          en: ['Customer welcome and service', 'Order preparation', 'Compliance with hygiene and food safety standards'],
        },
        env: { fr: '', en: '' },
      },
    },
    {
      id: 'micromania',
      company: { fr: 'Micromania', en: 'Micromania' },
      role: { fr: 'Vendeur', en: 'Sales Associate' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: 'Nov. 2019 - Nov. 2019', en: 'Nov. 2019' },
      description: {
        fr: 'Vente de jeux vidéo et de matériel gaming.',
        en: 'Sales of video games and gaming equipment.',
      },
      techs: [],
      details: {
        context: { fr: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.', en: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Conseil et vente client', 'Gestion des stocks et de la caisse'],
          en: ['Customer advice and sales', 'Stock and cash register management'],
        },
        env: { fr: '', en: '' },
      },
    },
    {
      id: 'leclerc',
      company: { fr: 'E.Leclerc', en: 'E.Leclerc' },
      role: { fr: 'Employé de mise en rayon / Drive', en: 'Shelf Stacker / Drive' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: 'Déc. 2018 - Sep. 2019', en: 'Dec. 2018 - Sep. 2019' },
      description: {
        fr: 'Mise en rayon et préparation de commandes drive à Marignane.',
        en: 'Shelf stocking and drive order preparation in Marignane.',
      },
      techs: [],
      details: {
        context: { fr: 'Marignane, Provence-Alpes-Côte d\'Azur, France.', en: 'Marignane, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Mise en rayon des produits', 'Préparation des commandes drive', 'Gestion des stocks'],
          en: ['Shelf stocking', 'Drive order preparation', 'Stock management'],
        },
        env: { fr: '', en: '' },
      },
    },
    {
      id: 'carrefour',
      company: { fr: 'Carrefour', en: 'Carrefour' },
      role: { fr: 'Employé de mise en rayon', en: 'Shelf Stacker' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: 'Août 2018 - Oct. 2018', en: 'Aug. 2018 - Oct. 2018' },
      description: {
        fr: 'Mise en rayon dans un hypermarché à Châteauneuf-les-Martigues.',
        en: 'Shelf stocking in a hypermarket in Châteauneuf-les-Martigues.',
      },
      techs: [],
      details: {
        context: { fr: 'Châteauneuf-les-Martigues, Provence-Alpes-Côte d\'Azur, France.', en: 'Châteauneuf-les-Martigues, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Mise en rayon des produits', 'Gestion et rotation des stocks'],
          en: ['Shelf stocking', 'Stock management and rotation'],
        },
        env: { fr: '', en: '' },
      },
    },
    {
      id: 'microtech',
      company: { fr: 'MICROTECH', en: 'MICROTECH' },
      role: { fr: 'Réparation informatique et réseau télécom', en: 'IT & telecom network repair' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Jan. 2018 - Fév. 2018', en: 'Jan. 2018 - Feb. 2018' },
      description: { fr: 'Réparation informatique et interventions réseau télécom.', en: 'IT repair and telecom network interventions.' },
      techs: ['Réseaux', 'Matériel informatique'],
      details: {
        context: { fr: 'Stage en réparation informatique.', en: 'IT repair internship.' },
        tasks: {
          fr: ['Diagnostic et réparation de matériel informatique', 'Interventions sur réseau télécom'],
          en: ['Hardware diagnosis and repair', 'Telecom network interventions'],
        },
        env: { fr: 'Matériel informatique / Réseaux télécom', en: 'Hardware / Telecom networks' },
      },
    },
    {
      id: 'megachip',
      company: { fr: 'MEGACHIP', en: 'MEGACHIP' },
      role: { fr: 'Réparation, montage et vente informatique', en: 'IT repair, assembly & sales' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Mai 2017 - Juin 2017', en: 'May 2017 - Jun. 2017' },
      description: { fr: 'Réparation, montage et vente de matériel informatique à Manosque.', en: 'IT repair, assembly and sales in Manosque.' },
      techs: ['Matériel informatique'],
      details: {
        context: { fr: 'Manosque, France.', en: 'Manosque, France.' },
        tasks: {
          fr: ['Réparation et montage de PC', 'Conseil et vente client'],
          en: ['PC repair and assembly', 'Customer advice and sales'],
        },
        env: { fr: 'Matériel informatique', en: 'Hardware' },
      },
    },
    {
      id: 'uiisc7',
      company: { fr: 'UIISC7', en: 'UIISC7' },
      role: { fr: 'Réparation & sécurité réseau intranet/intra-défense', en: 'Intranet/defense network repair & security' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Avr. 2017 - Mai 2017', en: 'Apr. 2017 - May 2017' },
      description: { fr: 'Réparation et sécurité sur réseau intranet et intra-défense à Brignoles.', en: 'IT repair and security on intranet and defense network in Brignoles.' },
      techs: ['Réseaux', 'Sécurité informatique'],
      details: {
        context: { fr: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.', en: 'Brignoles, Provence-Alpes-Côte d\'Azur, France.' },
        tasks: {
          fr: ['Maintenance et réparation sur réseau intranet défense', 'Application des règles de sécurité réseau'],
          en: ['Maintenance and repair on defense intranet network', 'Applying network security rules'],
        },
        env: { fr: 'Réseaux / Sécurité / Intranet défense', en: 'Networks / Security / Defense intranet' },
      },
    },
  ],

  // ===== PROJECTS (GitHub) =====
  projects: [
    {
      id: 'rtss-headset-wpf',
      title: { fr: 'RTSS Headset Battery Info (WPF)', en: 'RTSS Headset Battery Info (WPF)' },
      description: {
        fr: 'Affiche le niveau de batterie d\'un casque gaming sans fil directement dans l\'OSD de RivaTuner Statistics Server, version WPF.',
        en: 'Displays wireless gaming headset battery level directly in the RivaTuner Statistics Server OSD, WPF version.',
      },
      techs: ['C#', 'WPF', '.NET'],
      github: 'https://github.com/ProbablyXS/RTSSHeadsetBatteryInfoWpf',
    },
    {
      id: 'rtss-headset',
      title: { fr: 'RTSS Headset Battery Info', en: 'RTSS Headset Battery Info' },
      description: {
        fr: 'Plugin affichant le niveau de batterie d\'un casque gaming sans fil dans l\'OSD RTSS via headsetcontrol.',
        en: 'Plugin displaying wireless gaming headset battery level in the RTSS OSD using headsetcontrol.',
      },
      techs: ['C#', '.NET'],
      github: 'https://github.com/ProbablyXS/RTSSHeadsetBatteryInfo',
    },
    {
      id: 'backscene',
      title: { fr: 'BackScene', en: 'BackScene' },
      description: {
        fr: 'Application Windows pour définir des fonds d\'écran vidéo animés via MPV et weebp. ⭐ 5 étoiles.',
        en: 'Windows app to set animated video wallpapers using MPV and weebp. ⭐ 5 stars.',
      },
      techs: ['C#', '.NET', 'WinForms'],
      github: 'https://github.com/ProbablyXS/BackScene',
    },
    {
      id: 'bettersoundmeeter',
      title: { fr: 'BetterSoundMeeter', en: 'BetterSoundMeeter' },
      description: {
        fr: 'Soundboard enrichissant Voicemeeter : effets sonores personnalisables, contrôle de volume par app et intégration MacroButton.',
        en: 'Soundboard enhancing Voicemeeter with custom sound effects, per-app volume control and MacroButton integration.',
      },
      techs: ['C#', '.NET', 'API Windows'],
      github: 'https://github.com/ProbablyXS/BetterSoundMeeter',
    },
    {
      id: 'cputrayapp',
      title: { fr: 'CpuTrayApp', en: 'CpuTrayApp' },
      description: {
        fr: 'App légère en zone de notification pour gérer les plans d\'alimentation et limiter l\'utilisation CPU en temps réel.',
        en: 'Lightweight system tray app to manage power plans and limit CPU usage in real time.',
      },
      techs: ['C#', '.NET', 'WinForms'],
      github: 'https://github.com/ProbablyXS/CpuTrayApp',
    },
    {
      id: 'razer-kiyo',
      title: { fr: 'Razer Kiyo Pro Firmware Fix', en: 'Razer Kiyo Pro Firmware Fix' },
      description: {
        fr: 'Solution pour corriger les problèmes de mise à jour firmware de la Razer Kiyo Pro. ⭐ 8 étoiles.',
        en: 'Solution to fix firmware update issues for the Razer Kiyo Pro webcam. ⭐ 8 stars.',
      },
      techs: ['C#'],
      github: 'https://github.com/ProbablyXS/razer-kiyo-pro-firmware-updater-fix',
    },
    {
      id: 'webrtc-screenshare',
      title: { fr: 'WebRTC ScreenShare', en: 'WebRTC ScreenShare' },
      description: {
        fr: 'Partage d\'écran et streaming vidéo en temps réel avec chat, contrôle audio et gestion à distance.',
        en: 'Real-time screen sharing and video streaming with chat, audio control and remote management.',
      },
      techs: ['JavaScript', 'WebRTC', 'Node.js'],
      github: 'https://github.com/ProbablyXS/webrtc-screenshare',
    },
    {
      id: 'liveboxpanelmanager',
      title: { fr: 'LiveboxPanelManager', en: 'LiveboxPanelManager' },
      description: {
        fr: 'Réinterprétation de l\'interface Livebox : plus rapide, plus ergonomique, avec plus d\'options.',
        en: 'Reimagined Livebox interface: faster, more ergonomic, with more options.',
      },
      techs: ['C#', 'WinForms'],
      github: 'https://github.com/ProbablyXS/LiveboxPanelManager',
    },
    {
      id: 'plutoniumspoofer',
      title: { fr: 'PlutoniumSpoofer', en: 'PlutoniumSpoofer' },
      description: {
        fr: 'Spoofer pour le client Plutonium (Call of Duty modifié). ⭐ 7 étoiles.',
        en: 'Spoofer for the Plutonium client (modded Call of Duty). ⭐ 7 stars.',
      },
      techs: ['Visual Basic .NET'],
      github: 'https://github.com/ProbablyXS/PlutoniumSpoofer',
    },
    {
      id: 'chat-online',
      title: { fr: 'Chat Online (Client & Serveur)', en: 'Online Chat (Client & Server)' },
      description: {
        fr: 'Application de chat en réseau composée d\'un client et d\'un serveur TCP.',
        en: 'Networked chat application with a TCP client and server.',
      },
      techs: ['Visual Basic .NET', 'TCP'],
      github: 'https://github.com/ProbablyXS/ClientChatOnline',
    },
    {
      id: 'auto-video-downloader',
      title: { fr: 'Auto Video Downloader TS Merge', en: 'Auto Video Downloader TS Merge' },
      description: {
        fr: 'Userscript interceptant les requêtes XHR pour télécharger et fusionner des segments .ts en fichier .mp4.',
        en: 'Userscript intercepting XHR requests to download and merge .ts segments into a single .mp4.',
      },
      techs: ['JavaScript', 'Tampermonkey'],
      github: 'https://github.com/ProbablyXS/auto-video-downloader-ts-merge',
    },
    {
      id: 'symfony-website',
      title: { fr: 'Site Web Symfony', en: 'Symfony Website' },
      description: {
        fr: 'Projet de site web développé avec Symfony et le moteur de templates Twig.',
        en: 'Website project built with Symfony and the Twig templating engine.',
      },
      techs: ['PHP', 'Symfony', 'Twig'],
      github: 'https://github.com/ProbablyXS/symfony-website',
    },
    {
      id: 'steam-wallpaper',
      title: { fr: 'Steam Wallpaper Downloader', en: 'Steam Wallpaper Downloader' },
      description: {
        fr: 'Outil Puppeteer pour télécharger automatiquement les fonds d\'écran et vidéos du Steam Points Shop.',
        en: 'Puppeteer tool to automatically download wallpapers and videos from the Steam Points Shop.',
      },
      techs: ['JavaScript', 'Node.js', 'Puppeteer'],
      github: 'https://github.com/ProbablyXS/steam-wallpaper-downloader',
    },
    {
      id: 'keyboard-sharing',
      title: { fr: 'KeyboardSharing', en: 'KeyboardSharing' },
      description: {
        fr: 'Application capturant les entrées clavier et les transmettant via TCP à un serveur distant.',
        en: 'Application capturing keyboard inputs and sending them over TCP to a remote server.',
      },
      techs: ['C#', 'TCP'],
      github: 'https://github.com/ProbablyXS/KeyboardSharing',
    },
    {
      id: 'vme-remover',
      title: { fr: 'VME-Remover', en: 'VME-Remover' },
      description: {
        fr: 'Outil pour supprimer le message d\'évaluation de VoiceMeeter. ⭐ 10 étoiles.',
        en: 'Tool to remove the VoiceMeeter evaluation popup. ⭐ 10 stars.',
      },
      techs: ['Visual Basic .NET'],
      github: 'https://github.com/ProbablyXS/VME-Remover',
    },
    {
      id: 'vecr-bo2',
      title: { fr: 'VECR Project – BO2 UI', en: 'VECR Project – BO2 UI' },
      description: {
        fr: 'Interface menu personnalisée pour la version Plutonium de Black Ops 2.',
        en: 'Custom menu interface for the Plutonium version of Black Ops 2.',
      },
      techs: ['JavaScript'],
      github: 'https://github.com/ProbablyXS/vecr-project-new-ui-bo2',
    },
    {
      id: 'dietemenbon',
      title: { fr: 'DieteMenBon', en: 'DieteMenBon' },
      description: {
        fr: 'Application web pour les diététiciens permettant d\'ajouter et gérer les dossiers patients.',
        en: 'Web application for dietitians to add and manage patient records.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: 'https://github.com/ProbablyXS/DieteMenBon',
    },
    {
      id: 'atypik-home',
      title: { fr: 'Atypik Home', en: 'Atypik Home' },
      description: {
        fr: 'Site web conçu et développé pour Atypik Home (projet concept).',
        en: 'Website designed and developed for Atypik Home (concept project).',
      },
      techs: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://github.com/ProbablyXS/Atypik-Home',
      github: 'https://github.com/ProbablyXS/Atypik-Home',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { fr: 'Icademie – Toulon', en: 'Icademie – Toulon' },
      degree: { fr: 'Bachelor Développeur Multimédia – Niveau 6 RNCP34569', en: "Bachelor's Degree in Multimedia Development – Level 6 RNCP34569" },
      specialty: { fr: 'Formation à distance', en: 'Distance learning' },
      period: '2023',
    },
    {
      school: { fr: 'Lycée Thomas Edison – Lorgues', en: 'Lycée Thomas Edison – Lorgues' },
      degree: { fr: 'Baccalauréat Professionnel SEN (Systèmes Électroniques et Numériques)', en: 'Vocational Baccalaureate – Electronic and Digital Systems (SEN)' },
      period: '2018',
    },
    {
      school: { fr: 'Lycée Thomas Edison – Lorgues', en: 'Lycée Thomas Edison – Lorgues' },
      degree: { fr: 'CAP SEN (Systèmes Électroniques et Numériques)', en: 'Vocational Studies Certificate – Electronic and Digital Systems (SEN)' },
      period: '2017',
    },
  ],

  // ===== CERTIFICATIONS =====
  hobbies: [
    {
      title: { fr: 'Certifications', en: 'Certifications' },
      details: [
        { fr: 'L\'essentiel du HTML5', en: 'HTML5 Essentials' },
        { fr: 'L\'essentiel des CSS', en: 'CSS Essentials' },
        { fr: 'Créer des formulaires avec HTML et CSS', en: 'Create forms with HTML & CSS' },
        { fr: 'Gestion de projet : La conduite de projets', en: 'Project Management Fundamentals' },
      ],
    },
  ],

  // ===== PDF =====
  pdf: {
    label: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    path: { fr: '/cv/resume-fr.pdf', en: '/cv/resume-en.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'ocean',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'CERTIFICATIONS', en: 'CERTIFICATIONS' },
    },
    experience: {
      mainTasks: { fr: 'Tâches principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres tâches...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Toggle dark mode' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
