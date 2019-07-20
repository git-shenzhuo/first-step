function dropDownMenu(btn, box) {
	var istrue = true;
	//鼠标点击一次出现，再点击又隐藏
	btn.onclick = function(ev) {
		//					ev = ev || window.event;
		if(istrue) {
			box.style.display = 'block'; //1
		} else {
			box.style.display = 'none'; //2
		}
		istrue = !istrue;
		ev.stopPropagation(); //阻止冒泡  高级浏览器

	}

	//点击document的时候盒子隐藏
	document.onclick = function() {
		istrue = true;
		box.style.display = 'none';
	}
}

function imgscroll(id, cls) {
	/*
	 	插件：imgscroll()
	 	参数：
	 		* id : 最外层盒子的id
	 		* cle：焦点的高亮样式名
	 	日期：2019-4-17
	 	作者：强哥
	 	github:
	 	个人博客：阿里云url
	*/

	//找元素
	var box = document.getElementById(id);
	var imglist = box.children[0];
	var light = box.children[1]; //焦点
	var posibtn = box.children[2];
	var prevbtn = posibtn.children[0]; //上一张
	var nextbtn = posibtn.children[1]; //下一张
	var lis = imglist.getElementsByTagName('li');
	var iw = lis[0].offsetWidth;
	var now = 0; //存可视区的下标

	//1.图片放在右侧，第一个图放在可视区
	for(var li of lis) {
		li.style.left = iw + 'px';
	}
	lis[0].style.left = 0;

	//2.自动轮播
	var timer = null;
	timer = setInterval(next, 2000); //图片切换的间隔时间

	function next() {
		//旧图挪走
		startMove(lis[now], {
			'left': -iw
		}); //0

		//新图进入可视区  1
		now++;
		if(now >= lis.length) {
			now = 0;
		}
		lis[now].style.left = iw + 'px'; //快速把新图放在右侧
		startMove(lis[now], {
			'left': 0
		});
		lightmove(); //焦点跟随
	}

	function prev() {
		//旧图挪走:挪到右侧
		startMove(lis[now], {
			'left': iw
		});
		//新图进入可视区
		now--;
		if(now <= -1) { //临界值
			now = lis.length - 1;
		}
		lis[now].style.left = -iw + 'px';
		startMove(lis[now], {
			'left': 0
		});
		lightmove(); //焦点跟随
	}

	//3.点击左右按钮可以切换上下张

	//鼠标移入可视区就停止定时器，移出就继续运动
	box.onmouseover = function() {
		clearInterval(timer);
	}

	box.onmouseout = function() {
		timer = setInterval(next, 2000);
	}

	//另类需求：点击多次，两次点击的间隔时间太短，第二次点击无效

	//下一张
	//	var oldtime = new Date();
	nextbtn.onclick = function() {
		//		if(new Date() - oldtime > 800) {
		next();
		//		}
		//		oldtime = new Date();
	}

	//上一张
	prevbtn.onclick = function() {
		prev();
	}

	//3.焦点跟随
	//创建焦点
	var html = '';
	for(var i = 0; i < lis.length; i++) {
		html += '<span>' + (i + 1) + '</span>';
	}
	light.innerHTML = html;
	light.children[0].className = cls;

	function lightmove() {
		//排他
		for(var i = 0; i < lis.length; i++) {
			light.children[i].className = '';
		}
		light.children[now].className = cls;
	}

	//4.点击焦点切换到对应的图片

	for(let i = 0; i < light.children.length; i++) {
		light.children[i].onclick = function() {
			//			console.log(i);
			if(i > now) {
				//新图从右边进入
				//旧图挪走
				startMove(lis[now], {
					'left': -iw
				});
				//新图进入可视区
				lis[i].style.left = iw + 'px'; //快速放在右侧
			}
			if(i < now) {
				//新图从左边进入
				//旧图挪走
				startMove(lis[now], {
					'left': iw
				});
				//新图进入可视区
				lis[i].style.left = -iw + 'px'; //快速放在左侧		
			}

			startMove(lis[i], {
				'left': 0
			});
			now = i; //新图变旧图
			lightmove();
		}
	}
}

