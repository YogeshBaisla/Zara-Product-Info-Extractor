console.log("Popup script loaded."); // Add this at the very top
document.addEventListener('DOMContentLoaded', () => {
  console.log("Popup script loaded.");

  // Function to request product details from the content script
  function requestProductDetails() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      console.log("Sending message to content script.");
      chrome.tabs.sendMessage(tabs[0].id, {command: 'getProductDetails'}, (response) => {
        console.log("Received response:", response);
        if (response) {
          if (response.name === 'Product name not found') {
            // Show error message if elements are not found
            document.getElementById('productName').innerText = 'Error: Product details not found.';
            document.getElementById('productPrice').innerText = '';
            document.getElementById('imageUrl').innerText = '';
            document.getElementById('productImage').src = '';
          } else {
            // Update popup with product details
            document.getElementById('productName').innerText = response.name;
            document.getElementById('productPrice').innerText = 'Price: ' + response.price;
            document.getElementById('imageUrl').innerText = 'Image URL: ' + response.imageUrl;
            document.getElementById('productImage').src = response.imageUrl;
          }
        } else {
          document.getElementById('productName').innerText = 'Error: No response from content script.';
        }
      });
    });
  }

  // Request product details on popup load
  requestProductDetails();

  // Reload details when the button is clicked
  document.getElementById('reloadButton').addEventListener('click', requestProductDetails);
});
