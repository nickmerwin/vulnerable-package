function safeFunction() {
    console.log('safe')
}

function vulnerableFunction() {
    console.log('vulnerable')
}

export {
    safeFunction,
    vulnerableFunction
};