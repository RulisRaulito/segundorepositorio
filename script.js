document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Verificar si hay una preferencia de tema guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Tema Claro';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Tema Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = 'Cambiar Tema';
            localStorage.setItem('theme', 'light');
        }
    });
});