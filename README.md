# Sort

Sorting Arrays as simple as it gets.  
  
This module is published at: https://deno.land/x/sort.  

## Simple Usage Example

```ts 

import { SortService, Direction } from "https://deno.land/x/sort@v1.1.0/mod.ts"

const testInput = [4, 9, 10, 8, 7]

const actualOutput = SortService.sort(testInput, Direction.DESCENDING)

console.log(actualOutput)

```


## Advanced Usage Example

```ts 

import { SortService, ISortOptions, Direction } from "https://deno.land/x/sort@v1.1.0/mod.ts"

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

const sortOptions: ISortOptions[] = [
    { fieldName: 'longRate', direction: Direction.ASCENDING }, 
    { fieldName: 'exchangeName', direction: Direction.DESCENDING }
]

const actualOutput = SortService.sort(testInput, sortOptions)


console.log(actualOutput)

```


Please check the [unit tests](https://deno.land/x/sort/src/sort-service.spec.ts) to see more usage examples.