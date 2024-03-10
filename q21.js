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
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1380004385,
        landmark: "Taj Mahal"
    },
    {
        name: "Australia",
        capital: "Canberra",
        population: 25499884,
        landmark: "Sydney Opera House"
    }
];
// Print information about each country
console.log("Information about Different Countries:");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("\nName:", country.name);
    console.log("Capital:", country.capital);
    console.log("Population:", country.population);
    console.log("Notable Landmark:", country.landmark);
}
