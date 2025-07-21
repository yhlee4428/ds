# 아임웹 스크롤 따라다니는 고정 버튼 가이드

## 📋 개요
아임웹에서 스크롤에 관계없이 화면에 고정되는 버튼을 만들 수 있는 완전한 솔루션입니다.

## 🚀 빠른 시작

### 1. 기본 사용법 (아임웹에서)

1. **아임웹 관리자** → **디자인** → **페이지 편집**으로 이동
2. **위젯** → **HTML** 위젯을 페이지에 추가
3. **HTML 코드 편집** 클릭
4. `imweb-floating-button.html` 파일의 내용을 복사해서 붙여넣기
5. **저장** 후 **미리보기**로 확인

### 2. 제공되는 파일들

- `floating-button.html` - 완전한 데모 페이지
- `imweb-floating-button.html` - 아임웹용 간단 버전 
- `floating-button-styles.html` - 5가지 다양한 스타일
- `README.md` - 이 가이드

## 🎨 스타일 옵션

### 기본 스타일 (BitPass 스타일)
- 파란색 그라데이션
- 둥근 모서리
- 호버 효과
- 모바일 반응형

### 추가 스타일들
1. **원형 버튼** - 간단한 원형 디자인
2. **사각형 버튼** - 텍스트 포함 사각형
3. **확장형 버튼** - 호버 시 확장
4. **펄스 효과** - 지속적인 애니메이션
5. **네온 효과** - 미래적인 네온 스타일

## ⚙️ 커스터마이징

### 색상 변경
```css
.imweb-floating-btn {
    background: linear-gradient(135deg, #YOUR_COLOR1, #YOUR_COLOR2);
}
```

### 위치 변경
```css
.imweb-floating-btn {
    bottom: 20px;  /* 하단에서의 거리 */
    right: 20px;   /* 오른쪽에서의 거리 */
    /* left: 20px; 왼쪽에 배치하려면 right 대신 left 사용 */
}
```

### 크기 변경
```css
.imweb-floating-btn {
    width: 80px;   /* 버튼 너비 */
    height: 80px;  /* 버튼 높이 */
}
```

### 텍스트 변경
```html
<div class="imweb-floating-btn-text">원하는 텍스트<br>두 번째 줄</div>
```

## 🔧 기능 추가

### 1. 특정 페이지로 이동
```javascript
function handleFloatingButtonClick() {
    window.location.href = '/신청페이지';
}
```

### 2. 새 창에서 페이지 열기
```javascript
function handleFloatingButtonClick() {
    window.open('/신청페이지', '_blank');
}
```

### 3. 전화 걸기
```javascript
function handleFloatingButtonClick() {
    window.location.href = 'tel:010-1234-5678';
}
```

### 4. 특정 섹션으로 스크롤
```javascript
function handleFloatingButtonClick() {
    document.querySelector('#신청섹션').scrollIntoView({
        behavior: 'smooth'
    });
}
```

### 5. 아임웹 팝업 열기
```javascript
function handleFloatingButtonClick() {
    // 아임웹 팝업 ID를 확인하고 사용
    $('#팝업ID').modal('show');
}
```

## 📱 모바일 최적화

모든 버튼은 자동으로 모바일에 최적화됩니다:
- 화면 크기에 따른 자동 크기 조정
- 터치 친화적인 크기
- 반응형 위치 조정

## 🎯 고급 기능

### 스크롤 위치에 따른 버튼 표시/숨김
```javascript
window.addEventListener('scroll', function() {
    const button = document.querySelector('.imweb-floating-btn');
    if (window.scrollY > 300) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }
});
```

### 시간에 따른 자동 애니메이션
```javascript
setInterval(function() {
    const button = document.querySelector('.imweb-floating-btn');
    button.classList.add('pulse');
    setTimeout(function() {
        button.classList.remove('pulse');
    }, 2000);
}, 10000); // 10초마다 펄스 효과
```

## 🛠️ 문제 해결

### Q: 버튼이 보이지 않아요
A: CSS의 `z-index` 값을 더 높게 설정해보세요 (`z-index: 999999 !important;`)

### Q: 다른 요소와 겹쳐요
A: `position: fixed !important;`와 높은 `z-index` 값을 사용하세요

### Q: 모바일에서 버튼이 잘려요
A: `bottom`과 `right` 값을 더 크게 설정하세요

### Q: 아임웹 테마와 충돌해요
A: 모든 CSS 속성에 `!important`를 추가하세요

## 📞 지원

버튼 관련 문의나 커스터마이징이 필요하시면 언제든 연락주세요!

## 📄 라이선스

이 코드는 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**팁**: 실제 운영 전에 반드시 다양한 기기와 브라우저에서 테스트해보세요!