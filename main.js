const n = prompt('Выберете желаемый курорт: 1-sharm, 2-hurgada, 3-taba', '');		
		if (n == 1){
    		alert('Поздравляю! Вы выбрали sharm');
		}
		else if (n == 2){
    		alert('Поздравляю! Вы выбрали hurgada');
		}
		else if (n == 3){
    		alert('Поздравляю! Вы выбрали taba');
    	}
    	else if (n < 1 || n > 3){
    		alert('Вы не выбрали место отдыха');	
		}; 
