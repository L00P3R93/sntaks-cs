(function ($) {
    "use strict";
 

    /*-------------------------------------
    On Load
    -------------------------------------*/
    $(window).on('load resize', function () {

        $('body').imagesLoaded().done(function (instance) {
            $('body').addClass('loaded');
        });

        $('[data-type="section-switch"], #triger-page-content').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                if (target.length > 0) {

                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });

    /*-------------------------------------
    Intersection Observer
    -------------------------------------*/
    function runObserver() {
        if (!!window.IntersectionObserver) {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active-animation");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: "0px 0px -150px 0px"
            });
            document.querySelectorAll('.has-animation').forEach(block => {
                observer.observe(block)
            });
        } else {
            document.querySelectorAll('.has-animation').forEach(block => {
                block.classList.remove('has-animation')
            });
        }
    }

    runObserver();

    /*-------------------------------------
	Section background image
	-------------------------------------*/
    $("[data-bg-image]").each(function () {
        var img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")"
        });
    });

    /*-------------------------------------
    Countdown activation code
    -------------------------------------*/
    $(function () {        
        var eventCounter = $(".countdown");
        if (eventCounter.length) {
            eventCounter.countdown("2022/8/01", function (e) {
                $(this).html(
                    e.strftime(
                        "<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Second</div> </div></div>"
                    )
                );
            });
        }
    });

})(jQuery);