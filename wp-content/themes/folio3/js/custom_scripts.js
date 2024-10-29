jQuery('.stories_name li').on('click', function() {
    jQuery('.stories_name li, .stories_content').removeClass("active");
    jQuery(this).addClass("active");
    jQuery('.stories_content').eq(jQuery(this).index()).show().siblings().hide(); // <-- here
    jQuery('.stories_content').eq(jQuery(this).index()).addClass("active");
});
jQuery(document).ready(function() {
    jQuery(".success_stories").css("background-image", "url('https://www.folio3.com/wp-content/uploads/2019/06/red.jpg')");
});
jQuery(document).ready(function() {
    jQuery('.stories_name li').on('click', function() {
        var myBG = jQuery(this).attr('data-bg');
        // alert(myBG);
        jQuery('.success_stories').css({
            'background': 'url(' + myBG + ')'
        });
    });


});

jQuery(function() {
    var nice =
        jQuery(".mynicescroll").niceScroll({
            cursorcolor: "#ffffff",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            background: "#1d99cd",
            cursorminheight: '64',
            scrollspeed: '50',
            autohidemode: 'false',
            railpadding: {
                top: 2,
                left: 3,
                bottom: 3,
                right: 3
            },
            overflowy: 'false'
        });

    var _super = nice.getContentSize;

    nice.getContentSize = function() {
        var page = _super.call(nice);
        page.h = nice.win.height();
        return page;
    }

    jQuery('.nicescroll-rails.nicescroll-rails-vr').remove();
});

jQuery(document).ready(function($) {
    //$('.modal-body .casestudy_carousel').remove();
    $('.modal-body .casestudy_carousel').addClass('owl-carousel owl-theme');
    $('.modal-body .casestudy_carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        navText: ["Previous", "Next"]
    });

    $('.section-clients-content .section-clients-carousel-updated').addClass('owl-carousel owl-theme');
    $('.section-clients-content .section-clients-carousel-updated').owlCarousel({
        loop: true,
        items: 6,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: false
    });

});


jQuery(function() {
    jQuery('.content').hide();

});
jQuery('.list li').on('click', function() {
    jQuery('.list li, .content, .content_img').removeClass("active");
    jQuery(this).addClass("active");
    jQuery('.content').eq(jQuery(this).index()).show().siblings().hide(); // <-- here
    jQuery('.content').eq(jQuery(this).index()).addClass("active");
    jQuery('.content_img').eq(jQuery(this).index()).show().siblings().hide(); // <-- here
    jQuery('.content_img').eq(jQuery(this).index()).addClass("active");
});

jQuery(function() {

    jQuery('a.wpb_button_a').click(function() {
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
});

jQuery(document).ready(function(e) {

        jQuery(".popup_cf7").wrapAll('<div class="modal-dialog popup_wrapper"></div>');
        jQuery(".popup_wrapper").wrapAll('<div class="modal fade" id="analyze" role="dialog"></div>');
        jQuery('<button type="button" class="close" data-dismiss="modal">&times;</button>').insertAfter(".popup_cf7.modal-content");
    }


);

/* TypeWriter Script */
jQuery(document).ready(function(e) {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
});







//================================

// jQuery(function(){
//     setHeight();
// });

// jQuery(window).resize(function(){
//     setHeight()
// });

// function setHeight(){
//     var ht = jQuery('.single_study .wpb_single_image').height();
//     alert(ht);
//     jQuery('#casebtn').height(ht);
// }

// function imgSet() {
//         jQuery('[data-imgurl]').each(function($) {
//             var $this = $(this),
//                 ele = $this.attr('src'),
//                 attData = $this.data('imgurl');

//             if (ele !== undefined) {
//                 $this.attr('src', attData);
//             } else {
//                 $this.css({
//                     "background-image": 'url(' + attData + ')'
//                 });
//             }
//         });
//     }
//     imgSet();
//     imgHoverSet();

//     function imgHoverSet() {
//         jQuery('[data-imgurl-hover]').each(function($) {
//             var $this = $(this),
//                 attData = $this.data('imgurl-hover'),
//                 attDatas = $this.data('imgurl');
//             $this.hover(
//                 function() {
//                     $this.css({
//                         "background-image": 'url(' + attData + ')'
//                     });
//                 },
//                 function() {
//                     $this.css({
//                         "background-image": 'url(' + attDatas + ')'
//                     });
//                 }
//             );

//         });
//     }