import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'so';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Download CV',
    
    'hero.greeting': "Hello, I'm",
    'hero.role': 'Full Stack Developer',
    'hero.description': 'I build exceptional digital experiences with modern technologies. Passionate about creating clean, efficient, and user-friendly applications.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.resume': 'Download CV',
    
    'about.title': 'About Me',
    'about.text1': 'I am a passionate developer based in Somalia with a knack for solving complex problems through code. My journey in tech started with a curiosity for how things work on the web, which led me to master the MERN stack and modern frontend frameworks.',
    'about.text2': 'When I\'m not coding, I enjoy learning new technologies, contributing to open source, and mentoring aspiring developers. I believe in the power of technology to transform lives and businesses.',
    
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'My proficiency in various technologies and tools',
    
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my recent work',
    'projects.view': 'View Project',
    'projects.code': 'Source Code',
    
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have a project in mind or just want to say hi?',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message.',
  },
  so: {
    'nav.home': 'Hoyga',
    'nav.about': 'Igu Saabsan',
    'nav.skills': 'Xirfadaha',
    'nav.projects': 'Mashaariicda',
    'nav.contact': 'Xiriirka',
    'nav.resume': 'Dajiso CV',
    
    'hero.greeting': "Haye, waxaan ahay",
    'hero.role': 'Full Stack Developer',
    'hero.description': 'Waxaan dhisaa khibrado dhijitaal ah oo casri ah anigoo isticmaalaya tiknoolajiyaddii ugu dambeysay. Waxaan xiiseeyaa abuurista barnaamijyo nadiif ah, hufan, oo isticmaalaha u roon.',
    'hero.cta.projects': 'Fiiri Mashaariicda',
    'hero.cta.resume': 'Dajiso CV',
    
    'about.title': 'Igu Saabsan',
    'about.text1': 'Waxaan ahay horumariye jecel shaqadiisa oo fadhigiisu yahay Soomaaliya, lehna xirfad uu ku xalliyo dhibaatooyinka adag isagoo adeegsanaya koodh. Safarkayga tiknoolajiyadda wuxuu ka bilowday xiisaha aan u qabo sida webku u shaqeeyo.',
    'about.text2': 'Markaanan koodh qorayn, waxaan ku raaxaystaa barashada tiknoolajiyado cusub iyo caawinta horumariyeyaasha soo koraya. Waxaan aaminsanahay awoodda tiknoolajiyaddu u leedahay inay wax ka beddesho nolosha iyo ganacsiyada.',
    
    'skills.title': 'Xirfadaha Farsamo',
    'skills.subtitle': 'Heerka aan ka gaaray tiknoolajiyado kala duwan',
    
    'projects.title': 'Mashaariicda Cusub',
    'projects.subtitle': 'Qaar ka mid ah shaqooyinkaygii ugu dambeeyay',
    'projects.view': 'Booqo Mashruuca',
    'projects.code': 'Koodhka',
    
    'contact.title': 'ila soo xiriir',
    'contact.subtitle': 'Mashruuc ma haysaa mise waad iska kay salaamaysaa?',
    'contact.name': 'Magacaaga',
    'contact.email': 'Emailkaaga',
    'contact.message': 'Farriintaada',
    'contact.send': 'Dir Farriinta',
    'contact.sending': 'Waa la dirayaa...',
    'contact.success': 'Farriinta waa la diray!',
    'contact.error': 'Farriinta lama diri karin.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
