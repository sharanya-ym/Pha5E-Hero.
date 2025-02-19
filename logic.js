gsap.fromTo(
    ".loading-page",
    {
      opacity: 1,
      zIndex: 10,
    },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
      zIndex: 0,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
      zIndex: 10,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
      zIndex: 0,
    }
  );
  
  gsap.fromTo(
    ".hero-section h1",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
      delay: 3,
    }
  );
  
  gsap.fromTo(
    "#img-container-1",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 3,
      delay: 3,
    }
  );
  gsap.fromTo(
    "#img-container-2",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 3,
      delay: 3,
    }
  );
  gsap.fromTo(
    "#img-container-3",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 3,
      delay: 3,
    }
  );
  gsap.fromTo(
    "#img-container-4",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 3,
      delay: 3,
    }
  );
  
  const heroText = document.querySelector(".hero-section h1");
  
  const img1 = document.getElementById("img-container-1");
  const img1Div = document.querySelector("#img1-div");
  
  img1.addEventListener("mouseover", () => {
    heroText.style.color = "#1e1e1e";
    heroText.style.webkitTextStroke = "1px";
    heroText.style.webkitTextStrokeColor = "white";
    img1.style.zIndex = 3;
    img1Div.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
  });
  
  img1.addEventListener("mouseout", () => {
    heroText.style.color = ""; // Reset to default
    heroText.style.webkitTextStroke = ""; // Reset to default
    heroText.style.webkitTextStrokeColor = ""; // Reset to default
    img1.style.zIndex = ""; // Reset to default
    img1Div.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "block";
    img4.style.display = "block";
  });
  
  const img2 = document.getElementById("img-container-2");
  const img2Div = document.querySelector("#img2-div");
  
  img2.addEventListener("mouseover", () => {
    heroText.style.color = "#1e1e1e";
    heroText.style.webkitTextStroke = "1px";
    heroText.style.webkitTextStrokeColor = "white";
    img2.style.zIndex = 3;
    img2Div.style.display = "block";
    img1.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
  });
  
  img2.addEventListener("mouseout", () => {
    heroText.style.color = ""; // Reset to default
    heroText.style.webkitTextStroke = ""; // Reset to default
    heroText.style.webkitTextStrokeColor = ""; // Reset to default
    img2.style.zIndex = ""; // Reset to default
    img2Div.style.display = "none";
    img1.style.display = "block";
    img3.style.display = "block";
    img4.style.display = "block";
  });
  
  const img3 = document.getElementById("img-container-3");
  const img3Div = document.querySelector("#img3-div");
  
  img3.addEventListener("mouseover", () => {
    heroText.style.color = "#1e1e1e";
    heroText.style.webkitTextStroke = "1px";
    heroText.style.webkitTextStrokeColor = "white";
    img3.style.zIndex = 3;
    img3Div.style.display = "block";
    img1.style.display = "none";
    img2.style.display = "none";
    img4.style.display = "none";
  });
  
  img3.addEventListener("mouseout", () => {
    heroText.style.color = ""; // Reset to default
    heroText.style.webkitTextStroke = ""; // Reset to default
    heroText.style.webkitTextStrokeColor = ""; // Reset to default
    img3.style.zIndex = ""; // Reset to default
    img3Div.style.display = "none";
    img1.style.display = "block";
    img2.style.display = "block";
    img4.style.display = "block";
  });
  
  const img4 = document.getElementById("img-container-4");
  const img4Div = document.querySelector("#img4-div");
  
  img4.addEventListener("mouseover", () => {
    heroText.style.color = "#1e1e1e";
    heroText.style.webkitTextStroke = "1px";
    heroText.style.webkitTextStrokeColor = "white";
    img4.style.zIndex = 3;
    img4Div.style.display = "block";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
  });
  
  img4.addEventListener("mouseout", () => {
    heroText.style.color = ""; // Reset to default
    heroText.style.webkitTextStroke = ""; // Reset to default
    heroText.style.webkitTextStrokeColor = ""; // Reset to default
    img4.style.zIndex = ""; // Reset to default
    img4Div.style.display = "none";
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";
  });
  
  
  
  document.querySelectorAll('.img-container').forEach(container => {
    container.addEventListener('mouseenter', (e) => {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;
  
      const onMouseMove = (event) => {
        const offsetX = (event.clientX - centerX) / 10;
        const offsetY = (event.clientY - centerY) / 10;
  
        gsap.to(container, {
          x: offsetX,
          y: offsetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      };
  
      document.addEventListener('mousemove', onMouseMove);
  
      container.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', onMouseMove);
        gsap.to(container, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
      }, { once: true });
    });
  });