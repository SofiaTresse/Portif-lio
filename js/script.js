document.addEventListener('DOMContentLoaded', function() {
  // Loader Borboleta
  const loading = document.getElementById('loading');
  
  // Simular carregamento
  setTimeout(() => {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
      initAnimations();
    }, 400);
  }, 1500);
  
  function initAnimations() {
    // Cursor personalizado
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    
    if (cursor && cursorFollower) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
        }, 100);
      });
      
      // Efeitos de hover
      const hoverElements = document.querySelectorAll('a, button, .project-card');
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorFollower.style.width = '50px';
          cursorFollower.style.height = '50px';
          cursorFollower.style.borderColor = 'var(--secondary)';
        });
        
        el.addEventListener('mouseleave', () => {
          cursorFollower.style.width = '30px';
          cursorFollower.style.height = '30px';
          cursorFollower.style.borderColor = 'var(--primary)';
        });
      });
    }
    
    // Animação de digitação
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
      const text = typewriter.getAttribute('data-text');
      let i = 0;
      
      function typeWriter() {
        if (i < text.length) {
          typewriter.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, Math.random() * 100 + 50);
        } else {
          typewriter.classList.add('finished');
        }
      }
      
      setTimeout(typeWriter, 500);
    }
    
    // Animação das barras de habilidades
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkills = () => {
      skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level;
      });
    };
    
    // Observador de interseção para animações
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('skill-progress')) {
            setTimeout(animateSkills, 300);
          }
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.skill-progress, .project-card, .about-image, .contact-form').forEach(el => {
      observer.observe(el);
    });
    
    // Smooth scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
   
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const heroPattern = document.querySelector('.hero-pattern');
      
      if (heroPattern) {
        heroPattern.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
      }
    });
  }
  
 
  const reloadBtn = document.getElementById('reload-btn');
  if (reloadBtn) {
    reloadBtn.addEventListener('click', function() {
      const mainContent = document.getElementById('main-content');
      
   
      if (mainContent) {
        mainContent.style.opacity = '0';
        setTimeout(() => {
          mainContent.style.display = 'none';
          loading.style.display = 'flex';
          loading.style.opacity = '1';
          
         
          setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
              loading.style.display = 'none';
              mainContent.style.display = 'block';
              setTimeout(() => {
                mainContent.style.opacity = '1';
              }, 50);
            }, 500);
          }, 2000);
        }, 300);
      }
    });
  }
const spans = document.querySelectorAll('.radio-inputs .name');

spans.forEach(span => {
  span.addEventListener('click', () => {
    const url = span.dataset.link;
    if(url) window.location.href = url;
  });
});
});