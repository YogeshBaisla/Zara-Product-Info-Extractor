# Zara Product Info Extractor

Zara Product Info Extractor is a Chrome extension that allows you to easily extract product details (such as name, price, and image) from Zara product pages. 

## Features

- Extracts the product name, price,image url and image from the currently open Zara product page.
- Displays the extracted information in a simple popup UI.
- Allows you to reload product details if necessary.

## How It Works

- When you open a product page on Zara.com, the content script is injected into the page.
- You can click on the extension icon to view the extracted product details in the popup window.
- If the product details are not loaded immediately, you can click the **Reload Details** button to retry.

## Installation

1. **Clone the Repository**

    ```bash
    git clonehttps://github.com/YogeshBaisla/Zara-Product-Info-Extractor
    cd Zara-Product-Info-Extractor
    ```

2. **Load the Extension in Chrome**

    1. Open Chrome and go to `chrome://extensions/`.
    2. Enable **Developer mode** by toggling the switch at the top right corner.
    3. Click on **Load unpacked**.
    4. Select the folder where you cloned the project.
    5. The extension should now appear in your extensions list.

3. **Use the Extension**

    1. Navigate to any product page on Zara's website.
    2. Click on the extension icon in the top right of your browser to open the popup and view the product details.
    3. If the details are not loaded or outdated, click the **Reload Details** button in the popup to refresh the data.

## Project Structure

```bash
chrome-plugin/
  ├── icons/               # Icons used for the extension
  │   ├── icon16.png
  │   ├── icon48.png
  │   ├── icon128.png
  ├── content.js           # Content script that extracts product details
  ├── manifest.json        # Chrome extension manifest file
  ├── popup.html           # HTML for the extension popup
  ├── popup.js             # JavaScript for the popup interaction
  └── style.css            # Styling for the popup
```

## Files

- **`manifest.json`**: This is the main configuration file for the Chrome extension, specifying permissions, actions, and scripts used.
- **`content.js`**: A content script injected into Zara's product pages to extract product details.
- **`popup.html`**: The HTML structure for the extension's popup.
- **`popup.js`**: The JavaScript responsible for communicating with the content script and displaying the data in the popup.
- **`style.css`**: Styles for the popup.

## Troubleshooting

- **Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist**:
  - This error means the content script is not properly injected. Ensure that the current tab is on a valid Zara product page and refresh the page before using the extension.

- **Extension Not Loading Correctly**:
  - Make sure the extension is loaded correctly by visiting `chrome://extensions/` and reloading it if necessary.
#   Z a r a - P r o d u c t - I n f o - E x t r a c t o r  
 