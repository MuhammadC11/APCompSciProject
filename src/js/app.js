console.log("Connected");

fetch("https://byabbe.se/on-this-day/5/30/events.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
