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
        const serviceSection = document.querySelector('.koa-bubble');
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
            
            if (serviceSection != null) {
                serviceSection.appendChild(img);
            }
            
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

        // Modal Process Video
        let processVideoPlayer = null;
        $('#processVideoModal').on('shown.bs.modal', function (e) {
            $("#processVideo").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
            // Khởi tạo Plyr
            processVideoPlayer = new Plyr(`#plyr-video-player-process`, {
                autoplay: false,
                loop: { active: true },
                volume: 1,
                speed: { selected: 1, options: [0.75, 1, 1.25, 1.5, 2] },
                controls: [
                    'play-large', 'rewind', 'play', 'fast-forward',
                    'progress', 'current-time', 'duration',
                    'mute', 'volume', 'captions', 'settings', 'fullscreen', 'pip'
                ],
                i18n: {
                    restart: 'Phát lại',
                    rewind: 'Lùi 10s',
                    play: 'Phát',
                    pause: 'Tạm dừng',
                    fastForward: 'Tiến 10s',
                    fullscreen: 'Toàn màn hình',
                    settings: 'Cài đặt',
                    captions: 'Phụ đề',
                    volume: 'Âm lượng'
                }
            });
        })

        $('#processVideoModal').on('hide.bs.modal', function (e) {
            $("#processVideo").attr('src', $videoSrc);
            // Hủy Plyr khi đóng modal
            if (processVideoPlayer) {
                processVideoPlayer.destroy();
            }
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


          // xử lý video file trên form field
         document.addEventListener('DOMContentLoaded', () => {
          // Lấy tất cả các phần tử có class youtube-video-embed
          const wrappers = document.querySelectorAll('.video-player-embed');

          wrappers.forEach((wrapper, index) => {
            const embed = wrapper.querySelector('.plyr__video-embed');

            // Gán ID duy nhất nếu chưa có
            if (!embed.id) {
              embed.id = `plyr-video-${index}`;
            }

            // Khởi tạo Plyr
            let videoPlayer = new Plyr(`#${embed.id}`, {
              autoplay: false,
              loop: { active: false },
              volume: 1,
              speed: { selected: 1, options: [0.75, 1, 1.25, 1.5, 2] },
              controls: [
                  'play-large', 'rewind', 'play', 'fast-forward',
                  'progress', 'current-time', 'duration',
                  'mute', 'volume', 'captions', 'settings', 'fullscreen', 'pip'
              ],
              i18n: {
                  restart: 'Phát lại',
                  rewind: 'Lùi 10s',
                  play: 'Phát',
                  pause: 'Tạm dừng',
                  fastForward: 'Tiến 10s',
                  fullscreen: 'Toàn màn hình',
                  settings: 'Cài đặt',
                  captions: 'Phụ đề',
                  volume: 'Âm lượng'
              }
            });

            //hiển thị trong now playing IOS
            videoPlayer.on('play', () => {
              const videoTitle = embed.getAttribute('title') || 'KOA Video'; // fallback nếu không có title

              if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                  title: videoTitle,
                  artist: 'KOA Video',
                  album: 'KOA Video Album',
                  artwork: [
                       { src: 'https://pub-7171d6b031a04e3983a20a87daffce46.r2.dev/koala_with_headphones.png', sizes: '512x512', type: 'image/png' }
                  ]
                });
              }
            });

            // Ví dụ xử lý sự kiệnx1
            videoPlayer.on('ended', () => {
                rplm({
                    title: "Hoàn tất video!",
                    text: "Cảm ơn bạn đã quan tâm 💞💓🎞🎮.",
                    type: "success",
                    timer: 3000,
                    html: true,
                    showConfirmButton: false,
			        allowOutsideClick: true
                });
                // Tạo một container cho hiệu ứng mưa
                const rainContainer = document.createElement('div');
                rainContainer.classList.add('rain-container');
                document.body.appendChild(rainContainer);

                // Số lượng icon mưa
                const numberOfIcons = 30;

                // Tạo các icon 💞 ngẫu nhiên và rơi từ trên xuống
                for (let i = 0; i < numberOfIcons; i++) {
                    const rainIcon = document.createElement('span');
                    rainIcon.classList.add('rain-icon');
                    rainIcon.innerHTML = '️♥️'; // Icon muốn hiển thị

                    // Tạo vị trí ngẫu nhiên cho từng icon
                    rainIcon.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên
                    rainIcon.style.top = `-${Math.random() * 10 + 10}vh`; // Vị trí dọc ngẫu nhiên ngoài màn hình (trên cùng)

                    rainIcon.style.animationDuration = `${Math.random() * 2 + 3}s`; // Thời gian rơi ngẫu nhiên từ 3s đến 5s

                    // Thêm độ trễ ngẫu nhiên để hiệu ứng mưa không đồng loạt
                    rainIcon.style.animationDelay = `${Math.random() * 1}s`; // Thời gian trễ ngẫu nhiên từ 0s đến 1s

                    // Thêm icon vào rain container
                    rainContainer.appendChild(rainIcon);
                }

                // Sau khi hiệu ứng mưa hoàn thành, xóa rain container
                setTimeout(() => {
                    rainContainer.remove();
                }, 5000); // Thời gian hiệu ứng mưa (5 giây)
                
            });
          });
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
