import {stringToColorObject, splitSpace, toColorObject, arrayToColorObject, toPropertyObject} from "../../../src/utils/property";

/* eslint-disable */

describe("property Test", function() {
    describe("test color string", function() {
        it("should check rgb type", ()=> {
            const rgb1 = stringToColorObject("rgb(1, 2, 3)");
            const rgb2 = stringToColorObject("rgb( 1, 2, 3)");
            const rgb3 = stringToColorObject("rgb(1,2,3)");
            const rgb4 = stringToColorObject("rgb(1, 2, 3 )");
            const rgb5 = stringToColorObject("rgb( 1 , 2 , 3 )");

            expect(rgb1.toValue()).to.be.equal("rgba(1,2,3,1)");
            expect(rgb2.toValue()).to.be.equal("rgba(1,2,3,1)");
            expect(rgb3.toValue()).to.be.equal("rgba(1,2,3,1)");
            expect(rgb4.toValue()).to.be.equal("rgba(1,2,3,1)");
            expect(rgb5.toValue()).to.be.equal("rgba(1,2,3,1)");
        })
        it("should check hex type", ()=> {
            const rgb1 = stringToColorObject("#000");
            const rgb2 = stringToColorObject("#00ff00");
            const rgb3 = stringToColorObject("#00ff0033");

            expect(rgb1.toValue()).to.be.equal("rgba(0,0,0,1)");
            expect(rgb2.toValue()).to.be.equal("rgba(0,255,0,1)");
            expect(rgb3.toValue()).to.be.equal("rgba(0,255,0,0.2)");
        })
    });
    describe("test methods", function () {
        it ("should check 'splitSpace' method", () => {
            // Given
            // When
            const arr = splitSpace("a b c d e f g");
            const arr2 = splitSpace(" 'a,b' c 'd,e' f g ");
            const arr3 = splitSpace(" a    b    c  d ");
            const arr4 = splitSpace("");
            const arr5 = splitSpace("   ");
            const arr6 = splitSpace(" 1  2 ");

            expect(arr).to.be.deep.equals(["a", "b", "c", "d", "e", "f", "g"]);
            expect(arr2).to.be.deep.equals(["'a,b'", "c", "'d,e'", "f", "g"]);
            expect(arr4).to.be.deep.equals([]);
            expect(arr5).to.be.deep.equals([]);
            expect(arr6).to.be.deep.equals(["1", "2"]);
        });
        it (`should check 'arrayToColorObject' method`, () => {
            // Given
            // When
            const arr = arrayToColorObject([0, 0, 0]);
            const arr2 = arrayToColorObject([0, 0, 0, 0.5]);

            expect(arr.toValue()).to.be.equals("rgba(0,0,0,1)");
            expect(arr.model).to.be.equals("rgba");
            expect(arr.type).to.be.equals("color");
            expect(arr2.toValue()).to.be.equals("rgba(0,0,0,0.5)");
            expect(arr2.model).to.be.equals("rgba");
            expect(arr2.type).to.be.equals("color");
        });
        it (`should check 'toColorObject' method`, () => {
            // Given
            // When
            const arr = toColorObject([0, 0, 0]);
            const arr2 = toColorObject([0, 0, 0, 0.5]);
            
            expect(arr.toValue()).to.be.equals("rgba(0,0,0,1)");
            expect(arr.model).to.be.equals("rgba");
            expect(arr.type).to.be.equals("color");
            expect(arr2.toValue()).to.be.equals("rgba(0,0,0,0.5)");
            expect(arr2.model).to.be.equals("rgba");
            expect(arr2.type).to.be.equals("color");
        });
        it (`should check 'toPropertyObject' method`, () => {
            const obj = toPropertyObject([0, 0, 0]);
            const obj2 = toColorObject("hsl(0, 0.4, 0.5)");
            const obj3 = toColorObject("hsla(0, 40%, 50%, 0.4)");

            expect(obj.toValue()).to.be.equals("0,0,0");
            expect(obj.type).to.be.equals("array");
            expect(obj2.toValue()).to.be.equals("rgba(179,77,77,1)");
            expect(obj3.toValue()).to.be.equals("rgba(179,77,77,0.4)");
        });
    });
});