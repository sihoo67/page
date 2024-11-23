document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    // 프로젝트 데이터
    const projects = [
        { name: "핑구OS", description: "사용자 중심의 맞춤형 운영체제 프로젝트." },
        { name: "개발자를 빡치게 하는 방법", description: "개발자들을 유쾌하게 화나게 하는 노하우를 공유하는 프로젝트." },
        { name: "오늘 뭐 먹지?", description: "점심 메뉴를 추천해주는 디스코드 봇 프로젝트." }
    ];

    // 소개 렌더링
    function showAbout() {
        content.innerHTML = `
            <h2>소개</h2>
            <p>안녕하세요! 저는 <strong>핑구</strong>입니다. 깃허브에서 <a href="https://github.com/sihoo67" target="_blank">sihoo67</a>으로 활동하고 있으며, 개발자 커뮤니티에 기여하는 것을 좋아합니다.</p>
            <p>대표적인 프로젝트는 핑구OS, 개발자를 빡치게 하는 방법, 오늘 뭐 먹지? 등이 있습니다. 😊</p>
        `;
    }

    // 프로젝트 렌더링
    function showProjects() {
        content.innerHTML = `
            <h2>프로젝트</h2>
            <ul>
                ${projects
                  .map(
                    (project) =>
                      `<li><strong>${project.name}</strong>: ${project.description}</li>`
                  )
                  .join("")}
            </ul>
        `;
    }

    // 연락처 렌더링
    function showContact() {
        content.innerHTML = `
            <h2>연락처</h2>
            <p>GitHub: <a href="https://github.com/sihoo67" target="_blank">sihoo67</a></p>
            <p>Discord: ping.__.9</p>
            <p>Thread: wsid_hyun</p>
            <p>Email: ping9@ping9.shop</p>
        `;
    }

    // 초기 화면
    showAbout();

    // 글로벌 함수 등록
    window.showAbout = showAbout;
    window.showProjects = showProjects;
    window.showContact = showContact;
});
