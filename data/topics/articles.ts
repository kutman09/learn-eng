import { TopicData } from '../../types';

export const articlesTopic: TopicData = {
  slug: 'articles',
  title: 'Артикли (Articles)',
  description: 'Самая сложная тема для русскоязычных. Как выбрать между a, an, the или вообще без артикля.',
  warmup: {
    context: 'В русском языке мы просто говорим "У меня есть собака". В английском нужно уточнить: это какая-то одна собака из всех собак в мире, или это конкретная собака, которую мы все знаем? Для этого нужны маленькие слова-указатели — артикли.',
    dialogue: [
      { en: '- I bought a car yesterday.', ru: '- Я вчера купил (какую-то) машину.' },
      { en: '- Really? Where is the car now?', ru: '- Правда? Где (эта конкретная) машина сейчас?' }
    ]
  },
  theory: [
    {
      id: 'theory-art-1',
      title: 'Что такое артикль?',
      content: 'Артикль — это служебное слово, которое ставится перед существительным (предметом). В русском языке артиклей нет. Мы можем добавить слова "какой-то" или "этот", чтобы передать смысл. Англичане используют артикли **почти всегда** перед исчисляемыми предметами в единственном числе. Если вы скажете "I have car", это звучит так же странно, как по-русски сказать "У меня есть мой машина".'
    },
    {
      id: 'theory-art-2',
      title: 'Неопределённый артикль A / An',
      content: `Используется, когда речь идёт об **одном** предмете, который можно посчитать, и он **какой-то любой** (один из многих).

- **A** ставится перед словами, начинающимися с согласного ЗВУКА: **a** book (книга), **a** cat (кот).
- **An** ставится перед словами, начинающимися с гласного ЗВУКА: **an** apple (яблоко), **an** egg (яйцо).

⚠️ **Важное правило! Смотрим на звук, а не на букву:**
- **an hour** (час) — начинается с буквы h, но звук гласный [aʊ], поэтому an.
- **a university** (университет) — буква u, но звук согласный [j] (йу), поэтому a.
- **a European** (европеец) — звук [j], поэтому a.
- **an honest** man (честный человек) — h не читается, звук [o], поэтому an.`
    },
    {
      id: 'theory-art-3',
      title: 'Определённый артикль The',
      content: `Используется, когда мы говорим о **конкретном** предмете, и собеседник понимает, о чем речь.

**Главное правило (первое упоминание):**
- *I saw **a** dog.* (Я увидел какую-то собаку).
- ***The** dog was black.* (Эта конкретная собака была черной). 

Также **the** ставится перед уникальными объектами, которые существуют в единственном экземпляре: **the sun** (солнце), **the moon** (луна), **the sky** (небо).`
    },
    {
      id: 'theory-art-4',
      title: 'Нулевой артикль (Без артикля)',
      content: `Артикль НЕ ставится в следующих случаях:
1. **Неисчисляемые существительные (в общем смысле):** вода, музыка, любовь, информация. (I like *music*. I drink *water*).
2. **Множественное число (в общем смысле):** *Dogs* are friendly (Собаки вообще). 
   Но если конкретные: *The dogs in my yard* are noisy.
3. **Имена, страны, языки:** *Kutman*, *Russia*, *English* (но: The USA, The UK).`
    },
    {
      id: 'theory-art-5',
      title: 'Сводная таблица (Comparison)',
      content: `
| Случай | Какой артикль? | Пример |
|---|---|---|
| Любой предмет, один, можно посчитать | **a / an** | I need **a** pen. |
| Конкретный предмет, упоминали ранее | **the** | Give me **the** pen (ту самую). |
| Уникальный предмет | **the** | Look at **the** sun. |
| Множественное число (в общем смысле) | **нет артикля** | I love **cats**. |
| Неисчисляемое (вода, музыка) | **нет артикля** | We need **water**. |
| Имена собственные (Джон, Лондон) | **нет артикля** | I live in **London**. |`
    },
    {
      id: 'theory-art-6',
      title: '⚠️ Частые ошибки новичков',
      content: `1. **Артикль перед именем собственным:** ❌ A Kutman is my friend. ✅ **Kutman** is my friend.
2. **Забывание артикля:** ❌ I have dog. ✅ I have **a** dog. (Перед единственным исчисляемым всегда нужен артикль, или местоимение вроде 'my').
3. **The при первом упоминании любой вещи:** ❌ I bought the book today (если собеседник не знает, какую книгу). ✅ I bought **a** book today.`
    },
    {
      id: 'theory-art-7',
      title: 'Примеры с объяснениями',
      content: `1. I ate **an** apple. (Какое-то одно яблоко. Звук гласный).
2. **The** apple was delicious. (То самое яблоко, которое я съел).
3. I love **music**. (Музыка вообще, неисчисляемое — нулевой артикль).
4. He studies at **a** university. (Звук [j] согласный, поэтому a).
5. We waited for **an** hour. (Звук [aʊ] гласный, поэтому an).
6. **The** sky is blue today. (Небо уникально, поэтому the).
7. She speaks **English**. (Названия языков без артикля).
8. I like **dogs**. (Собаки в целом, мн.ч. — без артикля).`
    }
  ],
  vocabulary: [
    { id: 'v-art1', english: 'Book', russian: 'Книга', transcription: '/bʊk/', example: 'I am reading a book.' },
    { id: 'v-art2', english: 'Apple', russian: 'Яблоко', transcription: '/ˈæpl/', example: 'She eats an apple.' },
    { id: 'v-art3', english: 'University', russian: 'Университет', transcription: '/ˌjuːnɪˈvɜːsəti/', example: 'He works at a university.' },
    { id: 'v-art4', english: 'Hour', russian: 'Час', transcription: '/ˈaʊə/', example: 'See you in an hour.' },
    { id: 'v-art5', english: 'Water', russian: 'Вода', transcription: '/ˈwɔːtə/', example: 'I drink water.' },
    { id: 'v-art6', english: 'Music', russian: 'Музыка', transcription: '/ˈmjuːzɪk/', example: 'He loves music.' },
    { id: 'v-art7', english: 'Information', russian: 'Информация', transcription: '/ˌɪnfəˈmeɪʃn/', example: 'I need information.' },
    { id: 'v-art8', english: 'Sun', russian: 'Солнце', transcription: '/sʌn/', example: 'The sun is hot.' },
    { id: 'v-art9', english: 'Moon', russian: 'Луна', transcription: '/muːn/', example: 'Look at the moon.' },
    { id: 'v-art10', english: 'Sky', russian: 'Небо', transcription: '/skaɪ/', example: 'The sky is blue.' },
    { id: 'v-art11', english: 'Cat', russian: 'Кот / кошка', transcription: '/kæt/', example: 'I have a cat.' },
    { id: 'v-art12', english: 'Dog', russian: 'Собака', transcription: '/dɒɡ/', example: 'The dog is sleeping.' }
  ],
  exercises: [
    // GUIDED
    {
      id: 'ex-art-g1',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'a-an',
      instruction: 'Выберите a или an (обратите внимание на ЗВУК).',
      textBefore: 'I waited for',
      textAfter: 'hour.',
      correctAnswer: 'an',
      options: ['a', 'an']
    },
    {
      id: 'ex-art-g2',
      type: 'fill-gap',
      category: 'guided',
      subtopicTag: 'a-an',
      instruction: 'Выберите a или an.',
      textBefore: 'She is a student at',
      textAfter: 'university.',
      correctAnswer: 'a',
      options: ['a', 'an'] // Звук [j] (йу)
    },
    {
      id: 'ex-art-g3',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'the',
      instruction: 'Второе упоминание предмета. Какой артикль нужен?',
      question: 'I bought a car. ___ car is very fast.',
      options: ['A', 'An', 'The'],
      correctAnswer: 'The'
    },
    {
      id: 'ex-art-g4',
      type: 'multiple-choice',
      category: 'guided',
      subtopicTag: 'zero-article',
      instruction: 'Неисчисляемое существительное (музыка).',
      question: 'I like listening to ___.',
      options: ['a music', 'the music', 'music (без артикля)'],
      correctAnswer: 'music (без артикля)'
    },
    {
      id: 'ex-art-g5',
      type: 'matching',
      category: 'guided',
      subtopicTag: 'vocabulary',
      instruction: 'Соедините слова.',
      pairs: [
        { left: 'Sky', right: 'Небо' },
        { left: 'Hour', right: 'Час' },
        { left: 'Water', right: 'Вода' },
        { left: 'Information', right: 'Информация' }
      ]
    },

    // FREE
    {
      id: 'ex-art-f1',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'the',
      instruction: 'Соберите предложение с уникальным объектом.',
      words: ['is', 'sun', 'bright.', 'The'],
      correctSentence: 'The sun is bright.'
    },
    {
      id: 'ex-art-f2',
      type: 'translate',
      category: 'free',
      subtopicTag: 'a-an',
      instruction: 'Переведите на английский. Не забудьте артикль!',
      russian: 'У меня есть кот.',
      correctEnglish: 'I have a cat.' // accept variations if implemented, but generic translation checks lowercase
    },
    {
      id: 'ex-art-f3',
      type: 'sentence-builder',
      category: 'free',
      subtopicTag: 'zero-article',
      instruction: 'Соберите предложение о множественном числе в общем смысле.',
      words: ['Cats', 'milk.', 'drink'],
      correctSentence: 'Cats drink milk.'
    },
    {
      id: 'ex-art-f4',
      type: 'translate',
      category: 'free',
      subtopicTag: 'zero-article',
      instruction: 'Переведите (неисчисляемое существительное).',
      russian: 'Я пью воду.',
      correctEnglish: 'I drink water.'
    },

    // TEST
    {
      id: 'test-art-1',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'a-an',
      instruction: 'Choose the correct article.',
      question: 'He is ___ honest man. (честный человек)',
      options: ['a', 'an', 'the'],
      correctAnswer: 'an' // 'h' is silent
    },
    {
      id: 'test-art-2',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'zero-article',
      instruction: 'Choose the correct option.',
      question: 'She lives in ___.',
      options: ['a London', 'the London', 'London (zero)'],
      correctAnswer: 'London (zero)'
    },
    {
      id: 'test-art-3',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'the',
      instruction: 'Choose the correct option.',
      question: 'Look at ___ moon!',
      options: ['a', 'an', 'the'],
      correctAnswer: 'the'
    },
    {
      id: 'test-art-4',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'a-an',
      instruction: 'Choose the correct option.',
      question: 'Can I have ___ apple?',
      options: ['a', 'an', 'the'],
      correctAnswer: 'an'
    },
    {
      id: 'test-art-5',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'the',
      instruction: 'First vs second mention.',
      question: 'I saw a movie. ___ movie was boring.',
      options: ['A', 'An', 'The'],
      correctAnswer: 'The'
    },
    {
      id: 'test-art-6',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'zero-article',
      instruction: 'General statements.',
      question: '___ are my favorite animals.',
      options: ['A dogs', 'The dogs', 'Dogs'],
      correctAnswer: 'Dogs'
    },
    {
      id: 'test-art-7',
      type: 'multiple-choice',
      category: 'test',
      subtopicTag: 'vocabulary',
      instruction: 'Translate "Небо".',
      question: 'Небо',
      options: ['Sun', 'Moon', 'Sky'],
      correctAnswer: 'Sky'
    }
  ]
};
