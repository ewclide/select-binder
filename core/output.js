import { SelectBinder } from './binder';

var instances = {};

export class Output
{
	constructor(query)
	{
		this.ids = [];

		if (!query) return this;

		var elements = document.querySelectorAll(query);

		for (var i = 0; i < elements.length; i++)
		{
			let binder = new SelectBinder(elements[i]),
				id = elements[i].getAttribute("id") || Math.random();

			this.ids.push(id);

			instances[id] = binder;
		}
	}

	chooseIndex(index)
	{
		this.ids.forEach( id => {
			if (instances[id]) instances[id].chooseIndex(index)
		});
	}

	chooseValue(value)
	{
		this.ids.forEach( id => {
			if (instances[id]) instances[id].chooseValue(value)
		});
	}

	chooseText(text)
	{
		this.ids.forEach( id => {
			if (instances[id]) instances[id].chooseText(text)
		});
	}

	destroy()
	{
		this.ids.forEach( id => {
			instances[id].destroy();
			delete instances[id];
		});

		delete this;
	}
}

Output.getById = function(id)
{
	var output = new Output();
	output.ids.push(id);
	return output;
}