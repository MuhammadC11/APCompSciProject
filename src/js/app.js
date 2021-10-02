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
    const searchParamsDay = DOMSelectors.searchAreaDay.value;
    const searchParamsMonth = DOMSelectors.searchAreaMonth.value;
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
      try {
        const response = await fetch(
          `https://byabbe.se/on-this-day/${searchParamsMonth}/${searchParamsDay}/events.json`
        );
        const data = await response.json();
        console.log(data.date);
        if (data.length === 0) {
          alert("Whoops, looks like we couldn't find anything!");
        }
        // data.for((history) => {
        //   DOMSelectors.container.insertAdjacentHTML(
        //     "beforeend",
        //     `<ul id="events-container">
        //     Events on ${history.date}
        //     <li class="event">
        //     Hello
        //     </li>
        // </ul>`
        //   );
        // });
        console.log(data);
      } catch (error) {
        console.log(error);
        alert("Oops, something bad happened");
      }
    };
    searchQuery();
  });
};
listen();
