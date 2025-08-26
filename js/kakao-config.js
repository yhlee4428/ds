// 카카오 비즈니스 채널 설정
const KAKAO_CONFIG = {
    // 실제 카카오 비즈니스 채널 URL을 여기에 입력하세요
    // 카카오 비즈니스 센터에서 확인할 수 있습니다: https://center-pf.kakao.com/
    CHANNEL_URL: '', // 예: 'https://pf.kakao.com/_xlexxx/chat'
    
    // 채널 추가 URL (선택사항)
    ADD_CHANNEL_URL: '', // 예: 'https://pf.kakao.com/_xlexxx'
    
    // 채널명 (표시용)
    CHANNEL_NAME: 'ESBookMall 고객센터',
    
    // 운영시간 안내
    OPERATING_HOURS: '평일 09:00 ~ 18:00 (주말 및 공휴일 휴무)',
    
    // 카카오톡 플러스친구 설정
    PLUS_FRIEND_ID: '', // 예: '_xlexxx'
};

// 카카오 비즈니스 채널 연결 함수
function openKakaoChannel() {
    if (!KAKAO_CONFIG.CHANNEL_URL) {
        // URL이 설정되지 않은 경우 설정 안내
        showKakaoSetupGuide();
        return;
    }
    
    // 새 창에서 카카오톡 채널 열기
    const width = 400;
    const height = 600;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    
    window.open(
        KAKAO_CONFIG.CHANNEL_URL,
        'kakaoChannel',
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
}

// 카카오 비즈니스 채널 추가 함수
function addKakaoChannel() {
    if (!KAKAO_CONFIG.ADD_CHANNEL_URL) {
        openKakaoChannel();
        return;
    }
    
    window.open(KAKAO_CONFIG.ADD_CHANNEL_URL, '_blank');
}

// 카카오 설정 안내 함수
function showKakaoSetupGuide() {
    const setupMessage = `
카카오 비즈니스 채널 설정이 필요합니다.

1. 카카오 비즈니스 센터(https://center-pf.kakao.com/)에 로그인
2. 채널 관리 > 채널 정보에서 채널 URL 확인
3. js/kakao-config.js 파일의 CHANNEL_URL에 URL 입력

예시: https://pf.kakao.com/_xlexxx/chat

설정 후 페이지를 새로고침해주세요.
    `;
    
    alert(setupMessage);
    
    // 개발자를 위한 콘솔 로그
    console.log('카카오 비즈니스 채널 설정 안내:');
    console.log('1. js/kakao-config.js 파일에서 CHANNEL_URL을 설정하세요.');
    console.log('2. 카카오 비즈니스 센터: https://center-pf.kakao.com/');
}

// 카카오톡 상담 가능 시간 체크
function isOperatingHours() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0: 일요일, 6: 토요일
    
    // 주말 체크
    if (day === 0 || day === 6) {
        return false;
    }
    
    // 운영시간 체크 (09:00 ~ 18:00)
    return hour >= 9 && hour < 18;
}

// 상담 가능 여부에 따른 메시지 표시
function showOperatingStatus() {
    const statusElement = document.querySelector('.operating-status');
    if (!statusElement) return;
    
    if (isOperatingHours()) {
        statusElement.innerHTML = '<span class="text-success">● 상담 가능</span>';
        statusElement.classList.add('text-success');
    } else {
        statusElement.innerHTML = '<span class="text-warning">● 운영시간 외</span>';
        statusElement.classList.add('text-warning');
    }
}

// Kakao SDK를 사용한 고급 기능 (선택사항)
function initKakaoSDK() {
    // Kakao JavaScript SDK가 로드된 경우에만 실행
    if (typeof Kakao !== 'undefined' && KAKAO_CONFIG.PLUS_FRIEND_ID) {
        try {
            // 채널 추가하기 버튼 (카카오 SDK 사용)
            Kakao.Channel.createAddChannelButton({
                container: '#kakao-add-channel-btn',
                channelPublicId: KAKAO_CONFIG.PLUS_FRIEND_ID
            });
            
            // 채널 채팅하기 버튼 (카카오 SDK 사용)
            Kakao.Channel.createChatButton({
                container: '#kakao-chat-btn',
                channelPublicId: KAKAO_CONFIG.PLUS_FRIEND_ID
            });
        } catch (error) {
            console.log('Kakao SDK 초기화 중 오류:', error);
        }
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 운영상태 표시
    showOperatingStatus();
    
    // 30초마다 운영상태 업데이트
    setInterval(showOperatingStatus, 30000);
    
    // Kakao SDK 초기화 (선택사항)
    setTimeout(initKakaoSDK, 1000);
});

// 설정 내보내기
window.KAKAO_CONFIG = KAKAO_CONFIG;
window.openKakaoChannel = openKakaoChannel;
window.addKakaoChannel = addKakaoChannel;