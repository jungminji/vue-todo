'use strict';(function(window){'use strict';var vm=new Vue({el:'#app',data:{msg:'v-text example',show:true,markup:'\n            <p v-if=\'show\'>v-html example, data bind won\'t work</p>\n            ',forObj:{name:'Jungmin',age:27,gf:'mmooni'},forArr:['Special','Location','Detected'],added:''},methods:{changeMode:function changeMode(){this.show=!this.show},addItem:function addItem(){var input=document.querySelector('.add-input');this.$set(vm.forObj,'user_input',input.value)},getContent:function getContent(e){this.msg=e.target.value}},// Life Cycle
beforeCreate:function beforeCreate(){console.log('beforeCreated')},created:function created(){console.log('created')},beforeMount:function beforeMount(){console.log('beforeMount')},mounted:function mounted(){console.log('mounted');var addBtn=document.querySelector('.add-btn');addBtn.addEventListener('click',this.addItem)}});window.vm=vm;// You can add reactive element using Vue.set || vm.$set
})(window);// Object define property
var fds={};{var name='';var notify=function notify(msg){console.log(msg)};Object.defineProperty(fds,'name',{get:function get(){return name},set:function set(v){notify(v);name=v}})}// Instance
// Lifi Cycle Hook
// methods: {}
// Conditional render
// v-if, v-else, v-else-if, v-show
// Iteration
// v-for (Object, Array, Number, String)
// Directive
// v-text, v-html, v-once, v-cloak
// v-on, v-bind, v-model
//# sourceMappingURL=vue.directive.js.map