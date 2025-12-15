// // ==================== Main JavaScript File ====================

// // ==================== Dark Mode Toggle ====================
// const themeToggle = document.getElementById('themeToggle');
// const html = document.documentElement;

// // Check for saved theme preference
// const currentTheme = localStorage.getItem('theme') || 'light';
// html.setAttribute('data-theme', currentTheme);
// updateThemeIcon(currentTheme);

// themeToggle.addEventListener('click', () => {
//     const currentTheme = html.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
//     html.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//     updateThemeIcon(newTheme);
// });

// function updateThemeIcon(theme) {
//     const icon = themeToggle.querySelector('i');
//     if (theme === 'dark') {
//         icon.className = 'fas fa-sun';
//     } else {
//         icon.className = 'fas fa-moon';
//     }
// }

// // ==================== Language Toggle ====================
// const languageToggle = document.getElementById('languageToggle');
// let currentLang = 'ar';

// languageToggle.addEventListener('click', () => {
//     if (currentLang === 'ar') {
//         currentLang = 'en';
//         languageToggle.querySelector('span').textContent = 'عربي';
//         document.documentElement.setAttribute('lang', 'en');
//         document.documentElement.setAttribute('dir', 'ltr');
//     } else {
//         currentLang = 'ar';
//         languageToggle.querySelector('span').textContent = 'English';
//         document.documentElement.setAttribute('lang', 'ar');
//         document.documentElement.setAttribute('dir', 'rtl');
//     }
// });

// // ==================== Search Functionality ====================
// const searchInput = document.getElementById('searchInput');
// const searchSuggestions = document.getElementById('searchSuggestions');

// const searchData = [
//     'حسابات التوفير',
//     'القروض الشخصية',
//     'بطاقات الائتمان',
//     'الحسابات الجارية',
//     'شهادات الاستثمار',
//     'الخدمات الرقمية',
//     'تحويل الأموال',
//     'فتح حساب جديد',
//     'أسعار الصرف',
//     'فروع البنك',
//     'خدمة العملاء',
//     'القروض العقارية',
//     'قروض السيارات',
//     'الحسابات الإسلامية',
//     'الودائع'
// ];

// searchInput.addEventListener('input', (e) => {
//     const value = e.target.value.toLowerCase().trim();
    
//     if (value.length > 0) {
//         const filtered = searchData.filter(item => 
//             item.toLowerCase().includes(value)
//         );
        
//         if (filtered.length > 0) {
//             displaySuggestions(filtered);
//         } else {
//             searchSuggestions.classList.remove('active');
//         }
//     } else {
//         searchSuggestions.classList.remove('active');
//     }
// });

// function displaySuggestions(suggestions) {
//     searchSuggestions.innerHTML = '';
//     suggestions.slice(0, 5).forEach(suggestion => {
//         const div = document.createElement('div');
//         div.className = 'suggestion-item';
//         div.innerHTML = `<i class="fas fa-search" style="margin-left: 10px;"></i> ${suggestion}`;
//         div.addEventListener('click', () => {
//             searchInput.value = suggestion;
//             searchSuggestions.classList.remove('active');
//             // Here you would normally perform the actual search
//             alert(`البحث عن: ${suggestion}`);
//         });
//         searchSuggestions.appendChild(div);
//     });
//     searchSuggestions.classList.add('active');
// }

// // Close suggestions when clicking outside
// document.addEventListener('click', (e) => {
//     if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
//         searchSuggestions.classList.remove('active');
//     }
// });

// // ==================== Hero Carousel ====================
// const slides = document.querySelectorAll('.carousel-slide');
// const prevBtn = document.getElementById('prevSlide');
// const nextBtn = document.getElementById('nextSlide');
// const thumbnailsContainer = document.getElementById('carouselThumbnails');

// let currentSlide = 0;
// let autoPlayInterval;

// // Create thumbnails
// // slides.forEach((slide, index) => {
// //     const thumbnail = document.createElement('div');
// //     thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
// //     thumbnail.textContent = index + 1;
// //     thumbnail.addEventListener('click', () => goToSlide(index));
// //     thumbnailsContainer.appendChild(thumbnail);
// // });


