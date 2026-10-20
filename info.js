const personalInfo = {
    name: "Kahlil Jay T. Cambangay",
    id: "24-1475",
    course: "Bachelor of Science in Information Technology",
    college: "College of Computer Science",
    email: "cambangay.kahliljay.tenedero@gmail.com",
    contact: "09605740781",
    address: "Quezon City, Philippines",
    bio: "I am a more practical and serious person when it comes in developing a system.",
    education: [
        { level: "Primary", school: "Gulod Christian Academy" },
        { level: "High School", school: "Mount Charmel School for Achievers" },
        { level: "Senior High", school: "San Bartolome High School" },
        { level: "Tertiary", school: "Quezon City University San Main Branch" },
    ],

    skills: [
        { name: "Cisco Packet Tracer", level: "Advanced" },
        { name: "SQL Queries", level: "Intermediate" },
        { name: "Virtual Machine", level: "Intermediate" },
        { name: "Java Programming", level: "Intermediate" },
        { name: "HTML & CSS", level: "Intermediate" },
        { name: "Hardware Troubleshooting", level: "Advanced" },
    ],
    hobbies: [
        "Repairing Technologies",
        "Watching Anime",
        "Listening to Music",
    ],
    certifications: [
        {
            name: "Prompt Like an Engineer",
            provider: "Certification",
            image: "Img/Prompt Like an Engineer.png",
            description: "Certificate in prompt engineering fundamentals.",
        },
        {
            name: "Introduction to Modern AI",
            provider: "Certification",
            image: "Img/Introduction to Modern Ai.png",
            description: "Certificate covering modern artificial intelligence concepts.",
        },
        {
            name: "Introduction to Data Science",
            provider: "Certification",
            image: "Img/Introduction to Data Science.png",
            description: "Certificate covering introductory data science concepts.",
        },
        {
            name: "AI Fundamentals with IBM SkillsBuild",
            provider: "IBM SkillsBuild",
            image: "Img/AI Fundamentals with IBM SkillsBuild.png",
            description: "Certificate in artificial intelligence fundamentals.",
        },
        {
            name: "TESDA Certificate",
            provider: "Technical Education and Skills Development Authority (TESDA)",
            image: "Img/Tesda Certificate.png",
            description: "Technical-vocational certification from TESDA.",
        },
    ],
    goalProject: {
        title: "Triangular Converged Network Using Raspberry Pi 5 Routers with Integrated Data, Voice, and Video Traffic",
        description: "Design and deploy a converged network using three Raspberry Pi 5 routers interconnected in a triangular topology, providing data, voice, and video services through wired and wireless LANs, with VoIP via Asterisk, and dynamic routing via FRR/OSPF."
    }
};

function fillPersonalInfo() {
    document.getElementById("infoName").textContent = personalInfo.name;
    document.getElementById("infoId").textContent = personalInfo.id;
    document.getElementById("infoCourse").textContent = personalInfo.course;
    document.getElementById("infoCollege").textContent = personalInfo.college;
    document.getElementById("infoEmail").textContent = personalInfo.email;
    document.getElementById("infoContact").textContent = personalInfo.contact;
    document.getElementById("infoAddress").textContent = personalInfo.address;
    document.getElementById("infoBio").textContent = personalInfo.bio;
}

function renderSkills() {
    const container = document.getElementById("skillsGrid");
    if (!container) return;

    container.innerHTML = "";
    (personalInfo.skills || []).slice(0, 6).forEach((skill) => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h4");
        title.textContent = typeof skill === "object" ? skill.name : skill;

        const level = document.createElement("p");
        level.className = "skill-level";
        level.textContent = typeof skill === "object" ? skill.level : "";

        card.appendChild(title);
        card.appendChild(level);
        container.appendChild(card);
    });
}

function renderHobbies() {
    const container = document.getElementById("hobbiesList");
    if (!container) return;

    container.innerHTML = "";
    (personalInfo.hobbies || []).forEach((hobby) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = hobby;
        container.appendChild(chip);
    });
}

