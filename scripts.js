$(document).ready(function (){
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

                $('#testimonial > .loader').hide();
                $('#testimonial').append(carouselItem);
            });
        });   
    }
    
    getTestimonialQuotes();
});