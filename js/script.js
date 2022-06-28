// Auto resize textareas

// var tx = document.getElementsByTagName('textarea');
// for (var i = 0; i < tx.length; i++) {
//   tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
//   tx[i].addEventListener("input", OnInput, false);
// }

// function OnInput(e) {
//   this.style.height = 'auto';
//   this.style.height = (this.scrollHeight) + '1px';
// }

// Open / Close Menu

const navButton = document.querySelector('button[aria-expanded]');

    function toggleNav({ target }) {
      const expanded = target.getAttribute('aria-expanded') === 'true' || false;
      navButton.setAttribute('aria-expanded', !expanded);
    }

    navButton.addEventListener('click', toggleNav);