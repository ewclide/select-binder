export class Target
{
    constructor(id)
    {
        var element = document.getElementById(id);
        this.options =  element ? element.querySelectorAll("option") : [];
        this.element = element || {};
    }

    refresh(indexList)
    {
        for (var i = 0; i < this.options.length; i++)
        {
            var option = this.options[i];
            option.style.display = indexList && indexList.indexOf(option.index) == -1 ? "none" : "";
        }

        if (indexList && indexList.indexOf(this.index) == -1)
            this.index = indexList[0];
    }

    get index()
    {
        return this.element.selectedIndex;
    }

    set index(index)
    {
        return this.element.selectedIndex = index;
    }

    showAll()
    {
        for (var i = 0; i < this.options.length; i++)
            this.options[i].style.display = "";
    }
}