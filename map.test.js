describe("js function - map", () => {
    function testMe(data) { return data.map((a) => a + 1) }

    it("testMe returns correctly", () => {
        let expected = [3, 9, 19, 33];
        let testData = [2, 8, 18, 32];
        let result = testMe(testData)
        expect(result).toEqual(expected)
    })
})