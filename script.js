function calculateDiscount(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById("name").value;
    var membership = document.querySelector('input[name="membership"]:checked').value;
    var email = document.getElementById("email").value;
    var productNameSelect = document.getElementById("productname");
    var productIdSelect = document.getElementById("productid");
    var productName = productNameSelect.options[productNameSelect.selectedIndex].text;
    var productId = productIdSelect.options[productIdSelect.selectedIndex].text;
    var price = parseFloat(document.getElementById("price").value).toFixed(2);
    var discount = parseFloat(document.getElementById("discount").value);
    var membershipDiscount = 0;
    var phoneNumber = document.getElementById("phoneNo").value;

    var shoetypeSelect = document.getElementById("shoetype");
    var selectedShoeType = shoetypeSelect.options[shoetypeSelect.selectedIndex].text;

    var errorMessages = [];

    if (!/^[A-Za-z\s]+$/.test(name)) {
        errorMessages.push("Invalid Name format. Please enter only alphabetic characters.");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        errorMessages.push("Invalid Email format. Please enter a valid email address.");
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
        errorMessages.push("Invalid Phone Number format. Please enter a 10-digit number.");
    }
    
    if (!document.getElementById("terms").checked) {
        errorMessages.push("Please agree to the terms and conditions.");
      }

    // Add validation for other fields as needed

    if (errorMessages.length > 0) {
        var errorMessage = "Please fix the following errors:\n\n" + errorMessages.join("\n");
        alert(errorMessage);
        return;
    }

    // Validate inputs
    if (name === "" || email === "" || productName === "" || productId === "" || price === "" || discount === "") {
        alert("Please enter all the required information.");
        return;
    }

    // Calculate discounted price
    if (membership === "yes") {
        membershipDiscount = 5;
    }

    var totalDiscountPercentage = discount + membershipDiscount;
    var discountedPrice = Math.max(price - (price * (totalDiscountPercentage / 100)), 0);
    var finalPrice = parseFloat(discountedPrice).toFixed(2);

    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Name: " + name + "<br>" +
        "Membership: " + (membership === "yes" ? "Yes" : "No") + "<br>" +
        (membership === "yes" ? "Membership Discount: 5%<br>" : "") +
        "Product Name: " + productName + "<br>" +
        "Product ID: " + productId + "<br>" +
        "Shoe Type: " + selectedShoeType + "<br>" +
        "Price: RM " + price + "<br>" +
        "Discount: " + totalDiscountPercentage + "%<br>" +
        "Discounted Price: RM " + discountedPrice.toFixed(2) + "<br>" +
          "Final Price: RM " + finalPrice;
}

// Event listener for form submission
var calculatorForm = document.getElementById("calculator-form");
calculatorForm.addEventListener("submit", calculateDiscount);
