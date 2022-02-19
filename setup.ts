import { Author, Quote } from './Types'
import Database from 'better-sqlite3'

const db = Database('./quotes.db', {
    verbose: console.log
})

const authors: Author[] = [
    {

        firstName: 'Nelson',
        lastName: 'Mandela',
        born: 1918,
        death: 2013,
        image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2021/12/05/thumbs_b_c_575ab60fcd2d75931e1d8418806ac638.jpg?v=161537',
        bio: "Nelson Mandela was born Rolihlahla Mandela on July 18, 1918, in a rural village in the Transkei region of South Africa.  His name means “troublemaker” in the Xhosa language. A teacher at a Christian mission school later gave him the name Nelson. Mandela rose from a humble village of mud huts into a comfortable life as the adopted son of a Tembu chief."
    },
    {
        firstName: 'Walt',
        lastName: 'Disney',
        born: 1901,
        death: 1966,
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG',
        bio: "Walt Disney was born on December 5, 1901. Disney became one of the best-known motion picture producers in the world. He is particularly noted for being a film producer and a popular showman, as well as an innovator in animation and theme park design."
    },
    {
        firstName: 'Steve',
        lastName: 'Jobs',
        born: 1955,
        death: 2011,
        image: 'https://cdn.idropnews.com/wp-content/uploads/2021/10/05102831/Steve-Jobs-8.jpg',
        bio: "Steven Paul Jobs was an American inventor, designer and entrepreneur who was the co-founder, chief executive and chairman of Apple Computer. Apple's revolutionary products, which include the iPod, iPhone and iPad, are now seen as dictating the evolution of modern technology. "
    },
    {
        firstName: 'Eleanor',
        lastName: 'Roosevelt',
        born: 1884,
        death: 1962,
        image: 'https://en.wikipedia.org/wiki/Eleanor_Roosevelt#/media/File:Eleanor_Roosevelt_portrait_1933.jpg',
        bio: "Anna Eleanor Roosevelt was born in New York City on October 11, 1884. Her father was Elliott Roosevelt, President Theodore Roosevelt's younger brother and her mother was Anna Hall, a member of the distinguished Livingston family."
    },
    {
        firstName: 'Oprah',
        lastName: 'Winfrey',
        born: 1954,
        image: 'https://www.biography.com/.image/t_share/MTY2NTIzMDQzOTIzODk1NTM4/oprah-photo-by-vera-anderson_wireimage.jpg',
        bio: "Oprah Winfrey is a talk show host, media executive, actress and billionaire philanthropist. She’s best known for being the host of her own, wildly popular program, The Oprah Winfrey Show, which aired for 25 seasons, from 1986 to 2011. In 2011, Winfrey launched her own TV network, the Oprah Winfrey Network (OWN)."
    },
    {
        firstName: 'James',
        lastName: 'Cameron',
        born: 1954,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbZf9bzSjQhCZKXVuQYTNoIiAuiE2qsN8NWk5aTq6d1faV0su',
        bio: "James Cameron was born on August 16, 1954, in Kapuskasing, Ontario, Canada. A science-fiction fan as a child, he grew up to become one of the most visionary filmmakers in Hollywood. He initially pursued physics as a student at California State University, Fullerton, but he left to follow his cinematic dreams. "
    },
    {
        firstName: 'Mother',
        lastName: 'Teresa',
        born: 1910,
        death: 1997,
        image: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTOh54psgfIkMkiLg7BCgX3n3qnKyOxcg2hSWFyvm28DVDwXLHUsLR9jNB7VuXh',
        bio: "Mother Teresa was the founder of the Order of the Missionaries of Charity, a Roman Catholic congregation of women dedicated to helping the poor. Considered one of the 20th Century's greatest humanitarians, she was canonized as Saint Teresa of Calcutta in 2016."
    },
    {
        firstName: 'Franklin D.',
        lastName: 'Roosevelt',
        born: 1882,
        death: 1945,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/220px-FDR_1944_Color_Portrait.jpg',
        bio: "Franklin Delano Roosevelt, byname FDR, (born January 30, 1882, Hyde Park, New York, U.S.—died April 12, 1945, Warm Springs, Georgia), 32nd president of the United States (1933-45). The only president elected to the office four times, Roosevelt led the United States through two of the greatest crises of the 20th century: the Great Depression and World War II. "
    },
    {
        firstName: 'Margaret',
        lastName: 'Mead',
        born: 1901,
        death: 1978,
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQstBFfHbjMIKEhun2dgTuN7KAY3D7lR5iJFG9G01MYFnc64UKpQSavuzJafUon',
        bio: "Margaret Mead was an American cultural anthropologist who featured frequently as an author and speaker in the mass media during the 1960s and 1970s"
    },
    {
        firstName: 'Robert Louis',
        lastName: 'Stevenson',
        born: 1850,
        death: 1894,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rjWt9T4RwjlDWoXTsaPu-YTwY3YaM99-lz58j0TCP8ttUlf4',
        bio: "Robert Louis Stevenson was a Scottish novelist, essayist, poet and travel writer. He is best known for works such as Treasure Island, Strange Case of Dr Jekyll and Mr Hyde, Kidnapped and A Child's Garden of Verses"
    },
    {
        firstName: 'Benjamin',
        lastName: 'Franklin',
        born: 1706,
        death: 1790,
        image: 'https://benjaminfranklin.net/images/benjamin-franklin.jpg',
        bio: "Benjamin Franklin FRS FRSA FRSE was an American polymath who was active as a writer, scientist, inventor, statesman, diplomat, printer, publisher and political philosopher."
    },
    {
        firstName: 'Helen',
        lastName: 'Keller',
        born: 1880,
        death: 1968,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6UkvnwsF1nmPU2Wz595OCBoQH1A16OUGyml9qTo9kRk0c04g',
        bio: "Helen Adams Keller was an American author, disability rights advocate, political activist and lecturer. Born in West Tuscumbia, Alabama, she lost her sight and hearing after a bout of illness at the age of nineteen months"
    },
    {
        firstName: 'Aristotle',
        lastName: '',
        born: 384,
        death: 322,
        image: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTqE1mtped62BJfdsQc13Y0715JFp8r-V99U5bNzbtjVPj8iIwzwurFSW2IdIEY',
        bio: "Aristotle was a Greek philosopher and polymath during the Classical period in Ancient Greece. Taught by Plato, he was the founder of the Lyceum, the Peripatetic school of philosophy, and the Aristotelian tradition."
    },
    {
        firstName: 'Anne',
        lastName: 'Frank',
        born: 1929,
        death: 1945,
        image: 'https://static01.nyt.com/images/2022/01/19/arts/18anne-frank-folo1/merlin_115719422_4fbbc78b-0a46-46fa-97dc-45fd057cff96-mobileMasterAt3x.jpg',
        bio: "Annelies Marie Frank was a German-Dutch diarist of Jewish heritage. One of the most discussed Jewish victims of the Holocaust, she gained fame posthumously with the 1947 publication of The Diary of a Young Girl"
    },
    {
        firstName: 'Ralph Waldo',
        lastName: 'Emerson',
        born: 1803,
        death: 1882,
        image: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSjPy2rjMFVmWAc-1jjfRujCrp6M2vpJ_PHSi8QqKVU7G6MxMwKsndM49miXbL9',
        bio: "Ralph Waldo Emerson, who went by his middle name Waldo, was an American essayist, lecturer, philosopher, abolitionist, and poet who led the transcendentalist movement of the mid-19th century."
    },
    {
        firstName: 'Thomas',
        lastName: 'Edison',
        born: 1847,
        death: 1931,
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRCgpvWd7vYbxDSaNDMOeOSDwR1t4xOJuY_Pf3m8ClFDG43Vf9DPANdJ9wSuMuo',
        bio: "Thomas Alva Edison was an American inventor and businessman. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures"
    },
    {
        firstName: 'Dr.Seuss',
        lastName: '',
        born: 1904,
        death: 1991,
        image: 'https://en.wikipedia.org/wiki/Dr._Seuss#/media/File:Theodor_Seuss_Geisel_(01037v).jpg',
        bio: "Theodor Seuss Geisel was an American children's author, political cartoonist, illustrator, poet, animator, and filmmaker. He is known for his work writing and illustrating more than 60 books under the pen name Dr. Seuss"
    },
    {
        firstName: 'Babe',
        lastName: 'Ruth',
        born: 1895,
        death: 1948,
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLKC8XWcgLkQvyQZFKZdAeZY1kz-mMhjuSFu5nANlhFRtwv_ei',
        bio: "George Herman 'Babe' Ruth Jr. was an American professional baseball player whose career in Major League Baseball spanned 22 seasons, from 1914 through 1935"
    },
    {
        firstName: 'Oscar',
        lastName: 'Wilde',
        born: 1854,
        death: 1900,
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTV9dQb1kweIGwZylKyFoljZYQddagTN2v3DaErncU0dNWwOL5y',
        bio: "Oscar Fingal O'Flahertie Wills Wilde was an Irish poet and playwright. After writing in different forms throughout the 1880s, he became one of the most popular playwrights in London in the early 1890s."
    },
    {
        firstName: 'Albert',
        lastName: 'Einstein',
        born: 1879,
        death: 1955,
        image: 'https://no.wikipedia.org/wiki/Albert_Einstein#/media/Fil:Albert_Einstein_Head.jpg',
        bio: "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics."
    },
    {
        firstName: 'Dalai',
        lastName: 'Lama',
        born: 1935,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Dalailama1_20121014_4639.jpg',
        bio: "The 14th Dalai Lama, known as Gyalwa Rinpoche to the Tibetan people, is the current Dalai Lama, the highest spiritual leader and former head of state of Tibet"
    },
    {
        firstName: 'Mae',
        lastName: 'West',
        born: 1893,
        death: 1980,
        image: 'https://en.wikipedia.org/wiki/Mae_West#/media/File:Mae_West_LAT.jpg',
        bio: "Mae West was an American stage and film actress, playwright, screenwriter, singer, and sex symbol whose entertainment career spanned over seven decades. She was known for her breezy sexual independence, and her lighthearted bawdy double entendres, often delivered in a husky contralto voice."
    },
    {
        firstName: 'Henry David',
        lastName: 'Thoreau',
        born: 1817,
        death: 1862,
        image: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSWrCRzadHKIofduRnG4lVp5WVnMNjZuHf654yg15SQ8VB8VAQoL8uEm0CQ34ir',
        bio: "Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay 'Civil Disobedience', an argument for disobedience to an unjust state."
    },
    {
        firstName: 'Jonathan',
        lastName: 'Swift',
        born: 1667,
        death: 1745,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jonathan_Swift_by_Charles_Jervas_detail.jpg/1200px-Jonathan_Swift_by_Charles_Jervas_detail.jpg',
        bio: "Jonathan Swift was an Anglo-Irish satirist, essayist, political pamphleteer, poet and Anglican cleric who became Dean of St Patrick's Cathedral, Dublin, hence his common sobriquet, 'Dean Swift'."
    },
    {
        firstName: 'Hans Christian',
        lastName: 'Andersen',
        born: 1805,
        death: 1875,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/HCA_by_Thora_Hallager_1869.jpg',
        bio: "Hans Christian Andersen was a Danish author. Although a prolific writer of plays, travelogues, novels, and poems, he is best remembered for his literary fairy tales."
    },
    {
        firstName: 'Bob',
        lastName: 'Marley',
        born: 1945,
        death: 1981,
        image: 'https://www.rollingstone.com/wp-content/uploads/2020/01/Bob-Marley-Lead.jpg',
        bio: "Robert Nesta Marley OM was a Jamaican singer, songwriter, and musician. Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska, and rocksteady, as well as his distinctive vocal and songwriting style."
    }
]

