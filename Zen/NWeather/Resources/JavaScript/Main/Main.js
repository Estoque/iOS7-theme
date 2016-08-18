var updateWeatherEvery = updateInterval*60*1000;

var xmldata = false;

var postal;

var filename = "";

var where = "";

var whereOld = "";



switch (lang) {

case "fr":

	var days = ["일","월","화","수","목","금","토"];

	var months=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];

	var minTemptxt = "최저";

	var maxTemptxt = "최고";

break;

case "de":

	var days = ["Son","Mon","Die","Mit","Don","Fre","Sam"];

	var months=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September ","Oktober","November","Dezember"];

	var minTemptxt = "min";

	var maxTemptxt = "max"; 		

break;

case "sp":

	var days = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];

	var months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Juliot','Agosto','Septiembre','Octubre','Novimbre','Decimbre'];

	var maxTemptxt = "mín"

	var maxTemptxt = "máx"

break;

case "it":

	var days = ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];

	var months=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

	var minTemptxt = "min";

	var maxTemptxt = "mas"; 

break;

default: 

	var days = ["일","월","화","수","목","금","토"];

	var months=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];

	var minTemptxt = "최저";

	var maxTemptxt = "최고";

break;

}



function updateClock () {

var currentTime = new Date();

var currentHours = currentTime.getHours();

var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();

var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();

var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();

timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	

if (ampm == false) {

	timeOfDay = "";

	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;

	} else {

	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

}



currentTimeString = currentHours + ":" + currentMinutes;



if (SecDisplay == false) {

document.getElementById("Clock").innerHTML = currentTimeString + " ";

document.getElementById("ampm").innerHTML = timeOfDay;

} else {

document.getElementById("Clock").innerHTML = currentTimeString + ":" + currentSeconds + " ";

document.getElementById("ampm").innerHTML = timeOfDay;

}



if (lang == "am") {

	document.getElementById("date").innerHTML = days[currentTime.getDay()] + ", " + months[currentTime.getMonth()] + " " + currentDate;

	} else {

	document.getElementById("date").innerHTML = days[currentTime.getDay()] + " | " + currentDate + " | " + months[currentTime.getMonth()];

	}

}

 

function init(){

document.getElementById("city").innerHTML = "날씨 불러오는 중...";

updateClock();

setInterval("updateClock();", 1000);

refreshWeather();

}



function randomInteger(low, high) {

    return low + Math.floor(Math.random() * (high - low));

}



function refreshWeather(){

	fetchWeatherData(dealWithWeather);

	setTimeout("refreshWeather()", updateWeatherEvery);

}



