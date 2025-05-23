// Установка текущего года в футере
document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// Обработчик для пасхалки
document.querySelectorAll('.easter-egg').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Активируем эффект глитча
        document.querySelector('.glitch-overlay').classList.remove('hidden');
        document.body.classList.add('glitch-effect');
        document.body.setAttribute('data-text', document.title);
        
        // Добавляем звуковой эффект (опционально)
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-glitchy-voice-2727.mp3');
        audio.volume = 0.3;
        audio.play().catch(e => console.log("Audio play failed:", e));
        
        // Перенаправление после анимации
        setTimeout(() => {
            window.location.href = '404.html';
        }, 1000);
    });
});

// Анимация элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Анимация для карточек на главной
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Для 404 страницы - анимация элементов
    if(window.location.pathname.includes('404.html')) {
        const elements = document.querySelectorAll('.error-cat, .error-code, .error-message, .error-description, .home-btn');
        
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
        
        // Случайные мерцания
        setInterval(() => {
            if(Math.random() > 0.7) {
                document.querySelector('.glitch-overlay').style.opacity = Math.random() * 0.3;
            }
        }, 300);
    }
    
    // Случайные мерцания для неоновых элементов
    if(Math.random() > 0.5) {
        setInterval(() => {
            const neonElements = document.querySelectorAll('.logo, .feature-icon, .neon-line');
            neonElements.forEach(el => {
                if(Math.random() > 0.8) {
                    el.style.opacity = 0.7 + Math.random() * 0.3;
                    setTimeout(() => {
                        el.style.opacity = 1;
                    }, 200);
                }
            });
        }, 1000);
    }
});