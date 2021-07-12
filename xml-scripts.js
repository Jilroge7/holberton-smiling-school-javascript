/* Get testionial quotes for homepage and pricing */
    function getTestimonialQuotes() {
        let url =  "https://smileschool-api.hbtn.info/xml/quotes";
        $.get(url, function (xmlData) {
            let carouselItem;
            let data = $(xmlData);
            data.find('quote').each(function (item) {
                if ($(this).attr('id') === '1') 
                    carouselItem = $('<div class="carousel-item active">');
                else
                    carouselItem = $('<div class="carousel-item">');

                carouselItem.append(`<div class="row d-flex my-5 justify-content-center align-items-center mx-auto">
                        <img class="odd-dude rounded-circle d-block img-fluid mr-2 ml-md-auto" src=${$(this).find('pic_url').text()} alt="odd-dude" width="148px" height="148px">
                        <div class="carousel-text row p-0 col-md-6 ml-4 mr-auto container">    
                            <p class="testimonial-text col-12 p-0">${$(this).find('text').text()}</p>
                            <p class="testimonial-author font-weight-bold col-12 p-0 m-0">${$(this).find('name').text()}</p>
                            <p class="testimonial-origin font-italic col-12 p-0 m-0">${$(this).find('title').text()}</p>
                        </div>
                    </div>    
                </div>`);

                $('#testimonial .loader').hide();
                $('#testimonial').append(carouselItem);
            });
        });   
    }
/* Get most popular videos for homepage */
    function getPopularTutorials(screenSize) {
        $('#popular-tutorials').empty();
        $('#popular-tutorials').append($('<div class="loader">'));
        let url = "https://smileschool-api.hbtn.info/xml/popular-tutorials";

        $.get(url, function (xmlData) {
            let slideNo = 0;
            let cardNo = 0;
            let data = $(xmlData);
            let stars = `<img src="images/star_on.png" alt="star on" height="15px"</img>`;
            let noStar = `<img src="images/star_off.png" alt="star off" height="15px">`;

            data.find('video').each(function (item) {
                if (screenSize === 'sm' && cardNo > 0)
                    cardNo = 0;
                else if (screenSize === 'md' && cardNo > 1)
                    cardNo = 0;
                else if (screenSize === 'lg' && cardNo > 2)
                    cardNo = 0;
                else if (screenSize === 'xl' && cardNo > 3)
                    cardNo = 0;
                
                cardNo++;

                if (cardNo === 1) {
                    slideNo++;
                    $('#popular-tutorials').append($(`<div id="review-item${screenSize}${slideNo}" class="carousel-item"><div id="review-slide${screenSize}${slideNo}" class="d-flex justify-content-center px-5">`));
                }

                $('#review-slide' + screenSize + slideNo).append(
                    `<!--slide ${$(this).attr('id')} -->
                    <div class="card container mx-0 my-5 pt-4 screen-size${screenSize} card-${cardNo}" style="width: 18rem">
                        <img class="card-img-top card-thumbnail" src=${$(this).find('thumb_url').text()}>
                        <img src="images/play.png" class="play-button" style="width:64px;height:64px;">
                        <div class="card-body row">
                            <h5 class="card-title font-weight-bold">${$(this).find('title').text()}</h5>
                            <p class="card-text">${$(this).find('sub-title').text()}</p>
                            <div class="review">
                                <img class="rounded-circle profile-1" src=${$(this).find('author_pic_url').text()}>
                                <span class="rating-text p-1 pl-2">${$(this).find('author').text()}</span>
                            </div>
                            <span class="rating stars pt-1">
                                ${stars.repeat($(this).attr('star'))}
                                ${noStar.repeat(5 - $(this).attr('star'))}
                            </span>
                             <span class="review-rate stars pt-1">${$(this).find('duration').text()}</span>
                        </div>
                     </div>`);                        
            })             
            $('#popular-tutorials .loader').hide();
            updateSlide(screenSize);    
        });
    }
/* Get latest videos for homepage */
    function getLatestVideos(screenSize) {
        $('#latest-videos').empty();
        $('#latest-videos').append($('<div class="loader">'));
        let url = "https://smileschool-api.hbtn.info/xml/latest-videos";

        $.get(url, function (xmlData) {
            let slideNo = 0;
            let cardNo = 0;
            let data = $(xmlData);
            let stars = `<img src="images/star_on.png" alt="star on" height="15px"</img>`;
            let noStar = `<img src="images/star_off.png" alt="star off" height="15px">`;

            data.find('video').each(function (item) {
                if (screenSize === 'sm' && cardNo > 0)
                    cardNo = 0;
                else if (screenSize === 'md' && cardNo > 1)
                    cardNo = 0;
                else if (screenSize === 'lg' && cardNo > 2)
                    cardNo = 0;
                else if (screenSize === 'xl' && cardNo > 3)
                    cardNo = 0;
                
                cardNo++;

                if (cardNo === 1) {
                    slideNo++;
                    $('#latest-videos').append($(`<div id="video-item${screenSize}${slideNo}" class="carousel-item"><div id="video-slide${screenSize}${slideNo}" class="d-flex justify-content-center px-5">`));
                }

                $('#video-slide' + screenSize + slideNo).append(
                    `<!--slide ${$(this).attr('id')} -->
                    <div class="card container mx-0 my-5 pt-4 screen-size${screenSize} card-${cardNo}" style="width: 18rem">
                        <img class="card-img-top card-thumbnail" src=${$(this).find('thumb_url').text()}>
                        <img src="images/play.png" class="play-button" style="width:64px;height:64px;">
                        <div class="card-body row">
                            <h5 class="card-title font-weight-bold">${$(this).find('title').text()}</h5>
                            <p class="card-text">${$(this).find('sub-title').text()}</p>
                            <div class="review">
                                <img class="rounded-circle profile-1" src=${$(this).find('author_pic_url').text()}>
                                <span class="rating-text p-1 pl-2">${$(this).find('author').text()}</span>
                            </div>
                            <span class="rating stars pt-1">
                                ${stars.repeat($(this).attr('star'))}
                                ${noStar.repeat(5 - $(this).attr('star'))}
                            </span>
                             <span class="review-rate stars pt-1">${$(this).find('duration').text()}</span>
                        </div>
                     </div>`);                        
            })             
            $('#latest-videos .loader').hide();
            updateSlide(screenSize);    
        });
    }

