const menu = document.getElementById("menu-toggle")
const sidebar = document.getElementById("sidebar")



menu.onclick = function(){
    sidebar.classList.toggle("show")
    
}


console.log("Initializing flatpickr for #checkIn and #checkOut");
flatpickr("#checkIn", {
    dateFormat: "Y-m-d",
    minDate: "today"
});
flatpickr("#checkOut", {
    dateFormat: "Y-m-d",
    minDate: "today"
});


// Initialize EmailJS with your public key
emailjs.init("yS2bsPWQQnpxgtMBL");

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form1');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Send email using EmailJS
      emailjs.send("service_3qe7cdf", "template_ll1041d", data)
        .then(function(response) {
          console.log('Success:', response);
          // You can add code here to handle successful form submission (e.g., show a success message)
        }, function(error) {
          console.error('Error:', error);
          // You can add code here to handle form submission errors (e.g., show an error message)
        });
    });
  }
});





document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the email input value
        const email = form.querySelector('input[name="email"]').value;

        // Example email sending logic (replace with actual email sending code)
        emailjs.send("service_3qe7cdf", "template_ll1041d", { email: email })
            .then(function(response) {
                // Show success notification
                new Noty({
                    text: 'Your email has been sent successfully!',
                    type: 'success',
                    layout: 'topRight',
                    timeout: 3000
                }).show();
            })
            .catch(function(error) {
                // Show error notification
                new Noty({
                    text: 'There was a problem sending your email.',
                    type: 'error',
                    layout: 'topRight',
                    timeout: 3000
                }).show();
            });
    });
});





