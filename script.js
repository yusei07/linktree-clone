// modal btn
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// tile share btn
const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

// modal content (copy-field)
const copybtn = document.getElementById("copy-btn")
const copylink = document.getElementById("link")

copybtn.onclick = function () {
  navigator.clipboard.writeText(copylink.innerHTML)
  copybtn.innerHTML = "Copied!"
  setTimeout(() => {
    copybtn.innerHTML = "Copy"
  }, 1500);
}

// modal content web share
const weblink = encodeURI(window.location.href);
const msg = encodeURIComponent('Checkout yu\'s tree!');
// const title = encodeURIComponent('Title Here');

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${weblink}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${weblink}&text=${msg}&hashtags=javascript,programming`;

const linkedIn = document.querySelector('.linkedin');
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${weblink}`;

const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${weblink}`;

/* web share api (builtin)
const share = () => {
  if (navigator.share) {
    navigator.share({
      text: 'Checkout yu\'s tree website!',
      url: 'yutr.ee/yu_097',
      // title: 'yu.tree'
    })
  } else {
    navigator.clipboard.writeText('yutr.ee/yu_097')
  }
}
*/