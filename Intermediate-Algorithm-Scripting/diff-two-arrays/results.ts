import diffArray from "./ex";

const diffArrResult1 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

const diffArrResult2 = diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

const diffArrResult3 = diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

const diffArrResult4 = diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]);

export { diffArrResult1, diffArrResult2, diffArrResult3, diffArrResult4 };