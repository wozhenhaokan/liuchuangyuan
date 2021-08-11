
$(function () {
  $('#container').imageLabel();
  $.contextMenu({
    selector: '.kbs-label-area',
    callback: function (key, options) {
      var e = window.event || arguments[0];
      $('#container').imageLabel('create', {
        top: $('.context-menu-list')[0].offsetTop || e.clientY,
        left: $('.context-menu-list')[0].offsetLeft || e.clientX
      });
    },
    items: {
      "create": { name: "新增标签" }
    }
  });
	//导航菜单切换
	$('.navItems').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
});

