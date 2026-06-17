/* ═══════════════════════════════════════
   GUARDAR CONTACTO — genera un .vcf
   ═══════════════════════════════════════ */

function saveContact() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Carlitos Campos',
    'N:Campos;Carlitos;;;',
    'TITLE:Editor de Video',
    'TEL;TYPE=CELL,VOICE:+573124818209',
    'URL:https://carlitosedition.myportfolio.com/',
    'X-SOCIALPROFILE;type=instagram:https://instagram.com/carlitosdfj',
    'X-SOCIALPROFILE;type=tiktok:https://tiktok.com/@carlitosdfj',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url  = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href     = url;
  a.download = 'CarlitosEditor.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Feedback visual en el botón
  const btn = document.getElementById('saveContactBtn');
  const original = btn.innerHTML;
  btn.innerHTML  = '✓ Contacto guardado';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
  }, 2500);
}
