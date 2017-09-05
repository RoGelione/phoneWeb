/*改变字体大小*/			
			(function (doc, win) {  
			    var docEl = doc.documentElement,  
			        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
			        recalc = function () {  
			            var clientWidth = docEl.clientWidth;  
			            if (!clientWidth) return;  
			            if(clientWidth>=640){  
			                docEl.style.fontSize = '10px';  
			            }else{  
			                docEl.style.fontSize = 10 * (clientWidth / 640) + 'px';  
			            }  
			        };  
			  
			    if (!doc.addEventListener) return;  
			    win.addEventListener(resizeEvt, recalc, false);  
			    doc.addEventListener('DOMContentLoaded', recalc, false);  
			})(document, window);  
/*返回顶部*/
			var nst = '';
			var totop = document.getElementById('toTop');
			showtop();
			function showtop(){
				nst = document.body.scrollTop;
				if (nst > 300){
				totop.style.display = 'flex';
				}else{
				totop.style.display = 'none';
				}
//				console.log(nst)
			}
			document.addEventListener('scroll',showtop,false);
			function smoothscroll(){
			    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
			    if (currentScroll > 0) {
			         window.requestAnimationFrame(smoothscroll);
			         window.scrollTo (0,currentScroll - (currentScroll/5));
			    }
			};
			
	window.onload=function(){
		$(".cont-nav").on("click",'span',function(){
			ToShowNav();
		});
		function ToShowNav(){
							$('.overlay,.fixld-box').css("display","block");
							$('.toClose').on('click','span',function(){
							    $('.overlay,.fixld-box').css("display","none");
							});
							}
	}
	$(".last-arr").on("click",function(){
			location.href=history.go(-1);
	})
	/*ajax加载*/
function ajaxGoto(url,dataname){
				$.ajax({
					type:"post",
					url:url,
					data:{
						dataname:dataname
					},
					dataType:JSON,
					 success: function(){
				   			window.location.href=''
				  		},
				  error: function(){
				    alert('Ajax error!')
				  }
				});
			}