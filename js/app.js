"undefined"!=typeof browser&&function(){var o=Audio.prototype.play;Audio.prototype.play=function(){this.setAttribute("crossorigin","anonymous"),document.body.appendChild(this),o.call(this)};const t=["likee.com","tiktok.com"];if(void 0!==window.location&&(!window.location.host||function(o){if(!o)return!1;for(var i=0;i<t.length;i++)if(o.indexOf(t[i])>-1)return!0;return!1}(window.location.host))){var i=HTMLVideoElement.prototype.play;HTMLVideoElement.prototype.play=function(){var o=this.src;o&&(this.setAttribute("crossorigin","anonymous"),-1===o.indexOf("https://")&&window&&window.location&&window.location.href&&0===window.location.href.indexOf("https://")&&(o=o.replace("http://","https://")),"blob:"!==o.substring(0,5)&&(this.src=o+"")),i.call(this)}}}();