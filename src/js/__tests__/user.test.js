import heroes from "../user";

test("sorted from highest to lowest", () => {
  const received = heroes([
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ]);

  const expected = heroes([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);

  expect(received).toEqual(expected);
});

test("sorted from highest to lowest", () => {
  const received = heroes([
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ]);

  const expected = heroes([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);

  expect(received).not.toBe(expected);
});
