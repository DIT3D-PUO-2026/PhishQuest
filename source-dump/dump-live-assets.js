/* Run this in DevTools Console while on https://phishquest-roan.vercel.app/ */
(async () => {
  const uniq = xs => [...new Set(xs)];
  const scripts = uniq([...document.scripts].map(s => s.src).filter(Boolean));
  const styles = uniq([...document.querySelectorAll('link[rel="stylesheet"]')].map(l => l.href).filter(Boolean));
  const inlineStyles = [...document.querySelectorAll('style')].map((s,i) => ({name:`inline-${i+1}.css`, text:s.textContent||''}));
  const files = [];
  async function grab(url, fallback) {
    try {
      const r = await fetch(url, {credentials:'include'});
      if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
      return await r.text();
    } catch (e) {
      console.warn('Could not fetch', url, e);
      return fallback ?? '';
    }
  }
  for (const url of scripts) files.push({name:url.split('/').pop()||'script.js', text:await grab(url)});
  for (const url of styles) files.push({name:url.split('/').pop()||'style.css', text:await grab(url)});
  for (const x of inlineStyles) files.push(x);
  // Include the HTML entry as a useful manifest of asset references.
  files.push({name:'index-rendered.html', text:document.documentElement.outerHTML});
  const zipLike = JSON.stringify({origin:location.origin, capturedAt:new Date().toISOString(), files}, null, 2);
  const blob = new Blob([zipLike], {type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='phishquest-live-assets.json'; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),2000);
  console.log('Captured', files.map(x=>x.name));
})();
