(function(S) {
	S.friendlyDate = S.friendlyData || function(time) {
		var date = (typeof time === 'number') ? new Date(time) : new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
			diff = (((new Date()).getTime() - date.getTime()) / 1000),
			day_diff = Math.floor(diff / 86400);
		var formatDate = function(date) {
			var today = new Date(date)
			var year = today.getYear();
			var month = today.getMonth() + 1;
			var date = today.getDate();
			var hour = today.getHours();
			var minute = today.getMinutes();
			var second = today.getSeconds();
			return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
		};

		if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
			return formatDate(data);

		return day_diff == 0 && (
			diff < 60 && "刚刚" ||
			diff < 120 && "1分钟前" ||
			diff < 3600 && Math.floor(diff / 60) + "分钟前" ||
			diff < 7200 && "1小时前" ||
			diff < 86400 && Math.floor(diff / 3600) + "小时前") ||
			day_diff == 1 && "昨天" ||
			day_diff < 7 && day_diff + "天前" ||
			day_diff < 31 && Math.ceil(day_diff / 7) + "周前";
	};
})(window.seedit ? seedit : (function() {
	window.seedit = {};
	return seedit;
})());