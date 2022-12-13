import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import { theme } from '../styles/Theme/theme';
import Script from 'next/script';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link rel="icon" type="image/png" href="/images/sleepie-favicon.png" />
        <script async type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
        <script async type="text/javascript" src="/static/scripts.js"></script>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        <Script id="vwoCode" strategy="beforeInteractive">
          {`window._vwo_code=window._vwo_code || (function() { var account_id=629046, version=1.3, settings_tolerance=2000, library_tolerance=2500, use_existing_jquery=false, is_spa=1, hide_element='body', /* DO NOT EDIT BELOW THIS LINE */ f=false,d=document,code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.innerText;t.onerror=function(){window._vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},init:function(){window.settings_timer=setTimeout(function(){window._vwo_code.finish()},settings_tolerance);var e=d.createElement('style'),t=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',i=d.getElementsByTagName('head')[0];e.setAttribute('id','_vis_opt_path_hides');e.setAttribute('nonce',document.querySelector('#vwoCode').nonce);e.setAttribute('type','text/css');if(e.styleSheet)e.styleSheet.cssText=t;else e.appendChild(d.createTextNode(t));i.appendChild(e);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version);return settings_timer}};window._vwo_settings_timer = code.init();return code;}()); `}{' '}
        </Script>
      </body>
    </Html>
  );
}

export default Document;
