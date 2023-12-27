import { SortService, Direction } from "https://deno.land/x/sort/mod.ts"

const testInput = [4, 9, 10, 8, 7]

const actualOutput = SortService.sort(testInput, Direction.DESCENDING)

console.log(actualOutput)