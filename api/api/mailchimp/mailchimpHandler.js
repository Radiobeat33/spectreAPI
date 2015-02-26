var request = require('request');

exports.mailchimpCampaignData = function (req, res) {
  // Collects Campaign IDs for the user, only runs in mailchimpLocationList function to get campaign ID needed to run it.
  var formData = {
    "apikey": $config.Mailchimp.API_KEY,
    "filters": {
        "campaign_id": "example campaign_id",
        "from_name": "example from_name",
        "from_email": "example from_email",
        "subject": "example subject"
    }
  };

	request.post('https://us10.api.mailchimp.com/2.0/campaigns/list.json?apikey=' + $config.Mailchimp.API_KEY, {form: { key: formData }}, function optionalCallback(err, httpResponse, body) {
	  if (err) {
	    return (err);
	  }
    campaignID = body.data[0].id;
    console.log('here is the campaign ID!', campaignID);
	});
}

exports.mailchimpLocationList = function (req, res){
    // Retrieve the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address
    var campaignID;
    var formData = {
      "apikey": $config.Mailchimp.API_KEY,
      "id": campaignID
    };

    exports.mailchimpCampaignData(req, res);

    request.post('https://us10.api.mailchimp.com/2.0/lists/locations.json?apikey=' + $config.Mailchimp.API_KEY, {form: { key: formData }}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return (err);
      }
      console.log('location list data', body);
      res.send(JSON.stringify(body));
    });
}

exports.mailchimpSubscribedList = function (req, res){
    // Retrieve minimal List data for all lists a member is subscribed to
    var formData = {
      "apikey": $config.Mailchimp.API_KEY,
      "email": {
        "email": "example email",
        "euid": "example euid",
        "leid": "example leid"
      }
    };

    request.post('https://us10.api.mailchimp.com/2.0/helper/lists-for-email.json?apikey=' + $config.Mailchimp.API_KEY, {form: { key: formData }}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return (err);
      }
      console.log('Sub list data', body);
      res.send(JSON.stringify(body));
    });
}