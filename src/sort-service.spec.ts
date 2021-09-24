import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { Direction, SortService } from "./sort-service.ts"


Deno.test("should sort an array of objects by a single attribute ascending", () => {

    const testInput = [
        {
            exchangeName: "Bitmex",
            longRate: 53.36,
        },
        {
            exchangeName: "Binance",
            longRate: 51.36,
        },
        {
            exchangeName: "Bybit",
            longRate: 55.36,
        },
    ]

    const expectedOutput = [
        {
            exchangeName: "Binance",
            longRate: 51.36,
        },

        {
            exchangeName: "Bitmex",
            longRate: 53.36,
        },
        {
            exchangeName: "Bybit",
            longRate: 55.36,
        },
    ]

    const actualOutput = SortService.sort(testInput, Direction.ASCENDING, ['longRate'])

    assertEquals(actualOutput.length, expectedOutput.length)
    assertEquals(actualOutput, expectedOutput)

})



Deno.test("should sort an array of objects by a single attribute descending", () => {

    const testInput = [
        {
            exchangeName: "Bitmex",
            longRate: 53.36,
        },
        {
            exchangeName: "Binance",
            longRate: 51.36,
        },
        {
            exchangeName: "Bybit",
            longRate: 55.36,
        },
    ]

    const expectedOutput = [
        {
            exchangeName: "Bybit",
            longRate: 55.36,
        },

        {
            exchangeName: "Bitmex",
            longRate: 53.36,
        },

        {
            exchangeName: "Binance",
            longRate: 51.36,
        },

    ]

    const actualOutput = SortService.sort(testInput, Direction.DESCENDING, ['longRate'])

    assertEquals(actualOutput.length, expectedOutput.length)
    assertEquals(actualOutput, expectedOutput)

})
// Deno.test("should sort an array of objects by multiple attributes ascending", () => {

//     const testInput = [
//         {
//             exchangeName: "Bitmex",
//             longRate: 51.36,
//         },
//         {
//             exchangeName: "Binance",
//             longRate: 51.36,
//         },
//         {
//             exchangeName: "Bybit",
//             longRate: 55.36,
//         },
//     ]

//     const expectedOutput = [
//         {
//             exchangeName: "Binance",
//             longRate: 51.36,
//         },

//         {
//             exchangeName: "Bitmex",
//             longRate: 51.36,
//         },
//         {
//             exchangeName: "Bybit",
//             longRate: 55.36,
//         },
//     ]

//     const actualOutput = SortService.sort(testInput, Direction.ASCENDING, ['longRate'])

//     assertEquals(actualOutput.length, expectedOutput.length)
//     assertEquals(actualOutput, expectedOutput)

// })



Deno.test("should sort an array of objects by multiple attributes descending", () => {

    const testInput = [
        {
            exchangeName: "Bitmex",
            longRate: 51.36,
        },
        {
            exchangeName: "Binance",
            longRate: 51.36,
        },
        {
            exchangeName: "Bybit",
            longRate: 55.36,
        },
    ]

    const expectedOutput = [
        {
            exchangeName: "Bybit",
            longRate: 55.36,
        },

        {
            exchangeName: "Bitmex",
            longRate: 51.36,
        },

        {
            exchangeName: "Binance",
            longRate: 51.36,
        },

    ]

    const actualOutput = SortService.sort(testInput, Direction.DESCENDING, ['longRate'])

    assertEquals(actualOutput.length, expectedOutput.length)
    assertEquals(actualOutput, expectedOutput)

})








Deno.test("should sort an array of numbers ascending", () => {

    const testInput = [4, 9, 10, 8, 7]

    const expectedOutput = [4, 7, 8, 9, 10]

    const actualOutput = SortService.sort(testInput, Direction.ASCENDING, [''])

    assertEquals(actualOutput.length, expectedOutput.length)
    assertEquals(actualOutput, expectedOutput)

})


Deno.test("should sort an array of numbers descending", () => {

    const testInput = [4, 9, 10, 8, 7]

    const expectedOutput = [10, 9, 8, 7, 4]

    const actualOutput = SortService.sort(testInput, Direction.DESCENDING, [''])

    assertEquals(actualOutput.length, expectedOutput.length)
    assertEquals(actualOutput, expectedOutput)

})