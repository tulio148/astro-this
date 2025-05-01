/**
 * Facebook Pixel tracking utilities
 */

/**
 * Track a button click event
 * @param {string} eventName - The name of the event to track
 * @param {Object} params - Optional parameters to include with the event
 */
export function trackButtonClick(eventName, params = {}) {
  if (typeof fbq !== "undefined") {
    fbq("track", eventName, params);
  } else {
    console.warn("Facebook Pixel not loaded");
  }
}

/**
 * Initialize click tracking for elements with data-track attribute
 * Usage: Add data-track="EventName" to any button or link element
 * Optional: Add data-track-params="{\"param_name\":\"value\"}" for additional parameters
 */
export function initClickTracking() {
  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      const eventName = element.getAttribute("data-track");
      let params = {};

      const paramsAttr = element.getAttribute("data-track-params");
      if (paramsAttr) {
        try {
          params = JSON.parse(paramsAttr);
        } catch (e) {
          console.error("Invalid data-track-params JSON", e);
        }
      }

      trackButtonClick(eventName, params);
    });
  });
}
