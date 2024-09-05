let currentPage = 1;
const totalPages = 9;

function toggleClass(e, toggleClassName) {
  if (e.classList.contains(toggleClassName)) {
    e.classList.remove(toggleClassName);
  } else {
    e.classList.add(toggleClassName);
  }
}

function logCurrentPage() {
  let readablePage;
  switch (currentPage) {
    case 1:
      readablePage = "Pagina 1 (Cover)";
      break;
    case 3:
      readablePage = "Pagina 2 en 3";
      break;
    case 5:
      readablePage = "Pagina 4 en 5";
      break;
    case 7:
      readablePage = "Pagina 6 en 7";
      break;
    case 9:
      readablePage = "Pagina 8 en 9";
      break;
    default:
      readablePage = `Onbekende pagina: ${currentPage}`;
  }
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.slider-indicator-item');
  indicators.forEach((indicator, index) => {
    if (index === Math.floor((currentPage - 1) / 2)) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function movePage(e, page) {
  if (page === currentPage) {
    if (currentPage < totalPages) {
      toggleClass(e, "left-side");
      if (e.nextElementSibling) {
        toggleClass(e.nextElementSibling, "left-side");
      }
      currentPage += 2;
      logCurrentPage();
      updateIndicators();
    }
  } else if (page === currentPage - 1) {
    if (currentPage > 1) {
      toggleClass(e, "left-side");
      if (e.previousElementSibling) {
        toggleClass(e.previousElementSibling, "left-side");
      }
      currentPage -= 2;
      logCurrentPage();
      updateIndicators();
    }
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    const currentPageElement = document.querySelector(`.page:nth-child(${currentPage})`);
    const nextPageElement = document.querySelector(`.page:nth-child(${currentPage + 1})`);
    
    if (currentPageElement && nextPageElement) {
      toggleClass(currentPageElement, "left-side");
      toggleClass(nextPageElement, "left-side");
      currentPage += 2;
      logCurrentPage();
      updateIndicators();
    }
  }
}

function previousPage() {
  if (currentPage > 1) {
    const prevPageNumber = currentPage - 1;
    const pageElement = document.querySelector(`.page:nth-child(${prevPageNumber})`);
    if (pageElement) {
      movePage(pageElement, prevPageNumber);
      logCurrentPage();
      updateIndicators();
    }
  }
}

logCurrentPage();
updateIndicators();




const mobileImages = [
  "./Cover.png",
  "./Pagina 2.png",
  "./Pagina 3.png",
  "./Pagina 4.png",
  "./Pagina 5.png",
  "./Pagina 6.png",
  "./Pagina 7.png",
  "./Pagina 8.png",
  "./Pagina 9.png"
];

let currentMobileIndex = 0;

function nextImageMobile() {
  currentMobileIndex++;
  if (currentMobileIndex >= mobileImages.length) {
      currentMobileIndex = 0; // Ga terug naar de eerste afbeelding
  }
  updateMobileImage();
}

function previousImageMobile() {
  currentMobileIndex--;
  if (currentMobileIndex < 0) {
      currentMobileIndex = mobileImages.length - 1; // Ga naar de laatste afbeelding
  }
  updateMobileImage();
}

function updateMobileImage() {
  document.getElementById("mobile-image").src = mobileImages[currentMobileIndex];
  updateSliderIndicator();
}

function updateSliderIndicator() {
  const indicators = document.querySelectorAll('.mobile-slider-indicator-item');
  indicators.forEach((indicator, index) => {
      if (index === currentMobileIndex) {
          indicator.classList.add('active'); // Activeer de indicator
      } else {
          indicator.classList.remove('active'); // Deactiveer de indicator
      }
  });
}