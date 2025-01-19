document.addEventListener('DOMContentLoaded', function() {
    const koBtn = document.getElementById('ko-btn');
    const enBtn = document.getElementById('en-btn');

    function showLanguage(lang) {
        const koElements = document.querySelectorAll('.ko');
        const enElements = document.querySelectorAll('.en');

        if (lang === 'ko') {
            koElements.forEach(el => el.style.display = 'inline');
            enElements.forEach(el => el.style.display = 'none');
            document.documentElement.lang = 'ko';
        } else {
            koElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'inline');
            document.documentElement.lang = 'en';
        }
    }

    // 브라우저 언어 감지
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('ko')) {
        showLanguage('ko');
    } else {
        showLanguage('en');
    }

    // 언어 전환 버튼 이벤트 리스너
    koBtn.addEventListener('click', () => showLanguage('ko'));
    enBtn.addEventListener('click', () => showLanguage('en'));

    // 네비게이션 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 스킬 섹션에 애니메이션 추가
    const skills = document.querySelectorAll('#skills li');
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        skill.style.transitionDelay = `${index * 0.1}s`;

        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 500);
    });

    // 스크롤 시 헤더 스타일 변경
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(74, 74, 74, 0.9)';
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });
});
