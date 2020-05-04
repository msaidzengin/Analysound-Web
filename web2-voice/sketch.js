// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/q_bXBcmfTJM

function setup() {
  noCanvas();
  //let langg = navigator.language || 'en-US';
  let lang = 'tr';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);

  let continuous = true;
  let interim = true;
  speechRec.start(continuous, interim);

  function gotSpeech() {
    var textarea = document.getElementById('note-textarea');
    var noteTextarea = $('#note-textarea');
    if (speechRec.resultValue) {
      //createP(speechRec.resultString);
      //window.scrollTo(0,document.body.scrollHeight);
      noteContent = $('#note-textarea').val();
      noteContent += speechRec.resultString + "\n"
      noteTextarea.val(noteContent);
      //console.log(noteContent)
      //console.log(noteTextarea)
      textarea.scrollTop = textarea.scrollHeight;
    }
  }
}

function kaydet() {
  //console.log("asdas")
  $("#sonuc").show(1000);
  var noteTextarea2 = $('#note-textarea2');
  noteTextarea2.val("Kelime sayısı: 582 \nEn çok geçen kelimeler: Ses, Yazı, Problem, Çözüm, Anket...\nOlası Konu: Ses işleme\nOlası Ders: İnsan Bilgisayar Etkileşimi");


  
}


