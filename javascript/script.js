function borderRadius(){
  var boxMain = document.getElementById('main-box')
  
  var boxInputTopLeft = document.getElementById('top-left').value + 'px'
  var boxInputBottomLeft = document.getElementById('bottom-left').value + 'px'

  var boxInputTopRight = document.getElementById('top-right').value + 'px'
  var boxInputBottomRight = document.getElementById('bottom-right').value + 'px'

  boxMain.style.borderTopLeftRadius=boxInputTopLeft;
  boxMain.style.borderBottomLeftRadius=boxInputBottomLeft;
  boxMain.style.borderTopRightRadius=boxInputTopRight;
  boxMain.style.borderBottomRightRadius=boxInputBottomRight;

  var codeCopy = document.getElementById('code-copy')

  codeCopy.innerHTML = `border-radius: ${boxInputTopLeft} ${boxInputTopRight} ${boxInputBottomRight} ${boxInputBottomLeft};`

}

function copyClipboard(){
  const copyCode = document.getElementById('code-copy').textContent;

  const textArea = document.createElement('textarea');
  textArea.textContent = copyCode

  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy")


}
