function toggleDescription(featureId) {
  var feature = document.getElementById(featureId);
  if (feature.style.display === "none") {
    feature.style.display = "block";
  } else {
    feature.style.display = "none";
  }
}
