document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch beach recommendations based on search term
    function fetchBeachRecommendations(searchTerm) {
        const beachData = [
            { 
              name: "Bora Bora", 
              imageUrl: "https://images.pexels.com/photos/209297/pexels-photo-209297.jpeg" 
            },
            { 
              name: "Maldives", 
              imageUrl: "https://images.unsplash.com/photo-1555710619-5d5968f90af2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            },
            { 
              name: "Phuket Beach 1", 
              imageUrl: "https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            },
            { 
              name: "Phuket Beach 2", 
              imageUrl: "https://images.unsplash.com/photo-1503384939838-ab166eb58569?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            },
            { 
              name: "Hawaii", 
              imageUrl: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            },
            { 
              name: "Maui", 
              imageUrl: "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            }
          ];
          
          
          
  
      // Filter beach data based on the search term (case insensitive)
      const filteredBeaches = beachData.filter(beach => 
        beach.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      const resultsDiv = document.getElementById('beach-recommendations');
      resultsDiv.innerHTML = '';  // Clear any previous results
  
      if (filteredBeaches.length > 0) {
        filteredBeaches.forEach(beach => {
          const beachElement = document.createElement('div');
          beachElement.classList.add('beach');
          beachElement.innerHTML = `
            <h3>${beach.name}</h3>
            <img src="${beach.imageUrl}" alt="${beach.name}">
          `;
          resultsDiv.appendChild(beachElement);
        });
      } else {
        resultsDiv.innerHTML = '<p>No results found</p>';
      }
    }
  
    // Event listener for search button
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        document.getElementById('results').style.display = 'block'; // Show results section
        fetchBeachRecommendations(searchTerm);
      }
    });
  
    // Event listener for clear button
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', function() {
      searchInput.value = ''; // Clear input
      document.getElementById('results').style.display = 'none'; // Hide results
    });
  });
  



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
  
  