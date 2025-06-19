

const firebaseConfig = {
  apiKey: "AIzaSyDemo-ConfigKey1234567890",
  authDomain: "nabaa-demo.firebaseapp.com",
  projectId: "nabaa-demo",
  storageBucket: "nabaa-demo.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:demo123abc456"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function showMeaning() {
  const name = document.getElementById('nameInput').value.trim().toLowerCase();
  const result = document.getElementById('result');

  if (!name) {
    result.textContent = "দয়া করে একটি নাম লিখুন।";
    return;
  }

  try {
    const doc = await db.collection("meanings").doc(name).get();
    if (doc.exists) {
      const data = doc.data();
      result.innerHTML = `<strong>বাংলা:</strong> ${data.bn}<br><strong>আরবি:</strong> ${data.ar}`;
    } else {
      result.textContent = "দুঃখিত, এই নামের অর্থ পাওয়া যায়নি।";
    }
  } catch (error) {
    result.textContent = "সার্ভার সমস্যায় তথ্য আনতে ব্যর্থ।";
  }
}
