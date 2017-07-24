'use strict';// Mount
(function(window){'use strict';window.vm=new Vue({el:'#app',// Using template to mount and render using js file
// template: `
//     <div id="app">
//         <p>This is template example</p>
//     </div>
// `,
// Using type/x-template which stated in pug file
// template: '#app-template',
data:{info:{author:'Jungmin Ji',job:'fdev'},// Use .push method to add array items in Vue
// DO NOT use [.length] method
// The item will not be reactive to render
components:['tab','tabs','carousel','accordion','navigation']}});//.$mount('#app');   // Lazy mount
// .$mount returns Vue instance
// Mount after 2 sec, just to show how it works
// window.setTimeout(() => vm.$mount('#app'), 2000)
})(window);
//# sourceMappingURL=vue.template.js.map