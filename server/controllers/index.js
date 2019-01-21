const express = require('express');
const router = express.Router();

const sendEmail = require('./send-email');





router.post('/api/sendEmail',sendEmail.post);


module.exports = router;


// const express = require('express');
// const router = express.Router();

// const carers = require('./carers');


// router.post('/login', login.post)
// router.post('/carers', carers.post)
// router.post('/api/freindsrequest', freindsrequest.post)
// router.post('/api/notification', notification.post)
// router.post('/api/friendrequestcancel', handleRejectFriendRequest.post)
// router.post('/api/friendrequestaccept', handleAcceptFriendRequest.post)
// router.post('/api/checkFriendRelation', checkFriendRelation.post)
// router.post('/api/cancelfriendrequest', cancelFriendRequest.post)
// router.post('/api/sendmessage', handleMessages.post)
// router.get('/api/profile', getProfile)
// router.put('/api/profile', postProfile)
// router.get('/api/public-profile', getUserData)
// router.post('/api/myFriends', myFriends.post)
// router.delete('/api/myFriends', myFriends.delete)
// router.post('/api/signUp', signUp.post);
// router.post('/api/chat', chat.post);
// router.post('/api/SelectChat', SelectChat.post);


// module.exports = router;