// // const thumbnails = document.querySelectorAll('.thumbnail');
// // Create dots
// slides.forEach((slide, index) => {
//     const dot = document.createElement('div');
//     dot.className = `dot ${index === 0 ? 'active' : ''}`;
//     dot.addEventListener('click', () => goToSlide(index));
//     thumbnailsContainer.appendChild(dot);
// });

// const thumbnails = document.querySelectorAll('.dot');


// function goToSlide(n) {
//     slides[currentSlide].classList.remove('active');
//     thumbnails[currentSlide].classList.remove('active');
    
//     currentSlide = (n + slides.length) % slides.length;
    
//     slides[currentSlide].classList.add('active');
//     thumbnails[currentSlide].classList.add('active');
    
//     resetAutoPlay();
// }

// function nextSlide() {
//     goToSlide(currentSlide + 1);
// }

// function prevSlide() {
//     goToSlide(currentSlide - 1);
// }

// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// // Auto play
// function startAutoPlay() {
//     autoPlayInterval = setInterval(nextSlide, 5000);
// }

// function resetAutoPlay() {
//     clearInterval(autoPlayInterval);
//     startAutoPlay();
// }

// startAutoPlay();

// // Pause on hover
// const carousel = document.getElementById('heroCarousel');
// carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
// carousel.addEventListener('mouseleave', startAutoPlay);

// // Keyboard navigation
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowLeft') nextSlide();
//     if (e.key === 'ArrowRight') prevSlide();
// });

// // ==================== Currency Converter ====================
// const fromCurrency = document.getElementById('fromCurrency');
// const toCurrency = document.getElementById('toCurrency');
// const fromAmount = document.getElementById('fromAmount');
// const toAmount = document.getElementById('toAmount');
// const swapBtn = document.getElementById('swapCurrencies');

// // Exchange rates (relative to EGP)
// const exchangeRates = {
//     'EGP': 1,
//     'USD': 0.0211,
//     'EUR': 0.0193,
//     'GBP': 0.0165,
//     'SAR': 0.0790,
//     'AED': 0.0774
// };

// function convertCurrency() {
//     const from = fromCurrency.value;
//     const to = toCurrency.value;
//     const amount = parseFloat(fromAmount.value) || 0;
    
//     // Convert from source currency to EGP, then to target currency
//     const amountInEGP = amount / exchangeRates[from];
//     const convertedAmount = amountInEGP * exchangeRates[to];
    
//     toAmount.value = convertedAmount.toFixed(2);
// }

// fromAmount.addEventListener('input', convertCurrency);
// fromCurrency.addEventListener('change', convertCurrency);
// toCurrency.addEventListener('change', convertCurrency);

// swapBtn.addEventListener('click', () => {
//     // Swap currencies
//     const tempCurrency = fromCurrency.value;
//     fromCurrency.value = toCurrency.value;
//     toCurrency.value = tempCurrency;
    
//     // Swap amounts
//     const tempAmount = fromAmount.value;
//     fromAmount.value = toAmount.value;
//     toAmount.value = tempAmount;
    
//     convertCurrency();
// });

// // Initial conversion
// convertCurrency();

// // ==================== News Auto-Scroll ====================
// const newsSlider = document.getElementById('newsSlider');
// const newsItems = document.querySelectorAll('.news-item');
// let newsIndex = 0;

// function scrollNews() {
//     newsIndex = (newsIndex + 1) % newsItems.length;
//     const scrollAmount = newsIndex * (newsItems[0].offsetHeight + 15); // height + gap
//     newsSlider.style.transform = `translateY(-${scrollAmount}px)`;
// }

// // Auto-scroll every 4 seconds
// setInterval(scrollNews, 4000);

// // Pause on hover
// newsSlider.addEventListener('mouseenter', () => {
//     newsSlider.style.animationPlayState = 'paused';
// });

// newsSlider.addEventListener('mouseleave', () => {
//     newsSlider.style.animationPlayState = 'running';
// });

