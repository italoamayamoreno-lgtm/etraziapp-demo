// ============================================================
// VRUTA DEMO — Firebase Config
// Proyecto: eimpact-demo
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyA7O4smNpxXVfOuwvIZKkqGqWyVqdPBY7s",
  authDomain:        "eimpact-demo.firebaseapp.com",
  databaseURL:       "https://eimpact-demo-default-rtdb.firebaseio.com",
  projectId:         "eimpact-demo",
  appId:             "1:461580241894:web:8640085a35901bd05e2427"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
