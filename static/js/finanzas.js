const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $cardsGrid = $(".cards-grid");

function algo(portafolios) {
	console.log(portafolios)
	portafolios.data.forEach(portafolio => {
		$cardsGrid.innerHTML += `
			<article class="portfolio-card">
				<div class="card-content">
					<header class="card-header">
						<h3>${portafolio["nombre"]}</h3>
						<span class="badge">${portafolio["perfil"]}</span>
					</header>

					<div class="assets-container">
						<div class="asset-item"><strong>1x</strong> YPFD</div>
						<div class="asset-item"><strong>11x</strong> PAMP</div>
						<div class="asset-item"><strong>2x</strong> VIST</div>
					</div>

					<footer class="financial-summary">
						<div class="stat-group">
							<span class="label">Inversión Total</span>
							<span class="value">$${portafolio.informe["total"]}</span>
						</div>
						<div class="stat-group">
							<span class="label">Rinde Anual</span>
							<span class="value positive">$${portafolio.informe["rent. anual"]}</span>
						</div>
						<div class="stat-group highlight">
							<span class="label">Real vs Inflación</span>
							<span class="value real-gain">$${portafolio.informe["rent. vs inf."]}%</span>
						</div>
					</footer>
				</div>
			</article>
		`;
	});
}

async function fetchPortafolios() {
	const server_url = "http://localhost:5000/api/portafolios";
	const res = await fetch(server_url);
	const data = await res.json();
	algo(data);
}

fetchPortafolios();
// console.log(data)
