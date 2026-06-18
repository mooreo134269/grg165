const quotesData = [
    // Inspirational
    { id: 1, text: "The only way to do great work is to love what you do.", category: "inspirational", author: "Steve Jobs" },
    { id: 2, text: "Believe you can and you're halfway there.", category: "inspirational", author: "Theodore Roosevelt" },
    { id: 3, text: "Your time is limited, don't waste it living someone else's life.", category: "inspirational", author: "Steve Jobs" },
    { id: 4, text: "The future belongs to those who believe in the beauty of their dreams.", category: "inspirational", author: "Eleanor Roosevelt" },
    { id: 5, text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "inspirational", author: "Winston Churchill" },
    { id: 6, text: "Don't watch the clock; do what it does. Keep going.", category: "inspirational", author: "Sam Levenson" },
    { id: 7, text: "The best way to predict the future is to create it.", category: "inspirational", author: "Peter Drucker" },
    { id: 8, text: "Everything you've ever wanted is on the other side of fear.", category: "inspirational", author: "George Addair" },
    { id: 9, text: "Hardships often prepare ordinary people for an extraordinary destiny.", category: "inspirational", author: "C.S. Lewis" },
    { id: 10, text: "Dream big and dare to fail.", category: "inspirational", author: "Norman Vaughan" },
    { id: 11, text: "It does not matter how slowly you go as long as you do not stop.", category: "inspirational", author: "Confucius" },
    { id: 12, text: "The only impossible journey is the one you never begin.", category: "inspirational", author: "Tony Robbins" },
    { id: 13, text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", category: "inspirational", author: "Ralph Waldo Emerson" },
    { id: 14, text: "You are never too old to set another goal or to dream a new dream.", category: "inspirational", author: "C.S. Lewis" },
    { id: 15, text: "Act as if what you do makes a difference. It does.", category: "inspirational", author: "William James" },

    // Love
    { id: 16, text: "Love is composed of a single soul inhabiting two bodies.", category: "love", author: "Aristotle" },
    { id: 17, text: "The best thing to hold onto in life is each other.", category: "love", author: "Audrey Hepburn" },
    { id: 18, text: "I have found the one whom my soul loves.", category: "love", author: "Song of Solomon" },
    { id: 19, text: "To love and be loved is to feel the sun from both sides.", category: "love", author: "David Viscott" },
    { id: 20, text: "In all the world, there is no heart for me like yours.", category: "love", author: "Maya Angelou" },
    { id: 21, text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", category: "love", author: "" },
    { id: 22, text: "You are my sun, my moon, and all my stars.", category: "love", author: "E.E. Cummings" },
    { id: 23, text: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.", category: "love", author: "Angelita Lim" },
    { id: 24, text: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.", category: "love", author: "F. Scott Fitzgerald" },
    { id: 25, text: "If I know what love is, it is because of you.", category: "love", author: "Hermann Hesse" },
    { id: 26, text: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.", category: "love", author: "Leo Christopher" },
    { id: 27, text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.", category: "love", author: "Maya Angelou" },
    { id: 28, text: "You are my today and all of my tomorrows.", category: "love", author: "Leo Christopher" },
    { id: 29, text: "I would rather spend one lifetime with you, than face all the ages of this world alone.", category: "love", author: "J.R.R. Tolkien" },
    { id: 30, text: "When I saw you I fell in love, and you smiled because you knew.", category: "love", author: "William Shakespeare" },

    // Life
    { id: 31, text: "Life is what happens when you're busy making other plans.", category: "life", author: "John Lennon" },
    { id: 32, text: "In the end, it's not the years in your life that count. It's the life in your years.", category: "life", author: "Abraham Lincoln" },
    { id: 33, text: "Life is really simple, but we insist on making it complicated.", category: "life", author: "Confucius" },
    { id: 34, text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.", category: "life", author: "Ralph Waldo Emerson" },
    { id: 35, text: "Life isn't about finding yourself. Life is about creating yourself.", category: "life", author: "George Bernard Shaw" },
    { id: 36, text: "In three words I can sum up everything I've learned about life: it goes on.", category: "life", author: "Robert Frost" },
    { id: 37, text: "Life is 10% what happens to you and 90% how you react to it.", category: "life", author: "Charles R. Swindoll" },
    { id: 38, text: "The good life is one inspired by love and guided by knowledge.", category: "life", author: "Bertrand Russell" },
    { id: 39, text: "Life is either a daring adventure or nothing.", category: "life", author: "Helen Keller" },
    { id: 40, text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", category: "life", author: "Buddha" },
    { id: 41, text: "Life is short, and it is up to you to make it sweet.", category: "life", author: "Sarah Louise Delany" },
    { id: 42, text: "The biggest adventure you can take is to live the life of your dreams.", category: "life", author: "Oprah Winfrey" },
    { id: 43, text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.", category: "life", author: "Oliver Goldsmith" },
    { id: 44, text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", category: "life", author: "Mark Twain" },
    { id: 45, text: "Life is made of ever so many partings welded together.", category: "life", author: "Charles Dickens" },

    // Funny
    { id: 46, text: "I'm not lazy, I'm on energy-saving mode.", category: "funny", author: "" },
    { id: 47, text: "My bed is a magical place where I suddenly remember everything I forgot to do.", category: "funny", author: "" },
    { id: 48, text: "Common sense is like deodorant. The people who need it most never use it.", category: "funny", author: "" },
    { id: 49, text: "I followed my heart, and it led me to the fridge.", category: "funny", author: "" },
    { id: 50, text: "I'm on a seafood diet. I see food and I eat it.", category: "funny", author: "" },
    { id: 51, text: "Life is short. Smile while you still have teeth.", category: "funny", author: "" },
    { id: 52, text: "I'm not arguing, I'm just explaining why I'm right.", category: "funny", author: "" },
    { id: 53, text: "My wallet is like an onion. Opening it makes me cry.", category: "funny", author: "" },
    { id: 54, text: "I put my phone in airplane mode, but it's not flying.", category: "funny", author: "" },
    { id: 55, text: "Exercise? I thought you said extra fries.", category: "funny", author: "" },
    { id: 56, text: "I'm not clumsy. It's just the floor hates me, the tables and chairs are bullies, and the walls get in my way.", category: "funny", author: "" },
    { id: 57, text: "My favorite exercise is a cross between a lunge and a crunch. I call it lunch.", category: "funny", author: "" },
    { id: 58, text: "I don't need a hair stylist, my pillow gives me a new hairstyle every morning.", category: "funny", author: "" },
    { id: 59, text: "Some people graduate with honors, I am just honored to graduate.", category: "funny", author: "" },
    { id: 60, text: "I'm not saying I hate you, but I would unplug your life support to charge my phone.", category: "funny", author: "" },

    // Positive
    { id: 61, text: "Every day may not be good, but there's something good in every day.", category: "positive", author: "" },
    { id: 62, text: "Stay positive. Better days are on their way.", category: "positive", author: "" },
    { id: 63, text: "A positive mindset brings positive things.", category: "positive", author: "" },
    { id: 64, text: "Choose to be optimistic, it feels better.", category: "positive", author: "Dalai Lama" },
    { id: 65, text: "Positive anything is better than negative nothing.", category: "positive", author: "Elbert Hubbard" },
    { id: 66, text: "Keep your face always toward the sunshine—and shadows will fall behind you.", category: "positive", author: "Walt Whitman" },
    { id: 67, text: "The only time you fail is when you fall down and stay down.", category: "positive", author: "Stephen Richards" },
    { id: 68, text: "Be the change that you wish to see in the world.", category: "positive", author: "Mahatma Gandhi" },
    { id: 69, text: "Happiness is not something ready made. It comes from your own actions.", category: "positive", author: "Dalai Lama" },
    { id: 70, text: "You are never too old to set another goal or to dream a new dream.", category: "positive", author: "C.S. Lewis" },
    { id: 71, text: "Tough times never last, but tough people do.", category: "positive", author: "Robert H. Schuller" },
    { id: 72, text: "Believe in yourself! Have faith in your abilities!", category: "positive", author: "Norman Vincent Peale" },
    { id: 73, text: "You are braver than you believe, stronger than you seem, and smarter than you think.", category: "positive", author: "A.A. Milne" },
    { id: 74, text: "Every moment is a fresh beginning.", category: "positive", author: "T.S. Eliot" },
    { id: 75, text: "Start each day with a positive thought and a grateful heart.", category: "positive", author: "Roy T. Bennett" },

    // Work
    { id: 76, text: "The only place where success comes before work is in the dictionary.", category: "work", author: "Vidal Sassoon" },
    { id: 77, text: "Success usually comes to those who are too busy to be looking for it.", category: "work", author: "Henry David Thoreau" },
    { id: 78, text: "Don't be afraid to give up the good to go for the great.", category: "work", author: "John D. Rockefeller" },
    { id: 79, text: "I find that the harder I work, the more luck I seem to have.", category: "work", author: "Thomas Jefferson" },
    { id: 80, text: "Success is not how high you have climbed, but how you make a positive difference to the world.", category: "work", author: "Roy T. Bennett" },
    { id: 81, text: "The only limit to our realization of tomorrow will be our doubts of today.", category: "work", author: "Franklin D. Roosevelt" },
    { id: 82, text: "Do what you can, with what you have, where you are.", category: "work", author: "Theodore Roosevelt" },
    { id: 83, text: "The secret of getting ahead is getting started.", category: "work", author: "Mark Twain" },
    { id: 84, text: "Quality is not an act, it is a habit.", category: "work", author: "Aristotle" },
    { id: 85, text: "The way to get started is to quit talking and begin doing.", category: "work", author: "Walt Disney" },
    { id: 86, text: "Don't let yesterday take up too much of today.", category: "work", author: "Will Rogers" },
    { id: 87, text: "You learn more from failure than from success.", category: "work", author: "" },
    { id: 88, text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.", category: "work", author: "Steve Jobs" },
    { id: 89, text: "People who are crazy enough to think they can change the world, are the ones who do.", category: "work", author: "Rob Siltanen" },
    { id: 90, text: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk.", category: "work", author: "Mohnish Pabrai" },

    // Social Status
    { id: 91, text: "Less perfection, more authenticity.", category: "social", author: "" },
    { id: 92, text: "Be yourself; everyone else is already taken.", category: "social", author: "Oscar Wilde" },
    { id: 93, text: "Stay close to people who feel like sunlight.", category: "social", author: "" },
    { id: 94, text: "Collect moments, not things.", category: "social", author: "" },
    { id: 95, text: "Good vibes only.", category: "social", author: "" },
    { id: 96, text: "Creating my own sunshine.", category: "social", author: "" },
    { id: 97, text: "Do more things that make you forget to check your phone.", category: "social", author: "" },
    { id: 98, text: "Life is better when you're laughing.", category: "social", author: "" },
    { id: 99, text: "Chasing dreams and catching flights.", category: "social", author: "" },
    { id: 100, text: "Salty but sweet.", category: "social", author: "" },
    { id: 101, text: "Living my best life.", category: "social", author: "" },
    { id: 102, text: "Just because you're awake doesn't mean you should stop dreaming.", category: "social", author: "" },
    { id: 103, text: "Be a voice, not an echo.", category: "social", author: "" },
    { id: 104, text: "Make today so awesome that yesterday gets jealous.", category: "social", author: "" },
    { id: 105, text: "Coffee and confidence.", category: "social", author: "" }
];

const categoryInfo = {
    inspirational: {
        title: "Inspirational Quotes",
        description: "Find motivation and inspiration with our collection of powerful quotes to uplift your spirit and drive you toward success.",
        keywords: "inspirational quotes, motivational quotes, success quotes, encouragement"
    },
    love: {
        title: "Love Quotes",
        description: "Beautiful love quotes and romantic sayings perfect for expressing your feelings to someone special.",
        keywords: "love quotes, romantic quotes, relationship quotes, love sayings"
    },
    life: {
        title: "Life Quotes",
        description: "Thought-provoking life quotes and wisdom to help you navigate through life's journey with clarity and purpose.",
        keywords: "life quotes, wisdom quotes, life lessons, meaningful quotes"
    },
    funny: {
        title: "Funny Quotes",
        description: "Lighten up your day with our collection of funny quotes and humorous sayings that will make you smile.",
        keywords: "funny quotes, humor quotes, witty sayings, laugh quotes"
    },
    positive: {
        title: "Positive Quotes",
        description: "Stay optimistic with positive quotes that radiate good vibes and help you maintain a positive mindset.",
        keywords: "positive quotes, optimism quotes, good vibes, happy quotes"
    },
    work: {
        title: "Work Quotes",
        description: "Professional quotes and career motivation to inspire productivity and success in your work life.",
        keywords: "work quotes, career quotes, professional motivation, success at work"
    },
    social: {
        title: "Social Media Captions",
        description: "Perfect captions and short quotes for your Instagram, Facebook, and social media posts.",
        keywords: "social media captions, instagram captions, short quotes, status updates"
    }
};