// // ==================== Stats Counter Animation ====================
// const statsSection = document.querySelector('.stats-section');
// const statNumbers = document.querySelectorAll('.stat-number');
// let hasAnimated = false;

// function animateStats() {
//     statNumbers.forEach(stat => {
//         const target = parseInt(stat.getAttribute('data-target'));
//         const duration = 2000; // 2 seconds
//         const increment = target / (duration / 16); // 60fps
//         let current = 0;
        
//         const updateCounter = () => {
//             current += increment;
//             if (current < target) {
//                 stat.textContent = Math.floor(current).toLocaleString('ar-EG');
//                 requestAnimationFrame(updateCounter);
//             } else {
//                 stat.textContent = target.toLocaleString('ar-EG');
//                 // Add + or % suffix based on content
//                 if (stat.parentElement.querySelector('.stat-label').textContent.includes('رضا')) {
//                     stat.textContent += '%';
//                 } else {
//                     stat.textContent += '+';
//                 }
//             }
//         };
        
//         updateCounter();
//     });
// }

// // Intersection Observer for stats animation
// const statsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && !hasAnimated) {
//             hasAnimated = true;
//             animateStats();
//         }
//     });
// }, { threshold: 0.5 });

// if (statsSection) {
//     statsObserver.observe(statsSection);
// }

// // ==================== Newsletter Form ====================
// const newsletterForm = document.getElementById('newsletterForm');

// newsletterForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const email = newsletterForm.querySelector('.newsletter-input').value;
    
//     if (email) {
//         // Show success message
//         alert(`شكراً! تم الاشتراك بنجاح بالبريد: ${email}`);
//         newsletterForm.reset();
//     }
// });

// // ==================== Chatbot ====================
// const chatbotTrigger = document.getElementById('chatbotTrigger');

// chatbotTrigger.addEventListener('click', () => {
//     alert('مرحباً! كيف يمكننا مساعدتك اليوم؟\n\nهذه نسخة تجريبية - في النسخة الكاملة سيفتح نافذة الشات');
//     // Here you would open the actual chatbot interface
// });

// // ==================== Smooth Scroll for Links ====================
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // ==================== Navbar Scroll Effect ====================
// const navbar = document.querySelector('.main-navbar');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
    
//     if (currentScroll > 100) {
//         navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
//         navbar.style.padding = '10px 0';
//     } else {
//         navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
//         navbar.style.padding = '15px 0';
//     }
    
//     lastScroll = currentScroll;
// });

// // ==================== Service Cards Click ====================
// const serviceCards = document.querySelectorAll('.service-card');

// serviceCards.forEach(card => {
//     card.addEventListener('click', () => {
//         const serviceName = card.querySelector('h3').textContent;
//         alert(`جاري تحميل صفحة: ${serviceName}`);
//         // Here you would navigate to the actual service page
//     });
// });

// // ==================== Mobile Menu Toggle ====================
// const mobileMenuBtn = document.getElementById('mobileMenuBtn');
// const navMenu = document.querySelector('.nav-menu');

// if (mobileMenuBtn) {
//     mobileMenuBtn.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//         const icon = mobileMenuBtn.querySelector('i');
        
//         if (navMenu.classList.contains('active')) {
//             icon.classList.remove('fa-bars');
//             icon.classList.add('fa-times');
//             navMenu.style.display = 'flex';
//             navMenu.style.flexDirection = 'column';
//             navMenu.style.position = 'absolute';
//             navMenu.style.top = '100%';
//             navMenu.style.right = '0';
//             navMenu.style.background = 'white';
//             navMenu.style.width = '100%';
//             navMenu.style.padding = '20px';
//             navMenu.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
//         } else {
//             icon.classList.remove('fa-times');
//             icon.classList.add('fa-bars');
//             navMenu.style.display = 'none';
//         }
//     });
// }

// // ==================== Lazy Loading Images ====================
// const images = document.querySelectorAll('img[data-src]');

// const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const img = entry.target;
//             img.src = img.dataset.src;
//             img.removeAttribute('data-src');
//             observer.unobserve(img);
//         }
//     });
// });

