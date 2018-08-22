import { Target } from './target';

export class SelectBinder
{
	constructor(element)
	{
		this.element = element;
		this.target = new Target(element.getAttribute("data-target-id"));
		this.options = [];

		this._init();
		this.chooseIndex(this.index);
	}

	_init()
	{
		var self = this,
			options = this.element.querySelectorAll("option");

		for (var i = 0; i < options.length; i++)
		{
			let option = options[i],
				indexList = option.getAttribute("data-bind-index");

			this.options.push({
				indexes : this._getList(indexList),
				value   : option.value,
				text    : option.innerText
			});
		}

		this.change = function(e){
			self.chooseIndex(self.index);
		}

		this.element.addEventListener("change", this.change);
	}

	destroy()
	{
		this.element.removeEventListener("change", this.change);
		this.target.showAll();
		delete this;
	}

	get index()
	{
		return this.element.selectedIndex;
	}

	_getList(indexList)
	{
		var result = [];

		if (indexList)
		{
			indexList = indexList.split(",");
			indexList.forEach( index => result.push(parseInt(index)) );
		}
		else result = false;

		return result;
	}

	chooseIndex(idx)
	{
		var indexList = this.options[idx].indexes;
		this.element.selectedIndex = idx;
		this.target.refresh(indexList);
	}

	chooseValue(value)
	{
		for (var i = 0; i < this.options.length; i++)
			if (this.options[i].value == value)
			{
				this.chooseIndex(i);
				return i;
			}
	}

	chooseText(text)
	{
		for (var i = 0; i < this.options.length; i++)
			if (this.options[i].text == text)
			{
				this.chooseIndex(i);
				return i;
			}
	}
}