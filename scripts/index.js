//store the products array in localstorage as "products"

// Function to add products to the local storage
function addProduct() {
    alert("Product added successfully");
    // To Get the input values
    var type = document.getElementById('type').value;
    var desc = document.getElementById('desc').value;
    var price = document.getElementById('price').value;
    var image = document.getElementById('image').value;

    // Create products object
    var product = {
        type: type,
        desc: desc,
        price: price,
        image: image
    };

    // Getting the existing products from local storage, initialize an empty array
    var products = JSON.parse(localStorage.getItem('products')) || [];

    // Add new product to the array
    products.push(product);

    // Save updated array back to local storage
    localStorage.setItem('products', JSON.stringify(products));
    // stringify...converts the string value to string object notation
    
    // Clear input fields
    document.getElementById('type').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';

}