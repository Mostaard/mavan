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
        $('#caption').html('');
        $('#price').html('');

        let imageSrc = $(this).attr('src');
        imageSrc = imageSrc.replace('_thumbs', '');
        $('#moImg').attr('src', imageSrc);
        $('#moModal').show();
    });

    $('.dyn-img').click(function () {
        let imageSrc = $(this).attr('src');
        let url = imageSrc.split('.');
        let urlString = url[2];
        url[2] = urlString.substring(0, urlString.length - 1);
        let newSrc = url.join('.');
        $('#moImg').attr('src', newSrc);
        $('#caption').html($(this).parent().find('.name')[0].innerHTML);
        let price = $(this).parent().find('.price')[0].innerHTML;
        if (price !== '' && price > 0) {
            $('#price').html(`€ ${price}`);
        } else {
            $('#price').html('');
        }
        $('#moModal').show();
    });


    $('.close').click(function () {
        $('#moModal').hide();
    });

});


