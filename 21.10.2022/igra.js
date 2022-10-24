			let prNum;
			prNum = Math.floor(Math.random() * 100 + 1);
			console.log(prNum);
			
			function popytka(){
				let num, out;
				
				num = document.getElementById('myNum').value;
				out = document.getElementById('out');
				
				if (num == prNum) {
					out.innerHTML = 'Вы угадали!';			
				}
				else if (num > prNum) {
					out.innerHTML = 'Надо меньше';
				}
				else  {
					out.innerHTML = 'Надо больше';
				}
			}
