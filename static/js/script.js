const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");


canvas.width =  1100;
canvas.height = 600;

let regions = [
    {x: 100, y: 100, width: 100, height: 100, color: 'yellow'},
    {x: 300, y: 100, width: 100, height: 100, color: 'red'},
    {x: 500, y: 100, width: 100, height: 100, color: 'blue'},
    {x: 700, y: 100, width: 100, height: 100, color: 'green'},
    {x: 900, y: 100, width: 100, height: 100, color: 'gray'}
];

function drawRegions() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    regions.forEach(region => {
        context.fillStyle = region.color;
        context.fillRect(region.x, region.y, region.width, region.height);
    });
}
canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    regions.forEach(region => {
        if (x > region.x && x < region.x + region.width && y > region.y && y < region.y + region.height) {
            region.color = region.color === "red" ? "green" : "red";
        }
    });

    drawRegions();
});

drawRegions();


