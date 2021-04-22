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

	let playNews = `${urlPlaylists}/1/videos`;
	$.get(playNews, { limit: 12 }, function (data) {
		let content = ''
		data.forEach(element => {
			let thumb = JSON.parse(element.thumbnail).high.url;
			let title = element.title;
			content += `
			
			<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div class="card">
						<div class="card__cover">
							<img src="${thumb}" alt="${title}">
							<a href="#" class="card__play">
								<i class="icon ion-ios-play"></i>
							</a>
						</div>
						<div class="card__content">
							<h3 class="card__title"><a href="#">${title}</a></h3>
							<span class="card__category">
								<a href="#">Action</a>
								<a href="#">Triler</a>
							</span>
							<span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
						</div>
					</div>
			</div>
			`
			
		})
		$('#playPlistsNews > div:first-child').after(content);
	})

	$.get(urlPlaylists, { limit: 3 }, function (data) {
		let content = '';
		let contentCatagory = '';
		data.forEach(element => {
			let thumb = JSON.parse(element.thumbnail).high.url;
			let title = element.title;
			content += `
			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">${title}</a>
			</li>
			`

			contentCatagory += `
				<div class="card card--big">
					<div class="card__cover">
						<img src="${thumb}" alt="${title}">
						<a href="#" class="card__play">
							<i class="icon ion-ios-play"></i>
						</a>
					</div>
					<div class="card__content">
						<h3 class="card__title"><a href="#">${title}</a></h3>
						<span class="card__category">
							<a href="#">Romance</a>
							<a href="#">Drama</a>
						</span>
						<span class="card__rate"><i class="icon ion-ios-star"></i>6.3</span>
					</div>
				</div>
			`
		});

		$('#content__tabs').html(content);
		$('#playVideosId').html(content);
		
	});

});


