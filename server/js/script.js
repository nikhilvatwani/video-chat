var peer = new Peer( {
  key: 'YOUR PEERSERVER CLOUD SERVICE API KEY',
  debug: 3,
  config: {'iceServers': [
    { url: 'stun:stun1.l.google.com:19302' },
    { url: 'turn:numb.viagenie.ca',
      credential: 'muazkh', username: 'webrtc@live.com' }
  ]}
});