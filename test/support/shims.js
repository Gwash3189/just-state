// https://reactjs.org/docs/javascript-environment-requirements.html
// https://stackoverflow.com/questions/43604058/requestanimationframe-polyfill-error-in-jest-tests
global.window = global
window.addEventListener = () => {}
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node')
}
