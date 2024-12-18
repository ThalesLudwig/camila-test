import { areElementsUnique, capitalizeWords, containsSubstring, countVowels, countWordFrequency, factorial, generateRange, getUniqueValues, isPrime, snakeToCamelCase, sumAndProduct } from "./class2";

describe('class-2', () => {
    it('should capitalize the first letter of each word in a string', () => {
        const value = 'hello world';
        expect(capitalizeWords(value)).toBe('Hello World');
    });

    it('should count the number of vowels in a string', () => {
        const value = 'helloworld';
        expect(countVowels(value)).toBe(3);
    });

    it('should find the sum and product of an array of numbers', () => {
        const values = [1, 2, 3, 4];
        expect(sumAndProduct(values)).toEqual({ sum: 10, product: 24 });
    });

    it('should check if a string contains another string', () => {
        const string = 'helloworld';
        const substring = 'world';
        expect(containsSubstring(string, substring)).toBe(true);
    });

    it('should return the unique values from two arrays', () => {
        const arrayA = [1, 2, 3];
        const arrayB = [2, 3, 4];
        expect(getUniqueValues(arrayA, arrayB)).toEqual([1, 4]);
    });

    it('should convert a snake_case string to camelCase', () => {
        const value = 'hello_world';
        expect(snakeToCamelCase(value)).toBe('helloWorld');
    });

    it('should determine if a number is prime', () => {
        expect(isPrime(7)).toBe(true);
        expect(isPrime(10)).toBe(false);
    });

    it('should check if all elements in an array are unique', () => {
        const values = [1, 2, 3, 4, 5];
        expect(areElementsUnique(values)).toBe(true);
        const duplicateValues = [1, 2, 3, 3, 5];
        expect(areElementsUnique(duplicateValues)).toBe(false);
    });

    it('should calculate the factorial of a number', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
    });

    it('should count the frequency of words in a sentence', () => {
        const sentence = 'the cat and the dog';
        expect(countWordFrequency(sentence)).toEqual({ the: 2, cat: 1, and: 1, dog: 1 });
    });

    it('should generate a range of numbers between start and end', () => {
        expect(generateRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(generateRange(5, 1)).toEqual([5, 4, 3, 2, 1]);
    });
});