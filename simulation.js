(() => {
  const EMAILS = [{"sender":"Maybank Security","subject":"Akaun Anda Telah Digantung","date":"Hari Ini, 10:30 PG","content":"Pelanggan yang dihormati,\n\nAkaun anda telah digantung kerana terdapat aktiviti yang mencurigakan.\n\nSila sahkan akaun anda melalui pautan di bawah.\n\nhttps://maybank-secure-login.xyz\n\nKegagalan untuk mengesahkan akaun dalam tempoh 24 jam boleh menyebabkan akaun anda digantung secara kekal.\n\nTerima kasih.","isPhishing":true,"explanation":"E-mel ini adalah phishing kerana menggunakan domain yang mencurigakan dan memberi tekanan kepada pengguna untuk bertindak segera.","redFlags":["Domain pautan bukan domain rasmi Maybank.","Menggunakan ancaman akaun akan digantung.","Meminta pengguna klik pautan untuk pengesahan."]},{"sender":"Google","subject":"Amaran Keselamatan Google","date":"Hari Ini, 11:15 PG","content":"Hai,\n\nKami mengesan percubaan log masuk baharu ke akaun anda.\n\nJika ini adalah anda, anda tidak perlu melakukan apa-apa.\n\nJika anda tidak mengenali aktiviti ini, sila buka Google Account secara manual melalui aplikasi atau laman rasmi Google.\n\nTerima kasih,\nGoogle Security","isPhishing":false,"explanation":"E-mel ini selamat kerana tidak meminta pengguna memasukkan kata laluan atau klik pautan mencurigakan.","redFlags":["Tiada pautan mencurigakan.","Tidak meminta kata laluan.","Mengarahkan pengguna membuka laman rasmi secara manual."]},{"sender":"Shopee Malaysia","subject":"Tahniah! Anda Memenangi Baucar RM500","date":"Hari Ini, 12:20 PTG","content":"Tahniah!\n\nAnda telah dipilih sebagai pemenang baucar RM500.\n\nUntuk menuntut hadiah anda, sila lengkapkan maklumat melalui pautan berikut:\n\nhttps://shopee-reward-claim.xyz\n\nTuntutan mesti dibuat dalam masa 2 jam.\n\nTerima kasih.","isPhishing":true,"explanation":"E-mel ini adalah phishing kerana menawarkan hadiah yang tidak dijangka dan menggunakan pautan domain yang mencurigakan.","redFlags":["Hadiah yang tidak dijangka.","Domain bukan domain rasmi.","Memberi tekanan masa untuk bertindak."]},{"sender":"Netflix","subject":"Resit Pembayaran Bulanan Anda","date":"Semalam, 8:45 PG","content":"Hai,\n\nPembayaran langganan Netflix anda telah berjaya diproses.\n\nJumlah: RM55.90\n\nAnda boleh menyemak butiran langganan melalui aplikasi Netflix.\n\nTerima kasih,\nNetflix","isPhishing":false,"explanation":"E-mel ini dianggap selamat kerana hanya memberikan maklumat transaksi dan tidak meminta maklumat sensitif.","redFlags":["Tiada permintaan kata laluan.","Tiada pautan pembayaran mencurigakan.","Maklumat hanya bersifat pemberitahuan."]},{"sender":"J&T Express","subject":"Penghantaran Parcel Gagal","date":"Hari Ini, 2:10 PTG","content":"Pelanggan yang dihormati,\n\nPenghantaran parcel anda tidak dapat dilakukan kerana alamat tidak lengkap.\n\nSila kemas kini alamat dan bayar caj penghantaran RM3.00 melalui pautan berikut:\n\nhttps://jtexpress-payment.xyz\n\nSila lakukan pembayaran dalam masa 6 jam.\n\nTerima kasih.","isPhishing":true,"explanation":"E-mel ini adalah phishing kerana meminta bayaran melalui pautan yang bukan domain rasmi.","redFlags":["Meminta bayaran melalui pautan.","Domain mencurigakan.","Menggunakan had masa untuk mendesak pengguna."]},{"sender":"PUO Student Portal","subject":"Notifikasi Jadual Akademik","date":"Hari Ini, 9:00 PG","content":"Assalamualaikum,\n\nJadual akademik bagi semester semasa telah dikemaskini.\n\nSila semak jadual anda melalui portal pelajar rasmi PUO.\n\nTerima kasih.","isPhishing":false,"explanation":"E-mel ini selamat kerana hanya memberikan notifikasi dan tidak meminta maklumat peribadi atau pembayaran.","redFlags":["Tiada permintaan maklumat sensitif.","Tiada pautan mencurigakan.","Maklumat boleh disemak melalui portal rasmi."]},{"sender":"Touch 'n Go eWallet","subject":"Akaun Anda Memerlukan Pengesahan","date":"Hari Ini, 3:30 PTG","content":"Pelanggan yang dihormati,\n\nAkaun anda telah dikesan mempunyai masalah keselamatan.\n\nSila sahkan akaun anda sekarang untuk mengelakkan akaun disekat.\n\nhttps://tng-secure-verification.xyz\n\nKegagalan berbuat demikian dalam masa 12 jam akan menyebabkan akaun anda ditamatkan.","isPhishing":true,"explanation":"E-mel ini adalah phishing kerana menggunakan domain palsu dan menggunakan ancaman untuk memaksa pengguna bertindak.","redFlags":["Domain mencurigakan.","Menggunakan ancaman akaun ditamatkan.","Meminta pengguna melakukan pengesahan melalui pautan."]},{"sender":"Microsoft 365","subject":"Mesyuarat Microsoft Teams","date":"Hari Ini, 4:00 PTG","content":"Hai,\n\nAnda telah dijemput ke mesyuarat Microsoft Teams.\n\nTarikh: Jumaat\nMasa: 10:00 PG\n\nSila semak jemputan melalui kalendar Microsoft Teams anda.\n\nTerima kasih.","isPhishing":false,"explanation":"E-mel ini selamat kerana hanya memberikan maklumat mesyuarat dan tidak meminta maklumat akaun.","redFlags":["Tiada permintaan kata laluan.","Tiada permintaan pembayaran.","Maklumat boleh disemak melalui aplikasi rasmi."]},{"sender":"WhatsApp Support","subject":"Akaun WhatsApp Anda Akan Disekat","date":"Hari Ini, 5:15 PTG","content":"Amaran!\n\nAkaun WhatsApp anda akan disekat kerana melanggar polisi keselamatan.\n\nUntuk mengelakkan akaun disekat, sila sahkan nombor telefon anda melalui pautan berikut:\n\nhttps://whatsapp-security-check.xyz\n\nTindakan diperlukan dalam masa 30 minit.","isPhishing":true,"explanation":"E-mel ini adalah phishing kerana menggunakan tekanan masa dan pautan domain yang mencurigakan.","redFlags":["Had masa yang sangat singkat.","Domain bukan domain rasmi.","Meminta pengesahan melalui pautan."]},{"sender":"Spotify","subject":"Langganan Spotify Berjaya Diperbaharui","date":"Semalam, 7:30 PG","content":"Hai,\n\nLangganan Spotify Premium anda telah berjaya diperbaharui.\n\nJumlah pembayaran telah direkodkan dalam akaun anda.\n\nUntuk melihat sejarah pembayaran, buka aplikasi Spotify.\n\nTerima kasih,\nSpotify","isPhishing":false,"explanation":"E-mel ini selamat kerana tidak meminta pengguna memberikan maklumat akaun atau melakukan pembayaran melalui pautan luar.","redFlags":["Tiada permintaan kata laluan.","Tiada pautan pembayaran luar.","Pengguna diarahkan menggunakan aplikasi rasmi."]},{"sender":"Bank Negara Malaysia","subject":"Tuntutan Bantuan Kewangan Segera","date":"Hari Ini, 6:00 PTG","content":"Tahniah!\n\nAnda layak menerima bantuan kewangan sebanyak RM1,500.\n\nUntuk menerima bayaran tersebut, sila masukkan maklumat akaun bank dan nombor TAC melalui pautan berikut:\n\nhttps://bantuan-bnm-claim.xyz\n\nTuntutan perlu dibuat sebelum tengah malam.","isPhishing":true,"explanation":"E-mel ini adalah phishing kerana meminta maklumat perbankan dan TAC melalui pautan yang mencurigakan.","redFlags":["Meminta nombor TAC.","Meminta maklumat akaun bank.","Domain mencurigakan.","Menawarkan wang secara tiba-tiba."]}];
  const TIME_LIMIT = 30;
  let emails = [], index = 0, correctCount = 0, xp = 0, timer = null, time = TIME_LIMIT;
  let answered = false;

  const root = document.querySelector('.simulation-page');
  if (!root) return;

  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
  const shuffle = arr => { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
  const fmt = sec => `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;
  const stopTimer = () => { if(timer){clearInterval(timer);timer=null;} };

  function start() {
    emails = shuffle(EMAILS);
    index = 0; correctCount = 0; xp = 0; answered = false;
    renderQuestion();
  }

  function renderStart() {
    root.innerHTML = `
      <div class="simulation-start-screen"><div class="simulation-start-modal">
        <div class="simulation-start-icon">📧</div>
        <h1>Simulasi E-mel Phishing</h1>
        <p>Uji kebolehan anda mengenal pasti e-mel phishing dan e-mel yang selamat.</p>
        <div class="simulation-info">
          <div class="simulation-info-card"><span>📩</span><strong>12</strong><small>E-mel</small></div>
          <div class="simulation-info-card"><span>🟢</span><strong>6</strong><small>Selamat</small></div>
          <div class="simulation-info-card"><span>🔴</span><strong>6</strong><small>Phishing</small></div>
          <div class="simulation-info-card"><span>⏱️</span><strong>30s</strong><small>Setiap E-mel</small></div>
        </div>
        <div class="simulation-start-warning">💡 Setiap e-mel mempunyai masa 30 saat untuk dijawab. Timer akan reset kepada 30 saat untuk e-mel seterusnya.</div>
        <button class="simulation-start-btn" id="simulationStartBtn">🚀 Mula Simulasi</button>
      </div></div>`;
    root.querySelector('#simulationStartBtn').addEventListener('click', start);
  }

  function renderQuestion() {
    stopTimer(); answered=false; time=TIME_LIMIT;
    const e=emails[index]; const pct=((index+1)/emails.length*100).toFixed(0);
    root.innerHTML = `
      <div class="simulation-header"><div><h1>📧 Simulasi E-mel Phishing</h1><p>Kenal pasti sama ada e-mel ini selamat atau phishing.</p></div><div class="simulation-timer" id="simTimer">⏱️ 00:30</div></div>
      <div class="simulation-progress-container"><div class="simulation-progress-top"><span>📩 E-mel ${index+1} / ${emails.length}</span><span>⭐ XP: ${xp}</span></div><div class="simulation-progress-bar"><div class="simulation-progress-fill" style="width:${pct}%"></div></div></div>
      <div class="simulation-container">
        <div class="email-list"><h2>📥 Peti Masuk</h2>${emails.map((x,i)=>`<div class="email-item ${i===index?'active':''} ${i<index?'completed':''}"><div class="email-number">${i+1}</div><div class="email-item-content"><strong>${esc(x.sender)}</strong><p>${esc(x.subject)}</p></div>${i<index?'<span class="email-check">✓</span>':''}</div>`).join('')}</div>
        <div class="email-view"><div class="toolbar"><button disabled>↩ Balas</button><button disabled>→ Majukan</button><button disabled>🗑 Padam</button></div>
          <div class="emailHeader"><h2>${esc(e.subject)}</h2><p><strong>Daripada:</strong> ${esc(e.sender)}</p><p><strong>Tarikh:</strong> ${esc(e.date)}</p></div>
          <div class="emailContent">${esc(e.content)}</div>
          <div class="buttons"><button class="safe" id="safeBtn">🟢 Selamat</button><button class="danger" id="phishBtn">🔴 Phishing</button></div>
        </div>
      </div>`;
    root.querySelector('#safeBtn').addEventListener('click',()=>answer(false,false));
    root.querySelector('#phishBtn').addEventListener('click',()=>answer(true,false));
    startTimer();
  }

  function startTimer() {
    const el=root.querySelector('#simTimer'); const update=()=>{el.textContent='⏱️ '+fmt(time);el.className='simulation-timer'+(time<=10?' timer-danger':time<=20?' timer-warning':'');};
    update();
    timer=setInterval(()=>{
      time--; update();
      if(time<=0){stopTimer(); answer(null,true);}
    },1000);
  }

  function answer(choice,timedOut) {
    if(answered) return; answered=true; stopTimer();
    const e=emails[index]; const isCorrect=!timedOut && choice===e.isPhishing;
    if(isCorrect){correctCount++;xp+=10;}
    const cls=isCorrect?'correct':'wrong';
    const icon=isCorrect?'🎉':timedOut?'⏰':'❌';
    const title=isCorrect?'BETUL!':timedOut?'MASA TAMAT!':'SALAH!';
    root.insertAdjacentHTML('beforeend',`<div class="simulation-feedback-overlay"><div class="simulation-feedback-popup ${cls}">
      <div class="feedback-icon">${icon}</div><h1>${title}</h1>${isCorrect?'<div class="feedback-xp">⭐ +10 XP</div>':`<div class="correct-answer-box"><strong>Jawapan yang betul:</strong><p>${e.isPhishing?'🔴 Phishing':'🟢 Selamat'}</p></div>`}
      <div class="explanation-box"><h3>💡 Penjelasan</h3><p>${esc(e.explanation)}</p></div>
      <div class="red-flags-box"><h3>🔍 Perkara yang perlu diperhatikan</h3><ul>${e.redFlags.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
      <button class="simulation-next-btn" id="simNextBtn">${index===emails.length-1?'🏆 Lihat Keputusan':'E-mel Seterusnya →'}</button>
    </div></div>`);
    root.querySelector('#simNextBtn').addEventListener('click',()=>{root.querySelector('.simulation-feedback-overlay')?.remove();if(index===emails.length-1)showResult();else{index++;renderQuestion();}});
  }

  function showResult() {
    stopTimer(); const pct=Math.round(correctCount/emails.length*100);
    const msg=pct>=80?['🏆 Cemerlang!','Anda sangat baik dalam mengenal pasti e-mel phishing.']:pct>=50?['👍 Bagus!','Anda sudah mempunyai asas yang baik. Teruskan berlatih.']:['💡 Jangan risau!','Cuba semula dan perhatikan red flags dengan lebih teliti.'];
    root.innerHTML=`<div class="simulation-result-screen"><div class="simulation-result-modal"><div class="simulation-result-icon">🎉</div><h1>Simulasi Selesai!</h1><p>Tahniah! Anda telah melengkapkan semua 12 simulasi e-mel.</p><div class="simulation-final-score"><div><span>Skor</span><strong>${correctCount} / ${emails.length}</strong></div><div><span>Markah</span><strong>${pct}%</strong></div><div><span>XP</span><strong>⭐ +${xp}</strong></div></div><div class="simulation-final-message"><div class="result-message-title">${msg[0]}</div><p>${msg[1]}</p></div><button class="simulation-restart-btn" id="simRestartBtn">🔄 Cuba Semula</button></div></div>`;
    root.querySelector('#simRestartBtn').addEventListener('click',renderStart);
  }

  renderStart();
})();
