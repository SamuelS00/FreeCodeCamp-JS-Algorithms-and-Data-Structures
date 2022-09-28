import destroyer from "./ex";

const seekAndDestroyResult1 = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

const seekAndDestroyResult2 = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

const seekAndDestroyResult3 = destroyer([3, 5, 1, 2, 2], 2, 3, 5);

const seekAndDestroyResult4 = destroyer([2, 3, 2, 3], 2, 3);

const seekAndDestroyResult5 = destroyer<string | number>(["tree", "hamburger", 53], "tree", 53);

const seekAndDestroyResult6 = destroyer<string | number>(
    ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
    "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");

export {
  seekAndDestroyResult1,
  seekAndDestroyResult2,
  seekAndDestroyResult3,
  seekAndDestroyResult4,
  seekAndDestroyResult5,
  seekAndDestroyResult6
}