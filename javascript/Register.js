function redirect()
{
  var url = "https://playstationdapp.on.fleek.co/Playstation";
  window.location(url);
  //var url2 = " https://www.playstation.com/nl-nl/";
  //window.location(url2);
}

function addTrialToken(tokenContents) {
    const tokenElement = document.createElement('meta');
    tokenElement.httpEquiv = 'origin-trial';
    tokenElement.content = tokenContents;
    document.head.appendChild(tokenElement);
  }



