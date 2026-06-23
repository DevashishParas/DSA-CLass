//task1 

function downloadFile(url, callback) { console.log("Starting download...");
setTimeout(() => { console.log("Download completed");
callback();
}, 2000);
}
downloadFile("file.pdf", () => {
console.log("Opening file...");
}); 





//task2

function login(callback) {setTimeout(() => {
    console.log("Authenticating");
       callback();
   }, 1000);
}
function getProfile(callback) {setTimeout(() => {
    console.log("Accessed"); callback();
   }, 1000); }
login(() => {getProfile(() => {
    console.log("Profile");
   });
});