const quotes: Quote[] = [
    {
        content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        authorId: 1
    },
    {
        content: 'The way to get started is to quit talking and begin doing.',
        authorId: 2
    },
    {
        content: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        authorId: 3
    },
    {
        content: 'If life were predictable it would cease to be life, and be without flavor',
        authorId: 4
    },
    {
        content: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        authorId: 5
    },
    {
        content: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        authorId: 6
    },
    {
        content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        authorId: 7
    },
    {
        content: "When you reach the end of your rope, tie a knot in it and hang on.",
        authorId: 8
    },
    {
        content: "Always remember that you are absolutely unique. Just like everyone else.",
        authorId: 9
    },
    {
        content: "Don't judge each day by the harvest you reap but by the seeds that you plant. ",
        authorId: 10
    },
    {
        content: "The future belongs to those who believe in the beauty of their dreams.",
        authorId: 4
    },
    {
        content: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        authorId: 11
    },
    {
        content: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        authorId: 12
    },
    {
        content: "It is during our darkest moments that we must focus to see the light.",
        authorId: 13
    },
    {
        content: "Whoever is happy will make others happy too.",
        authorId: 14
    },
    {
        content: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        authorId: 15
    },
    {
        content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        authorId: 7
    },
    {
        content: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        authorId: 16
    },
    {
        content: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        authorId: 17
    },
    {
        content: "Life is either a daring adventure or nothing at all.",
        authorId: 12
    },
    {
        content: "Never let the fear of striking out keep you from playing the game.",
        authorId: 18
    },
    {
        content: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        authorId: 19
    },
    {
        content: "Only a life lived for others is a life worthwhile.",
        authorId: 20
    },
    {
        content: "The purpose of our lives is to be happy.",
        authorId: 21
    },
    {
        content: "You only live once, but if you do it right, once is enough.",
        authorId: 22
    },
    {
        content: "Go confidently in the direction of your dreams! Live the life you've imagined.",
        authorId: 23
    },
    {
        content: "May you live all the days of your life.",
        authorId: 24
    },
    {
        content: "Life itself is the most wonderful fairy tale.",
        authorId: 25
    },
    {
        content: "Love the life you live. Live the life you love.",
        authorId: 26
    }
]

