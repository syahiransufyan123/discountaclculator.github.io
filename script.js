// Function to calculate the discount
function calculateDiscount(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var name = document.getElementById("name").value;
    var membership = document.querySelector('input[name="membership"]:checked').value;
    var productNameSelect = document.getElementById("productname");
    var productName = productNameSelect.options[productNameSelect.selectedIndex].text;
    var price = parseFloat(document.getElementById("price").value).toFixed(2);
    var discount = parseFloat(document.getElementById("discount").value);
    var membershipDiscount = 0;
    var quantity = parseInt(document.getElementById("quantity").value);
    
    var errorMessages = [];
  
    if (!/^[A-Za-z\s]+$/.test(name) || /\d/.test(name)) {
      errorMessages.push("Invalid Name format. Please enter only alphabetic characters.");
    }
  
    if (!document.getElementById("terms").checked) {
      errorMessages.push("Please agree to the terms and conditions.");
    }

    if (quantity < 1 || quantity > 100) {
        errorMessages.push("Invalid Quantity. Please enter a value between 1 and 100.");
      }
    
      
  
    if (errorMessages.length > 0) {
      var errorMessage = "Please fix the following errors:\n\n" + errorMessages.join("\n");
      alert(errorMessage);
      return;
    }
  
    // Validate inputs
    if (name === "" || productName === "" || price === "" || discount === "" || quantity === "") {
      alert("Please enter all the required information.");
      return;
    }
  
    // Calculate discounted price
    if (membership === "yes") {
      membershipDiscount = 5;
    }
  
    if (discount > 80) {
      errorMessages.push("Discount limit exceeded. The maximum discount allowed is 80%.");
    }
  
    if (errorMessages.length > 0) {
      var errorMessage = "Please fix the following errors:\n\n" + errorMessages.join("\n");
      alert(errorMessage);
      return;
    }
  
    var totalDiscountPercentage = discount + membershipDiscount;
    var discountedPrice = Math.max(price - (price * (totalDiscountPercentage / 100)), 0);
    var finalPrice = parseFloat(discountedPrice * quantity).toFixed(2);
  
    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Name: " + name + "<br>" +
      "Membership: " + (membership === "yes" ? "Yes" : "No") + "<br>" +
      (membership === "yes" ? "Membership Discount: 5%<br>" : "") +
      "Product Name: " + productName + "<br>" +
      "Price: RM " + price + "<br>" +
      "Discount: " + totalDiscountPercentage + "%<br>" +
      "Discounted Price: RM " + discountedPrice.toFixed(2) + "<br>" +
      "Quantity: " + quantity + "<br>" +
      "Final Price: RM " + finalPrice;
  }
  
  // Event listener for form submission
  var calculatorForm = document.getElementById("calculator-form");
  calculatorForm.addEventListener("submit", calculateDiscount);
  
  // Event listener for product name selection
  var productNameSelect = document.getElementById("productname");
  productNameSelect.addEventListener("change", function() {
    var selectedProductName = productNameSelect.value;
    var originalPriceInput = document.getElementById('price');
    var originalShoesInput = document.getElementById('shoetype');
    var originalProductIdInput = document.getElementById('productid');
  
    switch (selectedProductName) {
      case "Nike Air Max":
        originalPriceInput.value = '50';
        originalShoesInput.value = 'Sneakers';
        originalProductIdInput.value = 'SNK001';
        break;
        case "Timberland Waterproof":
            originalPriceInput.value = "80";
            originalShoesInput.value = "Boots";
            originalProductIdInput.value = "BT001";
            break;
      case "Flip-Flop Comfort":
        originalPriceInput.value = '10';
        originalShoesInput.value = 'Sandals';
        originalProductIdInput.value = 'SD001';
        break;
      case "Stiletto Glamour":
        originalPriceInput.value = '120';
        originalShoesInput.value = 'High Heels';
        originalProductIdInput.value = 'HH001';
        break;
      default:
        originalPriceInput.value = '';
        originalShoesInput.value = '';
        originalProductIdInput.value = '';
    }
  
    // Disable the original price input field
    originalPriceInput.disabled = true;
    originalShoesInput.disabled = true;
    originalProductIdInput.disabled = true;
  });
  
  // Event listener for discount range input
  var discountRangeInput = document.getElementById("discount");
  var discountValueOutput = document.getElementById("discountValue");
  
  discountRangeInput.addEventListener("input", function() {
    var discountValue = discountRangeInput.value;
    discountValueOutput.textContent = discountValue + "%";
  });
  