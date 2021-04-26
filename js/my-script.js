$(document).ready(function () {
	// initMyCarousel();

	let baseURL = 'https://api-fe-course.codethanhthuongthua.asia/api/';

	let urlPlaylists = `${baseURL}playlists`;

	$.get(urlPlaylists, { limit: 6 }, function (data) {
		let content = '';
		data.forEach(element => {
			let thumb = JSON.parse(element.thumbnail).high.url;
			let title = element.title;
			let id = element.id;
			content += `
			<div class="item">
				<div class="card card--big">
					<div class="card__cover">
						<img src="${thumb}" alt="${title}">
						<a href="details.html?id=${id}" class="card__play">
							<i class="icon ion-ios-play"></i>
						</a>
					</div>
					<div class="card__content">
						<h3 class="card__title"><a href="details.html?id=${id}">${title}</a></h3>
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
					items: 3,
				},
				1200: {
					items: 3,
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
			
			<div class=" col-lg-6 col-xl-4">
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
		});

		$('#content__tabs').html(content);
	
		
	});

	// danh sach video trong catagory

	$.get(urlPlaylists, { limit: 12 }, function (data) {
		let content = '';
		data.forEach(element => {
			let thumb = JSON.parse(element.thumbnail).high.url;
			let title = element.title;
			content += `
				<div class="col-lg-6 col-xl-4">
					<div class="card">
						<div class="card__cover">
							<img src="${thumb}" alt="${title}">
							<a href="#" class="card__play">
								<i class="icon ion-ios-play"></i>
							</a>
						</div>
						<div class="card__content">
							<h3 class="card__title"><a href="#">I${title}</a></h3>
							<span class="card__category">
								<a href="#">Action</a>
								<a href="#">Triler</a>
							</span>
							<span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
						</div>
					</div>
				</div>
			`;
		});

		$('#list-courses').html(content);
	})

	
	
	
});





