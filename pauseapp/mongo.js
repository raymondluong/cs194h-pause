Logs = new Mongo.Collection('logs');
Logs.allow ({
  insert: function (userId, doc) {
    return true;
  }
});
