$(document).ready(function () {
    let baseURL = 'https://api-fe-course.codethanhthuongthua.asia/api/';

	let urlPlaylists = `${baseURL}playlists`;

    let urlString = window.location.href; //window.location.href
    let url = new URL(urlString);
    let playlistID = url.searchParams.get('id');
	let baseYoutubeURL = 'https://www.youtube.com/embed/';


	// EVENTS
	$(document).on('click', '.video-item', function () {
		console.log(123);
	})
    // video
	let playVideos = `${urlPlaylists}/${playlistID}/videos`;
	$.get(playVideos, function (data) {
		let content = '';
		data.forEach(element => {
			let thumb = JSON.parse(element.thumbnail).high.url;
			let title = element.title;
			let id = element.id;
			let date = element.updated_at;
			console.log(element);
			
			content += `
					
				<button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="video-item" data-id="${element.youtube_id}">
					<span>${title}</span>
					<span>${date}</span>
				</button>
				
			`;
		});

		$('#headingOne').html(content);
		
	})
});
