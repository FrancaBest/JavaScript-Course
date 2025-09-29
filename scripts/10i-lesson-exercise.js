let calculation = localStorage.getItem('calculation') || '';

      // Display the calculation when the page first loads
      calculationResult();

      function updateCalculation(value) {
        calculation += value;

        // Display the calculation on the page
        // instead of console.log
        calculationResult();
        
        localStorage.setItem('calculation', calculation);
      }

      function calculationResult() {
        document.querySelector('.js-calculation')
        .innerHTML = calculation;
      }