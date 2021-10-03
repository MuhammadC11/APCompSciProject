import { DOMSelectors } from "./DOM";
console.log("Connected");

fetch(
  "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&sortBy=Metacritic&pageSize=30&pageNumber=1"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let searchParamsDay = DOMSelectors.searchAreaDay.value;
    let searchParamsMonth = DOMSelectors.searchAreaMonth.value;
    console.log(searchParamsMonth);
    console.log(searchParamsDay);

    if (
      (DOMSelectors.searchAreaDay.value === "",
      DOMSelectors.searchAreaMonth.value === "")
    ) {
      alert("Please Input Something To Get Your Desired Results");
      return;
    }
    const searchQuery = async function () {
      DOMSelectors.events.innerHTML = "";
      try {
        const response = await fetch(
          `https://byabbe.se/on-this-day/${searchParamsMonth}/${searchParamsDay}/events.json`
        );

        const data = await response.json();
        console.log(data.events);
        if (data.length === 0) {
          alert("Whoops, looks like we couldn't find anything!");
        }
        data.events.forEach((history) => {
          DOMSelectors.events.insertAdjacentHTML(
            "beforeend",
            `<ul id="events-header">
            This day in ${history.year}, 
            <li class="event">
            ${history.description}
            </li>
        </ul>`
          );
        });
        console.log(data);
      } catch (error) {
        console.log(error);
        alert("Oops, something bad happened");
      }
    };

    switch (DOMSelectors.searchAreaMonth.value) {
      case "January":
        searchParamsMonth = "1";
        break;
      case "February":
        searchParamsMonth = "2";
        break;
      case "March":
        searchParamsMonth = "3";
        break;
      case "April":
        searchParamsMonth = "4";
        break;
      case "May":
        searchParamsMonth = "5";
        break;
      case "June":
        searchParamsMonth = "6";
        break;
      case "July":
        searchParamsMonth = "7";
        break;
      case "August":
        searchParamsMonth = "8";
        break;
      case "September":
        searchParamsMonth = "9";
        break;
      case "October":
        searchParamsMonth = "10";
        break;
      case "November":
        searchParamsMonth = "11";
        break;
      case "December":
        searchParamsMonth = "12";
        break;
    }
    switch (DOMSelectors.searchAreaMonth.value) {
      case "january":
        searchParamsMonth = "1";
        break;
      case ("February", "february"):
        searchParamsMonth = "2";
        break;
      case ("March", "march"):
        searchParamsMonth = "3";
        break;
      case ("April", "april"):
        searchParamsMonth = "4";
        break;
      case ("May", "may"):
        searchParamsMonth = "5";
        break;
      case ("June", "june"):
        searchParamsMonth = "6";
        break;
      case ("July", "july"):
        searchParamsMonth = "7";
        break;
      case ("August", "august"):
        searchParamsMonth = "8";
        break;
      case ("September", "september"):
        searchParamsMonth = "9";
        break;
      case ("October", "october"):
        searchParamsMonth = "10";
        break;
      case ("November", "november"):
        searchParamsMonth = "11";
        break;
      case ("December", "december"):
        searchParamsMonth = "12";
        break;
    }
    searchQuery();
  });
};
listen();
