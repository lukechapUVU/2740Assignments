function handleImageSlider() {
    $(document).ready(function() {
        $('.img-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 100,
            cssEase: 'ease-out',
            autoplay: true,
            autoplaySpeed: 10000  
        })
    })
}
function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("hide");
}