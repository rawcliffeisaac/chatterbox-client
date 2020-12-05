var Rooms = {
  // iterating through results
  // passing each object in results through roomsview.js method

  // this is what it should do ^
  // but we are adding this functionality to messages.js with the understanding that we would do renaming given more time
  storage: {},

  doesRoomAlreadyExist: function(roomname) {
    if (Rooms.storage[roomname]) {
      return true;
    } else {
      return false;
    }
  },

  addRoomToStorage: function(roomname) {
    Rooms.storage[roomname] = true;
    RoomsView.renderRoom(roomname);
  }
};