importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyChV_lPIENi_gCpPRaZdNZa3y2SK5g_AYo",
  authDomain: "rexvin-leads-system.firebaseapp.com",
  projectId: "rexvin-leads-system",
  storageBucket: "rexvin-leads-system.appspot.com",
  messagingSenderId: "341856894755",
  appId: "1:341856894755:web:60bf1ddd8a14f88c63d696",
  measurementId: 'G-TYDTHFFC5N',
});



const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
