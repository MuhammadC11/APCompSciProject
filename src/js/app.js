import { DOMSelectors } from "./DOM";
console.log("Connected");

fetch("https://byabbe.se/on-this-day/5/30/events.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    console.log(searchParams);
    if (DOMSelectors.searchArea.value === "") {
      alert("Please Input Something To Get Your Desired Results");
      return;
    }
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://byabbe.se/on-this-day/${searchParams}/30/events.json`
        );
        const data = await response.json();
        if (data.length === 0) {
          alert("Whoops, looks like we couldn't find anything!");
        }
        data.forEach((games) => {
          let storesArr = [];
          const addStore = function () {
            stores.forEach((element) => {
              if (games.storeID.includes(element.id)) {
                storesArr.push(element.name);
                return storesArr;
              }
            });
          };
          addStore();
        });
        console.log(data.length);
      } catch (error) {
        console.log(error);
        alert("Oops, something bad happened");
      }
    };
    searchQuery();
  });
};
listen();
