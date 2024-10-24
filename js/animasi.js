// Register plugin TextPlugin di GSAP
gsap.registerPlugin(TextPlugin);

// Animasi teks
gsap.to("#gsap-text", {
    text: "Hello, I’m Riski.           ", // kasih sepasi agar animasi tidak langsung delet
    duration: 4,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 1
});
