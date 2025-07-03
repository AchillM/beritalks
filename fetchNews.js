
const API_KEY = "08052fbdcc1640ef849788b90d8cf87f";
const newsList = document.getElementById("news-list");

fetch(`https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    if (data.articles.length === 0) {
      newsList.innerHTML = "<p>Tidak ada berita saat ini.</p>";
      return;
    }

    data.articles.forEach(article => {
      const newsCard = document.createElement("div");
      newsCard.className = "news-card";
      newsCard.innerHTML = `
        <img src="${article.urlToImage || 'https://via.placeholder.com/400'}" alt="Gambar">
        <h3>${article.title}</h3>
        <p>${article.description || ''}</p>
        <a href="${article.url}" target="_blank">Baca selengkapnya</a>
      `;
      newsList.appendChild(newsCard);
    });
  })
  .catch(err => {
    console.error(err);
    newsList.innerHTML = "<p>Gagal memuat berita.</p>";
  });
