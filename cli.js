const { WebClient } = require("@slack/client");
const config = require("config");

const token = config.get("slack.token");
const general = config.get("slack.channels.general");

const web = new WebClient(token);

// generate 'good morning' with somewhere between 2 and 8 'o's
function funGoodMorning() {
  // 2-8 o's
  let num_os = Math.floor(Math.random() * 8) + 2;

  return `G${new Array(num_os + 1).join('o')}d morning!`;
}

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
say(funGoodMorning(), general);
