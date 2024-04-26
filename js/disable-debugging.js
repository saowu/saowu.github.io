document.addEventListener('keydown', function (event) {
    if (event.key === "F12") {
        // 阻止F12
        event.preventDefault();
        return false;
    }
});

document.addEventListener('contextmenu', function (event) {
    // 阻止右键
    event.preventDefault();
})

document.addEventListener('copy', function (event) {
    // 阻止复制操作
    event.preventDefault();
});

document.addEventListener('cut', function (event) {
    // 阻止剪切操作
    event.preventDefault();
});