function dealWithWeather(obj){

	if (obj.error == false){

		document.getElementById("city").innerHTML=obj.city;

		document.getElementById("temp").innerHTML=obj.temp + "&#176;";

		document.getElementById("low").innerHTML=obj.todaylow + "&#176;";

		document.getElementById("high").innerHTML=obj.todayhigh + "&#176;";

		document.getElementById("desc").innerHTML=obj.description;

		document.getElementById("Offline").innerHTML = "";

		

		document.getElementById("icon2").src="Images/klear/" + obj.icon2 + ".png";		

		document.getElementById("icon3").src="Images/klear/" + obj.icon3 + ".png";

		document.getElementById("icon4").src="Images/klear/" + obj.icon4 + ".png";

		document.getElementById("icon5").src="Images/klear/" + obj.icon5 + ".png";



		document.getElementById("day2").innerHTML=days[obj.day2];

		document.getElementById("low2").innerHTML=obj.todaylow2;

		document.getElementById("high2").innerHTML=obj.todayhigh2;

		document.getElementById("day3").innerHTML=days[obj.day3];		

		document.getElementById("low3").innerHTML=obj.todaylow3;

		document.getElementById("high3").innerHTML=obj.todayhigh3;

		document.getElementById("day4").innerHTML=days[obj.day4];

		document.getElementById("low4").innerHTML=obj.todaylow4;

		document.getElementById("high4").innerHTML=obj.todayhigh4;

		document.getElementById("day5").innerHTML=days[obj.day5];		

		document.getElementById("low5").innerHTML=obj.todaylow5;

		document.getElementById("high5").innerHTML=obj.todayhigh5;

						

				

		switch (lang) {

		case "fr":

			translatedesc=obj.description.toLowerCase();

			if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='화창함'; }

			if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='가랑비'; }

			if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='폭설'; }

			if (translatedesc=='heavy rain') { document.getElementById("desc").innerHTML='폭우'; }

			if (translatedesc=='rain and snow') { document.getElementById("desc").innerHTML='눈.비'; }

			if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='진눈깨비'; }

			if (translatedesc=='fair') { document.getElementById("desc").innerHTML='맑음';    }

			if (translatedesc=='mostly sunny') { document.getElementById("desc").innerHTML='대부분 맑음';	  }

			if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='부분적으로 맑음';   }

			if (translatedesc=='intermittent clouds') { document.getElementById("desc").innerHTML='구름조금';	 }

			if (translatedesc=='hazy sunshine') { document.getElementById("desc").innerHTML='옅은 안개;';	}

			if (translatedesc=='haze') { document.getElementById("desc").innerHTML='실안개'; }

			if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='대부분 구름';	 }

			if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='구름많음';    }

			if (translatedesc=='fog') { document.getElementById("desc").innerHTML='안개';	  }

			if (translatedesc=='showers') { document.getElementById("desc").innerHTML='소나기';	}

			if (translatedesc=='partly sunny with showers') { document.getElementById("desc").innerHTML='화창하며 소나기 동반';    }

			if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='다수의 천둥번개';    }

			if (translatedesc=='thunderstorm') { document.getElementById("desc").innerHTML='천둥번개'; }

			if (translatedesc=='mostly cloudy with thunder showers') { document.getElementById("desc").innerHTML='많은 구름과 우레를 동반한 소나기';	  }

			if (translatedesc=='partly sunny with thunder showers') { document.getElementById("desc").innerHTML='부분적으로 맑고 우레를 동반한 소나기';    }

			if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='약한 비';	  }

			if (translatedesc=='rain') { document.getElementById("desc").innerHTML='비'; }

			if (translatedesc=='flurries') { document.getElementById("desc").innerHTML='흩뿌리는 눈';	}

			if (translatedesc=='mostly cloudy with flurries') { document.getElementById("desc").innerHTML='많은 구름과 흩뿌리는눈';   }

			if (translatedesc=='partly sunny with flurries') { document.getElementById("desc").innerHTML='부분적으로 맑고 흩뿌리는 눈';    }

			if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='가끔씩 흩뿌리는 눈';    }

			if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='소낙눈';    }

			if (translatedesc=='snow') { document.getElementById("desc").innerHTML='눈'; }

			if (translatedesc=='mostly cloudy with snow') { document.getElementById("desc").innerHTML='눈과 많은 구름';    }

			if (translatedesc=='ice') { document.getElementById("desc").innerHTML='결빙'; }

			if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='진눈깨비';    }

			if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='얼어붙는 비';	 }

			if (translatedesc=='rain and snow mixed') { document.getElementById("desc").innerHTML='진눈깨비';	}

			if (translatedesc=='hot') { document.getElementById("desc").innerHTML='고온'; }

			if (translatedesc=='cold') { document.getElementById("desc").innerHTML='저온'; }

			if (translatedesc=='windy') { document.getElementById("desc").innerHTML='바람';    }

			if (translatedesc=='clear') { document.getElementById("desc").innerHTML='갬'; }

			if (translatedesc=='mostly clear') { document.getElementById("desc").innerHTML='대부분 갬';	}

			if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='부분적 구름';	 }

			if (translatedesc=='hazy') { document.getElementById("desc").innerHTML='실안개 낀'; }

			if (translatedesc=='partly cloudy with showers') { document.getElementById("desc").innerHTML='소나기를 동반한 부분적 구름';	}

			if (translatedesc=='mostly cloudy with showers') { document.getElementById("desc").innerHTML='소나기를 동반한 부분적 구름';	  }

			if (translatedesc=='party cloudy with thunder showers') { document.getElementById("desc").innerHTML='천둥번개를 동반한 부분적 구름';	 }

			if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='안개낀';	 }

			if (translatedesc=='light snow') { document.getElementById("desc").innerHTML='가벼운 눈'; }

			if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='가벼운 눈 소나기'; } 	

			if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='눈 소나기';    }

			if (translatedesc=='light drizzle') { document.getElementById("desc").innerHTML='가벼운 가랑비';	  }

			if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='섞인 비와 진눈깨비';    }

			if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='섞인 눈과 진눈깨비';    }

			if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='심한 천둥번개';	 }

			if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='폭풍';	  }

			if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='열대 폭풍우';    }

			if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='토네이도';	}

			if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='얼어붙는 가랑비';	  }

			if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='흩날리는 눈'; }

			if (translatedesc=='hail') { document.getElementById("desc").innerHTML='우박'; }

			if (translatedesc=='dust') { document.getElementById("desc").innerHTML='먼지';	}

			if (translatedesc=='somky') { document.getElementById("desc").innerHTML='연기가 자욱한';    }

			if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='바람이 거센';    }

			if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='섞인 비와 우박';    }

			if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='국지성 뇌우';    }

			if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='천둥을 동반한 국지성 소나기';    }

			if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='산발적인 뇌우';    }

			if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='산발적인 소나기';	 }

			if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='산발적인 눈 소나기';    }

			if (translatedesc=='light rain with thunder') { document.getElementById("desc").innerHTML='가벼운 비와 천둥';    }

			if (translatedesc=='not available') { document.getElementById("desc").innerHTML='알 수 없음';    }

			if (translatedesc=='drifting snow/windy') { document.getElementById("desc").innerHTML='눈 날림/바람';    }

			if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='가벼운 소낙비'; }

			if (translatedesc=='thunder') { document.getElementById("desc").innerHTML='천둥'; }

			if (translatedesc=='mostly cloudy/windy') { document.getElementById("desc").innerHTML='많은 구름/바람'; }

			if (translatedesc=='sandstorm') { document.getElementById("desc").innerHTML='모래폭풍'; }

			if (translatedesc=='squalls/windy') { document.getElementById("desc").innerHTML='돌풍/바람'; }

			if (translatedesc=='sand') { document.getElementById("desc").innerHTML='황사'; }

			if (translatedesc=='sandstorm/windy') { document.getElementById("desc").innerHTML='모래폭풍/바람'; }

			if (translatedesc=='squalls') { document.getElementById("desc").innerHTML='돌풍'; }
			
			if (translatedesc=='light snow grains') { document.getElementById("desc").innerHTML='가는 눈 입자'; }
			
			if (translatedesc=='smoky') { document.getElementById("desc").innerHTML='흐린'; }
			
			if (translatedesc=='showers in the vicinity') { document.getElementById("desc").innerHTML='인근에 소나기'; }
			
			if (translatedesc=='ground fog') { document.getElementById("desc").innerHTML='땅 안개'; }
			
			if (translatedesc=='mist') { document.getElementById("desc").innerHTML='엷은안개'; }
			
			if (translatedesc=='severe thunderstorm/windy') { document.getElementById("desc").innerHTML='극심한 폭풍우/바람'; }

			document.getElementById("lastupdate").innerHTML = "마지막 업데이트" + currentTimeString + " " + timeOfDay;

			document.getElementById("lowd").innerHTML = minTemptxt;

			document.getElementById("highd").innerHTML = maxTemptxt;

		break;

		case "de":

			translatedesc=obj.description.toLowerCase();

			if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='토네이도'; }

			if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='열대 폭풍우'; }

			if (translatedesc=='heavy rain') { document.getElementById("desc").innerHTML='Starker Regen'; }

			if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='Wirbelsturm'; }

			if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='Schwere Gewitter'; }

			if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='Gewitter'; }

			if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='Regen und Schnee'; }

			if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='Graupelschauer'; }

			if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='Schneeregen'; }

			if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='Gefrierender Nieselregen'; }

			if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Nieselregen'; }

			if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='Gefrierender Regen'; }

			if (translatedesc=='showers') { document.getElementById("desc").innerHTML='Schauer'; }

			if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='Schneegest&ouml;ber'; }

			if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='Leichte Schneeschauer'; }

			if (translatedesc=='light snow grains') { document.getElementById("desc").innerHTML='Leichte Schneeschauer'; }

			if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='Schneetreiben'; }

			if (translatedesc=='snow') { document.getElementById("desc").innerHTML='Schnee'; }

			if (translatedesc=='hail') { document.getElementById("desc").innerHTML='Hagel'; }

			if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='Schneeregen'; }

			if (translatedesc=='dust') { document.getElementById("desc").innerHTML='Staubig'; }

			if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Nebelig'; }

			if (translatedesc=='haze') { document.getElementById("desc").innerHTML='Dunstschleier'; }

			if (translatedesc=='smoky') { document.getElementById("desc").innerHTML='Dunstig'; }

			if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='St&uuml;rmisch'; }

			if (translatedesc=='windy') { document.getElementById("desc").innerHTML='Windig'; }

			if (translatedesc=='cold') { document.getElementById("desc").innerHTML='Kalt'; }

			if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='Bew&ouml;lkt'; }

			if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='Meist Bew&ouml;lkt'; }

			if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Teilweise Bew&ouml;lkt'; }

			if (translatedesc=='clear') { document.getElementById("desc").innerHTML='Klar'; }

			if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='Sonnig'; }

			if (translatedesc=='fair') { document.getElementById("desc").innerHTML='Heiter'; }

			if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='Regen und Hagel'; }

			if (translatedesc=='hot') { document.getElementById("desc").innerHTML='Heiss'; }

			if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='&Ouml;rtliche Gewitter'; }

			if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='Vereinzelte Gewitter'; }

			if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='Vereinzelte Schauer'; }

			if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='Starker Schneefall'; }

			if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='Vereinzelte Schneeschauer'; }

			if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Teilweise Bew&ouml;lkt'; }

			if (translatedesc=='thundershowers') { document.getElementById("desc").innerHTML='Gewitter'; }

			if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='Scheeschauer'; }

			if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='Ouml;rtliche Gewitterschauer'; }

			if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='Leichte Regenschauer'; }

			if (translatedesc=='not available') { document.getElementById("desc").innerHTML='nicht verfuegbar'; }

			if (translatedesc=='showers in the vicinity') { document.getElementById("desc").innerHTML='Schauer'; }

			if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='Teilweise Sonnig'; }

			if (translatedesc=='ground fog') { document.getElementById("desc").innerHTML='Bodennebel'; }

			if (translatedesc=='light drizzle') { document.getElementById("desc").innerHTML='Leichter Nieselregen'; }

			if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='Leichter Regen'; }

			if (translatedesc=='mist') { document.getElementById("desc").innerHTML='Nebel'; }

			if (translatedesc=='fog') { document.getElementById("desc").innerHTML='Nebel'; }



