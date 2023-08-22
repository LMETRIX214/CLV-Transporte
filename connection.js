/*
    @version 1.60(BETA)
    @author LMETRIX214 <https://linktr.ee/lmetrix214>
    @exclusive use for COLEGIO LEONA VICARIO
    @subject For school administrators and parents
    @date August 21, 2023
    @description school transportation request
*/
var firebaseConfig = {
    apiKey: "AIzaSyBNiz1m_y06tS_ZWjc6ZUtaahKR9_QD10M",
    authDomain: "db-clv.firebaseapp.com",
    projectId: "db-clv",
    storageBucket: "db-clv.appspot.com",
    messagingSenderId: "231729018880",
    appId: "1:231729018880:web:9cf37d7b2f5a6d999140e5"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();