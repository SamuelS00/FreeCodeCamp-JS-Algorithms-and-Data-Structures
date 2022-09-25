import truthCheck from "./ex"

const truthCheckResult1 = truthCheck(
    [
      {name: "Quincy", role: "Founder", isBot: false},
      {name: "Naomi", role: "", isBot: false},
      {name: "Camperbot", role: "Bot", isBot: true}
    ], "isBot");

const truthCheckResult2 = truthCheck(
    [
      {name: "Quincy", role: "Founder", isBot: false}, 
      {name: "Naomi", role: "", isBot: false},
      {name: "Camperbot", role: "Bot", isBot: true}
    ], "name");

const truthCheckResult3 = truthCheck(
    [
      {name: "Quincy", role: "Founder", isBot: false},
      {name: "Naomi", role: "", isBot: false},
      {name: "Camperbot", role: "Bot", isBot: true}
    ], "role");

const truthCheckResult4 = truthCheck(
    [
      {name: "Pikachu", number: 25, caught: 3},
      {name: "Togepi", number: 175, caught: 1}
    ], "number");

const truthCheckResult5 = truthCheck(
    [
      {name: "Pikachu", number: 25, caught: 3},
      {name: "Togepi", number: 175, caught: 1},
      {name: "MissingNo", number: NaN, caught: 0}
    ], "caught");

const truthCheckResult6 = truthCheck(
    [
      {name: "Pikachu", number: 25, caught: 3},
      {name: "Togepi", number: 175, caught: 1},
      {name: "MissingNo", number: NaN, caught: 0}
    ], "number");

const truthCheckResult7 = truthCheck(
  [
    {name: "Quincy", username: "QuincyLarson"},
    {name: "Naomi", username: "nhcarrigan"},
    {name: "Camperbot"}
  ], "username");

const truthCheckResult8 = truthCheck(
  [
    {name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]},
    {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}
  ], "users");

const truthCheckResult9 = truthCheck(
  [
    {id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}},
    {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}},
    {id: null, data: {}}
  ], "data");

const truthCheckResult10 = truthCheck(
  [
    {id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}},
    {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}},
    {id: null, data: {}}
  ], "id");

export {
  truthCheckResult1,
  truthCheckResult2,
  truthCheckResult3,
  truthCheckResult4,
  truthCheckResult5,
  truthCheckResult6,
  truthCheckResult7,
  truthCheckResult8,
  truthCheckResult9,
  truthCheckResult10,
};