if (translatedesc=='thunderstorm') { document.getElementById("desc").innerHTML='Gewitter'; }

			if (translatedesc=='rain') { document.getElementById("desc").innerHTML='Regen'; }

			if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='Regenschauer'; }

			if (translatedesc=='severe thunderstorm/windy') { document.getElementById("desc").innerHTML='Schwere Gewitter/Windig'; }

			document.getElementById("lastupdate").innerHTML = "Letztes Update | " + currentTimeString + " " + timeOfDay;

		break;

		case "sp":

			translatedesc=obj.description.toLowerCase();

			if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='Soleado'; }

			if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Llovizna'; }

			if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='Nieve fuerte'; }

			if (translatedesc=='heavy rain') { document.getElementById("desc").innerHTML='Luvia fuerte'; }

			if (translatedesc=='rain and snow') { document.getElementById("desc").innerHTML='Lluvia y nieve'; }

			if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='Mezcla de lluvia y nieve'; }

			if (translatedesc=='fair') { document.getElementById("desc").innerHTML='Despejado';    }

			if (translatedesc=='mostly sunny') { document.getElementById("desc").innerHTML='Mayormente soleado';	  }

			if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='Parcialmente soleado';	 }

			if (translatedesc=='intermittent clouds') { document.getElementById("desc").innerHTML='Intermitente nublado';	 }

			if (translatedesc=='hazy sunshine') { document.getElementById("desc").innerHTML='Sol brumoso';	}

			if (translatedesc=='haze') { document.getElementById("desc").innerHTML='Bruma'; }

			if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='Mayormente nublado';	 }

			if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='Nublado';    }

			if (translatedesc=='fog') { document.getElementById("desc").innerHTML='Niebla';   }

			if (translatedesc=='showers') { document.getElementById("desc").innerHTML='Chubascos';	}

			if (translatedesc=='partly sunny with showers') { document.getElementById("desc").innerHTML='Parcialmente soleado con chubascos';    }

			if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas';    }

			if (translatedesc=='thunderstorm') { document.getElementById("desc").innerHTML='Tormenta electrica';	}

			if (translatedesc=='mostly cloudy with thunder showers') { document.getElementById("desc").innerHTML='Mayormente nublado con tormentas de chubascos';	  }

			if (translatedesc=='partly sunny with thunder showers') { document.getElementById("desc").innerHTML='Parcialmente soleado con tormentas de chubascos';	  }

			if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='Lluvia ligera';	  }

			if (translatedesc=='rain') { document.getElementById("desc").innerHTML='Lluvia';    }

			if (translatedesc=='flurries') { document.getElementById("desc").innerHTML='Rafagas';	}

			if (translatedesc=='mostly cloudy with flurries') { document.getElementById("desc").innerHTML='Mayormente nublado con rafagas';   }

			if (translatedesc=='partly sunny with flurries') { document.getElementById("desc").innerHTML='Parcialmente soleado con rafagas';    }

			if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='Rafagas de nieve';    }

			if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='Precipitaciones de nieve';    }

			if (translatedesc=='snow') { document.getElementById("desc").innerHTML='Nieve'; }

			if (translatedesc=='mostly cloudy with snow') { document.getElementById("desc").innerHTML='Mayormente nublado con nieve';    }

			if (translatedesc=='ice') { document.getElementById("desc").innerHTML='Hielo'; }

			if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='Aguanieve';	}

			if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='Lluvia bajo cero';	 }

			if (translatedesc=='rain and snow mixed') { document.getElementById("desc").innerHTML='Mezcla de lluvia y nieve';	}

			if (translatedesc=='hot') { document.getElementById("desc").innerHTML='Caluroso';	  }

			if (translatedesc=='cold') { document.getElementById("desc").innerHTML='Frio';	 }

			if (translatedesc=='windy') { document.getElementById("desc").innerHTML='Vientoso';    }

			if (translatedesc=='clear') { document.getElementById("desc").innerHTML='Despejado';	}

			if (translatedesc=='mostly clear') { document.getElementById("desc").innerHTML='Mayormente despejado';	}

			if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Parcialmente despejado';	 }

			if (translatedesc=='hazy') { document.getElementById("desc").innerHTML='Bruma'; }

			if (translatedesc=='partly cloudy with showers') { document.getElementById("desc").innerHTML='Parcialmente nublado con chubascos';	}

			if (translatedesc=='mostly cloudy with showers') { document.getElementById("desc").innerHTML='Mayormente nublado con chubascos';	  }

			if (translatedesc=='party cloudy with thunder showers') { document.getElementById("desc").innerHTML='Parcialmente nublado con tormentas de chubascos';	 }

			if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Neblina';	 }

			if (translatedesc=='light snow') { document.getElementById("desc").innerHTML='Nieve ligera'; }

			if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='Ligeras precipitaciones de nieve'; }	 

			if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='Precipitaciones de lluvia';    }

			if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Bruma'; }

			if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='Mezcla de lluvia y aguanieve';	  }

			if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='Mezcla de nieve y aguanieve';	 }

			if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas severas';	 }

			if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='Huracan';	  }

			if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='Tormenta tropical';	 }

			if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='Tornado';	}

			if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='Llovizna helada';	  }

			if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='Viento y nieve'; }

			if (translatedesc=='hail') { document.getElementById("desc").innerHTML='Granizo'; }

			if (translatedesc=='dust') { document.getElementById("desc").innerHTML='Polvareda';	}

			if (translatedesc=='somky') { document.getElementById("desc").innerHTML='Humeado';    }

			if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='Tempestuoso';    }

			if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='Mezcla de lluvia y granizo';    }

			if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas aisladas';    }

			if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='Tormentas aisladas';    }

			if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='Tormentas electricas dispersas';    }

			if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='Chubascos dispersos';	 }

			if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='Precipitaciones de nieve dispersas';	  }

			if (translatedesc=='light rain with thunder') { document.getElementById("desc").innerHTML='LLuvia y tormenta ligera';	 }

			if (translatedesc=='not available') { document.getElementById("desc").innerHTML='No disponible';    }

			if (translatedesc=='drifting snow/windy') { document.getElementById("desc").innerHTML='Acumulacion de nieve y viento';	  }

			if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='Precipitaciones de lluvia ligera';   }

			if (translatedesc=='thunder') { document.getElementById("desc").innerHTML='Truenos'; }

			if (translatedesc=='mostly cloudy/windy') { document.getElementById("desc").innerHTML='Mayormente nublado y ventoso'; }

			if (translatedesc=='sandstorm') { document.getElementById("desc").innerHTML='Tormentas de arena'; }

			if (translatedesc=='squalls/windy') { document.getElementById("desc").innerHTML='Chubascos y viento'; }

			if (translatedesc=='sand') { document.getElementById("desc").innerHTML='Arena'; }

			if (translatedesc=='sandstorm/windy') { document.getElementById("desc").innerHTML='Tormentas de arena y ventoso'; }

			document.getElementById("lastupdate").innerHTML = "Actualizado | " + currentTimeString + " " + timeOfDay;

		break;

		case "it":

			translatedesc=obj.description.toLowerCase();

			if (translatedesc=='sunny') { document.getElementById("desc").innerHTML='Soleggiato'; }

			if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Pioggerella'; }

			if (translatedesc=='heavy snow') { document.getElementById("desc").innerHTML='Forti nevicate'; }

			if (translatedesc=='heavy rain') { document.getElementById("desc").innerHTML='Forti piogge'; }

			if (translatedesc=='rain and snow') { document.getElementById("desc").innerHTML='Vevischio'; }

			if (translatedesc=='mixed rain and snow') { document.getElementById("desc").innerHTML='Misto pioggia e neve'; }

			if (translatedesc=='fair') { document.getElementById("desc").innerHTML='Sereno';    }

			if (translatedesc=='mostly sunny') { document.getElementById("desc").innerHTML='Molto soleggiato';	  }

			if (translatedesc=='partly sunny') { document.getElementById("desc").innerHTML='Parzialmente soleggiato';   }

			if (translatedesc=='intermittent clouds') { document.getElementById("desc").innerHTML='Nuvoloso a tratti';	 }

			if (translatedesc=='hazy sunshine') { document.getElementById("desc").innerHTML='Sole coperto'; }

			if (translatedesc=='haze') { document.getElementById("desc").innerHTML='Nebbia'; }

			if (translatedesc=='mostly cloudy') { document.getElementById("desc").innerHTML='Molto nuvoloso';	 }

			if (translatedesc=='cloudy') { document.getElementById("desc").innerHTML='Nuvoloso';	}

			if (translatedesc=='fog') { document.getElementById("desc").innerHTML='Nebbia';   }

			if (translatedesc=='showers') { document.getElementById("desc").innerHTML='Diluvio';	}

			if (translatedesc=='partly sunny with showers') { document.getElementById("desc").innerHTML='Soleggiato con pioggia';	 }

			if (translatedesc=='thunderstorms') { document.getElementById("desc").innerHTML='Fulmini';    }

			if (translatedesc=='thunderstorm') { document.getElementById("desc").innerHTML='Tuoni'; }

			if (translatedesc=='mostly cloudy with thunder showers') { document.getElementById("desc").innerHTML='Molto Nuvoloso con pioggia e fulmini';	  }

			if (translatedesc=='partly sunny with thunder showers') { document.getElementById("desc").innerHTML='Possibili Piogge';    }

			if (translatedesc=='light rain') { document.getElementById("desc").innerHTML='Pioggia leggera';   }

			if (translatedesc=='rain') { document.getElementById("desc").innerHTML='Pioggia';    }

			if (translatedesc=='flurries') { document.getElementById("desc").innerHTML='Nevischio'; }

			if (translatedesc=='mostly cloudy with flurries') { document.getElementById("desc").innerHTML='Nuvoloso con nevischio';   }

			if (translatedesc=='partly sunny with flurries') { document.getElementById("desc").innerHTML='Parzialmente soleggiato con neve';    }

			if (translatedesc=='snow flurries') { document.getElementById("desc").innerHTML='Raffiche di neve';    }

			if (translatedesc=='snow showers') { document.getElementById("desc").innerHTML='Precipitazioni nevose';    }

			if (translatedesc=='snow') { document.getElementById("desc").innerHTML='Neve';	  }

			if (translatedesc=='mostly cloudy with snow') { document.getElementById("desc").innerHTML='Molto nuvoloso con neve';	}

			if (translatedesc=='ice') { document.getElementById("desc").innerHTML='Ghiaccio';	}

			if (translatedesc=='sleet') { document.getElementById("desc").innerHTML='Nevischio';	}

			if (translatedesc=='freezing rain') { document.getElementById("desc").innerHTML='Grandine';	 }

			if (translatedesc=='rain and snow mixed') { document.getElementById("desc").innerHTML='Pioggia e neve'; }

			if (translatedesc=='hot') { document.getElementById("desc").innerHTML='Caldo'; }

			if (translatedesc=='cold') { document.getElementById("desc").innerHTML='Freddo';   }

			if (translatedesc=='windy') { document.getElementById("desc").innerHTML='Ventoso';    }

			if (translatedesc=='clear') { document.getElementById("desc").innerHTML='Sereno';    }

			if (translatedesc=='mostly clear') { document.getElementById("desc").innerHTML='Molto sereno';	}

			if (translatedesc=='partly cloudy') { document.getElementById("desc").innerHTML='Parzialmente nuvoloso';	 }

			if (translatedesc=='hazy') { document.getElementById("desc").innerHTML='Velato';    }

			if (translatedesc=='partly cloudy with showers') { document.getElementById("desc").innerHTML='Cielo velato';	}

			if (translatedesc=='mostly cloudy with showers') { document.getElementById("desc").innerHTML='Nuvoloso a tratti';	  }

			if (translatedesc=='party cloudy with thunder showers') { document.getElementById("desc").innerHTML='Parzialmente nuvoloso con raffiche';	 }

			if (translatedesc=='foggy') { document.getElementById("desc").innerHTML='Nebbiolina';	 }

			if (translatedesc=='light snow') { document.getElementById("desc").innerHTML='Neve leggiera'; }

			if (translatedesc=='light snow showers') { document.getElementById("desc").innerHTML='Poca neve'; }	  

			if (translatedesc=='rain shower') { document.getElementById("desc").innerHTML='Forti precipitazioni';	 }

			if (translatedesc=='drizzle') { document.getElementById("desc").innerHTML='Freddino';	 }

			if (translatedesc=='mixed rain and sleet') { document.getElementById("desc").innerHTML='Misto pioggia e nevischio';    }

			if (translatedesc=='mixed snow and sleet') { document.getElementById("desc").innerHTML='Misto neve e nevischio';    }

			if (translatedesc=='severe thunderstorms') { document.getElementById("desc").innerHTML='Tuoni e fulmini';	 }

			if (translatedesc=='hurricane') { document.getElementById("desc").innerHTML='Uragano';	  }

			if (translatedesc=='tropical storm') { document.getElementById("desc").innerHTML='Tempesta tropicale';	  }

			if (translatedesc=='tornado') { document.getElementById("desc").innerHTML='Tornado';	}

			if (translatedesc=='freezing drizzle') { document.getElementById("desc").innerHTML='Grandine';	  }

			if (translatedesc=='blowing snow') { document.getElementById("desc").innerHTML='Vento e neve'; }

			if (translatedesc=='hail') { document.getElementById("desc").innerHTML='Grandine'; }

			if (translatedesc=='dust') { document.getElementById("desc").innerHTML='Polvere';	}

			if (translatedesc=='somky') { document.getElementById("desc").innerHTML='Humeado';    }

			if (translatedesc=='blustery') { document.getElementById("desc").innerHTML='Tempesa';	 }

			if (translatedesc=='mixed rain and hail') { document.getElementById("desc").innerHTML='misto neve e grandine';	  }

			if (translatedesc=='isolated thunderstorms') { document.getElementById("desc").innerHTML='Fulmini isolati';    }

			if (translatedesc=='isolated thundershowers') { document.getElementById("desc").innerHTML='Temporali isolati';	  }

			if (translatedesc=='scattered thunderstorms') { document.getElementById("desc").innerHTML='Tempesta di fulmini';    }

			if (translatedesc=='scattered showers') { document.getElementById("desc").innerHTML='Tempesta di pioggia';	 }

			if (translatedesc=='scattered snow showers') { document.getElementById("desc").innerHTML='Neve sparsa';    }

			if (translatedesc=='light rain with thunder') { document.getElementById("desc").innerHTML='Pioggia leggera con fulmini';    }

			if (translatedesc=='not available') { document.getElementById("desc").innerHTML='No disponible';    }

			if (translatedesc=='drifting snow/windy') { document.getElementById("desc").innerHTML='Troppa neve';	}

			if (translatedesc=='light rain shower') { document.getElementById("desc").innerHTML='Piccole precipitazioni';	  }

			if (translatedesc=='thunder') { document.getElementById("desc").innerHTML='Tuoni'; }

			if (translatedesc=='mostly cloudy/windy') { document.getElementById("desc").innerHTML='Molto nuvoloso con vento'; }

			if (translatedesc=='sandstorm') { document.getElementById("desc").innerHTML='Tormenta'; }

			if (translatedesc=='squalls/windy') { document.getElementById("desc").innerHTML='Pioggia e vento'; }

			if (translatedesc=='sand') { document.getElementById("desc").innerHTML='Arena'; }

			if (translatedesc=='sandstorm/windy') { document.getElementById("desc").innerHTML='Tormenta ventosa'; }

			document.getElementById("lastupdate").innerHTML = "Attuale | " + currentTimeString + " " + timeOfDay;

		break;

		default:			

			document.getElementById("desc").innerHTML=obj.description;

			document.getElementById("lastupdate").innerHTML = "Last update | " + currentTimeString + " " + timeOfDay;

			document.getElementById("lowd").innerHTML = minTemptxt;

			document.getElementById("highd").innerHTML = maxTemptxt;			

		break;

		}

		

		// STATIC OR ANIMATED

		if (AnimatedWeather == true) {

			

			document.getElementById("WeatherStatic").src="Images/Time/blank.png";



			// DAY OR NIGHT

			

			var Walls = [

				"dark", 	//0	tornado

				"dark", 	//1	tropical storm

				"dark", 	//2	hurricane

				"dark", 	//3	severe thunderstorms

				"dark", 	//4	thunderstorms

				"snow", 	//5	mixed rain and snow

				"dark", 	//6	mixed rain and sleet

				"snow", 	//7	mixed snow and sleet

				"dark", 	//8	freezing drizzle

				"dark", 	//9	drizzle

				"dark", 	//10	freezing rain

				"dark", 	//11	showers

				"dark", 	//12	showers

				"snow", 	//13	snow flurries

				"snow", 	//14	light snow showers

				"snow", 	//15	blowing snow

				"snow", 	//16	snow

				"dark", 	//17	hail

				"dark", 	//18	sleet

				"clear",	//19	dust

				"clear",	//20	foggy

				"clear",	//21	haze

				"clear",	//22	smoky

				"clear",	//23	blustery

				"clear",	//24	windy

				"clear",	//25	cold

				"dark", //26	cloudy

				"dark", //27	mostly cloudy (night)

				"dark", //28	mostly cloudy (day)

				"clear",	//29	partly cloudy (night)

				"clear",	//30	partly cloudy (day)

				"clear",	//31	clear (night)

				"clear",	//32	sunny

				"clear",	//33	fair (night)

				"clear",	//34	fair (day)

				"dark", //35	mixed rain and hail

				"clear",	//36	hot

				"dark", 	//37	isolated thunderstorms

				"dark", 	//38	scattered thunderstorms

				"dark", 	//39	scattered thunderstorms

				"dark", 	//40	scattered showers

				"snow", 	//41	heavy snow

				"snow", 	//42	scattered snow showers

				"snow", 	//43	heavy snow

				"clear",	//44	partly cloudy

				"dark", 	//45	thundershowers

				"snow", 	//46	snow showers

				"dark", 	//47	isolated thundershowers

				"blank"];	//3200	not available

			

			if (obj.time == "false") {

			where = "day";

			document.getElementById("weatherWall").src="Images/Time/day_" + Walls[obj.icon] +".png";

			}

			else

			{

			where = "night";

			document.getElementById("weatherWall").src="Images/Time/night_" + Walls[obj.icon] +".png";

			}

			

			//WEATHER MINICONS

			var MiniIcons = [

		"tstorm3",		//0	tornado

				"tstorm3",		//1	tropical storm

			    "tstorm3",		//2	hurricane

				"tstorm3",		//3	severe thunderstorms

				"tstorm2",		//4	thunderstorms

				"sleet",		//5	mixed rain and snow

				"sleet",		//6	mixed rain and sleet

				"sleet",		//7	mixed snow and sleet

				"sleet",		//8	freezing drizzle

				"light_rain",	//9	drizzle

				"sleet",		//10	freezing rain

				"shower2",		//11	showers

				"shower2",		//12	showers

				"snow1",		//13	snow flurries

				"snow2",		//14	light snow showers

				"snow4",		//15	blowing snow

				"snow4",		//16	snow

				"hail", 	    //17	hail

				"sleet",		//18	sleet

				"mist", 	    //19	dust

				"안개",		    //20	foggy

				"안개",		    //21	haze

				"안개",		    //22	smoky

				"cloudy1",		//23	blustery

				"cloudy1",		//24	windy

				"overcast",		//25	cold

				"cloudy5",		//26	cloudy

				"cloudy4_night",//27	mostly cloudy (night)

				"cloudy4",		//28	mostly cloudy (day)

				"cloudy1_night",//29	partly cloudy (night)

				"cloudy2",		//30	partly cloudy (day)

				"fair_night",	//31	clear (night)

				"sunny",		//32	sunny

				"fair_night",	//33	fair (night)

				"fair", 	    //34	fair (day)

				"hail", 	    //35	mixed rain and hail

				"sunny",		//36	hot

				"tstorm1",		//37	isolated thunderstorms

				"tstorm2",		//38	scattered thunderstorms

				"tstorm2",		//39	scattered thunderstorms

				"tstorm2",		//40	scattered showers

				"snow5",		//41	heavy snow

				"snow3",		//42	scattered snow showers

				"snow5",		//43	heavy snow

				"cloudy1",		//44	partly cloudy

				"storm1",		//45	thundershowers

				"snow2",		//46	snow showers

				"tstorm1",		//47	isolated thundershowers

				"dunno"];	   //3200	not available

						

			

			// WEATHER CONDITION

			var Conditions = [

				"thunderstorm", 	//0	tornado

				"thunderstorm", 	//1	tropical storm

				"thunderstorm", 	//2	hurricane

				"thunderstorm", 	//3	severe thunderstorms

				"thunderstorm", 	//4	thunderstorms

				"sleet",				//5	mixed rain and snow

				"sleet",				//6	mixed rain and sleet

				"sleet",				//7	mixed snow and sleet

				"sleet",				//8	freezing drizzle

				"showers_cloud",	//9	drizzle

				"sleet",				//10	freezing rain

				"showers_cloud",	//11	showers

				"rain", 			//12	showers

				"snow", 			//13	snow flurries

				"snow", 			//14	light snow showers

				"snow", 			//15	blowing snow

				"snow", 			//16	snow

				"hail", 			//17	hail

				"sleet",				//18	sleet

				"안개",				//19	dust

				"안개",				//20	foggy

				"haze", 			//21	haze

				"안개",				//22	smoky

				"wind", 			//23	blustery

				"wind", 			//24	windy

				"frost",				//25	cold

				"cloud",				//26	cloudy

				"cloud",		//27	mostly cloudy (night)

				"cloud",		//28	mostly cloudy (day)

				"partlycloudy", 	//29	partly cloudy (night)

				"partlycloudy", 	//30	partly cloudy (day)

				"moon", 			//31	clear (night)

				"sun",				//32	sunny

				"partlycloudy", 	//33	fair (night)

				"partlycloudy", 	//34	fair (day)

				"sleet",				//35	mixed rain and hail

				"sun",				//36	hot

				"thunderstorm", 	//37	isolated thunderstorms

				"thunderstorm", 	//38	scattered thunderstorms

				"thunderstorm", 	//39	scattered thunderstorms

				"showers_cloud",	//40	scattered showers

				"snow", 			//41	heavy snow

				"snow", 			//42	scattered snow showers

				"snow", 			//43	heavy snow

				"partlycloudy", 	//44	partly cloudy

				"thunderstorm", 	//45	thundershowers

				"snow", 			//46	snow showers

				"thunderstorm", 	//47	isolated thundershowers

				"blank"];			//3200	not available

			if (filename == "") {

			filename = Conditions[obj.icon];

			whereOld = where;

			loadjscssfile ("Weather", filename, "css");

			loadjscssfile ("Weather", filename, "js");

			}

			else

			{

			if ((Conditions[obj.icon] != filename ) || (where != whereOld)) {

				whereOld = where;

				delelement("frameContainer");

				delelement("cloudContainer");

				delelement("dropContainer");

				replacejscssfile("Weather", filename, Conditions[obj.icon], "css");

				replacejscssfile("Weather", filename, Conditions[obj.icon], "js");

				filename = Conditions[obj.icon];	

				}

			}

		}

		else

		{

		document.getElementById("WeatherStatic").src="Images/WeatherStatic/" + obj.icon + ".png";

		}

	}

	else

	{

	document.getElementById("city").innerHTML = "날씨 오프라인 상태";

	}

}



