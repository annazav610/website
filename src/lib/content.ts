export const COACH = {
  name: 'Anna',
  fullName: 'Anna Zavalashina',
  title: 'Soft Skills & English Coach',
  tagline: 'Unlock your potential — at work and in English.',
  bio: `I'm Anna, a certified coach with a passion for helping professionals grow with confidence. Whether you want to sharpen your leadership skills, communicate more effectively at work, or finally master English for your career — I'm here to guide you every step of the way.

With over 8 years of experience working with individuals and teams across Europe, my approach is practical, personal, and always focused on real results you can use immediately.`,
  shortBio: 'Certified coach helping professionals grow through Soft Skills training and English coaching.',
  location: 'Amsterdam, Netherlands',
  languages: ['Dutch', 'English'],
  email: 'annazav.efl@gmail.com',
  calendly: 'https://calendly.com/annazav-efl',
  linkedin: 'https://www.linkedin.com/in/anna-zavalishina/',
  certifications: ['ICF Certified Coach (ACC)', 'CELTA – Cambridge English', 'NLP Practitioner'],
  avatar: '/anya-avatar.jpg',
  heroImage: '/hero-bg.jpg',
};

export const SERVICES = [
  {
    id: 'soft-skills',
    icon: '🧠',
    title: 'Soft Skills Coaching',
    subtitle: 'Lead, communicate & perform with confidence',
    description:
      'Personalised one-on-one coaching focused on the skills that drive career success. We work on your specific challenges and build habits that stick.',
    topics: [
      'Leadership & Executive Presence',
      'Communication & Assertiveness',
      'Public Speaking & Presentations',
      'Time Management & Productivity',
      'Conflict Resolution',
      'Emotional Intelligence',
    ],
    color: 'navy',
    cta: 'Explore Soft Skills',
  },
  {
    id: 'english',
    icon: '🌍',
    title: 'English Coaching',
    subtitle: 'Speak, write & present in English — naturally',
    description:
      'Tailored English sessions for professionals and students. From business emails to IELTS preparation, we work at your pace and on your goals.',
    topics: [
      'Business English',
      'Conversation & Fluency',
      'IELTS / TOEFL Preparation',
      'Pronunciation & Accent',
      'Email & Report Writing',
      'Job Interview English',
    ],
    color: 'green',
    cta: 'Explore English Coaching',
  },
];

export const PACKAGES = [
  {
    id: 'trial',
    name: 'Trial Session',
    price: 0,
    priceLabel: 'Free',
    duration: '30 min',
    description: 'A free introductory call to get to know each other and align on your goals.',
    features: ['30-minute video call', 'Goal alignment', 'No commitment required'],
    highlight: false,
    cta: 'Book Free Call',
  },
  {
    id: 'single',
    name: 'Single Session',
    price: 85,
    priceLabel: '€85',
    duration: '60 min',
    description: 'One focused coaching or teaching session, ideal for specific topics.',
    features: ['60-minute session', 'Personalised agenda', 'Session summary & notes', 'Follow-up resources'],
    highlight: false,
    cta: 'Book Session',
  },
  {
    id: 'journey',
    name: 'Coaching Journey',
    price: 380,
    priceLabel: '€380',
    duration: '5 sessions',
    description: 'Our most popular option. A structured programme for lasting transformation.',
    features: [
      '5 × 60-minute sessions',
      'Custom development plan',
      'Between-session support',
      'Progress tracking',
      'Save €45 vs single sessions',
    ],
    highlight: true,
    cta: 'Start Your Journey',
  },
  {
    id: 'intensive',
    name: 'Intensive Programme',
    price: 680,
    priceLabel: '€680',
    duration: '10 sessions',
    description: 'Deep transformation over 10 sessions — perfect for ambitious goals.',
    features: [
      '10 × 60-minute sessions',
      'Full personalised programme',
      'Unlimited email support',
      'Monthly progress report',
      'Save €170 vs single sessions',
    ],
    highlight: false,
    cta: 'Go Intensive',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mark van den Berg',
    role: 'Senior Manager, ING',
    avatar: 'M',
    rating: 5,
    text: "Working with Anna completely changed how I show up in leadership meetings. After just 5 sessions I felt genuinely confident presenting to the board. Highly recommended.",
  },
  {
    id: 2,
    name: 'Ana Rodrigues',
    role: 'Marketing Specialist',
    avatar: 'A',
    rating: 5,
    text: "I went from a 6.5 to an 8.0 on my IELTS with Anna's help. Her lessons are focused, fun, and incredibly effective. She made me believe I could actually do it.",
  },
  {
    id: 3,
    name: 'Thomas Müller',
    role: 'Team Lead, ASML',
    avatar: 'T',
    rating: 5,
    text: "Anna helped me work through conflict resolution issues on my team. Her approach is empathetic yet practical. The results were visible within weeks.",
  },
];

export const FAQ = [
  {
    q: 'How do sessions work?',
    a: 'All sessions are held online via video call (Zoom or Google Meet). After booking, you receive a confirmation with the meeting link and a short intake form.',
  },
  {
    q: 'Can I combine Soft Skills and English coaching?',
    a: 'Absolutely — many clients work on both. We can build a custom programme that covers both areas, tailored to your professional context.',
  },
  {
    q: 'What if I want to cancel or reschedule?',
    a: 'You can reschedule or cancel up to 24 hours before the session at no cost. Cancellations within 24 hours are charged at 50%.',
  },
  {
    q: 'Do you offer corporate packages?',
    a: "Yes! For teams and organisations, get in touch via email for a tailored proposal. Group sessions and workshops are also available.",
  },
];
