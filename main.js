/* function setElement (platform) {
  var elements = document.getElementsByClassName('downloadElement');
  for(var i = 0; i < elements.length; i++){
    var element = elements[i];
    if(platform === 'mac'){
      element.parentNode.href = 'http://www.google.com';
    }
    else {
      element.innerHTML = 'http://google.com/news';
    }
  };
}

var osString = navigator.userAgent.toLowerCase();

if(osString.indexOf('macintosh') !== -1 || osString.indexOf('mac') !== -1) {
  setElement('mac');
}
else {
  setElement('windows')
}

/*
