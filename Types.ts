export type Author = {

    firstName: string
    lastName: string
    born: number
    death?: number
    image: string
    bio?: string
}

export type Quote = {

    content: string
    authorId: number
}