function toggleContent(id, h4) {
  let content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.textContent = "See Less";
  } else {
    content.style.display = "none";
    h4.textContent = "See More";
  }
}
