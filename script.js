const countdown = document.getElementById("倒數");
const nextShow = [...document.querySelectorAll(".tour-list time")]
	.map((showDate) => ({
		date: new Date(`${showDate.dateTime}T20:00:00+08:00`),
		city: showDate.parentElement.querySelector("h3").textContent,
	}))
	.find((show) => show.date > new Date());

if (nextShow) {
	const daysUntilShow = Math.ceil((nextShow.date - new Date()) / (1000 * 60 * 60 * 24));
	countdown.textContent = daysUntilShow === 0
		? `今晚 ${nextShow.city} 見，現場見。`
		: `距離 ${nextShow.city} 場演出還有 ${daysUntilShow} 天`;
} else {
	countdown.textContent = "2026 巡演已落幕，謝謝每一場相遇。";
}