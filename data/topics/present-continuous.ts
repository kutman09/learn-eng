import { TopicData } from '../../types';

export const presentContinuousTopic: TopicData = {
  slug: 'present-continuous',
  title: 'Настоящее длительное время (Present Continuous)',
  description: 'Действия прямо сейчас. Сравнение с Present Simple и State Verbs.',
  warmup: {
    context: 'Представьте: вы звоните другу. Если вы используете Present Simple, вы спрашиваете "Что ты делаешь каждый день?". Но нам нужно спросить: "Что ты делаешь ПРЯМО СЕЙЧАС?". (Если не помните Present Simple — советуем сначала повторить его!).',
    dialogue: [
      { en: '- Look! It\'s raining.', ru: '- Смотри! Идёт дождь (прямо сейчас).' },
      { en: '- Shh, she is talking on the phone.', ru: '- Тсс, она говорит по телефону (прямо сейчас).' }
    ]
  },
  theory: [
    {
      id: 'th-pc-1',
      title: 'Зачем нужен Present Continuous?',
      content: `Используется для действий, которые происходят **прямо сейчас, в момент речи** (в отличие от Present Simple, который описывает регулярные действия и факты).

Также используется для:
1. Временных ситуаций "в этот период жизни": *This month I'm working on a new project.* (В этом месяце я работаю над новым проектом).
2. Запланированных действий в ближайшем будущем: *We are meeting tomorrow.* (Мы встречаемся завтра).

💡 *Аналогия:* Present Continuous — это фотография, то, что происходит в кадре прямо сейчас. Present Simple — это паспортные данные, факты и расписание.`
    },
    {
      id: 'th-pc-2',
      title: 'Образование (Form): to be + V-ing',
      content: `Формула: **подлежащее + am / is / are + глагол-ing**.

| Местоимение | Глагол to be | V-ing | Пример |
|---|---|---|---|
| **I** | am (I'm) | working | I am working. |
| **He, She, It** | is (He's) | working | He is working. |
| **We, You, They**| are (We're) | working | They are working. |`
    },
    {
      id: 'th-pc-3',
      title: 'Правила написания окончания -ing',
      content: `Добавляя **-ing**, нужно соблюдать правила правописания:

1. **Обычные глаголы**: просто +ing (work → work**ing**, read → read**ing**).
2. **Глаголы на немую -e**: буква -e убирается (mak**e** → mak**ing**, writ**e** → writ**ing**).
   *Исключения с двумя гласными -ee (не теряют e): s**ee** → see**ing**, b**e** → be**ing**.*
3. **Глаголы с 1 короткой гласной + 1 согласная**: согласная удваивается (ru**n** → ru**nn**ing, si**t** → si**tt**ing, swi**m** → swi**mm**ing).
4. **Глаголы на -ie**: меняются на **-y + ing** (l**ie** → l**y**ing, d**ie** → d**y**ing).`
    },
    {
      id: 'th-pc-4',
      title: 'Отрицание (-) и Вопрос (?)',
      content: `**Отрицательная форма:** 
Добавляем **not** после am/is/are:
- I'm **not** watching TV. (Я не смотрю телевизор).
- She **isn't** working today. (Она не работает сегодня).
- They **aren't** playing. (Они не играют).

**Вопросительная форма:**
Выносим **Am/Is/Are** в самое начало:
- **Are** you reading? - Yes, I am. / No, I'm not.
- **Is** she sleeping? - Yes, she is. / No, she isn't.

**Специальные вопросы:**
Ставим вопросительное слово перед to be:
- *What* **are** you doing? (Что ты делаешь?)
- *Why* **is** he crying? (Почему он плачет?)`
    },
    {
      id: 'th-pc-5',
      title: 'Маркеры времени (Time Markers)',
      content: `Слова, которые сигнализируют о "сейчас":
- **now** (сейчас)
- **right now** (прямо сейчас)
- **at the moment** (в данный момент)
- **Look!** (Смотри!)
- **Listen!** (Послушай!)

*Look! The dog is running.* (Смотри! Собака бежит).`
    },
    {
      id: 'th-pc-6',
      title: 'Сравнение: Present Simple vs Present Continuous',
      content: `Главная сложность — понять, когда использовать Simple, а когда Continuous.

| Present Simple (обычно, факт, привычка) | Present Continuous (сейчас, в моменте) |
|---|---|
| I **work** every day. (Я работаю каждый день.) | I **am working** right now. (Я работаю прямо сейчас.) |
| She **plays** tennis on Sundays. (Она играет по воскресеньям.) | She **is playing** tennis now. (Она играет сейчас.) |
| Маркеры: *always, usually, often, every day* | Маркеры: *now, at the moment, look!* |

⚠️ **Частые ошибки:**
❌ *I work now.* (Нельзя использовать Simple с "now"). ✅ *I am working now.*
❌ *I am usually working.* (Нельзя Continuous с "usually"). ✅ *I usually work.*`
    },
    {
      id: 'th-pc-7',
      title: 'Глаголы состояния (State Verbs)',
      content: `Есть особые глаголы — глаголы состояния. Они означают то, что мы "чувствуем, думаем, имеем", а не то, что делаем руками.
**Они НЕ используются в Continuous!** Даже если это происходит "прямо сейчас", мы используем **Present Simple**.

К ним относятся:
- **know** (знать), **understand** (понимать), **believe** (верить)
- **like** (нравиться), **love** (любить), **want** (хотеть), **need** (нуждаться)

❌ *I am knowing the answer.*
✅ **I know the answer.** (Я знаю ответ).
❌ *I am wanting an apple.*
✅ **I want an apple.** (Я хочу яблоко).`
    },
    {
      id: 'th-pc-8',
      title: '⚠️ Дополнительные частые ошибки',
      content: `1. Забывают to be перед V-ing:
   ❌ *She playing football.* → ✅ *She **is** playing football.*
2. Добавляют -s к V-ing:
   ❌ *He is workings.* → ✅ *He is working.*
3. Ошибка написания -ing:
   ❌ *writeing* → ✅ *writing*
   ❌ *runing* → ✅ *running*`
    }
  ],
  vocabulary: [
    { id: 'vpc-1', english: 'work', russian: 'работать', transcription: '/wɜːk/', example: 'I am working.', tags: ['+ing'] },
    { id: 'vpc-2', english: 'play', russian: 'играть', transcription: '/pleɪ/', example: 'He is playing.', tags: ['+ing'] },
    { id: 'vpc-3', english: 'read', russian: 'читать', transcription: '/riːd/', example: 'We are reading.', tags: ['+ing'] },
    { id: 'vpc-4', english: 'write', russian: 'писать', transcription: '/raɪt/', example: 'She is writing.', tags: ['-e + ing'] },
    { id: 'vpc-5', english: 'run', russian: 'бегать', transcription: '/rʌn/', example: 'They are running.', tags: ['x2 consonant'] },
    { id: 'vpc-6', english: 'swim', russian: 'плавать', transcription: '/swɪm/', example: 'I am swimming.', tags: ['x2 consonant'] },
    { id: 'vpc-7', english: 'sit', russian: 'сидеть', transcription: '/sɪt/', example: 'He is sitting.', tags: ['x2 consonant'] },
    { id: 'vpc-8', english: 'make', russian: 'делать, создавать', transcription: '/meɪk/', example: 'She is making tea.', tags: ['-e + ing'] },
    { id: 'vpc-9', english: 'come', russian: 'приходить', transcription: '/kʌm/', example: 'They are coming.', tags: ['-e + ing'] },
    { id: 'vpc-10', english: 'watch', russian: 'смотреть', transcription: '/wɒtʃ/', example: 'I am watching TV.', tags: ['+ing'] },
    { id: 'vpc-11', english: 'listen', russian: 'слушать', transcription: '/ˈlɪsn/', example: 'Listen! He is playing the piano.', tags: ['+ing'] },
    { id: 'vpc-12', english: 'sleep', russian: 'спать', transcription: '/sliːp/', example: 'The baby is sleeping.', tags: ['+ing'] },
    { id: 'vpc-13', english: 'know', russian: 'знать', transcription: '/nəʊ/', example: 'I know it. (NOT I am knowing)', tags: ['State verb'] },
    { id: 'vpc-14', english: 'want', russian: 'хотеть', transcription: '/wɒnt/', example: 'I want this. (NOT I am wanting)', tags: ['State verb'] }
  ],
  exercises: [
    // --- GUIDED PRACTICE ---
    {
      id: 'pc-g1',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'form',
      instruction: 'Выберите правильную форму to be.',
      question: 'She ___ reading a book.',
      options: ['am', 'is', 'are'],
      correctAnswer: 'is'
    },
    {
      id: 'pc-g2',
      type: 'matching',
      category: 'guided',
      subtopicTag: 'ing-form',
      instruction: 'Соедините глагол с правильной -ing формой.',
      pairs: [
        { left: 'make', right: 'making' },
        { left: 'run', right: 'running' },
        { left: 'play', right: 'playing' },
        { left: 'die', right: 'dying' }
      ]
    },
    {
      id: 'pc-g3',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'ing-form',
      instruction: 'Вставьте правильную форму -ing (удвоение или убирание -e).',
      textBefore: 'He is',
      textAfter: '(sit) on the chair.',
      correctAnswer: 'sitting',
      options: ['siting', 'sitting', 'siteing']
    },
    {
      id: 'pc-g4',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'ing-form',
      instruction: 'Вставьте правильную форму -ing.',
      textBefore: 'They are',
      textAfter: '(write) an email.',
      correctAnswer: 'writing',
      options: ['writeing', 'writing', 'writting']
    },
    {
      id: 'pc-g5',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Continuous (сейчас) или Simple (обычно)? Обратите внимание на маркер.',
      question: 'I ___ coffee right now.',
      options: ['drink', 'am drinking', 'am drink'],
      correctAnswer: 'am drinking'
    },
    {
      id: 'pc-g6',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Continuous (сейчас) или Simple (обычно)?',
      question: 'She usually ___ tennis on Sundays.',
      options: ['plays', 'is playing', 'play'],
      correctAnswer: 'plays'
    },

    // --- FREE PRACTICE ---
    {
      id: 'pc-f1',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'form',
      instruction: 'Соберите отрицательное предложение.',
      words: ['she', 'is', 'not', 'working', 'today.'],
      correctSentence: 'she is not working today.' // allow lowercase matching
    },
    {
      id: 'pc-f2',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'form',
      instruction: 'Соберите вопросительное предложение.',
      words: ['doing?', 'are', 'What', 'you'],
      correctSentence: 'What are you doing?'
    },
    {
      id: 'pc-f3',
      type: 'translate',
      category: 'free',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Переведите. Подумайте, это происходит обычно или сейчас?',
      russian: 'Я работаю каждый день.',
      correctEnglish: 'I work every day.'
    },
    {
      id: 'pc-f4',
      type: 'translate',
      category: 'free',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Переведите. Подумайте, это происходит обычно или сейчас?',
      russian: 'Я работаю прямо сейчас.',
      correctEnglish: 'I am working right now.'
    },
    {
      id: 'pc-f5',
      type: 'error-correction',
      category: 'free',
      subtopicTag: 'state-verbs',
      instruction: 'Исправьте ошибку. Помните про State Verbs (глаголы состояния)!',
      wrongSentence: 'I am knowing the answer.',
      correctSentence: 'I know the answer.',
      explanation: 'Know - глагол состояния, он не используется в Continuous.'
    },
    {
      id: 'pc-f6',
      type: 'error-correction',
      category: 'free',
      subtopicTag: 'form',
      instruction: 'Исправьте ошибку (пропущен to be).',
      wrongSentence: 'He playing now.',
      correctSentence: 'He is playing now.',
      explanation: 'Перед глаголом-ing обязательно нужен am, is или are.'
    },
    {
      id: 'pc-f7',
      type: 'multiple-choice',
      category: 'free',
      subtopicTag: 'vocabulary',
      instruction: 'Мини-диалог.',
      question: 'A: What are you doing? B: ...',
      options: ['I am watch TV.', 'I watch TV.', 'I am watching TV.'],
      correctAnswer: 'I am watching TV.'
    },

    // --- TEST ---
    {
      id: 'pct-1',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'form',
      instruction: 'Choose the correct option.',
      question: 'They ___ sleeping.',
      options: ['is', 'are', 'am'],
      correctAnswer: 'are'
    },
    {
      id: 'pct-2',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'ing-form',
      instruction: 'Choose the correct spelling.',
      question: 'He is ___ in the pool.',
      options: ['swiming', 'swimming', 'swimeing'],
      correctAnswer: 'swimming'
    },
    {
      id: 'pct-3',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'ing-form',
      instruction: 'Make the correct -ing form.',
      textBefore: 'She is',
      textAfter: '(make) a cake.',
      correctAnswer: 'making',
      options: ['makeing', 'making', 'makking']
    },
    {
      id: 'pct-4',
      type: 'error-correction',
      category: 'test',
      subtopicTag: 'state-verbs',
      instruction: 'Correct the error.',
      wrongSentence: 'She is wanting an apple.',
      correctSentence: 'She wants an apple.',
      explanation: 'Want - глагол состояния, используется в Simple.'
    },
    {
      id: 'pct-5',
      type: 'sentence-builder',
      category: 'test',
      subtopicTag: 'form',
      instruction: 'Build the question.',
      words: ['is', 'crying?', 'he', 'Why'],
      correctSentence: 'Why is he crying?'
    },
    {
      id: 'pct-6',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Simple or Continuous?',
      question: 'Look! The dog ___.',
      options: ['runs', 'is running', 'running'],
      correctAnswer: 'is running'
    },
    {
      id: 'pct-7',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Simple or Continuous?',
      question: 'My brother ___ coffee every morning.',
      options: ['drinks', 'is drinking'],
      correctAnswer: 'drinks'
    },
    {
      id: 'pct-8',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'vocabulary',
      instruction: 'Translate: "Слушать"',
      question: 'Слушать',
      options: ['Watch', 'Listen', 'Make'],
      correctAnswer: 'Listen'
    },
    {
      id: 'pct-9',
      type: 'error-correction',
      category: 'test',
      subtopicTag: 'form',
      instruction: 'Correct the error.',
      wrongSentence: 'I am usually work.',
      correctSentence: 'I usually work.',
      explanation: 'Обычно (usually) - это Present Simple, без "am".'
    },
    {
      id: 'pct-10',
      type: 'error-correction',
      category: 'test',
      subtopicTag: 'form',
      instruction: 'Correct the error.',
      wrongSentence: 'We not playing.',
      correctSentence: 'We are not playing.',
      explanation: 'Обязательно нужен "are". We are not playing.'
    },
    {
      id: 'pct-11',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Choose the correct option.',
      question: 'I ___ an email right now.',
      options: ['write', 'am writing', 'am writeing'],
      correctAnswer: 'am writing'
    },
    {
      id: 'pct-12',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'state-verbs',
      instruction: 'Choose the right verb form.',
      textBefore: 'I',
      textAfter: 'this rule now.',
      correctAnswer: 'understand',
      options: ['understand', 'am understanding']
    },
    {
      id: 'pct-13',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'ing-form',
      instruction: 'Choose the right spelling.',
      textBefore: 'The cat is',
      textAfter: '(lie) on the sofa.',
      correctAnswer: 'lying',
      options: ['lieing', 'lying']
    },
    {
      id: 'pct-14',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'form',
      instruction: 'Which sentence is CORRECT?',
      question: 'Find the correct sentence.',
      options: ['She is play tennis.', 'She playing tennis.', 'She is playing tennis.'],
      correctAnswer: 'She is playing tennis.'
    },
    {
      id: 'pct-15',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'simple-vs-continuous',
      instruction: 'Which sentence is CORRECT?',
      question: 'Find the correct sentence.',
      options: ['I am read every day.', 'I read right now.', 'I am reading right now.'],
      correctAnswer: 'I am reading right now.'
    }
  ]
};
