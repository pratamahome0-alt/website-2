document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('services-list');
  if (!container) return;

  try {
    const response = await fetch('./data/services.json');
    if (!response.ok) throw new Error('Gagal memuat data layanan');

    const services = await response.json();
    container.innerHTML = services
      .map(
        (service) => `
          <article class="service-card">
            <span class="service-tag">${service.category}</span>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </article>
        `
      )
      .join('');
  } catch (error) {
    container.innerHTML = '<p class="error">Data layanan belum tersedia. Silakan cek file data.</p>';
  }
});
