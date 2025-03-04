$(document).ready(function() {
    $(".tab-text, .arrow-right, .arrow-left").click(function() {
        var target = $(this).data("target") || "reviews"; 
        $(".tab-text").removeClass("active");
        $(".tab-text[data-target='" + target + "']").addClass("active"); 
        $(".content-section").fadeOut(400, function() {
            $("#" + target).fadeIn(600);
        });
    });
    
    $(".tab-text[data-target='about']").addClass("active");
    $("#about").show();
});

function showHits() {
    let hitsSection = document.getElementById("hity");
    if (!hitsSection.classList.contains("active")) {
        hitsSection.style.display = "block"; 
        setTimeout(() => {
            hitsSection.classList.add("active");
        }, 20); 
    }
}

window.onload = function () {
    let textElements = document.querySelectorAll(".fade-in-text");
    let imageElements = document.querySelectorAll(".fade-in-image");

    textElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, index * 300); 
    });

    imageElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, index * 200);
    });
};




let selectedProduct = "";
        let selectedPrice = "";
        function showModal(element) {
            selectedProduct = element.parentElement.querySelector('.product-name').innerText;
            selectedPrice = element.parentElement.querySelector('.product-price').innerText;
            document.getElementById('cart-modal').style.display = 'block';
        }
        function hideModal() {
            document.getElementById('cart-modal').style.display = 'none';
        }
        document.getElementById('whatsapp-button').addEventListener('click', function() {
            let phoneNumber = "77054515807"; 
            let message = `Здравствуйте! Меня заинтересовал ваш прекрасный букет" ${selectedProduct} " ,по цене: "${selectedPrice}". Я хотела бы узнать о его наличии и условиях доставки. Буду благодарна за подробную информацию. Спасибо!`;
            let encodedMessage = encodeURIComponent(message);
            let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.location.href = whatsappUrl;
        });