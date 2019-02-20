// Debounce helper

/**
 * Delays execution of a function until a certain amount of time
 * has passed without it being called.
 * @param {*} fn - The function to be executed.
 * @param {*} time - The time to delay execution.
 */
export default function debounce(fn, time) {
  let timeout

  return function() {
    const functionCall = () => fn.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}
