document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    // Toggle sidebar visibility
    menu.onclick = function() {
        sidebar.classList.toggle("show");
    };

    // Initialize EmailJS with your public key
    emailjs.init("yS2bsPWQQnpxgtMBL");

    // Add event listener for form submission
    const form1 = document.getElementById('form1');
    if (form1) {
        form1.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = new FormData(form1);
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

    // Initialize Vanilla Datepicker for date inputs
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');

    if (checkInInput && checkOutInput) {
        // Initialize Vanilla Datepicker for Check-In
        new VanillaDatepicker(checkInInput, {
            format: 'yyyy-MM-dd',
            minDate: new Date() // Prevent selection of past dates
        });

        // Initialize Vanilla Datepicker for Check-Out
        new VanillaDatepicker(checkOutInput, {
            format: 'yyyy-MM-dd',
            minDate: new Date() // Prevent selection of past dates
        });
    }
});
