if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['/Users/jrgrafton/Desktop/shortly/production/app/server/leaderboard.js']) {
   __coverage__['/Users/jrgrafton/Desktop/shortly/production/app/server/leaderboard.js'] = {"path":"/Users/jrgrafton/Desktop/shortly/production/app/server/leaderboard.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":1},"end":{"line":1,"column":13}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":19},"end":{"line":4,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":18,"column":5}},"2":{"start":{"line":4,"column":4},"end":{"line":16,"column":7}},"3":{"start":{"line":5,"column":8},"end":{"line":15,"column":9}},"4":{"start":{"line":6,"column":12},"end":{"line":11,"column":34}},"5":{"start":{"line":12,"column":12},"end":{"line":14,"column":13}},"6":{"start":{"line":13,"column":16},"end":{"line":13,"column":96}}},"branchMap":{"1":{"line":5,"type":"if","locations":[{"start":{"line":5,"column":8},"end":{"line":5,"column":8}},{"start":{"line":5,"column":8},"end":{"line":5,"column":8}}]}}};
}
var __cov_FVOEEajcV8AyFFkDUYRzTw = __coverage__['/Users/jrgrafton/Desktop/shortly/production/app/server/leaderboard.js'];
__cov_FVOEEajcV8AyFFkDUYRzTw.s['1']++;(function(){'use strict';__cov_FVOEEajcV8AyFFkDUYRzTw.f['1']++;__cov_FVOEEajcV8AyFFkDUYRzTw.s['2']++;Meteor.startup(function(){__cov_FVOEEajcV8AyFFkDUYRzTw.f['2']++;__cov_FVOEEajcV8AyFFkDUYRzTw.s['3']++;if(Players.find().count()===0){__cov_FVOEEajcV8AyFFkDUYRzTw.b['1'][0]++;__cov_FVOEEajcV8AyFFkDUYRzTw.s['4']++;var names=['Ada Lovelace','Grace Hopper','Marie Curie','Carl Friedrich Gauss','Nikola Tesla','Claude Shannon'];__cov_FVOEEajcV8AyFFkDUYRzTw.s['5']++;for(var i=0;i<names.length;i+=1){__cov_FVOEEajcV8AyFFkDUYRzTw.s['6']++;Players.insert({name:names[i],score:Math.floor(Random.fraction()*10)*5});}}else{__cov_FVOEEajcV8AyFFkDUYRzTw.b['1'][1]++;}});}());
