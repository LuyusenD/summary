class Promise {
	constructor (fun) {
		if (fun.__proto__.constructor !== Function) {
			throw new TypeError('Promise constructor\'s argument is not a function');
		}
		this.sycYes = {
			data: undefined,
			open: false,
			index: 0
		}
		this.init(fun)
	}

	init (callback) {
		try {
			callback(this.yes.bind(this))
		} catch (e) {
			this.catch(null,e)
		}
	}

	yes (data,start) {
		let syc = this.sycYes
		if (!start) {
			syc.data = data
			syc.open = true
		} else if (syc.open) {
			start(syc.data)
		}
	}

	then (v) {
		let time = setInterval(() => {
			if(this.sycYes.open) {
				clearInterval(time)
				time = null
				this.yes(null,v)
			}
		}, 50);
		return this
	}
	
	catch (e,err) {
		
	}
}

window.Promise = Promise
