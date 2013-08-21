var parse = seedit.friendlyDate;
module('有效时间测试', {});
test('刚刚', function() {
	strictEqual(parse(+new Date()), '刚刚', '返回刚刚');
});

test('1分钟前', function() {
	strictEqual(parse(+new Date() - 1 * 60 * 1000), '1分钟前', '返回1分钟前');
});

test('5分钟前', function() {
	strictEqual(parse(+new Date() - 5 * 60 * 1000), '5分钟前', '返回5分钟前');
});

test('昨天', function() {
	strictEqual(parse(+new Date() - 24 * 60 * 60 * 1000), '昨天', '返回昨天');
});

/*test('1个月前', function() {
	strictEqual(parse(+new Date()-30*24*60*60*1000), '1个月前', '返回1个月前');
});*/

test('比较久前的时间', function() {
	strictEqual(parse('2013-07-02'), '2013-07-02', '2013-07-02');
});

module('无效时间测试', {});

test('无效字符串 aa', function() {
	strictEqual(parse('aa'), 'not a valid date', '返回无效时间')
});

/*test('无效时间 2013-08-32',function(){
	strictEqual(parse('2013-08-32'),'not a valid date','返回无效时间')
});

test('无效时间 2013/02/32',function(){
	strictEqual(parse('2013/02/32'),'not a valid date','返回无效时间')
});*/