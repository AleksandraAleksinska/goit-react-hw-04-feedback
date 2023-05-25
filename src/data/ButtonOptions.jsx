import { nanoid } from "nanoid"

const options = [
    {
        id: nanoid(),
        name: 'Good',
        type: 'good'
    },

    {
        id: nanoid(),
        name: 'Neutral',
        type: 'neutral'
    },

    {
        id: nanoid(),
        name: 'Bad',
        type: 'bad'
    }
]

export default options;