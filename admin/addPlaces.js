//get formdata
const htmlForm = document.querySelector("form");
const statusElement = document.getElementById("status");

htmlForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusElement.innerHTML = "";
  const formData = new FormData(htmlForm);
  const imageFile = formData.get("image-file");
  const place = formData.get("place");
  const days = formData.get("days");
  const price = formData.get("price");
  const description = formData.get("description");
  const selectedFacilities = formData.getAll("facilities");

  console.log(imageFile);
  // Read file as data URL (base64)
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Error reading file"));
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(imageFile);
  });
  console.log(dataUrl);

  // Build payload
  const payload = {
    place,
    name: imageFile.name,
    type: imageFile.type,
    size: imageFile.size,
    dataUrl, // full data URL e.g. "data:image/png;base64,...."
    createdAt: new Date().toISOString(),
    description,
    days,
    description,
    facilities: selectedFacilities.join(", "),
    price,
  };
  try {
    // POST to json-server
    const res = await fetch("http://localhost:3000/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    //const saved = await res.json();
    setTimeout(() => {}, 2000);
    statusElement.innerHTML = "Uploaded successfully! Redirecting to gallery...";
    window.location.href = "../gallery/gallery.html";
  } catch (err) {
    statusElement.innerHTML = "Upload failed: " + err.message;
    console.error(err);
  }
});
