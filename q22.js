// Define an array of country objects
var countries = [
    {
        name: "France",
        capital: "Paris",
        population: 67010000,
        landmark: "Eiffel Tower"
    },
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331002651,
        landmark: "Statue of Liberty"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1444216107,
        landmark: "Great Wall of China"
    }
];
// Try to access an index that is out of bounds
console.log(countries[3]); // This will produce an index error because there is no element at index 3
