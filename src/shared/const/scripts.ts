export const THEME = `
(function() {
    try {
        const scheme = {
            'bg': '#000',
            'color': 'rgba(255,255,255,.96)'
        }
    
        const css = 'body { display: block !important; background-color: ' + scheme['bg'] + '; color: ' + scheme['color'] + ' }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        head.appendChild(style);
        
        style.type = 'text/css';
        if (style.styleSheet){
          // this is required for IE8 and below.
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
    } catch(e) {
        console.error(e);
    }
})();`;