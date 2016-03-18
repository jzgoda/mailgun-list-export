var request = require('request');
var subscribed = 'yes';
var recordsPerRequest = 100;
var page = 0;
var members = [];

module.exports = {
	fetchMembers: function(apiKey, listName, callback) {
		request.get({ url: 'https://api:' + apiKey + '@api.mailgun.net/v2/lists/' + listName + '/members',
			qs: {
				'subscribed': subscribed,
				'limit': recordsPerRequest,
				'skip': recordsPerRequest * page
			}}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var jsonObject = JSON.parse(body);
				members = members.concat(jsonObject.items);
				if (page < (Math.ceil(jsonObject.total_count / recordsPerRequest) - 1)) {
					page++;
					module.exports.fetchMembers(apiKey, listName, callback);
				} else {
					callback(members);
				}
			}
		});
	}
}