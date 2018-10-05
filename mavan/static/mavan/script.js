jQuery(document).ready(function ($) {
    "use strict"; // Start of use strict
    $(function () {
        $(document).scroll(function () {
            let $nav = $("#mavan-nav");
            let $home = $("#home");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $home.height());

        });
    });


    $('.image-click').click(function () {
        let imageSrc = $(this).attr('src');
        imageSrc = imageSrc.replace('_thumbs', '');
        $('#moImg').attr('src', imageSrc);
        $('#moModal').show();
    });

    $('.close').click(function () {
        console.log('clickie');
        $('#moModal').hide();
    });

    // Get the modal
    let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

});


