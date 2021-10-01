
export enum Direction {
    ASCENDING,
    DESCENDING
}

export interface ISortOptions {
    fieldName: string
    direction: Direction
}

export class SortService {

    private static options: ISortOptions[] | Direction = []

    public static sort(arrayToBeSorted: any[], options: ISortOptions[] | Direction) {

        SortService.options = options

        return arrayToBeSorted.sort(SortService.compare)

    }


    public static compare(object1: any, object2: any) {

        if (SortService.options === Direction.ASCENDING) {

            if (object1 < object2) { return -1 }
            if (object1 > object2) { return 1 }

        } else if (SortService.options === Direction.DESCENDING) {

            if (object1 > object2) { return -1 }
            if (object1 < object2) { return 1 }

        } else {

            for (const sortByEntry of SortService.options as ISortOptions[]) {

                if (object1[sortByEntry.fieldName] === object2[sortByEntry.fieldName]) { continue }

                if (sortByEntry.direction === Direction.ASCENDING) {

                    if (object1[sortByEntry.fieldName] < object2[sortByEntry.fieldName]) { return -1 }
                    if (object1[sortByEntry.fieldName] > object2[sortByEntry.fieldName]) { return 1 }

                } else if (sortByEntry.direction === Direction.DESCENDING) {

                    if (object1[sortByEntry.fieldName] > object2[sortByEntry.fieldName]) { return -1 }
                    if (object1[sortByEntry.fieldName] < object2[sortByEntry.fieldName]) { return 1 }

                }
            }
        }

        return 0

    }

}