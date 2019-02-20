### ionic이 없는 환경에서 처음 작업할 때(windows 환경 기준)

1. Node.js설치(npm으로 ionic을 설치하기 위해서다. 맥의 경우 npm이 있으면 패스)
2. npm install -g ionic cordova
3. iTaxi 폴더 안에서 npm install(우리 프로젝트에 있는 모듈들을 다운 받아야 실행이된다.)
4. ionic serve -c(이걸로 기존 프로젝트가 정상적으로 작동하는지 확인하기)

------

### 안드로이드 배포(Windows 환경 기준)

1. android studio와 jdk를 설치해야한다.
2. 안드 스튜디오를 설치 후에는 프로그램 시작후 아래 configuration에서 sdk manager로 가고 v4.4(KiKat)이상 다 설치하도록 한다.
3. 설치 후 JAVA_HOME, ANDROID_HOME의 환경 변수 설정을 해주어야한다. 제어판 -> 시스템 -> 고급 시스템 설정 -> 환경변수 (이 정도는 java 환경변수 설정, android sdk 환경변수 설정에 관해 검색해봐라.)
4. 안드 설치 할 때 ANDROID_HOME에 관한 sdk폴더 위치를 잘 잡아야하고 경로에 한글이 들어갈 수 없으니 애초에 윈도우 로그인 계정을 영어로 하던지 다른 경로에 설치하고 기억을 하던지해라.
5. ionic cordova build android --release (release꼭 붙여야한다. debug용으로 빌드하면 아래 과정에서 실패나옴.)
6. cd C:\Users\Public\Android\sdk\build-tools\28.0.3 (이거는 위에서 말한 sdk 위치에 따라 달라진다.)
7. ./zipalign -v -p 4 android-release-unsigned.apk iTaxi.apk
8. ./apksigner sign —ks iTaxi.jks iTaxi.apk (이때 비밀번호 쳐라고 나오는데 우주최강206 하면 된다.)
9. ./apksigner verify —verbose iTaxi.apk
10. https://developer.android.com/distribute/console/?hl=ko 여기에 cra.handong.service로 접속하고 비밀번호는 전통 그대로다.
11. 로그인 후 왼쪽 앱 버전을 클릭 후 프로덕션 관리를 클릭한다.
12. 버전 수정 혹은 새 버전 출시를 눌러서 진행 하면 끝!

### 안드로이드 배포(맥OS 기준)

1. android stduio, jdk(8버전 이상으로 하나의 jdk버전만 놔두는게 편하다)를 설치.
2. brew install gradle
3. 안드 스튜디오로 sdk platform을 설치
4. sudo chmod +x /Applications/Android\ Studio.app/Contents/gradle/gradle-4.4/bin/gradle (이 과정은 gradle사용이 안 되어서 했던건데 생략하고 시도해봐라. 그리고 경로는 항상 상대적이기에 이해하고 명령어를 쳐라)
5. npm install
6. sudo ionic cordova build android
7. cd /Users/sam-koh/Library/Android/sdk/build-tools/27.0.3/
8. ./zipalign -v -p 4 android-release-unsigned.apk iTaxi.apk
9. ./apksigner sign —ks iTaxi.jks iTaxi.apk 
10. ./apksigner verify —verbose iTaxi.apk
11. https://developer.android.com/distribute/console/?hl=ko 여기에 cra.handong.service로 접속하고 비밀번호는 전통 그대로다.
12. 로그인 후 왼쪽 앱 버전을 클릭 후 프로덕션 관리를 클릭한다.
13. 버전 수정 혹은 새 버전 출시를 눌러서 진행 하면 끝!

------

### 웹 업데이트 방법

1. ionic serve를 한다.(www 폴더 내용을 빌딩하는 과정)
2. 아이택시 서버는 203.252.99.214(2019년 2월 기준)으로 scp -r과 같은 명령어로 www폴더를 우선 서버 위에 올린다. (scp -r www cra@203.252.99.214 or cra@itaxi.handong.edu)
3. 아이택시 웹 서버 경로는 /var/www/iTaxi로 설정되어 있으므로 빌딩된 www폴더를 iTaxi폴더와 바꾸기만 하면된다.

### 웹 업데이트시 주의사항

- 새로운 버전의 폴더를 옮길때에는 기존 아이택시 폴더는 iTaxi_2019_02_15와 같이 이름을 바꾸어 백업 폴더로 두고 지우지는 않는다.
- 이전 버전을 백업 폴더로 두고 새로운것을 옮긴 이후에 새로운 버전에 문제가 있으면 재빨리 새로운 폴더를 지우고 백업 폴더를 다시 iTaxi로 이름을 바꿔서 서비스에 지장을 주지 않는다.

### 웹 서버 경로 설정(아파치 설정)

