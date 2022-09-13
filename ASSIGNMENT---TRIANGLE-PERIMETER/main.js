// Triangle Perimeter Assignment Start Code

// Determine Side lengths and perimeter of triangle Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
    // Get x and y coordinates input
    let xa = +document.getElementById('xa-number').value;
    let ya = +document.getElementById('ya-number').value;
    let xb = +document.getElementById('xb-number').value;
    let yb = +document.getElementById('yb-number').value;
    let xc = +document.getElementById('xc-number').value;
    let yc = +document.getElementById('yc-number').value;

    // Calculate & Output distance
    let abresult = dist(xa, ya, xb, yb);
    let acresult = dist(xa, ya, xc, yc);
    let bcresult = dist(xb, yb, xc, yc);

    document.getElementById('distanceAB').innerHTML = abresult;
    document.getElementById('distanceAC').innerHTML = acresult;
    document.getElementById('distanceBC').innerHTML = bcresult;

    

    function dist (x1,y1,x2,y2) {
        let x = (x1 - x2)
        let y = (y1 - y2)
        
        let dis = Math.sqrt((x ** 2) + (y ** 2));
        return dis;
        }
        
    let perimeter = abresult + acresult + bcresult;
    document.getElementById('per').innerHTML = perimeter;
}


