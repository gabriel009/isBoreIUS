let boxMain = document.getElementById('main-box')
let codeBorder = document.getElementById('code-border')

let rangeTopLeft = document.getElementById('rangeTopLeft')
let rangeTopRight = document.getElementById('rangeTopRight')
let rangeBottomLeft = document.getElementById('rangeBottomLeft')
let rangeBottomRight = document.getElementById('rangeBottomRight')

function rangeValue(handleRange){
  if (handleRange === 'topLeft'){
    valueRange = rangeTopLeft.value + '%'
    boxMain.style.borderTopLeftRadius=valueRange;
    let valueTopLeft =  rangeTopLeft.value;
    return valueTopLeft
  } 
  else if (handleRange === 'topRight'){
    valueRange = rangeTopRight.value + '%'
    boxMain.style.borderTopRightRadius=valueRange;
    let valueTopRight =  rangeTopRight.value;
    return valueTopRight
  }
  else if(handleRange === 'bottomLeft'){
    valueRange = rangeBottomLeft.value + '%'
    boxMain.style.borderBottomLeftRadius=valueRange;
    let valueBottomLeft = rangeBottomLeft.value;
    return valueBottomLeft
  }
  else if(handleRange === 'bottomRight'){
    valueRange = rangeBottomRight.value + '%'
    boxMain.style.borderBottomRightRadius=valueRange;
    let valueBottomRight = rangeBottomRight.value;
    return valueBottomRight
  }  
}

function refreshValue(){
  let valueTopLeft = rangeValue('topLeft')
  let valueTopRight = rangeValue('topRight')
  let valueBottomLeft = rangeValue('bottomLeft')
  let valueBottomRight = rangeValue('bottomRight')
  codeBorder.innerHTML = `border-radius: ${valueTopLeft}% ${valueTopRight}%  ${valueBottomRight}% ${valueBottomLeft}%;`
}

function copyClipboard(){
  const copyCode = document.getElementById('code-border').textContent;

  const textArea = document.createElement('textarea');
  textArea.textContent = copyCode

  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy")
}