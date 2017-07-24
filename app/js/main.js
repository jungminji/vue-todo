'use strict';// Data
(function(window){'use strict';window.user={name:'Jungmin',age:28,message:'Howdy!'}})(window);// Vanilla
// ((window, user) => {
//   'use strict';
//   let document = window.document;
//   let userInput;
//   let printUserData;
//   function init(){
//     userInput = document.querySelector('.user-input');
//     printUserData = document.querySelector('.print-user-input');
//     render();
//     eventBind();
//   }
//   function eventBind(){
//     userInput.addEventListener('keyup', update);
//   }
//   function render(){
//     let msg = user.message;
//     userInput.value = msg;
//     printUserData.textContent = msg;
//   }
//   function update(e){
//     let value = e.target.value;
//     user.message = value;
//     printUserData.textContent = value;
//   }
//   init();
// })(window, user);
//jQuery
(function(window,$,user){'use strict';var document=window.document;var $userInput=void 0;var $printUserData=void 0;function init(){$userInput=$('.user-input');$printUserData=$('.print-user-input');render();eventBind()}function eventBind(){$userInput.on('keyup',update)}function render(){var msg=user.message;$userInput.val(msg);$printUserData.text(msg)}function update(e){var value=e.target.value;user.message=value;$printUserData.text(value)}init()})(window,$,user);// Vue
(function(window,Vue){'use strict';new Vue({el:'.vue-demo',// Mount DOM element
data:{message:'Vue practice!'}})})(window,Vue);
//# sourceMappingURL=main.js.map