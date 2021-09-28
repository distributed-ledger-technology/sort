# Sort

Sorting Arrays as simple as it gets.  
  
This module is published at: https://deno.land/x/sort.  

Please check the [unit tests](https://deno.land/x/sort/src/sort-service.spec.ts) to see more usage examples.

## Simple Usage Example

```ts 
import { Direction, SortService } from "https://deno.land/x/sort@v1.0.1/mod.ts"

const testInput = [4, 9, 10, 8, 7]

const actualOutput = SortService.sort(testInput, Direction.DESCENDING, [])

console.log(actualOutput)

```


## Advanced Usage Example - Sort Array By Single Attribute

```ts 
import { Direction, SortService } from "https://deno.land/x/sort@v1.0.1/mod.ts"

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

const actualOutput = SortService.sort(testInput, Direction.ASCENDING, ['longRate'])

console.log(actualOutput)

```

## Advanced Usage Example - Sort Array By Multiple Attributes

```ts 
import { Direction, SortService } from "https://deno.land/x/sort@v1.0.1/mod.ts"

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

const actualOutput = SortService.sort(testInput, Direction.ASCENDING, ['longRate', 'exchangeName'])

console.log(actualOutput)

```