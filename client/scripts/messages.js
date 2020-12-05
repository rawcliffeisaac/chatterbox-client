var Messages = {
  storage: [],
  tempMemory: [],

  checkData: function(results) {

    if (!Messages.storage.length) {
      for (let k = results.length - 1; k >= 0; k--) {
        MessagesView.renderMessage(results[k]);
        Messages.storage.unshift(results[k]);
        if (!Rooms.doesRoomAlreadyExist(results[k].roomname)) {
          Rooms.addRoomToStorage(results[k].roomname);
        }
      }
    } else {
      for (let i = 0; i < results.length; i++) {
        if (results[i] === Messages.storage[0]) {
          break;
        } else {
          Messages.tempMemory.unshift(results[i]);
        }
      }
      for (let j = 0; j < Messages.tempMemory.length; j++) {
        MessagesView.renderMessage(Messages.tempMemory[j]);
        Messages.storage.unshift(Messages.tempMemory);
        if (!Rooms.doesRoomAlreadyExist(Messages.tempMemory[j].roomname)) {
          Rooms.addRoomToStorage(Messages.tempMemory[j].roomname);
        }
      }
      Messages.tempMemory = [];
      // Messages.storage = Messages.tempMemory.concat(Messages.storage);
    }
    // loop backwards until last item of storage is found
    // if (results[i].roomname === $('#rooms select').val()) {
    //   MessagesView.renderMessage(results[i]);
    //   // }
    //   if (results[i].roomname) {
    //     RoomsView.rooms[results[i].roomname] = null;
    //   }
    // }
    // RoomsView.renderRoom();
  }
};

// $('#rooms select').val();