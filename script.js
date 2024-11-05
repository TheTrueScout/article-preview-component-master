const shareButton = document.querySelector('.share-button')
const mobileOverlay = document.querySelector('.mobile-share-overlay')
const desktopOverlay = document.querySelector('.desktop-share-overlay')

if (window.innerWidth <= 767) {

    shareButton.addEventListener('click', () => {

      if (mobileOverlay.classList.contains('mobile-overlay-transition')) {
        mobileOverlay.classList.remove('mobile-overlay-transition')

      } else {
        mobileOverlay.classList.add('mobile-overlay-transition')
      }
    })

} else if (window.innerWidth >= 768) {
  shareButton.addEventListener('click', () => {
      
    if (desktopOverlay.classList.contains('desktop-overlay-transition')) {
      desktopOverlay.classList.remove('desktop-overlay-transition')

    } else {
      desktopOverlay.classList.add('desktop-overlay-transition')
    }

  })
}