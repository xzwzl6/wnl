(function(){
	let list = [{
		'url':'https://211611411.github.io',
		'name':'轩哥软件合集'
	},{
		'url':'https://xgwlcm.github.io',
		'name':'轩哥小网站'
	}];
	let url = location['hostname']+location['pathname'];
	document.write(`
		<div class="mod-projects">
			<div class="hd">
				<a href="https://211611411.github.io" target="_blank">😉 更多免费资源</a>
			</div>
			<div class="bd">
				<ul>
					`+(function(){
						return list.filter(function(item){
							return item['url'].indexOf(url)==-1;
						}).map(function(item){
							return `<li><a href="${item['url']}" target="_blank">${item['name']}</a></li>`;
						}).join('');
					})()+`
				</ul>
			</div>
		</div>
		<style type="text/css">
			.mod-projects{max-width:960px;margin:0 auto 20px;padding: 30px 0;text-align:center;font-size:14px;}
			.mod-projects a{text-decoration:none;color:#6e7781;}
			.mod-projects .hd{line-height:40px;font-size:18px;font-weight:bold;}
			.mod-projects ul{overflow:hidden;list-style: none;margin:0;padding:0;}
			.mod-projects li{float:left;width:25%;}
			.mod-projects li a{display:block;margin: 0 1px 2px;line-height:36px;background: rgba(0,0,0,0.03);color:#6e7781;}
			.mod-projects li a:hover{background: #e9f4ff}
			.mod-spread{max-width:960px;margin:0 auto 20px;padding: 30px 0;text-align:center;}
			.mod-spread .bd img{max-width:100%;height: auto;}
			@media screen and (max-width: 800px){
				.mod-projects li{width:50%;}
			}
		</style>
	`);
})();