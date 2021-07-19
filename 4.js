// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEUkroMM5IxaqfYwRmFQx0oBFXp4f-3yA",
  authDomain: "demoblogsite-8e8ad.firebaseapp.com",
  databaseURL: "https://demoblogsite-8e8ad.firebaseio.com",
  projectId: "demoblogsite-8e8ad",
  storageBucket: "demoblogsite-8e8ad.appspot.com",
  messagingSenderId: "57834854897",
  appId: "1:57834854897:web:dd39855d2f345c36858c50",
  measurementId: "G-FR8G1ZRP3D"
};
firebase.initializeApp(firebaseConfig)
var ur=firebase.database().ref()
document.getElementById ("gr"). addEventListener ("submit",abcd)

function abcd(e){ e.preventDefault()
  alert("abcd")
    A=document.getElementById("FN").value
    B=document.getElementById("KR").value
    C=document.getElementById("AS").value
    D=document.getElementById("MK").value
    E=document.getElementById("DF").value
    F=document.getElementById("jk").value
    G=document.getElementById("kh").value
    H=ghj()
    urf=ur.push()
    urf.set({
        name:A+" "+B,Email:C,profession:D,contact:E,location:F,travelhistory:G,simtum:H
    })



    

  }
  function ghj(){

    p=document.querySelectorAll("input[type=checkbox]:checked") 
    q=[]
    p.forEach((a)=>{q.push(a.value)})
return q
  }