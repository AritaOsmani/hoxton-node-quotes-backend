import express from 'express'
import cors from 'cors'

const app = express();
// const cors = require('cors')
app.use(cors())
const PORT = 4000;

type Quote = {
    id: number
    content: string
    author: string

}

const quotes: Quote[] = [
    {
        id: 1,
        content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela'

    },
    {
        id: 2,
        content: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney',

    },
    {
        id: 3,
        content: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: 'Steve Jobs',

    },
    {
        id: 4,
        content: 'If life were predictable it would cease to be life, and be without flavor',
        author: 'Eleanor Roosevelt',

    },
    {
        id: 5,
        content: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: 'Oprah Winfrey',

    },
    {
        id: 6,
        content: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: 'James Cameron',

    },
    {
        id: 7,
        content: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon',

    },
    {
        id: 8,
        content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: 'Mother Teresa',

    },
    {
        id: 9,
        content: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: 'Franklin D.Roosevelt',

    },
    {
        id: 10,
        content: "Always remember that you are absolutely unique. Just like everyone else.",
        author: 'Margaret Mead',

    },
    {
        id: 11,
        content: "Don't judge each day by the harvest you reap but by the seeds that you plant. ",
        author: 'Robert Louis Stevenson',

    },
    {
        id: 12,
        content: "The future belongs to those who believe in the beauty of their dreams.",
        author: 'Eleanor Roosevelt',

    },
    {
        id: 13,
        content: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: 'Benjamin Franklin',

    },
    {
        id: 14,
        content: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: 'Helen Keller',

    },
    {
        id: 15,
        content: "It is during our darkest moments that we must focus to see the light.",
        author: 'Aristotle',

    },
    {
        id: 16,
        content: "Whoever is happy will make others happy too.",
        author: 'Anne Frank',

    },
    {
        id: 17,
        content: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: 'Ralph Waldo Emerson',

    },
    {
        id: 18,
        content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: 'Mother Teresa',

    },
    {
        id: 19,
        content: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: 'Thomas Edison',

    },
    {
        id: 20,
        content: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: 'Dr.Seuss',

    },
    {
        id: 21,
        content: "Life is either a daring adventure or nothing at all.",
        author: 'Helen Keller',

    },
    {
        id: 22,
        content: "Never let the fear of striking out keep you from playing the game.",
        author: 'Babe Ruth',

    },
    {
        id: 23,
        content: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        author: 'Oscar Wilde',

    },
    {
        id: 24,
        content: "Only a life lived for others is a life worthwhile.",
        author: 'Albert Einstein',

    },
    {
        id: 25,
        content: "The purpose of our lives is to be happy.",
        author: 'Dalai Lama',

    },
    {
        id: 26,
        content: "You only live once, but if you do it right, once is enough.",
        author: 'Mae West',

    },
    {
        id: 27,
        content: "Go confidently in the direction of your dreams! Live the life you've imagined.",
        author: 'Henry David Thoreau',

    },
    {
        id: 28,
        content: "May you live all the days of your life.",
        author: 'Jonathan Swift',

    },
    {
        id: 29,
        content: "Life itself is the most wonderful fairy tale.",
        author: 'Hans Christian Andersen',

    },
    {
        id: 30,
        content: "Love the life you live. Live the life you love.",
        author: 'Bob Marley',

    }
]


app.get('/quotes', (req, res) => {
    res.send(quotes)
})
app.get('/quotes/:id', (req, res) => {
    const id = Number(req.params.id);
    const match = quotes.find(quote => quote.id === id)
    if (match) {
        res.send(match)
    } else {
        res.status(404).send({ error: 'Quote not found!' })
    }
})


app.get('/quotes/author/:name', (req, res) => {
    const name = req.params.name;
    const matches = quotes.filter(quote => quote.author.toUpperCase().includes(name.toUpperCase()))

    if (matches.length !== 0) {
        res.send(matches)
    } else {
        res.status(404).send({ error: 'Quote not found' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})