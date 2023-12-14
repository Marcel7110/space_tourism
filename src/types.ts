export type Page = 1 | 2 | 3 | 4

export type Destinations = {
    name: string,
    images: {
        png: string,
        webp: string
    },
    description: string,
    distance: string,
    travel: string
}

export type Technology = {
    name: string
    images: {
        portrait: string
        landscape: string
    }
    description: string
}

export type Crew = {
    name: string
    images: {
        png: string
        webp: string
    }
    role: string
    bio: string
}