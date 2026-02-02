
    document.querySelectorAll('.experience-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const button = header.querySelector('.toggle-btn i');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            button.classList.toggle('fa-chevron-down');
            button.classList.toggle('fa-chevron-up');
        });
    });

    // Fungsi untuk mengecek apakah elemen terlihat di viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Fungsi untuk menjalankan animasi
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            if (isInViewport(bar) && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
                bar.classList.add('animated'); // Tambahkan kelas untuk mencegah animasi ulang
            }
        });
    }

    // Tambahkan event listener scroll
    window.addEventListener('scroll', animateProgressBars);

    // Jalankan sekali saat halaman dimuat
    animateProgressBars();


window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});


const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));

