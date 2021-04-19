$(document).ready(function () {
	// initMyCarousel();

	let baseURL = 'https://api-fe-course.codethanhthuongthua.asia/api/';

	let urlPlaylists = `${baseURL}playlists`;

	$.get(urlPlaylists, { limit: 6 }, function (data) {
		let content = '';
		data.forEach(element => {
			let thumb = JSON.parse(element.thumbnail).high.url;
			let title = element.title;
			content += `
			<div class="item">
				<div class="card card--big">
					<div class="card__cover">
						<img src="${thumb}" alt="${title}">
						<a href="#" class="card__play">
							<i class="icon ion-ios-play"></i>
						</a>
					</div>
					<div class="card__content">
						<h3 class="card__title"><a href="#">${title}</a></h3>
					</div>
				</div>
			</div>
			`;
		});

		$('#my-carousel').html(content);
		initMyCarousel();
	})

	// FUNCTIONS
	function initMyCarousel() {
		$('#my-carousel').owlCarousel({
			mouseDrag: false,
			touchDrag: false,
			dots: false,
			loop: true,
			autoplay: false,
			smartSpeed: 600,
			margin: 30,
			responsive: {
				0: {
					items: 2,
				},
				576: {
					items: 2,
				},
				768: {
					items: 3,
				},
				992: {
					items: 4,
				},
				1200: {
					items: 4,
				},
			},
		});
	}

});