// images.forEach(img => imageObserver.observe(img));

// // ==================== Form Validation ====================
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// // ==================== Accessibility ====================
// // Add keyboard navigation support
// document.addEventListener('keydown', (e) => {
//     // Tab trap for mega menu when open
//     if (e.key === 'Escape') {
//         const openMenus = document.querySelectorAll('.mega-menu');
//         openMenus.forEach(menu => {
//             menu.style.display = 'none';
//         });
//     }
// });

// // ==================== Performance Optimization ====================
// // Debounce function for scroll events
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // ==================== Analytics ====================
// // Track page sections in view
// const sections = document.querySelectorAll('section');

// const sectionObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log(`Section viewed: ${entry.target.className}`);
//             // Here you would send to analytics
//         }
//     });
// }, { threshold: 0.3 });

// sections.forEach(section => sectionObserver.observe(section));

// // ==================== Page Load Animation ====================
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
    
//     // Animate elements on load
//     const animatedElements = document.querySelectorAll('.fade-in');
//     animatedElements.forEach((el, index) => {
//         setTimeout(() => {
//             el.style.opacity = '1';
//             el.style.transform = 'translateY(0)';
//         }, index * 100);
//     });
// });

// // ==================== Service Worker Registration ====================
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => console.log('SW registered'))
//             .catch(err => console.log('SW registration failed'));
//     });
// }

// // ==================== Error Handling ====================
// window.addEventListener('error', (e) => {
//     console.error('Error occurred:', e.error);
//     // Here you would send to error tracking service
// });

// // ==================== Console Welcome Message ====================
// console.log('%c🏦 بنك مصر', 'font-size: 20px; font-weight: bold; color: #8B1538;');
// console.log('%cمرحباً بك في موقع بنك مصر المُحدث', 'font-size: 14px; color: #D4AF37;');
// console.log('%cللإبلاغ عن مشاكل تقنية: dev@banquemisr.com', 'font-size: 12px; color: #666;');

// // ==================== Check Browser Support ====================
// function checkBrowserSupport() {
//     const isModernBrowser = 'fetch' in window && 'Promise' in window;
    
//     if (!isModernBrowser) {
//         console.warn('متصفحك قديم. للحصول على أفضل تجربة، يرجى التحديث');
//     }
// }

// checkBrowserSupport();

// // ==================== Initialize All Functions ====================
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('✅ Page fully loaded and ready');
    
//     // Add fade-in class to all sections
//     sections.forEach((section, index) => {
//         section.style.opacity = '0';
//         section.style.transform = 'translateY(20px)';
//         section.style.transition = 'all 0.5s ease';
        
//         setTimeout(() => {
//             section.style.opacity = '1';
//             section.style.transform = 'translateY(0)';
//         }, index * 100);
//     });
// });

// // ==================== End of Main JavaScript ====================

// // Mega Menu Click Instead of Hover
// document.querySelectorAll('.nav-item').forEach(item => {
//     const link = item.querySelector('.nav-link');
//     if (item.querySelector('.mega-menu')) {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             document.querySelectorAll('.nav-item').forEach(i => {
//                 if (i !== item) i.classList.remove('active');
//             });
//             item.classList.toggle('active');
//         });
//     }
// });

// document.addEventListener('click', (e) => {
//     if (!e.target.closest('.nav-item')) {
//         document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
//     }
// });


// const rsElements = document.querySelectorAll(".rs-item");

// const rsObserver = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("rs-visible");
//             }
//         });
//     },
//     { threshold: 0.25 }
// );

// rsElements.forEach(el => rsObserver.observe(el));



// ==================== Main JavaScript File ====================

// ==================== Dark Mode Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

if (themeToggle) {
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

// ==================== Language Toggle ====================
const languageToggle = document.getElementById('languageToggle');
let currentLang = 'ar';

if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        if (currentLang === 'ar') {
            currentLang = 'en';
            languageToggle.querySelector('span').textContent = 'عربي';
            document.documentElement.setAttribute('lang', 'en');
            document.documentElement.setAttribute('dir', 'ltr');
        } else {
            currentLang = 'ar';
            languageToggle.querySelector('span').textContent = 'English';
            document.documentElement.setAttribute('lang', 'ar');
            document.documentElement.setAttribute('dir', 'rtl');
        }
    });
}

