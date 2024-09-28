// Content script to extract product details
console.log("Content script is loaded and running...");
function extractProductDetails() {
  let productNameElement = document.querySelector('.product-detail-info__header-name');
  let productPriceElement = document.querySelector('.money-amount__main');
  let productImageElement = document.querySelector('.media-image__image.media__wrapper--media');

  console.log("Extracting details...");
  console.log("Product Name Element:", productNameElement ? productNameElement.innerText : 'Not found');
  console.log("Product Price Element:", productPriceElement ? productPriceElement.innerText : 'Not found');
  console.log("Product Image Element:", productImageElement ? productImageElement.src : 'Not found');

  return {
    name: productNameElement ? productNameElement.innerText : 'Product name not found',
    price: productPriceElement ? productPriceElement.innerText : 'Price not found',
    imageUrl: productImageElement ? productImageElement.src : 'Image not found'
  };
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command === 'getProductDetails') {
    let productDetails = extractProductDetails();
    response(productDetails);
  }
});

console.log("Content script loaded and running...");
