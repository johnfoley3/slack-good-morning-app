# Slack Good Morning App
A basic node cli script to say good morning to configured Slack workspaces.

DO NOT CHECK IN YOUR SLACK TOKENS OR WORKSPACE NAMES

# Install
As it is a node app, don't forget to `npm install` in the root directory.

The app will need an Oauth access token. That means installing the `slack-good-morning-app` to a workspace and giving it `chat:write:user` permission to speak on the logged in user's behalf.

Add that token to a created `config/default.js` file with structure `{ slack: { token } }`.
# Usage
The configuration is important. The bare minimum from installation is to have a `slack.token` structure in place in `config/default.js`, but additional functionality for posting messages is listed in a `slack.channels` object, such as `slack.channels.general` or some other channel that's configured.

For now, only `slack.channels.general` is supported.
## say
Expects some text and the id of the conversation target that you want to talk to. The function assumes you want to send the message as the logged in user.

```js
say("what's up?", someChannel);
```

## listChannels
Lists channels that the logged in user has access to, public and private.

```js
listChannels();
```

# Tests
TODO

# License
MIT

Don't check in your Slack tokens!
