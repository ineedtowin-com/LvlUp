function toggleDescription(featureId) {
  var feature = document.getElementById(featureId);
  if (feature.style.display === "none") {
    feature.style.display = "block";
  } else {
    feature.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach(button => {
    button.addEventListener("click", function() {
      const topicCard = button.closest(".topic-card");
      const moreInfo = topicCard.querySelector(".more-info");

      if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        button.textContent = "Learn Less";
      } else {
        moreInfo.style.display = "none";
        button.textContent = "Learn More";
      }
    });
  });

  document.getElementById('tutor-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let tutorName = document.getElementById('tutor-name').value;
    let subject = document.getElementById('tutor-subject').value;
    let description = document.getElementById('tutor-description').value;
    alert(`Thank you, ${tutorName}. You've signed up as a tutor for ${subject}.`);
    localStorage.setItem('tutor', JSON.stringify({ tutorName, subject, description }));
    document.getElementById('tutor-form').reset();
  });

  document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let studentName = document.getElementById('student-name').value;
    let subject = document.getElementById('student-subject').value;
    alert(`${studentName}, you're looking for a tutor in ${subject}. We will connect you with a tutor soon!`);
    localStorage.setItem('student', JSON.stringify({ studentName, subject }));
    document.getElementById('student-form').reset();
  });
});