const createAuthors = db.prepare(`
    CREATE TABLE IF NOT EXISTS authors  (
        id INTEGER,
        firstName TEXT NOT NULL,
        lastName TEXT,
        born INTEGER NOT NULL,
        death INTEGER,
        image TEXT NOT NULL,
        bio TEXT,
        PRIMARY KEY (id)
    );
`)

const deleteAuthors = db.prepare(`
    DELETE FROM authors;
`)

const createAuthor = db.prepare(`
    INSERT INTO authors (firstName,lastName,born,death,image,bio) VALUES (?,?,?,?,?,?);
`)

createAuthors.run()
deleteAuthors.run()

for (const author of authors) {
    createAuthor.run(author.firstName, author.lastName, author.born, author.death, author.image, author.bio)
}

const createQuotes = db.prepare(`
    CREATE TABLE IF NOT EXISTS  quotes (
        id INTEGER,
        content TEXT NOT NULL,
        authorId INTEGER NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (authorId) REFERENCES authors(id)
    );
`)

const createQuote = db.prepare(`
    INSERT INTO quotes (content, authorId) VALUES (?,?);
`)

const deleteQuotes = db.prepare(`
    DELETE FROM quotes;
`)

createQuotes.run()
deleteQuotes.run()

for (const quote of quotes) {
    createQuote.run(quote.content, quote.authorId)
}