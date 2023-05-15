window.addEventListener("DOMContentLoaded", (event) => {
  const updateBtn = document.getElementById("updateBtn");
  const message = document.getElementById("message");

  updateBtn.addEventListener("click", () => {
    // Simulate data update
    // Replace this with your actual update logic
    setTimeout(() => {
      // Data updated successfully
      message.textContent = "Data updated successfully.";
    }, 2000); // Simulating a delay of 2 seconds
  });
});
