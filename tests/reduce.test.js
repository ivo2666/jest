describe("js function - reduce", () => {
    function testMe(data) { return data.reduce((a, c) => a - c) }

    it("testMe returns correctly", () => {
        let expected = 10;
        let testData = [95, 25, 20, 20, 20];
        let result = testMe(testData)
        expect(result).toBe(expected)
    })
})