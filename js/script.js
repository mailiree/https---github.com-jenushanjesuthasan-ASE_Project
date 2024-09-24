// Simple card number validation
document.getElementById('paymentForm').addEventListener('submit', function (e) {
    let cardNumber = document.getElementById('card_number').value;
    let cvv = document.getElementById('cvv').value;

    // Validate card number (should be 16 digits)
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        e.preventDefault();
    }

    // Validate CVV (should be 3 digits)
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        e.preventDefault();
    }
});
