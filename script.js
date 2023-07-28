document.getElementById("sightingForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    try {
      const animalName = document.getElementById("animalName").value;
      const health = document.getElementById("health").value;
      const age = document.getElementById("age").value;
      const location = document.getElementById("location").value;
      const rangerName = document.getElementById("rangerName").value;
  
      // Perform any necessary validation and data processing here
  
      console.log("Sighting submitted successfully!");
      console.log("Animal Name:", animalName);
      console.log("Health:", health);
      console.log("Age:", age);
      console.log("Location:", location);
      console.log("Ranger Name:", rangerName);
    } catch (error) {
      console.log("Error:", error.message);
    }
  });