// ==================== Search Functionality ====================
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');

const searchData = [
    'حسابات التوفير',
    'القروض الشخصية',
    'بطاقات الائتمان',
    'الحسابات الجارية',
    'شهادات الاستثمار',
    'الخدمات الرقمية',
    'تحويل الأموال',
    'فتح حساب جديد',
    'أسعار الصرف',
    'فروع البنك',
    'خدمة العملاء',
    'القروض العقارية',
    'قروض السيارات',
    'الحسابات الإسلامية',
    'الودائع'
];

if (searchInput && searchSuggestions) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase().trim();
        
        if (value.length > 0) {
            const filtered = searchData.filter(item => 
                item.toLowerCase().includes(value)
            );
            
            if (filtered.length > 0) {
                displaySuggestions(filtered);
            } else {
                searchSuggestions.classList.remove('active');
            }
        } else {
            searchSuggestions.classList.remove('active');
        }
    });

    function displaySuggestions(suggestions) {
        searchSuggestions.innerHTML = '';
        suggestions.slice(0, 5).forEach(suggestion => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<i class="fas fa-search" style="margin-left: 10px;"></i> ${suggestion}`;
            div.addEventListener('click', () => {
                searchInput.value = suggestion;
                searchSuggestions.classList.remove('active');
                alert(`البحث عن: ${suggestion}`);
            });
            searchSuggestions.appendChild(div);
        });
        searchSuggestions.classList.add('active');
    }

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.classList.remove('active');
        }
    });
}

// ==================== Hero Carousel ====================
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const thumbnailsContainer = document.getElementById('carouselThumbnails');

if (slides.length > 0 && thumbnailsContainer) {
    let currentSlide = 0;
    let autoPlayInterval;

    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        thumbnailsContainer.appendChild(dot);
    });

    const thumbnails = document.querySelectorAll('.dot');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        thumbnails[currentSlide].classList.remove('active');
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        thumbnails[currentSlide].classList.add('active');
        
        resetAutoPlay();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay();

    // Pause on hover
    const carousel = document.getElementById('heroCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') nextSlide();
        if (e.key === 'ArrowRight') prevSlide();
    });
}

// ==================== Currency Converter ====================
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const fromAmount = document.getElementById('fromAmount');
const toAmount = document.getElementById('toAmount');
const swapBtn = document.getElementById('swapCurrencies');

if (fromCurrency && toCurrency && fromAmount && toAmount) {
    // Exchange rates (relative to EGP)
    const exchangeRates = {
        'EGP': 1,
        'USD': 0.0211,
        'EUR': 0.0193,
        'GBP': 0.0165,
        'SAR': 0.0790,
        'AED': 0.0774
    };

    function convertCurrency() {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amount = parseFloat(fromAmount.value) || 0;
        
        // Convert from source currency to EGP, then to target currency
        const amountInEGP = amount / exchangeRates[from];
        const convertedAmount = amountInEGP * exchangeRates[to];
        
        toAmount.value = convertedAmount.toFixed(2);
    }

    fromAmount.addEventListener('input', convertCurrency);
    fromCurrency.addEventListener('change', convertCurrency);
    toCurrency.addEventListener('change', convertCurrency);

    if (swapBtn) {
        swapBtn.addEventListener('click', () => {
            // Swap currencies
            const tempCurrency = fromCurrency.value;
            fromCurrency.value = toCurrency.value;
            toCurrency.value = tempCurrency;
            
            // Swap amounts
            const tempAmount = fromAmount.value;
            fromAmount.value = toAmount.value;
            toAmount.value = tempAmount;
            
            convertCurrency();
        });
    }

    // Initial conversion
    convertCurrency();
}

// ==================== News Auto-Scroll ====================
const newsSlider = document.getElementById('newsSlider');
const newsItems = document.querySelectorAll('.news-item');

if (newsSlider && newsItems.length > 0) {
    let newsIndex = 0;

    function scrollNews() {
        newsIndex = (newsIndex + 1) % newsItems.length;
        const scrollAmount = newsIndex * (newsItems[0].offsetHeight + 15);
        newsSlider.style.transform = `translateY(-${scrollAmount}px)`;
    }

    // Auto-scroll every 4 seconds
    setInterval(scrollNews, 4000);

    // Pause on hover
    newsSlider.addEventListener('mouseenter', () => {
        newsSlider.style.animationPlayState = 'paused';
    });

    newsSlider.addEventListener('mouseleave', () => {
        newsSlider.style.animationPlayState = 'running';
    });
}

// ==================== Stats Counter Animation ====================
const statsSection = document.querySelector('.stats-section');
const statNumbers = document.querySelectorAll('.stat-number');

if (statsSection && statNumbers.length > 0) {
    let hasAnimated = false;

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current).toLocaleString('ar-EG');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toLocaleString('ar-EG');
                    if (stat.parentElement.querySelector('.stat-label').textContent.includes('رضا')) {
                        stat.textContent += '%';
                    } else {
                        stat.textContent += '+';
                    }
                }
            };
            
            updateCounter();
        });
    }

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ==================== Newsletter Form ====================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('.newsletter-input').value;
        
        if (email) {
            alert(`شكراً! تم الاشتراك بنجاح بالبريد: ${email}`);
            newsletterForm.reset();
        }
    });
}

// ==================== Chatbot ====================
const chatbotTrigger = document.getElementById('chatbotTrigger');

if (chatbotTrigger) {
    chatbotTrigger.addEventListener('click', () => {
        alert('مرحباً! كيف يمكننا مساعدتك اليوم؟\n\nهذه نسخة تجريبية - في النسخة الكاملة سيفتح نافذة الشات');
    });
}

// ==================== Smooth Scroll for Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.querySelector('.main-navbar');

if (navbar) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            navbar.style.padding = '15px 0';
        }
        
        lastScroll = currentScroll;
    });
}

// ==================== Service Cards Click ====================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceName = card.querySelector('h3').textContent;
        alert(`جاري تحميل صفحة: ${serviceName}`);
    });
});

// ==================== Mobile Menu Toggle ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.right = '0';
            navMenu.style.background = 'white';
            navMenu.style.width = '100%';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            navMenu.style.zIndex = '999';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            navMenu.style.display = '';
        }
    });
}

// ==================== Lazy Loading Images ====================
const images = document.querySelectorAll('img[data-src]');

if (images.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== Accessibility ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeMenus = document.querySelectorAll('.nav-item.active');
        activeMenus.forEach(item => {
            item.classList.remove('active');
        });
    }
});

// ==================== Analytics ====================
const sections = document.querySelectorAll('section');

if (sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Section viewed: ${entry.target.className}`);
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => sectionObserver.observe(section));
}

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ==================== Error Handling ====================
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.error);
});

// ==================== Console Welcome Message ====================
console.log('%c🏦 بنك مصر', 'font-size: 20px; font-weight: bold; color: #8B1538;');
console.log('%cمرحباً بك في موقع بنك مصر المُحدث', 'font-size: 14px; color: #D4AF37;');

// ==================== Initialize All Functions ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Page fully loaded and ready');
    
    const allSections = document.querySelectorAll('section');
    allSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ==================== Mega Menu Click Instead of Hover ====================
document.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const megaMenu = item.querySelector('.mega-menu');
    
    if (link && megaMenu) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Close all other menus
            document.querySelectorAll('.nav-item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });
            
            // Toggle current menu
            item.classList.toggle('active');
        });
    }
});

// Close mega menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// ==================== RS Items Animation ====================
const rsElements = document.querySelectorAll(".rs-item");

if (rsElements.length > 0) {
    const rsObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("rs-visible");
                }
            });
        },
        { threshold: 0.25 }
    );

    rsElements.forEach(el => rsObserver.observe(el));
}

// ==================== End of Main JavaScript ====================










