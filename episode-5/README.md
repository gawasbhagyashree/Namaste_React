# App.js
<br>
<br>

## [Uses the resObj data to get a list of all the restaurants, filters it based the prop from CuisineBtns component]

### 1. State Declaration**

`const [selectedCuisine, setSelectedCuisine] = useState('ALL')`

### 2. List of All Restaurants

`const listOfAllRestaurants = resObj.restaurants`

This line creates a constant __listOfAllRestaurants__ that references the array of restaurants stored in resObj.restaurants. This array contains all the restaurant objects that will be displayed or filtered.

### 3. Filtering Restaurants
`const filteredRestaurants = selectedCuisine === 'ALL' ? (listOfAllRestaurants) : (listOfAllRestaurants.filter(rest => {
  return (
    rest.info.cuisines.includes(selectedCuisine)
  )
}))`

Conditional (Ternary) Operator: This line uses a ternary operator to determine what value filteredRestaurants should hold:

If selectedCuisine is equal to 'ALL', it assigns filteredRestaurants the value of listOfAllRestaurants. This means all restaurants will be displayed.

If selectedCuisine is not 'ALL', it filters listOfAllRestaurants using the filter() method.

listOfAllRestaurants.filter(...) creates a new array that only includes restaurants for which the condition is true.

The callback function inside filter receives each restaurant object (rest) and checks if selectedCuisine is included in that restaurant's cuisines array.

`rest.info.cuisines.includes(selectedCuisine)
`

 This checks whether the cuisines array of the rest object contains the value of selectedCuisine. If it does, that restaurant is included in the filteredRestaurants array.

***
***
<br>
<br>

# CuisineBtns

#### resObj 
```
resObj.restaurants = [
    {
        info: {
            cuisines: ["Burgers", "American"]
        }
    },
    {
        info: {
            cuisines: ["Italian", "Pasta"]
        }
    },
    {
        info: {
            cuisines: ["Mexican", "Tacos"]
        }
    }
];

```
#### reduce allows to combine or transform the elements of an array into a single value 
#### concat used to combine two arrays into one
<br>
<br>

### 1. const allCuisines iterations:
<br>
Iteration 1:

acc = []

with reduce : restaurant.info.cuisines = ["Burgers", "American"]

acc.concat(["Burgers", "American"]) = ["Burgers", "American"]

<br>
Iteration 2:

acc = ["Burgers", "American"]

with reduce: restaurant.info.cuisines = ["Italian", "Pasta"]

acc.concat(["Italian", "Pasta"]) = ["Burgers", "American", "Italian", "Pasta"]

<br>
Iteration 3:

acc = ["Burgers", "American", "Italian", "Pasta"]

with reduce: restaurant.info.cuisines = ["Mexican", "Tacos"]

acc.concat(["Mexican", "Tacos"]) = ["Burgers", "American", "Italian", "Pasta", "Mexican", "Tacos"]

<br>
Output:
["Burgers", "American", "Italian", "Pasta", "Mexican", "Tacos"]

<br>

### 2. uniqueCuisines 

Goal is to remove the duplicates in allCuisines array.

Used the reduce method on allCuisines which might have duplicates.

For each cuisine in allCuisines, the code checks if it's already in acc using acc.includes(cuisine).
If not, it adds the cuisine to acc using acc.push(cuisine).

### 3. rest of the code is to be updated later