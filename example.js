let add = document.getElementById('add');
let table = document.getElementById('table');
let tp = document.getElementById('tp');
let url = location.search;

let Request = new Object();
if (url.indexOf("?") != -1) {
    let str = url.substr(1)
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
}

tp.addEventListener('click', tpHandler, false);

function tpHandler(e) {
    window.location.href = "file:///C:/Users/LayLi/Desktop/example/xiangqing.html"
}

if (Request["name"] != "" && Request["progress"] != "" && typeof(Request["name"]) != "undefined" && typeof(Request["progress"]) != "undefined") {
    addHandler();
}

function addHandler(e) {

    let row = table.insertRow(-1);
    let rowHeaderNum = row.insertCell(0);
    let rowHeaderName = row.insertCell(1);
    let rowHeaderProgress = row.insertCell(2);
    let rowHeaderState = row.insertCell(3);
    let rowHeaderhandle = row.insertCell(4);
    rowHeaderNum.innerText = table.rows.length - 1;
    rowHeaderName.innerText = "南水北调";
    rowHeaderProgress.innerText = "0.2";
    rowHeaderState.innerText = "暂停中";

    let buttonContainer = document.createElement('div');
    let updateButton = document.createElement('button');
    let selectButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    let stopButton = document.createElement('button');
    updateButton.innerText = '修改';
    selectButton.innerText = '详情';
    deleteButton.innerText = '删除';
    stopButton.innerText = '暂停';
    updateButton.classList.add('button-primary');
    selectButton.classList.add('button-primary');
    deleteButton.classList.add('button-delete');
    stopButton.classList.add('button-primary');
    buttonContainer.classList.add('button-container')
    buttonContainer.appendChild(updateButton);
    buttonContainer.appendChild(selectButton);
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(stopButton);
    rowHeaderhandle.appendChild(buttonContainer);
    rowHeaderName.innerText = Request["name"];
    rowHeaderProgress.innerText = Request["progress"];
}