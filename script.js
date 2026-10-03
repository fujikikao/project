let 今天 = new Date();
let 演唱會日期 = new Date("2026-10-20");
let 倒數天數 = Math.ceil((演唱會日期 - 今天) / (1000 * 60 * 60 * 24));
document.getElementById("倒數").innerText = "距離閃電樂團演唱會還有 " + 倒數天數 + " 天！";