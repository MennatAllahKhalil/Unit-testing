import {
  MissingNumber,
  mergeDistinctArrays,
  letterNumber,
  area,
  longestString,
  reverseSentenceWords,
  capitalizeWords,
  calculateExpression,
  getSumOfRandom,
  shuffle,
} from "./index";

test("MissingNumber", () => {
  const result = MissingNumber([1, 2, 4, 5]);
  expect(result).toBe(3);
});

test("mergeDistinctArrays", () => {
  const result = mergeDistinctArrays([1, 4, 3], [4, 5, 6, 7, 3, 5]);
  expect(result).toEqual([1, 4, 3, 5, 6, 7]);
});
test("letterNumber count number of letter in astring ", () => {
  expect(letterNumber("aaAdda", "A")).toBe(4);
});
test("area calculate circle area ", () => {
  expect(area(1)).toBeCloseTo(3.14);
});

test("longestString", () => {
  const result = longestString("abbbcabcdefef");
  expect(result).toBe("bcdef");
});

test("reverseSentenceWords", () => {
  const result = reverseSentenceWords("This sentence is reversed");
  expect(result).toBe("reversed is sentence This");
});

test("capitalizeWords", () => {
  const result = capitalizeWords("capitalize words of this sentence");
  expect(result).toBe("Capitalize Words Of This Sentence");
});

test("calculateExpression", () => {
  const result = calculateExpression("10+10*5");
  expect(result).toBe(60);
});

//With Mock
test("getSumOfRandom", () => {
  const spy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(1);
  const result = getSumOfRandom(3);
  expect(result).toBe(6);
  //remove the side effects
  spy.mockRestore();
});

test("shuffle shuffles an array ", () => {
  const mathSpy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(2 / 3)
    .mockReturnValueOnce(2 / 2)
    .mockReturnValueOnce(1 / 1);
  expect(shuffle([1, 2, 3])).toEqual([3, 1, 2]);
  expect(mathSpy).toHaveBeenCalledTimes(3);
  mathSpy.mockRestore();
});
