const functions = require('firebase-functions');
var admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.ChatMessageTrigger= functions.database.ref('/chats/{roomId}/{chatId}').onWrite((event)=>{
	//event가 있을 때마다 message 참조 후 push - 방의 key를 어떻게 가져올 것인가?
	var wroteUser = event.data.val().user_id;
	var wroteContent = event.data.val().content;
	
	var wroteRoom = event.data.ref.parent.key;
	
	var thisDate
	
	admin.database().ref('/chatrooms/2017-12-06/' + wroteRoom).on('value', function(snapshot){
		var participants = snapshot.val().participants;

		// 
		var count = 1;
		var tokens = [];
		var total = participants.length;
		for(participant of participants){
			admin.database().ref('/userProfile').orderByChild('email').equalTo(participant).once('child_added', function(data){
				tokens.push(data.val().devtoken);
				console.log('token_list in getTokens', tokens);				
				
				if(count === total){
					console.log('from getTokens() function: ', tokens);
					var payload ={
						'notification' : {
							'title' : 'notification title',
							'body' : 'notification body',
							'sound' : 'default',
						},
						'data' : {
							'sendername' : 'From: ' + wroteUser,
							'message' : 'Msg: ' + wroteContent
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

		console.log(participants.length);
	});
});
