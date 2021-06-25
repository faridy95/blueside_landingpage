(function() {
    //===== Prealoder
    
       /*  window.onload = function () {
            window.setTimeout(fadeout, 500);
        }
    
        function fadeout() {
            document.querySelector('.preloader').style.opacity = '0';
            document.querySelector('.preloader').style.display = 'none';
        }
     */
    
        /*=====================================
        Sticky
        ======================================= */
        window.onscroll = function () {
            var header_navbar = document.querySelector(".navbar-area");
            var sticky = header_navbar.offsetTop;
    
            if (window.pageYOffset > sticky) {
                header_navbar.classList.add("sticky");
            } else {
                header_navbar.classList.remove("sticky");
            }
    
    
    
            // show or hide the back-top-top button
     
        };
    
        // Get the navbar
    
    
        // for menu scroll 
        var pageLink = document.querySelectorAll('.page-scroll');
        
        pageLink.forEach(elem => {
            elem.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(elem.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    offsetTop: 1 - 60,
                });
            });
        });
    
    
        //===== close navbar-collapse when a  clicked
        let navbarToggler = document.querySelector(".navbar-toggler");    
        var navbarCollapse = document.querySelector(".navbar-collapse");
    
        document.querySelectorAll(".page-scroll").forEach(e =>
            e.addEventListener("click", () => {
                navbarToggler.classList.remove("active");
                navbarCollapse.classList.remove('show')
            })
        );
        navbarToggler.addEventListener('click', function() {
            navbarToggler.classList.toggle("active");
        }) 
    
    
        // WOW active
        new WOW().init();
    
        
        //====== counter up 
        var cu = new counterUp({
            start: 0,
            duration: 2000,
            intvalues: true,
            interval: 100,
            append: " ",
        });
        cu.start();
    
    })();
    $('#customers-testimonials').owlCarousel( {
        loop: true,
        center: true,
        items: 4,
        margin: 50,
        autoplay: true,
        dots:true,
        nav:false,
        autoplayTimeout: 8500,
        smartSpeed: 200,
        slideSpeed : 200,
        paginationSpeed : 300,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    
    $("#owl-demo").owlCarousel({
        nav : false, // Show next and prev buttons
        slideSpeed : 200,
        paginationSpeed : 300,
        items : 1, 
        itemsDesktop : true,
        itemsDesktopSmall : true,
        itemsTablet: true,
        itemsMobile : true,
        center: true,
        loop: true,
        dots: true,
        autoplay: true
    });