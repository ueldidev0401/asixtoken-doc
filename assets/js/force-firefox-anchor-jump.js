const isFirefox=navigator.userAgent.indexOf('Firefox')!==-1;if(isFirefox){window.addEventListener('pageshow',function(){const elId=window.location.hash;if(elId.length>1){const el=document.getElementById(elId.substr(1));if(el)el.scrollIntoView(true);}},{once:true});}