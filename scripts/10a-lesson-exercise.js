
      const jsButton = document.querySelector('.js-button');
      console.log(jsButton.classList.contains('js-button'));

      function toggleButton(selector) {
        const button = document.querySelector(selector);
        if (!button.classList.contains('is-toggled')) {
          previousButtonTurnOff();
          button.classList.add('is-toggled');
        } else {
          button.classList.remove('is-toggled');
        }
      }

      function previousButtonTurnOff() {
        const previousButton = document.querySelector('.is-toggled')
        if (previousButton) {
          previousButton.classList.remove('is-toggled')
        }
      }


      // function button2() {
      //   const button2 = document.querySelector('.js-button2');
      //   if (!button2.classList.contains('is-toggled2')) {
      //     button2.classList.add('is-toggled2');
      //   } else {
      //     button2.classList.remove('is-toggled2');
      //   }
      // }

      // function button3() {
      //   const button3 = document.querySelector('.js-button3');
      //   if (!button3.classList.contains('is-toggled3')) {
      //     button3.classList.add('is-toggled3');
      //   } else {
      //     button3.classList.remove('is-toggled3');
      //   }
      // }