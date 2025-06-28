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