function renderEducation() {
    const container = document.getElementById("educationGrid");
    if (!container) return;

    container.innerHTML = "";
    (personalInfo.education || []).forEach((education) => {
        const card = document.createElement("div");
        card.className = "education-card";

        const level = document.createElement("span");
        level.className = "education-level";
        level.textContent = education.level;

        const school = document.createElement("p");
        school.className = "education-school";
        school.textContent = education.school;

        card.appendChild(level);
        card.appendChild(school);
        container.appendChild(card);
    });
}

function renderGoalProject() {
    const titleEl = document.getElementById("goalProjectTitle");
    const descEl = document.getElementById("goalProjectDesc");
    if (!titleEl || !descEl) return;

    titleEl.textContent = personalInfo.goalProject?.title || "";
    descEl.textContent = personalInfo.goalProject?.description || "";
}

function renderCertifications() {
    const container = document.getElementById("certificationsGrid");
    if (!container) return;

    const certifications = personalInfo.certifications || [];
    if (certifications.length === 0) return;

    let activeIndex = 0;
    let rotationTimer;

    const renderActiveCertificate = () => {
        const certification = certifications[activeIndex];
        container.innerHTML = "";

        const featured = document.createElement("article");
        featured.className = "featured-certificate";

        const details = document.createElement("div");
        details.className = "featured-certificate-details";

        const number = document.createElement("span");
        number.className = "certificate-number";
        number.textContent = String(activeIndex + 1).padStart(2, "0");

        const label = document.createElement("span");
        label.className = "certificate-label";
        label.textContent = "Certificate";

        const title = document.createElement("h3");
        title.textContent = certification.name;

        const provider = document.createElement("p");
        provider.className = "certification-provider";
        provider.textContent = certification.provider;

        const description = document.createElement("p");
        description.className = "certification-description";
        description.textContent = certification.description;

        details.appendChild(number);
        details.appendChild(label);
        details.appendChild(title);
        details.appendChild(provider);
        details.appendChild(description);

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "featured-certificate-image";

        const image = document.createElement("img");
        image.src = certification.image;
        image.alt = `${certification.name} certificate`;
        imageWrapper.appendChild(image);

        featured.appendChild(imageWrapper);
        featured.appendChild(details);
        container.appendChild(featured);

        const indicators = document.createElement("div");
        indicators.className = "certificate-indicators";
        indicators.setAttribute("aria-label", "Certificate slides");

        certifications.forEach((item, index) => {
            const indicator = document.createElement("button");
            indicator.className = "certificate-indicator";
            indicator.type = "button";
            indicator.classList.toggle("active", index === activeIndex);
            indicator.setAttribute("aria-label", `Show ${item.name}`);
            indicator.setAttribute("aria-pressed", String(index === activeIndex));
            indicator.addEventListener("click", () => {
                activeIndex = index;
                renderActiveCertificate();
                restartRotation();
            });
            indicators.appendChild(indicator);
        });

        container.appendChild(indicators);
    };

    const showNextCertificate = () => {
        activeIndex = (activeIndex + 1) % certifications.length;
        renderActiveCertificate();
    };

    const restartRotation = () => {
        window.clearInterval(rotationTimer);
        rotationTimer = window.setInterval(showNextCertificate, 5000);
    };

    document.getElementById("previousCertificate")?.addEventListener("click", () => {
        activeIndex = (activeIndex - 1 + certifications.length) % certifications.length;
        renderActiveCertificate();
        restartRotation();
    });

    document.getElementById("nextCertificate")?.addEventListener("click", () => {
        showNextCertificate();
        restartRotation();
    });

    renderActiveCertificate();
    restartRotation();
}

window.addEventListener("DOMContentLoaded", () => {
    fillPersonalInfo();
    renderSkills();
    renderHobbies();
    renderEducation();
    renderGoalProject();
    renderCertifications();
});
