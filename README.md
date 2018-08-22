# SelectBinder.js

![license](img/license.svg) [![download](img/download.svg)][1]

### Description

Allows to link "select" elements

	It works without jquery!

### How to use

1. **create** "select" element with attribute **data-select-binder**
2. link it with other "select" element via id - just use **data-target-id**
3. define linked indexes via **data-bind-index** attributes in the "option" elements
4. **connect select-binder.min.js** after the created element or before "body" closing tag
5. following connect common page script and **use SelectBinder API**

Also you can create it **using javaScript notation**

### API

You can affect individual elements or groups of them using the special API.  
SelectBinder API provide methods:

- **chooseIndex(index)**
- **chooseValue(value)**
- **chooseText(text)**
- **destroy()**

SelectBinder static method allows to affect the specific elements:

- **getById(id)** - get API object by id of the element

### Examples

```js
// create instance by class
var brand = new SelectBinder(".brand");
    brand.chooseIndex(2);

// or get created instances using id
var brand = SelectBinder.getById("brand");

// destroy it
SelectBinder.getById("brand").destroy();

```

```html
	<p>Brand:</p>
	<select id="brand" name='brand' data-select-binder data-target-id='model'>
	    <option value='Brand-1' data-bind-index='0,3,5,7'>Brand-1</option>
	    <option value='Brand-2' data-bind-index='1,2,4'>Brand-2</option>
	    <option value='Brand-3' data-bind-index='6,8,9'>Brand-3</option>
	</select>
	<br>

	<p>Model:</p>
	<select id='model' name='model'>
		<option value='Model-1'>Model-1</option>
		<option value='Model-2'>Model-2</option>
		<option value='Model-3'>Model-3</option>
		<option value='Model-4'>Model-4</option>
		<option value='Model-5'>Model-5</option>
		<option value='Model-6'>Model-6</option>
		<option value='Model-7'>Model-7</option>
		<option value='Model-8'>Model-8</option>
		<option value='Model-9'>Model-9</option>
		<option value='Model-10'>Model-10</option>
	</select>
	
	<script src="js/select-binder/select-binder.min.js"></script>
	<script src="js/common.js"></script>
```

-------------
Thank's for using.  
Developed by Ustinov Maxim - [ewclide][2]

[1]: https://github.com/ewclide/select-binder/archive/master.zip  "download"
[2]: https://vk.com/ewclide  "ewclide"