import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ANIMATION_STEP = 100;

const homeSectionHeight = document.querySelector('.home').clientHeight;

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

    gsap.to('.recommended, recommended__substrate-block', {
        scrollTrigger: {
            trigger: '.recommended',
            start: `top ${homeSectionHeight}px`,
            end: '+=1600px',
            scrub: true,
            toggleActions: 'restart pause reverse pause'
        },
        y: -homeSectionHeight,
        ease: 'none'
    });

    gsap.to('.recommended__substrate:nth-of-type(1)', {
        scrollTrigger: {
            trigger: '.recommended',
            start: `top ${homeSectionHeight}px`,
            end: `center ${homeSectionHeight}px`,
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        y: -homeSectionHeight,
        ease: "power1.inOut"
    });

    gsap.to('.recommended__substrate:nth-of-type(2)', {
        scrollTrigger: {
            trigger: '.recommended',
            start: `top ${homeSectionHeight - ANIMATION_STEP}px`,
            end: `center ${homeSectionHeight - ANIMATION_STEP}px`,
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        y: -homeSectionHeight,
        ease: "power1.inOut"
    });

    gsap.to('.recommended__substrate:nth-of-type(3)', {
        scrollTrigger: {
            trigger: '.recommended',
            start: `top ${homeSectionHeight - ANIMATION_STEP * 2}px`,
            end: `center ${homeSectionHeight - ANIMATION_STEP * 2}px`,
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        y: -homeSectionHeight,
        ease: "power1.inOut"
    });
}

export default scrollAnimation;