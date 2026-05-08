document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-switcher button');
    const langContents = document.querySelectorAll('.lang-content');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');

            // Update button states
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle content visibility
            langContents.forEach(content => {
                if (content.classList.contains(lang)) {
                    content.classList.add('active');
                    content.style.display = 'block';
                } else {
                    content.classList.remove('active');
                    content.style.display = 'none';
                }
            });

            // Adjust overall page direction if needed
            if (lang === 'ar') {
                document.body.setAttribute('dir', 'rtl');
            } else {
                document.body.setAttribute('dir', 'ltr');
            }
        });
    });
});
