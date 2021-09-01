var arr = [
	{
		quote : "If you can\'t avoid, you have to enjoy with it.",
		author : "Rober S. Eliet",
	},
	{
		quote : "걱정없는 인생을 바라지 말고 걱정에 물들지 않는 연습을 하라",
		author : "알랭",
	},
	{
		quote : "과거에서 교훈을 얻을 수는 있어도 과거 속에 살 수는 없다.",
		author : "린드 B 존슨",
	},
	{
		quote : "If you can accept losing, you cannot win.",
		author : "Vince Lombardi",
	},
	{
		quote : "할 수 있는 것을, 현재 가진 것과 함께, 지금의 위치에서 행하라.",
		author : "테어도어 루즈벨트",
	}
];

// console.log(arr[0].quote);  배열에 접근하는 공식과 객체에 접근하는 공식 결합
// console.log(arr[0].author);


var quote = document.getElementById('quote')
var author = document.getElementById('author')
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
	
	var random = Math.floor(Math.random() * arr.length);

	quote.textContent = arr[random].quote;
	author.textContent = arr[random].author;

});