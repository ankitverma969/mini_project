document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const statusBox = document.getElementById("form-status");

  if (!form || !statusBox) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusBox.className = "form-status";
    statusBox.style.display = "block";
    statusBox.textContent = "Sending message...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        statusBox.classList.add("success");
        statusBox.textContent =
          "✅ Thank you! Your message has been sent successfully.";
        form.reset();
      } else {
        statusBox.classList.add("error");
        statusBox.textContent =
          "❌ Something went wrong. Please try again.";
      }
    } catch (error) {
      statusBox.classList.add("error");
      statusBox.textContent =
        "❌ Network error. Please try again later.";
    }
  });
});
