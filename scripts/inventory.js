function displayProducts() {
  // Get products from local storage
  var products = JSON.parse(localStorage.getItem("products")) || [];

  // Get container to display products
  var container = document.getElementById("all_products");

  // Clear previous content
  container.innerHTML = "";

  // Loop through products and append to the container
  products.forEach(function (product, index) {
    var productDiv = document.createElement("div");
    productDiv.innerHTML = `
            <h4>Type: ${product.type}</h4>
            <h4>Description: ${product.desc}</h4>
            <h4>Price: ${product.price}</h4>
            <h4>Image: <br> <img src="${product.image}" alt="Product Image"></h4>
            <button id="remove_product" onclick="removeProduct(${index})">Remove Product</button><hr>`;
    container.appendChild(productDiv);
  });
}

// Function to remove product from local storage and update display
function removeProduct(index) {
  var products = JSON.parse(localStorage.getItem("products")) || [];

  // Remove product at the specified index
  products.splice(index, 1);

  // Save updated array back to local storage
  localStorage.setItem("products", JSON.stringify(products));

  // Update display
  displayProducts();
  alert("Product Removed Successfully");
}

// Display products when the page loads
displayProducts();
