/* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */

var card = new Card({
    // a selector or DOM element for the form where users will
    // be entering their information
    form: 'form', // *required*
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    },

    width: 330, // optional — default 350px
    formatting: true, // optional - default true

    // Strings for translation - optional
    messages: {
        validDate: 'valid\ndate', // optional - default 'valid\nthru'
        monthYear: 'mm/yyyy', // optional - default 'month/year'
    },

    // Default placeholders for rendered fields - optional
    placeholders: {
        number: '•••• •••• •••• ••••',
        name: 'Full Name',
        expiry: '••/••',
        cvc: '•••'
    },

    masks: {
        cardNumber: '•' // optional - mask card number
    },

    // if true, will log helpful messages for setting up Card
    debug: false // optional - default false
});

// function submitted() {
//     window.location.href = "../thank-you/payment-done.html";
// }

$("#myFormz").submit(function (event) {
    $("#myFormz").html(`
    <br><br>
    <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    `);
    setTimeout(function () {
        window.top.location.href = "../thank-you/payment-done.html";
    }, 1300); //will call the function after 2 secs.
    event.preventDefault();
});