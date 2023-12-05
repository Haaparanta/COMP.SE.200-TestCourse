import toNumber from "../src/toNumber";

describe("toNumber", () => {
  test("returns number as is", () => {
    expect(toNumber(84125125)).toEqual(84125125);
    expect(toNumber(+10692445)).toEqual(10692445);
  });

  test("returns NaN when undefined is passed", () => {
    expect(toNumber(undefined)).toEqual(NaN);
  });

  test("returns NaN when object is passed", () => {
    // Object(15) converts to number automatically.
    expect(toNumber({ a: "12" })).toEqual(NaN);
    expect(toNumber([12, 15])).toEqual(NaN);
    expect(toNumber([Math.random])).toEqual(NaN);
  });

  test("returns NaN when symbol is passed", () => {
    expect(toNumber(Symbol(23452341))).toEqual(NaN);
  });

  test("returns NaN when non-numeric string is passed", () => {
    expect(toNumber("Testing")).toEqual(NaN);
  });

  test("returns 0/1 when boolean type is passed", () => {
    expect(toNumber(true)).toEqual(1);
    expect(toNumber(false)).toEqual(0);
  });

  test("recognizes strings with numbers of different bases", () => {
    expect(toNumber("0x1000afe1")).toEqual(268480481);
    expect(toNumber("0b010111011")).toEqual(187);
    expect(toNumber("0o12516257124")).toEqual(1429823060);
    expect(toNumber("728124124")).toEqual(728124124);
  });

  test("returns NaN when bad format hexadecimal is passed", () => {
    expect(toNumber("+0xaaaa")).toEqual(NaN);
  });

  test("recognizes strings with leading and or following whitespace", () => {
    expect(toNumber("   \n 124152")).toEqual(124152);
    expect(toNumber("   \t 124124  \t  ")).toEqual(124124);
  });

  // So... in js +null === 0.
  // Will it affect our e-commerce? Unsure.
  test("returns NaN when null is passed", () => {
    expect(toNumber(null)).toEqual(NaN);
  });

  test("returns argument value when bigint type is passed", () => {
    expect(toNumber(12n)).toEqual(12n);
  });
});
