const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});


	//The dragend event is fired when a drag operation ends (by releasing a mouse button or hitting the escape key).
	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	//The dragend event is fired when a drag operation ends (by releasing a mouse button or hitting the escape key).

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		//The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
		list.addEventListener('dragover', function (e) {
			e.preventDefault();

			// event.preventDefault() stops the browser’s default behavior for that event.
			// By default, most elements do NOT allow drops.
			// If you don’t call preventDefault() on the dragover event:
			// The drop target will reject the dragged item
			// The drop event will never fire
		});
		
		//The dragenter event is fired when a dragged element or text selection enters a valid drop target. 
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		//The dragleave event is fired when a dragged element or text selection leaves a valid drop target.
		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		//The drop event is fired when an element or text selection is dropped on a valid drop target
		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		});
	}
}