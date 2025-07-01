window.addEventListener("load", function(e) {
    if ($('.sidepanel[data-name=widgetChatPanel]').sidepanel('get')) {
        $('.sidepanel[data-name=widgetChatPanel]').sidepanel('get').onOpen = function(){
        	$('#widgetChatToggler').addClass('active');
        }
        $('.sidepanel[data-name=widgetChatPanel]').sidepanel('get').onClose = function(){
        	$('#widgetChatToggler').removeClass('active');
        }
    }
});


window.tooltip_getPercent = (tooltipItems) => {
    console.log(tooltipItems);
    let sumData = tooltipItems[0].dataset.data.reduce((a,c)=>a+c,0)
    let currentValue = tooltipItems[0].dataset.data[tooltipItems[0].dataIndex];
    let percent = (currentValue / sumData * 100).toFixed(2);
    return percent+ '%';
}