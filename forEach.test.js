describe("js function - forEach", () => {
    function testMe(data,) {
        const testData = [];
        data.forEach((item) => {
            testData.push(item + 1)
        })
        return testData
    }

    it("testMe returns correctly", () => {
        let expected = [96, 26, 21, 21, 21];
        let testData = [95, 25, 20, 20, 20];
        let result = testMe(testData, testData);
        expect(result).toEqual(expected)
    })
})