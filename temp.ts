// import { SortService, ISortOptions, Direction } from "https://deno.land/x/sort@v1.1.0/mod.ts"
import { SortService, ISortOptions, Direction } from "./mod.ts"

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

const sortOptions: ISortOptions[] = [{ fieldName: 'longRate', direction: Direction.ASCENDING }, { fieldName: 'exchangeName', direction: Direction.DESCENDING }]
const actualOutput = SortService.sort(testInput, sortOptions)


console.log(actualOutput)