const Vue = require('./vue');
const vm = new Vue({
    el: '#app',
    data: {
        arr: [{
            tabname: 'nba',
            news: ['已成“毒瘤”+“废物”的考辛斯，还有机会被LBJ挽救职业生涯吗？', '曝快船为招募小卡曾询价哈登比尔 遭火箭奇才拒绝', '魔术师害湖人失小卡? 知情人:他不该对媒体泄密', '爵士球迷千人请愿为斯隆立雕像:趁他还能看到这一天', '曝吉诺比利本是马刺助教首选 邓肯主动请缨上岗', '利拉德德罗赞退出男篮世界杯 备选球员浮出水面'],
            tid: 1
        }, {
            tabname: '足球',
            news: ['皇马官方宣布：阿森西奥十字韧带撕裂+半月板破裂', 'ICC-贝尔破门+失点 皇马点球战5-4阿森纳!阿笑伤退', '曝内马尔将在中国会见尤文高层 C罗或推动他加盟', '皇马66天离奇反转:贝尔又"奇迹"登场 枪里还有子弹!', '南美足协正式罚单:梅西被禁赛1场!罚款1500美元', '克伦克花钱了!斥3025万美元收购 阿森纳球迷真在哭'],
            tid: 2
        }]
    },
    template: `
    <ul class="tabs">
        <li class="tab" v-for="item in arr" v-text="item.tabname">
            <ul class="list"  :key={{item.tabname}} v-show="key=="nba"">
                <li class="listtitle" v-for="{{n in item.news}}" v-text="n"></li>
            </ul>
        </li>
    </ul>  
    
  
    `,
    method: {

    }
})
console.log(vm);