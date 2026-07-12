/* app.js - Serene Dental Custom Premium JavaScript Interaction */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Preloader Dismissal ---
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }
    });
    
    // Backup preloader removal in case load event already fired
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }
    }, 2500);

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('span') : null;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-x-0');
            if (isOpen) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                if (mobileMenuIcon) mobileMenuIcon.textContent = 'menu';
            } else {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                if (mobileMenuIcon) mobileMenuIcon.textContent = 'close';
            }
        });
        
        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a, button');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                if (mobileMenuIcon) mobileMenuIcon.textContent = 'menu';
            });
        });
    }

    // --- Scroll Indicators & Sticky Nav ---
    const navbar = document.getElementById('main-navbar');
    const scrollProgress = document.getElementById('scroll-progress-bar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        // Progress bar width update
        if (scrollProgress) {
            scrollProgress.style.width = `${scrolled}%`;
        }

        // Sticky nav scroll behavior
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100');
            } else {
                backToTopBtn.classList.remove('opacity-100');
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Intersection Observer for Scroll Reveals ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });





    // --- Live Clinic Hours Check ---
    function updateClinicStatus() {
        const now = new Date();
        const hours = now.getHours();
        const mins = now.getMinutes();
        
        const statusText = document.getElementById('clinic-status-text');
        const statusDot = document.getElementById('clinic-status-dot');
        const statusFooter = document.getElementById('clinic-status-footer');

        // Opening timings: 9:00 AM (9) to 10:00 PM (22)
        const isOpen = (hours > 9 || (hours === 9 && mins >= 0)) && (hours < 22);

        if (isOpen) {
            const statusStr = "Open Now (9 AM - 10 PM)";
            if (statusText) statusText.textContent = statusStr;
            if (statusFooter) statusFooter.textContent = statusStr;
            if (statusDot) {
                statusDot.className = "pulse-dot open";
            }
        } else {
            const statusStr = "Closed Now (Opens 9:00 AM)";
            if (statusText) statusText.textContent = statusStr;
            if (statusFooter) statusFooter.textContent = statusStr;
            if (statusDot) {
                statusDot.className = "pulse-dot closed";
            }
        }
    }

    updateClinicStatus();
    setInterval(updateClinicStatus, 30000); // Check status every 30 seconds

    // --- Simplified Sample Appointment Form ---
    const bookingForm = document.getElementById('appointment-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('booking-name')?.value;
            const phone = document.getElementById('booking-phone')?.value;
            const service = document.getElementById('booking-service')?.value;

            if (name && phone && service) {
                alert(`Thank you, ${name}! Your callback request for ${service} has been simulated.\n\n[Sample Mode]: The real-time interactive calendar slot selection, automatic SMS dispatch, and patient dashboard portal are active in the Premium template.`);
                bookingForm.reset();
            }
        });
    }

    // --- Reviews Carousel Slider ---
    const track = document.getElementById('reviews-track');
    const btnReviewPrev = document.getElementById('btn-review-prev');
    const btnReviewNext = document.getElementById('btn-review-next');

    if (track) {
        let slides = Array.from(track.children);
        let currentIndex = 0;
        let autoPlayTimer = null;

        function getSlidesPerView() {
            return window.innerWidth >= 768 ? 2 : 1;
        }

        function maxScrollIndex() {
            return Math.max(0, slides.length - getSlidesPerView());
        }

        function updateSliderPosition() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            
            // Toggle button disabled styles
            if (btnReviewPrev) {
                btnReviewPrev.style.opacity = currentIndex === 0 ? '0.4' : '1';
                btnReviewPrev.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
            }
            if (btnReviewNext) {
                const isEnd = currentIndex >= maxScrollIndex();
                btnReviewNext.style.opacity = isEnd ? '0.4' : '1';
                btnReviewNext.style.pointerEvents = isEnd ? 'none' : 'auto';
            }
        }

        function nextSlide() {
            if (currentIndex < maxScrollIndex()) {
                currentIndex++;
            } else {
                currentIndex = 0; // Infinite wrap
            }
            updateSliderPosition();
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxScrollIndex();
            }
            updateSliderPosition();
        }

        // Event listeners
        if (btnReviewNext) {
            btnReviewNext.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });
        }
        if (btnReviewPrev) {
            btnReviewPrev.addEventListener('click', () => {
                prevSlide();
                resetAutoplay();
            });
        }

        // AutoPlay setup
        function startAutoplay() {
            autoPlayTimer = setInterval(nextSlide, 5000);
        }

        function resetAutoplay() {
            clearInterval(autoPlayTimer);
            startAutoplay();
        }

        // Handle window resize recalculation
        window.addEventListener('resize', () => {
            // Cap index if resizing makes it invalid
            const maxIdx = maxScrollIndex();
            if (currentIndex > maxIdx) {
                currentIndex = maxIdx;
            }
            updateSliderPosition();
        });

        // Swipe support (Touch events)
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(autoPlayTimer);
        }, {passive: true});

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoplay();
        }, {passive: true});

        function handleSwipe() {
            const threshold = 50;
            if (touchStartX - touchEndX > threshold) {
                // Swipe left -> Next
                nextSlide();
            } else if (touchEndX - touchStartX > threshold) {
                // Swipe right -> Prev
                prevSlide();
            }
        }

        // Initialize
        updateSliderPosition();
        startAutoplay();
    }

    // --- Interactive Review Submission Dialog ---
    const addReviewBtn = document.getElementById('add-review-btn');
    const reviewModal = document.getElementById('review-modal');
    const closeReviewModal = document.getElementById('close-review-modal');
    const submitReviewForm = document.getElementById('submit-review-form');

    if (addReviewBtn) {
        addReviewBtn.addEventListener('click', () => {
            alert("This is a demo. Dynamically submitting user reviews, automated moderation, and Google verification are Premium template features.");
        });
    }

    function closeModal() {
        if (reviewModal) {
            reviewModal.classList.remove('flex');
            reviewModal.classList.add('hidden');
        }
        document.body.classList.remove('overflow-hidden');
        if (submitReviewForm) submitReviewForm.reset();
    }

    if (closeReviewModal) {
        closeReviewModal.addEventListener('click', closeModal);
    }

    // Star selection interactive script
    const stars = document.querySelectorAll('.star-rating-select span');
    let selectedRating = 5;

    stars.forEach((star) => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            stars.forEach((s) => {
                const val = parseInt(s.getAttribute('data-value'));
                if (val <= selectedRating) {
                    s.classList.add('text-amber-400');
                    s.classList.remove('text-gray-300');
                    s.style.fontVariationSettings = "'FILL' 1";
                } else {
                    s.classList.remove('text-amber-400');
                    s.classList.add('text-gray-300');
                    s.style.fontVariationSettings = "'FILL' 0";
                }
            });
        });
    });

    if (submitReviewForm) {
        submitReviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('review-user-name')?.value;
            const text = document.getElementById('review-user-text')?.value;

            if (name && text) {
                const newReview = document.createElement('div');
                newReview.className = 'carousel-slide';
                
                const initials = name.charAt(0).toUpperCase();
                const colors = ['bg-indigo-500', 'bg-teal-500', 'bg-orange-500', 'bg-sky-500', 'bg-purple-500'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Construct stars html
                let starsHtml = '';
                for (let i = 1; i <= 5; i++) {
                    const fill = i <= selectedRating ? "font-variation-settings: 'FILL' 1;" : "";
                    starsHtml += `<span class="material-symbols-outlined text-sm text-amber-400" style="${fill}">star</span>`;
                }

                newReview.innerHTML = `
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div class="flex justify-between items-start mb-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-12 h-12 rounded-full ${randomColor} flex items-center justify-center text-white font-bold text-xl">${initials}</div>
                                    <div>
                                        <div class="font-bold text-primary">${name}</div>
                                        <div class="text-xs text-on-surface-variant">Just now</div>
                                    </div>
                                </div>
                                <span class="material-symbols-outlined text-primary text-xl opacity-20">format_quote</span>
                            </div>
                            <div class="flex gap-0.5 mb-3 items-center">
                                ${starsHtml}
                                <span class="material-symbols-outlined text-blue-500 text-sm ml-2">verified</span>
                            </div>
                            <p class="text-sm text-on-surface-variant leading-relaxed italic">"${text}"</p>
                        </div>
                    </div>
                `;

                // Add to track
                if (track) {
                    track.insertBefore(newReview, track.firstChild);
                    // Reset position and recalculate
                    slides = Array.from(track.children);
                    currentIndex = 0;
                    updateSliderPosition();
                }

                closeModal();
            }
        });
    }

    // Before & After Multi-Slider Logic
    const sliderCards = document.querySelectorAll('.before-after-slider-card');

    function adjustSliderImages() {
        sliderCards.forEach(card => {
            const W = card.offsetWidth;
            const beforeImg = card.querySelector('.before-img');
            const afterImg = card.querySelector('.after-img');
            
            if (beforeImg) {
                beforeImg.style.width = `${W * 2}px`;
            }
            if (afterImg) {
                afterImg.style.width = `${W * 2}px`;
                afterImg.style.left = `-${W}px`; // Shift it left by W so the right half aligns
            }
        });
    }

    sliderCards.forEach(card => {
        const input = card.querySelector('.slider-range-input');
        const container = card.querySelector('.after-container');
        const handle = card.querySelector('.slider-handle');

        if (input && container && handle) {
            input.addEventListener('input', (e) => {
                const val = e.target.value;
                container.style.width = `${val}%`;
                handle.style.left = `${val}%`;
            });
        }
    });

    // Initialize and adjust sizing
    adjustSliderImages();
    window.addEventListener('resize', adjustSliderImages);
    window.addEventListener('load', adjustSliderImages);
    setTimeout(adjustSliderImages, 500);
    setTimeout(adjustSliderImages, 2000);

    // Carousel track navigation for Before & After
    const bTrack = document.getElementById('case-studies-track');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (bTrack && prevBtn && nextBtn) {
        let scrollIndex = 0;
        
        function updateCarouselPosition() {
            const card = bTrack.querySelector('div');
            if (!card) return;
            const cardWidth = card.offsetWidth;
            const gap = 24; // Gap defined in HTML (gap-6 is 24px)
            const slideAmount = cardWidth + gap;
            
            // Calculate maximum index
            const visibleCards = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
            const maxIndex = Math.max(0, bTrack.children.length - visibleCards);
            
            if (scrollIndex > maxIndex) scrollIndex = maxIndex;
            if (scrollIndex < 0) scrollIndex = 0;
            
            bTrack.style.transform = `translateX(-${scrollIndex * slideAmount}px)`;
        }

        nextBtn.addEventListener('click', () => {
            scrollIndex++;
            updateCarouselPosition();
        });

        prevBtn.addEventListener('click', () => {
            scrollIndex--;
            updateCarouselPosition();
        });

        window.addEventListener('resize', updateCarouselPosition);
    }

    // Gallery Lightbox Controller Logic
    const galleryImages = document.querySelectorAll('#gallery img');
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightboxBtn = document.getElementById('close-lightbox');
    const lightboxPrevBtn = document.getElementById('lightbox-prev');
    const lightboxNextBtn = document.getElementById('lightbox-next');

    if (galleryImages.length > 0 && lightbox && lightboxImg && lightboxCaption) {
        let activeImageIndex = 0;
        const imageSources = Array.from(galleryImages).map(img => ({
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt') || 'The Tooth Clinic Ambience'
        }));

        function openLightbox(index) {
            activeImageIndex = index;
            const target = imageSources[index];
            
            lightboxImg.src = target.src;
            lightboxCaption.textContent = target.alt;
            
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            
            setTimeout(() => {
                lightbox.classList.remove('opacity-0');
                lightbox.classList.add('opacity-100');
                lightboxImg.classList.remove('scale-95');
                lightboxImg.classList.add('scale-100');
            }, 20);
        }

        function closeLightbox() {
            lightbox.classList.remove('opacity-100');
            lightbox.classList.add('opacity-0');
            lightboxImg.classList.remove('scale-100');
            lightboxImg.classList.add('scale-95');
            
            setTimeout(() => {
                lightbox.classList.remove('flex');
                lightbox.classList.add('hidden');
            }, 300);
        }

        galleryImages.forEach((img, idx) => {
            img.classList.add('cursor-pointer');
            // Make the wrapper container clickable
            const wrapper = img.closest('.gallery-zoom') || img;
            wrapper.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(idx);
            });
        });

        if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.id === 'close-lightbox') {
                closeLightbox();
            }
        });

        function showNextImage() {
            activeImageIndex = (activeImageIndex + 1) % imageSources.length;
            openLightbox(activeImageIndex);
        }

        function showPrevImage() {
            activeImageIndex = (activeImageIndex - 1 + imageSources.length) % imageSources.length;
            openLightbox(activeImageIndex);
        }

        if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
        if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrevImage();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
            }
        });
    }

    // Service cards click toggling logic
    const serviceCards = document.querySelectorAll('.service-hover-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            serviceCards.forEach(c => c.classList.remove('expanded'));
            if (!isExpanded) {
                card.classList.add('expanded');
            }
        });
    });

    // Disable all links and gallery zoom actions programmatically for sample showcase
    document.querySelectorAll('a, .gallery-zoom').forEach(elem => {
        elem.classList.add('pointer-events-none');
    });

});
