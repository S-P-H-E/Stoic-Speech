const quotes = [
    {
        quote: "I don’t need to be motivated because I’m a disciplined person. If I allocate X amount of time to do something, I’m going to do it.",
        author: "Andrew Tate"
    },
    {
        quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius"
    },
    {
        quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
        author: "Marcus Aurelius"
    },
    {
        quote: "If it is not right, do not do it, if it is not true, do not say it.",
        author: "Marcus Aurelius"
    },
    //Seneca
    {
        quote: "It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult.",
        author: "Seneca"
    },
    {
        quote: "The only thing in our power is our own thoughts.",
        author: "Epictetus"
    },
    {
        quote: "We have two ears and one mouth so that we can listen twice as much as we speak.",
        author: "Epictetus"
    },
    {
        quote: "It is not that we have a short time to live, but that we waste a lot of it.",
        author: "Seneca"
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        quote: "We are not given control over what happens to us, but we are given control over how we respond.",
        author: "Epictetus"
    },
    {
        quote: "He who would rule must first learn to serve.",
        author: "Marcus Aurelius"
    },
    {
        quote: "The first and most important field of knowledge is self-knowledge.",
        author: "Plato"
    },
    {
        quote: "The only wealth which you will keep forever is the wealth you have given away.",
        author: "Marcus Aurelius"
    },
    {
        quote: "It is not what happens to you, but how you react to it that matters.",
        author: "Epictetus"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "People are not disturbed by things, but by the views they take of them.",
        author: "Epictetus"
    },
    {
        quote: "The greatest wealth is to live content with little.",
        author: "Plato"
    },
    {
        quote: "Wealth consists not in having great possessions, but in having few wants.",
        author: "Epictetus"
    },
    {
        quote: "Happiness depends on our own attitudes, not on external events.",
        author: "Epictetus"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The only real failure in life is the failure to try.",
        author: "George Bernard Shaw"
    },
    {
        quote: "If you would rule, prescribe for yourself what is necessary, and so you will be obeyed.",
        author: "Seneca"
    },
    {
        quote: "Your greatness is determined by what you do with the hand you've been dealt.",
        author: "Seneca"
    },
    {
        quote: "Do not waste time on what you cannot change.",
        author: "Seneca"
    },
    {
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius"
    },
    {
        quote: "If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet success unexpected in common hours.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },   
];

const pickRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

export { quotes, pickRandomQuote };