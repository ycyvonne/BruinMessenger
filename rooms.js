let nextRoomId = 0;
let rooms = [];


function addItem(item) {
	rooms.push({id: nextRoomId, value: item});
	console.log("adding: " + item);
	nextRoomId++;
	console.log('total rooms is: ' + rooms);
}

function removeItem(id) {
	console.log("deleting: "+id);
	//rooms = rooms.filter(item => item.id !== Number(id));
	for(var i=0 ; i<rooms.length; i++) {
	    if(rooms[i].id==id)
	        rooms.splice(i, 1);
	}
	rooms.forEach(function() {
		console.log('filtered rooms is: ' + rooms);
	});
}

function get() {
	return rooms;
}

addItem('Dummy Item 1');
addItem('Dummy Item 2');

module.exports = {
	addItem: addItem,
	removeItem: removeItem,
	get: get,
	data: {
		rooms: rooms
	}
};