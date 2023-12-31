// @name         Infinite Loadingscreen
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds infinite Loadingscreen to almost every Website
// @author       MyDrift (https://github.com/MyDrift-user/)
// @match        https://*/*
// @downloadURL  https://github.com/MyDrift-user/infinite-loadingscreen/blob/main/infinite-loading.js
// @updateURL    https://github.com/MyDrift-user/infinite-loadingscreen/blob/main/infinite-loading.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Define the custom CSS for the loading screen overlay
    var customCSS = `
        #loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8); /* Adjust background color and opacity */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999; /* Ensure it's above other elements */
        }

        #loading-spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db; /* Adjust the spinner color */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    // Inject the custom CSS into the page
    GM_addStyle(customCSS);

    // Create the loading screen overlay element
    var loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';

    // Create the loading spinner element
    var loadingSpinner = document.createElement('div');
    loadingSpinner.id = 'loading-spinner';

    // Append the loading spinner to the overlay
    loadingOverlay.appendChild(loadingSpinner);

    // Append the overlay to the body of the page
    document.body.appendChild(loadingOverlay);
})();
