# Sort

Sorting Arrays as simple as it gets.

Please check the [unit tests](https://deno.land/x/sort/src/sort-service.spec.ts) to see more usage examples.

## Simple Usage Example

```ts 
import { Direction, SortService } from "https://deno.land/x/sort/src/sort-service.ts"

const testInput = [4, 9, 10, 8, 7]

const expectedOutput = [10, 9, 8, 7, 4]

const actualOutput = SortService.sort(testInput, Direction.DESCENDING, [''])

console.log(actualOutput)

```


## Advanced Usage Example

```ts 
import { Direction, SortService } from "https://deno.land/x/sort/src/sort-service.ts"

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

console.log(actualOutput)

```

## Very Advanced Usage Example

```ts 
import { Direction, SortService } from "https://deno.land/x/sort/src/sort-service.ts"

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
            exchangeName: "Binance",
            longRate: 51.36,
        },

        {
            exchangeName: "Bitmex",
            longRate: 51.36,
        },
        {
            exchangeName: "Bybit",
            longRate: 55.36,
        },
    ]

const actualOutput = SortService.sort(testInput, Direction.ASCENDING, ['longRate', 'exchangeName'])

console.log(actualOutput)

```