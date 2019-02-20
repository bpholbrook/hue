// Clipboard helper

/**
 * Copies a string to the user's clipboard.
 * @param {*} str - The string to be copied.
 */
export default function copyStringToClipboard(str) {
  var el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style = { position: 'absolute', left: '-9999px' }
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
