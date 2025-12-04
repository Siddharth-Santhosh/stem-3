// STEM.3 minimal scripts
(function(){
  // AI Tutor preview toggle (no network calls; just show/hide the panel)
  document.addEventListener('click', function(ev){
    var btn = ev.target.closest('.ai-tutor__toggle');
    if(!btn) return;
    var panelId = btn.getAttribute('aria-controls');
    if(!panelId) return;
    var panel = document.getElementById(panelId);
    if(!panel) return;
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
    btn.textContent = expanded ? 'Open tutor' : 'Close tutor';
  });
})();
