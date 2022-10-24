// $('#h1').html('Hello world, edited')
// console.log($('#h1', 'input[name="input1"]'))
// console.log($('#h1'))
// console.log($('#h3,.heder' ))
// console.log($('input[name="input1"]'))
$('div').attr('style', 'width:250px; height:250px; background: lightgreen; margin-bottom: 10px')

$('#btn1').on('click', (event) => {
	$('div').fadeIn('slow')
})

$('#btn2').on('click', (event) => {
	$('div').fadeOut('slow')
})


