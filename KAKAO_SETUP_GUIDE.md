# 카카오 비즈니스 채널 연결 설정 가이드

## 📋 개요
웹사이트에 카카오톡 상담 기능이 성공적으로 구현되었습니다. 이제 실제 카카오 비즈니스 채널을 연결하기 위한 설정이 필요합니다.

## 🚀 구현된 기능
- ✅ 플로팅 카카오톡 버튼 (화면 우하단)
- ✅ 문의하기 섹션의 카카오톡 상담 버튼
- ✅ 운영시간 자동 표시
- ✅ 반응형 디자인
- ✅ hover 효과 및 애니메이션

## ⚙️ 설정 방법

### 1단계: 카카오 비즈니스 센터 접속
1. [카카오 비즈니스 센터](https://center-pf.kakao.com/)에 접속
2. 카카오 계정으로 로그인
3. 채널이 없다면 새 채널 생성

### 2단계: 채널 URL 확인
1. 채널 관리 > 채널 설정 메뉴 이동
2. "채널 URL" 항목에서 URL 복사
3. 일반적인 형식: `https://pf.kakao.com/_xxxxxx`

### 3단계: 채팅 URL 생성
채널 URL 뒤에 `/chat`를 추가합니다.
- 예시: `https://pf.kakao.com/_xlexxx/chat`

### 4단계: 설정 파일 수정
`js/kakao-config.js` 파일을 열어 다음 설정을 수정하세요:

```javascript
const KAKAO_CONFIG = {
    // 실제 카카오 비즈니스 채널 URL을 입력하세요
    CHANNEL_URL: 'https://pf.kakao.com/_YOUR_CHANNEL_ID/chat',
    
    // 채널 추가 URL (선택사항)
    ADD_CHANNEL_URL: 'https://pf.kakao.com/_YOUR_CHANNEL_ID',
    
    // 채널명 (표시용)
    CHANNEL_NAME: '여러분의 채널명',
    
    // 플러스친구 ID (언더바 포함)
    PLUS_FRIEND_ID: '_YOUR_CHANNEL_ID',
};
```

### 5단계: 설정 확인
1. 웹사이트를 새로고침
2. 카카오톡 버튼 클릭
3. 카카오톡 채널이 정상적으로 열리는지 확인

## 🎨 커스터마이징 옵션

### 플로팅 버튼 위치 변경
`index.html`의 CSS에서 위치를 조정할 수 있습니다:

```css
.kakao-talk-btn {
    bottom: 30px;  /* 하단에서의 거리 */
    right: 30px;   /* 우측에서의 거리 */
}
```

### 운영시간 변경
`js/kakao-config.js`에서 운영시간을 수정할 수 있습니다:

```javascript
function isOperatingHours() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    // 주말 제외
    if (day === 0 || day === 6) return false;
    
    // 운영시간 설정 (예: 09:00 ~ 18:00)
    return hour >= 9 && hour < 18;
}
```

### 색상 변경
카카오톡 버튼의 색상을 변경하려면:

```css
.kakao-talk-btn {
    background-color: #fee500; /* 카카오 옐로우 */
    /* 또는 원하는 색상으로 변경 */
}
```

## 🔧 고급 기능

### Kakao JavaScript SDK 사용 (선택사항)
더 풍부한 기능을 원한다면 Kakao SDK를 추가할 수 있습니다:

1. HTML `<head>`에 SDK 추가:
```html
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
```

2. SDK 초기화:
```javascript
Kakao.init('YOUR_JAVASCRIPT_KEY');
```

### 분석 및 추적
카카오톡 버튼 클릭을 추적하려면:

```javascript
function openKakaoChannel() {
    // Google Analytics 추적 (선택사항)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'contact',
            'event_label': 'kakao_channel'
        });
    }
    
    // 기존 코드...
}
```

## 🚨 문제 해결

### 문제: 카카오톡 버튼을 클릭해도 아무 반응이 없음
**해결방법:**
1. 브라우저 개발자 도구(F12) 열기
2. Console 탭에서 오류 메시지 확인
3. `js/kakao-config.js`의 `CHANNEL_URL`이 올바르게 설정되었는지 확인

### 문제: "카카오 비즈니스 채널 설정이 필요합니다" 메시지
**해결방법:**
1. `js/kakao-config.js` 파일의 `CHANNEL_URL`에 올바른 URL 입력
2. URL 형식: `https://pf.kakao.com/_xxxxxx/chat`
3. 페이지 새로고침

### 문제: 모바일에서 카카오톡이 열리지 않음
**해결방법:**
카카오톡 앱이 설치되어 있어야 하며, 모바일 브라우저에서 자동으로 앱을 호출합니다.

## 📞 지원

설정 과정에서 문제가 발생하면:
1. 브라우저 개발자 도구에서 오류 메시지 확인
2. 카카오 비즈니스 센터 고객센터 문의
3. 설정 파일의 주석을 참고하여 재설정

---

**축하합니다! 🎉**
이제 웹사이트 방문자들이 카카오톡으로 직접 상담받을 수 있습니다.