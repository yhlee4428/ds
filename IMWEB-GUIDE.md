# 아임웹 최적화 고정 버튼 가이드

## 🎯 아임웹 제약사항 대응

### ✅ 적용된 최적화
- **jQuery 중복 제거**: 아임웹에서 이미 로드하므로 별도 로드 불필요
- **Bootstrap 충돌 방지**: 고유한 클래스명과 `!important` 사용
- **주석 최소화**: 실제 운영에서 주석이 제거되므로 핵심 주석만 유지
- **기본 위젯 충돌 방지**: 높은 z-index와 구체적인 CSS 선택자 사용
- **서버사이드 언어 제거**: 순수 HTML/CSS/JavaScript만 사용

## 📁 아임웹 최적화 파일들

1. **`imweb-optimized-floating-button.html`** - 기본 최적화 버전
2. **`imweb-floating-button-actions.html`** - 고급 기능 포함 버전
3. **`IMWEB-GUIDE.md`** - 이 가이드

## 🚀 아임웹 적용 방법

### 1. 기본 설치
```
아임웹 관리자 → 디자인 → 페이지 편집 → 위젯 → HTML 위젯 추가
```

### 2. 코드 삽입
- HTML 위젯의 "HTML 코드 편집" 클릭
- 파일 내용을 복사하여 붙여넣기
- 저장 후 미리보기로 확인

## ⚙️ 설정 옵션 (고급 버전)

### 기본 설정값 변경
```javascript
var IMWEB_FLOAT_CONFIG = {
    action: 'page',              // 동작 유형
    url: '/contact',             // 이동할 페이지
    phone: '010-1234-5678',      // 전화번호
    email: 'info@company.com',   // 이메일
    scrollTarget: '#contact-section', // 스크롤 대상
    popupId: '#popup-contact',   // 팝업 ID
    newWindow: false,            // 새 창 여부
    showAfterScroll: 0,          // 스크롤 후 표시 (px)
    pulseOnScroll: true,         // 스크롤시 펄스 효과
    hideOnMobile: false          // 모바일에서 숨김
};
```

### 동작 유형별 설정

#### 1. 페이지 이동
```javascript
IMWEB_FLOAT_CONFIG.action = 'page';
IMWEB_FLOAT_CONFIG.url = '/신청페이지';
IMWEB_FLOAT_CONFIG.newWindow = false; // true시 새창
```

#### 2. 전화 걸기
```javascript
IMWEB_FLOAT_CONFIG.action = 'phone';
IMWEB_FLOAT_CONFIG.phone = '010-1234-5678';
```

#### 3. 이메일 보내기
```javascript
IMWEB_FLOAT_CONFIG.action = 'email';
IMWEB_FLOAT_CONFIG.email = 'contact@company.com';
```

#### 4. 섹션 스크롤
```javascript
IMWEB_FLOAT_CONFIG.action = 'scroll';
IMWEB_FLOAT_CONFIG.scrollTarget = '#문의섹션';
```

#### 5. 아임웹 팝업 열기
```javascript
IMWEB_FLOAT_CONFIG.action = 'popup';
IMWEB_FLOAT_CONFIG.popupId = '#popup-contact';
```

#### 6. 커스텀 함수 실행
```javascript
IMWEB_FLOAT_CONFIG.action = 'custom';

// 별도로 정의 필요
window.customFloatingAction = function() {
    // 원하는 동작 구현
    alert('커스텀 동작!');
};
```

## 🎨 디자인 커스터마이징

### 색상 변경
```css
.imweb-float-button {
    background: linear-gradient(135deg, #FF6B6B, #FF8E8E) !important;
}

.imweb-float-button:hover {
    background: linear-gradient(135deg, #FF5252, #FF7575) !important;
}
```

### 위치 변경
```css
.imweb-float-container {
    bottom: 30px !important;     /* 하단 거리 */
    right: 30px !important;      /* 우측 거리 */
    /* left: 30px !important;   왼쪽 배치시 */
}
```

### 크기 변경
```css
.imweb-float-button {
    width: 90px !important;      /* 너비 */
    height: 90px !important;     /* 높이 */
}
```

### 아이콘/텍스트 변경
```html
<span class="imweb-float-icon">📞</span>
<span class="imweb-float-text">상담신청<br>바로가기</span>
```

## 📱 반응형 설정

### 모바일에서 숨기기
```javascript
IMWEB_FLOAT_CONFIG.hideOnMobile = true;
```

### 스크롤 후 표시
```javascript
IMWEB_FLOAT_CONFIG.showAfterScroll = 300; // 300px 스크롤 후 표시
```

## 🔧 고급 기능

### Google Analytics 연동
```javascript
// 버튼 클릭시 자동으로 GA 이벤트 전송
// gtag가 로드되어 있으면 자동 작동
```

### 아임웹 특화 기능

#### 아임웹 팝업과 연동
```javascript
// 아임웹의 jQuery가 로드되어 있으면 자동으로 팝업 지원
IMWEB_FLOAT_CONFIG.action = 'popup';
IMWEB_FLOAT_CONFIG.popupId = '#아임웹팝업ID';
```

#### 아임웹 섹션 연결
```javascript
// 아임웹 섹션 ID로 부드러운 스크롤
IMWEB_FLOAT_CONFIG.action = 'scroll';
IMWEB_FLOAT_CONFIG.scrollTarget = '#section_123456789';
```

## ⚠️ 주의사항

### 아임웹 업데이트 대응
- 모든 CSS에 `!important` 사용으로 우선순위 보장
- 고유한 클래스명으로 충돌 방지
- 아임웹 기본 위젯과 독립적인 구조

### 성능 최적화
- 이벤트 리스너에 `passive: true` 옵션 사용
- 스크롤 이벤트 디바운싱 적용
- 메모리 누수 방지를 위한 타이머 정리

### 브라우저 호환성
- IE11+ 지원
- 모든 모바일 브라우저 지원
- 웹킷 기반 브라우저 최적화

## 🛠️ 문제 해결

### Q: 버튼이 보이지 않음
```css
/* z-index 더 높게 설정 */
.imweb-float-container {
    z-index: 9999999 !important;
}
```

### Q: 아임웹 테마와 스타일 충돌
```css
/* 모든 속성에 !important 추가 */
.imweb-float-button {
    /* 모든 스타일 */ !important;
}
```

### Q: 모바일에서 터치 문제
```css
.imweb-float-button {
    -webkit-tap-highlight-color: transparent !important;
    touch-action: manipulation !important;
}
```

### Q: 팝업이 작동하지 않음
- 아임웹 팝업 ID 확인 (개발자 도구 사용)
- jQuery 로드 확인
- 팝업 위젯이 페이지에 있는지 확인

## 📊 성능 모니터링

### 로드 시간 체크
```javascript
// 버튼 로드 완료 시간 측정
console.time('FloatingButton');
// 초기화 완료 후
console.timeEnd('FloatingButton');
```

### 클릭 추적
```javascript
// Google Analytics 자동 연동
// 별도 설정 없이 클릭 이벤트 자동 전송
```

## 📞 기술 지원

아임웹의 공식 정책에 따라 커스텀 코드에 대한 기술지원은 제공되지 않으므로, 이 가이드와 코드를 참고하여 직접 수정하시기 바랍니다.

---

**중요**: 실제 운영 환경에 적용하기 전에 반드시 테스트 환경에서 충분히 검증해주세요!