// Menu toggle
      document.getElementById('menu-button').addEventListener('click', function() {
        this.classList.toggle('open');
        document.getElementById('mobile-menu').classList.toggle('open');
      });

      // Form validation and submission
      document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Perform form validation
        let valid = true;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
          valid = false;
        }

        if (valid) {
          // Display success message
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });

          // Reset form
          setTimeout(() => {
            document.getElementById('contactForm').reset();
          }, 1500);
        }
      });