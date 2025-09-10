document.getElementById("ticketForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const tickets = document.getElementById("tickets").value;
    const payment = document.querySelector('input[name="payment"]:checked');

    // Get current date
window.on;oad= function () {
    const today = new Date().toISOString().split("T")[0];
documnet.getElementById("date").setAttribute("min",today);
};
    // Simple validation
const selectDate = new Date(date);
const currentDate = new Date(today);
    if (name && email && date && tickets && payment && date >= today) {
        const confirmationMessage = `
            <h3>Booking Confirmed!</h3>
            <p>Thank you, ${name}. Your booking for ${tickets} ticket(s) on ${date} has been confirmed. 
            We will send a confirmation to ${email}.</p>
            <p>Payment Method: ${payment.value}</p>
        `;

        // Show confirmation
        document.getElementById("confirmationMessage").innerHTML = confirmationMessage;

        // Save booking
        const booking = {
            name,
            email,
            date,
            tickets,
            paymentMethod: payment.value
        };

        let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        allBookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(allBookings));
    } else {
        document.getElementById("confirmationMessage").innerHTML =
            <p style="color: red;">Please fill out all fields correctly. Date must not be in the past.</p>;
    }
});