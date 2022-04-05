import { DOMSelectors } from "./DOM";
console.log("Connected");

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let searchParamsDay = DOMSelectors.searchAreaDay.value;
    let searchParamsMonth = DOMSelectors.searchAreaMonth.value;
    console.log(searchParamsMonth);
    console.log(searchParamsDay);

    if ((searchParamsDay === "", searchParamsMonth === "")) {
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

        const eventHistory = [...data.events];

        console.log(eventHistory);
        if (data.length === 0) {
          alert("Whoops, looks like we couldn't find anything!");
        }
        eventHistory.forEach((history) => {
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
      } catch (error) {
        console.log(error);
        alert("Oops, an error occurred, please check your spelling.");
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
      case "february":
        searchParamsMonth = "2";
        break;
      case "march":
        searchParamsMonth = "3";
        break;
      case "april":
        searchParamsMonth = "4";
        break;
      case "may":
        searchParamsMonth = "5";
        break;
      case "june":
        searchParamsMonth = "6";
        break;
      case "july":
        searchParamsMonth = "7";
        break;
      case "august":
        searchParamsMonth = "8";
        break;
      case "september":
        searchParamsMonth = "9";
        break;
      case "october":
        searchParamsMonth = "10";
        break;
      case "november":
        searchParamsMonth = "11";
        break;
      case "december":
        searchParamsMonth = "12";
        break;
    }
    searchQuery();
  });
};
listen();
