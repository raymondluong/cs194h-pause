Logs = new Mongo.Collection('logs');
Logs.allow({
  insert: function(userId, doc) {
    return true;
  }
});

Locations = new Mongo.Collection('locations');
Locations.allow({
	insert: function(userId, doc) {
		return true;
	}
})