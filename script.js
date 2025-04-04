function toggleFeature(featureNumber) {
  const feature = document.getElementById(`feature${featureNumber}`);

  if (feature.style.display === "none") {
    feature.style.display = "block";
  } else {
    feature.style.display = "none";
