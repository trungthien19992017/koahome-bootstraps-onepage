       // Add scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Animate elements when they come into view
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.animate__animated');
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        const delay = element.getAttribute('data-delay') || '0';
                        element.style.animationDelay = delay + 's';
                        element.classList.add('animate__fadeInUp');
                    }
                });
            };
            
            // Initial check
            animateOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', animateOnScroll);
            
            // Back to top button
            const backToTopButton = document.querySelector('.back-to-top');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTopButton.style.display = 'flex';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });
            
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Add random floating elements
            const heroSection = document.querySelector('.hero-section');
            const emojis = ['🌸', '🌟', '🌈', '🍄', '🧸', '🎈', '🎀', '🐇', '🦄', '🍬', '🎠', '🌼', '🍡', '🎂'];
            
            for (let i = 0; i < 12; i++) {
                const element = document.createElement('div');
                element.className = 'cute-element';
                element.style.top = `${Math.random() * 80 + 10}%`;
                element.style.left = `${Math.random() * 80 + 10}%`;
                element.style.fontSize = `${Math.random() * 1 + 1}rem`;
                element.style.opacity = `${Math.random() * 0.5 + 0.3}`;
                element.style.animationDelay = `${Math.random() * 2}s`;
                
                const emoji = document.createElement('span');
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.animation = `floating ${3 + Math.random() * 2}s ease-in-out infinite`;
                
                element.appendChild(emoji);
                heroSection.appendChild(element);
            }
            
            // Add hover effect to room cards
            const roomCards = document.querySelectorAll('.room-card');
            roomCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });

    // Thêm emoji bay quanh phòng
    document.querySelectorAll('.room-card').forEach((card, index) => {
        const emojis = ['🌟', '✨', '🌸', '🏠', '🛏️', '🛁', '🍵', '🧦', '📚', '🎵'];
        for (let i = 0; i < 5; i++) {
            const emoji = document.createElement('span');
            emoji.className = 'room-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 80 + 10}%`;
            emoji.style.top = `${Math.random() * 80 + 10}%`;
            emoji.style.animationDelay = `${Math.random() * 5}s`;
            card.appendChild(emoji);
        }
    });

    // Thêm vào phần script cuối trang
    document.addEventListener('DOMContentLoaded', function() {
        const serviceSection = document.querySelector('.service');
        const koaImages = ['koa-music', 'koa-smile', 'koa-victory', 'koa-yummy', 'koa-sleep'];
        
        koaImages.forEach((imgName, index) => {
            const img = document.createElement('img');
            img.src = `img/icon/${imgName}.png`; // Đảm bảo đường dẫn đúng
            img.className = 'koa-floating-img';
            img.alt = `KOA ${imgName.split('-')[1]}`;
            
            // Thiết lập vị trí ngẫu nhiên
            img.style.left = `${10 + Math.random() * 80}%`;
            img.style.top = `${10 + Math.random() * 80}%`;
            
            // Thiết lập animation delay khác nhau
            img.style.animationDelay = `${index * 2}s`;

            // 👉 Thêm sự kiện click để "jump"
            img.addEventListener('click', () => {
                img.style.animationDelay = `0s`;
                img.classList.add('jump-on-click');

                // Gỡ class sau khi animation kết thúc (để click lần nữa vẫn nhảy)
                img.addEventListener('animationend', function handler() {
                    img.classList.remove('jump-on-click');
                    img.removeEventListener('animationend', handler);
                });
            });

            serviceSection.appendChild(img);
        });
    });

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split('; '),
            typeSpeed: 100,
            backSpeed: 20,
            backDelay: 3000,
            smartBackspace: false,
            loop: true,
            cursorChar: '🐨',
        });
    }

    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    // tạo chuyển động lặp cho list ảnh
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
    // tạo chuyển động lặp cho list phòng
    $('.vendor-room-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

    // tạo chuyển động lặp cho list quy tắc
    $('.vendor-rule-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

    // // Làm khó người dùng lấy source code
    // // Ngăn F12, Ctrl+Shift+I/J/C/U, ngăn chặn save source, chuột phải
    // document.addEventListener("contextmenu", e => e.preventDefault());

    // document.addEventListener("keydown", function (e) {
    //     if (
    //         e.key === "F12" || 
    //         (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
    //         (e.ctrlKey && e.key.toUpperCase() === "U") ||
    //         (e.ctrlKey && e.key.toUpperCase() === "S")
    //     ) {
    //         e.preventDefault();
    //     }
    // });

    // // Phát hiện DevTools mở
    // (function () {
    //     let devtoolsOpen = false;

    //     const detectDevTools = () => {
    //         const start = performance.now();
    //         debugger;
    //         const end = performance.now();

    //         if (end - start > 100) {
    //             if (!devtoolsOpen) {
    //                 devtoolsOpen = true;
    //                 alert("Trang không cho phép mở DevTools. Đang chuyển hướng...");
    //                 window.location.href = "about:blank"; // hoặc window.close();
    //             }
    //         } else {
    //             devtoolsOpen = false;
    //         }
    //     };

    //     setInterval(detectDevTools, 1000);
    // })();   