function delelement(elem) {

var element = document.getElementById(elem);

while (element.firstChild) { element.removeChild(element.firstChild); }

}



function loadjscssfile(url, filename, filetype){

if (filetype=="js") {

	var fileref = document.createElement("script");

	fileref.type = "text/javascript";

	fileref.charset = "utf-8";

	fileref.src = "Resources/JavaScript/" + url + "/" + filename + ".js";

 }

if (filetype=="css") {

	var fileref = document.createElement("link");

	fileref.rel = "stylesheet";

	fileref.href = "Resources/Css/" + url + "/" + filename + ".css";

	fileref.type = "text/css";

	fileref.media = "screen";

 }

document.getElementsByTagName("head")[0].appendChild(fileref);

}



function createjscssfile(url, filename, filetype){

if (filetype=="js") {

	var fileref = document.createElement("script");

	fileref.type = "text/javascript";

	fileref.charset = "utf-8";

	fileref.src = "Resources/JavaScript/" + url + "/" + filename + ".js";

 }

if (filetype=="css") {

	var fileref = document.createElement("link");

	fileref.rel = "stylesheet";

	fileref.href = "Resources/Css/" + url + "/" + filename + ".css";

	fileref.type = "text/css";

	fileref.media = "screen";

 }

return fileref;

}



