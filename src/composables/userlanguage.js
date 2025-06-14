import { ref, readonly } from 'vue';

// Create a reactive language state that persists
const currentLanguage = ref(localStorage.getItem('language') || 'en');

// Translations for all site content
const translations = {
  en: {
    // Navigation
    photography: 'Photography',
    videoEditing: 'Video Editing',
    soundMusic: 'Sound/Music',
    contact: 'Contact',
    
    // Home page
    hello: 'Hello, I\'m',
    multimediaArtist: 'Multimedia Artist',
    tagline: 'I like to tinker around with computers.',
    aboutMe: 'About Me',
    viewPortfolio: 'View Portfolio',
    aboutMeTitle: 'About Me',
    aboutMeText1: 'I have a passion for everything that involves computer art.',
    aboutMeText2: 'My approach combines technical expertise with creative vision to deliver compelling visual content that engages audiences and communicates your message effectively.',
    videoEditingSkill: 'Video Editing',
    videoEditingDesc: 'Narrative editing, Storytelling, Vlogging',
    photographySkill: 'Photography',
    photographyDesc: 'Mainly Portraits',
    soundMusicSkill: 'Sound & Music',
    soundMusicDesc: 'Sound design, pure data, ableton live',
    
    // Contact page
    contactMe: 'Contact Me',
    contactIntro: 'I\'m always interested in new projects and collaborations. Feel free to reach out if you\'d like to work together or have any questions about my services.',
    getInTouch: 'Get In Touch',
    getInTouchText: 'Use the form to send me a message directly, or connect with me on social media.',
    location: 'Location',
    socialMedia: 'Social Media',
    sendMessage: 'Send Me a Message',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    thankYou: 'Thank you for your message! I\'ll get back to you soon.',

    // Photography page
    photographyIntro: 'Explore my photography portfolio showcasing a variety of styles and subjects.',
    allCategories: 'All',
    portraitCategory: 'Portrait',
    landscapeCategory: 'Landscape',
    eventCategory: 'Event',

    // Video editing page
    videoEditingIntro: 'A collection of my video editing and motion graphics work.',
    narrativeCategory: 'Narrative',
    commercialCategory: 'Commercial',
    motionCategory: 'Motion Graphics',

    // Sound & Music page
    soundMusicIntro: 'Listen to my sound design work and musical compositions.',
    compositionCategory: 'Composition',
    soundDesignCategory: 'Sound Design',
    mixingCategory: 'Mixing',
    browserNotSupported: 'Your browser does not support the audio element.',
  },
  pt: {
    // Navigation
    photography: 'Fotografia',
    videoEditing: 'Edição de Vídeo',
    soundMusic: 'Som/Música',
    contact: 'Contacto',
    
    // Home page
    hello: 'Olá, sou o',
    multimediaArtist: 'Artista Multimédia',
    tagline: 'Faço umas cenas com computadores.',
    aboutMe: 'Sobre Mim',
    viewPortfolio: 'Ver Portfólio',
    aboutMeTitle: 'Sobre Mim',
    aboutMeText1: 'Tenho paixão por tudo o que envolve arte e computadores.',
    aboutMeText2: 'A minha abordagem combina experiência técnica com visão criativa para entregar conteúdo visualmente cativante.',
    videoEditingSkill: 'Edição de Vídeo',
    videoEditingDesc: 'Edição de Narrative, Storytelling, Vlogging',
    photographySkill: 'Fotografia',
    photographyDesc: 'Maioritariamente fotografia de retrato',
    soundMusicSkill: 'Som & Música',
    soundMusicDesc: 'Design de som, pure data e ableton live',
    
    // Contact page
    contactMe: 'Contacto',
    contactIntro: 'Estou sempre interessado em novos projetos e colaborações. Sinta-se à vontade para entrar em contato se quiser trabalhar junto ou tiver alguma duvida sobre mim.',
    getInTouch: 'Entre em Contato',
    getInTouchText: 'Use o formulário para me enviar uma mensagem diretamente, ou conecte-se comigo nas redes sociais.',
    location: 'Localização',
    socialMedia: 'Redes Sociais',
    sendMessage: 'Envie uma Mensagem',
    name: 'Nome',
    email: 'Email',
    subject: 'Assunto',
    message: 'Mensagem',
    send: 'Enviar Mensagem',
    thankYou: 'Obrigado pela sua mensagem! Responderei em breve.',

    // Photography page
    photographyIntro: 'Portfolio de Fotografia que fui desenvolvendo ao longo dos anos.',
    allCategories: 'Todos',
    portraitCategory: 'Retrato',
    landscapeCategory: 'Paisagem',
    eventCategory: 'Eventos',

    // Video editing page
    videoEditingIntro: 'Uma panóplia ampla de projetos que fui trabalhando à medida dos anos',
    narrativeCategory: 'Narrativa',
    commercialCategory: 'Comercial',
    motionCategory: 'Motion Graphics',

    // Sound & Music page
    soundMusicIntro: 'Muitos dos projetos de som em que estive envolvido.',
    compositionCategory: 'Composição',
    soundDesignCategory: 'Design de Som',
    mixingCategory: 'Mixagem',
    browserNotSupported: 'Seu navegador não suporta o elemento de áudio.',
    }
};

// Function to change language
function setLanguage(lang) {
  currentLanguage.value = lang;
  localStorage.setItem('language', lang);
}

// Expose composable API
export function userLanguage() {
  return {
    currentLanguage: readonly(currentLanguage),
    translations,
    setLanguage,
    t: (key) => {
      return translations[currentLanguage.value][key] || key;
    }
  };
}