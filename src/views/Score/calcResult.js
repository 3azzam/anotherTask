export const calcPieResult = (answers) => {
    let correct = 0
    let incorrect = 0 
    let skipped = 0
    let timeTaken = 0
    answers.forEach(question => {
        if (question.answer === null) {
            skipped = skipped + 1;
        }
        else if (question.answer === question.correctAnswer) {
            correct = correct + 1
        }
        else {
            incorrect++
        }
        timeTaken += question.time
    })
    const labels = ['correct', 'false', 'skipped']
    const series = [correct, incorrect, skipped]
    return { chart: { labels, series }, score: { timeTaken, correctAnswers: correct } }
}