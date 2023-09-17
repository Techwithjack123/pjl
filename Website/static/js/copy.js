function copy() {
        navigator.clipboard.writeText('loadstring(game:HttpGet("https://raw.githubusercontent.com/ProjectLightningDev/Project-Lightning-Loader/main/Loader.Lua"))()');
    alert("Copied!");
}

document.getElementById("copy-btn").addEventListener("click", copy);