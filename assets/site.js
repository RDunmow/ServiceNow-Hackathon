(function(){
  var page = document.body.getAttribute('data-page') || 'page';
  function store(k,v){try{ if(v===undefined) return localStorage.getItem(k); if(v===null) localStorage.removeItem(k); else localStorage.setItem(k,v);}catch(e){return null;}}
  function copyText(text, btn, label){
    function ok(){ if(!btn) return; var t=btn.textContent; btn.textContent='Copied'; btn.classList.add('done'); setTimeout(function(){btn.textContent=label||t;btn.classList.remove('done');},1600); }
    if(navigator.clipboard && window.isSecureContext){ navigator.clipboard.writeText(text).then(ok,fallback); } else fallback();
    function fallback(){ var ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy'); ok();}catch(e){} document.body.removeChild(ta); }
  }
  // Copy buttons on prompts
  document.querySelectorAll('.prompt').forEach(function(p){
    var btn=p.querySelector('.copy'), code=p.querySelector('code');
    if(btn&&code) btn.addEventListener('click',function(){copyText(code.textContent,btn,'Copy prompt');});
  });
  // Checklists with progress
  var boxes=[].slice.call(document.querySelectorAll('ul.checklist input[type=checkbox]'));
  var fill=document.querySelector('.progress .fill'), count=document.querySelector('.progress .count'), ready=document.querySelector('.ready');
  function update(){
    if(!boxes.length||!fill) return;
    var done=boxes.filter(function(b){return b.checked;}).length;
    fill.style.width=(100*done/boxes.length)+'%';
    if(count) count.textContent=done+' of '+boxes.length+' done';
    if(ready) ready.classList.toggle('show', done===boxes.length);
  }
  boxes.forEach(function(b,i){
    var key='hk:'+page+':check:'+i;
    if(store(key)==='1') b.checked=true;
    b.addEventListener('change',function(){ store(key, b.checked?'1':null); update(); });
  });
  update();
  var reset=document.querySelector('[data-reset-checks]');
  if(reset) reset.addEventListener('click',function(){ boxes.forEach(function(b,i){b.checked=false;store('hk:'+page+':check:'+i,null);}); update(); });
  // Planning template
  var areas=[].slice.call(document.querySelectorAll('.tsec textarea'));
  if(areas.length){
    var saved=document.querySelector('.toolbar .saved');
    areas.forEach(function(a){
      var key='hk:template:'+a.name, v=store(key);
      if(v!==null && v!==undefined) a.value=v;
      a.addEventListener('input',function(){ store(key,a.value); if(saved) saved.textContent='Saved in this browser'; });
    });
    function compile(){
      return '# Team plan\n\n'+areas.map(function(a){ var t=a.getAttribute('data-title'); return (t?'## '+t+'\n\n':'')+a.value.trim()+'\n'; }).join('\n');
    }
    var c=document.querySelector('[data-copy-plan]'); if(c) c.addEventListener('click',function(){copyText(compile(),c,'Copy our plan');});
    var d=document.querySelector('[data-download-plan]');
    if(d) d.addEventListener('click',function(){
      var blob=new Blob([compile()],{type:'text/markdown'}), url=URL.createObjectURL(blob), a=document.createElement('a');
      a.href=url; a.download='team-plan.md'; document.body.appendChild(a); a.click(); setTimeout(function(){URL.revokeObjectURL(url); a.remove();},500);
    });
    var r=document.querySelector('[data-reset-plan]');
    if(r) r.addEventListener('click',function(){
      if(!confirm('Clear your plan and start again? This cannot be undone.')) return;
      areas.forEach(function(a){ a.value=a.defaultValue; store('hk:template:'+a.name,null); });
      if(saved) saved.textContent='Cleared';
    });
  }
})();
