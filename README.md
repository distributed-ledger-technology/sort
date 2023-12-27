# CULT Sort Module

Sorting Arrays as simple as it gets.  
  
This [deno module](https://deno.land/x/sort) is published at: https://deno.land/x/sort.  


## Simple Usage Example

```ts 
import { SortService, Direction } from "https://deno.land/x/sort/mod.ts"

const testInput = [4, 9, 10, 8, 7]

const actualOutput = SortService.sort(testInput, Direction.DESCENDING)

console.log(actualOutput)
```

## Execute Usage Example
```ts 
deno run https://deno.land/x/sort/usage-example.ts
```

## Advanced Usage Example

```ts 

import { SortService, ISortOptions, Direction } from "https://deno.land/x/sort/mod.ts"

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

## Execute Advanced Usage Example
```ts 
deno run https://deno.land/x/sort/usage-example-advanced.ts
```


You might check the [unit tests](https://github.com/distributed-ledger-technology/sort/blob/master/src/sort-service.spec.ts) to see more usage examples.


## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)