//1.写构造函数：里面放属性
function Tab(id) { //构造函数 ：类
	//this = new Object()
	this.oBox = document.getElementById(id); //this 指的是tab
	this.aInputs = this.oBox.getElementsByTagName('input'); //通过标签名查找元素
	this.aDivs = this.oBox.getElementsByClassName('con'); //通过类名查找元素
}

//2.普通的函数改成方法:构造函数.原型.方法名

Tab.prototype.init = function() {
	//循环绑定事件
	for(var i = 0; i < this.aInputs.length; i++) { //this 指的是指的是tab
		this.aInputs[i].index = i; //添加索引，做一个标识，点击的时候就可以知道我点的是第几个了
		var _this = this; //老的方式
		this.aInputs[i].onclick = function() { //箭头函数：es6
			_this.move(this); //第一个this：aInputs[i] 修正指向，第二个：this aInputs[i]
			//					this.move(this);
		}; //bind()es5
	}
}

Tab.prototype.move = function(now) {
	//排他:清空
	for(var i = 0; i < this.aInputs.length; i++) { //this 指的是tab
		this.aInputs[i].className = '';
		this.aDivs[i].style.display = 'none';
	}
	now.className = 'active'; //添加类名
	this.aDivs[now.index].style.display = 'block';
}

function toQuicktop(ele, ih) {
	//快速版回到顶部
	window.onscroll = function() {
		var scrollTop = window.scrollY; //垂直方向的滚动距离
		if(scrollTop >= ih) {
			ele.style.display = 'block';
		} else {
			ele.style.display = 'none';
		}
	}

	//2.点击按钮就可以快速回到顶部
	ele.onclick = function() {
		window.scrollTo(0, 0);
	}
}

function toSlowtop(ele, ih, speed) {
	//ele:按钮   ih:到哪里显示；speed:步长

	//1.滚动到300px的时候，就出现回到顶部按钮
	window.onscroll = function() {
		var scrollTop = window.scrollY; //垂直方向的滚动距离
		if(scrollTop >= ih) {
			ele.style.display = 'block';
		} else {
			ele.style.display = 'none';
		}
	}

	//2.点击按钮就可以快速回到顶部
	ele.onclick = function() {
		//					window.scrollTo(0,0);
		var scrollTop = window.scrollY; //目前的滚动距离
		var timer = setInterval(function() {
			scrollTop -= speed;
			if(scrollTop <= 0) {
				clearInterval(timer);
				window.scrollTo(0, 0);
			} else {
				window.scrollTo(0, scrollTop);
			}

		}, 30);
	}
}

function diaLog(con, iw, ih) {

	var boxdiv = document.createElement('div');
	boxdiv.className = 'box';
	var html = `<div class="con">
									<p>${con}</p>
									<input type="button" class="close" value="关闭" />
								</div>
								<div class="mark"></div>`;
	boxdiv.innerHTML = html;
	//插入到页面  
	document.body.appendChild(boxdiv); //渲染后再找节点

	//设置弹窗大小
	var con = document.getElementsByClassName('con')[0];
	css(con, 'width', iw);
	css(con, 'height', ih);

	//给遮罩设置高度
	var mark = document.getElementsByClassName('mark')[0];
	css(mark, 'height', window.innerHeight + 'px');

	//点击关闭
	var close = document.getElementsByClassName('close')[0];
	close.onclick = function() {
			//删除节点   父节点.removeChild(子节点)
			document.body.removeChild(this.parentNode.parentNode);
		}
		//					mark.onclick = function() {
		//						//删除节点   父节点.removeChild(子节点)
		//						document.body.removeChild(this.parentNode);
		//					}
}