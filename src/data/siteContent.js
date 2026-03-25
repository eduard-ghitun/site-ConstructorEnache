import heroBackground from '../assets/construction-hero.svg';
import projectResidential from '../assets/project-residential.svg';
import projectCommercial from '../assets/project-commercial.svg';
import projectRenovation from '../assets/project-renovation.svg';
import projectInsulation from '../assets/project-insulation.svg';
import projectOutdoor from '../assets/project-outdoor.svg';
import projectOffice from '../assets/project-office.svg';
import { brandDetails, contactDetails, serviceCategories } from './businessData';

export { brandDetails, contactDetails, serviceCategories } from './businessData';

export const navLinks = [
  { label: 'Acasa', type: 'section', href: '#acasa' },
  { label: 'Despre', type: 'section', href: '#despre' },
  { label: 'Servicii', type: 'section', href: '#servicii' },
  { label: 'Proiecte', type: 'route', href: '/proiecte' },
  { label: 'Contact', type: 'section', href: '#contact' },
];

export const heroContent = {
  background: heroBackground,
  eyebrow: 'Constructii, finisaje si instalatii',
  title: 'Executam lucrari complete de constructii, renovari si amenajari',
  description:
    'Punem la dispozitie peste 25 de ani de experienta acumulata in Italia si Romania si oferim consultanta gratuita pentru proiecte la rosu, la gri, la cheie sau pentru lucrari individuale de finisaje si instalatii in Suceava si Botosani.',
  primaryCta: { label: 'Consultanta gratuita', href: '#contact' },
  secondaryCta: { label: 'Vezi serviciile', href: '#servicii' },
  trustPoints: [
    'Consultanta gratuita pentru proiectul tau',
    'Case la rosu si la cheie',
    'Instalatii electrice si sanitare',
    'Finisaje interioare si exterioare',
  ],
  consultationBadge: 'Consultanta GRATUITA pentru proiectul tau',
  panelTitle: 'Experienta formata in Italia, aplicata in Romania',
  panelText:
    'Abordam lucrarile organizat, cu executie curata, recomandari clare si atentie constanta la fiecare etapa, de la fundatie pana la predarea finala.',
  panelStats: [
    { value: '25+', label: 'ani experienta' },
    { value: '20+', label: 'ani in Italia' },
    { value: '5+', label: 'ani in Romania' },
    { value: '100%', label: 'consultanta gratuita' },
  ],
  panelHighlights: [
    'Lucrari de la fundatie la cheie',
    'Executie completa sau pe etape',
    'Interventii interioare si exterioare',
  ],
};

export const aboutContent = {
  title: 'Peste 25 de ani de experienta in constructii, pusi in slujba unor lucrari executate corect si bine organizate.',
  paragraphs: [
    'Echipa noastra are peste 20 de ani de experienta acumulata in Italia, unde am lucrat in constructii rezidentiale si finisaje realizate la standarde ridicate, cu accent pe executie curata si detalii bine facute.',
    'In ultimii 5 ani am adus aceasta experienta si in Romania, unde executam lucrari de structura, instalatii, finisaje interioare si exterioare pentru clienti din Suceava si Botosani care isi doresc seriozitate, consultanta gratuita si o echipa pe care se pot baza.',
  ],
  highlights: [
    'Peste 20 de ani de experienta in Italia si 5 ani de activitate in Romania',
    'Consultanta gratuita pentru alegerea etapelor potrivite si organizarea lucrarii',
    'Constructii complete sau lucrari individuale, executate atent la interior si exterior',
  ],
  spotlight: {
    title: 'Experienta care se vede in executie',
    text: 'Modul nostru de lucru este influentat de experienta acumulata in santier: planificam realist, executam curat si mentinem atentia pe fiecare detaliu pana la finalul lucrarii.',
  },
  experienceCard: {
    eyebrow: 'Experienta internationala',
    title: '20+ ani in Italia si 5 ani de activitate in Romania',
    text: 'Aceasta experienta combinata ne ajuta sa abordam lucrarile cu disciplina, standarde bune de executie si recomandari practice utile pentru client inca din faza de consultanta.',
  },
  metrics: [
    { value: '25+', label: 'ani experienta totala' },
    { value: '20+', label: 'ani in Italia' },
    { value: '5+', label: 'ani in Romania' },
    { value: 'GRATUITA', label: 'consultanta pentru proiect' },
  ],
};

export const executionHighlights = [
  {
    title: 'Case de la zero la cheie',
    description:
      'Coordonam etapele principale astfel incat beneficiarul sa aiba un flux clar, de la inceputul lucrarii pana la predarea finala.',
    icon: 'home',
    points: ['structura', 'instalatii', 'finisaje', 'amenajari'],
  },
  {
    title: 'Lucrari la rosu si structura',
    description:
      'Executam fundatii, elevatii, zidarie, scari din beton si alte lucrari care cer baza corecta si rezistenta buna.',
    icon: 'building',
    points: ['fundatii', 'zidarie', 'garduri', 'trotuare'],
  },
  {
    title: 'Finisaje complete la interior si exterior',
    description:
      'Preluam atat finisaje tehnice, cat si elemente decorative care schimba aspectul si confortul final al spatiului.',
    icon: 'paint',
    points: ['rigips', 'gresie', 'fatade', 'pavaje'],
  },
  {
    title: 'Instalatii si detalii premium',
    description:
      'Executam lucrari electrice, sanitare si montaj de elemente cu aspect premium pentru proiecte bine inchegate.',
    icon: 'spark',
    points: ['electrice', 'sanitare', 'LED', 'marmura si granit'],
  },
];

