document.addEventListener("DOMContentLoaded", () => {
    // Selectors
    const content = document.getElementById("content");

    // 3D Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("webgl-container").appendChild(renderer.domElement);

    // Add rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Page content
    const projects = [
        { name: "핑구OS", description: "사용자 중심의 맞춤형 운영체제 프로젝트." },
        { name: "개발자를 빡치게 하는 방법", description: "개발자들을 유쾌하게 화나게 하는 노하우를 공유하는 프로젝트." },
        { name: "오늘 뭐 먹지?", description: "점심 메뉴를 추천해주는 프로젝트." },
    ];

    function showAbout() {
        content.innerHTML = `
            === About ===
            Welcome to the universe of 핑구!
            GitHub: sihoo67
            Explore projects like 핑구OS, 개발자를 빡치게 하는 방법, and 오늘 뭐 먹지!
        `;
    }

    function showProjects() {
        const projectList = projects
            .map((project) => `- ${project.name}: ${project.description}`)
            .join("\n");
        content.innerHTML = `
            === Projects ===
            ${projectList}
        `;
    }

    function showContact() {
        content.innerHTML = `
            === Contact ===
            GitHub: https://github.com/sihoo67
            Discord: ping.__.9
            Email: ping9@ping9.shop
        `;
    }

    // Key navigation
    showAbout();
    document.addEventListener("keydown", (e) => {
        if (e.key === "a") showAbout();
        if (e.key === "p") showProjects();
        if (e.key === "c") showContact();
    });
});
