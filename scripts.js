
    function getTestimonialQuotes() {
        let url =  "https://smileschool-api.hbtn.info/quotes";
        $.get(url, function (data) {
            let carouselItem;

            data.forEach(function (item) {
                if (item.id === 1) 
                    carouselItem = $('<div class="carousel-item active">');
                else
                    carouselItem = $('<div class="carousel-item">');

                carouselItem.append(`<div class="row d-flex my-5 justify-content-center align-items-center mx-auto">
                        <img class="odd-dude rounded-circle d-block img-fluid mr-2 ml-md-auto" src=${item.pic_url} alt="odd-dude" width="148px" height="148px">
                        <div class="carousel-text row p-0 col-md-6 ml-4 mr-auto container">    
                            <p class="testimonial-text col-12 p-0">${item.text}</p>
                            <p class="testimonial-author font-weight-bold col-12 p-0 m-0">${item.name}</p>
                            <p class="testimonial-origin font-italic col-12 p-0 m-0">${item.title}</p>
                        </div>
                    </div>    
                </div>`);

                $('#testimonial .loader').hide();
                $('#testimonial').append(carouselItem);
            });
        });   
    }

    function getPopularTutorials() {
        let url = "https://smileschool-api.hbtn.info/popular-tutorials";

        $.get(url, function (data) {
            let cardBlock;
            let stars = `<img src="images/star_on.png" alt="star on" height="15px"</img>`;
            let noStar = `<img src="images/star_off.png" alt="star off" height="15px">`;

            data.forEach(function (item) {
                if (item.id === 1) {
                    cardBlock = $(`<div class="carousel-item active">`);
                } else {
                    cardBlock = $(`<div class="carousel-item">`);
                }
            })
            cardBlock.append(`<div class="justify-content-center d-flex px-5">`);

            data.forEach(function (item) {
                if (item.id === 1) {
                    cardBlock.append(`<div class="card container mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 2) {
                    cardBlock.append(`<div class="card container d-none d-md-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 3) {
                    cardBlock.append(`<div class="card container d-none d-lg-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 4) {
                    cardBlock.append(`<div class="card container mx-0 my-5 pt-4 d-none d-xl-block border-0" width="18rem">`);
                } else if (item.id === 5) {
                    cardBlock.append(`<div class="card container d-none d-xl-block mx-0 my-5 pt-4 order-4 border-0" width="18rem">`);
                } else if (item.id === 6) {
                    cardBlock.append(`<div class="card container d-md-none d-lg-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 7) {
                    cardBlock.append(`<div class="card container d-none d-md-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                }

                cardBlock.append(`<img class="card-img-top card-thumbnail" src=${item.thumb_url}>
                                    <div class="card-body row">
                                        <h5 class="card-title font-weight-bold">${item.title}</h5>
                                        <p class="card-text">${item.sub-title}</p>
                                    <div class="review">
                                        <img class="rounded-circle profile-1" src=${item.author_pic_url}>
                                        <span class="rating-text p-1 pl-2">${item.author}</span>
                                    </div>
                                    <span class="rating stars pt-1">
                                        ${stars.repeat(card.star)}
                                        ${noStar.repeat(5 - card.star)}
                                    </span>
                                    <span class="review-rate stars pt-1">${item.duration}</span>
                                </div>
                            </div>`);


                $('.popular-tutorials .loader').hide();
                $('.popular-tutorials').append(cardBlock);
            })
        })
    }

    /*function getLatestVideos() {
        let url = "https://smileschool-api.hbtn.info/s";

        $.get(url, function (data) {
            let cardBlock;
            let stars = `<img src="images/star_on.png" alt="star on" height="15px"</img>`;
            let noStar = `<img src="images/star_off.png" alt="star off" height="15px">`;

            data.forEach(function (item) {
                if (item.id === 1) {
                    cardBlock = $(`<div class="carousel-item active">`);
                } else {
                    cardBlock = $(`<div class="carousel-item">`);
                }
            })
            cardBlock.append(`<div class="justify-content-center d-flex px-5">`);

            data.forEach(function (item) {
                if (item.id === 1) {
                    cardBlock.append(`<div class="card container mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 2) {
                    cardBlock.append(`<div class="card container d-none d-md-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 3) {
                    cardBlock.append(`<div class="card container d-none d-lg-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 4) {
                    cardBlock.append(`<div class="card container mx-0 my-5 pt-4 d-none d-xl-block border-0" width="18rem">`);
                } else if (item.id === 5) {
                    cardBlock.append(`<div class="card container d-none d-xl-block mx-0 my-5 pt-4 order-4 border-0" width="18rem">`);
                } else if (item.id === 6) {
                    cardBlock.append(`<div class="card container d-md-none d-lg-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                } else if (item.id === 7) {
                    cardBlock.append(`<div class="card container d-none d-md-block mx-0 my-5 pt-4 border-0" width="18rem">`);
                }

                cardBlock.append(`<img class="card-img-top card-thumbnail" src=${item.thumb_url}>
                                    <div class="card-body row">
                                        <h5 class="card-title font-weight-bold">${item.title}</h5>
                                        <p class="card-text">${item.sub-title}</p>
                                    <div class="review">
                                        <img class="rounded-circle profile-1" src=${item.author_pic_url}>
                                        <span class="rating-text p-1 pl-2">${item.author}</span>
                                    </div>
                                    <span class="rating stars pt-1">
                                        ${stars.repeat(card.star)}
                                        ${noStar.repeat(5 - card.star)}
                                    </span>
                                    <span class="review-rate stars pt-1">${item.duration}</span>
                                </div>
                            </div>`);


                $('.popular-tutorials .loader').hide();
                $('.popular-tutorials').append(cardBlock);
                })
            })
        })
    }*/
$(document).ready(function (){
    if (document.URL.endsWith('homepage.html')) {
        getTestimonialQuotes();
        getPopularTutorials();
    } else if (document.URL.endsWith('pricing.html')) {
        getTestimonialQuotes();
    }
    

});