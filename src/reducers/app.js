export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_GREETING_SUCCESS':

            const greeting = randomGreeting(action.payload)
            return { ...state, greeting: greeting.translation, language: greeting.language, country: greeting.country }


        default:
            return state
    }
}

const randomGreeting = greetings => {
    const selection = greetings[Math.round(Math.random() * greetings.length)]
    return selection
}