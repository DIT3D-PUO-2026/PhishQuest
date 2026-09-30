
(() => {
  const routeMap = {
    '/':'index.html','/register':'register.html','/about':'about.html','/contact':'contact.html',
    '/dashboard':'dashboard.html','/learn':'learn.html','/lesson':'lesson.html','/simulation':'simulation.html',
    '/website':'website.html','/quiz':'quiz.html','/rewards':'rewards.html','/certificate':'certificate.html',
    '/ppd':'ppd.html','/teacher':'teacher.html','/profile':'profile.html','/manual':'manual.html'
  };
  const go = p => { location.href = routeMap[p] || p; };
  document.querySelectorAll('a[href]').forEach(a => {
    const h=a.getAttribute('href');
    if(h && routeMap[h]) a.setAttribute('href',routeMap[h]);
  });
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu-item').forEach(a => {
    if(a.getAttribute('href') === current) a.classList.add('active');
  });
  document.querySelectorAll('.mobile-menu-button').forEach(b => b.addEventListener('click',()=>document.querySelector('.sidebar')?.classList.add('open')));
  document.querySelectorAll('.mobile-close-button').forEach(b => b.addEventListener('click',()=>document.querySelector('.sidebar')?.classList.remove('open')));
  document.querySelectorAll('.logout').forEach(b => b.addEventListener('click',()=>go('/')));
  document.querySelectorAll('.backBtn').forEach(b => b.addEventListener('click',()=>history.length>1?history.back():go('/learn')));
  document.querySelectorAll('.startBtn').forEach(b => b.addEventListener('click',()=>go('/learn')));
  document.querySelectorAll('.quizBtn').forEach(b => b.addEventListener('click',()=>go('/quiz')));
  document.querySelectorAll('.certificateBtn:not([disabled])').forEach(b => b.addEventListener('click',()=>go('/certificate')));
  document.querySelectorAll('.learn-card').forEach((card, i) => {
    const b = card.querySelector('button');
    if (b) b.addEventListener('click', () => {
      location.href = `lessons/${[
        'lesson-1-apakah-itu-phishing.html',
        'lesson-2-phishing-e-mel.html',
        'lesson-3-kebersihan-siber.html',
        'lesson-4-keselamatan-kata-laluan.html',
        'lesson-5-kejuruteraan-sosial.html',
        'lesson-6-jika-kena-phishing.html'
      ][i] || 'lesson-1-apakah-itu-phishing.html'}`;
    });
  });

  document.querySelectorAll('.featureCard').forEach(c => {
    const text=c.textContent.toLowerCase();
    const p=text.includes('simulasi')?'simulation.html':text.includes('kuiz')?'quiz.html':text.includes('pencapaian')?'rewards.html':text.includes('modul pembelajaran')?'learn.html':null;
    if(p)c.addEventListener('click',()=>location.href=p);
  });
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const action=f.closest('.login-card')?'/dashboard':f.closest('.register-card')?'/dashboard':null;
      if(action) go(action); else alert('Borang statik: backend tidak disertakan dalam rekonstruksi ini.');
    });
  });
  const music=document.querySelector('.music-btn');
  if(music) music.addEventListener('click',()=>{ const s=music.querySelector('span'); if(s) s.textContent=(s.textContent.includes('OFF')?'Muzik ON':'Muzik OFF'); });
  const bot=document.querySelector('.phishbot-button');
  if(bot) bot.addEventListener('click',()=>alert('PhishBot UI tidak termasuk backend dalam rekonstruksi statik.'));

  // Static reconstruction of the PhishQuest quiz component.
  const quizRoot = document.querySelector('.quiz-page');
  if (quizRoot && document.getElementById('startQuizBtn')) {
    const questions = [
      {question:'Apakah yang dimaksudkan dengan phishing?',options:['Permainan dalam talian','Cubaan menipu pengguna untuk mendapatkan maklumat','Cara meningkatkan kelajuan internet','Aplikasi untuk menghantar e-mel'],answer:1,explanation:'Phishing ialah cubaan menipu atau memperdaya pengguna untuk mendapatkan maklumat sensitif seperti kata laluan, nombor akaun dan maklumat peribadi.'},
      {question:'Antara berikut, yang manakah merupakan petunjuk phishing?',options:['Domain rasmi syarikat','Permintaan segera untuk mengesahkan akaun','Sijil HTTPS','Logo syarikat'],answer:1,explanation:'Permintaan yang terlalu mendesak untuk mengesahkan akaun merupakan salah satu tanda phishing. Penyerang biasanya cuba membuat mangsa bertindak tanpa berfikir panjang.'},
      {question:'Apakah yang perlu anda lakukan jika menerima e-mel yang mencurigakan?',options:['Klik pautan tersebut','Balas e-mel dengan segera','Laporkan dan padamkan e-mel tersebut','Abaikan amaran antivirus'],answer:2,explanation:'E-mel yang mencurigakan tidak sepatutnya dibuka atau pautannya diklik. Tindakan yang lebih selamat ialah melaporkan dan memadamkan e-mel tersebut.'},
      {question:'Kata laluan yang manakah paling kukuh?',options:['123456','password','Athirah123','P@55w0rd!9X#'],answer:3,explanation:'Kata laluan yang kukuh biasanya mempunyai gabungan huruf besar, huruf kecil, nombor dan simbol serta tidak menggunakan maklumat peribadi yang mudah diteka.'},
      {question:'Apakah yang dimaksudkan dengan kejuruteraan sosial?',options:['Bahasa pengaturcaraan','Memanipulasi individu untuk mendapatkan maklumat','Memasang Windows','Membina laman web'],answer:1,explanation:'Kejuruteraan sosial ialah teknik memanipulasi atau memperdaya seseorang supaya memberikan maklumat atau melakukan tindakan yang menguntungkan penyerang.'},
      {question:'Anda menerima mesej yang mendakwa akaun Maybank anda mempunyai transaksi mencurigakan sebanyak RM2,850 dan meminta anda mengesahkan identiti melalui pautan. Apakah tindakan paling selamat?',options:['Klik pautan dan sahkan akaun','Berikan nombor akaun kepada penghantar','Semak akaun melalui aplikasi atau laman rasmi Maybank','Balas mesej untuk mendapatkan maklumat lanjut'],answer:2,explanation:'Jangan gunakan pautan yang diberikan dalam mesej mencurigakan. Sebaliknya, buka aplikasi atau laman rasmi bank secara terus untuk menyemak transaksi.'},
      {question:'Anda menerima mesej daripada Pos Malaysia yang mengatakan bungkusan anda tidak dapat dihantar kerana caj RM8.90 belum dibayar. Mesej tersebut menyediakan pautan pembayaran yang mencurigakan. Apakah petunjuk phishing?',options:['Mesej berkaitan penghantaran','Mesej meminta bayaran melalui pautan mencurigakan','Mesej menyebut jumlah RM8.90','Mesej menggunakan Bahasa Melayu'],answer:1,explanation:'Permintaan bayaran melalui pautan yang mencurigakan merupakan petunjuk phishing. Penyerang sering menggunakan isu penghantaran untuk membuat mangsa panik dan bertindak segera.'},
      {question:"Anda menerima mesej Touch 'n Go eWallet yang mengatakan anda memenangi RM500 dan perlu klik pautan untuk menuntut hadiah. Apakah tanda amaran utama?",options:['Mesej menyebut nama eWallet','Mesej menawarkan ganjaran dan meminta pengguna klik pautan','Mesej menggunakan Bahasa Melayu','Mesej mempunyai jumlah RM500'],answer:1,explanation:'Tawaran hadiah yang terlalu menarik bersama arahan untuk klik pautan merupakan tanda amaran phishing. Jangan klik pautan tersebut sebelum mengesahkan kesahihannya.'},
      {question:'Anda menerima mesej yang mendakwa anda layak menerima bayaran balik cukai RM1,250 daripada LHDN dan perlu mengemas kini maklumat akaun bank sebelum 11.59 malam. Apakah tanda phishing?',options:['Mesej menyebut LHDN','Mesej memberikan jumlah wang','Mesej menggunakan tekanan masa dan meminta maklumat akaun','Mesej menggunakan Bahasa Melayu'],answer:2,explanation:"Penggunaan tekanan masa seperti 'sebelum 11.59 malam' dan permintaan maklumat akaun merupakan tanda amaran phishing yang biasa digunakan untuk mempengaruhi mangsa."},
      {question:'Anda menerima mesej yang mengatakan anda telah memenangi iPhone 17 Pro Max secara percuma dan perlu klik satu pautan untuk menuntut hadiah. Apakah tindakan yang paling selamat?',options:['Klik pautan untuk mendapatkan hadiah','Kongsi mesej dengan rakan','Jangan klik pautan dan laporkan mesej tersebut','Berikan nombor telefon kepada penghantar'],answer:2,explanation:'Jangan klik pautan atau memberikan maklumat peribadi. Tawaran hadiah percuma yang memerlukan pengguna mengklik pautan boleh menjadi cubaan phishing.'}
    ];
    let idx=0, score=0, answered=false, time=30, timer=null;
    const $ = id => document.getElementById(id);
    const start= $('quizStart'), card=$('quizCard'), feedback=$('quizFeedback'), result=$('quizResult');
    function setTimer(v){$('quizTimer').textContent='⏱️ '+v+'s';$('quizTimer').className='quizTimer'+(v<=10?' danger':v<=20?' warning':'');}
    function stopTimer(){if(timer){clearInterval(timer);timer=null;}}
    function startTimer(){stopTimer();time=30;setTimer(time);timer=setInterval(()=>{if(--time<=0){time=0;setTimer(0);stopTimer(); answer(null,true);}else setTimer(time);},1000);}
    function render(){
      const q=questions[idx], pct=Math.round((idx+1)/questions.length*100);
      $('quizProgress').textContent=`Soalan ${idx+1} daripada ${questions.length}`;
      $('progressFill').style.width=pct+'%'; $('progressText').textContent='Kemajuan '+pct+'%';
      $('questionText').textContent=q.question;
      $('quizOptions').innerHTML='';
      q.options.forEach((opt,i)=>{const b=document.createElement('button');b.className='optionButton';b.innerHTML=`<span class="optionLetter">${String.fromCharCode(65+i)}</span><span>${opt}</span>`;b.addEventListener('click',()=>answer(i,false));$('quizOptions').appendChild(b);});
      answered=false; startTimer();
    }
    function answer(choice,timedOut){
      if(answered) return; answered=true; stopTimer();
      document.querySelectorAll('.optionButton').forEach(b=>b.disabled=true);
      const q=questions[idx], correct=choice===q.answer && !timedOut;
      if(correct) score++;
      $('feedbackPopup').className='quiz-feedback-popup '+(correct?'correct':'wrong');
      $('feedbackIcon').textContent=correct?'🎉':'❌';
      $('feedbackTitle').textContent=correct?'BETUL!':(timedOut?'MASA TAMAT!':'SALAH!');
      $('feedbackXp').hidden=!correct;
      $('correctAnswerBox').hidden=correct;
      $('correctAnswer').textContent=q.options[q.answer];
      $('explanationText').textContent=q.explanation;
      $('nextQuestionBtn').textContent=idx===questions.length-1?'🏆 Lihat Keputusan':'Soalan Seterusnya →';
      feedback.hidden=false;
    }
    function showResult(){
      const pct=Math.round(score/questions.length*100), xp=score*10;
      $('scoreCircle').textContent=`${score}/${questions.length}`;$('xpEarned').textContent=`${xp} XP`;$('percentage').textContent=pct+'%';
      let bench='', cls='';
      if(pct<40){bench='🔴 Perlu Bimbingan';cls='needs-help'}else if(pct<60){bench='🟠 Asas';cls='basic'}else if(pct<80){bench='🟡 Memuaskan';cls='satisfactory'}else if(pct<90){bench='🟢 Baik';cls='good'}else{bench='🏆 Cemerlang';cls='excellent'}
      $('benchmark').textContent=bench;$('benchmark').className='benchmark '+cls;
      $('resultRank').textContent=score===questions.length?'🏆 Wira Siber':score>=4?'🛡️ Penyiasat Siber':'🌱 Pemula Siber';
      $('resultMessage').textContent=score===questions.length?'🌟 Hebat! Anda berjaya menjawab semua soalan dengan betul!':score>=4?'🎉 Syabas! Anda hampir menguasai topik phishing.':score>=3?'😊 Bagus! Teruskan latihan supaya menjadi lebih mahir.':'📚 Teruskan belajar untuk meningkatkan kemahiran anda!';
      card.hidden=true; result.hidden=false;
    }
    $('startQuizBtn').addEventListener('click',()=>{start.hidden=true;result.hidden=true;card.hidden=false;idx=0;score=0;render();});
    $('nextQuestionBtn').addEventListener('click',()=>{feedback.hidden=true;if(idx===questions.length-1){showResult();}else{idx++;render();}});
    $('quizHomeBtn').addEventListener('click',()=>location.href='dashboard.html');
  }

})();
