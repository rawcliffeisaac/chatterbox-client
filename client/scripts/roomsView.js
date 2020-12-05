var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: {},

  initialize: function() {
    RoomsView.$button.click(function() {
      let room = prompt('Please enter a roomname:');
      RoomsView.rooms[room] = null;
    });
  },

  renderRoom: function(roomname) {
    if (roomname) {
      let option = $('<option>').val(roomname).text(roomname);
      RoomsView.$select.append(option);
      return;
    }
    for (let room in this.rooms) {
      let option = $('<option>').val(room).text(room);
      RoomsView.$select.append(option);
    }
  }
};
