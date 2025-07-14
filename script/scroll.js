/* 프로필 하단 등장 + 스킬 등장 */
gsap.registerPlugin(ScrollTrigger);
const profileItems1 = document.querySelectorAll('.profile .right_btm #profile1');
const profileItems2 = document.querySelectorAll('.about .contents #profile2');
console.log(profileItems1,profileItems2);

gsap.to(profileItems1, {
    scrollTrigger: {
        trigger: ".profile .right_btm",
        start: "top 80%",
        end: "top 20%",
        scrub:true,
        toggleActions: "play reverse restart reverse",
        markers: false, // 디버깅 마커 (테스트 후 false)
        onEnter: () => {
            gsap.to(profileItems1,{
                opacity: 1,
                y:-40,
                duration: 0.2,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });

            // 스킬
            gsap.to(".btm_skills .skill_txt li .loading1 .circle ", {
                opacity:1,
                duration:0.3,
                delay:0.3,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading1 .circle").style.animation = 'photoShop 2s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading2 .circle ", {
                opacity:1,
                duration:0.4,
                delay:0.3,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading2 .circle").style.animation = 'illustratior 2s 0.2s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading3 .circle ", {
                opacity:1,
                duration:0.5,
                delay:0.4,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading3 .circle").style.animation = 'premiere 2s 0.4s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading4 .circle ", {
                opacity:1,
                duration:0.6,
                delay:0.4,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading4 .circle").style.animation = 'figma 2s 0.6s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading5 .circle ", {
                opacity:1,
                duration:0.5,
                delay:0.5,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading5 .circle").style.animation = 'html 2s 0.8s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading6 .circle ", {
                opacity:1,
                duration:0.5,
                delay:0.5,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading6 .circle").style.animation = 'css 2s 1s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading7 .circle ", {
                opacity:1,
                duration:0.6,
                delay:0.6,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading7 .circle").style.animation = 'javascript 2s 1.2s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading8 .circle ", {
                opacity:1,
                duration:0.6,
                delay:0.6,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading8 .circle").style.animation = 'github 2s 1.4s ease both';
                },
            });
        },
        onLeaveBack: () => {
            gsap.to(profileItems1, {
                opacity: 0,
                y: -40,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
            gsap.to(".btm_skills .skill_txt li .loading .circle ", {
                opacity:1,
                duration:0.4,
                delay:0.8,
            });
        },
        onEnterBack: () => {
            gsap.to(profileItems1,{
                opacity: 1,
                y: -40,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });

            // 스킬
            gsap.to(".btm_skills .skill_txt li .loading1 .circle ", {
                opacity:1,
                duration:0.3,
                delay:0.3,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading1 .circle").style.animation = 'photoShop 2s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading2 .circle ", {
                opacity:1,
                duration:0.4,
                delay:0.3,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading2 .circle").style.animation = 'illustratior 2s 0.2s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading3 .circle ", {
                opacity:1,
                duration:0.5,
                delay:0.4,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading3 .circle").style.animation = 'premiere 2s 0.4s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading4 .circle ", {
                opacity:1,
                duration:0.6,
                delay:0.4,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading4 .circle").style.animation = 'figma 2s 0.6s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading5 .circle ", {
                opacity:1,
                duration:0.5,
                delay:0.5,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading5 .circle").style.animation = 'html 2s 0.8s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading6 .circle ", {
                opacity:1,
                duration:0.5,
                delay:0.5,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading6 .circle").style.animation = 'css 2s 1s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading7 .circle ", {
                opacity:1,
                duration:0.6,
                delay:0.6,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading7 .circle").style.animation = 'javascript 2s 1.2s ease both';
                },
            });
            gsap.to(".btm_skills .skill_txt li .loading8 .circle ", {
                opacity:1,
                duration:0.6,
                delay:0.6,
                onStart: () => {
                    document.querySelector(".btm_skills .skill_txt li .loading8 .circle").style.animation = 'github 2s 1.4s ease both';
                },
            });
        },
        onLeave: () => {
            gsap.to(profileItems1, {
                opacity: 0,
                y: -40,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
            gsap.to(".btm_skills .skill_txt li .loading .circle ", {
                opacity:1,
                duration:0.4,
                delay:0.8,
            });
        },
    },
});

/* about 컨텐츠 등장 */
gsap.to(profileItems2, {
    scrollTrigger: {
        trigger: ".about .contents",
        start: "top 80%",
        end: "top 20%",
        scrub:true,
        toggleActions: "play reverse restart reverse",
        markers: false, // 디버깅 마커 (테스트 후 false)
        onEnter: () => {
            gsap.to(profileItems2,{
                opacity: 1,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to(profileItems2, {
                opacity: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
        onEnterBack: () => {
            gsap.to(profileItems2,{
                opacity: 1,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeave: () => {
            gsap.to(profileItems2, {
                opacity: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
});