export const deliveryStages = [
  {
    stage: '01',
    title: 'De la fundatie',
    description:
      'Executam fundatii, elevatii si pregatirea corecta a bazei pentru o constructie stabila si bine aliniata.',
    icon: 'foundation',
  },
  {
    stage: '02',
    title: 'La rosu',
    description:
      'Continuam cu zidarie, structuri complementare, scari din beton si elementele principale ale constructiei.',
    icon: 'structure',
  },
  {
    stage: '03',
    title: 'La gri',
    description:
      'Integram instalatiile, sapele, tencuielile, rigipsul si pregatirea suporturilor pentru finisajele finale.',
    icon: 'layers',
  },
  {
    stage: '04',
    title: 'La cheie',
    description:
      'Finalizam cu gleturi, placari, parchet, fatade, decoratiuni si toate detaliile care dau lucrarea in folosinta.',
    icon: 'key',
  },
];

export const benefits = [
  {
    title: '25+ ani de experienta in constructii',
    description:
      'Experienta acumulata in Italia si dezvoltata apoi in Romania se reflecta in executie mai bine organizata si decizii tehnice mai sigure.',
    icon: 'chart',
  },
  {
    title: 'Consultanta gratuita pentru proiect',
    description:
      'Discutam gratuit despre lucrare, etape, materiale si varianta potrivita, astfel incat sa ai o imagine mai clara inainte de executie.',
    icon: 'spark',
  },
  {
    title: 'Gama completa de servicii',
    description:
      'Putem acoperi structura, instalatiile, finisajele interioare si exterioare intr-un singur flux de lucru.',
    icon: 'grid',
  },
  {
    title: 'Executie atent urmarita',
    description:
      'Lucram cu atentie la suport, detalii si montaj, astfel incat fiecare etapa sa fie bine pregatita pentru urmatoarea.',
    icon: 'check',
  },
  {
    title: 'Interventii interioare si exterioare',
    description:
      'Preluam lucrari in casa, pe fatada sau in curte, fara sa fie nevoie de mai multi executanti pentru aceeasi proprietate.',
    icon: 'interior',
  },
  {
    title: 'Seriozitate si organizare',
    description:
      'Comunicam direct, estimam realist si mentinem santierul intr-un ritm coerent de executie.',
    icon: 'clock',
  },
  {
    title: 'Proiecte de la zero la cheie',
    description:
      'Pentru clientii care vor solutie completa, putem prelua casa inca din stadiul de fundatie si o ducem pana la finisaj.',
    icon: 'home',
  },
];

export const stats = [
  { value: '25+', label: 'ani de experienta in constructii' },
  { value: '20+', label: 'ani de experienta acumulata in Italia' },
  { value: '5', label: 'ani de activitate in Romania' },
  { value: 'Gratuita', label: 'consultanta pentru proiectul tau' },
];

export const projects = [
  {
    title: 'Casa la rosu cu structura completa',
    category: 'Structura',
    description:
      'Executie de fundatii, elevatii, zidarie si scari din beton pentru o locuinta pregatita corect pentru etapele urmatoare.',
    image: projectResidential,
  },
  {
    title: 'Casa finalizata la cheie',
    category: 'La cheie',
    description:
      'Proiect complet cu instalatii, rigips, placari, parchet si detalii finale, coordonat intr-un flux coerent de executie.',
    image: projectCommercial,
  },
  {
    title: 'Apartament cu finisaje interioare complete',
    category: 'Finisaje interioare',
    description:
      'Tencuieli, gleturi, gresie, faianta, parchet, riflaje si benzi LED integrate intr-un interior modern si bine pus in scena.',
    image: projectRenovation,
  },
  {
    title: 'Fatada izolata si tencuita decorativ',
    category: 'Exterior',
    description:
      'Sistem complet de izolatie pentru fatada, finisat cu tencuiala decorativa si detalii exterioare curate.',
    image: projectInsulation,
  },
  {
    title: 'Curte amenajata cu pavaje si gard',
    category: 'Amenajari exterioare',
    description:
      'Executie de pavaje, trotuare si imprejmuire pentru un exterior functional, rezistent si bine organizat vizual.',
    image: projectOutdoor,
  },
  {
    title: 'Interior cu rigips si decoratiuni premium',
    category: 'Detalii premium',
    description:
      'Tavane si scafe din rigips, riflaje, montaj benzi LED si detalii decorative pentru un rezultat elegant si coerent.',
    image: projectOffice,
  },
];

export const finalCtaContent = {
  eyebrow: 'Consultanta gratuita',
  title: 'Discuta gratuit cu noi despre proiectul tau si afla ce varianta de executie ti se potriveste.',
  description:
    'Fie ca vrei o casa la rosu, o lucrare la cheie sau doar o etapa de finisaje si instalatii, iti oferim consultanta gratuita si o directie clara de lucru pentru proiecte din Suceava si Botosani.',
  buttonLabel: 'Discuta gratuit despre proiect',
};
