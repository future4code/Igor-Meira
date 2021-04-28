export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/lSignUp')
}

export const goToFeed = (history) => {
    history.push('/')
}

export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}