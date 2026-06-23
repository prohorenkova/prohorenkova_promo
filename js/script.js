document.addEventListener('DOMContentLoaded', () => {

    const gif = document.getElementById('cursor-gif');
    let lastX = 0;
    let timeout;

    if (!gif) return;

    document.addEventListener('mousemove', (e) => {
        // Позиция
        gif.style.left = e.clientX + 'px';
        gif.style.top = e.clientY + 'px';

        // Изменение направления
        if (e.clientX < lastX) {
            // Движение влево — отражаем гифку
            gif.style.transform = 'translate(-50%, -50%) scaleX(-1)';
        } else if (e.clientX > lastX) {
            // Движение вправо — нормальное положение
            gif.style.transform = 'translate(-50%, -50%) scaleX(1)';
        }

        lastX = e.clientX;

        // Лёгкое затухание когда курсор стоит
        gif.style.opacity = '0.95';
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            gif.style.opacity = '0.75';
        }, 600);
    });

    // Бургер-меню
    const burger = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');

    if (burger && navigation) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            navigation.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navigation.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navigation.contains(e.target)) {
                navigation.classList.remove('active');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }
});