var youtubeIframe = document.getElementsByTagName("iframe");
  
for (var i = 0; i < youtubeIframe.length; i++) {
  var thisObj = youtubeIframe[i];

  var src = thisObj.getAttribute("src");
  if (src != undefined && src.indexOf("https://www.youtube.com") > -1) {
    thisObj.setAttribute("src", src.replace("autoplay=1", "autoplay=0"));
  }
}