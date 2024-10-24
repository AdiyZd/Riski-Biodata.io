// Register plugin TextPlugin di GSAP
gsap.registerPlugin(TextPlugin);

// Animasi teks
gsap.to("#gsap-text", {
    text: "Hello, I’m Riski.",
    duration: 3,
    ease: "none",
    repeat: -1,
    yoyo: true
});
