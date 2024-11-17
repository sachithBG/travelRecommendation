// Travel recommendations data
const recommendations = [
  { place: "Paris, France", description: "The city of lights, famous for the Eiffel Tower and art museums." },
  { place: "Kyoto, Japan", description: "Known for its classical Buddhist temples, gardens, and imperial palaces." },
  { place: "Cape Town, South Africa", description: "Famous for its Table Mountain and stunning coastlines." },
];

// Function to display recommendations
function displayRecommendations(filter = "") {
  const container = document.getElementById("recommendations");
  container.innerHTML = ""; // Clear existing recommendations

  const filteredRecommendations = recommendations.filter((rec) =>
    rec.place.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredRecommendations.length === 0) {
    container.innerHTML = "<p>No recommendations found.</p>";
    return;
  }

  filteredRecommendations.forEach((rec) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${rec.place}</h2>
      <p>${rec.description}</p>
    `;
    container.appendChild(card);
  });
}

// Function to add a new recommendation
function addRecommendation() {
  const place = prompt("Enter the name of the place:");
  const description = prompt("Enter a short description of the place:");

  if (place && description) {
    recommendations.push({ place, description });
    displayRecommendations();
    alert("Recommendation added successfully!");
  } else {
    alert("Both fields are required!");
  }
}

// Function to filter recommendations
function filterRecommendations() {
  const filterText = prompt("Enter a keyword to filter recommendations:");
  displayRecommendations(filterText || "");
}

// Initial display of recommendations
displayRecommendations();

// Attach event listeners for interactivity
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.createElement("button");
  addButton.textContent = "Add Recommendation";
  addButton.style.margin = "10px";
  addButton.onclick = addRecommendation;

  const filterButton = document.createElement("button");
  filterButton.textContent = "Filter Recommendations";
  filterButton.style.margin = "10px";
  filterButton.onclick = filterRecommendations;

  const main = document.querySelector("main");
  main.insertBefore(addButton, main.firstChild);
  main.insertBefore(filterButton, main.firstChild);
});
