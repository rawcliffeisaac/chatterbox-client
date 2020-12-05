var Messages = {
  // create a storage object

  refreshPage: function(results) {
    for (let i = 0; i < results.length; i++) {
      MessagesView.renderMessage(results[i]);
    }
  }
};