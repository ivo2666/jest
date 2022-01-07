const transformData = (inputData) => {
    let data = [];
    const typeChekFunc = x => {
        switch (typeof x) {
            case "string":
                data = [...data, x]
                break
            case "object":
                Object.values(x).forEach(typeChekFunc)
                break
            default:
                x.forEach(item => typeChekFunc(item))
                break
        }
    }
    inputData.forEach(typeChekFunc)
    return data
}

describe("collecting strings from an array of objects", () => {

    it("array of objects to strings", () => {
        let inputData = [{ field1: "test1" }, { field1: "test2" }, { field1: "test3" }]

        let result = transformData(inputData);

        let expectedData = ["test1", "test2", "test3"];

        expect(result).toEqual(expectedData)
    })

    it("2 dimensional array of objects to strings", () => {
        let inputData = [[{ field1: "test1" }, { field1: "test2" }], [{ field1: "test3" }, { field1: "test4" }], [{ field1: "test5" }, { field1: "test6" }]]

        let result = transformData(inputData);

        let expectedData = ["test1", "test2", "test3", "test4", "test5", "test6"];

        expect(result).toEqual(expectedData)
    })


    it("2 dimensional array of nested objects to strings", () => {
        let inputData = [[
            { field1: { field2: "test1" } },
            { field1: { field2: "test2" } }
        ], [
            { field1: { field2: "test3" } },
            { field1: { field2: "test4" } }
        ], [
            { field1: { field2: "test5" } },
            { field1: { field2: "test6" } }
        ]
        ]

        let result = transformData(inputData);

        let expectedData = ["test1", "test2", "test3", "test4", "test5", "test6"];

        expect(result).toEqual(expectedData)
    })

    it("2 dimensional array of different variants of nested objects to strings", () => {
        let inputData = [[
            { field1: { field2: "test1" } },
            { field1: "test2" }
        ], [
            { field1: "test3" },
            { field1: { field2: "test4" } }
        ], [
            { field1: { field2: "test5" } },
            { field1: { field2: { field3: "test6" } } }
        ]
        ]

        let result = transformData(inputData);

        let expectedData = ["test1", "test2", "test3", "test4", "test5", "test6"];

        expect(result).toEqual(expectedData)
    })

    it("mixed array of different variants of nested objects and arrays to strings", () => {
        let inputData = [
            { field1: { field2: "test1" } },
            { field1: "test2" },
            [
                { field1: "test3" },
                { field1: { field2: "test4" } }
            ], [
                { field1: { field2: "test5" } },
                { field1: { field2: { field3: "test6" } } }
            ], {
                field1: "test7"
            }
        ]

        let result = transformData(inputData);

        let expectedData = ["test1", "test2", "test3", "test4", "test5", "test6", "test7"];

        expect(result).toEqual(expectedData)
    })
})

describe("testing strings for matches", () => {
    it("index of", () => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

        let inputData = ["aa bb", "bb", "cc aa"];

        const transformData = (inputData) => {
            const data = [...inputData]
            const index = inputData.indexOf('bb')
            data.splice(index, 1)
            return data
        }

        let result = transformData(inputData);
        let expected = ["aa bb", "cc aa"];

        expect(result).toEqual(expected);
    })

    it("regex - test", () => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
        let inputData = ["aa bb", "bb", "cc aa"];

        const transformData = (inputData) => {
            const data = []
            const patern = /aa/
            inputData.forEach(item => patern.test(item) && data.push(item))
            return data
        }

        let result = transformData(inputData);
        let expected = ["aa bb", "cc aa"];

        expect(result).toEqual(expected);
    })


    it("regex - match", () => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
        let inputData = ["aa bb", "bb", "cc aa"];
        const transformData = (inputData) => {
            const patern = /aa/
            const data = [];
            inputData.forEach(item => item.match(patern) && data.push(item))
            return data
        }

        let result = transformData(inputData);
        let expected = ["aa bb", "cc aa"];

        expect(result).toEqual(expected);
    })
})

describe("string manipulation", () => {
    it("split", () => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        let inputData = ["aa bb", "bb", "cc aa"];

        const transformData = (inputData) => {
            return inputData.map(item => item.split(' '))
        }
        
        let result = transformData(inputData);

        let expected = [["aa", "bb"], ["bb"], ["cc", "aa"]];

        expect(result).toEqual(expected);
    });

    it("replace", () => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        let inputData = ["aa bb", "bb aa", "cc aa", "aa dd aa"];

        const transformData = (inputData) => {
            return inputData.map(item => item.replace(/[a ]/g, ""))
        }

        let result = transformData(inputData);

        let expected = ["bb", "bb", "cc", "dd"];

        expect(result).toEqual(expected);
    })
})

describe("accumulating data into objects", () => {
    it("works", () => {
        let inputData = ["test 1", "diff 1", "test 2", "diff 2", "diff 3", "diff 4", "test 3"];

        function transformData(inputData) { 
            const data = [{
                test: inputData.filter(item => item.includes("test")),
                diff: inputData.filter(item => item.includes("diff"))
            }]
            return data
        };

        let result = transformData(inputData);

        let expected = [
            {
                test: ["test 1", "test 2", "test 3"],
                diff: ["diff 1", "diff 2", "diff 3", "diff 4"]
            }
        ];
        expect(result).toEqual(expected)
    })
})