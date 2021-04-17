function validate(event) {
  event.preventDefault();
  let hasError = false;

  let lat = document.getElementById("id_latitude").value,
    lng = document.getElementById("id_longitude").value;

  document.getElementById("id_error_lat").innerText = "";
  document.getElementById("id_error_lng").innerText = "";

  if (isNaN(lat)) {
    hasError = true;
    document.getElementById("id_error_lat").innerText =
      "Enter a valid latitude";
  } else {
    let latitude = Number(lat);
    if (latitude > 90 || latitude < -90) {
      hasError = true;
      document.getElementById("id_error_lat").innerText =
        "Enter a valid latitude in range of (-90, +90)";
    }
  }

  if (isNaN(lng)) {
    hasError = true;
    document.getElementById("id_error_lng").innerText =
      "Enter a valid longitude";
  } else {
    let longitude = Number(lng);
    if (longitude > 180 || longitude < -180) {
      hasError = true;
      document.getElementById("id_error_lng").innerText =
        "Enter a valid longitude in range of (-180, +180)";
    }
  }

  if (!hasError) {
    document.querySelector("form").submit();
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