- etc/apache2/에 설정파일들이 있다.
- 경로에 관한 것은 apache2.conf파일과 sites-enabled/000-default.conf 파일에서 수정하면된다.
- 경로를 수정한 후에는 sudo service apache2 restart로 서버가 경로 변경사항을 인지할 수 있도록 한다.

------

### 각 페이지에 관한 접근 경로
- Main 접근 경로 1) Login 2) Signup 3) Appcomponent by auth
- List 접근 경로 1) Main 2) Appcomponent
- MakeRoom 접근 경로 1) List 2) Appcomponent direct
- Chatroom 접근 경로 1) Appcomponent ticket or direct 2) Main ticket 3) MakeRoom 4) RideHistory 
- Setting 접근 경로 1) Appcomponent direct
- PersonalInfo 접근 경로 1) Setting

### 현재 구조 사황
- ID로는 studentID로 쓰고 있고 미래에 가입 절차가 hisnet이 아닐 경우 프로젝트 안에 있는 userID를 다른 것으로 다 대체해야 될 것이다.
- list page와 makeRoom page는 택시와 카풀의 거의 유사한 점들 때문에 room['type']에서 그것을 구분짓고 있다.
- chatRoom에서는 파베에서 데이터를 불러올때 경로가 type에 따라 나눠진다.
- 채팅방의 접근에 관해서 list페이지에서 관리를한다. 채팅방에 들어갈 수 있고 없고가 list에서 해결이 되니 chatRoomPage에서는 모든 사람들이
  들어가있는 것으로 간주된다.
- 방 나가기 기능을 없앰으로써 먹튀 방지를 할 수 있도록 하였다. 문제가 발생할 시 학번으로 사람을 찾을 수 있도록 만들었다.
- 학번은 식별자이자 범죄 위반을 위해 변경 불가능하게 하였고 이름 역시 실명제로 둠으로써 좀 더 안전한 서비스를 추구하도록 하였다.
- 파베에 데이터를 넣을 때 list.push 와 object.set이 따로 있는데 이 2개의 차이점은 파베에 저장 될 때 이름 형식이 어떻게 되냐이다.
  push의 경우 임의의 값을 준다. 그 기준으로 적절하게 쓰면 되고 동시에 list는 말 그대로 list를 다 받아 오고 object는 하나의 객체만
  받아오는 차이점도 있다. 채팅방, 채팅의 경우 의미 있는 이름을 정하기 힘들다고 생각해서 list.push를 쓰고 다른 정렬 기준이 있는 것들은
  object.set으로 db 읽기 시 가독성을 높였다.
- UserService라는 Provider로 Login과 Signup을 제외한 모든 Page의 로그인 정보를 통괄한다.
  Login과 Signup외에는 접근 할 수 있는 루트가 없다고 생각했고 그렇기에 접속하는 시점에서 유저 정보는
  한 번만 모든 활동이 끝날때까지 저장해두면 바뀔 일이 없다고 생각했다. 그리고 그것을 지속적으로 사용한다.
- transportType이 taxi와 carpool 두개만 있다고 가정하고 if == taxi else 구문으로 짠 것이 많다.
- 자체적인 auth 시스템 개발이 힘들 것 같아서 파베 이메일 시스템을 쓰지만 실질적으로 그거는 auth를 사용하기 위해 내가 한동메일로 아이디 가입시켜놨고 비밀번호는             일정하게 주었다. 따라서 로그인 시스템은 login코드에 의거하여 hisnet 정보로 로그인 판단을 하며 대신 앱과 웹에서 세션관리를 위해 파베 로그인 시스템을 도구로써 사용하였다.
- Ridehistory와 Chatroom system자체가 동일한 키로 동일한 정보를 가지고 있다. 따라서 Chatroom에서 방 나가기 혹은 방 들어오기 등
  정보가 지속적으로 바뀌면 Ridehistory를 chatroom.ts에서 동시에 바꿔줘야 한다. (sync를 맞춰주기 위해서.)
  그러므로 구조는 Chatroom이 Main이 되고 Ridehistory는 읽기 전용의 구조를 지닌다.
- 위와 같이 하는 이유는 파베 특성상 깊이가 낮아야지 빠르기 때문에 최대한 낮은 깊이로 만들기 위해서이다.
- 동일한 원리로 chat의 경우 방키로만 관리를 하고 있고 transportType을 구분짓지 않고 관리한다.
  Ridehistory 역시 학번까지만 나눠지지 이후로는 chat과 동일한 원리로 모델링 되어 있다.
- 시간은 로컬로 해놓았기 때문에 같은 시차를 가진 장소에서만 불편함 없이 사용 할 수 있다.
- bugRoom을 이용하기 위해서 파베에 직접 bugRoom url을 만들고 lastChatDate: "2018-01-01"을 입력해줘야한다.