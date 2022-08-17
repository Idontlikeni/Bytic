var mydata = JSON.parse(data);
  //if(mydata)
let length_of_json = Object.keys(mydata).length;
console.log(mydata);
let answers = []
let json;

variant_submit.onclick = function(){
answers.push(document.getElementById("answ").value);
console.log(answers, length_of_json);
};

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

question_submit.onclick = function(){
console.log(mydata);
length_of_json = Object.keys(mydata).length;
question = document.getElementById("quest").value;
mydata[length_of_json + 1] = {
    'question': question,
        'answer':{}};
for (let i = 0; i < answers.length; i++) {
    mydata[length_of_json + 1]['answer'][i + 1] = {
                'type': 'radio',
                'dynamic': true,
                'route': length_of_json + 2,
                'item': answers[i]
            };
    
}
console.log(mydata);
json = JSON.stringify(mydata);
console.log("json: ", json);

answers = [];
};

download_btn.onclick = function(){
download("data = '" + json + "';", 'data.json', 'text/plain');
}

function handleSubmit(event) {
// event.preventDefault();
// console.log(mydata);
// length_of_json = Object.keys(mydata).length;
// question = document.getElementById("quest").value;
// mydata[length_of_json + 1] = {
//   'question': question,
    // 	'answer':{}};
// for (let i = 0; i < answers.length; i++) {
//   mydata[length_of_json + 1]['answer'][i + 1] = {
    // 			'type': 'radio',
    // 			'dynamic': true,
    // 			'route': length_of_json + 2,
    // 			'item': answers[i]
    // 		};
    
// }
// console.log(mydata);
// var json = JSON.stringify(mydata);
// console.log("json: ", json);
// download("data = '" + json + "';", 'data.json', 'text/plain');
// answers = [];

}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
