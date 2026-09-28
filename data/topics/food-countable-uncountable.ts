import { TopicData } from '../../types';

export const foodTopic: TopicData = {
  slug: 'food-countable-uncountable',
  title: 'Еда: Исчисляемые и Неисчисляемые, a/an/some/any',
  description: 'Как правильно говорить о продуктах, артиклях и количестве.',
  goals: [
    'называть распространённые продукты питания;',
    'определять, исчисляемое существительное или неисчисляемое;',
    'правильно использовать a/an, some и any;',
    'рассказывать о продуктах, которые есть дома, полными предложениями.'
  ],
  warmup: {
    context: 'Перед тем как мы начнем, давайте проверим вашу интуицию. Ниже будет несколько предложений с ошибками, попробуйте их найти и исправить!',
  },
  theory: [
    {
      id: 'th-food-1',
      title: 'Countable nouns (Исчисляемые существительные)',
      content: `Это предметы, которые мы можем **посчитать поштучно** (1, 2, 3...).
У них есть **единственное** и **множественное** число.

- an apple (одно яблоко) → two apples (два яблока)
- a banana (один банан) → three bananas (три банана)
- a carrot (одна морковь) → four carrots (четыре моркови)

💡 *Аналогия:* Представьте то, что можно взять в руки по одной штуке и положить в корзину.`
    },
    {
      id: 'th-food-2',
      title: 'Uncountable nouns (Неисчисляемые существительные)',
      content: `Это то, что **нельзя посчитать поштучно**. Это массы, жидкости, материалы. У них **нет множественного числа**.

- water (вода)
- rice (рис)
- bread (хлеб)
- cheese (сыр)

⚠️ **Ловушка:** Нельзя сказать "a bread" или "two breads". Хлеб, сыр, мясо в английском — это масса. 
Чтобы их посчитать, нужны контейнеры или куски:
- a slice of bread (кусочек хлеба)
- a piece of cheese (кусочек сыра)
- a glass of water (стакан воды)
- a bowl of rice (миска риса)

Также обратите внимание на мясо: **a chicken** — это одна живая курица (исчисляемое). А **chicken** (как мясо/продукт) — неисчисляемое. То же самое с **fish**.`
    },
    {
      id: 'th-food-3',
      title: 'Singular / Plural (Образование множественного числа)',
      content: `Для исчисляемых существительных мы добавляем окончание, чтобы сделать их множественными:

1. Обычно добавляем **-s**: apple → apple**s**, burger → burger**s**.
2. После звуков s, sh, ch, x, o добавляем **-es**: sandwich → sandwich**es**, tomato → tomato**es**.
3. Если слово заканчивается на согласную + y, меняем y на i и добавляем **-es**: strawberry → strawberr**ies**.

*Произношение:* 
- После глухих согласных звучит как /s/ (grapes)
- После звонких и гласных — как /z/ (bananas)
- После шипящих — как /ɪz/ (sandwiches).

Исключения (неправильные существительные):
- child → children (дети)
- man → men (мужчины)
- person → people (люди)`
    },
    {
      id: 'th-food-4',
      title: 'Артикли: A / AN / THE',
      content: `Мы уже знакомы с артиклями, давайте вспомним:

- **a/an** используется **только с исчисляемыми в единственном числе**. Это означает "один любой".
  Выбор зависит от ЗВУКА: a banana, an apple.
- **the** используется, когда предмет **конкретный** и мы уже о нем говорили: 
  *I've got an apple. The apple is red.* (У меня есть яблоко. Это самое яблоко - красное.)

*(Подробнее об артиклях — в теме Articles).*`
    },
    {
      id: 'th-food-5',
      title: 'SOME',
      content: `Слово **some** переводится как "немного" или "несколько".
Оно используется в **утвердительных (+)** предложениях с:
- Исчисляемыми во множественном числе: We've got **some** apples. (У нас есть несколько яблок).
- Неисчисляемыми: I've got **some** rice. (У меня есть немного риса).`
    },
    {
      id: 'th-food-6',
      title: 'ANY',
      content: `Слово **any** переводится как "какие-нибудь" или "никакие".
Оно используется вместо some в **отрицаниях (−)** и **вопросах (?)**:
- (−) I haven't got **any** cheese. (У меня нет никакого сыра).
- (?) Have you got **any** onions? (У тебя есть какие-нибудь луковицы?)

⚠️ **Частая ошибка:** Использовать some в отрицании!
❌ *I haven't got some cheese.* 
✅ *I haven't got any cheese.*

*Пока просто запомни исключение:* В вежливых просьбах и предложениях мы используем some.
- *Would you like some tea?* (Хотите чаю?)`
    },
    {
      id: 'th-food-7',
      title: 'Шпаргалка',
      content: `
| Тип слова | Утверждение (+) | Отрицание (-) | Вопрос (?) |
|---|---|---|---|
| **Исчисляемое ед.ч.** | I've got **an** apple. | I haven't got **an** apple. | Have you got **an** apple? |
| **Исчисляемое мн.ч.** | I've got **some** apples. | I haven't got **any** apples. | Have you got **any** apples? |
| **Неисчисляемое** | I've got **some** rice. | I haven't got **any** rice. | Have you got **any** rice? |`
    }
  ],
  vocabulary: [
    { id: 'vf1', english: 'water', russian: 'вода', transcription: '/ˈwɔːtə/', example: 'I drink water.', emoji: '💧', tags: ['Uncountable'] },
    { id: 'vf2', english: 'chicken', russian: 'курица (мясо)', transcription: '/ˈtʃɪkɪn/', example: 'We have some chicken.', emoji: '🍗', tags: ['Uncountable'] },
    { id: 'vf3', english: 'fish', russian: 'рыба', transcription: '/fɪʃ/', example: 'I like fish.', emoji: '🐟', tags: ['Uncountable'] },
    { id: 'vf4', english: 'rice', russian: 'рис', transcription: '/raɪs/', example: 'I eat rice.', emoji: '🍚', tags: ['Uncountable'] },
    { id: 'vf5', english: 'bread', russian: 'хлеб', transcription: '/bred/', example: 'We need some bread.', emoji: '🍞', tags: ['Uncountable'] },
    { id: 'vf6', english: 'cheese', russian: 'сыр', transcription: '/tʃiːz/', example: 'I love cheese.', emoji: '🧀', tags: ['Uncountable'] },
    { id: 'vf7', english: 'apple', russian: 'яблоко', transcription: '/ˈæpl/', example: 'I have an apple.', emoji: '🍎', tags: ['Countable'] },
    { id: 'vf8', english: 'banana', russian: 'банан', transcription: '/bəˈnɑːnə/', example: 'He eats a banana.', emoji: '🍌', tags: ['Countable'] },
    { id: 'vf9', english: 'grapes', russian: 'виноград', transcription: '/ɡreɪps/', example: 'I bought some grapes.', emoji: '🍇', tags: ['Countable (Plural)'] },
    { id: 'vf10', english: 'onion', russian: 'лук', transcription: '/ˈʌnjən/', example: 'Cut an onion.', emoji: '🧅', tags: ['Countable'] },
    { id: 'vf11', english: 'carrot', russian: 'морковь', transcription: '/ˈkærət/', example: 'Rabbits love carrots.', emoji: '🥕', tags: ['Countable'] },
    { id: 'vf12', english: 'mushroom', russian: 'гриб', transcription: '/ˈmʌʃrʊm/', example: 'A mushroom soup.', emoji: '🍄', tags: ['Countable'] },
    { id: 'vf13', english: 'burger', russian: 'бургер', transcription: '/ˈbɜːɡə/', example: 'I ordered a burger.', emoji: '🍔', tags: ['Countable'] },
  ],
  exercises: [
    // WARM-UP (error correction)
    {
      id: 'warmup-1',
      type: 'error-correction',
      category: 'warmup',
      instruction: 'Найдите и исправьте ошибку. (Тема: порядок слов с to be)',
      wrongSentence: 'I usually am tired.',
      correctSentence: 'I am usually tired.',
      explanation: 'Наречия частоты (usually, always, never) ставятся ПОСЛЕ глагола to be.'
    },
    {
      id: 'warmup-2',
      type: 'error-correction',
      category: 'warmup',
      instruction: 'Найдите и исправьте ошибку. (Тема: Present Simple)',
      wrongSentence: 'She don\'t use her phone much.',
      correctSentence: 'She doesn\'t use her phone much.',
      explanation: 'Для he/she/it (3-е лицо ед.ч.) используется doesn\'t.'
    },
    {
      id: 'warmup-3',
      type: 'error-correction',
      category: 'warmup',
      instruction: 'Найдите и исправьте ошибку. (Тема: Артикли)',
      wrongSentence: 'I have got laptop.',
      correctSentence: 'I have got a laptop.',
      explanation: 'Laptop - это исчисляемое существительное в единственном числе. Перед ним обязательно нужен артикль!'
    },
    
    // GUIDED
    {
      id: 'food-g1',
      type: 'sort',
      category: 'guided',
      subtopicTag: 'vocabulary',
      instruction: 'Разложите продукты по категориям (Sort the food).',
      categories: ['Fruit', 'Vegetables', 'Meat & Fish', 'Other food'],
      items: [
        { word: 'Apple', category: 'Fruit' },
        { word: 'Banana', category: 'Fruit' },
        { word: 'Carrot', category: 'Vegetables' },
        { word: 'Onion', category: 'Vegetables' },
        { word: 'Chicken', category: 'Meat & Fish' },
        { word: 'Fish', category: 'Meat & Fish' },
        { word: 'Bread', category: 'Other food' },
        { word: 'Rice', category: 'Other food' },
      ]
    },
    {
      id: 'food-g2',
      type: 'sort',
      category: 'guided',
      subtopicTag: 'countable',
      instruction: 'Countable or Uncountable? Разделите слова.',
      categories: ['Countable (можно посчитать)', 'Uncountable (нельзя посчитать)'],
      items: [
        { word: 'Burger', category: 'Countable (можно посчитать)' },
        { word: 'Mushroom', category: 'Countable (можно посчитать)' },
        { word: 'Cheese', category: 'Uncountable (нельзя посчитать)' },
        { word: 'Water', category: 'Uncountable (нельзя посчитать)' },
        { word: 'Grapes', category: 'Countable (можно посчитать)' },
        { word: 'Bread', category: 'Uncountable (нельзя посчитать)' }
      ]
    },
    {
      id: 'food-g3',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'a-an',
      instruction: 'Выберите a или an (подсказка: banana начинается с согласного звука).',
      textBefore: 'I\'ve got',
      textAfter: 'banana.',
      correctAnswer: 'a',
      options: ['a', 'an', 'some']
    },
    {
      id: 'food-g4',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'some-any',
      instruction: 'Отрицательное предложение. Какое слово использовать?',
      textBefore: 'We haven\'t got',
      textAfter: 'cheese.',
      correctAnswer: 'any',
      options: ['some', 'any', 'a']
    },
    {
      id: 'food-g5',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'some-any',
      instruction: 'Вопрос. Какое слово использовать?',
      textBefore: 'Have you got',
      textAfter: 'rice?',
      correctAnswer: 'any',
      options: ['a', 'some', 'any']
    },
    {
      id: 'food-g6',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'some-any',
      instruction: 'Утвердительное предложение (мн.число).',
      textBefore: 'I\'ve got',
      textAfter: 'apples.',
      correctAnswer: 'some',
      options: ['a', 'an', 'some', 'any']
    },
    {
      id: 'food-g7',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'plural',
      instruction: 'Сделайте множественное число (make plural): sandwich -> ?',
      textBefore: 'I have two',
      textAfter: 'in my bag.',
      correctAnswer: 'sandwiches',
      options: ['sandwichs', 'sandwiches', 'sandwich']
    },
    {
      id: 'food-g8',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'plural',
      instruction: 'Сделайте множественное число (make plural): tomato -> ?',
      textBefore: 'We need some',
      textAfter: 'for the salad.',
      correctAnswer: 'tomatoes',
      options: ['tomatos', 'tomatoes', 'tomatoies']
    },

    // FREE
    {
      id: 'food-f1',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'some-any',
      instruction: 'Соберите отрицательное предложение.',
      words: ['any', 'haven\'t', 'I', 'got', 'cheese.'],
      correctSentence: 'I haven\'t got any cheese.'
    },
    {
      id: 'food-f2',
      type: 'translate',
      category: 'free',
      subtopicTag: 'some-any',
      instruction: 'Переведите на английский (используйте some, have got).',
      russian: 'У нас есть немного риса.',
      correctEnglish: 'We have got some rice.'
    },
    {
      id: 'food-f3',
      type: 'error-correction',
      category: 'free',
      subtopicTag: 'some-any',
      instruction: 'Исправьте ошибку.',
      wrongSentence: 'I haven\'t got some bread.',
      correctSentence: 'I haven\'t got any bread.',
      explanation: 'В отрицаниях вместо some используется any.'
    },
    {
      id: 'food-f4',
      type: 'error-correction',
      category: 'free',
      subtopicTag: 'countable',
      instruction: 'Исправьте ошибку (bread - неисчисляемое).',
      wrongSentence: 'I bought a bread.',
      correctSentence: 'I bought some bread.',
      explanation: 'Bread - неисчисляемое, поэтому артикль A/AN не ставится. Можно сказать some bread.'
    },
    {
      id: 'food-f5',
      type: 'multiple-choice',
      category: 'free',
      subtopicTag: 'some-any',
      instruction: 'Мини-диалог. Подберите правильный ответ.',
      question: '- Have you got any apples?',
      options: ['Yes, I\'ve got some apples.', 'No, I haven\'t got some apples.', 'Yes, I\'ve got any apples.'],
      correctAnswer: 'Yes, I\'ve got some apples.'
    },
    
    // SPEAKING
    {
      id: 'food-sp1',
      type: 'speaking',
      category: 'speaking',
      subtopicTag: 'vocabulary',
      instruction: 'What food have you got at home?',
      prompts: [
        'Напишите 3-4 предложения о том, какие продукты у вас есть дома.',
        'Используйте: I\'ve got... / I haven\'t got...',
        'Не забудьте про a / an / some / any.'
      ],
      expectedKeywords: ['got', 'some'],
      sampleAnswer: "I've got some bread and cheese. I haven't got any chicken. I've got an apple and some bananas."
    },

    // TEST
    {
      id: 'ftest-1',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'countable',
      instruction: 'Is "water" countable or uncountable?',
      question: 'Water',
      options: ['Countable', 'Uncountable'],
      correctAnswer: 'Uncountable'
    },
    {
      id: 'ftest-2',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'some-any',
      instruction: 'Choose the correct option.',
      textBefore: 'I don\'t have',
      textAfter: 'mushrooms.',
      correctAnswer: 'any',
      options: ['some', 'any', 'a']
    },
    {
      id: 'ftest-3',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'a-an',
      instruction: 'Choose the correct option.',
      textBefore: 'She wants',
      textAfter: 'onion.',
      correctAnswer: 'an',
      options: ['a', 'an', 'some']
    },
    {
      id: 'ftest-4',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'plural',
      instruction: 'Choose the correct plural form of "child".',
      question: 'child -> ?',
      options: ['childs', 'children', 'childrens'],
      correctAnswer: 'children'
    },
    {
      id: 'ftest-5',
      type: 'error-correction',
      category: 'test',
      subtopicTag: 'some-any',
      instruction: 'Fix the error.',
      wrongSentence: 'Do you have some rice?',
      correctSentence: 'Do you have any rice?',
      explanation: 'В вопросах используется any.'
    },
    {
      id: 'ftest-6',
      type: 'sentence-builder',
      category: 'test',
      subtopicTag: 'some-any',
      instruction: 'Build the sentence.',
      words: ['have', 'We', 'some', 'got', 'fish.'],
      correctSentence: 'We have got some fish.'
    },
    {
      id: 'ftest-7',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'countable',
      instruction: 'Which sentence is CORRECT?',
      question: 'Choose the sentence without mistakes.',
      options: ['I want a cheese.', 'I want some cheese.', 'I want some cheeses.'],
      correctAnswer: 'I want some cheese.'
    },
    {
      id: 'ftest-8',
      type: 'fill-gap',
      category: 'test',
      subtopicTag: 'plural',
      instruction: 'Choose the correct option.',
      textBefore: 'There are five',
      textAfter: 'on the table.',
      correctAnswer: 'tomatoes',
      options: ['tomatos', 'tomatoes']
    },
    {
      id: 'ftest-9',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'some-any',
      instruction: 'Exception: Polite request.',
      question: 'Would you like ___ tea?',
      options: ['some', 'any', 'a'],
      correctAnswer: 'some'
    },
    {
      id: 'ftest-10',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'a-an',
      instruction: 'First vs second mention (articles).',
      question: 'I have a burger. ___ burger is very tasty.',
      options: ['A', 'An', 'The'],
      correctAnswer: 'The'
    },

    // EXIT TICKET
    {
      id: 'exit-1',
      type: 'exit-ticket',
      category: 'exit-ticket',
      instruction: 'Ответьте на 4 коротких вопроса, чтобы закрепить материал.',
      questions: [
        '1. Напишите один исчисляемый продукт (countable food).',
        '2. Напишите один неисчисляемый продукт (uncountable food).',
        '3. Напишите одно утвердительное предложение (+) со словом "some".',
        '4. Напишите одно отрицательное предложение (-) со словом "any".'
      ]
    }
  ]
};