/* searchable video card for courses.html */
function getCourses(searchQ = '', topics = 'all', sortBy = "most_popular") {
    $('#courses-video').empty();
    $('#courses-video').append($('<div class="loader">'));
    let url = "https://smileschool-api.hbtn.info/xml/courses";

    let paramList = {
        'All': 'all',
        'Novice': 'novice',
        'Intermediate': 'intermediate',
        'Expert': 'expert',
        'Most Popular': 'most_popular',
        'Most Recent': 'most_recent',
        'Most Reviewed': 'most-reviewed'
    };

    $.get(url, { q: searchQ, topic: paramList[topics], sort: paramList[sortBy] }, function (data) {
        let slideNo = 0;
        let cardNo = 0;
        let courses = $(data).find('course');
        let stars = `<img src="images/star_on.png" alt="star on" height="15px"</img>`;
        let noStar = `<img src="images/star_off.png" alt="star off" height="15px">`;

        courses.each(function () {
            cardNo++;

            if (cardNo === 1) {
                slideNo++;
                $('#courses-video').append($(`<div id="course-row${slideNo}" class="row justify-content-start">`));
            }

            $('#course-row' + slideNo).append(
                `<!--slide ${item.id} -->
                <div class="card container col-12 col-md-6 col-lg-4 col-xl-3 mx-0 my-5 pt-4 card-${cardNo}" style="width: 18rem">
                    <img class="card-img-top card-thumbnail" src=${$(this).find('thumb_url')}>
                    <img src="images/play.png" class="play-button" style="width:64px;height:64px;">
                    <div class="card-body row">
                        <h5 class="card-title font-weight-bold">${$(this).find('title')}</h5>
                        <p class="card-text">${$(this).find('sub-title')}</p>
                        <div class="review">
                            <img class="rounded-circle profile-1" src=${$(this).find('author_pic_url')}>
                            <span class="rating-text p-1 pl-2">${$(this).find('author')}</span>
                        </div>
                        <span class="rating stars pt-1">
                            ${stars.repeat($(this).attr('star'))}
                            ${noStar.repeat(5 - $(this).attr('star'))}
                        </span>
                        <span class="review-rate stars pt-1">${$(this).find('duration')}</span>
                    </div>
                </div>`);                        
        })             
        $('#courses-video .loader').hide();
        $('#courses-video').prepend($('<div class="py-5 mb-n3" id="video-count">' + courses.length + ' videos</div>'));    
    });
}

/* helper functions */
    function getSize() {
        if ($(window).width() >= 1200)
            return 'xl';
        else if ($(window).width() >= 992)
            return 'lg';
        else if ($(window).width() >= 768)
            return 'md';
        else
            return 'sm';
    }

    function updateSlide() {
        let sizes = ['sm', 'md', 'lg', 'xl'];
        sizes.forEach(function (size) {
            if (size === getSize()) {
                $('#review-item' + size + '1').addClass('active');
                $('#video-item' + size +'1').addClass('active');
            } else {
                $('#review-item' + size + '1').removeClass('active');
                $('#video-item' + size + '1').removeClass('active');
            }
        })
    }


    
$(document).ready(function () {
    if (document.URL.endsWith('homepage.html')) {
        getTestimonialQuotes();
        getPopularTutorials(getSize());
        getLatestVideos(getSize());

        window.matchMedia('(min-width: 768px)').addEventListener("change", (event) => {
            if (event.matches) {
                getPopularTutorials('md');
                getLatestVideos('md');
            } else {
                getPopularTutorials('sm');
                getLatestVideos('sm');
            }
        });
        window.matchMedia('(min-width: 992px)').addEventListener("change", (event) => {
            if (event.matches) {
                getPopularTutorials('lg');
                getLatestVideos('lg');
            } else {
                getPopularTutorials('md');
                getLatestVideos('md');
            }
        });
        window.matchMedia('(min-width: 1200px)').addEventListener("change", (event) => {
            if (event.matches) {
                getPopularTutorials('xl');
                getLatestVideos('xl');
            } else {
                getPopularTutorials('lg');
                getLatestVideos('lg');
            }
        });
    } else if (document.URL.endsWith('pricing.html')) {
        getTestimonialQuotes();
    } else if (document.URL.endsWith('courses.html')) {
        getCourses();

        $('#topic-box > .dropdown-item').click(function (event) {
            event.preventDefault();
            $('#select-topic').html($(this).html());
            getCourses($('#keyword-box').val(), $('#select-topic').html(), $(this).html(), $('#select-sort').html());
        });
        $('#topic-box > .dropdown-item').click(function (event) {
            event.preventDefault();
            $('#').html($(this).html());
            getCourses($('#keyword-box').val(), $('#select-topic').html(), $(this).html());
        });
    }
});