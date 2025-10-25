const ngos = [
  { name: "Women's Safe Center", desc: "Provides trauma counseling and business training." },
  { name: "Empower Africa", desc: "Funds vocational skills and digital literacy programs." },
  { name: "Unity Foundation", desc: "Supports survivor-led initiatives and education access." }
];

const list = document.getElementById('ngoList');
ngos.forEach(ngo => {
  const card = document.createElement('div');
  card.classList.add('ngo-card');
  card.innerHTML = `<h3>${ngo.name}</h3><p>${ngo.desc}</p>`;

  // Add click handler
  card.addEventListener('click', () => {
    alert(`An email regarding "${ngo.name}" will be sent to you for more information.`);
  });

  list.appendChild(card);
});