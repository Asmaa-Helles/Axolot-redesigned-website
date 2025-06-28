   // تهيئة مكتبة AOS لتفعيل التأثيرات
   AOS.init({
    offset: 120, // المسافة قبل بدء الأنيميشن (بالبكسل)
    duration: 800, // مدة الأنيميشن
    easing: 'ease', // نوع التوقيت
    delay: 0, // التأخير الافتراضي
    once: false, // الأنيميشن يحدث مرة واحدة فقط
});

/****Navbar****/

let link = document.querySelectorAll("a.nav-link")
link.forEach(p => {
    p.onclick = () => {
        document.querySelector('a.active').classList.remove('active')
        p.classList.add('active')
     
    }
});
/**Home***/

let play = document.querySelector('button.play')
play.onclick = () => {
    document.querySelector('.popVideo').classList.add('play')
}

let close = document.querySelector('button.close')
close.onclick = () => {
    document.querySelector('.popVideo').classList.remove('play')
}

/*****Team*****/
$(document).ready(function () {
    // الإعدادات العامة للسلايدرز
    const commonSettings = {
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    };

    // إعدادات السلايدر الأول (4 عناصر على الشاشات الكبيرة)
    $(".owl-carousel.Team-swiper").owlCarousel({
        ...commonSettings, // إدراج الإعدادات العامة
        responsive: {
            0: {
                items: 1 // عدد العناصر على الشاشات الصغيرة
            },
            600: {
                items: 3 // عدد العناصر على الشاشات المتوسطة
            },
            1000: {
                items: 4 // عدد العناصر على الشاشات الكبيرة
            }
        }
    });

    
    /***Partner****/
    // إعدادات السلايدر الثاني (6 عناصر على الشاشات الكبيرة)
    $(".owl-carousel.partners-swiper").owlCarousel({
        ...commonSettings, // إدراج الإعدادات العامة
        responsive: {
            0: {
                items: 1 // عدد العناصر على الشاشات الصغيرة
            },
            600: {
                items: 3 // عدد العناصر على الشاشات المتوسطة
            },
            1000: {
                items: 6 // عدد العناصر على الشاشات الكبيرة
            }
        }
    });
});


/******Features*****/

document.addEventListener("DOMContentLoaded", () => {
    let features = document.querySelectorAll(".feature");

    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");
                    entry.target.classList.remove("fade-down");
                } else {

                    entry.target.classList.add("fade-down");
                    entry.target.classList.remove("fade-up");
                }
            });
        },
        {
            threshold: 0.2, // يبدأ التأثير عندما يكون 20% من العنصر مرئيًا
        }
    );

    // تفعيل المراقب على جميع العناصر المحددة
    features.forEach((feature) => {
        observer.observe(feature);
    });
});


/****Vision****/

let li = document.querySelectorAll('.vision .tabs__tab')


li.forEach(p => {
    p.onclick = () => {
        document.querySelector('.tabs__tab.selected').classList.remove('selected')
        p.classList.add('selected')

        // let tab = p.getAttribute('data-tab')
        let tab = p.dataset.tab
        document.querySelector('.tabs__tab-panel.activeT').classList.remove('activeT')
        document.querySelector(tab).classList.add('activeT')
    }
});

/****Back top btn****/
let back_top = document.querySelector('.back-top');
window.onscroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 100) {
        back_top.classList.add('active')
    }
    else {
        back_top.classList.remove('active')
    }
}
back_top.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/****FAQ*****/

// // حدد جميع الأزرار في الـ accordion
// let accordionButtons = document.querySelectorAll('[data-accordion-component="AccordionItemButton"]');

// accordionButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // أغلق كل الإجابات المفتوحة حاليًا
//         document.querySelectorAll('[data-accordion-component="AccordionItemPanel"]').forEach(panel => {
//             panel.hidden = true; // إخفاء النصوص
//             panel.previousElementSibling.setAttribute('aria-expanded', 'false'); // تحديث aria-expanded
//         });

//         // فتح النص المرتبط بالزر الذي تم الضغط عليه
//         let panelId = button.getAttribute('aria-controls');
//         let panel = document.getElementById(panelId);

//         // تحقق إذا كان النص مغلقًا لتجنب إغلاقه فورًا
//         if (panel.hidden) {
//             panel.hidden = false;
//             button.setAttribute('aria-expanded', 'true');
//         }
//     });
// });
let accordionButtons = document.querySelectorAll('.accordion__button');

accordionButtons.forEach(button => {
    button.onclick = () => {
        // إزالة الكلاس 'expanded' من جميع الأزرار المفتوحة
        document.querySelectorAll('.accordion__button[aria-expanded="true"]').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
        });

        // إضافة الكلاس 'expanded' للزر الذي تم الضغط عليه
        button.setAttribute('aria-expanded', 'true');

        // إخفاء كل الأجوبة المفتوحة
        document.querySelectorAll('.accordion__panel').forEach(panel => {
            panel.hidden = true;
        });

        // إظهار الجواب المرتبط بالزر الذي تم الضغط عليه
        let panelId = button.getAttribute('aria-controls');
        let panel = document.getElementById(panelId);
        panel.hidden = false;
    };
});





// const swiper = new Swiper('.swiper-container', {
//     loop: true, // يجعل السلايدات تتكرر
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     autoplay: {
//         delay: 3000, // تبديل تلقائي كل 3 ثواني
//     },
// });



