var express = require('express');
var router = express.Router();
var PubNub = require('pubnub');

pubnub = new PubNub({
  secretKey: 'sec-c-ZThiZjAwMDQtNjczMi00YjUxLTgyNTEtZGIyNTEwOTxxxxxx',
  publishKey: 'pub-c-16c5de8d-bab4-43a7-99d0-a89f57xxxxxx',
  subscribeKey: 'sub-c-c8afabce-2958-11e9-9ee5-ae9ccexxxxxx',
  authKeys: [""]
})


// TO REVOKE THE GRANTS
/*
pubnub.grant(
  {
      read: false, // false to disallow
      write: false, // false to disallow
      manage: false // false to disallow
  },
  function (status) {
    console.log(status);
    console.log("revoked")  
  }
); 
*/

pubnub.grant(
  {
    channels: ['channel_c', 'channel_c-pnpres', 'channel_a.*', 'channel_a-pnpres', 'channel_b-pnpres', 'channel_b-pnpres', "userslist", "userslist-pnpres"],
    authKeys: ["UserA"],
    ttl: 100, // 0 for infinite 
    read: false, // false to disallow
    write: false // false to disallow  
  },
  function (status) {
    console.log(status);
  }
);

pubnub.grant(
  {
    channels: ['channel_c', 'channel_c-pnpres', 'channel_a.*', 'channel_a-pnpres', 'channel_b-pnpres', 'channel_b-pnpres', "userslist", "userslist-pnpres"],
    authKeys: ["UserB"],
    ttl: 100, // 0 for infinite 
    read: true, // false to disallow
    write: false // false to disallow  
  },
  function (status) {
    console.log(status);
  }
);

pubnub.grant(
  {
    channels: ['channel_c', 'channel_c-pnpres', 'channel_a.*', 'channel_a-pnpres', 'channel_b-pnpres', 'channel_b-pnpres', "userslist", "userslist-pnpres"],
    authKeys: ["UserC"],
    ttl: 100, // 0 for infinite 
    read: true, // false to disallow
    write: true // false to disallow  
  },
  function (status) {
    console.log(status);
  }
);




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/a', function (req, res, next) {
  res.render('a', { title: 'Express' });
});


router.get('/b', function (req, res, next) {
  res.render('b', { title: 'Express' });
});

router.get('/c', function (req, res, next) {
  res.render('c', { title: 'Express' });
});

module.exports = router;
