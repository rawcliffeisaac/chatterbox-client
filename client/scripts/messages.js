var Messages = {
  // create a storage object

  refreshPage: function(results) {
    for (let i = 0; i < results.length; i++) {
      // if (results[i].roomname === $('#rooms select').val()) {
      MessagesView.renderMessage(results[i]);
      // }
      if (results[i].roomname) {
        RoomsView.rooms[results[i].roomname] = null;
      }
    }
    RoomsView.renderRoom();
  }
};

// $('#rooms select').val();