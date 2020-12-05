var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(innerObj) {
    if (innerObj.username && innerObj.text) {
      var message = MessageView.render(innerObj);
      MessagesView.$chats.prepend(message);
    }
  }

};