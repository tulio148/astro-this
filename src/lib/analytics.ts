declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
  }
}

export const GTM_ID: string = import.meta.env.PUBLIC_GTM_ID ?? "";

function getDataLayer() {
  if (typeof window === "undefined") return undefined;
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function pushEvent(event: string, params: Record<string, any> = {}) {
  const dataLayer = getDataLayer();
  if (!dataLayer) return;
  dataLayer.push({ event, ...params });
}

export function pushPageView() {
  if (typeof window === "undefined") return;
  pushEvent("page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  });
}

export function initDataTrackTracking() {
  if (typeof document === "undefined") return;

  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      const eventName = element.getAttribute("data-track");
      if (!eventName) return;

      let params: Record<string, any> = {};
      const paramsAttr = element.getAttribute("data-track-params");
      if (paramsAttr) {
        try {
          params = JSON.parse(paramsAttr);
        } catch {
          // ignore invalid JSON
        }
      }

      pushEvent(eventName, params);
    });
  });
}

