class WindowManager 
{
	#windows;
	#count;
	#id;
	#winData;
	#winShapeChangeCallback;
	#winChangeCallback;
	
	constructor ()
	{
		let that = this;

		// event listener for when localStorage is changed from another window
		addEventListener("storage", (event) => 
		{
			if (event.key == "windows")
			{
				let newWindows = JSON.parse(event.newValue);
				let winChange = that.#didWindowsChange(that.#windows, newWindows);

				that.#windows = newWindows;

				if (winChange)
				{
					if (that.#winChangeCallback) that.#winChangeCallback();
				}
			}
		});

		// event listener for when current window is about to ble closed
		window.addEventListener('beforeunload', function (e) 
		{
			let index = that.getWindowIndexFromId(that.#id);

			//remove this window from the list and update local storage
			that.#windows.splice(index, 1);
			that.updateWindowsLocalStorage();
		});
	}

	// check if theres any changes to the window list
	#didWindowsChange (pWins, nWins)
	{
		if (pWins.length != nWins.length)
		{
			return true;
		}
		else
		{
			let c = false;

			for (let i = 0; i < pWins.length; i++)
			{
				if (pWins[i].id != nWins[i].id) c = true;
			}

			return c;
		}
	}

	// initiate current window (add metadata for custom data to store with each window instance)
	init (metaData)
	{
		this.#windows = JSON.parse(localStorage.getItem("windows")) || [];
		this.#count= localStorage.getItem("count") || 0;
		this.#count++;

		this.#id = this.#count;
		let shape = this.getWinShape();
		this.#winData = {id: this.#id, shape: shape, metaData: metaData};
		this.#windows.push(this.#winData);

		localStorage.setItem("count", this.#count);
		this.updateWindowsLocalStorage();
	}

	getWinShape ()
	{
		let shape = {x: window.screenLeft, y: window.screenTop, w: window.innerWidth, h: window.innerHeight};
		return shape;
	}

	getWindowIndexFromId (id)
	{
		let index = -1;

		for (let i = 0; i < this.#windows.length; i++)
		{
			if (this.#windows[i].id == id) index = i;
		}

		return index;
	}

	updateWindowsLocalStorage ()
	{
		localStorage.setItem("windows", JSON.stringify(this.#windows));
	}

	update ()
	{
		//console.log(step);
		let winShape = this.getWinShape();

		//console.log(winShape.x, winShape.y);

		if (winShape.x != this.#winData.shape.x ||
			winShape.y != this.#winData.shape.y ||
			winShape.w != this.#winData.shape.w ||
			winShape.h != this.#winData.shape.h)
		{
			
			this.#winData.shape = winShape;

			let index = this.getWindowIndexFromId(this.#id);
			this.#windows[index].shape = winShape;

			//console.log(windows);
			if (this.#winShapeChangeCallback) this.#winShapeChangeCallback();
			this.updateWindowsLocalStorage();
		}
	}

	setWinShapeChangeCallback (callback)
	{
		this.#winShapeChangeCallback = callback;
	}

	setWinChangeCallback (callback)
	{
		this.#winChangeCallback = callback;
	}

	getWindows ()
	{
		return this.#windows;
	}

	getThisWindowData ()
	{
		return this.#winData;
	}

	getThisWindowID ()
	{
		return this.#id;
	}
}

export default WindowManager;