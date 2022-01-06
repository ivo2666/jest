describe("js function - filter", () => {
    function testMe(data) { return data.filter(word => word.length > 8) }

    it("testMe returns correctly", () => {
        let expected = ['exuberant', 'destruction'];
        let testData = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        let result = testMe(testData)
        expect(result).toEqual(expected)
    })
})