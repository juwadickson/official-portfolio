document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Web Designer", "Developer", "Teacher"];
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100; // Typing speed
    const delayBetweenTexts = 2000; // Delay between texts
  
    function typeWriter() {
      if (charIndex < texts[textIndex].length) {
        document.getElementById("typewriter-text").innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          document.getElementById("typewriter-text").innerHTML = '';
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeWriter, speed);
        }, delayBetweenTexts);
      }
    }
  
    typeWriter();
  });
  
    

  