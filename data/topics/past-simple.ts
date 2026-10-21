import { TopicData } from '../../types';

export const pastSimpleTopic: TopicData = {
  slug: 'past-simple',
  title: 'Прошедшее простое время (Past Simple)',
  description: 'Как рассказывать о событиях в прошлом. Правильные и неправильные глаголы, формы was/were, отрицания и вопросы с did.',
  goals: [
    'понимать, когда используется Past Simple (завершённое действие в прошлом с указанием времени);',
    'уверенно использовать формы глагола to be в прошедшем времени: was и were;',
    'образовывать прошедшую форму правильных глаголов с окончанием -ed и знать правила орфографии;',
    'запомнить базовые неправильные глаголы (go → went, see → saw, buy → bought и др.);',
    'строить отрицания с didn\'t и вопросы с Did без лишних окончаний;',
    'использовать маркеры прошедшего времени (yesterday, ago, last week, in 2020).'
  ],
  warmup: {
    context: 'В прошлых темах мы говорили о том, что происходит вообще (Present Simple) или прямо сейчас (Present Continuous). Теперь пришло время оглянуться назад! Как рассказать другу, что вы делали вчера, куда ездили в отпуск или какой фильм посмотрели на прошлых выходных? Для этого в английском есть простое прошедшее время — Past Simple.',
    dialogue: [
      { en: '- Where were you yesterday? I called you twice!', ru: '- Где ты был вчера? Я звонил тебе дважды!' },
      { en: '- I was at home. I watched a movie and cooked dinner.', ru: '- Я был дома. Я посмотрел фильм и приготовил ужин.' },
      { en: '- Did you see Alex last weekend?', ru: '- А ты видел Алекса на прошлых выходных?' },
      { en: '- No, I didn\'t. He went to Italy two days ago.', ru: '- Нет. Он уехал в Италию два дня назад.' }
    ]
  },
  theory: [
    {
      id: 'th-ps-1',
      title: 'Зачем нужен Past Simple?',
      content: `Past Simple используется для действий, которые **начались и закончились в прошлом**.
Они уже никак не связаны с настоящим моментом — это завершённый факт истории.

Обычно в предложении есть точное указание на время в прошлом:
- *I visited London **last year**.* (Я посетил Лондон в прошлом году.)
- *We met **yesterday**.* (Мы встретились вчера.)
- *She bought a car **two days ago**.* (Она купила машину два дня назад.)

💡 *Аналогия:* Past Simple — это закрытая глава в книге или архивная фотография с датой в углу.`
    },
    {
      id: 'th-ps-2',
      title: 'Глагол To Be в прошедшем времени (Was / Were)',
      content: `Помните глагол to be (am / is / are)? В прошедшем времени у него всего **две формы**:

| Лицо | Форма To Be | Пример | Перевод |
|---|---|---|---|
| **I, He, She, It** | **was** | He **was** at home. | Он был дома. |
| **We, You, They** | **were** | They **were** tired. | Они были уставшими. |

**Отрицательная форма (-):**
Добавляем **not** к was / were (чаще используются сокращения):
- was not = **wasn't** (*I wasn't hungry.* — Я не был голоден.)
- were not = **weren't** (*We weren't ready.* — Мы не были готовы.)

**Вопросительная форма (?):**
Выносим **Was** или **Were** в самое начало:
- **Was** she at work yesterday? — *Yes, she was. / No, she wasn't.*
- **Were** you happy? — *Yes, I were... стоп, Yes, I was! / No, I wasn't.*

⚠️ **Золотое правило:** Если в предложении есть was или were, вспомогательный глагол **DID НЕ НУЖЕН**! Was и Were справляются сами.`
    },
    {
      id: 'th-ps-3',
      title: 'Правильные глаголы (Regular Verbs) и окончание -ed',
      content: `Для всех остальных действий (работать, смотреть, играть) глаголы делятся на две группы: **правильные** и **неправильные**.

У **правильных глаголов** всё просто: в утвердительном предложении мы просто добавляем к глаголу окончание **-ed**.
Форма одинакова для **ВСЕХ** лиц (I, you, he, she, it, we, they):
- I **worked** (Я работал)
- She **worked** (Она работала — никакого -s нет!)
- They **worked** (Они работали)

**Правила написания окончания -ed:**
1. Обычные глаголы: просто добавляем **-ed** (*watch → watched, clean → cleaned*).
2. Заканчиваются на немую **-e**: добавляем только **-d** (*like → liked, live → lived*).
3. Заканчиваются на **согласную + y**: y меняется на **i** + **ed** (*study → studied, cry → cried*).
   *Но если перед y гласная: play → played, stay → stayed.*
4. Короткие глаголы (1 слог, 1 гласная + 1 согласная): согласная удваивается (*stop → stopped, plan → planned*).`
    },
    {
      id: 'th-ps-4',
      title: 'Неправильные глаголы (Irregular Verbs)',
      content: `Около 200 самых частых глаголов в английском — бунтари! Они не подчиняются правилу -ed, а меняют форму полностью (это 2-я форма глагола — V2).
Их нужно выучить наизусть, как таблицу умножения.

**Топ-12 неправильных глаголов для начинающих:**
- go → **went** (идти, ехать): *I went to school.*
- see → **saw** (видеть): *I saw a movie.*
- have → **had** (иметь): *We had breakfast.*
- do → **did** (делать): *He did his homework.*
- buy → **bought** (покупать): *She bought a dress.*
- eat → **ate** (есть): *They ate pizza.*
- drink → **drank** (пить): *I drank tea.*
- meet → **met** (встречать): *We met yesterday.*
- take → **took** (брать): *He took my keys.*
- make → **made** (делать, создавать): *She made coffee.*
- write → **wrote** (писать): *I wrote a letter.*
- read → **read** (пишется одинаково, но читается как /red/!)`
    },
    {
      id: 'th-ps-5',
      title: 'Отрицательная форма (-): didn\'t',
      content: `Чтобы сказать "не делал", мы зовём супер-помощника — **didn't** (did not).
Он одинаков для всех местоимений (I, you, he, she, we, they)!

Формула: **Кто + didn't + глагол в НАЧАЛЬНОЙ форме (без -ed и не V2)**.

⚠️ **Закон жадного помощника didn't:**
Слово **did** уже забрало на себя всё прошедшее время! Поэтому основной глагол возвращается в свою первую, словарную форму.

✅ *I didn't watch TV.* (Правильно)
❌ *I didn't watched TV.* (Ошибка: двойное прошедшее!)

✅ *She didn't go to Paris.* (Правильно)
❌ *She didn't went to Paris.* (Ошибка: двойное прошедшее!)`
    },
    {
      id: 'th-ps-6',
      title: 'Вопросительная форма (?): Did',
      content: `Чтобы задать вопрос о действии в прошлом, ставим **Did** на первое место (перед подлежащим).

Формула: **Did + кто? + глагол в НАЧАЛЬНОЙ форме?**

- **Did** you sleep well? (Ты хорошо спал?)
  — *Yes, I did. / No, I didn't.*
- **Did** she buy milk? (Она купила молоко?)
  — *Yes, she did. / No, she didn't.*
- **Did** they play tennis? (Они играли в теннис?)
  — *Yes, they did. / No, they didn't.*

Как видите, в вопросе глагол тоже стоит в **1-й форме** (*Did you see*, а не *Did you saw*).

**Специальные вопросы (Where, What, When, Why):**
Вопросительное слово ставится ПЕРЕД Did:
- *Where* **did** you go? (Куда ты ходил?)
- *What* **did** you eat? (Что ты ел?)
- *When* **did** they arrive? (Когда они приехали?)`
    },
    {
      id: 'th-ps-7',
      title: 'Маркеры времени (Time Markers)',
      content: `Слова-подсказки, которые показывают, что нужно использовать Past Simple:

- **yesterday** (вчера)
- **the day before yesterday** (позавчера)
- **yesterday morning / afternoon / evening** (вчера утром / днем / вечером)
- **last night / week / month / year** (прошлой ночью / на прошлой неделе / в прошлом месяце / в прошлом году)
- **two days ago / a year ago** (два дня назад / год назад)
- **in 2015 / in May** (в 2015 году / в мае)
- **when I was a child** (когда я был ребенком)

Обычно эти слова ставятся в самом конце (или в самом начале) предложения.`
    },
    {
      id: 'th-ps-8',
      title: '⚠️ Топ-4 частых ошибки новичков',
      content: `1. **Двойное прошедшее в отрицаниях и вопросах:**
   ❌ *I didn't saw him.* → ✅ *I didn't **see** him.*
   ❌ *Did you went home?* → ✅ *Did you **go** home?*

2. **Смешивание Was/Were и Did:**
   ❌ *Did you was at home?* → ✅ * **Were** you at home?*
   ❌ *I wasn't play football.* → ✅ *I **didn't** play football.*
   *(Запомните: Was/were — это "был/были". Для действий нужно didn't).*

3. **Ошибки в правописании -ed:**
   ❌ *studyed* → ✅ *studied*
   ❌ *stoped* → ✅ *stopped*

4. **Попытка добавить -ed к неправильному глаголу:**
   ❌ *goed* → ✅ *went*
   ❌ *buyed* → ✅ *bought*`
    },
    {
      id: 'th-ps-9',
      title: 'Примеры с разбором (Examples)',
      content: `1. *I watched a great film yesterday.* (Правильный глагол, +ed, маркер yesterday).
2. *We went to London last summer.* (Неправильный глагол go → went, маркер last summer).
3. *She was very tired after work.* (Форма to be для she — was).
4. *They weren't at school on Friday.* (Отрицание to be для they — weren't).
5. *He didn't call me last night.* (Отрицание с didn't, глагол call в начальной форме).
6. *Did you buy the tickets?* (Вопрос с Did, глагол buy в начальной форме).
7. *Where did you find this dog?* (Специальный вопрос Where + did + find).
8. *I studied English two years ago.* (Правило -ied для study, маркер ago).`
    }
  ],
  vocabulary: [
    { id: 'v-past1', english: 'Yesterday', russian: 'Вчера', transcription: '/ˈjestədeɪ/', example: 'I saw him yesterday.', emoji: '📅' },
    { id: 'v-past2', english: 'Last night', russian: 'Вчера вечером / прошлой ночью', transcription: '/lɑːst naɪt/', example: 'We watched a movie last night.', emoji: '🌙' },
    { id: 'v-past3', english: 'Ago', russian: 'Назад, тому назад', transcription: '/əˈɡəʊ/', example: 'They arrived two days ago.', emoji: '⏳' },
    { id: 'v-past4', english: 'Watch / Watched', russian: 'Смотреть / смотрел', transcription: '/wɒtʃ/ - /wɒtʃt/', example: 'He watched TV.', emoji: '📺' },
    { id: 'v-past5', english: 'Study / Studied', russian: 'Учиться / учился', transcription: '/ˈstʌdi/ - /ˈstʌdid/', example: 'She studied for the exam.', emoji: '📚' },
    { id: 'v-past6', english: 'Visit / Visited', russian: 'Навещать / навестил', transcription: '/ˈvɪzɪt/ - /ˈvɪzɪtɪd/', example: 'We visited our grandparents.', emoji: '🏡' },
    { id: 'v-past7', english: 'Stop / Stopped', russian: 'Останавливать(ся) / остановился', transcription: '/stɒp/ - /stɒpt/', example: 'The car stopped.', emoji: '🛑' },
    { id: 'v-past8', english: 'Go / Went', russian: 'Идти, ехать / пошел, поехал', transcription: '/ɡəʊ/ - /went/', example: 'They went to the park.', emoji: '🚶' },
    { id: 'v-past9', english: 'See / Saw', russian: 'Видеть / увидел', transcription: '/siː/ - /sɔː/', example: 'I saw an eagle yesterday.', emoji: '👁️' },
    { id: 'v-past10', english: 'Buy / Bought', russian: 'Покупать / купил', transcription: '/baɪ/ - /bɔːt/', example: 'She bought a new phone.', emoji: '🛍️' },
    { id: 'v-past11', english: 'Have / Had', russian: 'Иметь / имел', transcription: '/hæv/ - /hæd/', example: 'We had a good time.', emoji: '🤝' },
    { id: 'v-past12', english: 'Eat / Ate', russian: 'Есть / поел', transcription: '/iːt/ - /eɪt/', example: 'He ate a sandwich.', emoji: '🥪' },
    { id: 'v-past13', english: 'Make / Made', russian: 'Делать / сделал', transcription: '/meɪk/ - /meɪd/', example: 'Mom made a delicious cake.', emoji: '🎂' },
    { id: 'v-past14', english: 'Meet / Met', russian: 'Встречать / встретил', transcription: '/miːt/ - /met/', example: 'I met my friends on Saturday.', emoji: '👥' },
    { id: 'v-past15', english: 'Leave / Left', russian: 'Уходить, уезжать / ушел, уехал', transcription: '/liːv/ - /left/', example: 'The train left at 6 PM.', emoji: '🚆' },
    { id: 'v-past16', english: 'Find / Found', russian: 'Находить / нашел', transcription: '/faɪnd/ - /faʊnd/', example: 'She found her keys.', emoji: '🔑' }
  ],
  exercises: [
    // ==========================================
    // GUIDED PRACTICE
    // ==========================================
    {
      id: 'ex-ps-g1',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'regular-verbs',
      instruction: 'Вставьте правильную форму глагола (правило окончания -ed для согласной + y).',
      textBefore: 'She',
      textAfter: 'English yesterday (study).',
      correctAnswer: 'studied',
      options: ['studyed', 'studied', 'studies']
    },
    {
      id: 'ex-ps-g2',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'regular-verbs',
      instruction: 'Вставьте правильную форму глагола (правило удвоения согласной).',
      textBefore: 'The bus',
      textAfter: 'at the station (stop).',
      correctAnswer: 'stopped',
      options: ['stoped', 'stopped', 'stopping']
    },
    {
      id: 'ex-ps-g3',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'was-were',
      instruction: 'Выберите правильную форму to be в прошедшем времени для "They".',
      question: 'They ___ at the party last night.',
      options: ['was', 'were', 'did'],
      correctAnswer: 'were'
    },
    {
      id: 'ex-ps-g4',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'negative',
      instruction: 'Помните: после didn\'t глагол возвращается в начальную форму!',
      question: 'He didn\'t ___ coffee this morning.',
      options: ['drink', 'drank', 'drinks'],
      correctAnswer: 'drink'
    },
    {
      id: 'ex-ps-g5',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'question',
      instruction: 'Вставьте вспомогательный глагол для вопроса в прошедшем времени.',
      textBefore: '',
      textAfter: 'you watch the match yesterday?',
      correctAnswer: 'Did',
      options: ['Did', 'Do', 'Were']
    },
    {
      id: 'ex-ps-g6',
      type: 'matching',
      category: 'guided',
      subtopicTag: 'irregular-verbs',
      instruction: 'Соедините начальную форму неправильного глагола со 2-й формой (Past Simple).',
      pairs: [
        { left: 'go', right: 'went' },
        { left: 'see', right: 'saw' },
        { left: 'buy', right: 'bought' },
        { left: 'have', right: 'had' }
      ]
    },
    {
      id: 'ex-ps-g7',
      type: 'sort',
      category: 'guided',
      subtopicTag: 'regular-verbs',
      instruction: 'Разделите глаголы на правильные (образуют Past Simple через -ed) и неправильные.',
      categories: ['Правильные (Regular)', 'Неправильные (Irregular)'],
      items: [
        { word: 'play', category: 'Правильные (Regular)' },
        { word: 'watch', category: 'Правильные (Regular)' },
        { word: 'visit', category: 'Правильные (Regular)' },
        { word: 'stop', category: 'Правильные (Regular)' },
        { word: 'go', category: 'Неправильные (Irregular)' },
        { word: 'see', category: 'Неправильные (Irregular)' },
        { word: 'buy', category: 'Неправильные (Irregular)' },
        { word: 'eat', category: 'Неправильные (Irregular)' }
      ]
    },

    // ==========================================
    // FREE PRACTICE
    // ==========================================
    {
      id: 'ex-ps-f1',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'irregular-verbs',
      instruction: 'Соберите утвердительное предложение с неправильным глаголом.',
      words: ['I', 'bought', 'a', 'new', 'car', 'yesterday.'],
      correctSentence: 'I bought a new car yesterday.'
    },
    {
      id: 'ex-ps-f2',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'question',
      instruction: 'Соберите вопросительное предложение в Past Simple.',
      words: ['Did', 'you', 'watch', 'the', 'match', 'last', 'night?'],
      correctSentence: 'Did you watch the match last night?'
    },
    {
      id: 'ex-ps-f3',
      type: 'translate',
      category: 'free',
      subtopicTag: 'negative',
      instruction: 'Переведите на английский язык. Используйте didn\'t.',
      russian: 'Я не ходил на работу вчера.',
      correctEnglish: 'I didn\'t go to work yesterday.'
    },
    {
      id: 'ex-ps-f4',
      type: 'translate',
      category: 'free',
      subtopicTag: 'was-were',
      instruction: 'Переведите на английский. Вспомните форму to be для "We".',
      russian: 'Мы были очень счастливы.',
      correctEnglish: 'We were very happy.'
    },
    {
      id: 'ex-ps-f5',
      type: 'error-correction',
      category: 'free',
      subtopicTag: 'negative',
      instruction: 'Найдите и исправьте ошибку в отрицании.',
      wrongSentence: 'She didn\'t saw me.',
      correctSentence: 'She didn\'t see me.',
      explanation: 'После вспомогательного глагола didn\'t основной глагол должен стоять в начальной форме (see).'
    },
    {
      id: 'ex-ps-f6',
      type: 'error-correction',
      category: 'free',
      subtopicTag: 'question',
      instruction: 'Найдите и исправьте ошибку в вопросе.',
      wrongSentence: 'Did you went to London?',
      correctSentence: 'Did you go to London?',
      explanation: 'В вопросительном предложении с Did основной глагол возвращается в 1-ю форму (go).'
    },
    {
      id: 'ex-ps-f7',
      type: 'error-correction',
      category: 'free',
      subtopicTag: 'was-were',
      instruction: 'Исправьте ошибку. Помните: с глаголом to be вспомогательный did не нужен!',
      wrongSentence: 'Did you was at home yesterday?',
      correctSentence: 'Were you at home yesterday?',
      explanation: 'С глаголом to be (was/were) глагол did не используется. Форма для you — Were.'
    },
    {
      id: 'ex-ps-f8',
      type: 'speaking',
      category: 'free',
      subtopicTag: 'vocabulary',
      instruction: 'Напишите короткий рассказ о том, как прошёл ваш вчерашний день (3–4 предложения).',
      prompts: [
        'Where were you yesterday? (Где вы были вчера?)',
        'What did you do? (Что вы делали? Какие фильмы смотрели / что готовили?)',
        'Who did you meet or call? (Кого вы встретили или кому звонили?)'
      ],
      expectedKeywords: ['was', 'were', 'yesterday', 'went', 'watched', 'visited', 'played'],
      sampleAnswer: 'Yesterday I was at home in the morning. Then I went to the park and met my friends. In the evening I watched a movie and cooked dinner.'
    },

    // ==========================================
    // FINAL TEST
    // ==========================================
    {
      id: 'test-ps-1',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'was-were',
      instruction: 'Choose the correct form of "to be".',
      question: 'My parents ___ in the garden yesterday.',
      options: ['was', 'were', 'did'],
      correctAnswer: 'were'
    },
    {
      id: 'test-ps-2',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'was-were',
      instruction: 'Choose the correct form of "to be".',
      question: 'She ___ not at work on Monday.',
      options: ['was', 'were', 'did'],
      correctAnswer: 'was'
    },
    {
      id: 'test-ps-3',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'regular-verbs',
      instruction: 'Put the regular verb into Past Simple.',
      textBefore: 'We',
      textAfter: 'the car at the traffic light (stop).',
      correctAnswer: 'stopped',
      options: ['stoped', 'stopped', 'stopping']
    },
    {
      id: 'test-ps-4',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'regular-verbs',
      instruction: 'Put the regular verb into Past Simple.',
      textBefore: 'He',
      textAfter: 'English for two hours yesterday (study).',
      correctAnswer: 'studied',
      options: ['studyed', 'studied', 'studying']
    },
    {
      id: 'test-ps-5',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'irregular-verbs',
      instruction: 'Choose the correct past form of the verb "see".',
      question: 'I ___ a very interesting movie last night.',
      options: ['see', 'saw', 'seed'],
      correctAnswer: 'saw'
    },
    {
      id: 'test-ps-6',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'irregular-verbs',
      instruction: 'Choose the correct past form of the verb "go".',
      question: 'They ___ to Paris two years ago.',
      options: ['goed', 'went', 'gone'],
      correctAnswer: 'went'
    },
    {
      id: 'test-ps-7',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'irregular-verbs',
      instruction: 'Choose the correct past form of the verb "make".',
      question: 'She ___ a delicious cake yesterday.',
      options: ['maked', 'made', 'make'],
      correctAnswer: 'made'
    },
    {
      id: 'test-ps-8',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'negative',
      instruction: 'Choose the correct negative form.',
      question: 'I ___ coffee this morning.',
      options: ['didn\'t drank', 'didn\'t drink', 'not drank'],
      correctAnswer: 'didn\'t drink'
    },
    {
      id: 'test-ps-9',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'question',
      instruction: 'Choose the correct auxiliary verb.',
      question: '___ your brother call you yesterday?',
      options: ['Did', 'Was', 'Does'],
      correctAnswer: 'Did'
    },
    {
      id: 'test-ps-10',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'markers',
      instruction: 'Choose the correct time marker.',
      question: 'I arrived in London three days ___.',
      options: ['ago', 'last', 'yesterday'],
      correctAnswer: 'ago'
    },
    {
      id: 'test-ps-11',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'markers',
      instruction: 'Choose the correct time marker.',
      question: 'They visited us ___ week.',
      options: ['last', 'ago', 'yesterday'],
      correctAnswer: 'last'
    },
    {
      id: 'test-ps-12',
      type: 'error-correction',
      category: 'test',
      subtopicTag: 'negative',
      instruction: 'Correct the error in this negative sentence.',
      wrongSentence: 'He didn\'t bought the tickets.',
      correctSentence: 'He didn\'t buy the tickets.',
      explanation: 'После didn\'t глагол должен стоять в начальной форме (buy).'
    },
    {
      id: 'test-ps-13',
      type: 'error-correction',
      category: 'test',
      subtopicTag: 'question',
      instruction: 'Correct the error in this question.',
      wrongSentence: 'Where did you went yesterday?',
      correctSentence: 'Where did you go yesterday?',
      explanation: 'В вопросе с did основной глагол возвращается в первую форму (go).'
    },
    {
      id: 'test-ps-14',
      type: 'sentence-builder',
      category: 'test',
      subtopicTag: 'question',
      instruction: 'Build the question in Past Simple.',
      words: ['Where', 'did', 'you', 'buy', 'that', 'book?'],
      correctSentence: 'Where did you buy that book?'
    },
    {
      id: 'test-ps-15',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'vocabulary',
      instruction: 'Translate: "Они встретили друзей."',
      question: 'Они встретили друзей.',
      options: ['They met friends.', 'They meeted friends.', 'They was met friends.'],
      correctAnswer: 'They met friends.'
    },

    // ==========================================
    // EXIT TICKET
    // ==========================================
    {
      id: 'ex-ps-exit',
      type: 'exit-ticket',
      category: 'exit-ticket',
      instruction: 'Ответьте на три коротких вопроса для самопроверки перед завершением урока.',
      questions: [
        '1. Чем отличаются правильные глаголы от неправильных в Past Simple?',
        '2. Что происходит с основным глаголом после didn\'t и в вопросах с Did?',
        '3. Какое правило из этого урока показалось вам самым лёгким, а что требует повторения?'
      ]
    }
  ]
};
