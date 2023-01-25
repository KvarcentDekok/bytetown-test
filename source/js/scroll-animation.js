import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ANIMATION_STEP = 100;
const TABLET_WIDTH = 960;

const homeSection = document.querySelector('.home');

gsap.registerPlugin(ScrollTrigger);

function createSubstrates() {
    const recommendedSection = document.querySelector('.recommended');
    const substrateBlock = document.createElement('div');
    const substrate = document.createElement('div');

    substrateBlock.classList.add('recommended__substrate-block');
    substrate.classList.add('recommended__substrate');

    substrateBlock.append(substrate);
    substrateBlock.append(substrate.cloneNode());
    substrateBlock.append(substrate.cloneNode());
    recommendedSection.append(substrateBlock);
}

function scrollAnimation() {
    createSubstrates();

    gsap.to('.recommended, recommended__substrate-block', {
        scrollTrigger: {
            trigger: '.recommended',
            start: `top ${homeSection.clientHeight}px`,
            end: '+=1600px',
            scrub: true,
            toggleActions: 'restart pause reverse pause'
        },
        y: -homeSection.clientWidth / 2,
        ease: 'none'
    });

    if (window.innerWidth >= TABLET_WIDTH) {
        gsap.to(document.body, {
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 2
            },
            y: -200,
            ease: "none",
        });

        gsap.to('.recommended__substrate:nth-of-type(1)', {
            scrollTrigger: {
                trigger: '.recommended',
                start: `top ${homeSection.clientHeight}px`,
                end: `center ${homeSection.clientHeight}px`,
                scrub: 2,
                toggleActions: 'restart pause reverse pause'
            },
            scaleY: 1000,
            ease: "power1.inOut"
        });

        gsap.to('.recommended__substrate:nth-of-type(2)', {
            scrollTrigger: {
                trigger: '.recommended',
                start: `top ${homeSection.clientHeight - ANIMATION_STEP}px`,
                end: `center ${homeSection.clientHeight - ANIMATION_STEP}px`,
                scrub: 2,
                toggleActions: 'restart pause reverse pause'
            },
            scaleY: 1000,
            ease: "power1.inOut"
        });

        gsap.to('.recommended__substrate:nth-of-type(3)', {
            scrollTrigger: {
                trigger: '.recommended',
                start: `top ${homeSection.clientHeight - ANIMATION_STEP * 2}px`,
                end: `center ${homeSection.clientHeight - ANIMATION_STEP * 2}px`,
                scrub: 2,
                toggleActions: 'restart pause reverse pause'
            },
            scaleY: 1000,
            ease: "power1.inOut"
        });
    }
}

export default scrollAnimation;