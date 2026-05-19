/**
 * Legacy click tracking utilities (data-track / data-track-params).
 *
 * NOTE: The site now uses GTM via `window.dataLayer`. This module is kept for
 * backwards compatibility with existing imports. Prefer `src/lib/analytics.ts`.
 */

/**
 * Track a button click event
 * @param {string} eventName - The name of the event to track
 * @param {Object} params - Optional parameters to include with the event
 */
export function trackButtonClick(eventName, params = {}) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
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

      if (eventName) trackButtonClick(eventName, params);
    });
  });
}
