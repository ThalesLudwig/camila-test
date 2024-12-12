import { countOccurrencesOfCharacters, findBiggestAndLowest, formatDate, getIntersection, isABeforeOrAfterB, isEqual, isFutureOrPast, isPalindrome, isValidEmail, mergeObject, reverseString, sortArrayTo, toPascalCase } from ".";

describe('foo', () => {
    it('should reverse the string', () => {
        const value = 'helloworld';
        expect(reverseString(value)).toBe('dlrowolleh');
    });

    it('should check if string is a palindrome', () => {
        expect(isPalindrome('hannah')).toBe(true);
        expect(isPalindrome('thales')).toBe(false);
    });

    it('should count the occurrences of a character in a string', () => {
        const value = 'helloworld';
        const characterToCount = 'l';
        expect(countOccurrencesOfCharacters(value, characterToCount)).toBe(3);
    });

    it('should convert a string to PascalCase', () => {
        const value = 'helloworld';
        expect(toPascalCase(value)).toBe('HelloWorld');
    });

    it('should find the biggest and lowest number in the array', () => {
        const values = [35, 2, 13, 4, 59];
        expect(findBiggestAndLowest(values)).toEqual([59, 2]);
    });

    it('should sort an array of numbers in ascending or descending order', () => {
        const values = [35, 2, 13, 4, 59];
        expect(sortArrayTo('asc', values)).toEqual([2, 4, 13, 35, 59]);
    });

    it('should find the intersection between two arrays of strings', () => {
        const valuesA = ['a', 'b', 'c'];
        const valuesB = ['b', 'c', 'd'];
        expect(getIntersection(valuesA, valuesB)).toEqual(['b', 'c']);
    });

    it('should merge two objects', () => {
        const objectA = { a: 1, b: 2 };
        const objectB = { c: 3, d: 4 };
        expect(mergeObject(objectA, objectB)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });

    it('should check if two objects are equal', () => {
        const objectA = { a: 1, b: 2 };
        const objectB = { a: 1, b: 2 };
        expect(isEqual(objectA, objectB)).toBe(true);
    });

    it('should format a date to the DD/MM/YYYY format', () => {
        const date = new Date('2021-12-26');
        expect(formatDate(date)).toBe('26/12/2021');
    });

    it('should check if date A is after of before date B', () => {
        const dateA = new Date('2021-12-26');
        const dateB = new Date('2021-12-25');
        expect(isABeforeOrAfterB(dateA, dateB)).toBe('after');
    });

    it('should check if date A is in the future or in the past from date B', () => {
        const date = new Date('2021-12-26');
        expect(isFutureOrPast(date)).toBe('past');
    });

    it('should verify if email is correctly formatted', () => {
        expect(isValidEmail('foo@bar')).toBe(false);
        expect(isValidEmail('foobar@mail.com')).toBe(true);
    });
});