function replacejscssfile(url, oldfilename, newfilename, filetype){

var targetelement = (filetype=="js")? "script" : (filetype=="css")? "link" : "none";

var targetattr = (filetype=="js")? "src" : (filetype=="css")? "href" : "none";

var allsuspects = document.getElementsByTagName(targetelement);

for (var i = allsuspects.length; i>=0; i--) { 

		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1) {

			var newelement = createjscssfile(url, newfilename, filetype);

			allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i]);

			}

	}

}



function fetchWeatherData(callback) {

	var xml_request = new XMLHttpRequest();

	var requestTimer = setTimeout(function() {

	xml_request.abort();

	if (xmldata == false) { callback ({error:true}); } else {

	document.getElementById("Offline").innerHTML = "Offline"; }

    }, 10000);

	xml_request.onload = function(e) {

	clearTimeout(requestTimer);

	xml_loaded(xml_request, callback);

	}

	xml_request.overrideMimeType("text/xml");

	xml_request.open("GET", "file:///var/mobile/Library/Caches/com.ashman.LibWeather.cache.plist", false);

	xml_request.setRequestHeader("Cache-Control", "no-cache");

	xml_request.send(null);

	return xml_request;

}



function xml_loaded (request, callback) {

	if (request.responseXML)

	{

		xmldata = true;

		var obj = {error:false, errorString:null};

		obj.city = request.responseXML.getElementsByTagName("string")[0].childNodes[0].nodeValue;

		obj.temp = request.responseXML.getElementsByTagName("integer")[26].childNodes[0].nodeValue;

		obj.icon = request.responseXML.getElementsByTagName("integer")[1].childNodes[0].nodeValue;

		obj.description = request.responseXML.getElementsByTagName("string")[1].childNodes[0].nodeValue;

		obj.todayhigh = request.responseXML.getElementsByTagName("integer")[4].childNodes[0].nodeValue;

		obj.todaylow = request.responseXML.getElementsByTagName("integer")[5].childNodes[0].nodeValue;

		obj.time = request.responseXML.getElementsByTagName("key")[35].nextSibling.nextSibling.nodeName;

//addon 4 days by M@cly

		obj.icon2 = request.responseXML.getElementsByTagName("integer")[6].childNodes[0].nodeValue;

		obj.day2 = request.responseXML.getElementsByTagName("integer")[7].childNodes[0].nodeValue;

		obj.todayhigh2 = request.responseXML.getElementsByTagName("integer")[8].childNodes[0].nodeValue;

		obj.todaylow2 = request.responseXML.getElementsByTagName("integer")[9].childNodes[0].nodeValue; 	

		

		obj.icon3 = request.responseXML.getElementsByTagName("integer")[10].childNodes[0].nodeValue;

		obj.day3 = request.responseXML.getElementsByTagName("integer")[11].childNodes[0].nodeValue;

		obj.todayhigh3 = request.responseXML.getElementsByTagName("integer")[12].childNodes[0].nodeValue;

		obj.todaylow3 = request.responseXML.getElementsByTagName("integer")[13].childNodes[0].nodeValue;			

		

		obj.icon4 = request.responseXML.getElementsByTagName("integer")[14].childNodes[0].nodeValue;

		obj.day4 = request.responseXML.getElementsByTagName("integer")[15].childNodes[0].nodeValue;

		obj.todayhigh4 = request.responseXML.getElementsByTagName("integer")[16].childNodes[0].nodeValue;

		obj.todaylow4 = request.responseXML.getElementsByTagName("integer")[17].childNodes[0].nodeValue;		

		

		obj.icon5 = request.responseXML.getElementsByTagName("integer")[18].childNodes[0].nodeValue;

		obj.day5 = request.responseXML.getElementsByTagName("integer")[19].childNodes[0].nodeValue;

		obj.todayhigh5 = request.responseXML.getElementsByTagName("integer")[20].childNodes[0].nodeValue;

		obj.todaylow5 = request.responseXML.getElementsByTagName("integer")[21].childNodes[0].nodeValue;	

		

		if (obj.icon == 3200) obj.icon = 48;

		callback (obj);

	}

	else

	{

		callback ({error:true, errorString:"XML request failed. no responseXML"});

	}

}