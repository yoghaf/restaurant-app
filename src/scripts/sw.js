/* eslint-disable no-underscore-dangle */
import { precacheAndRoute } from "workbox-precaching";

// Do precaching
precacheAndRoute(window.self.__WB_MANIFEST);

window.self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  window.self.skipWaiting();
});

window.self.addEventListener("push", () => {
  console.log("Service Worker: Pushed");
});
