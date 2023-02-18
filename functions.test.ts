const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let result = shuffleArray([1,2,3])
    test ("ShuffleArray return an arr of the same length", () => {
        expect(result.length).toEqual(3);
    })
    test("ShuffleArr return a shuffled array", () => {
        expect(result.includes(1)).toBe(true);
        expect(result.includes(2)).toBe(true);
        expect(result.includes(3)).toBe(true);
    })
})