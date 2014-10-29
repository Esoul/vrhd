/**
 * @fileoverview 控制台
 * @authors
  Tony.Liang <pillar0514@gmail.com>
 * @description 控制房间变化与空间物体的展示，展示在PC上
 */
define('conf/page/index', function(require, exports, module) {

	require('conf/global');

	var $ = require('lib');
	var $scene = require('mods/view/scene');
	var $socket = require('mods/socket/client');

	//只在index初始化数据
	$socket.init({
		a: 1,
		b: 2
	});

	$socket.on('update', function(data) {
		console.log('socket update', data);
	});

	$('.vrscene').each(function() {
		var el = $(this);
		var type = el.attr('type');
		new $scene({
			node: el,
			type: type
		});
	});

});

