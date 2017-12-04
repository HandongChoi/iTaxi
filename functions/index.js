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
	//event가 있을 때마다 message 참조 후 push - 방의 key를 어떻게 가져올 것인가?
	var wroteUser = event.data.val().user_id;
	var wroteContent = event.data.val().content;
	var dateKey = event.data.val().dateKey;
	var wroteRoom = event.data.ref.parent.key;

	console.log(dateKey, wroteContent);
	
	admin.database().ref('/chatrooms/' + dateKey + '/' + wroteRoom).on('value', function(snapshot){
		var participants = snapshot.val().participants;
		console.log()
		// 
		var count = 1;
		var tokens = [];
		var total = participants.length; //-1
		console.log(participants, wroteUser);
		for(participant of participants){
			if(participant !== wroteUser){
				admin.database().ref('/userProfile').orderByChild('email').equalTo(participant).once('child_added', function(data){
					tokens.push(data.val().devtoken);
					console.log('token_list in getTokens', tokens);				
					console.log(count, total);
					if(count === total){
						console.log('from getTokens() function: ', tokens);
						var payload ={
							'notification' : {
								'title' : 'notification title',
								'body' : 'notification body',
								'sound' : 'default',
							},
							'data' : {
								'sendername' :  wroteUser,
								'message' : wroteContent
							}
						}
				
						console.log(payload);
					
						return admin.messaging().sendToDevice(tokens, payload).then((response) => {
							console.log('success', response);
						}).catch((err) => {
							console.log('err: ', err);
						})
					}
				
					count++;
				});	
			}	
		}

		console.log(participants.length);
	});
});
