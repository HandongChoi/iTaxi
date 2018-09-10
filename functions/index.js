const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://itaxi-54bdc.firebaseio.com"
});

exports.kakaoLogin = functions.https.onRequest((req, res) => {
   const uid = req.query.id;
   console.log(uid);
   admin.auth().createCustomToken(uid, {provider: 'KAKAO'})
     .then(function(customToken) {
       // Send token back to client
        console.log(customToken);
       res.status(200).jsonp({customToken});

     })
     .catch(function(error) {
       console.log("Error creating custom token:", error);
     });

});

exports.ChatMessageTrigger= functions.database.ref('/chats/{roomId}/{chatId}').onWrite((event)=>{
	let chatObject = event.data.val();
	if(typeof(chatObject) !== 'undefined'){
		let message = chatObject.user_name + ' : ' + chatObject.content;
		if(tokens != null){
	// this.navCtrl.setRoot(ChatRoomPage, {room: room});  
			let isCarpool = chatObject.isCarpool;
			let roomURL = '';
			if(isCarpool){
				roomURL = '/carpoolChatrooms/' + chatObject.whenToDepart + '/' + event.data.ref.parent.key;
			}else{
				roomURL = '/taxiChatrooms/' + chatObject.whenToDepart + '/' + event.data.ref.parent.key;
			}
			var payload ={
				'notification' : {
					'title' : '[iTAXI]',
					'body' : message
				},
				'data' : {
					'message' : message,
					'roomURL' : roomURL
				}
			}
			console.log(tokens);
			return admin.messaging().sendToDevice(tokens, payload).then((response) => {
				console.log('success', response);
			}).catch((err) => {
				console.log('err: ', err);
			})
		}
	}
});
