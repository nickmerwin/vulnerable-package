function safeFunction() {
    console.log('safe')
}

function vulnerableFunction() {
    console.log('vulnerable')
}

function unusedVulnerableFunction() {
    console.log('vulnerable but unused')
}

module.exports = {
    safeFunction,
    vulnerableFunction,
    unusedVulnerableFunction
};