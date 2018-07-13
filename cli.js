const { WebClient } = require("@slack/client");
const config = require("config");

const token = config.get("slack.token");
const general = config.get("slack.channels.general");

const web = new WebClient(token);

function say(words, conversationId) {
  web.chat.postMessage({ channel: conversationId, text: words, as_user: true })
    .then((res) => {
      console.log(`Message sent: ${res.ts}`);
    })
    .catch(console.error);
}

function listChannels() {
  web.channels.list()
    .then((res) => {
      res.channels.forEach((channel) => console.log(`Channel name: ${channel.name} and id: ${channel.id}`));
    })
    .catch(console.error);
}

// listChannels();
say("What's up?", general);
