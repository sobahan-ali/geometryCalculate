let count = 0;
// start triangle area-------
document.getElementById('triangle').addEventListener('click', function () {
    count++
    const triangleBase = getInputFieldValue('triangleBase');
    const triangleHeight = getInputFieldValue('triangleHeight');
    setElementValue('base', triangleBase);
    setElementValue('height', triangleHeight);
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const title = getTitle('title');
    const table_container = getContainer('table_container');
    const tr = createTr('tr');
    tr.innerHTML = `
    <th scope="row">${count}</th>
     <td>${title}</td>
     <td>${triangleArea}cm<sup>2</sup> </td>
     <small>
     <button type="button" class="btn btn-primary btn-sm">con: to m<sup>2</sup></button>
     </small>
      
    `
    table_container.appendChild(tr);
});
// ----------end triangle area-------

// ----------start rectangle area-------
document.getElementById('btn_rectangle').addEventListener('click', function () {
    count++
    const rectangleWidth = getInputFieldValue('width');
    const rectangleLength = getInputFieldValue('length');
    setElementValue('rectangleWidth', rectangleWidth);
    setElementValue('rectangleLength', rectangleLength);
    const rectangleArea = rectangleWidth * rectangleLength;
    const title = getTitle('rectangle_title');
    const table_container = getContainer('table_container');
    const tr = createTr('tr');
    tr.innerHTML = `
    <th scope="row" class="my-3">${count}</th>
     <td>${title}</td>
     <td>${rectangleArea}cm<sup>2</sup> </td>
     <small class="d-flex gap-3 justify-content-center align-items-center">
     <button type="button" class="btn btn-primary btn-sm">con: to m<sup>2</sup></button>
     </small>
      
    `
    table_container.appendChild(tr);
});
// ----------end rectangle area-------

// ----------start parallelogram area-------
document.getElementById('btn_parallelogram').addEventListener('click', function () {
    count++
    const parallelogramBase = getInputFieldValue('parallelogramBase');
    const parallelogramHeight = getInputFieldValue('parallelogramHeight');
    setElementValue('parallelogramElementB', parallelogramBase);
    setElementValue('parallelogramElementH', parallelogramHeight);
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    const title = getTitle('parallelogram_title');
    const table_container = getContainer('table_container');
    const tr = createTr('tr');
    tr.innerHTML = `
    <th scope="row" class="my-3">${count}</th>
     <td>${title}</td>
     <td>${parallelogramArea}cm<sup>2</sup> </td>
     <small class="d-flex gap-3 justify-content-center align-items-center w-100">
     <button type="button" class="btn btn-primary btn-sm">con: to m<sup>2</sup></button>
     </small>
      
    `
    table_container.appendChild(tr);
});
// ----------end parallelogram area-------

// ----------start rhombus area-------
document.getElementById('btn_rhombus').addEventListener('click', function () {
    count++
    const rhombusInputD1 = getInputFieldValue('rhombusInputD1');
    const rhombusInputD2 = getInputFieldValue('rhombusInputD2');
    setElementValue('rhombusElementD1', rhombusInputD1);
    setElementValue('rhombusElementD2', rhombusInputD2);
    const rhombusArea = 0.5 * rhombusInputD1 * rhombusInputD2;
    const title = getTitle('rhombusTitle');
    const table_container = getContainer('table_container');
    const tr = createTr('tr');
    tr.innerHTML = `
    <th scope="row" class="my-3">${count}</th>
     <td>${title}</td>
     <td>${rhombusArea}cm<sup>2</sup> </td>
     <small class="d-flex gap-3 justify-content-center align-items-center w-100">
     <button type="button" class="btn btn-primary btn-sm">con: to m<sup>2</sup></button>
     </small>
      
    `
    table_container.appendChild(tr);
});
// ----------end rhombus area-------

// ----------start pentagon area-------
document.getElementById('btn_pentagon').addEventListener('click', function () {
    count++
    const pentagonInputP = getInputFieldValue('pentagonInputP');
    const pentagonInputB = getInputFieldValue('pentagonInputB');
    setElementValue('pentagonElementP', pentagonInputP);
    setElementValue('pentagonElementB', pentagonInputB);
    const pentagonArea = 0.5 * pentagonInputB * pentagonInputP;
    const title = getTitle('pentagonTitle');
    const table_container = getContainer('table_container');
    const tr = createTr('tr');
    tr.innerHTML = `
    <th scope="row" class="my-3">${count}</th>
     <td>${title}</td>
     <td>${pentagonArea}cm<sup>2</sup> </td>
     <small class="d-flex gap-3 justify-content-center align-items-center w-100">
     <button type="button" class="btn btn-primary btn-sm">con: to m<sup>2</sup></button>
     </small>
      
    `
    table_container.appendChild(tr);
});
// ----------end pentagon area---------


// ----------start circle area---------
document.getElementById('btn_circle').addEventListener('click', function () {
    count++
    const circleInputA = getInputFieldValue('circleInputA');
    const circleInputB = getInputFieldValue('circleInputB');
    setElementValue('circleElementA', circleInputA);
    setElementValue('circleElementB', circleInputB);
    const circleArea = 3.14 * circleInputA * circleInputB;
    const title = getTitle('circleTitle');
    const table_container = getContainer('table_container');
    const tr = createTr('tr');
    tr.innerHTML = `
    <th scope="row" class="my-3">${count}</th>
     <td>${title}</td>
     <td>${circleArea}cm<sup>2</sup> </td>
     <small class="d-flex gap-3 justify-content-center align-items-center w-100">
     <button type="button" class="btn btn-primary btn-sm">con: to m<sup>2</sup></button>
     </small>
      
    `
    table_container.appendChild(tr);
});
// ----------end circle area---------

// start random color

document.getElementById('color1').addEventListener('mouseenter', function () {
    setColor('color1');
})
document.getElementById('item2').addEventListener('mouseenter', function () {
    setColor('item2');
});
document.getElementById('item3').addEventListener('mouseenter', function () {
    setColor('item3');
});
document.getElementById('item4').addEventListener('mouseenter', function () {
    setColor('item4');
});
document.getElementById('item5').addEventListener('mouseenter', function () {
    setColor('item5');
});
document.getElementById('item6').addEventListener('mouseenter', function () {
    setColor('item6');
});


