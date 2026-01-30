document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const accessKey = "904a2081-0ecf-4f3d-ae21-8618f1f34fef";

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully! I will get back to you soon.");
        form.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  });
});
