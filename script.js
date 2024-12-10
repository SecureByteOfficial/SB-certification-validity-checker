// Sample certificate data
const certificates = [
    {
        number: "12345",
        name: "John Doe",
        institute: "Tech University",
        picture: "./depic/dp.jpeg",
        badge: "./depic/CSCP.png", // Badge URL
        rating: "4.5/5",
        currentPosition: "Software Engineer",
        about: "Passionate about technology and coding.",
        workingProgram: "Ambassador",
    },
    {
        number: "67890",
        name: "Jane Smith",
        institute: "Global Academy",
        picture: "./depic/dp.jpeg",
        badge: "./depic/SA.png", // Badge URL
        rating: "4.7/5",
        currentPosition: "Cybersecurity Analyst",
        about: "Expert in cybersecurity and ethical hacking.",
        workingProgram: "Intern",
    },
];

// Search function
function searchCertificate() {
    const searchInput = document.getElementById("search-input").value.trim();
    const cardsContainer = document.getElementById("cards-container");

    // Clear existing results
    cardsContainer.innerHTML = "";

    // Search for certificate
    const foundCertificate = certificates.find(cert => cert.number === searchInput);

    if (foundCertificate) {
        // Display the certificate details
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.display = "block"; // Make the card visible

        card.innerHTML = `
            <div class="badge">
                <img src="${foundCertificate.badge}" alt="Badge" />
            </div>
            <img src="${foundCertificate.picture}" alt="${foundCertificate.name}" class="user-picture">
            <div class="card-body">
                <h3>${foundCertificate.name}</h3>
                <p><strong>Institute:</strong> ${foundCertificate.institute}</p>
                <p><strong>Rating:</strong> ${foundCertificate.rating}</p>
                <p><strong>Current Position:</strong> ${foundCertificate.currentPosition}</p>
                <p><strong>About:</strong> ${foundCertificate.about}</p>
                <p><strong>Working Program:</strong> ${foundCertificate.workingProgram}</p>
                <p><strong>Certificate Number:</strong> ${foundCertificate.number}</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    } else {
        cardsContainer.innerHTML = "<p>No certificate found for the entered number.</p>";
    }
}
