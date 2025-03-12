function searchCertificate() {
    const input = document.getElementById('certificateInput').value.toLowerCase();
    const certificate = certificates.find(cert => cert.number.toLowerCase() === input);

    if (certificate) {
        document.getElementById('cert-name').textContent = certificate.name;
        document.getElementById('cert-id').textContent = `CSCI-${certificate.issueDate.replace(/-/g, '')}-${certificate.name.slice(0, 3).toUpperCase()}-00001`;
        document.getElementById('cert-issue').textContent = `Issue Date: ${certificate.issueDate}`;
        document.getElementById('cert-batch').textContent = `Batch: ${certificate.batch}`;
        document.getElementById('cert-expiry').textContent = `Expiry Date: ${certificate.expiry}`;
        document.getElementById('cert-photo').src = certificate.picture;

        document.getElementById('certificate-popup').style.display = 'block';
    } else {
        alert("Certificate not found!");
    }
}

function closePopup() {
    document.getElementById('certificate-popup').style.display = 'none';
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}
