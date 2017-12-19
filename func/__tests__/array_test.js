import assert from "assert"

import {
    arrayMax,
    arrayMin
} from "../array"

describe('Array', function(){

    describe('#arrayMax()', () => {
        it('should return max value of the array', () => {
            assert(arrayMax([1,2,3]) === 3);
        })
    });
    describe('#arrayMin()', () => {
        it('should return min value of the array', () => {
            assert(arrayMin([1,2,3]) === 1);
        })
    });
});