//truncate these strings to 250 characters and add ellipses if they are longer than that
/*const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + "...";
    }
  
    desc.innerText = content;
    console.log(content);
  }
  //once the page loads, you'll see that the description of each park is less than or equal to 250 characters, plus the ellipses
 */
  const descriptions = document.querySelectorAll(".description-display");
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  }

  /*
  //bold any rating value that is greater than 4.7. You would have to select all rating values
  const ratings = document.querySelectorAll(".rating-display .value");
  // iterate through the list and get each actual rating value using the innerText property.
  //This returns a string value, but you want to work with the rating as a number. So, use the parseFloat() method to convert a string into a floating point number
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    //check the condition. If ratingValue > 4.7, then set the fontWeight style to bold
    if (ratingValue > 4.7) {
        rating.style.fontWeight = "bold";
        rating.style.color = "#3ba17c";
      }
  }
  */

  //When the rating is greater than 4.7, you want to replace the value class with the high-rating class
  const ratings = document.querySelectorAll(".rating-display .value");
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

  //Create a new element with text
  //First, select the parks on the page using the park class as a selector
  const parks = document.querySelectorAll(".park-display");
  //Then, get the number of parks using the length property of the list:
  const numberParks = parks.length;
  //Next, create a new element. In this case, you should use a <div>
  const newElement = document.createElement("div");
  //You have access to all the properties and methods that were used above to modify an element. 
  //You can set the text of this element with the innerText property, like this:
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");
  //Finally, to add the new element to the DOM, select the <header> element and use the appendChild() method to add the new element to the <header>
  const header = document.querySelector("header");
  header.appendChild(newElement);


  //Removing DOM elements
  
  // Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);