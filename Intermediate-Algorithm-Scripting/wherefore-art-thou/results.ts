import whatIsInAName from "./ex";

const whatIsInANameResult1 = whatIsInAName(
  [ 
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet"},
  ], // param 1
  { last: "Capulet" } // param 2
);

const whatIsInANameResult2 = whatIsInAName(
  [
    { "apple": 1 },
    { "apple": 1 },
    { "apple": 1, "bat": 2 }
  ], 
  { "apple": 1 }
);

const whatIsInANameResult3 = whatIsInAName(
  [
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 },
    { "bat":2 }
  ],
  { "apple": 1, "bat": 2 }
);

const whatIsInANameResult4 = whatIsInAName(
  [
    {"a": 1, "b": 2, "c": 3}
  ],
  {"a": 1, "b": 9999, "c": 3}
);

export {
  whatIsInANameResult1,
  whatIsInANameResult2,
  whatIsInANameResult3,
  whatIsInANameResult4
}