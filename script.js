// Function to toggle the visibility of the feature description
function toggleDescription(featureId) {
  var feature = document.getElementById(featureId);
  if (feature.style.display === "none") {
    feature.style.display = "block";
  } else {
    feature.style.display = "none";
  }
}

// Function to handle the "Learn More" button functionality on Study Topics
document.addEventListener("DOMContentLoaded", function() {
  // Get all the buttons to toggle the visibility of the description on study topics page
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach(button => {
    button.addEventListener("click", function() {
      const topicCard = button.closest(".topic-card");
      const moreInfo = topicCard.querySelector(".more-info");

      // Toggle the visibility of the more-info section for Study Topics
      if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        button.textContent = "Learn Less";
      } else {
        moreInfo.style.display = "none";
        button.textContent = "Learn More";
      }
    });
  });
});
