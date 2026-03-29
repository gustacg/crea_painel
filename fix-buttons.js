const fs = require('fs');
let c = fs.readFileSync('public/creama-home.html', 'utf8');

// Fix 1: Fix click on menu button 'Acessar Painel Interno' - navigate at top window level
c = c.replace(
  'href="/painel" data-discover="true"',
  'href="javascript:void(0)" onclick="window.top.location=\'/painel\'"'
);

// Fix 2: Fix click on Validar CAT buttons in quick access menu
c = c.replace(
  /href="\/painel" target="_top"  onClick="" class=""/g,
  'href="javascript:void(0)" onclick="window.top.location=\'/painel\'"'
);

// Fix 3: Add CSS for validarcat1 (icon button) and validarcat2 (label button) modules
const cssToAdd = [
  '#dslc-module-validarcat1 .dslc-button{text-align:center ;margin-top:25px;background-repeat:repeat ;background-attachment:scroll ;background-position:top left ;}',
  '#dslc-module-validarcat1 .dslc-button a{background-color:#d1d1d1 ;border-radius:80px;padding-top:12px;padding-bottom:12px;padding-left:47px;padding-right:47px;display:inline-block ;color:#ffffff ;font-style:normal ;font-weight:100;font-family:"Lato";text-transform:none ;border-color:#eeecec;border-width:10px;border-style:solid solid solid solid;}',
  '#dslc-module-validarcat1 .dslc-button a:hover{background-color:#4a89d3 ;color:#ffffff ;border-color:#7ab3f4;}',
  '#dslc-module-validarcat1 .dslc-button a:before{opacity:1 ;}',
  '#dslc-module-validarcat1 .dslc-button a svg{width:48px; height:48px;}',
  '#dslc-module-validarcat1 .dslc-button a .dslc-icon,#dslc-module-validarcat1 .dslc-button a svg{color:#003399 ; fill:#003399 ;}',
  '#dslc-module-validarcat1 .dslc-button a:hover .dslc-icon,#dslc-module-validarcat1 .dslc-button:hover a svg{color:#ffffff ; fill:#ffffff ;}',
  '#dslc-module-validarcat2 .dslc-button{text-align:center ;background-repeat:repeat ;background-attachment:scroll ;background-position:top left ;}',
  '#dslc-module-validarcat2 .dslc-button a{background-color:rgba(0,0,0,0) ;border-radius:3px;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;display:inline-block ;color:#003399 ;font-size:14px;font-style:normal ;font-weight:700;font-family:"Lato";text-transform:none ;letter-spacing:1px;}',
  '#dslc-module-validarcat2 .dslc-button a:hover{background-color:rgba(0,0,0,0) ;color:#707070 ;}',
  '#dslc-module-validarcat2 .dslc-button a:before{opacity:1 ;}',
  '#dslc-module-validarcat2 .dslc-button a svg{width:11px; height:11px;}',
  '#dslc-module-validarcat2 .dslc-button a .dslc-icon,#dslc-module-validarcat2 .dslc-button a svg{color:#ffffff ; fill:#ffffff ;}',
  '#dslc-module-validarcat2 .dslc-button a:hover .dslc-icon,#dslc-module-validarcat2 .dslc-button:hover a svg{color:#ffffff ; fill:#ffffff ;}'
].join(' ');

const anchor = '#dslc-module-3cd0f4f974f .dslc-button a:hover .dslc-icon,#dslc-module-3cd0f4f974f .dslc-button:hover a svg{color:#ffffff ; fill:#ffffff ;}';
c = c.replace(anchor, anchor + ' ' + cssToAdd);

fs.writeFileSync('public/creama-home.html', c);
console.log('Done! Replacements applied.');
