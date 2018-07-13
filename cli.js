const { WebClient } = require('@slack/client');
const config = require('config');

let token = config.get('slack.token');
