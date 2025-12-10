async function loadGallery() {
  const gallery = document.getElementById("gallery");

  try {
    const res = await fetch("http://localhost:3000/images");
    if (!res.ok) throw new Error(res.statusText);
    const images = await res.json();
    if (images.length === 0) {
      gallery.innerHTML = '<p>No Images yes</p> Go to <a href="../admin/addPlaces.html">Add places</a>';
      return;
    }
    gallery.innerHTML = "";
    images.forEach((img) => {
      const wrapper = document.createElement("div");
      wrapper.className = "card";
      const imageE1 = document.createElement("img");
      imageE1.className = "thumb";
      imageE1.alt = img.name;
      imageE1.src = img.dataUrl;

      const caption = document.createElement("div");
      caption.className = "caption";
      caption.className = "caption";
      caption.innerHTML = `
        <strong>${img.place || ""}</strong><br>
        Days: ${img.days || ""} days <br>
        Price: USD $${img.price} <br>
        ${img.description || "-"}<br>
        Facilities: ${img.facilities || ""}        
      `;
      wrapper.appendChild(imageE1);
      wrapper.appendChild(caption);
      gallery.appendChild(wrapper);
    });
  } catch (err) {
    gallery.innerHTML = "Failed to load gallery: " + err.message;
  }
}

loadGallery();
