function showPhoto(id, title_text) {
    showModal(id, title_text);
}

function showModal(id, title_text) {
    var modal = document.querySelector(".modal");
    var backdrop = document.querySelector(".backdrop");
    var title = document.querySelector(".modal .title");
    var image = document.querySelector(".modal .image img");
    modal.style.display = 'block';
    backdrop.style.display = 'block';
    title.innerText = title_text;
    image.src = "assets/images/photo-" + id + ".jpg"
    image.srcset = generateSRCSET(id);
}

function generateSRCSET(id) {
    var srcset_string = "";
    var resolutions = ['320', '640', '750', '828', '1440', '1536', '2048', '3840'];
    for(var i in resolutions) {
        var w = resolutions[i];
        srcset_string += "assets/images/photo-" + id + "@" + w + "w.jpg " + w + "w";

        console.log(i + ' ' + (resolutions.length - 1));
        if(parseInt(i) === resolutions.length - 1) {
            srcset_string += ''
        } else {
            srcset_string += ', '
        }
    }
    return srcset_string;
}

function hideModal() {
    var modal = document.querySelector(".modal");
    var backdrop = document.querySelector(".backdrop");
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function(){
    var close_button = document.querySelector(".close");
    var backdrop = document.querySelector(".backdrop");

    close_button.addEventListener("click",function(e){
        hideModal();
    },false);

    backdrop.addEventListener("click",function(e){
        hideModal();
    },false);

    // object fit fallback

    // If object fit supported
    if('objectFit' in document.documentElement.style === false) {

        // get all image items
        var items = document.querySelectorAll('.item');

        // Iterate through image items
        for(var i = 0; i < items.length; i++) {
            console.log(items[i]);

            if(!items[i].querySelector('img'))
                continue;
            // Get image source
            var imageSource = items[i].querySelector('a').href;

            // Hide image
            items[i].querySelector('a').style.display = 'none';

            // Add background-size: cover
            items[i].style.backgroundSize = 'cover';

            // Add background-image: and put image source here
            items[i].style.backgroundImage = 'url(' + imageSource + ')';

            // Add background-position: center center
            items[i].style.backgroundPosition = 'center center';
        }
    }
});