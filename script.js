function convertLinkedInUrlToDomain() {
  const linkedinUrl = document.getElementById("linkedin-url").value;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "eca935e72amsh3c3b0490223d8dep17b4bajsn464ff6988736",
      "X-RapidAPI-Host": "linkedin-company-profile-data-api2.p.rapidapi.com",
    },
    body: JSON.stringify({ url: linkedinUrl }),
  };

  fetch("https://linkedin-company-profile-data-api2.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then((response) => {
      const domainName = response.website;
      document.getElementById("result").innerHTML = "Domain Name: " + domainName;
    })
    .catch((err) => console.error(err));
}
