-----------------------------------------------------------------
			访问器属性 习题
-----------------------------------------------------------------
//"use strict" 
	/*//Object.getOwnPropertyDescriptor(obj,val) //获取
	//var play = {pid:1001,ename:"F16",price:'10000'};
	//console.log(Object.getOwnPropertyDescriptor(play,'ename'))

	Object.defineProperties(play,{  //批量更改对象中的保护属性
		ename:{
			writable:false,
			enumerable:false,
			configurable:false
		},
		pid:{
			writable:false,
			enumerable:false,
			configurable:false
		}
	})
	play.ename="ff06"
	for(var key in play){
		console.log(play[key])
	}
	console.log(play)*/



	/*var user = {uid:101,name:'lilei',salary:10000,_age:18}
	Object.defineProperties(user,{
		_age:{enumerable:false},
		age:{
			get:function(){return this._age},
			set:function(val){
				if(val>18&&val<65)
					this._age=val
				else
					throw new SyntaxError ('age max is 65 min is 18')
			}
		}
	})
	console.log(user)*/

	//"use strict"  严格模式情况下 使用构造函数内设置访问器属性
	//会报错
	function user(uid,uname,age){
		Object.defineProperties(this,{
			uid:{
				value:uid,
				writable:false,
				enumerable:true
				//configurable:false
			},
			uname:{
				value:uname,
				writable:true,
				enumerable:true
				//configurable:false
			},
			_age:{
				writable:true,
				enumerable:false
				//configurable:false
			}
		})
		this.age=age
		//Object.preventExtensions(this) //保护属性结构 不可扩展
		Object.seal(this) //兼具防扩展功能也有 configurable 功能
	}
	Object.defineProperty(user.prototype,'age',{
		
			get:function(){ return this._age},
			set:function(val){
				if(val>18&&val<65)
					this._age=val
				else
				  throw new Error("age max is 65 min is 18")
			},
			enumerable:true,
			configurable:false
	})