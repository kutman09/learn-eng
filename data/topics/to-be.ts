import { TopicData } from '../../types';

export const toBeTopic: TopicData = {
  slug: 'to-be',
  title: 'Глагол "To Be" (быть)',
  description: 'Основа английского языка. Как сказать "Я врач", "Он дома" и "Мы счастливы".',
  warmup: {
    context: 'В русском языке мы часто опускаем глагол "быть". Мы говорим "Я дома" или "Она врач". Но в английском языке предложение не может существовать без глагола! Поэтому они говорят "Я есть дома" (I am at home) или "Она есть врач" (She is a doctor).',
    dialogue: [
      { en: '- Hello! I am John. Are you a student?', ru: '- Привет! Я (есть) Джон. Ты (есть) студент?' },
      { en: '- Hi! No, I am not. I am a teacher.', ru: '- Привет! Нет, я не (есть). Я (есть) учитель.' }
    ]
  },
  theory: [
    {
      id: 'theory-1',
      title: 'Что такое To Be?',
      content: 'Глагол **to be** переводится как "быть", "находиться" или "являться". Главное правило английского языка: **в каждом предложении должен быть глагол**. Если действия (прыгать, бегать, работать) нет, значит нужен глагол to be!'
    },
    {
      id: 'theory-2',
      title: 'Утвердительная форма (Формы am / is / are)',
      content: `У глагола to be есть три маски (формы) в настоящем времени:
- **am** (используется только с **I** - я): I am happy (Я счастлив).
- **is** (используется с **he** - он, **she** - она, **it** - оно/это): He is a doctor (Он врач).
- **are** (используется с **we** - мы, **you** - ты/вы, **they** - они): We are ready (Мы готовы).`
    },
    {
      id: 'theory-3',
      title: 'Сокращения',
      content: `В разговорной речи англичане любят всё сокращать:
- I am = **I'm**
- He is = **He's**
- She is = **She's**
- It is = **It's**
- We are = **We're**
- You are = **You're**
- They are = **They're**`
    },
    {
      id: 'theory-4',
      title: 'Отрицательная форма',
      content: `Чтобы сказать "нет", просто добавьте **not** после глагола:
- I am **not** (сокращенно: I'm not) - Я не...
- He is **not** (сокращенно: He isn't) - Он не...
- They are **not** (сокращенно: They aren't) - Они не...`
    },
    {
      id: 'theory-5',
      title: 'Вопросительная форма',
      content: 'Чтобы задать вопрос, просто вынесите глагол to be в начало предложения:\n- **Am** I right? (Я прав?)\n- **Is** she at home? (Она дома?)\n- **Are** you okay? (Ты в порядке?)'
    }
  ],
  vocabulary: [
    { id: 'v1', english: 'Doctor', russian: 'Врач', transcription: '/ˈdɒktə/', example: 'He is a doctor.' },
    { id: 'v2', english: 'Student', russian: 'Студент', transcription: '/ˈstjuːdnt/', example: 'I am a student.' },
    { id: 'v3', english: 'Teacher', russian: 'Учитель', transcription: '/ˈtiːtʃə/', example: 'She is a teacher.' },
    { id: 'v4', english: 'Happy', russian: 'Счастливый', transcription: '/ˈhæpi/', example: 'We are happy.' },
    { id: 'v5', english: 'Ready', russian: 'Готовый', transcription: '/ˈrɛdi/', example: 'Are you ready?' },
    { id: 'v6', english: 'At home', russian: 'Дома', transcription: '/ət həʊm/', example: 'They are at home.' },
    { id: 'v7', english: 'Tired', russian: 'Уставший', transcription: '/ˈtaɪəd/', example: 'I am not tired.' },
    { id: 'v8', english: 'Busy', russian: 'Занятой', transcription: '/ˈbɪzi/', example: 'She is busy.' },
    { id: 'v9', english: 'Here', russian: 'Здесь', transcription: '/hɪə/', example: 'Is he here?' },
    { id: 'v10', english: 'Late', russian: 'Опоздавший', transcription: '/leɪt/', example: 'You are late.' }
  ],
  exercises: [
    // --- GUIDED PRACTICE ---
    {
      id: 'ex-g1',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'affirmative',
      instruction: 'Вставьте правильную форму (am, is, are). / Insert the correct form.',
      textBefore: 'I',
      textAfter: 'a student.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are']
    },
    {
      id: 'ex-g2',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'affirmative',
      instruction: 'Вставьте правильную форму (am, is, are). / Insert the correct form.',
      textBefore: 'She',
      textAfter: 'a doctor.',
      correctAnswer: 'is',
      options: ['am', 'is', 'are']
    },
    {
      id: 'ex-g3',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'negative',
      instruction: 'Выберите правильный вариант. / Choose the correct option.',
      question: 'Они не готовы.',
      options: ['They isn\'t ready.', 'They aren\'t ready.', 'They am not ready.'],
      correctAnswer: 'They aren\'t ready.'
    },
    {
      id: 'ex-g4',
      type: 'matching',
      category: 'guided',
      subtopicTag: 'vocabulary',
      instruction: 'Соедините слова с их переводом. / Match the words with their translation.',
      pairs: [
        { left: 'Tired', right: 'Уставший' },
        { left: 'Busy', right: 'Занятой' },
        { left: 'Ready', right: 'Готовый' }
      ]
    },
    
    // --- FREE PRACTICE ---
    {
      id: 'ex-f1',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'question',
      instruction: 'Соберите вопрос из слов. / Build a question from the words.',
      words: ['at', 'Are', 'you', 'home?'],
      correctSentence: 'Are you at home?'
    },
    {
      id: 'ex-f2',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'negative',
      instruction: 'Соберите отрицательное предложение. / Build a negative sentence.',
      words: ['not', 'is', 'late.', 'He'],
      correctSentence: 'He is not late.'
    },
    {
      id: 'ex-f3',
      type: 'translate',
      category: 'free',
      subtopicTag: 'affirmative',
      instruction: 'Переведите на английский. / Translate into English.',
      russian: 'Мы счастливы.',
      correctEnglish: 'We are happy.'
    },

    // --- FINAL TEST ---
    {
      id: 'test-1',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'affirmative',
      instruction: 'Choose the correct option.',
      question: '___ you ready?',
      options: ['Am', 'Is', 'Are'],
      correctAnswer: 'Are'
    },
    {
      id: 'test-2',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'negative',
      instruction: 'Choose the correct option.',
      question: 'I ___ a doctor, I am a teacher.',
      options: ['am not', 'isn\'t', 'aren\'t'],
      correctAnswer: 'am not'
    },
    {
      id: 'test-3',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'affirmative',
      instruction: 'Choose the correct option.',
      question: 'It ___ very late.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is'
    },
    {
      id: 'test-4',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'question',
      instruction: 'Choose the correct option.',
      question: '___ she busy?',
      options: ['Am', 'Is', 'Are'],
      correctAnswer: 'Is'
    },
    {
      id: 'test-5',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'vocabulary',
      instruction: 'What is the correct translation for "уставший"?',
      question: 'Уставший',
      options: ['Late', 'Tired', 'Happy'],
      correctAnswer: 'Tired'
    }
  ]
};
