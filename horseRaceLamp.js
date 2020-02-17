
function generateHtmlContent(RaceItem)
{   
    var content = '<div id=\"racecontainer\" class=\"race race-shadow\" ><div class=\"lampimgdiv"\>'
    content += '<div class="lampimg" id="leaflet" />'
    content += '<marquee  scrollamount="5" onmouseover="this.stop()" onmouseout="this.start()" hspace="30" class="lamp">'
    for (var i = 0; i < RaceItem.length;i++)
    {
        var item = RaceItem[i];
        let text = ('<span>'+'当前时间: '+ (item.nowdata) +'&nbsp&nbsp&nbsp&nbsp'+'设备编号：'+(item.devNm?item.devNm||'':'')+'&nbsp&nbsp&nbsp&nbsp'+(item.errorCode?item.errorCode||'':'')+'异常'+'&nbsp&nbsp&nbsp&nbsp'+(item.AlarmType?item.AlarmType||'':'')+'&nbsp&nbsp&nbsp&nbsp'+'报警时间: '+(item.alarmDate?item.alarmDate||'':'')+'&nbsp&nbsp&nbsp&nbsp'+(item.installAddress?item.installAddress||'':'')+'</span>');
        content += text;   
        content += '<a style="margin-top: -10px;height:8px;font-family: 微软雅黑; font-size: 14px;color:green;padding-right:10px;padding-left:10px;">'+'|'+'</a> ';
     }
    content += '</marquee>'
    content += '</div></div>'
    return content;
}
function createRaceLampControl(){
var raceLampControl = L.Control.extend({
    options: {
        position: 'topright',
    },
    initialize: function(options) {
        L.Util.setOptions(this, options);
        if (options.raceItems)
        {
            this._raceItems = options.raceItems;
        }
        
    },
    onAdd: function (map) {
        //创建一个class为leaflet-lamp的div
        var container = L.DomUtil.create('div');
        container.id = "controlcontainer";
        var RaceItem = this._raceItems;
        $(container).html(generateHtmlContent(RaceItem));
        return container;
    }

});

return raceLampControl;
}