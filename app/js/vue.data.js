'use strict';/*! main.js @ 2017, yamoo9.net */(function(global){'use strict';// Team 1: 강소연, 전현우
// Team 2: 손현, 강다인, 이소정
// Team 3: 김다솜, 김세롬, 지정민
// Team 4: 이대호, 김정욱
// Team 5: 이범두, 이동우, 이창호
// Team 6: 차혜진, 김지수, 이진아
// Team 7: 임기완, 이상원
// Team 8: 한성욱, 김태훈, 고세민
// Team 9: 허우창, 정미주, 기미송
Vue.config.keyCodes={f1:112,f2:113};new Vue({el:'.project-team',data:{team:{name:'FDS 4\uAE30 \uD504\uB85C\uC81D\uD2B8 \uD300',group:[['\uAC15\uC18C\uC5F0','\uC804\uD604\uC6B0'],['\uC190\uD604','\uAC15\uB2E4\uC778','\uC774\uC18C\uC815'],['\uAE40\uB2E4\uC19C','\uAE40\uC138\uB86C','\uC9C0\uC815\uBBFC'],['\uC774\uB300\uD638','\uAE40\uC815\uC6B1'],['\uC774\uBC94\uB450','\uC774\uB3D9\uC6B0','\uC774\uCC3D\uD638'],['\uCC28\uD61C\uC9C4','\uAE40\uC9C0\uC218','\uC774\uC9C4\uC544'],['\uC784\uAE30\uC644','\uC774\uC0C1\uC6D0'],['\uD55C\uC131\uC6B1','\uAE40\uD0DC\uD6C8','\uACE0\uC138\uBBFC'],['\uD5C8\uC6B0\uCC3D','\uC815\uBBF8\uC8FC','\uAE30\uBBF8\uC1A1']]}},methods:{excludeMember:function excludeMember(i,n,e){this.team.group[i].splice(n,1);console.log(e)}}})})(window);
//# sourceMappingURL=vue.data.js.map