import { TopicData } from '../../types';

export const presentSimpleTopic: TopicData = {
  slug: 'present-simple',
  title: 'Настоящее простое время (Present Simple)',
  description: 'Регулярные действия, факты и привычки. Как сказать "Я работаю каждый день" и "Она любит кофе".',
  warmup: {
    context: 'В прошлой теме мы научились описывать состояния ("Я есть врач"). Теперь пришло время действий! Если мы говорим о регулярных действиях, привычках, расписаниях или фактах (то, что происходит вообще, а не прямо сейчас), мы используем Present Simple.',
    dialogue: [
      { en: '- Do you work every day?', ru: '- Ты работаешь каждый день?' },
      { en: '- Yes, I do. But my sister doesn\'t work, she studies.', ru: '- Да. Но моя сестра не работает, она учится.' }
    ]
  },
  theory: [
    {
      id: 'theory-ps-1',
      title: 'Зачем нужен Present Simple?',
      content: `Это время используется для описания:
1. **Регулярных действий и привычек:** I drink coffee every morning (Я пью кофе каждое утро).
2. **Фактов:** The sun rises in the east (Солнце встает на востоке).
3. **Расписаний:** The train leaves at 5 PM (Поезд отправляется в 5 вечера).
Здесь описывается то, что происходит "вообще", а не в данный момент речи.`
    },
    {
      id: 'theory-ps-2',
      title: 'Утвердительная форма (+)',
      content: `Для **I, you, we, they** глагол остается в начальной форме (без частицы to):
- I **work** (Я работаю)
- They **play** (Они играют)

Для **he, she, it** (3-е лицо, единственное число) к глаголу обязательно добавляется окончание **-s** или **-es**:
- He **works** (Он работает)
- She **plays** (Она играет)`
    },
    {
      id: 'theory-ps-3',
      title: 'Правила добавления -s / -es',
      content: `Для he/she/it окончание зависит от того, на какую букву заканчивается глагол:
1. Обычные глаголы: просто добавляем **-s** (work → work**s**, read → read**s**).
2. Глаголы на **-o, -s, -sh, -ch, -x, -z**: добавляем **-es** (go → go**es**, watch → watch**es**).
3. Глаголы на **согласную + y**: y меняется на i и добавляется **-es** (stud**y** → stud**ies**, tr**y** → tr**ies**).
4. Глаголы на **гласную + y**: просто добавляем **-s** (pl**ay** → play**s**).

**Важные исключения:** 
- have (иметь) → **has** 
- do (делать) → **does**`
    },
    {
      id: 'theory-ps-4',
      title: 'Отрицательная форма (-)',
      content: `Для образования отрицания нужны вспомогательные глаголы **do not (don't)** или **does not (doesn't)**:
- I / You / We / They + **don't** + глагол (I don't work)
- He / She / It + **doesn't** + глагол (He doesn't work)

**Важно:** В отрицании для he/she/it основной глагол возвращается в начальную форму (без -s)! 
Вспомогательный глагол **does(n't)** уже "забрал" на себя окончание.
✅ *He doesn't play* (Правильно)
❌ *He doesn't plays* (Неправильно)`
    },
    {
      id: 'theory-ps-5',
      title: 'Вопросительная форма (?)',
      content: `В вопросах вспомогательный глагол **Do** или **Does** выносится в самое начало (перед подлежащим):
- **Do** you like tea? (Тебе нравится чай?)
- **Does** she live here? (Она здесь живет?)

Окончания -s у основного глагола тоже НЕТ, так как есть Does.
Краткие ответы строятся так:
- Yes, I **do**. / No, I **don't**.
- Yes, he **does**. / No, he **doesn't**.`
    },
    {
      id: 'theory-ps-6',
      title: 'Маркеры времени (Time markers)',
      content: `Слова-маркеры помогают узнать Present Simple. Они обычно ставятся **перед** основным глаголом (но после to be):
- **always** (всегда): I *always* wake up early.
- **usually** (обычно): He *usually* works at home.
- **often** (часто): They *often* read books.
- **sometimes** (иногда): We *sometimes* watch movies.
- **never** (никогда): She *never* drinks coffee.

Фразы из нескольких слов ставятся в конце предложения:
- **every day / week / year** (каждый день/неделю/год): I play tennis *every week*.
- **on Mondays** (по понедельникам).`
    },
    {
      id: 'theory-ps-7',
      title: '⚠️ Частые ошибки новичков',
      content: `1. **Забывают -s в 3-м лице:** ❌ He go. ✅ He **goes**.
2. **Добавляют -s ПОСЛЕ doesn't/does:** ❌ Does she likes? ✅ Does she **like**?
3. **Путают с To Be:** Не ставьте 'am/is/are' вместе с обычным глаголом, если описываете факт! 
❌ I am work. ✅ I **work**.
❌ He is live here. ✅ He **lives** here. (Исключение - Present Continuous, но о нем позже).`
    },
    {
      id: 'theory-ps-8',
      title: 'Примеры (Examples)',
      content: `1. I live in London. (Я живу в Лондоне. - Утверждение, факт)
2. She doesn't eat meat. (Она не ест мясо. - Отрицание, привычка)
3. Do they speak English? (Они говорят по-английски? - Вопрос)
4. He always watches TV in the evening. (Он всегда смотрит телевизор по вечерам. - Утверждение, маркер, окончание -es)
5. We don't usually wake up late. (Мы обычно не просыпаемся поздно. - Отрицание, маркер)
6. Does the train leave at 8? (Поезд отправляется в 8? - Вопрос, расписание)
7. My cat sleeps all day. (Мой кот спит весь день. - Утверждение, 3-е лицо ед.ч.)
8. I don't know the answer. (Я не знаю ответ. - Отрицание, состояние)`
    }
  ],
  vocabulary: [
    { id: 'v-ps1', english: 'Wake up', russian: 'Просыпаться', transcription: '/weɪk ʌp/', example: 'I wake up at 7 am.' },
    { id: 'v-ps2', english: 'Work', russian: 'Работать', transcription: '/wɜːk/', example: 'He works in an office.' },
    { id: 'v-ps3', english: 'Study', russian: 'Учиться (изучать)', transcription: '/ˈstʌdi/', example: 'She studies English.' },
    { id: 'v-ps4', english: 'Play', russian: 'Играть', transcription: '/pleɪ/', example: 'They play football.' },
    { id: 'v-ps5', english: 'Watch', russian: 'Смотреть', transcription: '/wɒtʃ/', example: 'He watches movies.' },
    { id: 'v-ps6', english: 'Read', russian: 'Читать', transcription: '/riːd/', example: 'I read books every day.' },
    { id: 'v-ps7', english: 'Go', russian: 'Идти, ехать', transcription: '/ɡəʊ/', example: 'She goes to school.' },
    { id: 'v-ps8', english: 'Live', russian: 'Жить', transcription: '/lɪv/', example: 'We live in Paris.' },
    { id: 'v-ps9', english: 'Like', russian: 'Нравиться, любить', transcription: '/laɪk/', example: 'I like apples.' },
    { id: 'v-ps10', english: 'Eat', russian: 'Есть (кушать)', transcription: '/iːt/', example: 'He doesn\'t eat meat.' },
    { id: 'v-ps11', english: 'Drink', russian: 'Пить', transcription: '/drɪŋk/', example: 'Do you drink tea?' },
    { id: 'v-ps12', english: 'Sleep', russian: 'Спать', transcription: '/sliːp/', example: 'Cats sleep a lot.' },
    { id: 'v-ps13', english: 'Usually', russian: 'Обычно', transcription: '/ˈjuːʒuəli/', example: 'I usually wake up early.' },
    { id: 'v-ps14', english: 'Often', russian: 'Часто', transcription: '/ˈɒf(t)ən/', example: 'They often go to the park.' }
  ],
  exercises: [
    // GUIDED
    {
      id: 'ex-ps-g1',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'affirmative',
      instruction: 'Выберите правильную форму глагола (добавлять -s или нет).',
      textBefore: 'He usually',
      textAfter: 'football on Sundays.',
      correctAnswer: 'plays',
      options: ['play', 'plays', 'playing']
    },
    {
      id: 'ex-ps-g2',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'affirmative',
      instruction: 'Выберите правильную форму глагола (правило -es или -ies).',
      textBefore: 'She',
      textAfter: 'English every day.',
      correctAnswer: 'studies',
      options: ['studys', 'study', 'studies']
    },
    {
      id: 'ex-ps-g3',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'negative',
      instruction: 'Выберите верное отрицание. Помните: после doesn\'t глагол теряет -s.',
      question: 'Он не читает книги.',
      options: ['He don\'t reads books.', 'He doesn\'t reads books.', 'He doesn\'t read books.'],
      correctAnswer: 'He doesn\'t read books.'
    },
    {
      id: 'ex-ps-g4',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'question',
      instruction: 'Выберите правильный вспомогательный глагол для вопроса.',
      textBefore: '',
      textAfter: 'you like coffee?',
      correctAnswer: 'Do',
      options: ['Do', 'Does', 'Are']
    },
    {
      id: 'ex-ps-g5',
      type: 'matching',
      category: 'guided',
      subtopicTag: 'vocabulary',
      instruction: 'Соедините глаголы с переводом.',
      pairs: [
        { left: 'Wake up', right: 'Просыпаться' },
        { left: 'Go', right: 'Идти' },
        { left: 'Eat', right: 'Есть' },
        { left: 'Watch', right: 'Смотреть' }
      ]
    },

    // FREE
    {
      id: 'ex-ps-f1',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'affirmative',
      instruction: 'Соберите предложение. Обратите внимание на место маркера "always".',
      words: ['He', 'coffee.', 'always', 'drinks'],
      correctSentence: 'He always drinks coffee.'
    },
    {
      id: 'ex-ps-f2',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'question',
      instruction: 'Соберите вопросительное предложение.',
      words: ['they', 'live', 'here?', 'Do'],
      correctSentence: 'Do they live here?'
    },
    {
      id: 'ex-ps-f3',
      type: 'translate',
      category: 'free',
      subtopicTag: 'negative',
      instruction: 'Переведите на английский (используйте don\'t).',
      russian: 'Я не люблю чай.',
      correctEnglish: 'I don\'t like tea.'
    },
    {
      id: 'ex-ps-f4',
      type: 'translate',
      category: 'free',
      subtopicTag: 'affirmative',
      instruction: 'Переведите на английский. Вспомните правило для 3 лица ед.ч.',
      russian: 'Моя сестра много работает.',
      correctEnglish: 'My sister works a lot.'
    },

    // TEST
    {
      id: 'test-ps-1',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'affirmative',
      instruction: 'Choose the correct form.',
      question: 'My brother ___ to school.',
      options: ['go', 'goes', 'gos'],
      correctAnswer: 'goes'
    },
    {
      id: 'test-ps-2',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'negative',
      instruction: 'Choose the correct option.',
      question: 'She ___ TV often.',
      options: ['don\'t watch', 'doesn\'t watches', 'doesn\'t watch'],
      correctAnswer: 'doesn\'t watch'
    },
    {
      id: 'test-ps-3',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'question',
      instruction: 'Choose the correct option.',
      question: '___ your friends play football?',
      options: ['Do', 'Does', 'Are'],
      correctAnswer: 'Do' // "friends" is plural (they), so "Do"
    },
    {
      id: 'test-ps-4',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'markers',
      instruction: 'Choose the correct word order.',
      question: 'I ___ late.',
      options: ['usually wake up', 'wake up usually', 'am usually wake up'],
      correctAnswer: 'usually wake up'
    },
    {
      id: 'test-ps-5',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'affirmative',
      instruction: 'Choose the correct verb form for "have".',
      question: 'He ___ a big car.',
      options: ['haves', 'have', 'has'],
      correctAnswer: 'has'
    },
    {
      id: 'test-ps-6',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'vocabulary',
      instruction: 'Translate: "Учиться"',
      question: 'Учиться',
      options: ['Work', 'Study', 'Read'],
      correctAnswer: 'Study'
    },
    {
      id: 'test-ps-7',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'affirmative',
      instruction: 'Which sentence is CORRECT?',
      question: 'Find the correct sentence without mistakes.',
      options: ['I am live in London.', 'I lives in London.', 'I live in London.'],
      correctAnswer: 'I live in London.'
    }
  ]
};
