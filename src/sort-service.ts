// const compareName = function (object1: any, object2: any, attributeName: string) {
//     if (object1[attributeName] > object2[attributeName]) { return -1 }
//     if (object1[attributeName] < object2[attributeName]) { return 1 }
//     return 0
// }

export enum Direction {
    ASCENDING,
    DESCENDING
}

export class SortService {

    private static attributeNameToBeSortedBy: string

    public static sort(arrayToBeSorted: any[], direction: Direction, toBeSortedBy: string[]) {

        if (toBeSortedBy !== undefined) {
            SortService.attributeNameToBeSortedBy = toBeSortedBy[0]
        }

        let sortedArray

        if (direction === Direction.ASCENDING) {

            sortedArray = arrayToBeSorted.sort(SortService.compareAscending)

        } else if (direction === Direction.DESCENDING) {

            sortedArray = arrayToBeSorted.sort(this.compareDescending)

        } else {

            throw new Error("strange direction")

        }

        return sortedArray

    }

    public static compareAscending(object1: any, object2: any) {

        if (SortService.attributeNameToBeSortedBy === '') {

            if (object1 < object2) { return -1 }
            if (object1 > object2) { return 1 }

        } else {

            if (object1[SortService.attributeNameToBeSortedBy] < object2[SortService.attributeNameToBeSortedBy]) { return -1 }
            if (object1[SortService.attributeNameToBeSortedBy] > object2[SortService.attributeNameToBeSortedBy]) { return 1 }

        }

        return 0

    }

    public static compareDescending(object1: any, object2: any) {

        if (SortService.attributeNameToBeSortedBy === '') {

            if (object1 > object2) { return -1 }
            if (object1 < object2) { return 1 }

        } else {

            if (object1[SortService.attributeNameToBeSortedBy] > object2[SortService.attributeNameToBeSortedBy]) { return -1 }
            if (object1[SortService.attributeNameToBeSortedBy] < object2[SortService.attributeNameToBeSortedBy]) { return 1 }

        }

        return 0

    }

}