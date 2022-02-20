import express from 'express'
import Databse from 'better-sqlite3'
import cors from 'cors'

const db = Databse('./quotes.db', {
    verbose: console.log
})
const app = express();
app.use(cors())
app.use(express.json())
const PORT = 4000;

const getAllQuotes = db.prepare(`
SELECT quotes.id,quotes.content,authors.firstName,authors.lastName,authors.born,authors.death,authors.image,authors.bio FROM quotes JOIN authors ON quotes.authorId = authors.id;
`)


const getAllQuotesById = db.prepare(`
SELECT quotes.id,quotes.content,authors.firstName,authors.lastName,authors.born,authors.death,authors.image,authors.bio FROM quotes JOIN authors ON quotes.authorId = authors.id WHERE quotes.id  =?;
`)


const createQuote = db.prepare(`
    INSERT INTO  quotes (content,authorId) VALUES (?,?);
`)

const createAuthor = db.prepare(`
    INSERT INTO authors (firstName,lastName,born,death,image,bio) VALUES (?,?,?,?,?,?);
`)

const getAuthors = db.prepare(`
    SELECT * FROM authors;
`)

const getAuthorById = db.prepare(`
    SELECT * FROM authors WHERE id=?;
`)

const getQuoteById = db.prepare(`
    SELECT * FROM quotes WHERE id =?;
`)

const updateAuthor = db.prepare(`
    UPDATE authors SET firstName =?, lastName = ?, born = ? ,death = ?, image = ?,bio = ? WHERE id =?;
`)

const updateQuote = db.prepare(`
    UPDATE quotes SET content = ?, authorId = ? WHERE id = ?;
`)

const deleteQuote = db.prepare(`
    DELETE FROM quotes WHERE id=?
`)

app.get('/quotes', (req, res) => {
    const allQuotes = getAllQuotes.all()
    // const allQuotes = getQuotes.all()
    res.send(allQuotes)
})

app.get('/authors', (req, res) => {
    const authors = getAuthors.all();
    res.send(authors)
})

app.get('/quotes/:id', (req, res) => {
    const id = req.params.id;
    const result = getAllQuotesById.get(id);
    if (result) {
        res.send(result);

    } else {
        res.status(404).send({ message: 'User not found!' })
    }
})

app.get('/quote/:id', (req, res) => {
    const id = req.params.id;
    const result = getQuoteById.get(id)
    if (result) {
        res.send(result)
    } else {
        res.status(404).send({ message: 'Quote not found!' })
    }
})

app.post('/quotes', (req, res) => {
    const content = req.body.content;
    const authorId = req.body.authorId;

    const errors = [];

    if (typeof content !== 'string') {
        errors.push('Content missing or not a string!')
    }
    if (typeof authorId !== 'number') {
        errors.push('Author id missing or not a number!')
    }

    if (errors.length === 0) {
        const author = getAuthorById.get(authorId)
        if (author) {
            const result = createQuote.run(content, authorId)
            const newQuote = getQuoteById.get(result.lastInsertRowid)
            res.send(newQuote)
        } else {
            res.status(404).send('This author does not exist!')
        }
    } else {
        res.status(400).send(errors)
    }

})

app.post('/authors', (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const born = req.body.born;
    const image = req.body.image;

    const errors = []

    if (typeof firstName !== 'string') {
        errors.push('First name missing or not a string')
    }
    if (typeof lastName !== 'string') {
        errors.push('Last name missing or not a string!')
    }
    if (typeof born !== 'number') {
        errors.push('Born year missing or not a number!')
    }
    if (typeof image !== 'string') {
        errors.push('Image url missing or not a string!')
    }
    if (req.body.death) {
        if (req.body.death !== 'number') {
            errors.push('Death year not a number!')
        }
    }
    if (req.body.bio) {
        if (req.body.bio !== 'string') {
            errors.push('Bio not a string!')
        }
    }

    if (errors.length === 0) {
        const result = createAuthor.run(firstName, lastName, born, req.body.death, image, req.body.bio);
        const newAuthor = getAllQuotesById.get(result.lastInsertRowid);
        res.send(newAuthor)
    } else {
        res.status(400).send(errors)
    }

})

app.patch('/authors/:id', (req, res) => {

    const { firstName, lastName, born, death, image, bio } = req.body
    const foundAuthor = getAuthorById.get(req.params.id);

    if (firstName && typeof firstName !== 'string') {
        res.status(400).send({ error: 'First name not a string' })
    }
    if (lastName && typeof lastName !== 'string') {
        res.status(400).send({ error: 'Last name not a string' })
    }
    if (born && typeof born !== 'number') {
        res.status(400).send({ error: 'Born year not a number' })
    }
    if (image && typeof image !== 'string') {
        res.status(400).send({ error: 'Image not a string' })
    }

    if (death && typeof death !== 'number') {
        res.status(400).send({ error: 'Date year not a number' })
    }
    if (bio && typeof bio !== 'string') {
        res.status(400).send({ error: 'Bio not a string' })
    }


    if (foundAuthor) {
        updateAuthor.run(firstName ?? foundAuthor.firstName, lastName ?? foundAuthor.lastName, born ?? foundAuthor.born, death ?? foundAuthor.death, image ?? foundAuthor.image, bio ?? foundAuthor.bio, req.params.id);
        const getUpdatedAuthor = getAuthorById.get(req.params.id)
        res.send(updateAuthor)
    } else {
        res.status(404).send('Author not found!')
    }

})

app.patch('/quote/:id', (req, res) => {

    const { content, authorId } = req.body;

    const foundAuthor = getAuthorById.get(authorId)

    if (content && typeof content !== 'string') {
        res.send({ erro: 'Content not a string!' })
    }
    if (authorId && typeof authorId !== 'number' && !foundAuthor) {
        res.send({ error: 'Author id not a number or author not found' })
    }

    const foundQuote = getQuoteById.get(req.params.id)

    if (foundQuote) {
        updateQuote.run(content ?? foundQuote.content, authorId ?? foundQuote.authorId, req.params.id)
        const updatedQuote = getQuoteById.get(req.params.id);
        res.send(updatedQuote)
    } else {
        res.status(404).send('Quote not found!')
    }
})

app.delete('/quotes/:id', (req, res) => {
    const id = req.params.id;
    const result = deleteQuote.run(id)

    if (result.changes !== 0) {
        res.status(200).send({ message: 'Quote deleted sucessfully' })
    } else {
        res.status(404).send({ message: 'Quote does not exist' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})