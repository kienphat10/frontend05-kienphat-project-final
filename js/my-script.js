$(document).ready(function () {
    // initMyCarousel();

    let url = 'http://api.zdemo.xyz/api/playlists';

    // $.get(url, function (data) {
    //     let content = '';
    //     data.forEach(element => {
    //         content += 
    $.get(url, function (data) {
       
        let content = '';
        data.forEach(element => {
			console.log(element);
			console.log(data);
            content += `
            <div class="owl-carousel home__carousel" id="my-carousel">
						<div class="item">
							<!-- card -->
							<div class="card card--big">
								<div class="card__cover">
									<img src="img/covers/cover.jpg" alt="">
									<a href="#" class="${data.id}">
										<i class="icon ion-ios-play"></i>
									</a>
								</div>
								<div class="card__content">
									<h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
									<span class="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
									<span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
								</div>
							</div>
							<!-- end card -->
						</div>

						<div class="item">
							<!-- card -->
							<div class="card card--big">
								<div class="card__cover">
									<img src="img/covers/cover2.jpg" alt="">
									<a href="#" class="${data.id}">
										<i class="icon ion-ios-play"></i>
									</a>
								</div>
								<div class="card__content">
									<h3 class="card__title"><a href="#">Benched</a></h3>
									<span class="card__category">
										<a href="#">Comedy</a>
									</span>
									<span class="card__rate"><i class="icon ion-ios-star"></i>7.1</span>
								</div>
							</div>
							<!-- end card -->
						</div>

						<div class="item">
							<!-- card -->
							<div class="card card--big">
								<div class="card__cover">
									<img src="img/covers/cover3.jpg" alt="">
									<a href="#" class="${data.id}">
										<i class="icon ion-ios-play"></i>
									</a>
								</div>
								<div class="card__content">
									<h3 class="card__title"><a href="#">Whitney</a></h3>
									<span class="card__category">
										<a href="#">Romance</a>
										<a href="#">Drama</a>
									</span>
									<span class="card__rate"><i class="icon ion-ios-star"></i>6.3</span>
								</div>
							</div>
							<!-- end card -->
						</div>

						<div class="item">
							<!-- card -->
							<div class="card card--big">
								<div class="card__cover">
									<img src="img/covers/cover4.jpg" alt="">
									<a href="#" class="${data.id}">
										<i class="icon ion-ios-play"></i>
									</a>
								</div>
								<div class="card__content">
									<h3 class="card__title"><a href="#">Blindspotting</a></h3>
									<span class="card__category">
										<a href="#">Comedy</a>
										<a href="#">Drama</a>
									</span>
									<span class="card__rate"><i class="icon ion-ios-star"></i>7.9</span>
								</div>
							</div>
							<!-- end card -->
						</div>
					</div>
            `
            
        });

        // function initMyCarousel() {
        //     $('#my-carousel').owlCarousel({
        //         mouseDrag: false,
        //         touchDrag: false,
        //         dots: false,
        //         loop: true,
        //         autoplay: false,
        //         smartSpeed: 600,
        //         margin: 30,
        //         responsive: {
        //             0: {
        //                 items: 2,
        //             },
        //             576: {
        //                 items: 2,
        //             },
        //             768: {
        //                 items: 3,
        //             },
        //             992: {
        //                 items: 4,
        //             },
        //             1200: {
        //                 items: 4,
        //             },
        //         },
        //     });
        // }

        $('#my-carousel').html( content);

    })
    
});
