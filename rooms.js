let nextRoomId = 0;
let rooms = [];


function addItem(item) {
	rooms.push({id: nextRoomId, value: item});
	console.log("adding: " + item);
	nextRoomId++;
}

function removeItem(id) {
	console.log("deleting: "+id);
	rooms = rooms.filter(item => item.id !== Number(id));
}

function get() {
	return rooms;
}

addItem('Dummy Item 1');
addItem('Dummy Item 2');

module.exports = {
	addItem: addItem,
	removeItem: removeItem,
	get: get
};