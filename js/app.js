const onload = window.onload


window.onload = function() {
  if (onload) { onload() }

  const translatorWidget = document.getElementById("MicrosoftTranslatorWidget")

  translatorWidget.onchange = function() {
    translatorWidget.style.backgroundColor = rgb(85, 85, 85)
  }
}
