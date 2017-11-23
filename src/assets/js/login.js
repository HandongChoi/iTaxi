// 사용할 앱의 JavaScript 키를 설정해 주세요.

//javascript key
Kakao.init('fdc93460634c3e84543c373d6ff9ccea');
const requestMeUrl = 'https://kapi.kakao.com/v1/user/me';
var sData;
var database = firebase.database();


function loginWithKakao() {
  // 로그인 창을 띄웁니다.
  Kakao.Auth.login({
    success: function(authObj) {

    	 Kakao.API.request({
          url: '/v1/user/me',

          success: function(res) {
		      	var sData = JSON.stringify(res);
            alert(sData);
            //"kaccount_email
            sData = JSON.parse(sData);
            var route = "kakao"
            uid = sData.id+"@"+route;             
            nickname = sData.properties.nickname;
            kaccount_email=sData.kaccount_email;
            thumbnail_image=sData.properties.thumbnail_image;

            firebase.database().ref('users/'+uid).set({
            	nickname:nickname,
				      kaccount_email:kaccount_email,
        	    thumbnail_image:thumbnail_image
            })

            alert(uid);

          },
          fail: function(error) {
            alert(JSON.stringify(error));
          }

		});


		
    },
    fail: function(err) {
      alert(JSON.stringify(err));

    }
  });
};