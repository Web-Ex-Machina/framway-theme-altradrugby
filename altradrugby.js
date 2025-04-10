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