function showPhoto(id, title_text) {
    showModal(id, title_text);
}

function showModal(id, title_text) {
    const modal = document.querySelector(".modal");
    const backdrop = document.querySelector(".backdrop");
    const title = document.querySelector(".modal .title");
    const image = document.querySelector(".modal .image img");
    modal.style.display = 'block';
    backdrop.style.display = 'block';
    title.innerText = title_text;
    image.src = "assets/images/photo-" + id + ".jpg"
}

function hideModal() {
    const modal = document.querySelector(".modal");
    const backdrop = document.querySelector(".backdrop");
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function(){
    const close_button = document.querySelector(".close");
    const backdrop = document.querySelector(".backdrop");

    close_button.addEventListener("click",function(e){
        hideModal();
    },false);

    backdrop.addEventListener("click",function(e){
        hideModal();
    },false);

});