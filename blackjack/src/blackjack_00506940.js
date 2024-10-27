


var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
 
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"BlackJackAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");

		
		console.log(gameController);
		
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.gzz!=undefined){
			
			if(gameController.xnq!=parseInt(tmpMess[1])){
				
			gameController.xnq=parseInt(tmpMess[1]);	
			gameController.gzz.knk.pck("creditd", "#xsy", [gameController.mfm(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/



function ubk() {
    this.pwx = "Info";
    this.pqg = "DEPOSIT";
    this.audio = "AUDIO";
    this.vvk = "TIP";
    this.tvk = "TURBO";
    this.zqw = "STATISTIC";
    this.ygy = "HISTORY";
    this.izo = "SHORTCUTS";
    this.lrl = "HELP";
    this.uuj = "PAYTABLE";
    this.language = "LANGUAGE";
    this.egl = ">>";
    this.ftm = "<<";
    this.opn = "Fullscreen is not supported!"
}

function qjj() {
    this.zub = "MINIMUM BET IS";
    this.cwl = "MAX BET";
    this.ulo = "MIN.BET";
    this.ayb = "MAX.BET";
    this.nbh = "BET";
    this.start = "START";
    this.lrl = "HELP";
    this.uuj = "PAYTABLE";
    this.pdx = "MENU";
    this.jyi = "MORE|GAMES";
    this.ncy = "STOP";
    this.jzz = "CREDIT";
    this.oex = "GAME OVER";
    this.qta = "WINNER!";
    this.osx = "GOOD LUCK!";
    this.win = "WIN";
    this.zng = "LAST WIN";
    this.avn = "COLLECT";
    this.xyv = "COLLECT";
    this.esg = "GAMBLE";
    this.dkj = "AUTO|START";
    this.sbv = "HALF|GAMBLE";
    this.uxb = "EXIT";
    this.gaj = "START GAME";
    this.qmj = "CHOOSE BET";
    this.mmw = "HALF";
    this.ret = "RETURN|TO GAME";
    this.tex = "Total Win";
    this.gfa = "Warning";
    this.auo = "TOTAL";
    this.efq = "PLEASE WAIT ...";
    this.alq = "More Games";
    this.tvk = "SPEED";
    this.ngg = "Malfunction voids all pays and plays.";
    this.ynb = "CONTINUE";
    this.dmf = "AUTOSTART";
    this.nei = "PAYTABLE";
    this.zsj = "GAMBLE";
    this.left = "LEFT";
    this.eex = "RIGHT";
    this.ok = "OK";
    this.qtd = "CANCEL";
    this.yya = "Gamble";
    this.dzu = "Half";
    this.wxr = "GAME RULES";
    this.ssu = "GAME RULES";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.isk = "PRESS ANY KEY TO CONTINUE";
    this.wsl = "NOT ENOUGH CREDIT!";
    this.szo = "wins";
    this.gjk = "V A L U E";
    this.of = "OF";
    this.abk = "TOUCH THE SCREEN TO CONTINUE";
    this.tyl = "LOADING ...";
    this.gse = "LOADING HISTORY ...";
    this.yai = "Communication Error";
    this.lbx = "You have reached one of the limits!";
    this.zph = "You have reached the maximum amount of free games!";
    this.cdf = "Game will be closed";
    this.ktu = "Game will be restarted";
    this.xts = "WON";
    this.error = "ERROR";
    this.xti = "FREEPLAY";
    this.aky = "AUTO";
    this.lsz = "GAME ID";
    this.wqs = "Playing Time";
    this.txw = "last";
    this.ciu = "games";
    this.pqg = "DEPOSIT";
    this.audio = "AUDIO";
    this.gkg = "MUSIC";
    this.pgr = "FULLSCREEN";
    this.vyw = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.hqf = "Do not show again";
    this.oso = "Sounds can not be loaded!";
    this.cgr = "Resources missing!";
    this.bdr = "Play without sound?";
    this.cza = "SETTINGS";
    this.han = "Please turn your device!";
    this.pwx = "INFO";
    this.ewj = "Please disable PRIVATE MODE in your browser to play the game.";
    this.tcg = "This game is optimized for Google Chrome.";
    this.wuw = "Please use the current version of";
    this.fhz = "Unfortunately this browser is not fully supported.";
    this.std = "This game can not be started in freeplay mode!";
    this.rkb = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.idf = "Adjust the game interface to your needs!";
    this.qqt = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.jat = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.zzz = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.zqw = "Statistic";
    this.ghk = "Total Games";
    this.ukk = "Total Bets";
    this.rbu = "Total Wins";
    this.tpr = "Total Play Time";
    this.edm = "I have read this message";
    this.sde = "EXIT|GAME";
    this.ygy = "History";
    this.kwu = "No games played.";
    this.state = "STATE";
    this.fij = "Main Game";
    this.jku = "Auto Collected";
    this.shg = "Collected";
    this.oul = "Bonusspins";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "First Deal";
    this.upa = "Second Deal";
    this.dqd = "Third Deal";
    this.rob = "AUTOSTART SETTINGS";
    this.ucq = "Amount of games:";
    this.tol = "Stop autostart";
    this.byv = "Credit lower than:";
    this.nvg = "Credit higher than:";
    this.ttj = "Win higher than:";
    this.vxn = "The autostart will be stopped at the beginning of the bonus.";
    this.wow = "Share on Facebook";
    this.szx = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.tht = "Reality Check";
    this.asc = "You have requested a Reality Check.";
    this.qrl = "Press HISTORY to view your game history.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "No connection to the gaming server!";
    this.aar = "Connection attempts";
    this.lgr = "Login failed!";
    this.hfa = "Active session already exists!";
    this.sfc = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
qjj.prototype = new ubk;

function piu() {
    this.zub = "МИНИМАЛЬНАЯ СТАВКА -";
    this.cwl = "МАКС.|СТАВКА";
    this.ulo = "МИН.СТAВКА";
    this.ayb = "МАКС.СТAВКА";
    this.nbh = "СТАВКА";
    this.start = "СТАРТ";
    this.lrl = "ПОМОЩЬ";
    this.uuj = "ТАБЛИЦА ВЫПЛАТ";
    this.pdx = "МЕНЮ";
    this.jyi = "ДРУГИЕ|ИГРЫ";
    this.ncy = "СТОП";
    this.jzz = "КРЕДИТ";
    this.oex = "КОНЕЦ ИГРЫ";
    this.qta = "ПОБЕДИТЕЛЬ!";
    this.osx = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.zng = "ПОСЛЕД. ВЫИГРЫШ";
    this.szo = "выйгрыши";
    this.avn = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.xyv = "ЗАБРАТЬ ВЫИГРЫШ";
    this.esg = "ИГРА|НА|РИСК";
    this.dkj = "АВТО|ИГРА";
    this.sbv = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.uxb = "ВЫХОД";
    this.gaj = "НАЖМИТЕ СТАРТ";
    this.qmj = "ВЫБЕРИТЕ СТАВКУ";
    this.mmw = "ВЗЯТЬ|1/2";
    this.isk = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.abk = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.ioq = "Множитель для Бонуса";
    this.wfl = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.tex = "ОБЩИЙ ВЫИГРЫШ";
    this.tyl = "Загрузка ...";
    this.gse = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.wsl = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.lbx = "Достигнут один из лимитов!";
    this.gfa = "Внимание";
    this.yai = "ошибка обмена данных";
    this.zph = "Вы получили максимальное количество свободных игр!";
    this.cdf = "Игра заканчивается";
    this.ktu = "Игра начинается заново";
    this.dgw = "Бонус!";
    this.pic = "БОНУС";
    this.xts = "ВЫИГРЫШ";
    this.auo = "ВСЕГО";
    this.efq = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.xti = "FREEPLAY";
    this.alq = "ВЫБОР ИГРЫ";
    this.lsz = "GAME ID";
    this.wqs = "Playing Time";
    this.txw = "последняя";
    this.ciu = "игры";
    this.pqg = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.gkg = "МУЗЫКА";
    this.tvk = "СКОРОСТЬ";
    this.pgr = "ПОЛНОЭКРАННЫЙ";
    this.vyw = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.ngg = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.ynb = "ПРОДОЛЖИТЬ";
    this.hqf = "Больше не показывать";
    this.dmf = "АВТОИГРА";
    this.nei = "ТАБЛИЦА ВЫПЛАТ";
    this.zsj = "ИГРА НА РИСК";
    this.oso = "Звук не загружается!";
    this.cgr = "Ресурсы отсутствуют!";
    this.bdr = "Играть без звука?";
    this.cza = "НАСТРОЙКА";
    this.han = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.eex = "ПРАВО";
    this.aky = "АВТО";
    this.gjk = "V A L U E";
    this.pwx = "ИНФОРМАЦИЯ";
    this.ewj = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.tcg = "Настоящая игра оптимизирована для Google Chrome.";
    this.wuw = "Используйте, пожалуйста, актуальную версию";
    this.fhz = "К сожалению нет полной поддержки браузера.";
    this.std = "Запуск этой игры в режиме свободных игр невозможен!";
    this.rkb = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.idf = "Приспособь интерфейс к своим потребностям!";
    this.szx = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.tht = "Проверку реальности";
    this.asc = "Вы запросили проверку реальности.";
    this.qrl = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Нет связи с игровым сервером!";
    this.aar = "Попытки связи";
    this.lgr = "ошибка при входе в систему!";
    this.hfa = "Сеанс игры уже начался!";
    this.wxr = "ПРАВИЛА ИГРЫ";
    this.ssu = "ПРАВИЛА ИГРЫ";
    this.qqt = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.jat = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.zzz = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.zqw = "Статус";
    this.ghk = "количество игр";
    this.ukk = "вся ставка";
    this.rbu = "общий выигрыш";
    this.tpr = "общее время игры";
    this.edm = "Я сообщение прочитал.";
    this.sde = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.ygy = "История";
    this.kwu = "нет истории.";
    this.state = "STATE";
    this.fij = "Main Game";
    this.jku = "Auto Collected";
    this.shg = "Collected";
    this.oul = "Bonusspins";
    this.yya = "Gamble";
    this.dzu = "Half";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "First Deal";
    this.upa = "Second Deal";
    this.dqd = "Third Deal";
    this.qtd = "ИЗМЕНИТЬ";
    this.rob = "НАСТРОЙКА АВТОСТАРТА";
    this.ucq = "Количество игр:";
    this.tol = "Автостарт остановить";
    this.byv = "Кредит ниже, чем:";
    this.nvg = "Кредит выше, чем:";
    this.ttj = "Выигрыш выше, чем:";
    this.vxn = "Автостарт прерывается, если начинается бонусная игра.";
    this.wow = "Поделись в фейсбук";
    this.sfc = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
piu.prototype = new ubk;

function qpr() {
    this.zub = "APUESTA MÍNIMA ES";
    this.cwl = "APUESTA|MÁXIMA";
    this.ulo = "APUESTA MÍN.";
    this.ayb = "APUESTA MÁX.";
    this.nbh = "APUESTA";
    this.start = "JUGAR";
    this.lrl = "AYUDA";
    this.uuj = "PLAN DE|GANANCIAS";
    this.pdx = "MENU";
    this.jyi = "MAS|JUEGOS";
    this.ncy = "PARADA";
    this.jzz = "CREDITOS";
    this.oex = "FIN DEL JUEGO";
    this.qta = "¡GANADOR!";
    this.osx = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.zng = "ULTIMOS PREMIO";
    this.szo = "gana";
    this.avn = "COBRAR";
    this.xyv = "COBRAR";
    this.esg = "RIESGO";
    this.dkj = "AUTO|JUGAR";
    this.sbv = "MEDIA|APUESTA";
    this.of = "DE";
    this.uxb = "SALIR";
    this.gaj = "¡PULSE JUGAR!";
    this.qmj = "ELIJA SU APUESTA";
    this.mmw = "MITAD";
    this.isk = "PULSE UNA TECLA PARA CONTINUAR";
    this.abk = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.tex = "Premio total";
    this.tyl = "CARGANDO ...";
    this.gse = "CARGANDO HISTORIAL ...";
    this.wsl = "No hay bastante CREDITO";
    this.lbx = "¡Ha alcanzado uno de los limites!";
    this.gfa = "Advertencia";
    this.yai = "Error de comunicación";
    this.zph = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.cdf = "El juego se cerrará";
    this.ktu = "El juego se reiniciará";
    this.dgw = "¡BONUS!";
    this.pic = "BONUS";
    this.xts = "GANADO";
    this.auo = "TOTAL";
    this.mto = "TURBO SI";
    this.hnk = "TURBO NO";
    this.efq = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.xti = "FREEPLAY";
    this.alq = "MAS JUEGOS";
    this.lsz = "ID DE JUEGO";
    this.wqs = "Playing Time";
    this.txw = "ultimos";
    this.ciu = "juegos";
    this.pqg = "DEPÓSITO";
    this.audio = "AUDIO";
    this.gkg = "MÚSICA";
    this.tvk = "VELOCIDAD";
    this.pgr = "PANTALLA COMPLETA";
    this.vyw = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.ngg = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.ynb = "ADELANTE";
    this.hqf = "No mostrar de nuevo";
    this.dmf = "AUTOJUGAR";
    this.nei = "PLAN DE GANANCIAS";
    this.zsj = "RIESGO";
    this.oso = "No se pueden cargar los sonidos.";
    this.cgr = "Faltan recursos.";
    this.bdr = "¿Jugar sin sonido?";
    this.cza = "AJUSTES";
    this.gjk = "V A L U E";
    this.han = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.eex = "DERECHA";
    this.aky = "AUTOMÁTICO";
    this.pwx = "INFORMACIÓN";
    this.ewj = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.tcg = "Este juego está optimizado para Google Chrome.";
    this.wuw = "Use la versión actual de";
    this.fhz = "Desafortunadamente, este explorador no es compatible.";
    this.std = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.rkb = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.idf = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.szx = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.tht = "Reality Check";
    this.asc = "Has solicitado un Reality Check.";
    this.qrl = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "¡No hay conexión con el servidor de juegos!";
    this.aar = "Intentos de conexión";
    this.lgr = "¡No pudo iniciarse la sesión!";
    this.hfa = "¡Ya existe una sesión activa!";
    this.wxr = "REGLAS DEL JUEGO";
    this.ssu = "REGLAS|DEL JUEGO";
    this.qqt = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.jat = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.zzz = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.zqw = "ESTADO";
    this.ghk = "Número de juegos";
    this.ukk = "Apuesta total";
    this.rbu = "Ganancia total";
    this.tpr = "Tiempo total de juego";
    this.edm = "He leído el mensaje.";
    this.sde = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.ygy = "HISTORIAL";
    this.kwu = "Aún no hay juegos.";
    this.state = "Estado";
    this.fij = "Juego principal";
    this.jku = "Ganancia automática";
    this.shg = "Ganancia";
    this.oul = "BONUSSPINS";
    this.yya = "Apuesta";
    this.dzu = "Mitad";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "Primera mano";
    this.upa = "Segunda mano";
    this.dqd = "Tercera mano";
    this.qtd = "CANCELAR";
    this.rob = "CONFIGURACIONES DE JUEGO AUTOMÁTICO";
    this.ucq = "Cantidad de juegos:";
    this.tol = "Detener juego automático";
    this.byv = "Crédito menor que:";
    this.nvg = "Crédito mayor que:";
    this.ttj = "Ganancia mayor que:";
    this.vxn = "El juego automático se detendrá al principio del bonus.";
    this.wow = "Compartir en Facebook";
    this.sfc = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
qpr.prototype = new ubk;

function iee() {
    this.zub = "MINIMALER EINSATZ IST";
    this.cwl = "MAX. EINSATZ";
    this.ulo = "MIN. EINSATZ";
    this.ayb = "MAX. EINSATZ";
    this.nbh = "EINSATZ";
    this.start = "START";
    this.lrl = "HILFE";
    this.uuj = "GEWINNPLAN";
    this.pdx = "MENÜ";
    this.jyi = "MEHR|SPIELE";
    this.jzz = "GUTHABEN";
    this.oex = "SPIEL ENDE";
    this.qta = "GEWINNER!";
    this.osx = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.zng = "LETZTER GEWINN";
    this.szo = "gewinnt";
    this.avn = "NEHMEN";
    this.xyv = "NEHMEN";
    this.esg = "RISIKO";
    this.dkj = "AUTO|START";
    this.sbv = "HALF|GAMBLE";
    this.ncy = "STOP";
    this.of = "VON";
    this.uxb = "EXIT";
    this.gaj = "START DRÜCKEN";
    this.qmj = "EINSATZ WÄHLEN";
    this.mmw = "TEILEN";
    this.isk = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.abk = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.tex = "Gesamt Gewinn";
    this.tyl = "LÄDT ...";
    this.gse = "LÄDT HISTORIE ...";
    this.wsl = "NICHT GENUG GUTHABEN!";
    this.gfa = "Achtung";
    this.yai = "Kommunikationsfehler";
    this.lbx = "Sie haben eines der Limits erreicht!";
    this.zph = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.cdf = "Das Spiel wird beendet";
    this.ktu = "Das Spiel wird neu gestartet";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.xts = "GEWONNEN";
    this.auo = "TOTAL";
    this.efq = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.xti = "FREEPLAY";
    this.alq = "MEHR|SPIELE";
    this.lsz = "SPIEL ID";
    this.wqs = "Spielzeit";
    this.txw = "Letzten";
    this.ciu = "Spiele";
    this.pqg = "GUTHABEN";
    this.audio = "AUDIO";
    this.gkg = "MUSIK";
    this.tvk = "SPEED";
    this.pgr = "VOLLBILD";
    this.vyw = "VOLLBILD";
    this.language = "SPRACHE";
    this.ngg = "Bei Gerätestörung keine Haftung.";
    this.ynb = "WEITER";
    this.hqf = "Nicht noch einmal anzeigen";
    this.dmf = "AUTOSTART";
    this.zsj = "RISIKO";
    this.nei = "GEWINNPLAN";
    this.oso = "Sounds können nicht geladen werden!";
    this.cgr = "Ressourcen fehlen!";
    this.bdr = "Ohne Ton spielen?";
    this.cza = "EINSTELL.";
    this.han = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.eex = "RECHTS";
    this.aky = "AUTOM.";
    this.gjk = "V A L U E";
    this.pwx = "INFO";
    this.ewj = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.tcg = "Dieses Spiel ist optimiert für Google Chrome.";
    this.wuw = "Bitte benutzen sie die aktuelle Version von";
    this.fhz = "Leider wird dieser Browser nicht unterstützt.";
    this.std = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.rkb = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.idf = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.szx = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.tht = "Reality Check";
    this.asc = "Du hast einen Reality Check angefordert.";
    this.qrl = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.gxz = "Spielpause";
    this.bgm = "Spiellimits";
    this.brm = "Selbsttest";
    this.gsd = "Keine Verbindung zum Gameserver!";
    this.aar = "Verbindungsversuche";
    this.lgr = "Anmeldung fehlgeschlagen!";
    this.hfa = "Es ist bereits eine Session aktiv!";
    this.wxr = "SPIELREGELN";
    this.ssu = "SPIELREGELN";
    this.qqt = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.jat = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.zzz = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.zqw = "Statistik";
    this.ghk = "Anzahl der Spiele";
    this.ukk = "Gesamteinsatz";
    this.rbu = "Gesamtgewinn";
    this.tpr = "Gesamtspielzeit";
    this.edm = "Ich habe die Nachricht gelesen";
    this.sde = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.ygy = "Historie";
    this.kwu = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.fij = "Hauptspiel";
    this.jku = "Auto. Nehmen";
    this.shg = "Genommen";
    this.oul = "Bonusspins";
    this.yya = "Risiko";
    this.dzu = "Halb";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "Erster Deal";
    this.upa = "Zweiter Deal";
    this.dqd = "Dritter Deal";
    this.qtd = "ABBRUCH";
    this.rob = "AUTOSTART EINSTELLUNGEN";
    this.ucq = "Anzahl der Spiele: ";
    this.tol = "Autostart anhalten";
    this.byv = "Guthaben niedriger als:";
    this.nvg = "Guthaben höher als:";
    this.ttj = "Gewinn höher als:";
    this.vxn = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.wow = "Auf Facebook teilen";
    this.sfc = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
iee.prototype = new ubk;

function qri() {
    this.zub = "MINIMUM BANKO";
    this.cwl = "MAKS. BANKO";
    this.ulo = "MIN. BANKO";
    this.ayb = "MAKS. BANKO";
    this.nbh = "BANKO";
    this.start = "BAŞLAT";
    this.lrl = "YARDIM";
    this.uuj = "Kazanç planı";
    this.pdx = "MENÜ";
    this.jyi = "DAHA ÇOK|OYUN";
    this.ncy = "DUR";
    this.jzz = "KREDI";
    this.oex = "OYUN BİTTİ";
    this.qta = "KAZANDINIZ!";
    this.osx = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.zng = "SON KAZANÇ";
    this.szo = "kazanır";
    this.avn = "ALMAK";
    this.xyv = "ALMAK";
    this.esg = "RIZIKO";
    this.dkj = "OTOMATİK|BAŞLATMA";
    this.sbv = "YARI|RIZIKO";
    this.of = "VEREN";
    this.uxb = "ÇIKIŞ";
    this.gaj = "BAŞLAT TUŞUNA BASINIZ";
    this.qmj = "BANKO SEÇİNİZ";
    this.mmw = "ALMAK|1/2";
    this.isk = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.abk = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.tex = "Toplam kazanç";
    this.tyl = "YÜKLÜYOR ...";
    this.gse = "GEÇMIŞI YÜKLÜYOR ...";
    this.wsl = "YETERSİZ KREDİ.";
    this.lbx = "Limitlerin birine ulaştınız!";
    this.gfa = "Dikkat";
    this.yai = "İletişim hatası";
    this.zph = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.cdf = "Oyun sonlandırılıyor";
    this.ktu = "Oyun yeniden başlatılıyor";
    this.dgw = "Bedava oyun primi!";
    this.pic = "PRİM";
    this.xts = "KAZANDINIZ";
    this.auo = "TOPLAM";
    this.efq = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.xti = "FREEPLAY";
    this.alq = "DAHA ÇOK OYUN";
    this.lsz = "OYUN ID";
    this.wqs = "OYUN SÜRESİ";
    this.txw = "Son";
    this.ciu = "oyun";
    this.pqg = "BAKIYE";
    this.audio = "AUDIO";
    this.gkg = "MÜZIK";
    this.tvk = "HıZ";
    this.pgr = "TAM EKRAN";
    this.vyw = "TAM EKRAN";
    this.language = "LISAN";
    this.ngg = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.ynb = "DEVAM";
    this.hqf = "Tekrar gösterme";
    this.dmf = "OTOMATİK|BAŞLATMA";
    this.zsj = "RIZIKO";
    this.nei = "Kazanç planı";
    this.oso = "Sesler yüklenemiyorlar!";
    this.cgr = "Kaynaklar eksik!";
    this.bdr = "Sessiz oynayacak mısınız?";
    this.cza = "AYARLAR";
    this.han = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.eex = "SAĞ";
    this.aky = "OTOMATIK";
    this.gjk = "V A L U E";
    this.pwx = "BILGI";
    this.ewj = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.tcg = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.wuw = "'nin güncel versiyonunu kullanın";
    this.fhz = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.std = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.rkb = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.idf = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.szx = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.tht = "Reality Check";
    this.asc = "Reality Check talebinde bulundun.";
    this.qrl = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Oyun server'ine bağlantı yok!";
    this.aar = "Bağlantı denemeleri";
    this.lgr = "Giriş hatası!";
    this.hfa = "Aktif bir oturumunuz bulunuyor!";
    this.wxr = "OYUNUN KURALLARı";
    this.ssu = "OYUNUN|KURALLARı";
    this.qqt = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.jat = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.zzz = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.zqw = "İstatistik";
    this.ghk = "Toplam oyunlar";
    this.ukk = "Toplam bankolar";
    this.rbu = "Toplam kazançlar";
    this.tpr = "Toplam oyun süresi";
    this.edm = "Bu mesajı okudum.";
    this.sde = "OYUNU|KAPAT";
    this.ok = "OK";
    this.ygy = "GEÇMİŞ";
    this.kwu = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.fij = "Ana oyun";
    this.jku = "Otomatik olarak kazandınız";
    this.shg = "Toplandı";
    this.oul = "Prim oyunlar";
    this.yya = "Riziko";
    this.dzu = "Yarım";
    this.hui = "Respin";
    this.luy = "Prim";
    this.ysk = "İlk anlaşma";
    this.upa = "İkinci anlaşma";
    this.dqd = "Üçüncü anlaşma";
    this.qtd = "İPTAL";
    this.rob = "OTOMATIK BAŞLAT AYARLARı";
    this.ucq = "Oyun sayısı:";
    this.tol = "Otomatik başlatmayı durdur";
    this.byv = "Kredi bundan düşüktür:";
    this.nvg = "Kredi bundan yüksektir:";
    this.ttj = "Kazanç bundan yüksektir:";
    this.vxn = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.wow = "Facebook'ta paylaş";
    this.sfc = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
qri.prototype = new ubk;

function oqi() {
    this.zub = "MINIMÁLNÍ SÁZKA JE";
    this.cwl = "MAX. SÁZKA";
    this.ulo = "MIN. SÁZKA";
    this.ayb = "MAX. SÁZKA";
    this.nbh = "SÁZKA";
    this.start = "START";
    this.lrl = "POMOC";
    this.uuj = "VÝHERNÍ PLÁN";
    this.pdx = "MENU";
    this.jyi = "DALŠÍ|HRY";
    this.ncy = "STOP";
    this.jzz = "KREDIT";
    this.oex = "KONEC HRY";
    this.qta = "VÍTEZ!";
    this.osx = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.zng = "POSL. VÝHRA";
    this.szo = "vyhrává";
    this.avn = "VEZMI";
    this.xyv = "VEZMI";
    this.esg = "HRA";
    this.dkj = "AUTO|START";
    this.sbv = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.uxb = "VÝSTUP";
    this.gaj = "START HRY";
    this.qmj = "VYBRAT SÁZKU";
    this.mmw = "POLOVINA";
    this.isk = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.abk = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.tex = "Celková výhra";
    this.tyl = "NAHRÁVÁM ...";
    this.gse = "NAHRÁVÁM HISTORII ...";
    this.wsl = "Nedostatecný kredit.";
    this.lbx = "Dosáhli jste jednoho z limitů!";
    this.gfa = "Varování";
    this.yai = "Chyba komunikace";
    this.zph = "Dosáhli jste maximálního počtu her zdarma!";
    this.cdf = "Hra se zavře";
    this.ktu = "Hra se restartuje";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.xts = "VYHRÁL";
    this.auo = "CELKOVÁ";
    this.efq = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.xti = "FREEPLAY";
    this.alq = "DALŠÍ HRY";
    this.lsz = "ID HRY";
    this.wqs = "HRACÍ DOBA";
    this.txw = "Poslední";
    this.ciu = "hry";
    this.pqg = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.gkg = "MUZIKA";
    this.tvk = "RYCHLOST";
    this.pgr = "FULLSCREEN";
    this.vyw = "FULLSCREEN";
    this.language = "ŘEČ";
    this.ngg = "Při poruše jsou všechny hry a výhry neplatné.";
    this.ynb = "POKRAČUJ";
    this.hqf = "Nezobrazujte znovu";
    this.dmf = "AUTOSTART";
    this.zsj = "HRA";
    this.nei = "VÝHERNÍ PLÁN";
    this.oso = "Zvuk nelze nahrát!";
    this.cgr = "Chybí zdroje!";
    this.bdr = "Hrát bez zvuku?";
    this.cza = "NASTAVENÍ";
    this.gjk = "V A L U E";
    this.han = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.eex = "VPRAVO";
    this.aky = "AUTO";
    this.pwx = "INFORMACE";
    this.ewj = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.tcg = "Tato hra je optimalizovaná pro Google Chrome.";
    this.wuw = "Použijte aktuální verzi";
    this.fhz = "Tento prohlížeč není bohužel plně podporován.";
    this.std = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.rkb = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.idf = "Nastavte rozhraní hry svým potřebám!";
    this.szx = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.tht = "Reality Check";
    this.asc = "Požádali jste o kontrolu reality.";
    this.qrl = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Žádné připojení k hernímu serveru!";
    this.aar = "Pokusy o připojení";
    this.lgr = "Přihlášení se nezdařilo!";
    this.hfa = "Aktivní relace již existuje!";
    this.wxr = "PRAVIDLA HRY";
    this.ssu = "PRAVIDLA HRY";
    this.qqt = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.jat = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.zzz = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.zqw = "Statistika";
    this.ghk = "Celkem hry";
    this.ukk = "Celkem sázky";
    this.rbu = "Celkem výhry";
    this.tpr = "Celková hrací doba";
    this.edm = "Zprávu jsem četl/a.";
    this.sde = "UKONČIT|HRU";
    this.ok = "OK";
    this.ygy = "HISTORIE";
    this.kwu = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.fij = "Hlavní hra";
    this.jku = "Automaticky vybráno";
    this.shg = "Vybráno";
    this.oul = "Bonusspins";
    this.yya = "Hra";
    this.dzu = "Polovina";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "První vyložení";
    this.upa = "Druhé vyložení";
    this.dqd = "Třetí vyložení";
    this.qtd = "ZRUŠIT";
    this.rob = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.ucq = "Množství her:";
    this.tol = "Zastavit automatický start";
    this.byv = "Kredit nižší než:";
    this.nvg = "Kredit vyšší než:";
    this.ttj = "Výhra vyšší než:";
    this.vxn = "Automatický start se zastaví na začátku bonusu.";
    this.wow = "Sdílet na Facebooku";
    this.sfc = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
oqi.prototype = new ubk;

function uou() {
    this.zub = "MIINIMUMPANUS ON";
    this.cwl = "MAX PANUS";
    this.ulo = "MIN PANUS";
    this.ayb = "MAX PANUS";
    this.nbh = "PANUS";
    this.start = "START";
    this.lrl = "ABI";
    this.uuj = "VÕIDU TABEL";
    this.pdx = "MENÜÜ";
    this.jyi = "VALI|MÄNG";
    this.ncy = "STOPP";
    this.jzz = "KREDIIT";
    this.oex = "MÄNG ON LÕPPENUD!";
    this.qta = "OLED VÕITNUD!";
    this.osx = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.zng = "EELMINE VÕIT";
    this.avn = "VÕTA|VÕIT";
    this.xyv = "VÕTA VÕIT";
    this.esg = "DUUBEL|DAMINE";
    this.dkj = "AUTO|START";
    this.sbv = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.uxb = "VÄLJA";
    this.gaj = "ALUSTA MÄNGU";
    this.qmj = "VALI PANUS";
    this.mmw = "POOLIK";
    this.isk = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.tex = "Koguvõit";
    this.wsl = "POLE PIISAVALT KREDIITI.";
    this.dgw = "Boonus!";
    this.pic = "BOONUS";
    this.efq = "PALUN OODAKE ...";
    this.alq = "Vali Mäng";
    this.audio = "HELI";
    this.gkg = "MUUSIKA";
    this.tvk = "KIIRUS";
    this.pgr = "TÄISEKRAAN";
    this.vyw = "TÄISEKRAAN";
    this.ngg = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.xib = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.wxr = "MÄNGUREEGLID";
    this.ssu = "MÄNGUREEGLID";
    this.tyl = "LAADIMINE ...";
    this.gse = "AJALOO LAADIMINE ...";
    this.lbx = "Oled saavutanud ühe limiitidest!";
    this.gfa = "Hoiatus";
    this.yai = "Ühenduse viga";
    this.zph = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.cdf = "Mäng suletakse";
    this.ktu = "Mäng taaskäivitatakse";
    this.abk = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.cza = "SÄTTED";
    this.gjk = "V A L U E";
    this.han = "Pöörake oma seadet!";
    this.pwx = "INFO";
    this.ewj = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.tcg = "See mäng on optimeeritud Google Chrome jaoks.";
    this.wuw = "Palun kasutage praeguse versiooni";
    this.fhz = "Kahjuks ei toetata seda brauserit täielikult.";
    this.std = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.eex = "PAREM";
    this.aky = "AUTOMAATNE";
    this.xts = "VÕITIS";
    this.szo = "võidetud";
    this.auo = "KOKKU";
    this.error = "VIGA";
    this.xti = "TASUTA MÄNG";
    this.lsz = "MÄNGU ID";
    this.wqs = "MÄNGUAEG";
    this.txw = "Viimased";
    this.ciu = "mängu";
    this.pqg = "SISSEMAKSE";
    this.qqt = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.jat = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.zzz = "RISKI, ET SUURENDADA OMA VÕITU";
    this.zqw = "Statistika";
    this.ghk = "Mänge kokku";
    this.ukk = "Kogupanus";
    this.rbu = "Koguvõit";
    this.tpr = "Mänguaeg kokku";
    this.edm = "Olen seda teadet lugenud.";
    this.sde = "MÄNGU|LÕPP";
    this.ygy = "Ajalugu";
    this.kwu = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.fij = "Põhimäng";
    this.jku = "Automaatne väljavõtt";
    this.shg = "Välja võetud";
    this.oul = "Bonusspins";
    this.yya = "Gamble";
    this.dzu = "Pool";
    this.hui = "Respin";
    this.luy = "Boonus";
    this.ysk = "Esimene jagamine";
    this.upa = "Teine jagamine";
    this.dqd = "Kolmas jagamine";
    this.ynb = "JÄTKA";
    this.hqf = "Ära seda enam näita";
    this.dmf = "AUTOSTART";
    this.zsj = "DUUBEL DAMINE";
    this.nei = "VÕIDU TABEL";
    this.oso = "Helisid ei saa laadida!";
    this.cgr = "Ressursid puuduvad!";
    this.bdr = "Soovid mängida ilma helideta?";
    this.rkb = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.idf = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.szx = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.qtd = "TÜHISTA";
    this.rob = "AUTOMAATKÄIVITUSE SÄTTED";
    this.ucq = "Mängude arv:";
    this.tol = "Peata automaatkäivitus";
    this.byv = "Krediit madalam kui:";
    this.nvg = "Krediit kõrgem kui:";
    this.ttj = "Võit suurem kui:";
    this.vxn = "Automaatkäivitus peatatakse boonuse alguses.";
    this.wow = "Jaga Facebookis";
    this.ok = "OK";
    this.tht = "Reality Check";
    this.asc = "Olete soovinud reaalsuskontrolli.";
    this.qrl = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Puudub ühendus mänguserveriga!";
    this.aar = "Ühenduskatsed";
    this.lgr = "Sisselogimine nurjus!";
    this.hfa = "Aktiivne seanss on juba olemas!";
    this.sfc = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
uou.prototype = new ubk;

function kfl() {
    this.zub = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.cwl = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.ulo = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.ayb = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.nbh = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.lrl = "ΒΟHΘΕΙΑ";
    this.uuj = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.pdx = "ΜΕΝΟY";
    this.jyi = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.ncy = "ΣΤΟΠ";
    this.jzz = "ΠIΣΤΩΣΗ";
    this.oex = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.qta = "ΝΙΚΗΤΗΣ!";
    this.osx = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.zng = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.avn = "ΠΑΡΑΛΑΒH";
    this.xyv = "ΠΑΡΑΛΑΒH";
    this.esg = "ΤΖΟΓAΡΩ";
    this.dkj = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.sbv = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.uxb = "EΞΟΔΟΣ";
    this.gaj = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.qmj = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.mmw = "ΠΑΡΑΛΑΒH|1/2";
    this.isk = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.tex = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.wsl = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.dgw = "Μπόνουσ!";
    this.pic = "ΜΠOΝΟΥΣ";
    this.efq = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.alq = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.gkg = "ΜΟΥΣΙΚΉ";
    this.tvk = "ΤΑΧYΤΗΤΑ";
    this.pgr = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.vyw = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.ngg = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.auo = "ΣYΝΟΛΟ";
    this.wxr = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.ssu = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.tyl = "ΦΟΡΤΩΣΗ ...";
    this.gse = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.lbx = "Ξεπεράσατε κάποιο όριο!";
    this.gfa = "Προειδοποίηση";
    this.yai = "Σφάλμα επικοινωνίας";
    this.zph = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.cdf = "Το παιχνίδι θα τερματιστεί";
    this.ktu = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.abk = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.cza = "ΡΥΘΜΙΣΕΙΣ";
    this.gjk = "V A L U E";
    this.han = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.pwx = "ΠΛΗΡΟΦΟΡΊΕς";
    this.ewj = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.tcg = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.wuw = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.fhz = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.std = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.eex = "ΔΕΞΙA";
    this.aky = "AΥΤOΜΑΤΟ";
    this.xts = "ΚEΡΔΙΣΕ";
    this.szo = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.xti = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.lsz = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.wqs = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.txw = "Τελευταία";
    this.ciu = "παιχνίδια";
    this.pqg = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.qqt = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.jat = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.zzz = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.zqw = "Στατιστικά";
    this.ghk = "Σύνολο παιχνιδιών";
    this.ukk = "Συνολικό ποντάρισμα";
    this.rbu = "Συνολικό κέρδος";
    this.tpr = "Συνολικός χρόνος παιχνιδιού";
    this.edm = "Eχω διαβάσει το μήνυμα.";
    this.sde = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.ygy = "ΙΣΤΟΡΙΚΟ";
    this.kwu = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.fij = "Κύριο παιχνίδι";
    this.jku = "Αυτόματη λήψη";
    this.shg = "Ελήφθησαν";
    this.oul = "Bonusspins";
    this.yya = "Τζογάρω";
    this.dzu = "Hμισυ";
    this.hui = "Respin";
    this.luy = "Μπόνουσ";
    this.ysk = "Πρώτο μοίρασμα";
    this.upa = "Δεύτερο μοίρασμα";
    this.dqd = "Τρίτο μοίρασμα";
    this.ynb = "ΣΥΝΈΧΕΙΑ";
    this.hqf = "Να μην προβληθεί ξανά";
    this.dmf = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.zsj = "ΤΖΟΓAΡΩ";
    this.nei = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.oso = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.cgr = "Λείπουν πόροι!";
    this.bdr = "Παιχνίδι χωρίς ήχο?";
    this.rkb = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.idf = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.szx = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.qtd = "ΑΚΎΡΩΣΗ";
    this.rob = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.ucq = "Αριθμός παιχνιδιών:";
    this.tol = "Διακοπή autostart";
    this.byv = "Μονάδες χαμηλότερα από:";
    this.nvg = "Μονάδες υψηλότερες από:";
    this.ttj = "Κέρδος υψηλότερο από:";
    this.vxn = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.wow = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.tht = "έλεγχο πραγματικότητας";
    this.asc = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.qrl = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Δεν υπάρχει σύνδεση με το διακομιστή παιχνιδιού!";
    this.aar = "Προσπάθειες σύνδεσης";
    this.lgr = "Η σύνδεση απέτυχε!";
    this.hfa = "Η ενεργή συνεδρία υπάρχει ήδη!";
    this.sfc = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
kfl.prototype = new ubk;

function zfq() {
    this.zub = "МИН. ЗАЛОГ Е";
    this.cwl = "МАКС. ЗАЛОГ";
    this.ulo = "МИНИМ. ЗАЛОГ";
    this.ayb = "МАКС. ЗАЛОГ";
    this.nbh = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.lrl = "ПОМОЩ";
    this.uuj = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.pdx = "МЕНЮ";
    this.jyi = "ПОВЕЧЕ|ИГРИ";
    this.ncy = "СТОП";
    this.jzz = "КРЕДИТ";
    this.oex = "ИГРАТА ЗАВЪРШИ";
    this.qta = "ПЕЧЕЛИТЕ!";
    this.osx = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.zng = "ПОСЛ.ПЕЧАЛБА";
    this.avn = "ПРИБИРАНЕ";
    this.xyv = "ПРИБИРАНЕ";
    this.esg = "ДУБЛИРАНЕ";
    this.dkj = "АВТО|СТАРТ";
    this.sbv = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.uxb = "ИЗХОД";
    this.gaj = "ЗАПОЧНЕТЕ ИГРАТА";
    this.qmj = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.mmw = "ДЕЛЕНЕ";
    this.isk = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.tex = "ОБЩА ПЕЧАЛБА";
    this.wsl = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.dgw = "Бонус!";
    this.pic = "БОНУС";
    this.efq = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.alq = "Повече Игри";
    this.tvk = "ТУРБО";
    this.ngg = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.wxr = "ПРАВИЛА НА ИГРАТА";
    this.ssu = "ПРАВИЛА|НА ИГРАТА";
    this.tyl = "ЗАРЕЖДАНЕ ...";
    this.gse = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.lbx = "Достигна един от лимитите!";
    this.gfa = "Предупреждение";
    this.yai = "Комуникационна грешка";
    this.zph = "Достигнали сте максималния брой безплатни игри!";
    this.cdf = "Играта ще бъде затворена";
    this.ktu = "Играта ще бъде рестартирана";
    this.abk = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.cza = "НАСТРОЙКИ";
    this.gjk = "V A L U E";
    this.han = "Моля, включете устройството!";
    this.pwx = "ИНФОРМАЦИЯ";
    this.ewj = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.tcg = "Тази игра е оптимизирана за Google Chrome.";
    this.wuw = "Моля, използвайте текущата версия на";
    this.fhz = "За съжаление този браузър не се поддържа напълно.";
    this.std = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.eex = "ДЯСНА";
    this.aky = "АВТО";
    this.xts = "СПЕЧЕЛЕНО";
    this.szo = "печалби";
    this.auo = "ОБЩО";
    this.error = "ГРЕШКА";
    this.xti = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.gkg = "МУЗИКА";
    this.pgr = "ПЪЛЕН ЕКРАН";
    this.vyw = "ПЪЛЕН|ЕКРАН";
    this.lsz = "ИД НА ИГРА";
    this.wqs = "ВРЕМЕ НА ИГРА";
    this.txw = "Последни";
    this.ciu = "игри";
    this.pqg = "ДЕПОЗИТ";
    this.qqt = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.jat = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.zzz = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.zqw = "Статистика";
    this.ghk = "Общо игри";
    this.ukk = "Общо залог";
    this.rbu = "Общо печалби";
    this.tpr = "Общо време на игра";
    this.edm = "Прочетох това съобщение.";
    this.sde = "ИЗХОД|ОТ|ИГРАТА";
    this.ygy = "ИСТОРИЯ";
    this.kwu = "Няма играни игри.";
    this.state = "СТАТУС";
    this.fij = "Основна игра";
    this.jku = "Автоматично събрани";
    this.shg = "Събрани";
    this.oul = "Бонус-игри";
    this.yya = "Дублиране";
    this.dzu = "Половина";
    this.hui = "Respin";
    this.luy = "Бонус";
    this.ysk = "Първо раздаване";
    this.upa = "Второ раздаване";
    this.dqd = "Трето раздаване";
    this.ynb = "ПРОДЪЛЖЕНИЕ";
    this.hqf = "Не показвай отново";
    this.dmf = "AUTOSTART";
    this.zsj = "ДУБЛИРАНЕ";
    this.nei = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.oso = "Звукът не може да бъде зареден!";
    this.cgr = "Липсват ресурси!";
    this.bdr = "Игра без звук?";
    this.rkb = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.idf = "Настройте интерфейса на играта според своите нужди!";
    this.szx = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.qtd = "ИЗЧИСТВАНЕ";
    this.rob = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.ucq = "Брой игри:";
    this.tol = "Спри автоматичния старт";
    this.byv = "Кредит по-малък от:";
    this.nvg = "Кредит по-висок от:";
    this.ttj = "Спечели повече от:";
    this.vxn = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.wow = "Сподели във Facebook";
    this.ok = "OK";
    this.tht = "Reality Check";
    this.asc = "Заявили сте проверка на реалността.";
    this.qrl = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Няма връзка с гейминг сървъра!";
    this.aar = "Опити за свързване";
    this.lgr = "Неуспешно влизане!";
    this.hfa = "Вече съществува активна сесия!";
    this.sfc = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
zfq.prototype = new ubk;

function bnc() {
    this.zub = "მინიმალური ფსონი არის";
    this.cwl = "მაქსიმალური ფსონი";
    this.ulo = "მინიმალური ფსონი";
    this.ayb = "მაქსიმალური ფსონი";
    this.nbh = "ფსონი";
    this.start = "დაწყება";
    this.lrl = "დახმარება";
    this.uuj = "გადახდის მრიცხველი";
    this.pdx = "მენიუ";
    this.jyi = "მეტი|თამაშები";
    this.ncy = "გაჩერება";
    this.jzz = "კრედიტი";
    this.oex = "თამაში დასრულებულია";
    this.qta = "გამარჯვებული!";
    this.osx = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.zng = "ბოლო მოგება";
    this.avn = "შეგროვება";
    this.xyv = "შეგროვება";
    this.esg = "აზარტი";
    this.dkj = "ავტო|დაწყება";
    this.sbv = "ნახევარი";
    this.uxb = "გამოსვლა";
    this.gaj = "თამაშის დაწყება";
    this.qmj = "აირჩიეთ ფსონი";
    this.mmw = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.tex = "მთლიანი მოგება";
    this.gfa = "გაფრთხილება";
    this.auo = "მთლიანი";
    this.efq = "გთხოვთ, დაელოდოთ ...";
    this.alq = "მეტი თამაშები";
    this.tvk = "ტურბო";
    this.ngg = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.ynb = "გაგრძელება";
    this.dmf = "ავტო დაწყება";
    this.nei = "გადახდის მრიცხველი";
    this.zsj = "აზარტი";
    this.left = "მარცხნივ";
    this.eex = "მარჯვნივ";
    this.aky = "ავტომატურად";
    this.ok = "კი";
    this.qtd = "გაუქმება";
    this.yya = "აზარტი";
    this.dzu = "ნახევარი";
    this.wxr = "თამაშის წესები";
    this.ssu = "თამაშის წესები";
    this.dgw = "BONUS!";
    this.pic = "ბონუს";
    this.isk = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.wsl = "არა საკმარისი კრედიტი.";
    this.abk = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.tyl = "ჩატვირთვის  ...";
    this.gse = "ჩატვირთვის  ისტორია  ...";
    this.yai = "საკომუნიკაციო შეცდომა";
    this.lbx = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.zph = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.cdf = "თამაში დასრულდება";
    this.ktu = "თამაში გადაიტვირთება";
    this.xts = "მოგებულია";
    this.szo = "wins";
    this.gjk = "V A L U E";
    this.error = "შეცდომა";
    this.xti = "უფასო თამაში";
    this.lsz = "თამაშის  ნომერი";
    this.wqs = "სათამაშო დრო";
    this.txw = "ბოლო ";
    this.ciu = "თამაშები";
    this.pqg = "დეპოზიტი";
    this.audio = "ხმა";
    this.gkg = "მუსიკა";
    this.pgr = "სრული ეკრანი";
    this.vyw = "სრული ეკრანი";
    this.language = "ენის";
    this.hqf = "მომავალში აღარ ჩვენება";
    this.oso = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.cgr = "არასაკმარისი რესურსები!";
    this.bdr = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.han = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.ewj = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.tcg = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.ocu = "გთხოვთ გამოიყენოთ";
    this.muo = "-ის მიმდინარე ვერსია";
    this.fhz = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.std = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.rkb = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.idf = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.qqt = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.jat = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.zzz = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.ghk = "მთლიანი თამაშები";
    this.ukk = "ფსონი მთლიანად";
    this.rbu = "მთლიანი მოგება";
    this.tpr = "მთლიანი სათამაშო დრო";
    this.edm = "მე გავეცანი ამ გზავნილს.";
    this.sde = "თამაშის|დამთავრება";
    this.ygy = "მოვლენების ჩანაწერი";
    this.kwu = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.fij = "ძირითადი თამაში";
    this.jku = "ავტომატურად შეგროვება";
    this.shg = "აღებულ იქნა";
    this.ysk = "პირველი დარიგება";
    this.upa = "მეორე დარიგება";
    this.dqd = "მესამე დარიგება";
    this.rob = "ავტოგამშვების პარამეტრები";
    this.ucq = "თამაშების რაოდენობა:";
    this.tol = "შეაჩერეთ ავტოგამშვები";
    this.byv = "კრედიტი უფრო დაბალი ვიდრე:";
    this.nvg = "კრედიტი უფრო მაღალი ვიდრე:";
    this.ttj = "მოიგეთ უფრო მეტი ვიდრე:";
    this.vxn = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.wow = "გააზიარეთ ფეისბუქზე";
    this.zqw = "სტატისტიკა";
    this.of = "/";
    this.oul = "Bonus თამაში";
    this.luy = "ბონუსი";
    this.pwx = "ინფორმაცია";
    this.cza = "პარამეტრ.";
    this.hui = "ხელახლა დატრიალების";
    this.szx = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.tht = "რეალობის შემოწმება";
    this.asc = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.qrl = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "სათამაშო სერვერზე დაკავშირება ვერ მოხერხდა!";
    this.aar = "დაკავშირების მცდელობები";
    this.lgr = "შესვლა ვერ მოხერხდა!";
    this.hfa = "აქტიური სესია უკვე არსებობს!";
    this.sfc = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
bnc.prototype = new ubk;

function tvc() {
    this.zub = "A MINIMUM TÉT";
    this.cwl = "MAXIMUM TÉT";
    this.ulo = "MIN. TÉT";
    this.ayb = "MAX. TÉT";
    this.nbh = "TÉT";
    this.start = "START";
    this.lrl = "SÚGÓ";
    this.uuj = "SÚGÓ";
    this.pdx = "MENÜ";
    this.jyi = "MENÜ";
    this.ncy = "STOP";
    this.jzz = "HITEL";
    this.oex = "A JÁTÉKNAK VÉGE";
    this.qta = "NYEREMÉNY!";
    this.osx = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.zng = "UTOLSÓ NYER.";
    this.avn = "FELÍR";
    this.xyv = "FELÍR";
    this.esg = "SZORZÁS";
    this.dkj = "AUTO|START";
    this.sbv = "FELEZÉS";
    this.uxb = "KILÉPÉS";
    this.gaj = "START";
    this.qmj = "VÁLASSZON TÉTET";
    this.mmw = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.tex = "Összes Nyeremény";
    this.gfa = "Figyelmeztetés";
    this.auo = "ÖSSZES";
    this.efq = "KÉREM VÁRJON ...";
    this.alq = "Menü";
    this.tvk = "SEBESSÉG";
    this.ngg = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.ynb = "TOVÁBB";
    this.dmf = "AUTOSTART";
    this.nei = "SÚGÓ";
    this.zsj = "SZORZÁS";
    this.left = "BAL";
    this.eex = "JOBB";
    this.ok = "OK";
    this.qtd = "MÉGSEM";
    this.yya = "Szorzás";
    this.dzu = "Felezés";
    this.wxr = "JÁTÉKSZABÁLYOK";
    this.ssu = "JÁTÉKSZABÁLYOK";
    this.dgw = "Bónusz!";
    this.pic = "BÓNUSZ";
    this.isk = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.wsl = "NINCS ELÉG HITEL";
    this.gjk = "V A L U E";
    this.szo = "nyeremények";
    this.of = "/";
    this.abk = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.tyl = "BETÖLTÉSE ...";
    this.gse = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.yai = "Kommunikációs hiba";
    this.lbx = "Elérte az egyik limitet!";
    this.zph = "Elérte a szabad játékok maximum számát!";
    this.cdf = "A játék megállítva";
    this.ktu = "Játék újraindul";
    this.xts = "NYERT";
    this.error = "HIBA";
    this.xti = "FREEPLAY";
    this.aky = "AUTO";
    this.lsz = "JÁTÉK ID";
    this.wqs = "Játék Idő";
    this.txw = "utolsó";
    this.ciu = "játék";
    this.pqg = "HITEL";
    this.audio = "HANG";
    this.gkg = "ZENE";
    this.pgr = "TELJES KÉPERNYŐ";
    this.vyw = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.hqf = "Ne mutassa mégegyszer";
    this.oso = "A hangot nem lehet betölteni!";
    this.cgr = "Források hiányoznak!";
    this.bdr = "Játék hang nélkül?";
    this.cza = "BEÁLLÍTÁS";
    this.han = "Kérjük fordítsa el a készüléket!";
    this.pwx = "INFÓ";
    this.ewj = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.tcg = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.ocu = "Kérjük használja a(z)";
    this.muo = " legújabb verzióját!";
    this.fhz = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.std = "Ez a játék nem indítható FreePlay módban!";
    this.rkb = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.idf = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.qqt = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.jat = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.zzz = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.zqw = "Statisztika";
    this.ghk = "Összes Játék";
    this.ukk = "Összes Tét";
    this.rbu = "Összes Nyeremény";
    this.tpr = "Összes Játék Idő";
    this.edm = "Elolvastam az üzenetet.";
    this.sde = "KILÉPÉS";
    this.ygy = "Előzmények";
    this.kwu = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.fij = "Fő Játék";
    this.jku = "Autom. Felírás";
    this.shg = "Felírva";
    this.oul = "Bónusz játék";
    this.hui = "Respin";
    this.luy = "Bónusz";
    this.ysk = "Első Leosztás";
    this.upa = "Második Leosztás";
    this.dqd = "Harmadik Leosztás";
    this.rob = "AUTOSTART BEÁLLÍTÁS";
    this.ucq = "Játékok száma:";
    this.tol = "Stop autostart";
    this.byv = "A hitel kevesebb, mint:";
    this.nvg = "A hitel több, mint:";
    this.ttj = "A nyeremény több, mint:";
    this.vxn = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.wow = "Megosztás a Facebook-on";
    this.szx = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.tht = "Reality Check";
    this.asc = "Ön egy valóság-ellenőrzést kért.";
    this.qrl = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Nincs kapcsolat a játék-szerverrel!";
    this.aar = "Kapcsolódási próbálkozás";
    this.lgr = "Bejelentkezési hiba!";
    this.hfa = "Egy szekció már aktív!";
    this.sfc = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
tvc.prototype = new ubk;

function yxa() {
    this.zub = "MIZA MINIMĂ ESTE";
    this.cwl = "MIZA MAXIMĂ";
    this.ulo = "MIZA MIN.";
    this.ayb = "MIZA MAX.";
    this.nbh = "MIZĂ";
    this.start = "START";
    this.lrl = "AJUTOR";
    this.uuj = "LISTA|CÂŞTIGURI";
    this.pdx = "MENIU";
    this.jyi = "MENIUL|JOCULUI";
    this.ncy = "STOP";
    this.jzz = "CREDIT";
    this.oex = "SFÂRŞIT JOCUL";
    this.qta = "CÂŞTIGĂTOR!";
    this.osx = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.zng = "ULTIMUL CÂŞTIG";
    this.avn = "COLECTA";
    this.xyv = "COLECTA";
    this.esg = "JOC";
    this.dkj = "AUTO|START";
    this.sbv = "COLECTARE|1/2";
    this.uxb = "IEŞIRE";
    this.gaj = "APĂSAŢI START";
    this.qmj = "ALEGEŢI MIZA";
    this.mmw = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.tex = "Câştig total";
    this.gfa = "Avertizare";
    this.auo = "TOTAL";
    this.efq = "AŞTEPTAŢI VĂ ROG ...";
    this.alq = "Meniul Jocului";
    this.tvk = "VITEZĂ";
    this.ngg = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.ynb = "CONTINUARE";
    this.dmf = "AUTOSTART";
    this.nei = "LISTA CÂŞTIGURI";
    this.zsj = "JOC";
    this.left = "STÂNGA";
    this.eex = "DREAPTA";
    this.ok = "OK";
    this.qtd = "ÎNTRERUPERE";
    this.yya = "Joc";
    this.dzu = "Colectare 1/2";
    this.wxr = "REGULILE JOCULUI";
    this.ssu = "REGULILE|JOCULUI";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.isk = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.wsl = "CREDIT INSUFICIENT.";
    this.szo = "câştigă";
    this.gjk = "V A L U E";
    this.of = "DIN";
    this.abk = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.tyl = "ÎNCARCĂ ...";
    this.gse = "ÎNCARCĂ ISTORIC ...";
    this.yai = "Eroare de comunicare";
    this.lbx = "Aţi atins una dintre limite!";
    this.zph = "Aţi atins numărul maxim de jocuri gratis!";
    this.cdf = "Jocul se încheie";
    this.ktu = "Jocul se restartează";
    this.xts = "CÂŞTIGAT";
    this.error = "EROARE";
    this.xti = "FREEPLAY";
    this.aky = "AUTO";
    this.lsz = "ID JOC";
    this.wqs = "TIMP DE JOC";
    this.txw = "ultimele";
    this.ciu = "jocuri";
    this.pqg = "CREDIT";
    this.audio = "AUDIO";
    this.gkg = "MUZICĂ";
    this.pgr = "ECRAN COMPLET";
    this.vyw = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.hqf = "Nu reafișați";
    this.oso = "Sunetele nu pot fi încărcate!";
    this.cgr = "Lipsesc resurse!";
    this.bdr = "Jucaţi fără sunet?";
    this.cza = "SETĂRI";
    this.han = "Vă rugăm opriţi aparatul!";
    this.pwx = "INFO";
    this.ewj = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.tcg = "Acest joc este optimizat pentru Google Chrome.";
    this.wuw = "Vă rugăm utilizaţi versiunea actuală";
    this.fhz = "Din păcate acest browser nu este sprijinit complet.";
    this.std = "Acest joc nu poate fi pornit în modul freeplay!";
    this.rkb = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.idf = "Ajustează interfaţa de joc nevoilor dvs!";
    this.qqt = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.jat = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.zzz = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.zqw = "Statistică";
    this.ghk = "Număr jocuri";
    this.ukk = "Pariuri totale";
    this.rbu = "Câştig total";
    this.tpr = "Timp total de joc";
    this.edm = "Am citit mesajul.";
    this.sde = "ÎNCHEIERE|JOC";
    this.ygy = "ISTORIC";
    this.kwu = "Nu există jocuri.";
    this.state = "STATUT";
    this.fij = "Joc principal";
    this.jku = "Auto colectare";
    this.shg = "Colectat";
    this.oul = "Bonusspins";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "Primul Deal";
    this.upa = "Al doilea deal";
    this.dqd = "Al treilea deal";
    this.rob = "SETĂRI AUTOSTART";
    this.ucq = "Numărul jocurilor:";
    this.tol = "Oprire autostart";
    this.byv = "Credit sub:";
    this.nvg = "Credit peste:";
    this.ttj = "Câștig peste:";
    this.vxn = "Autostart se va opti la începerea bonusului.";
    this.wow = "Distribuie Facebook";
    this.szx = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.tht = "Reality Check";
    this.asc = "Ai cerut un Reality Check.";
    this.qrl = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Fără conexiune la serverul de jocuri!";
    this.aar = "Tentative de conectare";
    this.lgr = "Conectare nereuşită!";
    this.hfa = "Există deja o sesiune activă!";
    this.sfc = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
yxa.prototype = new ubk;

function ush() {
    this.zub = "MÍNIMA APOSTA É";
    this.cwl = "MÁX. APOSTA";
    this.ulo = "MÍN. APOSTA";
    this.ayb = "MÁX. APOSTA";
    this.nbh = "APOSTA";
    this.start = "PARTIDA";
    this.lrl = "AJUDA";
    this.uuj = "ESQUEMA|DE PAGOS";
    this.pdx = "MENU";
    this.jyi = "SELEÇÃO|DE JOGOS";
    this.ncy = "PARADA";
    this.jzz = "CRÉDITO";
    this.oex = "FIM DO JOGO";
    this.qta = "VENCEDOR!";
    this.osx = "BOA SORTE!";
    this.win = "GANHO";
    this.zng = "ULTIMO GANHO";
    this.avn = "COLETAR";
    this.xyv = "COLETAR";
    this.esg = "JOGADA";
    this.dkj = "AUTO|PARTIDA";
    this.sbv = "METADE";
    this.uxb = "SAÍDA";
    this.gaj = "PREMIR PARTIDA";
    this.qmj = "SELECIONAR APOSTA";
    this.mmw = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.tex = "Ganho total";
    this.gfa = "Aviso";
    this.auo = "TOTAL";
    this.efq = "AGUARDE POR FAVOR ...";
    this.alq = "Seleção de jogos";
    this.tvk = "VELOCIDADE";
    this.ngg = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.ynb = "CONTINUAR";
    this.dmf = "AUTOPARTIDA";
    this.nei = "ESQUEMA DE PAGOS";
    this.zsj = "JOGADA";
    this.left = "ESQUERDA";
    this.eex = "DIREITA";
    this.ok = "OK";
    this.qtd = "CANCELAR";
    this.yya = "Jogada";
    this.dzu = "Metade";
    this.wxr = "REGRAS DO JOGO";
    this.ssu = "REGRAS|DO JOGO";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.isk = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.wsl = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.szo = "ganha";
    this.gjk = "V A L U E";
    this.of = "DE";
    this.abk = "TOCAR NA TELA PARA CONTINUAR";
    this.tyl = "CARREGANDO ...";
    this.gse = "CARREGANDO HISTÓRICO ...";
    this.yai = "Erro de comunicação";
    this.lbx = "Alcançou um dos limities!";
    this.zph = "Alcançou a quantidade máxima de jogos livres!";
    this.cdf = "O jogo será encerrado";
    this.ktu = "O jogo será reiniciado";
    this.xts = "GANHOU";
    this.error = "ERRO";
    this.xti = "FREEPLAY";
    this.aky = "AUTO";
    this.lsz = "ID JOGO";
    this.wqs = "Playing Time";
    this.txw = "Últimos";
    this.ciu = "jogos";
    this.pqg = "DEPOSIT";
    this.audio = "AUDIO";
    this.gkg = "MUSIC";
    this.pgr = "TELA CHEIA";
    this.vyw = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.hqf = "Não exibir novamente";
    this.oso = "Sounds não podem ser carregados!";
    this.cgr = "Faltam recursos!";
    this.bdr = "Jogar sem som?";
    this.cza = "AJUSTES";
    this.han = "Favor girar o seu aparelho!";
    this.pwx = "INFORMAÇÃO";
    this.ewj = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.tcg = "Este jogo é otimizado por Google Chrome.";
    this.wuw = "Favor usar a versão atual de";
    this.fhz = "Infelizmente este browser não é completamente suportado.";
    this.std = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.rkb = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.idf = "Adapte a interface do jogo às suas necessidades!";
    this.qqt = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.jat = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.zzz = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.zqw = "Estatísticas";
    this.ghk = "Número de jogos";
    this.ukk = "Aposta total";
    this.rbu = "Ganho total";
    this.tpr = "Tempo total do jogo";
    this.edm = "Eu lí esta mensagem.";
    this.sde = "ENCERRAR|JOGO";
    this.ygy = "HISTÓRICO";
    this.kwu = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.fij = "Jogo principal";
    this.jku = "Coletado automaticamente";
    this.shg = "Coletado";
    this.oul = "Bonusspins";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "Primeiro Deal";
    this.upa = "Segundo Deal";
    this.dqd = "Terceiro Deal";
    this.rob = "AJUSTES AUTOPARTIDA";
    this.ucq = "Número de jogos:";
    this.tol = "Parar autopartida";
    this.byv = "Crédito menor do que:";
    this.nvg = "Crédito maior do que:";
    this.ttj = "Ganho maior do que:";
    this.vxn = "O autopartida será parado no início do bonus.";
    this.wow = "Participar no Facebook";
    this.szx = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.tht = "Reality Check";
    this.asc = "Solicitaste um Reality Check.";
    this.qrl = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Nenhuma conexão com o servidor do jogo!";
    this.aar = "Tentativas de conexão";
    this.lgr = "Login falhou!";
    this.hfa = "Ja existe uma sessão ativa!";
    this.sfc = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
ush.prototype = new ubk;

function nwx() {
    this.zub = "LA MISE MINIMALE EST DE";
    this.cwl = "MISE MAX.";
    this.ulo = "MISE MINI";
    this.ayb = "MISE MAX.";
    this.nbh = "MISE";
    this.start = "DEPART";
    this.lrl = "AIDE";
    this.uuj = "TABLEAU|DES PAIEMENTS";
    this.pdx = "MENU";
    this.jyi = "PLUS|DE JEUX";
    this.ncy = "ARRÊTEZ";
    this.jzz = "CRÉDIT";
    this.oex = "FIN DU JEU";
    this.qta = "GAGNANT!";
    this.osx = "BONNE CHANCE!";
    this.win = "GAIN";
    this.zng = "DERNIER GAIN";
    this.avn = "ENCAISSER";
    this.xyv = "ENCAISSER";
    this.esg = "DOUBLER";
    this.dkj = "AUTO|LANCER";
    this.sbv = "ENCAISSER|MOITIÉ";
    this.uxb = "SORTIE";
    this.gaj = "APPUYEZ SUR START";
    this.qmj = "CHOISIR LA MISE";
    this.mmw = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.tex = "Gain total";
    this.gfa = "Avertissement";
    this.auo = "TOTALE";
    this.efq = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.alq = "Plus de jeux";
    this.tvk = "VITESSE";
    this.ngg = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.ynb = "CONTINUER";
    this.dmf = "AUTO LANCER";
    this.nei = "TABLEAU DES PAIEMENTS";
    this.zsj = "DOUBLER";
    this.left = "GAUCHE";
    this.eex = "DROITE";
    this.ok = "OK";
    this.qtd = "ANNULER";
    this.yya = "Doubler";
    this.dzu = "Encaisser moitié";
    this.wxr = "RÈGLES DU JEU";
    this.ssu = "RÈGLES DU JEU";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.isk = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.wsl = "PAS ASSEZ DE CRÉDIT";
    this.szo = "gagne";
    this.gjk = "V A L U E";
    this.of = "SUR";
    this.abk = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.tyl = "CHARGEMENT EN COURS ...";
    this.gse = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.yai = "Erreur de communication";
    this.lbx = "Vous avez atteint une des limites!";
    this.zph = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.cdf = "Le jeu sera terminé";
    this.ktu = "Le jeu sera démarré de nouveau";
    this.xts = "GAGNÉ";
    this.error = "ERREUR";
    this.xti = "JEU GRATUIT";
    this.aky = "AUTO";
    this.lsz = "ID DU JEU";
    this.wqs = "TEMPS DE JEU";
    this.txw = "Les";
    this.ciu = "derniers jeux";
    this.pqg = "AVOIR";
    this.audio = "AUDIO";
    this.gkg = "MUSIQUE";
    this.pgr = "PLEIN ÉCRAN";
    this.vyw = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.hqf = "Ne pas afficher encore une fois";
    this.oso = "Impossible de charger des sounds!";
    this.cgr = "Manque de ressources!";
    this.bdr = "Jouer sans son?";
    this.cza = "CONFIGUR.";
    this.han = "Merci de tourner votre matériel!";
    this.pwx = "INFO";
    this.ewj = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.tcg = "Ce jeu est optimisé pour Google Chrome.";
    this.wuw = "Veuilllez utiliser la version à jour de";
    this.fhz = "Malheureusement, ce browser n'est intégralement supporté.";
    this.std = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.rkb = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.idf = "Adapte l'interface de jeu à tes besoins!";
    this.qqt = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.jat = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.zzz = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.zqw = "Statistiques";
    this.ghk = "Nombre des jeux";
    this.ukk = "Total des mises";
    this.rbu = "Gain total";
    this.tpr = "Temps total du jeu";
    this.edm = "J'ai lu le message";
    this.sde = "TERMINER|LE JEU";
    this.ygy = "Historique";
    this.kwu = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.fij = "Jeu principal";
    this.jku = "Pris automatiquement";
    this.shg = "Pris";
    this.oul = "Bonusspins";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "Premier Deal";
    this.upa = "Deuxième Deal";
    this.dqd = "Troisième Deal";
    this.rob = "AUTOSTART CONFIGURATION";
    this.ucq = "Nombre des jeux:";
    this.tol = "Arrêter autostart";
    this.byv = "Crédit inférieur à:";
    this.nvg = "Crédit supérieur à:";
    this.ttj = "Gain supérieur à:";
    this.vxn = "L'autostart est arrêté au début du bonus.";
    this.wow = "Partager sur Facebook";
    this.szx = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.tht = "Reality Check";
    this.asc = "Tu as demandé un Reality Check.";
    this.qrl = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Aucune connexion avec le gaming serveur!";
    this.aar = "Tentatives de connexion";
    this.lgr = "Connexion échouée!";
    this.hfa = "Il y a déjà une session active!";
    this.sfc = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
nwx.prototype = new ubk;

function ook() {
    this.zub = "NAJMANJI ULOG JE";
    this.cwl = "MAX ULOG";
    this.ulo = "MIN. ULOG";
    this.ayb = "MAKS. ULOG";
    this.nbh = "ULOG";
    this.start = "START";
    this.lrl = "POMOĆ";
    this.uuj = "LISTA DOBITAKA";
    this.pdx = "IZBORNIK";
    this.jyi = "VIŠE|IGARA";
    this.ncy = "STOP";
    this.jzz = "KREDIT";
    this.oex = "KRAJ IGRE";
    this.qta = "DOBITAK!";
    this.osx = "SRETNO!";
    this.win = "DOBITAK";
    this.zng = "ZADNJI DOBITAK";
    this.avn = "UPIŠI";
    this.xyv = "UPIŠI";
    this.esg = "DUPLANJE";
    this.dkj = "AUTO|START";
    this.sbv = "UZMI|1/2";
    this.uxb = "IZLAZ";
    this.gaj = "PRITISNITE START";
    this.qmj = "BIRAJTE ULOG";
    this.mmw = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.tex = "Ukupni dobitci";
    this.gfa = "Upozorenje";
    this.auo = "UKUPNI";
    this.efq = "MOLIMO PRIČEKAJTE ...";
    this.alq = "Više igara";
    this.tvk = "BRZINA";
    this.ngg = "Kod kvara na uređaju nema jamstva.";
    this.ynb = "DALJE";
    this.dmf = "AUTOSTART";
    this.nei = "LISTA DOBITAKA";
    this.zsj = "DUPLANJE";
    this.left = "LIJEVA";
    this.eex = "DESNA";
    this.ok = "OK";
    this.qtd = "PREKID";
    this.yya = "Duplanje";
    this.dzu = "Uzmi 1/2";
    this.wxr = "PRAVILA IGRE";
    this.ssu = "PRAVILA IGRE";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.isk = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.wsl = "NEMATE DOVOLJNO KREDITA.";
    this.szo = "dobici";
    this.gjk = "V A L U E";
    this.of = "OD";
    this.abk = "ZA NASTAVAK DODIRNITE ZASLON";
    this.tyl = "UČITAVANJA ...";
    this.gse = "POVIJEST UČITAVANJA ...";
    this.yai = "Komunikacijska pogreška";
    this.lbx = "Dostigli ste jednu od graničnih vrijednosti!";
    this.zph = "Dostigli ste maksimum besplatnih igara!";
    this.cdf = "Igra se zatvara";
    this.ktu = "Igra se iznova učitava";
    this.xts = "OSVOJENO";
    this.error = "POGREŠKA";
    this.xti = "FREEPLAY";
    this.aky = "AUTO";
    this.lsz = "ID IGRE";
    this.wqs = "Vrijeme igre";
    this.txw = "posljednjih";
    this.ciu = "igara";
    this.pqg = "DEPOZIT";
    this.audio = "ZVUKA";
    this.gkg = "GLAZBA";
    this.pgr = "PUN ZASLON";
    this.vyw = "PUN ZASLON";
    this.language = "JEZIKA";
    this.hqf = "Ne prikazuj ponovo";
    this.oso = "Zvukovi se ne mogu učitati!";
    this.cgr = "Nedostaju resursi!";
    this.bdr = "Želite li igrati uz zvuk?";
    this.cza = "POSTAVKE";
    this.han = "Uključite svoj uređaj!";
    this.pwx = "INFORMACIJE";
    this.ewj = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.tcg = "Ova igra je optimizirana za Google Chrome.";
    this.wuw = "Molimo koristite se trenutnom inačicom";
    this.fhz = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.std = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.rkb = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.idf = "Prilagodite sučelje igre svojim potrebama!";
    this.qqt = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.jat = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.zzz = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.zqw = "Statistike";
    this.ghk = "Ukupno igara";
    this.ukk = "Ukupni ulog";
    this.rbu = "Ukupno dobitaka";
    this.tpr = "Ukupno vrijeme igre";
    this.edm = "Pročitao sam ovu poruku";
    this.sde = "IZLAZ|IZ IGRE";
    this.ygy = "Povijest";
    this.kwu = "Nema odigranih igara.";
    this.state = "STANJE";
    this.fij = "Glavna igra";
    this.jku = "Auto. pokupljeno";
    this.shg = "Pokupljeno";
    this.oul = "Besplatne igre";
    this.hui = "Dodatne okretaje";
    this.luy = "Bonus";
    this.ysk = "Prvo dijeljenje";
    this.upa = "Drugo dijeljenje";
    this.dqd = "Treće dijeljenje";
    this.rob = "POSTAVKE AUTOMATSKE IGRE";
    this.ucq = "Ukupno igara:";
    this.tol = "Zaustavljanje automatske igre";
    this.byv = "Kredit manji od:";
    this.nvg = "Kredit veći od:";
    this.ttj = "Dobitak veći od:";
    this.vxn = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.wow = "Podijeli na Facebooku";
    this.szx = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.tht = "Reality Check";
    this.asc = "Zatražili ste Reality Check.";
    this.qrl = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Nema konekcije sa serverom za igranje!";
    this.aar = "Pokušaji povezivanja";
    this.lgr = "Prijavljivanje nije uspjelo!";
    this.hfa = "Aktivna sesija već postoji!";
    this.sfc = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
ook.prototype = new ubk;

function sxw() {
    this.zub = "MINIMA PUNTATA È";
    this.cwl = "PUNTATA MASSIMA";
    this.ulo = "MIN. PUNTATA";
    this.ayb = "MASS. PUNTATA";
    this.nbh = "PUNTATA";
    this.start = "START";
    this.lrl = "AIUTO";
    this.uuj = "TABELLA VINCITE";
    this.pdx = "MENU";
    this.jyi = "SCELTA|GIOCHI";
    this.ncy = "STOP";
    this.jzz = "CREDITO";
    this.oex = "FINE PARTITA";
    this.qta = "VINCITORE!";
    this.osx = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.zng = "ULTIMA VINCITA";
    this.avn = "INCASSA";
    this.xyv = "INCASSA";
    this.esg = "GAMBLE";
    this.dkj = "AUTO|START";
    this.sbv = "METÀ";
    this.uxb = "FINE";
    this.gaj = "PREMI START";
    this.qmj = "SCEGLI PUNTATA";
    this.mmw = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.tex = "Totale vincita";
    this.gfa = "Attenzione";
    this.auo = "TOTALE";
    this.efq = "ATTENDERE PREGO ...";
    this.alq = "Scelta Giochi";
    this.tvk = "VELOCITÀ";
    this.ngg = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.ynb = "CONTINUA";
    this.dmf = "AUTOSTART";
    this.nei = "TABELLA VINCITE";
    this.zsj = "GAMBLE";
    this.left = "SINISTRA";
    this.eex = "DESTRA";
    this.ok = "OK";
    this.qtd = "CANCELLA";
    this.yya = "Gamble";
    this.dzu = "Metà";
    this.wxr = "REGOLAMENTO";
    this.ssu = "REGOLAMENTO";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.isk = "PREMI UN TASTO PER CONTINUARE";
    this.wsl = "CREDITO INSUFFICIENTE!";
    this.szo = "vince";
    this.gjk = "V A L U E";
    this.of = "DI";
    this.abk = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.tyl = "STA CARICANDO ...";
    this.gse = "STA CARICANDO LA CRONACA ...";
    this.yai = "Errore di comunicazione";
    this.lbx = "Hai raggiunto uno dei limiti!";
    this.zph = "Hai raggiunto il numero massimo di free games!";
    this.cdf = "La partita sta terminando";
    this.ktu = "La partita sta ripartendo";
    this.xts = "VINTO";
    this.error = "ERRORE";
    this.xti = "FREEPLAY";
    this.aky = "AUTO";
    this.lsz = "GAME ID";
    this.wqs = "Durata del gioco";
    this.txw = "Ultime partite";
    this.ciu = "";
    this.pqg = "DEPOSITO";
    this.audio = "AUDIO";
    this.gkg = "MUSICA";
    this.pgr = "SCHERMO INTERO";
    this.vyw = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.hqf = "Non mostrare di nuovo";
    this.oso = "Suoni non caricabili!";
    this.cgr = "Mancano risorse!";
    this.bdr = "Giocare senza suoni?";
    this.cza = "SETTAGGI";
    this.han = "Prego girare l'apparecchio!";
    this.pwx = "INFO";
    this.ewj = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.tcg = "La partita è ottimizzata per Google Chrome.";
    this.wuw = "Prego utilizzare la versione attuale di";
    this.fhz = "Purtroppo il presente browser non viene supportato interamente";
    this.std = "Impossibile avviare questa partita nel modo freeplay!";
    this.rkb = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.idf = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.qqt = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.jat = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.zzz = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.zqw = "Statistica";
    this.ghk = "Totale partite";
    this.ukk = "Totale puntata";
    this.rbu = "Totale vincita";
    this.tpr = "Totale durata del gioco";
    this.edm = "Ho letto il messaggio";
    this.sde = "TERMINARE|LA PARTITA";
    this.ygy = "Cronaca";
    this.kwu = "Nessuna partita giocata.";
    this.state = "STATO";
    this.fij = "Partita principale";
    this.jku = "Raccolto autom.";
    this.shg = "Raccolto";
    this.oul = "Bonusspin";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "Primo deal";
    this.upa = "Secondo deal";
    this.dqd = "Terzo deal";
    this.rob = "SETTAGGI AUTOSTART";
    this.ucq = "Numero di partite:";
    this.tol = "Fermare l'autostart";
    this.byv = "Credito più basso di:";
    this.nvg = "Credito più alto di:";
    this.ttj = "Vincita più alta di:";
    this.vxn = "L'autostart si ferma all'inizio del bonus.";
    this.wow = "Dividi su facebook";
    this.szx = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.tht = "Reality Check";
    this.asc = "Avete richiesto un Reality Check.";
    this.qrl = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.gxz = "Game break";
    this.bgm = "Game limits";
    this.brm = "Self test";
    this.gsd = "Nessuna connessione al gaming server!";
    this.aar = "Tentativi di connessione";
    this.lgr = "Login fallito!";
    this.hfa = "È già attiva una seduta!";
    this.sfc = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
sxw.prototype = new ubk;

function crl() {
    this.zub = "MIN. INSATSEN ÄR";
    this.cwl = "MAXIMAL INSATS";
    this.ulo = "MIN. INSATS";
    this.ayb = "MAX. INSATS";
    this.nbh = "INSATS";
    this.start = "STARTA";
    this.lrl = "HJÄLP";
    this.uuj = "VINSTTABELL";
    this.pdx = "MENY";
    this.jyi = "FLER|SPEL";
    this.ncy = "STOPP";
    this.jzz = "KREDIT";
    this.oex = "SPELET ÄR SLUT";
    this.qta = "VINNARE!";
    this.osx = "LYCKA TILL!";
    this.win = "VINN";
    this.zng = "SENASTE VINSTEN";
    this.avn = "INKASSERA";
    this.xyv = "INKASSERA";
    this.esg = "DUBBLERA";
    this.dkj = "AUTO|START";
    this.sbv = "HÄLFTEN|1/2";
    this.uxb = "AVSLUTA";
    this.gaj = "TRYCK PÅ STARTA";
    this.qmj = "VÄLJ INSATS";
    this.mmw = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.tex = "Total Vinst";
    this.gfa = "Varning";
    this.auo = "TOTALT";
    this.efq = "VAR VÄNLIG VÄNTA ...";
    this.alq = "Fler spel";
    this.tvk = "TEMPO";
    this.ngg = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.ynb = "FORTSÄTT";
    this.dmf = "AUTOSTART";
    this.nei = "VINSTTABELL";
    this.zsj = "DUBBLERA";
    this.left = "VÄNSTER";
    this.eex = "HÖGER";
    this.ok = "OK";
    this.qtd = "AVBRYT";
    this.yya = "Dubblering";
    this.dzu = "Hälften";
    this.wxr = "SPELREGLER";
    this.ssu = "SPELREGLER";
    this.dgw = "Bonus!";
    this.pic = "BONUS";
    this.isk = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.wsl = "FÖR LÅGT SALDO!";
    this.szo = "vinster";
    this.gjk = "V A L U E";
    this.of = "AV";
    this.abk = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.tyl = "LÄSER ...";
    this.gse = "LÄSER IN HISTORIKEN ...";
    this.yai = "Kommunikationsfel";
    this.lbx = "Du har nått en av gränserna!";
    this.zph = "Du har nått det maximala antalet gratisspel!";
    this.cdf = "Spelet avslutas";
    this.ktu = "Spelet startas om";
    this.xts = "VUNNA";
    this.error = "FEL";
    this.xti = "GRATISSPEL";
    this.aky = "AUTO";
    this.lsz = "SPEL-ID";
    this.wqs = "SPELTID";
    this.txw = "senaste";
    this.ciu = "spelen";
    this.pqg = "INSÄTTNING";
    this.audio = "LJUD";
    this.gkg = "MUSIK";
    this.pgr = "HELSKÄRM";
    this.vyw = "HELSKÄRM";
    this.language = "SPRÅK";
    this.hqf = "Visa inte igen";
    this.oso = "Ljud kan inte laddas!";
    this.cgr = "Resurser saknas!";
    this.bdr = "Spela utan ljud?";
    this.cza = "INSTÄLLN.";
    this.han = "Vänd din enhet!";
    this.pwx = "INFO";
    this.ewj = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.tcg = "Det här spelet är optimerat för Google Chrome.";
    this.wuw = "Använd den senaste versionen av";
    this.fhz = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.std = "Det här spelet kan inte startas i gratisspelsläget!";
    this.rkb = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.idf = "Anpassa spelgränssnittet efter dina behov!";
    this.qqt = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.jat = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.zzz = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.zqw = "Statistik";
    this.ghk = "Totalt antal spel";
    this.ukk = "Totalinsats";
    this.rbu = "Totalvinst";
    this.tpr = "Total speltid";
    this.edm = "Jag har läst detta meddelande";
    this.sde = "AVSLUTA|SPELET";
    this.ygy = "Historik";
    this.kwu = "Inga spel har spelats.";
    this.state = "STATUS";
    this.fij = "Huvudspel";
    this.jku = "Auto. Inkasserat";
    this.shg = "Inkasserat";
    this.oul = "Bonusspinn";
    this.hui = "Respin";
    this.luy = "Bonus";
    this.ysk = "Första given";
    this.upa = "Andra given";
    this.dqd = "Tredje given";
    this.rob = "AUTOSPELINSTÄLLNINGAR";
    this.ucq = "Antal spelrundor:";
    this.tol = "Stoppa automatiskt spel";
    this.byv = "Saldo lägre än:";
    this.nvg = "Saldo högre än:";
    this.ttj = "Vinst högre än:";
    this.vxn = "Autospelen kommer att stoppas då bonusen startar.";
    this.wow = "Dela på Facebook";
    this.szx = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.tht = "Reality Check";
    this.asc = "Du har begärt att få en statusuppdatering.";
    this.qrl = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.gxz = "Spelpaus";
    this.bgm = "Spelgränser";
    this.brm = "Självtest";
    this.gsd = "Ingen anslutning till spelservern!";
    this.aar = "Anslutningsförsök";
    this.lgr = "Inloggningen misslyckades!";
    this.hfa = "Det finns redan en aktiv session!";
    this.sfc = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
crl.prototype = new ubk;

function ucw() {
    this.qqf = "CLEAR|TABLE";
    this.zce = "PLACE YOUR BETS PLEASE!";
    this.jwl = "OPERATION";
    this.dui = "Deal -> Game is starting.";
    this.nbp = "Hit -> Player becomes another card.";
    this.gcz = "Stand -> Player needs no more cards.";
    this.gzv = "Split -> Two cards of the same value can be split up into two decks.";
    this.zif = "Double down -> Player can double his stake.";
    this.doz = "Insurance Yes -> Half stake as insurance against Black Jack, if the bank has an ace.";
    this.tjd = "The player plays against the bank and his goal is to draw cards that should amount up to 21 scores.";
    this.xsq = "If the players sum of cards is overstepping the 21 he looses what he put on stake.";
    this.xct = "Ace count as 1 or 11, dressed cards as 10. All other cards keep their normal value.";
    this.frb = "The bank must draw at least 16 scores, and up 17 scores no more cards can be taken.";
    this.ezz = "If the player gains a higher score than the bank, he wins the amount he put on stake.";
    this.hgr = "If the player and bank have the same scores, this means no win and no loss.";
    this.ckl = "The highest possible amount that can be made is with a 'BLACK JACK' made up of a dressed Ace or a Ten.";
    this.uuy = "This value is paid out 1,5 times the stake amount, exceptions are if the bank also has a 'BLACK JACK'.";
    this.pia = "If the sum of the first two cards is 9, 10, or 11, the player can double his stake but will receive only one more card.";
    this.icg = "DEAL";
    this.evu = "INSURANCE YES";
    this.koo = "INSURANCE NO";
    this.vxa = "DOUBLE|BETS";
    this.pws = "INSURANCE IS AVAILABLE";
    this.kxy = "CLOSE";
    this.htm = "PLACE|YOUR|BET";
    this.plq = "HIT";
    this.kcf = "STAND";
    this.split = "SPLIT";
    this.aqu = "DOUBLE";
    this.push = "PUSH";
    this.afd = "INSURANCE PAYS";
    this.lgo = "Insurance No -> No insurance against Black Jack, if the bank has an ace.";
    this.pqq = "Clear Table -> Remove all chips from the table.";
    this.ocz = "Double Bets -> Double all bets.";
    this.ebx = "Drag and drop the chips on the table to place the bet.";
    this.bdy = "If the first two cards have the same value, the player can split them into two hands. After splitting aces, only one card will be dealt to each ace. If this card is an ace, he can split them once more.";
    this.oir = "Black Jack is played with 6 standard decks of 52 cards (Jokers not included). The decks are shuffled before each game round.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
ucw.prototype = new qjj;

function svj() {
    this.xjt = "SKIN";
    this.qqf = "УДАЛИТЬ|СТАВКИ";
    this.vxa = "СТАВКИ|УДВОИТЬ";
    this.zce = "СДЕЛАЙТЕ СТАВКУ, ПОЖАЛУЙСТА!";
    this.icg = "СТАРТ";
    this.plq = "НОВАЯ КАРТА";
    this.kcf = "ОСТАВИТЬ";
    this.split = "СПЛИТ";
    this.aqu = "УДВОИТЬ";
    this.evu = "СТРАХОВКА ДА";
    this.koo = "СТРАХОВКА НЕТ";
    this.push = "НИЧЬЯ";
    this.pws = "СТРАХОВКА В НАЛИЧИИ";
    this.afd = "СТРАХОВКА ПЛАТИТ";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.kxy = "ЗАКРЫТЬ";
    this.htm = "ПОМЕСТИТЕ|СТАВКУ";
    this.jwl = "РАССЧЕТ";
    this.dui = "СТАРТ -> ИГРА НАЧНЁТСЯ.";
    this.pqq = "УДАЛИТЬ СТАВКИ -> УБРАТЬ ВСЕ ЖЕТОНЫ СО СТОЛА.";
    this.ocz = "Ставки удвоить -> Все ставки удвоить.";
    this.ebx = "ПЕРЕНЕСИТЕ ЖЕТОНЫ НА СТОЛ, ЧТОБЫ ПОМЕСТИТЬ СТАВКУ.";
    this.nbp = "НОВАЯ КАРТА -> ИГРОК ПОЛУЧАЕТ СЛЕДУЮЩИЕ КАРТЫ.";
    this.gcz = "ОСТАВИТЬ -> ИГРОК НЕ БЕРЕТ БОЛЬШЕ КАРТ.";
    this.gzv = "СПЛИТ -> ЕСЛИ ПЕРВЫЕ ДВЕ КАРТЫ ИМЕЮТ ОДИНАКОВОЕ ДОСТОИНСТВО, КОМБИНАЦИЯ МОЖЕТ БЫТЬ РАЗДЕЛЕНА НА ДВЕ НОВЫЕ.";
    this.zif = "УДВОИТЬ ПОНИЗИТЬ -> СТАВКА МОЖЕТ БЫТЬ УДВОЕНА, ЕСЛИ У ИГРОКА НА РУКЕ ТОЛЬКО ДВЕ КАРТЫ, СУММА КОТОРЫХ НЕ СОСТАВЛЯЕТ 21.";
    this.doz = "СТРАХОВКА ДА -> ЕСЛИ У ДИЛЕРА - ТУЗ, ИГРОК МОЖЕТ СДЕЛАТЬ СТРАХОВОЧНУЮ СТАВКУ, РАВНУЮ ПОЛОВИНЕ ПЕРВОНАЧАЛЬНОЙ СТАВКИ.";
    this.lgo = "СТРАХОВКА НЕТ -> СТРАХОВКИ НЕТ, ЕСЛИ В БАНКЕ ТУЗ.";
    this.tjd = "ИГРОК ИГРАЕТ ПРОТИВ ДИЛЕРА И СТРЕМИТСЯ ПО ВОЗМОЖНОСТИ НАБРАТЬ 21.";
    this.xsq = "НАБРАВ БОЛЬШЕ ЧЕМ 21, ИГРА ПРОИГРАНА И СТАВКА УДАЛЯЕТСЯ.";
    this.xct = "ТУЗ СЧИТАЕТСЯ КАК 1 ИЛИ 11. КАРТИНКИ СЧИТАЮТСЯ КАК 10. ВСЕ ОСТАЛЬНЫЕ КАРТЫ ИМЕЮТ ИХ ОБЫЧНОЕ ЗНАЧЕНИЕ.";
    this.frb = "ДИЛЕР ДОЛЖЕН **ПОКУПАТЬ** ДО 16 ОЧКОВ, А ПОСЛЕ 17 ОЧКОВ ЕМУ НЕЛЬЗЯ ДОБИРАТЬ КАРТУ.";
    this.ezz = "ЕСЛИ ВЫ НАБЕРЁТЕ БОЛЬШЕ ОЧКОВ, ЧЕМ ДИЛЕР И НЕ ПРЕВЫСИТЕ 21, ВЫ ВЫИГРАЕТЕ ВАШУ СТАВКУ.";
    this.hgr = "ОДИНАКОВОЕ КОЛИЧЕСТВО ОЧКОВ У ИГРОКОВ И У ДИЛЕРА ОЗНАЧАЕТ, ЧТО ВЫ ПРОСТО СОХРАНЯЕТЕ СТАВКУ.";
    this.ckl = "САМУЮ ВЫСОКУЮ ЦЕННОСТЬ ИМЕЕТ 'BLACK JACK', СОСТОЯЩИЙ ИЗ ОДНОГО ТУЗА И ОДНОЙ ДЕСЯТКИ.";
    this.uuy = "В ЭТОМ СЛУЧАЕ ДИЛЕР ВЫПЛАЧИВАЕТ ПОЛТОРЫ СТАВКИ, КРОМЕ СЛУЧАЯ, КОГДА У БАНКА ТОЖЕ 'Black Jack'.";
    this.pia = "ЕСЛИ СУММА ПЕРВЫХ ДВУХ КАРТ РАВНЯЕТСЯ 9,10 ИЛИ 11, МОЖНО УДВОИТЬ СВОЮ СТАВКУ, НО РАЗРЕШАЕТСЯ БРАТЬ ТОЛЬКО 1 КАРТУ.";
    this.bdy = "ЕСЛИ ПЕРВЫЕ ДВЕ КАРТЫ ИМЕЮТ ОДИНАКОВОЕ ЗНАЧЕНИЕ, ТО ИХ МОЖНО РАЗДЕЛИТЬ НА ДВЕ РУКИ. ЕСЛИ ИГРОК РЕЗДЕЛЯЕТ ДВА ТУЗА, ТО НА КАЖДЫЙ ТУЗ ОН ПОЛУЧАЕТ ЕЩЕ ОДНУ КАРТУ. ЕСЛИ ПОСЛЕДУЮЩАЯ КАРТА ОПЯТЬ ТУЗ, ТО ВОЗМОЖНО ЕЩЕ ОДНО ДЕЛЕНИЕ.";
    this.oir = "BLACK JACK ИГРАЕТСЯ С ШЕСТЬЮ СТАНДАРТНЫМИ КОЛОДАМИ (52 КАРТЫ БЕЗ ДЖОКЕРА). КОЛОДА ТАСУЕТСЯ ПЕРЕД КАЖДОЙ ИГРОЙ."
}
svj.prototype = new piu;

function qkc() {
    this.xjt = "SKIN";
    this.qqf = "LIMPIAR|TABLERO";
    this.vxa = "DOBLAR|APUESTAS";
    this.zce = "HAGAN SUS APUESTAS!";
    this.icg = "SALIDA";
    this.plq = "OTRA MÁS";
    this.kcf = "NO MÁS CARTAS";
    this.split = "REPARTIR";
    this.aqu = "DOBLAR";
    this.evu = "SEGURO SI";
    this.koo = "SEGURO NO";
    this.push = "PENDIENTE";
    this.pws = "SEGURO DISPONIBLE";
    this.afd = "PAGA EL SEGURO";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.kxy = "CERRAR";
    this.htm = "HAGA|SU|APUESTA";
    this.jwl = "SERVICIO";
    this.dui = "Start -> Comienza el juego.";
    this.pqq = "Limpiar tablero -> Retirar todas las fichas de la mesa.";
    this.ocz = "Doblar apuestas -> Doblar todas las apuestas.";
    this.ebx = "Coloque las fichas en la mesa para hacer la apuesta.";
    this.nbp = "Otra más -> El jugador recibe otra carta.";
    this.gcz = "No más cartas -> El jugador se planta.";
    this.gzv = "Repartir -> Dos cartas del mismo valor pueden dividirse en dos grupos.";
    this.zif = "Doblar -> El jugador puede doblar su apuesta.";
    this.doz = "Seguro si -> La mitad de la apuesta se asegura contra Black Jack, si la banca tiene un as.";
    this.lgo = "Seguro no -> No hay ningún seguro si el banco tiene un as.";
    this.tjd = "El jugador compite contra la banca y su objetivo es conseguir cartas que sumen 21.";
    this.xsq = "Si la suma de las cartas del jugador supera los 21 puntos, el jugador pierde su apuesta.";
    this.xct = "El as vale 1 u 11 puntos, las figuras 10. El resto su valor normal.";
    this.frb = "La banca debe sumar al menos 16 y sumando 17 no puede pedir mas cartas.";
    this.ezz = "Si el jugador obtiene mas puntos que la banca sin pasar de 21, gana la apuesta.";
    this.hgr = "Si banca y jugador empatan a puntos, no hay ganador ni perdedor.";
    this.ckl = "La mejor jugada posible es el Black Jack, teniendo un as y una figura o 10.";
    this.uuy = "Las apuestas se pagan a 1,5 veces lo apostado excepto si la banca también tiene Black Jack.";
    this.pia = "Si la suma de las dos primeras cartas es 9, 10 u 11, el jugador puede doblar su apuesta, pero recibe sólo una carta más.";
    this.bdy = "Si las dos primeras cartas tienen el mismo valor, el jugador puede dividirlas en dos manos. Si el jugador divide dos ases, solo obtendrá otra carta por cada as. Si esta carta es otro as, se puede volver a dividir.";
    this.oir = "Black Jack se juega con 6 barajas estándar, cada una de 52 cartas (sin comodines). Las barajas se volverán a mezclar antes de cada juego."
}
qkc.prototype = new qpr;

function aih() {
    this.xjt = "SKIN";
    this.qqf = "EINSÄTZE|LÖSCHEN";
    this.vxa = "EINSÄTZE|VERDOPPELN";
    this.zce = "IHRE EINSÄTZE BITTE!";
    this.icg = "START";
    this.plq = "KARTE";
    this.kcf = "KEINE KARTE";
    this.split = "TEILEN";
    this.aqu = "VERDOPPELN";
    this.evu = "VERSICHERUNG";
    this.koo = "KEINE VERSICHERUNG";
    this.push = "GLEICHSTAND";
    this.pws = "VERSICHERUNG IST VERFÜGBAR";
    this.afd = "VERSICHERUNG ZAHLT";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.kxy = "SCHLIESSEN";
    this.htm = "PLATZIEREN|SIE IHREN|EINSATZ";
    this.jwl = "BEDIENUNG";
    this.dui = "Start -> Spiel wird gestartet.";
    this.pqq = "Einsätze löschen -> Alle Chips vom Tisch entfernen.";
    this.ocz = "Einsätze verdoppeln -> Alle Einsätze verdoppeln.";
    this.ebx = "Ziehen Sie die Chips auf den Tisch, um den Einsatz zu platzieren.";
    this.nbp = "Karte -> Spieler bekommt eine weitere Karte.";
    this.gcz = "Keine Karte -> Spieler will keine weitere Karte mehr.";
    this.gzv = "Teilen -> Zwei gleiche Karten können auf zwei Decks gesplittet werden.";
    this.zif = "Verdoppeln -> Einsatz kann verdoppelt werden.";
    this.doz = "Versicherung -> Halber Einsatz als Versicherung, wenn die Bank ein Ass hat.";
    this.lgo = "Keine Versicherung -> Keine Versicherung, wenn die Bank ein Ass hat.";
    this.tjd = "Der Gast spielt gegen die Bank und ist bestrebt, möglichst 21 Punkte zu erreichen.";
    this.xsq = "Überschreitet er 21 Punkte, so hat er verloren und sein Einsatz wird eingezogen.";
    this.xct = "Asse zählen 1 oder 11. Bilder zählen 10. Alle anderen Karten behalten ihren normalen Wert.";
    this.frb = "Die Bank muß bis 16 Punkte 'Kaufen' und darf ab 17 Punkte keine Karte mehr ziehen.";
    this.ezz = "Erreichen Sie eine höhere Punktzahl als die Bank, ohne die 21 zu überschreiten, so gewinnen Sie in der Höhe des Einsatzes.";
    this.hgr = "Gleiche Punktzahl von Spieler und Bank bedeutet weder Gewinn noch Verlust.";
    this.ckl = "Der höchstmögliche Wert ist ein 'BLACK JACK', gebildet von einem Ass mit Bild oder einer Zehn.";
    this.uuy = "Dieser Wert wird mit dem 1,5-fachen des Einsatzes bezahlt, ausser die Bank verfügt ebenfalls über einen 'Black Jack'.";
    this.pia = "Ergibt die Summe der ersten beiden Karten 9, 10 od. 11, kann er seinen Einsatz verdoppeln, erhält aber nur eine Karte.";
    this.bdy = "Haben die ersten beiden Karten den gleichen Wert, kann er diese in zwei Hände aufteilen. Teilt ein Spieler zwei Asse, so erhält er auf jedes Ass nur mehr eine weitere Karte. Ist diese ein weiteres Ass, so ist ein nochmaliges Teilen möglich.";
    this.oir = "Black Jack wird mit 6 Standarddecks mit je 52 Karten (keine Joker) gespielt. Die Decks werden vor jedem Spiel neu gemischt."
}
aih.prototype = new iee;

function fgj() {
    this.xjt = "SKIN";
    this.qqf = "BANKOLARI|SIL";
    this.vxa = "BANKOLARI|İKİYE KATLA";
    this.zce = "BANKOLARıNıZ LÜTFEN!";
    this.icg = "BAŞLAT";
    this.plq = "KART";
    this.kcf = "KART YOK";
    this.split = "BÖLÜNME";
    this.aqu = "IKIYE KATLA";
    this.evu = "SIGORTA";
    this.koo = "SIGORTA YOK";
    this.push = "BERABERLIK";
    this.pws = "SIGORTA MEVCUT";
    this.afd = "SIGORTA ÖDÜYOR";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.kxy = "KAPAT";
    this.htm = "BANKONUZU|YERLEŞTIRINIZ";
    this.jwl = "SERVIS";
    this.dui = "BAŞLAT -> Oyun başlatılır.";
    this.pqq = "BANKOLARI SIL -> Tüm çipleri masadan kaldırın.";
    this.ocz = "Bankoyu ikiye katla -> Tüm bankoları ikiye katla.";
    this.ebx = "Çipleri masanın üzerine çekerek bahsinizi yerleştirin.";
    this.nbp = "KART -> Oyuncu bir adet kart daha alır.";
    this.gcz = "KART YOK -> Oyuncu daha fazla kart istemiyor.";
    this.gzv = "BÖLÜNME -> İki aynı kart iki ayrı desteye ayrılabilirler.";
    this.zif = "IKIYE KATLA -> Banko çifte katlanabilir.";
    this.doz = "SIGORTA -> Kasanın ası varsa, bankonuzun yarısı depozito olarak verilir.";
    this.lgo = "SIGORTA YOK -> Bankada bir As bulunduğunda sigorta olmaz.";
    this.tjd = "Misafir oyuncu kasaya karşı oynar ve 21 puana ulaşmaya gayret eder.";
    this.xsq = "21 puanın üstüne çıkarsa, böylelikle kaybetmiş olur ve bankosu tahsil edilir.";
    this.xct = "As'lar 1 veya 11 sayılır. Resimliler 10 olarak sayılır. Diğer tüm kartlar kendi normal değerlerini alırlar.";
    this.frb = "Kasa 16 puana kadar 'Satın alma' sı lazım ve 17 puandan itibaren bir daha kart çekemez.";
    this.ezz = "21'i geçmeden kasadan daha yüksek bir puana ulaşırsanız, banko kadar kazanırsınız.";
    this.hgr = "Oyuncunun ve kasanın aynı puana sahip olması ne kazanç ne de kayıp anlamına gelir.";
    this.ckl = "En yüksek değer 'BLACK JACK' tir, bir as ve resimli veya bir 10'ludan oluşur.";
    this.uuy = "Kasanın da 'Black Jack' e sahip olduğu durum dışında, bu değer bankonun 1,5 katı ile ödenir.";
    this.pia = "İlk iki kartın toplamı 9, 10 veya 11 ise bankosunu ikiye katlar, fakat sadece tek kart alır.";
    this.bdy = "İlk iki kartın değeri aynı ise, oyuncu kartları iki ele ayırabilir. Oyuncu iki as ayırıyor ise, her bir as için ilaveten birer kart daha alıyor. Gelen kart yine as ise tekrar ayırmak mümkündür.";
    this.oir = "Black Jack, 6 adet 52 karttan oluşan (Joker olmadan) standart deste ile oynanır. Desteler her oyundan önce yeniden karılırlar."
}
fgj.prototype = new qri;

function sgm() {
    this.xjt = "SKIN";
    this.qqf = "VYCISTI|STUL";
    this.vxa = "ZDVOJNÁSOBIT|SÁZKY";
    this.zce = "VAŠE SÁZKY PROSÍM!";
    this.icg = "START";
    this.plq = "KARTA";
    this.kcf = "ŽÁDNOU KARTU";
    this.split = "ROZDELIT";
    this.aqu = "ZDVOJENÍ";
    this.evu = "POJIŠTENÍ";
    this.koo = "ŽÁDNÉ POJIŠTENÍ";
    this.push = "NEROZHODNĚ";
    this.pws = "POJIŠTĚNÍ JE MOŽNÉ";
    this.afd = "POJIŠTĚNÍ PLATÍ";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.kxy = "ZAVŘÍT";
    this.htm = "UMÍSTĚTE|SÁZKY";
    this.jwl = "OBSLUHA";
    this.dui = "START -> začátek hry.";
    this.pqq = "VYCISTI STUL -> Ostraňte všechny žetony ze stola";
    this.ocz = "Zdvojnásobit sázky -> Zdvojnásobit všechny sázky.";
    this.ebx = "K umístnění sázky položte žetony na stůl.";
    this.nbp = "KARTA -> hráč obdrží další kartu.";
    this.gcz = "ŽÁDNOU KARTU -> hráč nechce další kartu.";
    this.gzv = "ROZDELIT -> dvě karty o stejné hodnotě lze rozdělit na dvě hromádky";
    this.zif = "ZDVOJENÍ -> hráč může zdvojnásobit svoji sázku.";
    this.doz = "POJIŠTENÍ -> poloviční sázka jako pojistka proti Black Jacku, je - li v banku eso.";
    this.lgo = "ŽÁDNÉ POJIŠTENÍ -> Žádné pojištění, když má bank eso.";
    this.tjd = "Hráč hraje proti banku a jeho cílem je tahat si karty, které by měly dosáhnout 21 bodů.";
    this.xsq = "Překročí - li součet karet 21 bodů, ztrácí hráč, co vsadil.";
    this.xct = "Eso se počítá jako 1 nebo 11. J, Q, K jako 10. Ostatní karty mají svoji normální hodnotu.";
    this.frb = "Bank musí mít alespoň 16 bodů a nad 17 bodů nesmí  vzít další kartu.";
    this.ezz = "Má - li hráč vyšší počet bodů, než je v banku aniž by překročil 21 bodů vyhrává částku, kterou vložil kromě případů, kdy má BLACK JACKA.";
    this.hgr = "Má - li hráč stejný počet jako je v banku, není výhra ani ztráta.";
    this.ckl = "Nejvyšší výhru je možno dosáhnout 'BLACK JACKem' - to je s esem spolu s J, Q, K nebo s desítkou.";
    this.uuy = "Tato hodnota je vyplacena jako 1,5 - násobek hodnoty sázky, s výjimkou když je i v banku 'BLACK JACK'.";
    this.pia = "Je-li hodnota dvou prvních karet 9, 10 nebo 11, může hráč zdvojnásobit svoji sázku,dostane ale pouze jednu kartu.";
    this.bdy = "Mají-li první dvě karty stejnou hodnotu, hráč je může rozdělit na dva díly. Oddělí-li hráč dvě esa, získá na každé eso pouze jednu kartu. Bude-li další kartou opět eso, lze provést další dělení.";
    this.oir = "Black Jack se hraje se 6 standardními balíčky 52 karet (žolíky nejsou součást). Balíčky se před každým herním kolem promíchají."
}
sgm.prototype = new oqi;

function fjs() {
    this.xjt = "SKINNI";
    this.qqf = "TÜHISTA|VÄLI";
    this.zce = "ASETAGE PALUN PANUSED!";
    this.plq = "JAGA";
    this.kcf = "OOTA";
    this.split = "POOLITA";
    this.aqu = "TOPELT ALLA";
    this.evu = "KINDLUSTUS JAH";
    this.koo = "KINDLUSTUS EI";
    this.icg = "JAGA";
    this.jwl = "KÄIK";
    this.dui = "MÄNGI -> Mäng algab.";
    this.nbp = "JAGA -> Mängija saab teise kaardi.";
    this.gcz = "OOTA -> Mängija ei vaja rohkem kaarte.";
    this.gzv = "POOLITA -> Kaks samaväärset kaarti saab jagada kahe kaardipaki vahel.";
    this.zif = "TOPELT ALLA -> Mängija saab oma panuse duubeldada.";
    this.doz = "KINDLUSTUS JAH -> Pool panusest kindlustuseks Black Jacki vastu, juhul kui pangal on äss.";
    this.tjd = "Mängija mängib panga vastu ning eesmärgiks on saada kaarte, mille summa oleks 21 punkti.";
    this.xsq = "Kui mängija kogutud kaartide summa ületab 21 punkti, kaotab ta panustatud summa.";
    this.xct = "Ässa väärtus on 1 või 11, piltide väärtus 10. Kõikidel teistel kaartidel on normaalväärtus.";
    this.frb = "Pank peab saama vähemalt 16 punkti, üle 17 punkti rohkem kaarte võtta ei saa.";
    this.ezz = "Kui mängija saab pangast kõrgemad punktid, võidab ta panustatud summa.";
    this.hgr = "Kui mängijal ja pangal on võrdväärsed punktid, tähendab see, et kumbki ei kaota ega võida.";
    this.ckl = "Kõige kõrgemad punktid on võimalik saavutada kombinatsiooniga 'BLACK JACK', mis koosneb Ässast koos piltkaardi või kümnega.";
    this.uuy = "See summa makstakse välja 1,5 kordses panuse summas, välja arvatud juhul, kui pangal on samuti 'BLACK JACK'.";
    this.pia = "Kui mõlema esimese kaardi summa moodustab 9, 10 või 11 punkti, saab panuse duubeldada, kuid mängija saab ühe kaardi.";
    this.vxa = "DUUBELDA|PANUSEID";
    this.push = "VIIK";
    this.pws = "KINDLUSTUS ON SAADAVAL";
    this.afd = "KINDLUSTUS ANNAB";
    this.kxy = "SULGE";
    this.pqq = "TÜHISTA VÄLI -> Eemalda lauast kõik žetoonid.";
    this.ocz = "Panuste duubeldamine -> Kõikide panuste duubeldamine.";
    this.ebx = "Panustamiseks lohista žetoonid lauale.";
    this.lgo = "KINDLUSTUS EI -> Black Jacki vastu ei ole kindlustust, kui pangal on äss.";
    this.bdy = "Kui kaks kaarti on sama väärtusega, saab mängija jagada need kaheks eraldi käeks. Pärast ässade poolitamist jagatakse kummalegi ässale ainult üks kaart. Kui see kaart on äss, saab kätt veel korra poolitada.";
    this.oir = "BLACK JACK mängitakse 6 standardse kaardipakiga, milles on 52 kaarti (puuduvad jokrid). Kaardipakid segatakse enne iga mänguvooru.";
    this.htm = "TEHKE|OMA|PANUSED";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer"
}
fjs.prototype = new uou;

function iyc() {
    this.xjt = "OΨΗΣ";
    this.qqf = "ΚΑΘΑΡΙΣΜOΣ|ΤΡΑΠΕΖΙΟY";
    this.zce = "ΤΟ ΠΟΝΤAΡΙΣΜΑ ΣΑΣ, ΠΑΡΑΚΑΛΩ!";
    this.plq = "ΦYΛΛΟ";
    this.kcf = "ΧΩΡIΣ ΦYΛΛΟ";
    this.split = "ΜΟIΡΑΣΜΑ";
    this.aqu = "ΔΙΠΛΑΣΙΑΣΜOΣ";
    this.evu = "ΑΣΦAΛΙΣΗ ΝΑI";
    this.koo = "ΑΣΦAΛΙΣΗ OΧΙ";
    this.icg = "ΕΝΑΡΞΗ";
    this.jwl = "ΧΕΙΡΙΣΜΌς";
    this.dui = "Πλήκτρο EΝΑΡΞΗ -> Το παιχνίδι αρχίζει.";
    this.nbp = "Πλήκτρο ΦYΛΛΟ -> Ο παίκτης λαμβάνει άλλο ένα φύλλο.";
    this.gcz = "Πλήκτρο ΧΩΡIΣ ΦYΛΛΟ -> Ο παίκτης δεν επιθυμεί άλλο φύλλο.";
    this.gzv = "Πλήκτρο ΜΟIΡΑΣΜΑ -> Δύο ίδια φύλλα μπορούν να μοιρασθούν σε δύο διαφορετικά πεδία πονταρίσματος.";
    this.zif = "Πλήκτρο ΔΙΠΛΑΣΙΑΣΜOΣ -> Το στοίχημα μπορεί να διπλασιασθεί.";
    this.doz = "Πλήκτρο ΑΣΦAΛΙΣΗ ΝΑI -> Το μισό του στοιχήματος ως ασφάλιση, όταν η τράπεζα έχει έναν άσσο.";
    this.tjd = "Ο παίκτης παίζει εναντίον της τράπεζας και προσπαθεί κατά δυνατότητα να επιτύχει 21 πόντους.";
    this.xsq = "Αν ξεπεράσει τους 21 πόντους, τότε χάνει το παιχνίδι και το στοίχημά του παρακρατείται.";
    this.xct = "Οι άσσοι μετρούν 1 ή 11. Οι φιγούρες μετρούν 10. Oλα τα άλλα φύλλα διατηρούν την κανονική τους αξία.";
    this.frb = "Η τράπεζα  μέχρι τους 16 πόντους πρέπει να 'αγοράσει' και από τους 17 πόντους και μετά δεν της επιτρέπεται να τραβήξει επιπλέον φύλλο.";
    this.ezz = "Σε περίπτωση που επιτύχετε περισσότερους πόντους από την τράπεζα, δίχως να ξεπεράσετε τους 21, κερδίζετε σε ύψος του στοιχήματός σας.";
    this.hgr = "Ο ίδιοι πόντοι μεταξύ παίκτη και τραπέζης δεν σημαίνουν κέρδος αλλά ούτε και απώλεια.";
    this.ckl = "Η υψηλώτερη δυνατή αξία είναι ένα 'BLACK JACK', αποτελούμενο από άσσο με φιγούρα ή με ένα δέκα.";
    this.uuy = "Αυτή η αξία πληρώνεται 1,5 επί του στοιχήματος, εκτός και αν η τράπεζα επιτύχει επίσης ένα 'Black Jack'.";
    this.pia = "Σε περίπτωση που το άθροισμα των δύο πρώτων φύλλων είναι 9,10 ή 11, ο παίκτης μπορεί να διπλασιάσει το στοίχημά του, λαμβάνει όμως μόνο ένα επιπλέον φύλλο.";
    this.vxa = "ΔΙΠΛΑΣΙΑΣΜΟΣ|ΠΟΝΤΑΡΙΣΜΑΤΩΝ";
    this.push = "ΙΣΟΠΑΛΙΑ";
    this.pws = "ΥΠAΡΧΕΙ ΑΣΦAΛΕΙΑ";
    this.afd = "ΠΛΗΡΩΜH ΑΣΦAΛΕΙΑΣ";
    this.kxy = "ΚΛΕΊΣΙΜΟ";
    this.pqq = "ΚΑΘΑΡΙΣΜOΣ ΤΡΑΠΕΖΙΟY -> Απομακρύνετε όλες τις μάρκες από το τραπέζι.";
    this.ocz = "Διπλασιασμός πονταρισμάτων -> Διπλασιασμός όλων των πονταρισμάτων.";
    this.ebx = "Σύρετε τις μάρκες στο τραπέζι για να ποντάρετε.";
    this.lgo = "ΑΣΦAΛΙΣΗ OΧΙ -> Δεν υπάρχει ασφάλεια, όταν η μπάνκα διαθέτει άσσο.";
    this.bdy = "Oταν τα δυο πρώτα φύλλα έχουν την ίδια αξία, τότε ο παίκτης μπορεί να τα μοιράσει σε δυο χέρια. Μετά το μοίρασμα δυο άσσων, ο παίκτης θα λάβει μόνο ένα φύλλο. Εάν αυτό το φύλλο είναι επίσης άσσος, τότε μπορεί να πραγματοποιηθεί νέο μοίρασμα.";
    this.oir = "το Black Jack παίζεται με 6 τυπικές τράπουλες των 52 φύλλων (χωρίς μπαλαντέρ). Τα φύλλα ανακατεύονται εκ νέου από κάθε παίκτη, πριν από κάθε παιχνίδι.";
    this.htm = "ΠΟΝΤAΡΕΤΕ";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer"
}
iyc.prototype = new kfl;

function dsl() {
    this.xjt = "СКИН";
    this.qqf = "ИЗЧИСТВАНЕ|НА МАСА";
    this.zce = "ПОСТАВЕТЕ СВОИТЕ ЗАЛОЗИ!";
    this.plq = "КАРТА";
    this.kcf = "ЗАПАЗИ";
    this.split = "РАЗДЕЛЯНЕ";
    this.aqu = "УДВОЯВАНЕ";
    this.evu = "ЗАСТАХОВКА ДА";
    this.koo = "ЗАСТАРХОВКА НЕ";
    this.icg = "РАЗДАВАНЕ";
    this.jwl = "ДЕЙСТВИЯ";
    this.dui = "СТАРТ -> Стартира играта.";
    this.nbp = "КАРТА -> Играчът получава друга карта.";
    this.gcz = "ЗАПАЗИ -> Играчът не се нуждае от повече карти.";
    this.gzv = "РАЗДЕЛЯНЕ -> Две карти с еднаква стойност могат да се разделят на две колоди.";
    this.zif = "УДВОЯВАНЕ -> Играчът може да удвои своя залог.";
    this.doz = "ЗАСТАХОВКА ДА -> Половината от золога е застрахован срещу Black Jack, ако Дилърът има Ас.";
    this.tjd = "Играчът играе срещу Дилъра и целта е да получи карти със сума не по-голяма от 21.";
    this.xsq = "Ако сумата от картите на играча е по-голяма от 21, той губи залога.";
    this.xct = "Асo се брои за 1 или 11. Поп, Дама и Вале са 10. Всички останали карти запазват своята стойност.";
    this.frb = "Дилърът тегли карти до сума от 16. При сума равна или по-голяма от 17, той не може да тегли повече карти.";
    this.ezz = "Ако играчът има сума  по-голяма от Дилъра, то играчът печели сума равна на поставения залог.";
    this.hgr = "Ако играчът и Дилърът имат равна сума, никой не печели или губи.";
    this.ckl = "Най-голямата печалба, която може да  постигне e играчът е при 'BLACK JACK' -  ако сумата е 21 от първите две карти, т.е. има Ас и другата карта е със стойност 10.";
    this.uuy = "Тази сума се изплаща един път и половина от залога, освен ако и Дилъра също има 'BLACK JACK'.";
    this.pia = "Ако сумата от първите две карти е 9, 10 или 11, играчът може да удвои залога, но получава само една карта след това.";
    this.vxa = "ДВОЙНИ|ЗАЛОЗИ";
    this.push = "ПУШ";
    this.pws = "НАЛИЧНА Е ЗАСТРАХОВКА";
    this.afd = "ЗАСТРАХОВКАТА ПЛАЩА";
    this.kxy = "ЗАТВОРИ";
    this.pqq = "Изчистване на маса -> Махни всички чипове от масата.";
    this.ocz = "Двойни залози -> Удвоява всички залози.";
    this.ebx = "Плъзни и пусни чиповете на масата, за да поставиш залог.";
    this.lgo = "Застарховка не -> Няма застраховка срещу блекджек, ако банката има асо.";
    this.bdy = "Ако първите две карти имат една и съща стойност, играчът може да ги раздели на две ръце. След разделяне на аса, само една карта ще бъде раздадена на всяко асо. Ако тази карта е асо, той може да ги раздели още веднъж.";
    this.oir = "Блек Джек се играе с 6 стандартни тестета от 52 карти (жокерите не са включени). Тестетата се разбъркват преди началото на всяка игра.";
    this.htm = "ПОСТАВИ|ЗАЛОЗИТЕ|СИ";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer"
}
dsl.prototype = new zfq;

function hum() {
    this.qqf = "გაასუფთავეთ|დაფა";
    this.zce = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.jwl = "მოქმედება";
    this.dui = "გარიგება -> თამაში იწყება.";
    this.nbp = "კარტი -> მოთამაშე იღებს კიდევ ერთ კარტს.";
    this.gcz = "კარტის გარეშე -> მოთამაშეს აღარ ესაჭიროვება მეტი კარტი.";
    this.gzv = "გადანაწილება -> ორი ერთი და იმავე მნიშვნელობის კარტი შეიძლება გაიყოს ორ ფსონის სხვადასხვა დასადებ ველზე.";
    this.zif = "გაორმაგება ->მოთამაშეს შეუძლია გააორმაგოს მისი წილი.";
    this.doz = "დაზღვევა არის ->ნახევარი წილი დაზღვევაში 'BLACK JACK'-ის წინააღმდეგ, როცა ბანკს აქვს ტუზი.";
    this.tjd = "მოთამაშე თამაშობს ბანკის წინააღმდეგ და მისი მიზანია ამოიღოს კარტები რომელთა მთლიანი რაოდენობა აღწევს 21 ქულას.";
    this.xsq = "თუ კარტებმა გადააჭარბა 21 ქულას მოთამაშე კარგავს რაც დადო ფსონზე.";
    this.xct = "ტუზი ითვლება 1 ან 11-ად, ფორმიანი ბარათები 10-ად. ყველა სხვა ბარათი ინარჩუნებს მის ჩვეულებრივ მნიშვნელობას.";
    this.frb = "ბანკმა უნდა მოიპოვოს მინიმუმ 16 ქულა და 17 ქულის შემდეგ მეტი კარტის აღება აღარ შეეძლება.";
    this.ezz = "თუ მოთამაშე მოიპოვებს ბანკზე უფრო მაღალ ქულას, ის მოიგებს იმ თანხას რომელიც დადო ფსონზე. 	";
    this.hgr = "თუ მოთამაშესა და ბანკს აქვს იგივე ქულა, ეს არ ნიშნავს, არც გამარჯვებას და არც წაგებას.";
    this.ckl = "უმაღლესი შესაძლო თანხა, რომელიც შეიძლება არსებობდეს არის 'BLACK JACK' რომელიც შედგება ფორმიან ტუზით ან ათიანით.";
    this.uuy = "ამ თანხის გადახდა ხდება დადებულ ფსონზე 1,5-ზე გადამრავლებით, გამონაკლისი დაიშვება იმ შემთხვევაში თუ 'BLACK JACK' ბანკსაც აქვს.";
    this.pia = "იმ შემთხვევაში, თუ პირველი ორი კარტის ჯამი არის 9, 10, ან 11, მოთამაშეს შეუძლია გააორმაგოს მისი წილი, მაგრამ მიიღებს მხოლოდ ერთ დამატებით კარტს.";
    this.icg = "გარიგება";
    this.vxa = "ფსონების|გაორმაგება";
    this.evu = "დაზღვევა არის";
    this.koo = "დაზღვევა არ არის";
    this.pws = "დაზღვევა ხელმისაწვდომია";
    this.kxy = "დახურვა";
    this.htm = "დადეთ|თქვენი|ფსონი";
    this.plq = "კარტი";
    this.kcf = "კარტის გარეშე";
    this.split = "გადანაწილება";
    this.aqu = "გაორმაგება";
    this.push = "ფრე";
    this.afd = "დაზღვევა ანაზღაურებს";
    this.lgo = "დაზღვევა არ არის -> თუ ბანკს ტუზი აქვს, BLACK JACK-ის წინააღმდეგ დაზღვევა არ არსებობს.";
    this.pqq = "გაასუფთავეთ დაფა -> მოაშორეთ ყველა ჟეტონი მაგიდიდან.";
    this.ocz = "ფსონების გაორმაგება -> ყველა ფსონის გაორმაგება.";
    this.ebx = "გადააადგილეთ ჟეტონები მაგიდაზე რომ დადოთ ფსონი.";
    this.bdy = "იმ შემთხვევაში, თუ პირველ ორ კარტს ერთნაირი ძალა აქვს, მოთამაშეს შეუძლია ისინი ორივე ხელში გადაინაწილოს. ტუზების გადანაწილების შემდეგ, თითო ტუზზე მოვა მხოლოდ თითო კარტი. თუ ეს კარტი არის ტუზი, მას შეუძლია ის კიდევ ერთხელ გადაინაწილოს.";
    this.oir = "BLACK JACK-ს თამაშობენ 52 კარტიანი 6 სტანდარტული ბანქოს დასტით (ჯოკერის გარეშე). ბანქოს დასტის მოჭრა ხდება თამაშის თითოეული რაუნდის დაწყებამდე.";
    this.kpu = "Insurance";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.jvp = "Deal";
    this.hiq = "Bust";
    this.xjt = "SKIN"
}
hum.prototype = new bnc;

function dci() {
    this.qqf = "MINDENT|TÖRÖL";
    this.zce = "KÉREM TEGYÉK MEG TÉTJEIKET!";
    this.jwl = "MŰKÖDÉS";
    this.dui = "START -> A játék kezdődik.";
    this.nbp = "HIT -> A játékos kap egy lapot.";
    this.gcz = "MEGÁLL -> A játékos nem kér több lapot.";
    this.gzv = "SZÉTVÁLASZT -> Kettő egyforma lap szétválasztható két játékhelyre.";
    this.zif = "DUPLÁZÁS -> A játékos megduplázhatja tétjét.";
    this.doz = "BIZTOSÍTÁS -> Biztositás a bank BLACK JACK-je ellen, ha a banknak ásza van.";
    this.tjd = "A játékos a bank ellen játszik. A célja, hogy lapjai összege elérje a 21-et.";
    this.xsq = "Ha a játékos lapjainak összege meghaladja a 21-et, elveszíti a tétjét.";
    this.xct = "Az ász értéke 1 vagy 11, a figurás lapoké 10. A többi lapnak normal értéke van.";
    this.frb = "A banknak minimum 16 pontig kell húzni, 17 pont felett pedig már nem kérhet lapot.";
    this.ezz = "Ha a játékos több pontot ér el mint a bank a 21 átlépése nélkül, megnyeri a tétjét.";
    this.hgr = "Ha a játékos és a bank pontjainak a száma egyforma, senki sem nyer és nem is veszít.";
    this.ckl = "A legmasabb nyeremény a BLACK JACK-el érhető el ami az ász és a 10-es vagy egy figurás lapból áll.";
    this.uuy = "Ez a tét másfélszeresét jelenti kivéve ha a banknak is BLACK JACK-je van.";
    this.pia = "Ha az elso két lap összege 9, 10 vagy 11, a játékos megduplázhatja tétjét de csak 1 lapot kérhet.";
    this.icg = "START";
    this.evu = "BIZTOSÍTÁS";
    this.koo = "NINCS BIZTOSÍTÁS";
    this.vxa = " 	DUPLA|TÉT";
    this.pws = "BIZTOSÍTÁS ELÉRHETŐ";
    this.kxy = "BEZÁR";
    this.htm = "KÉREM|TEGYE MEG|TÉTJÉT";
    this.plq = "HIT";
    this.kcf = "MEGÁLL";
    this.split = "SZÉTVÁLASZT";
    this.aqu = "DUPLÁZÁS";
    this.push = "DÖNTETLEN";
    this.afd = "BIZTOSÍTÁS FIZET";
    this.lgo = "Nincs biztosítás -> Nincs biztosítás Black Jack ellen, ha a banknak ásza van.";
    this.pqq = "Mindent töröl -> Összes tét törlése az asztalról.";
    this.ocz = "Dupla tét -> Minden tét duplázása.";
    this.ebx = "A tét elhelyezéséhez húzza a zsetont az asztalra.";
    this.bdy = "Ha az első két kártya ugyanolyan értékű, a játékos szétválaszthatja azokat kétfelé. Ászok szétválasztása után csak egy kártya kerül osztásra mindegyik laphoz. Ha ez a kártya is egy ász, akkor azok tovább oszthatóak.";
    this.oir = "A Black Jack-et 6 darab 52 kártyás paklival játsszák ( Joker nélkül). A paklik újra keverődnek minden kör előtt.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
dci.prototype = new tvc;

function mnt() {
    this.qqf = "ANULARE|MIZE";
    this.zce = "RUGĂM MIZELE DV.!";
    this.jwl = "OPERATIUNE";
    this.dui = "START -> Jocul începe.";
    this.nbp = "HIT -> Jucătorul primeşte altă carte.";
    this.gcz = "FĂRĂ CARTE -> Jucătorul nu mai are nevoie de carti.";
    this.gzv = "SEPARĂ -> Două cărti cu aceeaşi valoare pot fi împarţite in doua decks";
    this.zif = "DUBLEAZĂ -> Jucătorul isi poate dubla miza.";
    this.doz = "ASIGURARE -> Jumatate din miză ca asigurare fata de Black jack, dacă banca are un As.";
    this.tjd = "Jucătorul joacă împotriva băncii şi scopul sau este sa traga cărţi care adunate sa insumeze pana la valoarea de 21.";
    this.xsq = "Dacă suma cărţilor jucătorului depăşeşte 21, pierde tot ce a mizat.";
    this.xct = "Asul poate fi adunat ca 1 sau 11, figurile ca 10. Toate celelalte cărţi îşi păstrează valoarea lor.";
    this.frb = "Banca trebuie să puncteze cel putin 16, iar mai mult de scorul 17 nu mai pot fi luate carti.";
    this.ezz = "Dacă jucătorul obtine un scor mai mare ca banca, el căştigă valoarea care a pariat-o.";
    this.hgr = "Dacă jucătorul şi banca au acelasi scor, înseamnă că nimeni nu câştiga şi nimeni nu pierde.";
    this.ckl = "Cea mai mare valoare posibilă care poate fi obţinută este cu 'BLACK JACK' obtinut cu un As sau un Zece. ";
    this.uuy = "Această sumă este plătită de 1,5 ori din valoarea pariată, exceptând faptul când banca are de asemenea 'BLACK JACK'.";
    this.pia = "Dacă suma primelor două cărţi este de 9, 10 sau 11, jucătorul îşi poate dubla pariul, dar va mai primi numai o singură carte.";
    this.icg = "START";
    this.evu = "ASIGURARE";
    this.koo = "FĂRĂ ASIGURARE";
    this.vxa = "DUBLARE|PARIURI";
    this.pws = "ASIGURARE DISPONIBILĂ";
    this.kxy = "ÎNCHIDE";
    this.htm = "PLASAȚI-VĂ|PARIUL";
    this.plq = "HIT";
    this.kcf = "FĂRĂ CARTE";
    this.split = "SEPARĂ";
    this.aqu = "DUBLEAZĂ";
    this.push = "INDECIS";
    this.afd = "ASIGURAREA PLĂTEŞTE";
    this.lgo = "FĂRĂ ASIGURARE -> Fără asigurare Black Jack, dacă banca are un as.";
    this.pqq = "ANULARE MIZE -> Scoateţi toate chpsurile de pe masă.";
    this.ocz = "DUBLARE PARIURI -> Dublează toate pariurile.";
    this.ebx = "Trageţi Chips-urilke pe masă pentru plasarea pariului.";
    this.bdy = "Dacă primele două cărţi au aceeaşi valoare, jucătorul le poate separa în două mâini diferite. După separarea aşilor, numai o carte va fi dată fiecărui as. Dacă şi această carte e un as, jucătorul le mai poate separa o dată.";
    this.oir = "Black Jack se joacă cu 6 pachete standard de 52 cărți (fără jokeri. Cărțile sunt amestecate înaintea fiecărei runde de joc.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
mnt.prototype = new yxa;

function fjx() {
    this.qqf = "APAGAR|APOSTAS";
    this.zce = "SUAS APOSTAS POR FAVOR!";
    this.jwl = "OPERAÇÃO";
    this.dui = "JOGAR -> Jogo é iniciado.";
    this.nbp = "PEDIR -> Jogador recebe outra carta.";
    this.gcz = "NENHUMA CARTA -> O jogador não necessita mais cartas.";
    this.gzv = " DIVIDIR -> Duas cartas do mesmo valor podem ser divididar em até douas partes.";
    this.zif = "DUPLICAR -> O jogador pode dupllicar sua marcação.";
    this.doz = "SEGURO -> com metade da aposta, pode-se assegurar-se contra um Black Jack, se o banco tem um Ás.";
    this.tjd = "O jogador joga contra o banco e o objetivo é pedir cartas até que se some 21.";
    this.xsq = "Se as cartas do jogador ultrapassam 21, ele perde o que apostou.";
    this.xct = "O ás vale como 1 ou 11, cartas de figura valem 10. Todas as demais mantêm seu valor normal.";
    this.frb = "A banca deve pedir cartas no mínimo até 16, e para quando atinge ou ultrapassa 17.";
    this.ezz = "Se o jogador alacança um valor maior que a banca, ele ganha o valor que apostou.";
    this.hgr = "Se o jogador e banca tem o mesmo valor, isto significa um empate.";
    this.ckl = "O valor máximo obtido pode ser um 'Black Jack' feito de uma carta de figuras ou um dez e um ás.";
    this.uuy = "Este valor é pago na proporção de 1,5 vezes, exceção se o banco também tem um 'Black Jack'.";
    this.pia = "Se a joga das duas primeiras cartas totalizam 9, 10 ou 11, o jogador pode dobrar sua aposta, mas só recebe uma carta.";
    this.icg = "JOGAR";
    this.evu = "SEGURO";
    this.koo = "NENHUM|SEGURO";
    this.vxa = "DUPLICAR|APOSTAS";
    this.pws = "SEGURO DISPONÍVEL";
    this.kxy = "FECHAR";
    this.htm = "FAÇA|SUAS|APOSTAS";
    this.plq = "CARTA";
    this.kcf = "NENHUMA|CARTA";
    this.split = "DIVIDIR";
    this.aqu = "DUPLICAR";
    this.push = "EMPATE";
    this.afd = "O SEGURO PAGA";
    this.lgo = "NENHUM SEGURO -> Nenhum seguro quando o banco tem um ás.";
    this.pqq = "APAGAR APOSTAS -> Remover todas as fichas da mesa.";
    this.ocz = "DUPLICAR APOSTAS -> Duplicar todas apostas.";
    this.ebx = "Puxar a ficha para a mesa, para fazer a aposta.";
    this.bdy = "Se as primeiras duas cartas tiverem o mesmo valor, ele pode dividí-las em duas mãos. Se ele dividir dois áses, ele só receberá mais uma outra carta. Se esta for mais um ás, ele poderá dividir de novo.";
    this.oir = "Black Jack é jogado com 6 baralhos de tipo padronizado com 52 cartas cada (curinga não incluído). Os baralhos são misturados antes de cada jogo.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
fjx.prototype = new ush;

function yjh() {
    this.qqf = "EFFACER|MISE";
    this.zce = "FAITES VOS JEUX S'IL VOUS PLAÎT!";
    this.jwl = "MODE D'EMPLOI";
    this.dui = "Demarrage -> Le jeu peut commencer.";
    this.nbp = "Carte ->  Le joueur reçoit une carte supplémentiare.";
    this.gcz = "Aucune carte -> Le joueur ne veut plus de carte.";
    this.gzv = "Partager -> Deux cartes identiques peuvent être réparties sur deux niveaux.";
    this.zif = "Doubler -> La mise peut être doublée.";
    this.doz = "Assurance -> La moitié de la mise pour l'assurance si la banque a un as.";
    this.tjd = "Le visiteur joue contre la banque et essaie d'atteindre 21 points.";
    this.xsq = "S'il dépasse 21 points il perd sa mise.";
    this.xct = "Les As comptent pour 1 ou 11. Les images comptent pour 10. Toutes les autres cartes ont leurs valeurs normales.";
    this.frb = "La banque doit 'acheter' jusqu'à 16 points et à partir de 17 points elle ne doit plus tirer de cartes.";
    this.ezz = "Si vos points dépassent ceux de la banque sans dépasser 21, vous avez gagné le montant de la mise.";
    this.hgr = "Si vous avez le même nombre de points que la banque vous n'avez ni gagné, ni perdu.";
    this.ckl = "La valeur la plus importante est un BLACKJACK, constituée d'un As avec image ou un dix.";
    this.uuy = "Cette valeur est payée 1 1/2 la mise à moins que la banque n'ait également un BLACKJACK.";
    this.pia = "Si la somme des deux premières cartes donne 9, 10 ou 11 il peut doubler la mise, mais il ne reçoit qu'une carte.";
    this.icg = "DEMARRAGE";
    this.evu = "ASSURANCE";
    this.koo = "AUCUNE ASSURANCE";
    this.vxa = "DOUBLER|LES MISES";
    this.pws = "INSURANCE IS AVAILABLE";
    this.kxy = "FERMER";
    this.htm = "PLACEZ|VOTRE|MISE";
    this.plq = "CARTE";
    this.kcf = "AUCUNE CARTE";
    this.split = "PARTAGER";
    this.aqu = "DOUBLER";
    this.push = "MATCH NUL";
    this.afd = "L'ASSURANCE PAIE";
    this.lgo = "Aucune assurance -> Aucune assurance lorsque la banque a un as.";
    this.pqq = "Effacer mise -> Retirer tous les chips de la table.";
    this.ocz = "Doubler les mises -> Doubler toutes les mises.";
    this.ebx = "Tirez les chips sur la table afin de placer votre mise.";
    this.bdy = "Lorsque les deux premières cartes ont la même valeur, le joueur peut les répartir sur deux mains. Lorsqu'un joueur répartit deux as, chacun des as ne lui rapportera qu'une seule carte supplémentaire. Si celle-ci est, elle aussi, un as, une autre répartition est possible.";
    this.oir = "Le Black Jack est joué avec 6 decks standards à 52 cartes chacun (pas de joker). Les decks sont mélangés de nouveau avant chaque jeu.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
yjh.prototype = new nwx;

function uum() {
    this.qqf = "BRISATI|ULOGE";
    this.zce = "MOLIMO VAŠE ULOGE!";
    this.jwl = "UPRAVLJANJE";
    this.dui = "Start -> Početak igre.";
    this.nbp = "Kartu -> Igrač dobije još jednu kartu.";
    this.gcz = "Dosta -> Igrač ne želi više karata.";
    this.gzv = "Podijeli -> Dvije karte iste vrijednosti se mogu podijeliti u dva nova špila.";
    this.zif = "Udvostruči -> Igrač može udvostručiti ulog.";
    this.doz = "Osiguranje Da -> Ako banka ima asa, pola uloga ide za osiguranje protiv Black jacka.";
    this.tjd = "Igrač igra protiv banke, a cilj mu je dobiti karte ukupnog zbroja najviše 21.";
    this.xsq = "Igrač gubi svoj ulog ako mu zbroj karata prijeđe 21.";
    this.xct = "As se broji kao 1 ili kao 11, slike kao 10. Ostale karte kao vrijednost istaknuta na karti.";
    this.frb = "Banka vuče karte do zbroja od najmanje 16, a najviše 17.";
    this.ezz = "Ako je rezultat igrača veći od banke on osvaja iznos jednak svom ulogu.";
    this.hgr = "Ako banka i igrač imaju isti zbroj karata, nema niti gubitka niti dobitka.";
    this.ckl = "Najveći mogući dobitak je 'BLACK JACK' - as i desetka, dečko, dama ili kralj.";
    this.uuy = "Ovaj dobitak je 1,5 puta veći od uloga, a iznimka je ako banka također ima 'BLACK JACK'.";
    this.pia = "Ako zbroj prve dvije karte iznosi 9, 10 ili 11, igrač može udvostručiti ulog, ali tada dobije još samo jednu kartu.";
    this.icg = "START";
    this.evu = "OSIGURANJE DA";
    this.koo = "OSIGURANJE NE";
    this.vxa = "DVOSTRUKI|ULOZI";
    this.pws = "OSIGURANJE JE DOSTUPNO";
    this.kxy = "ZATVARANJE";
    this.htm = "POSTAVITE|SVOJE|ULOGE";
    this.plq = "KARTU";
    this.kcf = "DOSTA";
    this.split = "PODIJELI";
    this.aqu = "UDVOSTRUČI";
    this.push = "PUSH";
    this.afd = "OSIGURANJE PLAĆA";
    this.lgo = "Osiguranje Ne -> Nema osiguranja protiv Black Jacka, ako banka ima asa.";
    this.pqq = "Brisati uloge -> Uklonite sve žetone sa stola.";
    this.ocz = "Dvostruki ulozi -> Udvostručuje sve uloge.";
    this.ebx = "Uzmite i spustite žetone na stol kako biste stavili ulog.";
    this.bdy = "Ako prve dvije karte imaju istu vrijednost, igrač ih može podijeliti u dvije ruke. Nakon razdvajanja asova, svakom asu se dodaje samo jedna karta. Ako je ta kartica as, može ih se podijeliti još jednom.";
    this.oir = "Black Jack se igra sa 6 standardnih špilova od 52 karte (bez džokera). Karte se miješaju prije svake igre.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
uum.prototype = new ook;

function wnn() {
    this.qqf = "CANCELLARE|PUNTATE";
    this.zce = "PREGO PUNTARE!";
    this.jwl = "INFO";
    this.dui = "Start -> Inizio gioco.";
    this.nbp = "Carta -> Giocatore riceve un altra carta.";
    this.gcz = "Nessuna carta -> Giocatore non vuole nessuna carta.";
    this.gzv = "Dividere -> Due carte uguali possono essere divisi.";
    this.zif = "Raddoppiare -> Raddoppia puntata.";
    this.doz = "Assicurazione sì -> Mezza puntata, se il banco ha un asso.";
    this.tjd = "Il giocatore gioca contro il banco, e cerca di raggiungere 21 punti";
    this.xsq = "Se supera 21 punti perde, e la puntata viene ritirata.";
    this.xct = "Asso vale 1 o 11, figure 10, tutte le altre valori normali.";
    this.frb = "Il banco deve acquistare fino a 16 punti, dopo non pu acquistare nessuna carta.";
    this.ezz = "Se raggiungi pi— punti del banco senza superare 21 punti allora hai vinto.";
    this.hgr = "Giocatore e banco hanno gli stessi punti, nessun vincitore nŠ perdente.";
    this.ckl = "Punteggio max. in 'BLACK JACK' e con Asso, 10 oppure figure.";
    this.uuy = "Questo valore viene pagato fino a 1,5 volta la puntata, ma solo se il banco non ha un 'BLACK JACK'.";
    this.pia = "Se la somma delle prime due carte è 9, 10 o 11 puoi raddoppiare la puntata, ma ricevi solo una carta.";
    this.icg = "START";
    this.evu = "ASSICURAZIONE SÌ";
    this.koo = "NESSUNA ASSICURAZIONE";
    this.vxa = "RADDOPPIARE|PUNTATA";
    this.pws = "ASSICURAZIONE DISPONIBILE";
    this.kxy = "CHIUDERE";
    this.htm = "PIAZZARE|LA PROPRIA|PUNTATA";
    this.plq = "CARTA";
    this.kcf = "NESSUNA CARTA";
    this.split = "DIVIDERE";
    this.aqu = "RADDOPPIARE";
    this.push = "PAREGGIO";
    this.afd = "ASSICURAZIONE PAGA";
    this.lgo = "Nessuna assicurazione -> Nessuna assicurazione contro Black Jack quando la banca ha un asso.";
    this.pqq = "Cancellare puntate -> Togliere tutti i chips dal tavolo.";
    this.ocz = "Raddoppiare puntata -> Raddoppiare tutte le puntate.";
    this.ebx = "Trainate i chips sul tavolo per piazzare la puntata.";
    this.bdy = "Quando le prime due carte hanno lo stesso valore, il giocatore può dividerle in due mani. Dopo la divisione di due assi, su ognuno di questi riceverà una sola carta. Se tale fosse un asso, potrà dividerlo un'altra volta.";
    this.oir = "Black Jack si gioca con 6 mazzi standard da 52 carte (jolly non inclusi). I mazzi si rifanno prima di ogni partita.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
wnn.prototype = new sxw;

function brx() {
    this.qqf = "RENSA|BORDET";
    this.zce = "PLACERA DINA INSATSER, TACK!";
    this.jwl = "SERVICE";
    this.dui = "Dela ut -> Spelet startas.";
    this.nbp = "Kort -> Spelaren får ett nytt kort.";
    this.gcz = "Stanna -> Spelaren vill inte ha några fler kort.";
    this.gzv = "Dela -> Två kort av samma valör kan splittas till två händer.";
    this.zif = "Dubbla -> Spelaren kan dubbla sin insats.";
    this.doz = "Försäkring -> Ett belopp som motsvarar halva insatsen betalas i försäkring, om banken har fått ett ess.";
    this.tjd = "Spelaren spelar mot banken, och spelarens mål är att dra kort för att komma upp till 21.";
    this.xsq = "Om den sammanlagda summan skulle överstiga 21 förlorar spelaren sin insats.";
    this.xct = "Ess räknas som 1 och 11, klädda kort som 10. Övriga kort har kvar sina vanliga värden.";
    this.frb = "Banken måste komma upp till minst 16 poäng, och från 17 poäng och uppåt får inga fler kort dras.";
    this.ezz = "Om spelaren får ihop en högre kortsumma än banken, får spelaren tillbaka dubbla insatsen.";
    this.hgr = "Om spelaren och banken kommer upp i samma summa blir det oavgjort, d.v.s. varken vinst eller förlust.";
    this.ckl = "Den högsta möjliga mängd som kan göras är med en 'BLACK JACK' bestående av en klädd Ess eller en Tio.";
    this.uuy = "Detta värde betalas ut 1,5 gånger spelbeloppet, undantag är om banken också har en 'BLACK JACK'.";
    this.pia = "Om summan av de två första korten blir 9, 10 eller 11 kan spelaren dubbla sin insats, men får då bara ta ett enda kort.";
    this.icg = "DELA UT";
    this.evu = "FÖRSÄKRING";
    this.koo = "INGEN FÖRSÄKRING";
    this.vxa = "DUBBLA|INSATSERNA";
    this.pws = "FÖRSÄKRING FINNS TILLGÄNGLIG";
    this.kxy = "STÄNG";
    this.htm = "PLACERA|DIN|INSATS";
    this.plq = "KORT";
    this.kcf = "STANNA";
    this.split = "DELA";
    this.aqu = "DUBBLA";
    this.push = "OAVGJORT";
    this.afd = "FÖRSÄKRINGEN BETALAR";
    this.lgo = "Ingen försäkring -> Ingen försäkring mot Black Jack, om banken har ett ess.";
    this.pqq = "Rensa bordet -> Ta bort alla markerna från bordet.";
    this.ocz = "Dubbla insatserna -> Dubbla alla insatser.";
    this.ebx = "Dra och släpp markerna på bordet för att placera en insats.";
    this.bdy = "Om de två första korten har samma värde kan spelaren splitta dem till två händer. Efter att två ess har splittats kommer bara ett kort att delas ut till var och ett av essen. Om detta kort är ett ess kan spelaren splitta dem ännu en gång.";
    this.oir = "Black Jack spelas med 6 standardkortlekar med 52 kort vardera (utan jokrar). Kortlekarna blandas inför varje spelrunda.";
    this.kpu = "Insurance";
    this.hiq = "Bust";
    this.jvp = "Deal";
    this.ytc = "Hit";
    this.ric = "Stand";
    this.clr = "Split";
    this.ema = "Double Down";
    this.oci = "Dealer";
    this.xjt = "SKIN"
}
brx.prototype = new crl;

function itj() {
    this.xnp = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.yxh = {
        backgroundColor: "rgb(0,0,0)",
        wrb: "rgba(0,0,0,0.3)"
    };
    this.eyq = {
        yxh: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "black",
            wkt: "rgb(0,100,10)",
            kbk: "rgb(80,255,100)",
            mol: "rgb(120,120,120)",
            mes: "red",
            nxm: "white",
            xwt: "white",
            hkx: null
        },
        tzt: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "black",
            wkt: "rgb(0,100,10)",
            kbk: "rgb(80,255,100)",
            mol: "rgb(120,120,120)",
            mes: "red",
            nxm: "white",
            xwt: "rgb(230,190,10)",
            hkx: null
        }
    };
    this.tsh = {
        font: "arial",
        ifg: "bold",
        backgroundColor: "rgb(0,0,0)",
        hgq: null,
        xwt: "rgb(255,255,255)",
        eqh: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.oze = {
        font: "arial",
        ifg: "bold",
        backgroundColor: "black",
        eml: "rgb(50,50,50)",
        vbf: "rgb(255,255,255)",
        xwt: "white",
        zcx: 0.8,
        qon: {
            tgv: {
                font: "sanf-serif",
                ifg: "",
                textAlign: "center",
                tuq: "round",
                backgroundColor: "black",
                xwt: "white",
                borderColor: null,
                eqh: null,
                swd: 1
            }
        }
    };
    this.ygy = {
        font: "arial",
        ifg: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        uzi: "rgba(255,255,255,0.2)",
        xwt: "rgb(255,255,255)",
        jcb: "rgba(0,0,0,0.3)",
        display: {
            npj: "arial",
            dbj: "arial",
            ifg: "bold",
            xwt: "rgb(255,255,255)",
            baz: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        tgv: {
            font: "arial",
            ifg: "bold",
            xwt: "rgb(0,0,0)",
            akm: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            hgq: "rgba(255,255,255,1)",
            ppc: "rgba(255,255,255,0.8)",
            eej: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            tuq: "rect",
            nyo: -1
        }
    };
    this.zqw = {
        font: "arial",
        ifg: "bold",
        edq: "rgb(0,0,200)",
        oey: "rgb(255,255,255)",
        esu: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        mas: "rgb(180,220,255)",
        sih: "rgb(10,20,25)",
        fpi: "rgb(130,220,255)",
        okb: "rgb(130,190,255)",
        xwt: "rgb(255,255,255)",
        wmy: "rgb(130,190,255)",
        hvu: "rgb(100,160,255)",
        fyx: "rgb(255,255,255)",
        tgv: {
            tuq: "rect",
            font: "arial",
            ifg: "bold",
            xwt: "rgb(255,255,255)",
            snk: null,
            backgroundColor: "rgb(90,160,255)",
            qyc: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            eqh: "rgb(40,80,140)"
        },
        rpw: {
            tuq: "round",
            font: "arial",
            ifg: "bold",
            xwt: "rgb(255,255,255)",
            snk: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            qyc: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            eqh: "rgb(40,80,140)"
        }
    };
    this.yxv = {};
    this.rya = {
        zdf: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.qng = {
        type: "left",
        font: "arial",
        ifg: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        hgq: null,
        borderColor: "rgb(0,0,0)",
        eqh: "rgb(180,180,180)",
        mas: "rgba(0,0,0,0.6)",
        ncz: null,
        baz: "rgb(255,200,0)",
        xwt: "white",
        cmt: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "rgb(100,100,100)",
            hgq: "rgb(100,100,100)",
            ppc: null,
            eej: null,
            borderColor: "rgb(100,100,100)",
            xwt: "rgb(255,255,255)",
            akm: "rgb(255,200,0)",
            tuq: "triangle",
            nyo: 1
        },
        eum: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "rgb(100,100,100)",
            hgq: "rgb(100,100,100)",
            ppc: null,
            eej: null,
            borderColor: "rgb(100,100,100)",
            xwt: "rgb(255,255,255)",
            akm: "rgb(255,200,0)",
            tuq: "triangle",
            nyo: 0
        },
        nnn: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "rgb(100,100,100)",
            hgq: "rgb(15,15,15)",
            ppc: "rgb(100,100,100)",
            eej: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            xwt: "rgb(255,255,255)",
            akm: "rgb(255,200,0)",
            tuq: "rect",
            nyo: -1
        },
        display: {
            dbj: "sans-serif",
            npj: "sans-serif",
            ifg: "bold",
            baz: null,
            xwt: "yellow",
            borderColor: "rgb(100,100,100)",
            eqh: null,
            backgroundColor: "black"
        },
        wrv: {
            font: "arial",
            ifg: "bold",
            backgroundColor: null,
            hgq: null,
            xwt: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.asq = {
        font: "arial",
        ifg: "bold",
        backgroundColor: "rgb(180,180,180)",
        hgq: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        eqh: "rgb(30,30,30)",
        xwt: "white",
        ztl: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            hgq: null,
            ppc: "rgba(100,100,100,0.5)",
            eej: null,
            borderColor: null,
            xwt: "white",
            tuq: "rect",
            nyo: -1
        },
        cmt: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "rgb(255,255,255)",
            hgq: "rgb(255,255,255)",
            ppc: null,
            eej: null,
            borderColor: "rgb(255,255,255)",
            xwt: "rgb(0,0,0)",
            akm: "rgb(0,0,0)",
            tuq: "triangle",
            nyo: 1
        },
        eum: {
            font: "arial",
            ifg: "bold",
            backgroundColor: "rgb(255,255,255)",
            hgq: "rgb(255,255,255)",
            ppc: null,
            eej: null,
            borderColor: "rgb(255,255,255)",
            xwt: "rgb(0,0,0)",
            akm: "rgb(0,0,0)",
            tuq: "triangle",
            nyo: 0
        },
        pvw: {
            tuq: "rect",
            font: "arial",
            ifg: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            xwt: "white",
            swd: 1,
            borderColor: "rgb(255,255,255)",
            eqh: "rgb(220,220,220)"
        },
        display: {
            dbj: "sans-serif",
            npj: "sans-serif",
            ifg: "bold",
            baz: null,
            xwt: "white",
            borderColor: "white",
            eqh: null,
            backgroundColor: "rgb(0,0,0)"
        },
        wrv: {
            font: "arial",
            ifg: "bold",
            backgroundColor: null,
            hgq: null,
            xwt: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.maw = {
        yon: [{
            dbj: "sans-serif",
            kwg: "verdana",
            ifg: "bold",
            baz: "rgb(255,255,100)",
            snh: "rgb(210,190,40)",
            snk: "rgb(252,247,0)",
            imj: "rgb(220,200,0)",
            eml: "rgb(0,0,0)"
        }, {
            dbj: "sans-serif",
            kwg: "verdana",
            ifg: "bold",
            baz: "rgb(250,250,250)",
            snh: "rgb(210,210,210)",
            snk: "rgb(255,255,255)",
            imj: "rgb(220,220,220)",
            eml: "rgb(0,0,0)"
        }, {
            dbj: "sans-serif",
            kwg: "verdana",
            ifg: "bold",
            baz: "rgb(230,230,230)",
            snh: "rgb(190,190,190)",
            snk: "rgb(255,255,255)",
            imj: "rgb(220,220,220)",
            eml: "rgb(0,0,0)"
        }, {
            dbj: "sans-serif",
            kwg: "verdana",
            ifg: "bold",
            baz: "rgb(230,230,230)",
            snh: "rgb(190,190,190)",
            snk: "rgb(255,255,255)",
            imj: "rgb(220,220,220)",
            eml: "rgb(0,0,0)"
        }],
        cmv: {
            dbj: "sans-serif",
            kwg: "sans-serif",
            ifg: "bold",
            baz: "rgb(236,225,207)",
            snh: "rgb(214,170,102)",
            snk: "rgb(245,220,148)",
            imj: "rgb(190,137,40)"
        },
        vab: {}
    };
    this.meu = {
        qde: "rgb(240,240,240)",
        gxv: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        jcb: "rgba(0,80,150,0.6)",
        display: {
            npj: "arial",
            dbj: "arial",
            ifg: "bold",
            xwt: "rgb(0,80,151)",
            baz: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function yar() {
    this.oze.qon.tgv.backgroundColor = "rgb(0,60,10)";
    this.uhu = ["rgb(25,25,75)", "rgb(110,17,18)", "rgb(16,66,15)", "rgb(0,0,0)", "rgb(65,25,68)", "rgb(120,60,16)"];
    this.taz = {};
    this.lxm = {
        svo: {
            font: "verdana",
            ifg: "bold",
            color: "rgb(0,0,0)"
        }
    };
    this.hox = {
        yzf: "rgb(30,30,30)",
        pwx: {
            font: "verdana",
            ifg: "bold",
            xwt: "white",
            backgroundColor: null,
            borderColor: null
        },
        display: {
            dbj: "sans-serif",
            npj: "sans-serif",
            ifg: "bold",
            baz: "white",
            xwt: "white",
            borderColor: null,
            eqh: null,
            backgroundColor: null
        },
        tgv: {
            backgroundColor: "rgb(0,60,10)",
            xwt: "white",
            font: "verdana",
            ifg: "bold"
        },
        svo: {
            font: "verdana",
            ifg: "bold",
            color: "rgb(0,0,0)"
        }
    };
    this.dgp = {
        xln: {
            backgroundColor: "rgb(0,60,10)",
            xwt: "white",
            font: "verdana",
            ifg: "bold"
        }
    };
    this.fzn = {
        ifg: "bold",
        pwx: {
            font: "sans-serif",
            xwt: "rgb(240,240,240)"
        },
        mby: {
            font: "sans-serif",
            xwt: "rgb(240,240,240)",
            backgroundColor: "rgb(0,30,0)"
        },
        qgf: {
            font: "sans-serif",
            backgroundColor: "rgb(0,0,0)",
            borderColor: "rgb(255,255,255)",
            swd: 0.6
        },
        cfn: {
            borderColor: "rgb(255,255,255)",
            backgroundColor: "rgb(255,200,0)"
        },
        nbh: {
            font: "verdana",
            xwt: "white",
            backgroundColor: "rgb(0,0,0)"
        }
    };
    this.blk = {
        qgf: {
            font: "sans-serif",
            ifg: "bold",
            backgroundColor: "rgb(0,0,0)",
            borderColor: "rgb(255,255,255)",
            swd: 0.6
        }
    };
    this.jzn = {
        font: "verdana",
        ifg: "bold",
        xwt: "rgb(205,200,180)"
    };
    this.lrl = {
        backgroundColor: "rgb(0,0,0)",
        swd: 0.7,
        borderColor: "rgb(190,140,0)",
        eqh: "rgb(200,130,50)",
        xln: {
            tuq: "rect",
            nyo: -1,
            font: "sans-serif",
            ifg: "bold",
            backgroundColor: "rgb(60,30,0)",
            hgq: "rgb(60,10,0)",
            ppc: "rgb(150,30,0)",
            eej: "rgb(150,10,0)",
            borderColor: "rgb(190,140,0)",
            xwt: "rgb(255,186,55)",
            akm: "rgb(255,186,55)"
        },
        xjb: {
            dbj: "verdana",
            font: "verdana",
            eml: null,
            xwt: "rgb(255,186,55)",
            ylb: "verdana",
            ild: "bold italic",
            xeb: "rgb(255,220,150)"
        }
    }
}
yar.prototype = new itj;

function wdg() {
    this.type = "800_600";
    this.ksz = true;
    this.oqm = false;
    this.efi = false;
    this.ryi = true;
    this.mus = false;
    this.oju = false;
    this.hlh = false;
    this.had = false
}

function lqm() {
    this.ksz = false;
    this.canvas = {
        fkh: new mhd(0, 0, 800, 620)
    };
    this.bje = {
        fkh: new mhd(),
        vaz: 0
    };
    this.yxh = {
        fkh: new mhd(0, 20, 800, 600),
        gld: 0
    };
    this.tey = {
        qfv: new mhd(0, 40, 440, 36),
        zdl: new mhd(5, 2, 140, 30),
        lvv: new mhd(150, 2, 140, 30),
        teq: new mhd(295, 2, 140, 30),
        xln: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.eyq = {
        yxh: {
            fkh: new mhd(0, 0, 500, 360),
            hsx: new mhd(5, 325, 490, 30),
            pdw: new mhd(5, 329, 490, 14),
            yyg: new mhd(50, 345, 400, 6),
            aai: new mhd(5, 285, 490, 70),
            tlz: new mhd(120, 300, 260, 55),
            fontSize: 14,
            osl: 18,
            owk: 26,
            zmi: 5,
            hck: 12,
            oqd: 5,
            nxk: 2
        },
        tzt: {
            fkh: new mhd(0, 0, 800, 620),
            hsx: new mhd(),
            pdw: new mhd(),
            yyg: new mhd(200, 425, 400, 8),
            aai: new mhd(100, 372, 600, 84),
            tlz: new mhd(270, 394, 260, 70),
            fontSize: 18,
            osl: 24,
            owk: 20,
            zmi: 0,
            hck: 12,
            oqd: 7,
            nxk: 0
        }
    };
    this.tsh = {
        fkh: new mhd(0, 0, 800, 20),
        fontSize: 12,
        jap: 19,
        snx: 15,
        bfi: 120,
        hck: 2,
        oqd: 2,
        jvn: 2,
        qgw: 40
    };
    this.oze = {
        fkh: new mhd(0, 20, 800, 70),
        fontSize: 10,
        zmv: 10,
        hrn: 20,
        dzl: 40,
        gld: 4,
        hck: 10,
        oqd: 5,
        zmi: 10,
        xln: {
            fontSize: 17,
            zmi: 2
        }
    };
    this.zqw = {
        fkh: new mhd(0, 20, 800, 600),
        qfv: new mhd(),
        xln: {
            wid: 20,
            bri: 0,
            hck: 0,
            xlm: 0,
            yci: 0,
            pmt: 8,
            tth: 8,
            gld: 0
        },
        aps: new mhd(0, 20, 800, 40),
        wxj: new mhd(0, 100, 800, 40),
        eez: new mhd(0, 140, 800, 40),
        ptz: new mhd(0, 180, 800, 40),
        cdw: new mhd(225, 275, 350, 100),
        qmw: new mhd(200, 480, 400, 40),
        nre: {
            oyi: new mhd(340, 540, 120, 55)
        },
        nfn: {
            oyi: new mhd(250, 540, 120, 55),
            ajv: new mhd(430, 540, 120, 55)
        },
        gde: 36,
        fontSize: 30,
        xby: 22,
        oqd: 3,
        hck: 5,
        gld: 2,
        juz: 3,
        ewu: 10
    };
    this.yxv = {
        fkh: new mhd(-10, 25, 310, 50),
        aps: new mhd(10, 4, 240, 24),
        pdw: new mhd(10, 28, 240, 18),
        pdh: new mhd(260, 10, 40, 30),
        oep: new mhd(7, 2, 26, 26),
        roi: 16,
        wid: 12,
        hqo: 18
    };
    this.rya = {
        fkh: new mhd(150, 160, 500, 280),
        roi: 26,
        fontSize: 20,
        uws: new mhd(465, 5, 30, 30),
        aps: new mhd(30, 5, 440, 30),
        qmw: new mhd(20, 40, 460, 160),
        nxw: new mhd(20, 230, 460, 40),
        xln: {
            fontSize: 20
        }
    };
    this.qng = {
        fkh: new mhd(0, 55, 560, 430),
        gld: 2,
        omg: 0,
        imi: 5,
        efe: 10,
        roi: 26,
        ibi: 20,
        aps: new mhd(30, 15, 500, 30),
        gzx: new mhd(20, 50, 520, 60),
        rss: new mhd(40, 60, 220, 40),
        ckj: new mhd(328, 60, 30, 40),
        kwx: new mhd(360, 60, 120, 40),
        tbr: new mhd(482, 60, 30, 40),
        tpz: new mhd(20, 120, 520, 200),
        skk: new mhd(40, 120, 480, 40),
        atz: new mhd(30, 160, 280, 40),
        azp: new mhd(328, 160, 30, 40),
        xiz: new mhd(360, 160, 120, 40),
        amm: new mhd(482, 160, 30, 40),
        shc: new mhd(30, 215, 280, 40),
        rda: new mhd(328, 215, 30, 40),
        zaf: new mhd(360, 215, 120, 40),
        cxo: new mhd(482, 215, 30, 40),
        ydx: new mhd(30, 270, 280, 40),
        ryl: new mhd(328, 270, 30, 40),
        xvk: new mhd(360, 270, 120, 40),
        exo: new mhd(482, 270, 30, 40),
        hsx: new mhd(30, 330, 500, 30),
        rhd: new mhd(210, 370, 140, 50),
        jvv: new mhd(),
        wrv: {
            pdw: new mhd(40, 0, 240, 40),
            uif: new mhd(7, 12, 16, 16),
            fontSize: 20,
            pmt: 0,
            gld: 2
        },
        eum: {
            pmt: 3,
            hck: -5,
            oqd: -1,
            tth: 6,
            fontSize: 20,
            gld: 0
        },
        cmt: {
            pmt: 3,
            hck: 5,
            oqd: 0,
            tth: 6,
            fontSize: 20,
            gld: 0
        },
        nnn: {
            pmt: 6,
            hck: 0,
            oqd: 0,
            tth: 6,
            fontSize: 26,
            gld: 2
        },
        display: {
            roi: 16,
            wid: 24,
            apl: 0,
            xlm: 0,
            gld: 2,
            qbx: 3,
            nhf: 3,
            jxx: 3,
            lsg: 3
        }
    };
    this.maw = {
        fkh: [
            [new mhd(2, 20, 130, 44)],
            [new mhd(2, 20, 130, 44), new mhd(668, 20, 130, 44)],
            [new mhd(2, 20, 130, 23), new mhd(668, 20, 130, 23), new mhd(2, 41, 130, 23)],
            [new mhd(2, 20, 130, 23), new mhd(668, 20, 130, 23), new mhd(2, 41, 130, 23), new mhd(668, 41, 130, 23)]
        ],
        display: {
            uwc: new mhd(0, 0, 130, 44),
            grr: new mhd(0, 0, 130, 44),
            pzy: new mhd(),
            aps: new mhd(2, 3, 126, 19),
            atp: new mhd(8, 24, 114, 19),
            roi: 16,
            bri: 18,
            rsl: 0
        },
        tgg: {
            uwc: new mhd(0, 0, 130, 23),
            grr: new mhd(0, 0, 130, 23),
            pzy: new mhd(2, 2, 19, 19),
            aps: new mhd(),
            atp: new mhd(22, 3, 100, 19),
            roi: 14,
            bri: 18,
            rsl: 0
        },
        cmv: {
            fkh: new mhd(62, 100, 676, 372),
            uwc: new mhd(32, 10, 612, 351),
            grr: new mhd(0, 0, 676, 372),
            pzy: new mhd(301, 263, 74, 74),
            aps: new mhd(120, 58, 436, 56),
            atp: new mhd(32, 140, 612, 96),
            roi: 68,
            bri: 100,
            rsl: 0
        },
        vab: {
            fkh: new mhd(38, 80, 724, 369),
            joo: new mhd(100, 53, 525, 50),
            atp: new mhd(186, 153, 332, 94),
            oqn: 340,
            qaf: 30,
            xqw: {
                _0: new mhd(2, 0, 90, 94),
                _1: new mhd(98, 0, 90, 94),
                _2: new mhd(194, 0, 90, 94),
                _3: new mhd(290, 0, 90, 94),
                _4: new mhd(386, 0, 90, 94),
                _5: new mhd(482, 0, 90, 94),
                _6: new mhd(578, 0, 90, 94),
                _7: new mhd(674, 0, 90, 94),
                _8: new mhd(770, 0, 90, 94),
                _9: new mhd(866, 0, 90, 94),
                _cm: new mhd(962, 0, 28, 94),
                _dt: new mhd(999, 0, 28, 94),
                _sp: new mhd(1036, 0, 28, 94)
            }
        }
    }
}
lqm.prototype = new wdg;

function wun() {
    this.oqm = true
}
wun.prototype = new lqm;

function lqq() {
    this.mus = true;
    this.efi = true;
    this.ksz = false;
    this.oqm = true;
    this.canvas = {
        fkh: new mhd(0, 0, 800, 1165)
    };
    this.bje = {
        fkh: new mhd(),
        vaz: 0
    };
    this.yxh = {
        fkh: new mhd(0, 550, 800, 615),
        gld: 10
    };
    this.tey = {
        qfv: new mhd(0, 330, 440, 36),
        zdl: new mhd(5, 2, 140, 30),
        lvv: new mhd(150, 2, 140, 30),
        teq: new mhd(295, 2, 140, 30),
        xln: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.eyq = {
        yxh: {
            fkh: new mhd(0, 0, 500, 360),
            hsx: new mhd(5, 325, 490, 30),
            pdw: new mhd(5, 329, 490, 14),
            yyg: new mhd(50, 345, 400, 6),
            aai: new mhd(5, 285, 490, 70),
            tlz: new mhd(120, 300, 260, 55),
            fontSize: 14,
            osl: 18,
            owk: 26,
            zmi: 5,
            hck: 12,
            oqd: 5,
            nxk: 2
        },
        tzt: {
            fkh: new mhd(0, 0, 800, 600),
            hsx: new mhd(),
            pdw: new mhd(),
            yyg: new mhd(200, 411, 400, 8),
            aai: new mhd(100, 360, 600, 110),
            tlz: new mhd(270, 380, 260, 70),
            fontSize: 18,
            osl: 24,
            owk: 20,
            zmi: 0,
            hck: 12,
            oqd: 7,
            nxk: 0
        }
    };
    this.top = {
        fkh: new mhd(0, 20, 800, 520)
    };
    this.tsh = {
        fkh: new mhd(0, 0, 800, 20),
        fontSize: 12,
        jap: 19,
        snx: 15,
        bfi: 120,
        hck: 2,
        oqd: 2,
        jvn: 2,
        qgw: 60
    };
    this.oze = {
        fkh: new mhd(0, 20, 800, 70),
        fontSize: 10,
        zmv: 10,
        hrn: 20,
        dzl: 40,
        gld: 4,
        hck: 10,
        oqd: 5,
        zmi: 10,
        xln: {
            fontSize: 17,
            zmi: 2
        }
    };
    this.zqw = {
        fkh: new mhd(0, 550, 800, 615),
        qfv: new mhd(),
        xln: {
            wid: 26,
            bri: 0,
            hck: 0,
            xlm: 0,
            yci: 0,
            pmt: 10,
            tth: 10,
            gld: 2
        },
        aps: new mhd(0, 20, 800, 40),
        wxj: new mhd(0, 100, 800, 40),
        eez: new mhd(0, 140, 800, 40),
        ptz: new mhd(0, 180, 800, 40),
        cdw: new mhd(225, 275, 350, 100),
        qmw: new mhd(200, 480, 400, 40),
        nre: {
            oyi: new mhd(340, 540, 120, 68)
        },
        nfn: {
            oyi: new mhd(250, 540, 120, 68),
            ajv: new mhd(430, 540, 120, 68)
        },
        gde: 36,
        fontSize: 30,
        xby: 22,
        oqd: 3,
        hck: 5,
        gld: 2,
        juz: 3,
        ewu: 10,
    };
    this.yxv = {
        fkh: new mhd(-10, 545, 310, 50),
        aps: new mhd(10, 4, 240, 24),
        pdw: new mhd(10, 28, 240, 18),
        pdh: new mhd(260, 10, 40, 30),
        oep: new mhd(7, 2, 26, 26),
        roi: 16,
        wid: 12,
        hqo: 18
    };
    this.rya = {
        fkh: new mhd(150, 690, 500, 280),
        roi: 26,
        fontSize: 20,
        uws: new mhd(465, 5, 30, 30),
        aps: new mhd(30, 5, 440, 40),
        qmw: new mhd(20, 40, 460, 160),
        nxw: new mhd(20, 230, 460, 40),
        xln: {
            fontSize: 20
        }
    };
    this.qng = {
        fkh: new mhd(0, 585, 560, 430),
        gld: 2,
        omg: 0,
        imi: 5,
        efe: 10,
        roi: 26,
        ibi: 20,
        aps: new mhd(30, 15, 500, 30),
        gzx: new mhd(20, 50, 520, 60),
        rss: new mhd(40, 60, 220, 40),
        ckj: new mhd(328, 60, 30, 40),
        kwx: new mhd(360, 60, 120, 40),
        tbr: new mhd(482, 60, 30, 40),
        tpz: new mhd(20, 120, 520, 200),
        skk: new mhd(40, 120, 480, 40),
        atz: new mhd(30, 160, 280, 40),
        azp: new mhd(328, 160, 30, 40),
        xiz: new mhd(360, 160, 120, 40),
        amm: new mhd(482, 160, 30, 40),
        shc: new mhd(30, 215, 280, 40),
        rda: new mhd(328, 215, 30, 40),
        zaf: new mhd(360, 215, 120, 40),
        cxo: new mhd(482, 215, 30, 40),
        ydx: new mhd(30, 270, 280, 40),
        ryl: new mhd(328, 270, 30, 40),
        xvk: new mhd(360, 270, 120, 40),
        exo: new mhd(482, 270, 30, 40),
        hsx: new mhd(30, 330, 500, 30),
        rhd: new mhd(210, 370, 140, 50),
        jvv: new mhd(),
        wrv: {
            pdw: new mhd(40, 0, 240, 40),
            uif: new mhd(7, 12, 16, 16),
            fontSize: 20,
            pmt: 0,
            gld: 2
        },
        eum: {
            pmt: 3,
            hck: -5,
            oqd: -1,
            tth: 6,
            fontSize: 20,
            gld: 0
        },
        cmt: {
            pmt: 3,
            hck: 5,
            oqd: 0,
            tth: 6,
            fontSize: 20,
            gld: 0
        },
        nnn: {
            pmt: 6,
            hck: 0,
            oqd: 0,
            tth: 6,
            fontSize: 26,
            gld: 2
        },
        display: {
            roi: 16,
            wid: 24,
            apl: 0,
            xlm: 0,
            gld: 2,
            qbx: 3,
            nhf: 3,
            jxx: 3,
            lsg: 3
        }
    };
    this.maw = {
        fkh: [
            [new mhd(2, 550, 130, 44)],
            [new mhd(2, 550, 130, 44), new mhd(668, 550, 130, 44)],
            [new mhd(2, 550, 130, 23), new mhd(668, 550, 130, 23), new mhd(2, 571, 130, 23)],
            [new mhd(2, 550, 130, 23), new mhd(668, 550, 130, 23), new mhd(2, 571, 130, 23), new mhd(668, 571, 130, 23)]
        ],
        display: {
            uwc: new mhd(0, 0, 130, 44),
            grr: new mhd(0, 0, 130, 44),
            pzy: new mhd(),
            aps: new mhd(2, 3, 126, 19),
            atp: new mhd(8, 24, 114, 19),
            roi: 16,
            bri: 18,
            rsl: 0
        },
        tgg: {
            uwc: new mhd(0, 0, 130, 23),
            grr: new mhd(0, 0, 130, 23),
            pzy: new mhd(2, 2, 19, 19),
            aps: new mhd(),
            atp: new mhd(22, 3, 100, 19),
            roi: 14,
            bri: 18,
            rsl: 0
        },
        cmv: {
            fkh: new mhd(62, 640, 676, 372),
            uwc: new mhd(32, 10, 612, 351),
            grr: new mhd(0, 0, 676, 372),
            pzy: new mhd(301, 263, 74, 74),
            aps: new mhd(120, 58, 436, 56),
            atp: new mhd(32, 140, 612, 96),
            roi: 68,
            bri: 100,
            rsl: 0
        },
        vab: {
            fkh: new mhd(38, 610, 724, 369),
            joo: new mhd(100, 53, 525, 50),
            atp: new mhd(186, 153, 332, 94),
            oqn: 360,
            qaf: 30,
            xqw: {
                _0: new mhd(2, 0, 90, 94),
                _1: new mhd(98, 0, 90, 94),
                _2: new mhd(194, 0, 90, 94),
                _3: new mhd(290, 0, 90, 94),
                _4: new mhd(386, 0, 90, 94),
                _5: new mhd(482, 0, 90, 94),
                _6: new mhd(578, 0, 90, 94),
                _7: new mhd(674, 0, 90, 94),
                _8: new mhd(770, 0, 90, 94),
                _9: new mhd(866, 0, 90, 94),
                _cm: new mhd(962, 0, 28, 94),
                _dt: new mhd(999, 0, 28, 94),
                _sp: new mhd(1036, 0, 28, 94)
            }
        }
    }
}
lqq.prototype = new wdg;

function umu() {
    this.ksz = false;
    this.oju = true;
    this.hlh = true;
    this.canvas = {
        fkh: new mhd(0, 0, 960, 630)
    };
    this.bje = {
        fkh: new mhd(),
        vaz: 0,
        bea: 0
    };
    this.yxh = {
        fkh: new mhd(160, 30, 800, 600),
        gld: 0
    };
    this.tey = {
        qfv: new mhd(460, 25, 500, 34),
        zdl: new mhd(5, 2, 160, 30),
        lvv: new mhd(170, 2, 160, 30),
        teq: new mhd(335, 2, 160, 30),
        xln: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.eyq = {
        yxh: {
            fkh: new mhd(0, 0, 640, 460),
            hsx: new mhd(6, 416, 628, 38),
            pdw: new mhd(6, 420, 628, 17),
            yyg: new mhd(64, 442, 512, 7),
            aai: new mhd(6, 364, 628, 90),
            tlz: new mhd(140, 384, 360, 70),
            fontSize: 18,
            osl: 20,
            owk: 30,
            zmi: 6,
            hck: 12,
            oqd: 6,
            nxk: 3
        },
        tzt: {
            fkh: new mhd(0, 0, 960, 630),
            hsx: new mhd(),
            pdw: new mhd(),
            yyg: new mhd(280, 431, 400, 8),
            aai: new mhd(180, 380, 600, 90),
            tlz: new mhd(350, 400, 260, 70),
            fontSize: 18,
            osl: 24,
            owk: 20,
            zmi: 0,
            hck: 12,
            oqd: 7,
            nxk: 0
        }
    };
    this.tsh = {
        fkh: new mhd(160, 0, 800, 30),
        fontSize: 16,
        jap: 26,
        snx: 15,
        bfi: 160,
        hck: 2,
        oqd: 2,
        jvn: 2,
        qgw: 0
    };
    this.oze = {};
    this.zqw = {
        fkh: new mhd(0, 0, 960, 630),
        qfv: new mhd(0, 0, 160, 630),
        xln: {
            wid: 0,
            bri: 0,
            hck: 0,
            xlm: 0,
            yci: 0,
            tth: 8,
            pmt: 16,
            gld: 4
        },
        aps: new mhd(160, 50, 800, 40),
        wxj: new mhd(160, 130, 800, 40),
        eez: new mhd(160, 170, 800, 40),
        ptz: new mhd(160, 210, 800, 40),
        cdw: new mhd(385, 305, 350, 100),
        qmw: new mhd(360, 510, 400, 40),
        nre: {
            oyi: new mhd(10, 455, 140, 100),
        },
        nfn: {
            oyi: new mhd(10, 355, 140, 100),
            ajv: new mhd(10, 165, 140, 100)
        },
        gde: 36,
        fontSize: 30,
        xby: 22,
        oqd: 3,
        hck: 5,
        gld: 2,
        juz: 3,
        ewu: 10
    };
    this.asq = {
        fkh: new mhd(160, 30, 800, 600),
        gld: 0,
        pmt: 0,
        hut: 50,
        wih: 30,
        ibi: 30,
        bpm: new mhd(30, 180, 410, 60),
        qqz: new mhd(460, 180, 50, 60),
        bcf: new mhd(512, 180, 210, 60),
        ugv: new mhd(724, 180, 50, 60),
        iwe: new mhd(30, 310, 410, 60),
        uyb: new mhd(460, 310, 50, 60),
        gdr: new mhd(512, 310, 210, 60),
        ymz: new mhd(724, 310, 50, 60),
        zqd: new mhd(30, 440, 410, 60),
        ylx: new mhd(512, 440, 210, 60),
        mia: new mhd(40, 530, 720, 50),
        rss: new mhd(30, 120, 360, 60),
        ckj: new mhd(460, 120, 50, 60),
        kwx: new mhd(512, 120, 210, 60),
        tbr: new mhd(724, 120, 50, 60),
        hoa: new mhd(40, 200, 760, 70),
        atz: new mhd(30, 280, 410, 60),
        azp: new mhd(460, 280, 50, 60),
        xiz: new mhd(512, 280, 210, 60),
        amm: new mhd(724, 280, 50, 60),
        shc: new mhd(30, 360, 410, 60),
        rda: new mhd(460, 360, 50, 60),
        zaf: new mhd(512, 360, 210, 60),
        cxo: new mhd(724, 360, 50, 60),
        ydx: new mhd(30, 440, 410, 60),
        ryl: new mhd(460, 440, 50, 60),
        xvk: new mhd(512, 440, 210, 60),
        exo: new mhd(724, 440, 50, 60),
        hsx: new mhd(40, 530, 720, 50),
        exi: {
            xaw: new mhd(0, 0, 267, 90),
            twe: new mhd(267, 0, 266, 90),
            hbn: new mhd(533, 0, 267, 90),
            ncr: new mhd()
        },
        hmg: {
            xaw: new mhd(0, 0, 200, 90),
            rod: new mhd(200, 0, 200, 90),
            twe: new mhd(400, 0, 200, 90),
            hbn: new mhd(600, 0, 200, 90),
            ncr: new mhd()
        },
        kal: [new mhd(132, 205, 200, 160), new mhd(464, 205, 200, 160)],
        edp: [new mhd(50, 205, 200, 160), new mhd(300, 205, 200, 160), new mhd(550, 205, 200, 160)],
        piw: [new mhd(132, 130, 200, 160), new mhd(464, 130, 200, 160), new mhd(132, 360, 200, 160), new mhd(464, 360, 200, 160)],
        ndi: [new mhd(50, 130, 200, 160), new mhd(300, 130, 200, 160), new mhd(550, 130, 200, 160), new mhd(50, 360, 200, 160), new mhd(300, 360, 200, 160), new mhd(550, 360, 200, 160)],
        eum: {
            pmt: 3,
            hck: -10,
            oqd: -1,
            tth: 6,
            fontSize: 36,
            gld: 0
        },
        cmt: {
            pmt: 3,
            hck: 10,
            oqd: -1,
            tth: 6,
            fontSize: 36,
            gld: 0
        },
        ztl: {
            fontSize: 36,
            hck: 0,
            oqd: 0,
            tth: 10,
            pmt: 0,
            gld: 0
        },
        pvw: {
            fontSize: 26,
            zmi: 5,
            pmt: 26,
            gld: 4,
            upb: 40
        },
        wtd: {
            roi: 16,
            wid: 40,
            apl: 0,
            xlm: 0,
            gld: 2,
            zmi: 3
        },
        lbn: {
            roi: 16,
            wid: 40,
            apl: 0,
            xlm: 0,
            gld: 2,
            zmi: 3
        },
        wrv: {
            pdw: new mhd(50, 0, 360, 60),
            uif: new mhd(0, 13, 30, 30),
            fontSize: 30,
            pmt: 0,
            gld: 2
        }
    };
    this.yxv = {
        fkh: new mhd(660, 30, 310, 60),
        aps: new mhd(60, 6, 240, 26),
        pdw: new mhd(60, 34, 240, 20),
        pdh: new mhd(5, 11, 50, 38),
        oep: new mhd(8, 2, 34, 34),
        roi: 16,
        wid: 12,
        hqo: 24
    };
    this.rya = {
        fkh: new mhd(280, 150, 560, 330),
        roi: 26,
        fontSize: 20,
        uws: new mhd(515, 5, 40, 40),
        aps: new mhd(40, 5, 480, 30),
        qmw: new mhd(20, 40, 520, 195),
        nxw: new mhd(20, 265, 520, 54),
        xln: {
            fontSize: 20
        }
    };
    this.maw = {
        fkh: [
            [new mhd(162, 30, 130, 44)],
            [new mhd(162, 30, 130, 44), new mhd(828, 30, 130, 44)],
            [new mhd(162, 30, 130, 23), new mhd(828, 30, 130, 23), new mhd(162, 51, 130, 23)],
            [new mhd(162, 30, 130, 23), new mhd(828, 30, 130, 23), new mhd(162, 51, 130, 23), new mhd(828, 51, 130, 23)]
        ],
        display: {
            uwc: new mhd(0, 0, 130, 44),
            grr: new mhd(0, 0, 130, 44),
            pzy: new mhd(),
            aps: new mhd(2, 3, 126, 19),
            atp: new mhd(8, 24, 114, 19),
            roi: 16,
            bri: 18,
            rsl: 0
        },
        tgg: {
            uwc: new mhd(0, 0, 130, 23),
            grr: new mhd(0, 0, 130, 23),
            pzy: new mhd(2, 2, 19, 19),
            aps: new mhd(),
            atp: new mhd(22, 3, 100, 19),
            roi: 14,
            bri: 18,
            rsl: 0
        },
        cmv: {
            fkh: new mhd(222, 110, 676, 372),
            uwc: new mhd(32, 10, 612, 351),
            grr: new mhd(0, 0, 676, 372),
            pzy: new mhd(301, 263, 74, 74),
            aps: new mhd(120, 58, 436, 56),
            atp: new mhd(32, 140, 612, 96),
            roi: 68,
            bri: 100,
            rsl: 0
        },
        vab: {
            fkh: new mhd(198, 90, 724, 369),
            joo: new mhd(100, 53, 525, 50),
            atp: new mhd(186, 153, 332, 94),
            oqn: 340,
            qaf: 30,
            xqw: {
                _0: new mhd(2, 0, 90, 94),
                _1: new mhd(98, 0, 90, 94),
                _2: new mhd(194, 0, 90, 94),
                _3: new mhd(290, 0, 90, 94),
                _4: new mhd(386, 0, 90, 94),
                _5: new mhd(482, 0, 90, 94),
                _6: new mhd(578, 0, 90, 94),
                _7: new mhd(674, 0, 90, 94),
                _8: new mhd(770, 0, 90, 94),
                _9: new mhd(866, 0, 90, 94),
                _cm: new mhd(962, 0, 28, 94),
                _dt: new mhd(999, 0, 28, 94),
                _sp: new mhd(1036, 0, 28, 94)
            }
        }
    }
}
umu.prototype = new wdg;

function ucg() {
    this.ksz = false;
    this.oju = true;
    this.hlh = true;
    this.canvas = {
        fkh: new mhd(0, 0, 960, 630)
    };
    this.bje = {
        fkh: new mhd(),
        vaz: 0,
        bea: 0
    };
    this.yxh = {
        fkh: new mhd(0, 30, 800, 600),
        gld: 0
    };
    this.tey = {
        qfv: new mhd(0, 25, 500, 34),
        zdl: new mhd(5, 2, 160, 30),
        lvv: new mhd(170, 2, 160, 30),
        teq: new mhd(335, 2, 160, 30),
        xln: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.eyq = {
        yxh: {
            fkh: new mhd(0, 0, 640, 460),
            hsx: new mhd(6, 416, 628, 38),
            pdw: new mhd(6, 420, 628, 17),
            yyg: new mhd(64, 442, 512, 7),
            aai: new mhd(6, 364, 628, 90),
            tlz: new mhd(140, 384, 360, 70),
            fontSize: 18,
            osl: 20,
            owk: 30,
            zmi: 6,
            hck: 12,
            oqd: 6,
            nxk: 3
        },
        tzt: {
            fkh: new mhd(0, 0, 960, 630),
            hsx: new mhd(),
            pdw: new mhd(),
            yyg: new mhd(280, 431, 400, 8),
            aai: new mhd(180, 380, 600, 90),
            tlz: new mhd(350, 400, 260, 70),
            fontSize: 18,
            osl: 24,
            owk: 20,
            zmi: 0,
            hck: 12,
            oqd: 7,
            nxk: 0
        }
    };
    this.tsh = {
        fkh: new mhd(0, 0, 800, 30),
        fontSize: 16,
        jap: 26,
        snx: 15,
        bfi: 160,
        hck: 2,
        oqd: 2,
        jvn: 2,
        qgw: 0
    };
    this.oze = {};
    this.zqw = {
        fkh: new mhd(0, 0, 960, 630),
        qfv: new mhd(800, 0, 160, 630),
        xln: {
            wid: 0,
            bri: 0,
            hck: 0,
            xlm: 0,
            yci: 0,
            tth: 8,
            pmt: 16,
            gld: 4
        },
        aps: new mhd(0, 50, 800, 40),
        wxj: new mhd(0, 130, 800, 40),
        eez: new mhd(0, 170, 800, 40),
        ptz: new mhd(0, 210, 800, 40),
        cdw: new mhd(225, 305, 350, 100),
        qmw: new mhd(200, 510, 400, 40),
        nre: {
            oyi: new mhd(810, 455, 140, 100),
        },
        nfn: {
            oyi: new mhd(810, 355, 140, 100),
            ajv: new mhd(810, 165, 140, 100)
        },
        gde: 36,
        fontSize: 30,
        xby: 22,
        oqd: 3,
        hck: 5,
        gld: 2,
        juz: 3,
        ewu: 10
    };
    this.asq = {
        fkh: new mhd(0, 30, 800, 600),
        gld: 0,
        pmt: 0,
        hut: 50,
        wih: 30,
        ibi: 30,
        bpm: new mhd(30, 180, 410, 60),
        qqz: new mhd(460, 180, 50, 60),
        bcf: new mhd(512, 180, 210, 60),
        ugv: new mhd(724, 180, 50, 60),
        iwe: new mhd(30, 310, 410, 60),
        uyb: new mhd(460, 310, 50, 60),
        gdr: new mhd(512, 310, 210, 60),
        ymz: new mhd(724, 310, 50, 60),
        zqd: new mhd(30, 440, 410, 60),
        ylx: new mhd(512, 440, 210, 60),
        mia: new mhd(40, 530, 720, 50),
        rss: new mhd(30, 120, 360, 60),
        ckj: new mhd(460, 120, 50, 60),
        kwx: new mhd(512, 120, 210, 60),
        tbr: new mhd(724, 120, 50, 60),
        hoa: new mhd(40, 200, 760, 70),
        atz: new mhd(30, 280, 410, 60),
        azp: new mhd(460, 280, 50, 60),
        xiz: new mhd(512, 280, 210, 60),
        amm: new mhd(724, 280, 50, 60),
        shc: new mhd(30, 360, 410, 60),
        rda: new mhd(460, 360, 50, 60),
        zaf: new mhd(512, 360, 210, 60),
        cxo: new mhd(724, 360, 50, 60),
        ydx: new mhd(30, 440, 410, 60),
        ryl: new mhd(460, 440, 50, 60),
        xvk: new mhd(512, 440, 210, 60),
        exo: new mhd(724, 440, 50, 60),
        hsx: new mhd(40, 530, 720, 50),
        exi: {
            xaw: new mhd(0, 0, 267, 90),
            twe: new mhd(267, 0, 266, 90),
            hbn: new mhd(533, 0, 267, 90),
            ncr: new mhd()
        },
        hmg: {
            xaw: new mhd(0, 0, 200, 90),
            rod: new mhd(200, 0, 200, 90),
            twe: new mhd(400, 0, 200, 90),
            hbn: new mhd(600, 0, 200, 90),
            ncr: new mhd()
        },
        kal: [new mhd(132, 205, 200, 160), new mhd(464, 205, 200, 160)],
        edp: [new mhd(50, 205, 200, 160), new mhd(300, 205, 200, 160), new mhd(550, 205, 200, 160)],
        piw: [new mhd(132, 130, 200, 160), new mhd(464, 130, 200, 160), new mhd(132, 360, 200, 160), new mhd(464, 360, 200, 160)],
        ndi: [new mhd(50, 130, 200, 160), new mhd(300, 130, 200, 160), new mhd(550, 130, 200, 160), new mhd(50, 360, 200, 160), new mhd(300, 360, 200, 160), new mhd(550, 360, 200, 160)],
        eum: {
            pmt: 3,
            hck: -10,
            oqd: -1,
            tth: 6,
            fontSize: 36,
            gld: 0
        },
        cmt: {
            pmt: 3,
            hck: 10,
            oqd: -1,
            tth: 6,
            fontSize: 36,
            gld: 0
        },
        ztl: {
            fontSize: 36,
            hck: 0,
            oqd: 0,
            tth: 10,
            pmt: 0,
            gld: 0
        },
        pvw: {
            fontSize: 26,
            zmi: 5,
            pmt: 26,
            gld: 4,
            upb: 40
        },
        wtd: {
            roi: 16,
            wid: 40,
            apl: 0,
            xlm: 0,
            gld: 2,
            zmi: 3
        },
        lbn: {
            roi: 16,
            wid: 40,
            apl: 0,
            xlm: 0,
            gld: 2,
            zmi: 3
        },
        wrv: {
            pdw: new mhd(50, 0, 360, 60),
            uif: new mhd(0, 13, 30, 30),
            fontSize: 30,
            pmt: 0,
            gld: 2
        }
    };
    this.yxv = {
        fkh: new mhd(-10, 30, 310, 60),
        aps: new mhd(10, 6, 240, 26),
        pdw: new mhd(10, 34, 240, 20),
        pdh: new mhd(255, 11, 50, 38),
        oep: new mhd(8, 2, 34, 34),
        roi: 16,
        wid: 12,
        hqo: 24
    };
    this.rya = {
        fkh: new mhd(120, 150, 560, 330),
        roi: 26,
        fontSize: 20,
        uws: new mhd(515, 5, 40, 40),
        aps: new mhd(40, 5, 480, 30),
        qmw: new mhd(20, 40, 520, 195),
        nxw: new mhd(20, 265, 520, 54),
        xln: {
            fontSize: 20
        }
    };
    this.maw = {
        fkh: [
            [new mhd(2, 30, 130, 44)],
            [new mhd(2, 30, 130, 44), new mhd(668, 30, 130, 44)],
            [new mhd(2, 30, 130, 23), new mhd(668, 30, 130, 23), new mhd(2, 51, 130, 23)],
            [new mhd(2, 30, 130, 23), new mhd(668, 30, 130, 23), new mhd(2, 51, 130, 23), new mhd(668, 51, 130, 23)]
        ],
        display: {
            uwc: new mhd(0, 0, 130, 44),
            grr: new mhd(0, 0, 130, 44),
            pzy: new mhd(),
            aps: new mhd(2, 3, 126, 19),
            atp: new mhd(8, 24, 114, 19),
            roi: 16,
            bri: 18,
            rsl: 0
        },
        tgg: {
            uwc: new mhd(0, 0, 130, 23),
            grr: new mhd(0, 0, 130, 23),
            pzy: new mhd(2, 2, 19, 19),
            aps: new mhd(),
            atp: new mhd(22, 3, 100, 19),
            roi: 14,
            bri: 18,
            rsl: 0
        },
        cmv: {
            fkh: new mhd(62, 110, 676, 372),
            uwc: new mhd(32, 10, 612, 351),
            grr: new mhd(0, 0, 676, 372),
            pzy: new mhd(301, 263, 74, 74),
            aps: new mhd(120, 58, 436, 56),
            atp: new mhd(32, 140, 612, 96),
            roi: 68,
            bri: 100,
            rsl: 0
        },
        vab: {
            fkh: new mhd(38, 90, 724, 369),
            joo: new mhd(100, 53, 525, 50),
            atp: new mhd(186, 153, 332, 94),
            oqn: 340,
            qaf: 30,
            xqw: {
                _0: new mhd(2, 0, 90, 94),
                _1: new mhd(98, 0, 90, 94),
                _2: new mhd(194, 0, 90, 94),
                _3: new mhd(290, 0, 90, 94),
                _4: new mhd(386, 0, 90, 94),
                _5: new mhd(482, 0, 90, 94),
                _6: new mhd(578, 0, 90, 94),
                _7: new mhd(674, 0, 90, 94),
                _8: new mhd(770, 0, 90, 94),
                _9: new mhd(866, 0, 90, 94),
                _cm: new mhd(962, 0, 28, 94),
                _dt: new mhd(999, 0, 28, 94),
                _sp: new mhd(1036, 0, 28, 94)
            }
        }
    }
}
ucg.prototype = new wdg;

function bii() {
    this.bje = {
        fkh: new mhd(0, 20, 800, 600),
        vaz: 0,
        bea: 0
    };
    this.zlv = {
        fkh: new mhd(0, 0, 800, 500),
        oou: new mhd(635, 10, 140, 160),
        qgg: 65,
        lqz: 90
    };
    this.taz = {
        fkh: new mhd(0, 20, 800, 500),
        oou: new mhd(635, 30, 140, 160),
        qgg: 65,
        lqz: 90
    };
    this.lxm = {
        fkh: new mhd(0, 20, 800, 500),
        oou: new mhd(385, 160, 40, 80),
        zcj: 40,
        sum: -3,
        svo: {
            fontSize: 9,
            zmi: 8
        }
    };
    this.mju = [new mhd(403, 139, 397, 471), new mhd(117, 159, 539, 450), new mhd(0, 155, 395, 455)];
    this.hox = {
        fkh: new mhd(0, 470, 800, 150),
        xrz: new mhd(222, 56, 358, 67),
        bub: [new mhd(245, 64, 50, 50), new mhd(310, 64, 50, 50), new mhd(375, 64, 50, 50), new mhd(440, 64, 50, 50), new mhd(505, 64, 50, 50)],
        hhf: new mhd(0, 115, 150, 35),
        ztw: new mhd(700, 115, 100, 35),
        pwx: {
            fkh: new mhd(100, 134, 600, 16),
            fontSize: 12,
            oqd: 3,
            pmt: 3,
            xss: 2,
            tth: 6,
            gld: 0
        },
        svo: {
            fontSize: 11,
            zmi: 10
        },
        display: {
            roi: 12,
            wid: 21,
            apl: -9,
            xlm: 8,
            gld: 0,
            qbx: 3,
            nhf: 3,
            jxx: 3,
            lsg: 3
        },
        xln: {
            fontSize: 9,
            zmi: 2
        },
        rin: {
            pdj: new mhd(50, 35, 80, 80),
            pvz: new mhd(575, 52, 80, 80),
            xsr: new mhd(648, 40, 80, 80),
            sps: new mhd(735, 25, 60, 80)
        },
        fbw: {
            ajv: new mhd(5, 25, 80, 80),
            pdj: new mhd(100, 45, 80, 80),
            pvz: new mhd(575, 52, 80, 80),
            xsr: new mhd(648, 40, 80, 80),
            sps: new mhd(735, 25, 60, 80)
        }
    };
    this.dgp = {
        fkh: new mhd(220, 528, 360, 84),
        rhf: {
            xxe: new mhd(60, 4, 120, 80),
            has: new mhd(180, 4, 120, 80)
        },
        whf: {
            nzr: new mhd(60, 4, 120, 80),
            has: new mhd(180, 4, 120, 80)
        },
        dsa: {
            xxe: new mhd(35, 4, 90, 80),
            has: new mhd(135, 6, 90, 80),
            nzr: new mhd(235, 4, 90, 80)
        },
        tfu: {
            xxe: new mhd(35, 4, 90, 80),
            has: new mhd(135, 6, 90, 80),
            pvz: new mhd(235, 4, 90, 80)
        },
        gdk: {
            xxe: new mhd(0, 2, 90, 80),
            has: new mhd(90, 4, 90, 80),
            nzr: new mhd(180, 4, 90, 80),
            pvz: new mhd(270, 2, 90, 80)
        },
        xof: {
            tuk: new mhd(60, 4, 120, 80),
            ees: new mhd(180, 4, 120, 80)
        },
        xln: {
            fontSize: 9,
            zmi: 2
        }
    };
    this.aka = {
        fkh: new mhd(540, 170, 260, 340),
        zog: [
            [new mhd(95, 115, 75, 100)],
            [new mhd(140, 115, 75, 100), new mhd(25, 125, 75, 100)],
            [new mhd(180, 115, 75, 100), new mhd(95, 125, 75, 100), new mhd(10, 115, 75, 100)]
        ],
        bub: [
            [new mhd(105, 254, 40, 40)],
            [new mhd(135, 254, 40, 40), new mhd(75, 254, 40, 40)],
            [new mhd(150, 249, 40, 40), new mhd(105, 259, 40, 40), new mhd(60, 249, 40, 40)]
        ],
        ctj: new mhd(210, 234, 40, 40),
        pwx: {
            fkh: new mhd(60, 203, 132, 100),
            fontSize: 14
        },
        mby: {
            fontSize: 14,
            oqd: 5,
            height: 18,
            pmt: 5
        },
        qgf: {
            width: 24,
            height: 26,
            fontSize: 20,
            woa: 14,
            gld: 2,
            zmi: 6
        },
        cfn: {
            width: 16,
            oqd: 4,
            gld: 2
        },
        nbh: {
            fontSize: 14,
            pmt: 5,
            oqd: 11
        },
        dcw: {
            width: 75,
            height: 100,
            hck: 16,
            oqd: -20
        },
        svo: {
            fontSize: 9,
            zmi: 8
        },
        zcj: 40,
        nsw: 0,
        sum: -3
    };
    this.ccy = {
        fkh: new mhd(260, 200, 280, 330),
        zog: [
            [new mhd(110, 110, 75, 100)],
            [new mhd(170, 112, 75, 100), new mhd(35, 112, 75, 100)],
            [new mhd(198, 110, 75, 100), new mhd(108, 120, 75, 100), new mhd(18, 110, 75, 100)]
        ],
        bub: [
            [new mhd(120, 254, 40, 40)],
            [new mhd(150, 254, 40, 40), new mhd(90, 254, 40, 40)],
            [new mhd(165, 249, 40, 40), new mhd(120, 254, 40, 40), new mhd(75, 249, 40, 40)]
        ],
        ctj: new mhd(230, 246, 40, 40),
        pwx: {
            fkh: new mhd(75, 203, 132, 100),
            fontSize: 14
        },
        mby: {
            fontSize: 14,
            oqd: 5,
            height: 18,
            pmt: 5
        },
        qgf: {
            width: 24,
            height: 26,
            fontSize: 20,
            woa: 14,
            gld: 2,
            zmi: 6
        },
        cfn: {
            width: 16,
            oqd: 4,
            gld: 2
        },
        nbh: {
            fontSize: 14,
            pmt: 5,
            oqd: 11
        },
        dcw: {
            width: 75,
            height: 100,
            hck: 16,
            oqd: -20
        },
        svo: {
            fontSize: 9,
            zmi: 8
        },
        zcj: 40,
        nsw: 0,
        sum: -3
    };
    this.fiw = {
        fkh: new mhd(0, 170, 260, 340),
        zog: [
            [new mhd(95, 115, 75, 100)],
            [new mhd(160, 125, 75, 100), new mhd(35, 115, 75, 100)],
            [new mhd(180, 115, 75, 100), new mhd(95, 125, 75, 100), new mhd(10, 115, 75, 100)]
        ],
        bub: [
            [new mhd(105, 254, 40, 40)],
            [new mhd(135, 254, 40, 40), new mhd(75, 254, 40, 40)],
            [new mhd(150, 249, 40, 40), new mhd(105, 254, 40, 40), new mhd(60, 249, 40, 40)]
        ],
        ctj: new mhd(210, 269, 40, 40),
        pwx: {
            fkh: new mhd(65, 203, 132, 100),
            fontSize: 14
        },
        mby: {
            fontSize: 14,
            oqd: 5,
            height: 18,
            pmt: 5
        },
        qgf: {
            width: 24,
            height: 26,
            fontSize: 20,
            woa: 14,
            gld: 2,
            zmi: 6
        },
        cfn: {
            width: 16,
            oqd: 4,
            gld: 2
        },
        nbh: {
            fontSize: 14,
            pmt: 5,
            oqd: 11
        },
        dcw: {
            width: 75,
            height: 100,
            hck: 16,
            oqd: -20
        },
        svo: {
            fontSize: 9,
            zmi: 8
        },
        zcj: 40,
        nsw: 0,
        sum: -3
    };
    this.blk = {
        fkh: new mhd(260, 30, 280, 130),
        lhn: new mhd(40, 10, 75, 100),
        dcw: {
            width: 75,
            height: 100,
            hck: 16
        },
        qgf: {
            width: 24,
            height: 26,
            fontSize: 20,
            gld: 2,
            woa: 14,
            zmi: 6
        }
    };
    this.jzn = {
        fkh: new mhd(30, 30, 150, 85),
        xby: 10,
        gde: 15,
        hck: 0,
        oqd: 10
    };
    this.lrl = {
        fkh: new mhd(50, 20, 700, 465),
        gld: 3,
        pmt: 5,
        ajv: new mhd(465, 2, 233, 30),
        ekf: new mhd(2, 2, 233, 30),
        jas: new mhd(233, 2, 232, 30),
        xln: {
            pmt: 0,
            hck: 0,
            oqd: 0,
            tth: 5,
            fontSize: 14,
            gld: 2
        },
        dkd: {
            fkh: new mhd(0, 0, 700, 465),
            aps: new mhd(),
            qug: [new mhd(20, 40, 660, 30), new mhd(20, 80, 660, 30), new mhd(20, 115, 660, 30), new mhd(20, 150, 660, 30), new mhd(20, 185, 660, 30), new mhd(20, 220, 660, 30), new mhd(20, 255, 660, 30), new mhd(20, 290, 660, 30), new mhd(20, 325, 660, 30), new mhd(20, 360, 660, 30), new mhd(20, 395, 660, 40)],
            hsx: new mhd(0, 440, 700, 20),
            roi: 22,
            fontSize: 12,
            ibi: 10,
            lineWidth: 0
        },
        jwl: {
            fkh: new mhd(0, 0, 700, 465),
            aps: new mhd(),
            qug: [new mhd(100, 50, 230, 80), new mhd(425, 50, 230, 60), new mhd(100, 140, 230, 80), new mhd(100, 230, 230, 80), new mhd(100, 320, 230, 80), new mhd(425, 170, 230, 80), new mhd(425, 260, 230, 80), new mhd(425, 350, 230, 60), new mhd(425, 120, 230, 40)],
            hsx: new mhd(0, 440, 700, 20),
            roi: 22,
            fontSize: 12,
            ibi: 10,
            lineWidth: 0
        }
    }
}
bii.prototype = new lqm;

function iyh() {
    this.oqm = true
}
iyh.prototype = new bii;

function enp() {
    this.oqm = true;
    this.ksz = true
}
enp.prototype = new bii;
var sut = {
    language: {
        EN: "en",
        RU: "ru",
        EE: "et",
        ES: "es",
        DE: "de",
        TR: "tr",
        CZ: "cs",
        GR: "el",
        AT: "at",
        US: "us",
        BG: "bg",
        CO: "co",
        CL: "cl",
        MX: "mx",
        VE: "ve",
        BR: "br",
        GE: "ka",
        HU: "hu",
        RO: "ro",
        PT: "pt",
        FR: "fr",
        HR: "hr",
        IT: "it",
        SE: "sv"
    },
    qfs: {
        vna: 0,
        tcw: 1,
        xqq: 2,
        zdb: 3,
        qgm: 4,
        fus: 5,
        jmy: 10,
        pob: 11,
        aec: 12,
        sun: 13,
        zfd: 14,
        hub: 15,
        fwe: 16
    },
    os: {
        itf: 0,
        yqc: 1,
        phg: 2,
        hqy: 3,
        knd: 4
    },
    vrz: {
        pmr: 1,
        zvz: 3,
        smc: 4,
        mwo: 5,
        hkc: 7,
        vou: 8,
        qzd: 11,
        zmt: 13,
        wan: 14,
        hix: 6,
        pke: 9,
        uki: 10
    },
    jhe: {
        vrl: 1,
        wib: 2,
        tvv: 4,
        pwq: 8,
        gcm: 16,
        unc: 32
    },
    ife: {
        tos: 1,
        bej: 2,
        boe: 3,
        czk: 4,
        bpj: 5,
        bzq: 6,
        okj: 7,
        udy: 94,
        wen: 95,
        jpq: 96,
        qiy: 97,
        tas: 98,
        zkc: 99,
        roulette: {
            tgo: 2,
            wjn: 9,
            ali: 10
        }
    },
    ui: {
        syh: "minimal",
        zwq: "modern",
        smc: "classic"
    },
    ngc: {
        bvd: "auto",
        vak: "left",
        ytw: "right"
    },
    eyq: {
        cin: 0,
        ons: 4
    },
    maw: {
        nlz: {
            acy: "ji",
            brv: "jv",
            fde: "jh"
        }
    },
    fcv: {
        ysm: {
            ocq: 1,
            hgb: 2
        },
        wyc: {
            uao: 1,
            plr: 2,
            qkv: 3
        }
    },
    tbp: {
        cez: 0,
        vwm: 1
    }
};
sut.fun = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += sut.jhe.vrl
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += sut.jhe.wib
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += sut.jhe.tvv
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += sut.jhe.tvv
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += sut.jhe.pwq
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.iii = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.iii();
                if (!e.start) {
                    e.start = e.noteOn
                }
                if (!e.stop) {
                    e.stop = e.noteOff
                }
                return e
            }
        }
        if (window.requestAnimationFrame) {
            window.zxh = window.requestAnimationFrame;
            window.het = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.zxh; ++a) {
            window.zxh = window[g[a] + "RequestAnimationFrame"];
            window.het = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.zxh || !window.het) {
            window.zxh = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.het) {
            window.het = function(e) {
                clearTimeout(e)
            }
        }
        if (window.MozWebSocket) {
            window.WebSocket = window.MozWebSocket
        }
        if (navigator.browserLanguage) {
            navigator.language = navigator.browserLanguage
        }
    } catch (c) {
        console.error(c.ife)
    }
    return f
})();

function ybt() {
    var a = {};
    this.alk = 1;
    this.fcy = 1;
    this.nmb = 0.6;
    this.ubb = 0.4;
    this.ard = function() {};
    this.vsq = function(b, c) {
        a[b] = c
    };
    this.urx = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.alk
        }
    }
}

function qlc() {
    this.audio = {
        aii: 65,
        eoj: -1,
        value: "A",
        tgt: null
    };
    this.pgr = {
        aii: 70,
        eoj: 122,
        value: "F",
        tgt: "F11"
    };
    this.ygy = {
        aii: 72,
        eoj: -1,
        value: "H",
        tgt: null
    };
    this.zqw = {
        aii: 83,
        eoj: -1,
        value: "S",
        tgt: null
    };
    this.pqg = {
        aii: 68,
        eoj: -1,
        value: "D",
        tgt: null
    };
    this.ok = {
        aii: 13,
        eoj: -1,
        value: "OK",
        tgt: null
    };
    this.yto = [this.audio, this.pgr, this.ygy, this.zqw, this.pqg, this.ok]
}

function rgx() {
    var o = this;
    this.yet = false;
    this.zqz = null;
    this.dix = false;
    this.cvp = false;
    var f = {};
    var i = {};
    var d = [];
    var a = [];
    var k = [];
    var j = 30;
    var g = 0;
    var b = 0;
    var e = 0;
    var m = [];
    var l = null;
    var c = false;
    var n = false;
    this.ard = function() {
        this.mpw();
        this.bth();
        this.dix = false;
        this.cvp = false
    };
    this.mpw = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.zqz = webAudioEngine.createGain();
            this.zqz.connect(webAudioEngine.destination);
            this.yet = true
        } catch (p) {
            this.yet = false
        }
    };
    this.bth = function() {
        m = sut.zdt.xxp()
    };
    this.pqb = function(p) {
        l = p
    };
    this.zvm = function(p) {
        c = p
    };
    this.plc = function(t, s, p, q) {
        var r = new taa(t);
        r.ard(this.yet, s, p, l.urx(t));
        i[t] = r;
        k.push(r);
        d.push({
            bci: r,
            wnz: q,
            lcb: o.pcu,
            mxx: m
        })
    };
    this.ksn = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            bci: p,
            wnz: q,
            lcb: null
        })
    };
    this.fsg = function(q, p) {
        d.unshift({
            bci: null,
            wnz: q,
            lcb: o.cmz,
            hhp: p
        })
    };
    this.qwn = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.ijg(d.shift())
        }
    };
    this.start = function() {
        if (!o.dix) {
            return
        }
        o.dix = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.ijg(a.shift())
        }
    };
    this.vma = function() {
        b++;
        if (o.anh()) {
            o.dix = true;
            sut.yxh.hzi()
        }
    };
    this.odo = function() {
        o.btp()
    };
    this.asw = function() {
        o.cvp = true;
        o.btp()
    };
    this.btp = function() {
        b++;
        o.thq();
        if (o.anh()) {
            o.gso()
        } else {
            o.zjq()
        }
    };
    this.thq = function() {
        var p = sut.yxh.njg.hie("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.nht(e)
            }
        }
    };
    this.gso = function() {
        var q = sut.yxh.njg.hie("loading");
        if (o.cvp) {
            sut.yxh.ikk(sut.yxh.language.oso);
            var p = confirm(sut.yxh.language.bdr);
            if (p == true) {
                sut.yxh.lni = false;
                o.aed();
                sut.yxh.dxp()
            } else {
                if (sut.yxh.rmj) {
                    sut.yxh.rmj.rsa({
                        sender: sut.yxh.fzw,
                        lang: sessionStorage.sessionValue1.toUpperCase(),
                        data: {
                            success: false
                        }
                    })
                }
                setTimeout(sut.yxh.kfv, 1000)
            }
        } else {
            if (!sut.yxh.vir) {
                e = 100;
                if (q) {
                    q.nht(e)
                }
                if (c === true) {
                    q.cio()
                } else {
                    setTimeout(sut.yxh.dxp, 200)
                }
            }
        }
    };
    this.lfh = function() {
        return e
    };
    this.zjq = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].bci instanceof Image || a[0].bci instanceof taa)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.ijg(a.shift())
        }
    };
    this.anh = function() {
        return (g > 0 && b == g)
    };
    this.ijg = function(p) {
        if (p.bci instanceof Image) {
            if (n === true) {
                this.wer(p.bci, p.wnz)
            } else {
                this.ajb(p.bci, p.wnz)
            }
        } else {
            if (p.bci instanceof taa) {
                this.and(p.bci, p.wnz, p.lcb, p.mxx)
            } else {
                this.psx(p.wnz, p.hhp, p.lcb)
            }
        }
    };
    this.wer = function(q, p) {
        q.onload = function() {
            sut.yxh.upk.vma()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + sut.yxh.hni
    };
    this.ajb = function(q, p) {
        q.onload = function() {
            sut.yxh.upk.odo()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            sut.yxh.ikk(sut.yxh.language.cgr);
            setTimeout(sut.yxh.kfv, 3000)
        };
        q.src = p + "?v=" + sut.yxh.hni
    };
    this.and = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.psx = function(s, p, t) {
        var q = new XMLHttpRequest();
        q.open("GET", s + p, true);
        q.responseType = "text";
        q.onreadystatechange = function() {
            if (q.readyState == 4 && q.status == 200) {
                var u = JSON.parse(q.responseText);
                t(s, u)
            }
        };
        q.onerror = function() {
            console.error("can not load " + s + p);
            sut.yxh.ikk(sut.yxh.language.cgr);
            setTimeout(sut.yxh.kfv, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            sut.yxh.ikk(sut.yxh.language.cgr);
            setTimeout(sut.yxh.kfv, 3000)
        }
    };
    this.pcu = function(q, p) {
        i[q].kbc = p
    };
    this.cmz = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.zvs(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            sut.yxh.ikk(sut.yxh.language.cgr);
            setTimeout(sut.yxh.kfv, 3000)
        };
        p.src = r + q.src + "?v=" + sut.yxh.hni
    };
    this.zvs = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.hvf(u[t].id, s)
        }
        sut.yxh.upk.odo()
    };
    this.gve = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.hvf = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.mcq = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.vzi = function(p) {
        if (!i) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (i[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.mhy = function(p) {
        if (!f) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (f[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.vjc = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.iie = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.qbk = function(q, p) {
        if (i && i[q]) {
            i[q].ime(p)
        } else {}
    };
    this.pwc = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].lbq(l.urx(s) * q, r, p)
        }
    };
    this.rmc = function(p) {
        if (i && i[p]) {
            return i[p].itu()
        }
        return 0
    };
    this.ngf = function(p) {
        if (this.yet) {
            this.zqz.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.jwd = function(q) {
        if (this.yet) {
            this.zqz.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].ime(q)
                }
            }
        }
    };
    this.aed = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function mbv() {
    this.ufc = {};
    this.tcy = {};
    this.fqi = [];
    this.ard = function() {
        this.ufc = {};
        this.tcy = {};
        this.fqi = []
    };
    this.wwh = function(b) {
        this.ufc[b] = b
    };
    this.mpd = function(f, e, d) {
        this.tcy[f] = e;
        this.tcy[f].zgv = [];
        if (d && this.ufc) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.ufc[d[c]]) {
                    this.tcy[f].zgv.push(d[c])
                } else {}
            }
        }
        this.fqi.push(this.tcy[f])
    };
    this.txp = function() {
        var c = [];
        for (var d = 0, b = this.fqi.length; d < b; d++) {
            if (this.fqi[d] != null) {
                c.push(this.fqi[d])
            }
        }
        return c
    };
    this.hie = function(b) {
        if (this.tcy && this.tcy[b]) {
            return this.tcy[b]
        }
        return null
    };
    this.ruv = function(g) {
        if (this.ufc && this.ufc[g]) {
            var d = [];
            for (var f = 0, b = this.fqi.length; f < b; f++) {
                for (var e = 0, c = this.fqi[f].zgv.length; e < c; e++) {
                    if (this.fqi[f].zgv[e] == g) {
                        d.push(this.fqi[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.ktp = function() {
        return this.ufc
    };
    this.vha = function(e) {
        var d = -1;
        if (this.tcy && this.tcy[e]) {
            for (var c = 0, b = this.fqi.length; c < b; c++) {
                if (this.fqi[c] == this.tcy[e]) {
                    d = c;
                    this.tcy[e] = null
                }
            }
        }
        if (d >= 0) {
            this.fqi.splice(d, 1)
        }
    };
    this.lvi = function(f) {
        if (this.ufc && this.ufc[f]) {
            this.ufc[f] = null;
            for (var e = 0, b = this.fqi.length; e < b; e++) {
                for (var d = 0, c = this.fqi[e].zgv.length; d < c; d++) {
                    if (this.fqi[e].zgv[d] == f) {
                        this.fqi[e].zgv.splice(d, 1)
                    }
                }
            }
        }
    };
    this.pck = function(e, d, c, b) {
        return a(this.hie(e), d, c, b)
    };
    this.act = function(f, d, c) {
        for (var e = 0, b = this.fqi.length; e < b; e++) {
            a(this.fqi[e], f, d, c)
        }
    };
    this.dya = function(k, l, f, e) {
        if (this.ufc && this.ufc[k]) {
            for (var g = 0, b = this.fqi.length; g < b; g++) {
                for (var d = 0, c = this.fqi[g].zgv.length; d < c; d++) {
                    if (this.fqi[g].zgv[d] == k) {
                        a(this.fqi[g], l, f, e)
                    }
                }
            }
        }
    };

    function a(d, g, c, b) {
        if (!b) {
            b = Object
        }
        try {
            if ((d) && (d instanceof b) && (typeof g === "string" && g.indexOf("#") == 0)) {
                g = d[g.substring(1, g.length)];
                if (typeof g === "function") {
                    if (c) {
                        return g.apply(d, c)
                    } else {
                        return g.call(d)
                    }
                }
            }
        } catch (f) {
            console.error(f)
        }
    }
}

function taa(b) {
    var a = this;
    this.uxa = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.fie = false;
    this.kbc = null;
    this.gqk = null;
    this.zzg = 0;
    this.crq = 0;
    this.hho = 0;
    this.wyk = 0;
    this.scr = 30000;
    this.zsh = "";
    this.nll = "";
    this.viy = "";
    this.mft = null;
    this.lci = 1;
    this.pod = 0;
    this.fvq = -1;
    this.hvp = 0;
    this.cef = 0;
    this.zke = false;
    this.ard = function(c, f, d, e) {
        this.fie = c;
        if (e) {
            this.lci = e;
            this.volume = e
        }
        if (f) {
            this.uxa = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.fie) {
            clearTimeout(this.fvq);
            if (this.kbc) {
                this.volume = (this.muted === true) ? 0 : sut.ipy.value40 * this.lci;
                this.zke = false;
                this.gqk = webAudioEngine.createBufferSource();
                this.gqk.buffer = this.kbc;
                this.gqk.loop = this.loop;
                this.zzg = webAudioEngine.createGain();
                this.zzg.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.gqk.connect(this.zzg);
                this.zzg.connect(sut.yxh.upk.zqz);
                this.gqk.start(0, c);
                this.pod = webAudioEngine.currentTime;
                if (this.uxa) {
                    this.crq = setTimeout(a.uxa, a.kbc.duration * 1000)
                }
            }
        } else {
            if (this.gqk) {
                if (this.loop) {
                    if (sut.zdt.elu != sut.qfs.qgm && sut.zdt.elu != sut.qfs.zfd) {
                        this.hho = setInterval(a.tjk, a.gqk.duration * 1000)
                    }
                }
                this.gqk.currentTime = 0;
                this.gqk.play()
            }
        }
    };
    this.tjk = function() {
        if (!a.gqk.paused || (sut.zdt.elu != sut.qfs.xqq && sut.zdt.elu != sut.qfs.aec)) {
            a.gqk.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.fie) {
                a.pod = 0;
                if (a.gqk) {
                    a.gqk.stop(0);
                    a.gqk = null
                }
                clearTimeout(a.crq);
                if (a.fvq >= 0) {
                    clearTimeout(a.fvq);
                    a.fvq = -1
                }
            } else {
                if (a.gqk) {
                    a.gqk.currentTime = 0;
                    a.gqk.pause();
                    clearInterval(a.hho);
                    if (a.fvq >= 0) {
                        clearTimeout(a.fvq);
                        a.fvq = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.zsh = d[0];
        if (d.length >= 2) {
            this.nll = d[1];
            this.viy = e;
            this.mft = c
        }
        e += this.zsh + "?v=" + sut.yxh.hni;
        if (this.fie) {
            this.jix(e, c)
        } else {
            this.fyb(e)
        }
    };
    this.xua = function() {
        if (this.fie) {
            this.jix(this.viy + this.nll + "?v=" + sut.yxh.hni, this.mft)
        }
    };
    this.fyb = function(c) {
        this.gqk = new Audio();
        this.wyk = setTimeout(function() {
            console.error("can not load audio " + c);
            sut.yxh.upk.asw()
        }, this.scr);
        this.gqk.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.wyk);
            sut.yxh.upk.odo();
            a.wzh()
        }, false);
        this.gqk.addEventListener("error", function() {
            clearTimeout(a.wyk);
            console.error("can not load audio " + c);
            sut.yxh.upk.asw()
        }, false);
        this.gqk.volume = sut.ipy.value40 * this.volume;
        this.gqk.src = c;
        this.gqk.load()
    };
    this.jix = function(f, g) {
        var c = new XMLHttpRequest();
        c.open("GET", f, true);
        c.responseType = "arraybuffer";
        c.onload = function() {
            webAudioEngine.decodeAudioData(c.response, function(e) {
                if (g) {
                    if (a.id) {
                        g(a.id, e)
                    } else {
                        g(e)
                    }
                }
                sut.yxh.upk.odo()
            }, function() {
                a.ird("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.ird("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.ird("can not load audio from ", f)
        }
    };
    this.ird = function(d, c) {
        console.error(d + c);
        if (a.nll != "" && c.indexOf(a.nll) < 0) {
            a.xua()
        } else {
            sut.yxh.upk.asw()
        }
    };
    this.aia = function(c) {
        this.uxa = c;
        this.wzh()
    };
    this.wzh = function() {
        if (!this.fie) {
            if (this.uxa) {
                if (this.gqk) {
                    this.gqk.addEventListener("ended", function() {
                        a.uxa()
                    }, false)
                }
            }
            if (sut.zdt.elu == sut.qfs.qgm || sut.zdt.elu == sut.qfs.zfd) {
                if (this.loop) {
                    if (this.gqk) {
                        this.gqk.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.nyj = function() {
        if (!this.igi) {
            if (this.uxa) {
                if (this.gqk) {
                    this.gqk.removeEventListener("ended", function() {
                        a.uxa()
                    }, false)
                }
            }
            if (sut.zdt.elu == sut.qfs.qgm || sut.zdt.elu == sut.qfs.zfd) {
                if (this.loop) {
                    if (this.gqk) {
                        this.gqk.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.lbq = function(d, e, c) {
        if (this.fie === true && this.zzg) {
            this.volume = (this.muted === true) ? 0 : sut.ipy.value40 * d * this.lci;
            if (e > 0) {
                this.zzg.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.zzg.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.fvq = setTimeout(this.stop, e)
            }
        } else {
            if (!this.fie && c === true) {
                this.fvq = setTimeout(this.stop, e)
            }
        }
    };
    this.ime = function(c) {
        this.muted = c;
        if (!this.fie) {
            if (this.gqk && this.gqk.readyState > 0) {
                this.gqk.muted = c
            }
        } else {
            if (this.zzg) {
                this.zzg.gain.linearRampToValueAtTime((this.muted === true) ? 0 : sut.ipy.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.fie) {
            if (this.gqk) {
                this.gqk.stop(0);
                clearTimeout(this.crq);
                this.gqk = null
            }
        } else {
            if (this.gqk && this.gqk.readyState > 0) {
                this.gqk.currentTime = 0;
                this.gqk.pause();
                if (this.uxa) {
                    this.nyj(this.uxa)
                }
                this.gqk = null
            }
        }
    };
    this.itu = function() {
        if (this.fie && this.pod > 0) {
            return (webAudioEngine.currentTime - this.pod) % this.kbc.duration
        }
        return 0
    }
}

function mhd(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.tmc = function() {
        return this.x + this.width
    };
    this.sry = function() {
        return this.y + this.height
    };
    this.bfn = function() {
        return this.x + this.width / 2
    };
    this.rgu = function() {
        return this.y + this.height / 2
    };
    this.ngh = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.ldd = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function uyo() {
    this.elu = -1;
    this.scy = -1;
    this.wvx = false;
    this.qiq = false;
    this.zuy = false;
    this.nbq = false;
    this.urf = false;
    this.wnf = false;
    this.yyc = false;
    this.zma = true;
    this.imf = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.wvx = true;
            this.zuy = true;
            this.elu = sut.qfs.xqq
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.zuy = true
                }
                this.elu = sut.qfs.fus
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.elu = sut.qfs.aec;
                        this.zuy = true
                    } else {
                        this.elu = sut.qfs.xqq
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0 || this.mtj()) {
                            if (a.indexOf("Android") >= 0) {
                                this.elu = sut.qfs.fwe;
                                this.zuy = true
                            } else {
                                this.elu = sut.qfs.pob;
                                this.zuy = true;
                                this.nbq = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.urf = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.wnf = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.elu = sut.qfs.tcw
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.elu = sut.qfs.zdb
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.elu = sut.qfs.hub;
                                    this.zuy = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.elu = sut.qfs.zfd;
                                        this.zuy = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.elu = sut.qfs.zfd;
                                            this.zuy = true
                                        } else {
                                            this.elu = sut.qfs.qgm
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.elu = sut.qfs.pob;
                                    this.qiq = true;
                                    this.zuy = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.elu = sut.qfs.pob;
                                        this.qiq = true;
                                        this.zuy = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.elu = sut.qfs.jmy;
                                            this.zuy = true
                                        } else {
                                            this.elu = sut.qfs.vna
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.gle = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.gwe = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.scy = sut.os.itf;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.yyc = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0 || (a.indexOf("Mac") >= 0 && this.mtj())) {
                this.scy = sut.os.hqy
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.scy = sut.os.phg
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.scy = sut.os.knd;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.zma = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.scy = sut.os.yqc
                        }
                    }
                }
            }
        }
    };
    this.zyy = function() {
        return this.wnf
    };
    this.swp = function() {
        return (this.urf && !this.wnf)
    };
    this.vvm = function() {
        return this.nbq
    };
    this.oxx = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.cho = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.mtj = function() {
        if (("ontouchstart" in window) || window.upt) {
            return true
        }
        return false
    };
    this.fpl = function() {
        try {
            var a = document.createElement("canvas");
            if (!!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))) {
                return true
            } else {
                return false
            }
        } catch (b) {
            return false
        }
    };
    this.bwz = function() {
        return (this.xpd() === true)
    };
    this.xpd = function() {
        if ((screen.width <= sut.ipy.value73.w && screen.height <= sut.ipy.value73.h) || (screen.height <= sut.ipy.value73.w && screen.width <= sut.ipy.value73.h)) {
            return true
        }
        return false
    };
    this.lbs = function(i, j, k, n, e, b, f, l, m, a, d, g) {
        var c = "";
        if (!n) {
            n = 0
        }
        if (!e) {
            e = 0
        }
        if (!b) {
            b = 0
        }
        if (!f) {
            f = 0
        }
        c = "matrix(" + j + "," + b + "," + f + "," + k + "," + n + "," + e + ")";
        if (d) {
            c += " scaleX(+" + d + ")"
        }
        if (g) {
            c += " scaleY(+" + g + ")"
        }
        if (l) {
            c += " rotateX(+" + l + "deg)"
        }
        if (m) {
            c += " rotateY(+" + m + "deg)"
        }
        if (a) {
            c += " translateZ(+" + a + "px)"
        }
        if (i.style.MozTransform != undefined) {
            i.style.MozTransform = c
        } else {
            if (i.style.WebkitTransform != undefined) {
                i.style.WebkitTransform = c
            } else {
                if (i.style.OTransform != undefined) {
                    i.style.OTransform = c
                } else {
                    if (i.style.msTransform != undefined) {
                        i.style.msTransform = c
                    }
                }
            }
        }
    };
    this.lja = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.ejt = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.glz = function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else {
                if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen()
                } else {
                    if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen()
                    } else {
                        if (document.documentElement.msRequestFullscreen) {
                            document.documentElement.msRequestFullscreen()
                        }
                    }
                }
            }
            return true
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else {
                        if (document.msExitFullScreen) {
                            document.msExitFullScreen()
                        }
                    }
                }
            }
            return false
        }
    };
    this.omw = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.axh = function(b) {
        try {
            if (this.omw() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.ycx = function() {
        try {
            if (this.omw() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.cwr = function() {
        return false
    };
    this.fkz = function(c, a) {
        var b = new XMLHttpRequest();
        if ("withCredentials" in b) {
            b.open(c, a, true)
        } else {
            if (typeof XDomainRequest != "undefined") {
                b = new XDomainRequest();
                b.open(c, a)
            } else {
                b = null
            }
        }
        return b
    };
    this.xxp = function() {
        var b = document.createElement("audio"),
            c = [];
        if (!!(b.canPlayType && b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))) {
            c.push(".ogg")
        }
        if (!!(b.canPlayType && b.canPlayType("audio/mpeg;").replace(/no/, ""))) {
            c.push(".mp3")
        }
        return c
    };
    this.ffx = function(q, o, f, l, k, a, p, d, r, g, n, j) {
        try {
            var m = 0,
                b = r,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            q.textAlign = "center";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a / 2, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a / 2, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.ujb = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                l += r;
                a -= r
            }
            q.textAlign = "left";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.fzv = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                a -= r
            }
            q.textAlign = "right";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.gaf = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
        try {
            var l = 0,
                D = 0,
                E = 0,
                a = 0,
                g = [],
                f = "",
                C = 0,
                F = 0,
                A = 0,
                G = 1;
            var o = c;
            if (!d) {
                d = ""
            }
            if (!u) {
                u = "left"
            }
            r.save();
            r.textAlign = u;
            r.textBaseline = "bottom";
            r.fillStyle = t;
            r.font = d + " " + o + "px " + n;
            a = r.measureText(m).width / q;
            a = (a >= Math.round(a)) ? Math.round(a) + 1 : Math.round(a);
            if (o * a > p) {
                G = p / (o * a);
                o = Math.round(G * o) - 1;
                r.font = d + " " + o + "px " + n;
                a = r.measureText(m).width / q;
                a = (a > Math.round(a)) ? Math.round(a) + 1 : Math.round(a)
            }
            for (var v = A; v < m.length; v++) {
                f += m.charAt(v);
                l = r.measureText(f).width;
                if (m.charAt(v) == " " || m.charAt(v) == "|") {
                    C = v
                }
                if (v == m.length - 1) {
                    g[F] = m.substring(A, m.length)
                } else {
                    if (m.charAt(v) == "|") {
                        g[F] = m.substring(A, v);
                        F++;
                        A = v + 1;
                        f = m.substring(C + 1, v)
                    } else {
                        if (l >= q) {
                            g[F] = m.substring(A, C);
                            F++;
                            A = C + 1;
                            f = m.substring(C + 1, v)
                        }
                    }
                }
            }
            for (var v = 0; v < g.length; v++) {
                E = (u == "left") ? k : (u == "center") ? (k + q / 2) : k + q;
                if (b) {
                    D = j + (p + o) / (g.length + 1) * (v + 1)
                } else {
                    D = j + Math.round(o * 1.5 * (v + 1))
                }
                r.fillText(g[v], E, D);
                if (z && s) {
                    r.strokeStyle = z;
                    r.lineWidth = s;
                    r.strokeText(g[v], E, D)
                }
            }
            r.restore()
        } catch (B) {
            console.error(B)
        }
    };
    this.xwv = function(m, g, d, a, j, b, k, l, f) {
        try {
            var i = 0;
            m.save();
            if (l && f) {
                i = Math.round(f / 2);
                m.beginPath();
                m.moveTo(g + b + i, d + i);
                m.arcTo(g + a - i, d + i, g + a - i, d + b + i, b);
                m.arcTo(g + a - i, d + j - i, g + a - b - i, d + j - i, b);
                m.arcTo(g + i, d + j - i, g + i, d + j - b - i, b);
                m.arcTo(g + i, d + i, g + b + i, d + i, b);
                m.closePath()
            } else {
                m.beginPath();
                m.moveTo(g + b, d);
                m.arcTo(g + a, d, g + a, d + b, b);
                m.arcTo(g + a, d + j, g + a - b, d + j, b);
                m.arcTo(g, d + j, g, d + j - b, b);
                m.arcTo(g, d, g + b, d, b);
                m.closePath()
            }
            if (k) {
                m.fillStyle = k;
                m.fill()
            }
            if (l && f) {
                m.strokeStyle = l;
                m.lineWidth = f;
                m.stroke()
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.qot = function(n, i, f, a, k, c, m, b, l, g, o) {
        try {
            var j = 0;
            n.save();
            if (l && g) {
                j = Math.round(g / 2);
                n.beginPath();
                n.moveTo(i + c + j, f + j);
                n.arcTo(i + a - j, f + j, i + a - j, f + c + j, c);
                n.arcTo(i + a - j, f + k - j, i + a - c - j, f + k - j, c);
                n.arcTo(i + j, f + k - j, i + j, f + k - c - j, c);
                n.arcTo(i + j, f + j, i + c + j, f + j, c);
                n.closePath()
            } else {
                n.beginPath();
                n.moveTo(i + c, f);
                n.arcTo(i + a, f, i + a, f + c, c);
                n.arcTo(i + a, f + k, i + a - c, f + k, c);
                n.arcTo(i, f + k, i, f + k - c, c);
                n.arcTo(i, f, i + c, f, c);
                n.closePath()
            }
            if (m) {
                if (b) {
                    n.globalAlpha = b
                }
                n.fillStyle = m;
                n.fill()
            }
            if (l && g) {
                if (o) {
                    n.globalAlpha = o
                }
                n.strokeStyle = l;
                n.lineWidth = g;
                n.stroke()
            }
            n.restore()
        } catch (d) {
            console.error(d)
        }
    };
    this.aob = function(o, d, k, j, n, l, f, p, q, g, m, c) {
        try {
            var b = Math.round(f / 2),
                i = 0,
                r = 1,
                a = 2,
                t = 3;
            o.save();
            o.beginPath();
            if (d === i) {
                o.moveTo(k + f, j + b);
                o.lineTo(k + n - b, j + (l) / 2 - b);
                o.bezierCurveTo(k + n - b, j + (l) / 2 - b, k + n, j + (l) / 2 + b, k + n - b, j + (l) / 2 + b);
                o.lineTo(k + f, j + l - b);
                o.bezierCurveTo(k + f, j + l - b, k, j + l, k, j + l - b);
                o.lineTo(k, j + b);
                o.bezierCurveTo(k, j + b, k + f, j, k + f, j + b)
            } else {
                if (d === r) {
                    o.moveTo(k + n - f, j + b);
                    o.lineTo(k + b, j + (l) / 2 - b);
                    o.bezierCurveTo(k + b, j + (l) / 2 - b, k, j + (l) / 2 + b, k + b, j + (l) / 2 + b);
                    o.lineTo(k + n - f, j + l - b);
                    o.bezierCurveTo(k + n - f, j + l - b, k + n, j + l, k + n, j + l - b);
                    o.lineTo(k + n, j + b);
                    o.bezierCurveTo(k + n, j + b, k + n - f, j, k + n - f, j + b)
                } else {
                    if (d === a) {
                        o.moveTo(k + n - b, j + f);
                        o.lineTo(k + n / 2 + b, j + l - b);
                        o.bezierCurveTo(k + n / 2 + b, j + l - b, k + n / 2 - b, j + l, k + n / 2 - b, j + l - b);
                        o.lineTo(k + b, j + f);
                        o.bezierCurveTo(k + b, j + f, k, j, k + b, j);
                        o.lineTo(k + n - b, j);
                        o.bezierCurveTo(k + n - b, j, k + n, j + f, k + n - b, j + f)
                    } else {
                        if (d === t) {
                            o.moveTo(k + n - b, j + l - f);
                            o.lineTo(k + n / 2 + b, j + b);
                            o.bezierCurveTo(k + n / 2 + b, j + b, k + n / 2 - b, j, k + n / 2 - b, j + b);
                            o.lineTo(k + b, j + l - f);
                            o.bezierCurveTo(k + b, j + l - f, k, j + l, k + b, j + l);
                            o.lineTo(k + n - b, j + l);
                            o.bezierCurveTo(k + n - b, j + l, k + n, j + l - f, k + n - b, j + l - f)
                        }
                    }
                }
            }
            o.closePath();
            if (p) {
                if (q) {
                    o.globalAlpha = q
                }
                o.fillStyle = p;
                o.fill()
            }
            if (g && m) {
                if (c) {
                    o.globalAlpha = c
                }
                o.strokeStyle = g;
                o.lineWidth = m;
                o.stroke()
            }
            o.restore()
        } catch (s) {
            console.error(s)
        }
    };
    this.qji = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
        try {
            var k = 0;
            q.save();
            if (n && i) {
                k = Math.round(i / 2);
                q.beginPath();
                q.moveTo(j + p + k, g + k);
                if (l > 0) {
                    q.arcTo(j + b - k, g + k, j + b - k, g + l + k, l)
                } else {
                    q.lineTo(j + b - k, g + k)
                }
                if (d > 0) {
                    q.arcTo(j + b - k, g + m - k, j + b - d - k, g + m - k, d)
                } else {
                    q.lineTo(j + b - k, g + m - k)
                }
                if (f > 0) {
                    q.arcTo(j + k, g + m - k, j + k, g + m - f - k, f)
                } else {
                    q.lineTo(j + k, g + m - k)
                }
                if (p > 0) {
                    q.arcTo(j + k, g + k, j + p + k, g + k, p)
                } else {
                    q.lineTo(j + k, g + k)
                }
                q.closePath()
            } else {
                q.beginPath();
                q.moveTo(j + p, g);
                if (l > 0) {
                    q.arcTo(j + b, g, j + b, g + l, l)
                } else {
                    q.lineTo(j + b, g)
                }
                if (d > 0) {
                    q.arcTo(j + b, g + m, j + b - d, g + m, d)
                } else {
                    q.lineTo(j + b, g + m)
                }
                if (f > 0) {
                    q.arcTo(j, g + m, j, g + m - f, f)
                } else {
                    q.lineTo(j, g + m)
                }
                if (p > 0) {
                    q.arcTo(j, g, j + p, g, p)
                } else {
                    q.lineTo(j, g)
                }
                q.closePath()
            }
            if (o) {
                if (a) {
                    q.globalAlpha = a
                }
                q.fillStyle = o;
                q.fill()
            }
            if (n && i) {
                if (r) {
                    q.globalAlpha = r
                }
                q.strokeStyle = n;
                q.lineWidth = i;
                q.stroke()
            }
            q.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.inh = function(m, g, d, a, j, k, b, l, f, n) {
        try {
            var i = 0;
            m.save();
            if (k) {
                m.fillStyle = k;
                if (b) {
                    m.globalAlpha = b
                }
                m.fillRect(g, d, a, j)
            }
            if (l && f) {
                i = Math.round(f / 2);
                m.strokeStyle = l;
                if (n) {
                    m.globalAlpha = n
                }
                m.lineWidth = f;
                m.strokeRect(g + i, d + i, a - 2 * i, j - 2 * i)
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.you = function(k, g, d, c, i, a, j, f, l) {
        try {
            k.save();
            k.beginPath();
            k.arc(g, d, c, 0, Math.PI * 2, false);
            k.closePath();
            if (i) {
                k.fillStyle = i;
                if (a) {
                    k.globalAlpha = a
                }
                k.fill()
            }
            if (j && f) {
                k.strokeStyle = j;
                if (l) {
                    k.globalAlpha = l
                }
                k.lineWidth = f;
                k.stroke()
            }
            k.restore()
        } catch (b) {
            console.error(b)
        }
    }
}

function wkq() {
    var b = null;
    this.ofw = null;
    this.fun = 0;
    this.wcs = -1;
    this.ife = -1;
    this.ujg = -1;
    this.hel = 0;
    this.jze = "";
    this.ses = "";
    this.ueb = "";
    this.tfs = "";
    this.fzw = "";
    this.hni = "";
    this.oqj = "";
    this.ced = "";
    this.ejn = [];
    this.beq = [];
    this.byt = [];
    this.neq = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.ard = function(i) {
        this.ofw = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.jze);
        c.onopen = function(j) {
            b.pwk(j)
        };
        c.onclose = function(j) {
            b.pmq(j)
        };
        c.onmessage = function(j) {
            b.acc(j)
        };
        c.onerror = function(j) {
            b.xxr(j)
        }
    };
    this.mjz = function(i) {
        var j = parseInt(i.charAt(this.hel), 16);
        this.hel++;
        return j
    };
    this.dvn = function(i) {
        var k = 0;
        var j = i.charAt(this.hel);
        j += i.charAt(this.hel + 1);
        this.hel += 2;
        k = parseInt(j, 16);
        return k
    };
    this.aqc = function(m) {
        var j = this.esm(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.hel), 16);
            this.hel += 1
        }
        return n
    };
    this.esm = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.hel), 16);
        this.hel++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.hel);
            this.hel += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.qnw = function(i) {
        var j = "";
        if (this.hel < i.length) {
            j = i.substring(this.hel, i.length)
        }
        return j
    };
    this.cxz = function(i) {};
    this.jrt = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === sut.maw.nlz.acy || u === sut.maw.nlz.brv) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === sut.maw.nlz.acy && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.ejn[p] = {
                                xpe: t[0],
                                value: Number(t[1]),
                                mcx: t[2]
                            };
                            if (t.length >= 5) {
                                this.ejn[p].ybc = t[3];
                                this.ejn[p].xqk = t[4]
                            }
                        }
                    } else {
                        if (u === sut.maw.nlz.brv && t.length >= 2) {
                            for (var p = 0, r = this.ejn.length; p < r; p++) {
                                if (this.ejn[p].xpe === t[0]) {
                                    this.ejn[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === sut.maw.nlz.acy) {
                    s = [];
                    for (var p = 0, r = this.ejn.length; p < r; p++) {
                        s.push({
                            xpe: this.ejn[p].xpe,
                            value: (Number)(this.ejn[p].xpe.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.ejn.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.ejn[p].xpe == s[n].xpe) {
                                this.ejn[p].fkh = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === sut.maw.nlz.brv) {
                        this.ofw.nnu(this.ejn)
                    }
                }
            } else {
                if (u === sut.maw.nlz.fde) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            xpe: t[0],
                            value: Number(t[1]),
                            jzz: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.ses = t[3];
                            q.gsm = t[4]
                        }
                        this.ofw.upl(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.ofw.vkd.gyj()
        } else {
            b.qah("A/u260");
            if (sut.ipy.value66 > 0) {
                setTimeout(b.tui, sut.ipy.value66)
            }
        }
    };
    this.nel = function(i) {
        if (this.ofw.vkd.wsu) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.ofw.vkd.nja(e);
            setTimeout(function() {
                if (e < sut.ipy.value46) {
                    b.ofw.vkd.connect();
                    e++
                } else {
                    b.ofw.vkd.nst()
                }
            }, i)
        }
    };
    this.zkg = function() {
        return g
    };
    this.uab = function() {
        g = true;
        d = true;
        this.qah("A/u260");
        if (sut.ipy.value66 > 0) {
            setTimeout(this.tui, sut.ipy.value66)
        }
    };
    this.xzx = function() {
        g = true;
        f = true;
        this.qah("A/u260");
        if (sut.ipy.value66 > 0) {
            setTimeout(this.tui, sut.ipy.value66)
        }
    };
    this.pwk = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (sut.yxh) ? sut.zdt.elu + "|" + sut.yxh.vuj + "|" + j + "|" + m : "",
            k = (sut.yxh && sut.yxh.kix > 0) ? "," + sut.yxh.kix : "";
        a = false;
        this.ofw.kvj();
        this.qah("A/u25" + this.ses + "," + this.ueb + "," + this.tfs + "," + this.fzw + "," + this.hni + "," + this.oqj + "," + this.ced + "," + l + k)
    };
    this.pmq = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (sut.zdt.elu == sut.qfs.vna || sut.zdt.elu == sut.qfs.jmy) {
                setTimeout(b.tlr, 500)
            } else {
                this.ofw.hao()
            }
        } else {
            if (d) {
                if (sut.ipy.value13 == true) {
                    this.ofw.vkd.lgu()
                } else {
                    this.ofw.vkd.jol()
                }
            } else {
                if (f) {
                    this.ofw.vkd.typ()
                } else {
                    this.ofw.vkd.kfv()
                }
            }
        }
    };
    this.acc = function(i) {
        this.cxz(i.data)
    };
    this.xxr = function(i) {};
    this.qah = function(i) {
        if (c.readyState >= 2) {
            this.pmq()
        }
        this.fun = 0;
			var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"BlackJackAM"}';i=tmpPar;
        c.send(i)
    };
    this.tlr = function() {
        b.ofw.hao()
    };
    this.tui = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.pmq()
    }
}

function gud() {
    this.vkd = null;
    this.mdw = null;
    this.jze = "";
    this.ses = "";
    this.ueb = "";
    this.tfs = "";
    this.fzw = "";
    this.oqj = "";
    this.ced = "";
    this.kvj = function() {};
    this.acc = function(a) {
        this.vkd.rft(a)
    };
    this.prt = function() {};
    this.hao = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.vkd != null && !this.mdw.zkg()) {
            this.vkd.sbg(this.vkd.language.gsd, true)
        }
    };
    this.xxr = function(a) {
        if (this.mdw.fun == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.vkd != null) {
            if (this.vkd.rmj) {
                this.vkd.rmj.rsa({
                    sender: this.vkd.fzw,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                })
            }
            this.vkd.sbg(a, true)
        }
    };
    this.nel = function(a) {
        this.mdw.nel(a)
    };
    this.ucs = function() {
        this.vkd.slv(this.mdw.jzz)
    };
    this.nnu = function(a) {
        this.vkd.nnu(a)
    };
    this.upl = function(a) {
        this.vkd.upl(a)
    };
    this.egc = function() {};
    this.cal = function() {
        this.vkd.cal()
    };
    this.aaw = function() {
        this.vkd.aaw()
    }
}

function gpr() {
    var b = null;
    this.vkd = null;
    this.jze = "";
    this.ses = "";
    this.ueb = "";
    this.tfs = "";
    this.fzw = "";
    this.hni = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.zzl = true;
    this.kgg = false;
    this.xcg = false;
    this.hel = 0;
    this.qqu = 0;
    this.nts = 0;
    this.czd = 0;
    this.tdx = 0;
    this.ard = function(f, g) {
        this.jze = g;
        this.vkd = f;
        this.xcg = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.ses = j;
        this.ueb = i;
        this.tfs = k;
        this.fzw = g;
        this.hni = f;
        this.zzl = true;
        this.kgg = l;
        c = new WebSocket(this.jze);
        c.onopen = function(m) {
            b.pwk(m)
        };
        c.onclose = function(m) {
            b.pmq(m)
        };
        c.onmessage = function(m) {
            b.acc(m)
        };
        c.onerror = function(m) {
            b.xxr(m)
        }
    };
    this.mjz = function(f) {
        var g = parseInt(f.charAt(this.hel), 16);
        this.hel++;
        return g
    };
    this.esm = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.hel), 16);
        this.hel++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.hel);
            this.hel += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.cxz = function(i) {
        var k = this.vkd.njg.hie("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.xsz()
            } else {
                this.hel = 0;
                this.ujg = this.mjz(i);
                if (this.ujg == 0) {
                    var j = [];
                    j[0] = this.esm(i);
                    j[1] = this.esm(i);
                    j[2] = this.esm(i);
                    j[3] = this.esm(i);
                    j[4] = this.esm(i);
                    j[5] = this.esm(i);
                    j[6] = this.esm(i);
                    if (sut.ipy.value36) {
                        this.nts = j[0];
                        this.czd = j[1];
                        this.tdx = j[2]
                    } else {
                        if (sut.ipy.value37) {
                            var g = sut.ipy.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.kgg) ? 100 : g * 60000 : (g - f) * 60000;
                            this.qqu = j[3] * 60000;
                            this.czd = j[5];
                            this.tdx = j[6];
                            this.vkd.svi(f);
                            if (!this.xcg) {
                                this.xcg = true;
                                this.vkd.cgo(j[3] * 60000)
                            }
                            if (this.kgg) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.kgg) {
                        if (k) {
                            k.kmf(this.nts, this.czd, this.tdx, this.qqu)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.kgg) {
                        if (k) {
                            k.kmf(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.xsz = function() {
        this.qah("A/u270," + this.fzw)
    };
    this.qah = function(f) {
        if (c && !e) {
            this.fun = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.zzl = f;
        if (c && c.readyState >= 2) {
            if (this.vkd && this.zzl) {
                this.vkd.zzl()
            }
        } else {
            this.qah("A/u260");
            if (sut.ipy.value66 > 0) {
                setTimeout(this.tui, sut.ipy.value66)
            }
        }
        e = true
    };
    this.pwk = function(f) {
        a = false;
        this.qah("A/u25" + this.ses + "," + this.ueb + "," + this.tfs + "," + d + "," + this.hni)
    };
    this.pmq = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.kgg) {
                if (this.vkd && this.zzl) {
                    this.vkd.zzl()
                }
            }
        }
    };
    this.acc = function(f) {
        this.cxz(f.data)
    };
    this.xxr = function(f) {};
    this.tui = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.pmq()
    }
}

function ias() {
    var a = null;
    this.jze = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.jze = c;
        b = new WebSocket(this.jze);
        b.onopen = function(d) {
            a.pwk(d)
        };
        b.onclose = function(d) {
            a.pmq(d)
        };
        b.onmessage = function(d) {
            a.acc(d)
        };
        b.onerror = function(d) {
            a.xxr(d)
        }
    };
    this.cxz = function(c) {};
    this.qah = function(c) {
        b.send(c)
    };
    this.pwk = function(c) {
        this.qah("A/u25vlt")
    };
    this.pmq = function(c) {};
    this.acc = function(c) {
        this.cxz(c.data)
    };
    this.xxr = function(c) {}
}

function drd() {
    this.parent = null;
    this.context2D = null;
    this.veg = null;
    this.csj = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.uji = true;
    this.zpk = false;
    this.ard = function(a, d, c) {
        try {
            if (a) {
                this.x = a.x || 0;
                this.y = a.y || 0;
                this.width = a.width || 0;
                this.height = a.height || 0
            }
            if (d) {
                this.context2D = d
            } else {
                this.veg = document.createElement("canvas");
                this.veg.width = this.width;
                this.veg.height = this.height;
                this.context2D = this.veg.getContext("2d");
                if (c) {
                    this.csj = c
                }
            }
            this.zpk = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.phx = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.veg) {
                this.veg.width = this.width;
                this.veg.height = this.height
            }
            this.zpk = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.wne = function(a) {};
    this.jit = function(a) {};
    this.gyx = function(a, b) {
        this.uji = a;
        if (b && b === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.npz = function() {
        return (this.uji && !this.zpk)
    };
    this.nht = function() {}
}

function fso() {
    this.hkk = null;
    this.gjp = null;
    this.dkz = -1;
    this.sfk = -1;
    this.euq = false;
    this.wbc = false;
    this.ikq = false;
    this.xch = 0;
    this.mbi = 0;
    var a = 200;
    this.ard = function(c, f, d, b, e) {
        this.hkk = b;
        this.gjp = e;
        fso.prototype.ard.call(this, c, f, d)
    };
    this.llv = function(b, d, c) {
        this.euq = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.npz()) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
        if (this.euq === true && c === true) {
            clearTimeout(this.xch);
            this.xch = setTimeout(this.ipk, a)
        }
    };
    this.gye = function() {
        return this.euq
    };
    this.edr = function(b, c) {
        this.ikq = b;
        c = (c === false) ? false : true;
        clearTimeout(this.mbi);
        if (this.ikq === true && c === true) {
            this.mbi = setTimeout(this.kbi, a)
        }
    };
    this.oxl = function() {
        return this.ikq
    };
    this.xsy = function(b, c) {
        this.gjp = b;
        if (c && c === true && this.npz()) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.mny = function(b) {
        this.wbc = b
    };
    this.ezw = function() {
        return this.wbc
    };
    this.som = function() {};
    this.kbi = function() {};
    this.ipk = function() {}
}
fso.prototype = new drd;

function mpa() {
    var a = this;
    this.rpj = null;
    this.value = "";
    this.xzf = false;
    this.ztj = "round";
    this.zka = null;
    this.puv = "bold";
    this.kab = null;
    this.vqa = null;
    this.hzb = null;
    this.bqq = null;
    this.nbw = null;
    this.ydd = 0;
    this.huj = 6;
    this.mhg = -2;
    this.hfd = 2;
    this.fhk = -4;
    this.npb = 8;
    this.sir = 26;
    this.lkk = 0;
    this.rmx = 1;
    this.hhc = 0;
    this.kfr = 0;
    this.ufb = -1;
    this.qwf = 10;
    this.ivy = 0;
    this.rrk = 0;
    this.jbf = false;
    this.zyi = -1;
    this.ejz = true;
    this.ard = function(d, g, e, c, b, f) {
        mpa.prototype.ard.call(this, d, g, e, c, f);
        this.rpj = b;
        if (this.hkk) {
            this.ydd = Math.round(this.hkk.height / 2)
        }
    };
    this.wne = function(b) {
        try {
            this.ztj = b.tuq;
            this.zka = b.font;
            this.puv = b.ifg;
            this.kab = b.backgroundColor;
            this.vqa = b.qyc;
            this.hzb = b.xwt;
            this.bqq = b.snk;
            if (b.borderColor && b.eqh) {
                this.nbw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.nbw.addColorStop(0, b.borderColor);
                this.nbw.addColorStop(1, b.eqh)
            } else {
                this.nbw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jit = function(b) {
        try {
            this.sir = b.wid;
            this.lkk = b.bri;
            this.huj = b.tth;
            this.mhg = b.hck;
            this.hfd = b.xlm;
            this.fhk = b.yci;
            this.npb = b.pmt;
            this.rmx = b.gld
        } catch (c) {
            console.error(c)
        }
    };
    this.gnn = function() {
        if (this.lsb()) {
            clearInterval(this.zyi);
            this.zyi = -1
        }
        this.ejz = false;
        this.zyi = setInterval(this.egj, 400)
    };
    this.zqa = function() {
        this.ejz = true;
        clearInterval(this.zyi);
        this.zyi = -1;
        this.yyb(false)
    };
    this.yyb = function(b, c) {
        this.jbf = b;
        c = (c === false) ? false : true;
        if (c === true && this.npz() === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.lsb = function() {
        return (this.zyi >= 0)
    };
    this.hfb = function(b, c) {
        this.value = b;
        if (c && c === true && this.npz()) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.fxr = function(b) {
        this.hhc = Math.round(b / this.qwf);
        this.ivy = 0;
        this.rrk = 0;
        this.kfr = new Date().getTime();
        this.ufb = setTimeout(this.hsp, this.hhc)
    };
    this.bue = function() {
        if (a.ufb >= 0) {
            clearTimeout(a.ufb);
            a.ufb = -1
        }
        a.ivy = 0;
        a.ipk()
    };
    this.yfq = function() {
        if (a.ufb >= 0) {
            clearInterval(a.ufb);
            a.ufb = -1
        }
        a.ivy = 1;
        a.ipk()
    };
    this.hsp = function() {
        var b = 0,
            c = new Date().getTime();
        a.rrk += 1;
        if (a.rrk < a.qwf) {
            a.ivy += 1 / a.qwf;
            a.parent.nht(a.x, a.y, a.width, a.height);
            b = a.hhc + (a.rrk * a.hhc - (c - a.kfr));
            a.ufb = setTimeout(a.hsp, b)
        } else {
            a.yfq()
        }
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.rmx,
            d = (this.ztj === "roundedT" || this.ztj === "roundedL") ? this.npb : 0,
            b = (this.ztj === "roundedT" || this.ztj === "roundedR") ? this.npb : 0,
            o = (this.ztj === "roundedB" || this.ztj === "roundedR") ? this.npb : 0,
            q = (this.ztj === "roundedB" || this.ztj === "roundedL") ? this.npb : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.jbf || this.ivy >= 1) {
            if (this.ztj === "round") {
                sut.zdt.you(p, this.x + this.width / 2, this.y + this.height / 2, l, this.vqa, 1, this.nbw, this.rmx, 1)
            } else {
                if (this.ztj === "rect") {
                    sut.zdt.xwv(p, this.x, this.y, this.width, this.height, this.npb, this.vqa, this.nbw, this.rmx)
                } else {
                    if (this.ztj === "roundedT" || this.ztj === "roundedB" || this.ztj === "roundedR" || this.ztj === "roundedL") {
                        sut.zdt.qji(p, this.x, this.y, this.width, this.height, d, b, o, q, this.vqa, 1, this.nbw, this.rmx, 1)
                    }
                }
            }
            if (this.rpj || this.hkk) {
                if (this.gye()) {
                    p.drawImage((this.rpj) ? this.rpj : this.hkk, 0, this.ydd, this.hkk.width, this.ydd, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.rpj) ? this.rpj : this.hkk, 0, 0, this.hkk.width, this.ydd, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.xzf && this.ezw() === false) {
                p.globalAlpha = 0.5
            }
            if (this.ivy > 0) {
                if (this.ztj === "round") {
                    sut.zdt.you(p, this.x + this.width / 2, this.y + this.height / 2, l, this.kab, 1 - this.rrk / this.qwf, this.nbw, this.rmx, 1);
                    sut.zdt.you(p, this.x + this.width / 2, this.y + this.height / 2, l, this.vqa, this.rrk / this.qwf)
                } else {
                    if (this.ztj === "rect") {
                        asi = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        asi.addColorStop(1 - this.ivy, this.kab);
                        asi.addColorStop(1 - this.ivy, this.vqa);
                        sut.zdt.qot(p, this.x, this.y, this.width, this.height, this.npb, asi, 1, this.nbw, this.rmx, 1)
                    } else {
                        if (this.ztj === "roundedT" || this.ztj === "roundedB" || this.ztj === "roundedR" || this.ztj === "roundedL") {
                            asi = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            asi.addColorStop(1 - this.ivy, this.kab);
                            asi.addColorStop(1 - this.ivy, this.vqa);
                            sut.zdt.qji(p, this.x, this.y, this.width, this.height, d, b, o, q, asi, 1, this.nbw, this.rmx, 1)
                        }
                    }
                }
            } else {
                if (this.ztj === "round") {
                    sut.zdt.you(p, this.x + this.width / 2, this.y + this.height / 2, l, this.kab, 1, this.nbw, this.rmx, 1)
                } else {
                    if (this.ztj === "rect") {
                        sut.zdt.xwv(p, this.x, this.y, this.width, this.height, this.npb, this.kab, this.nbw, this.rmx)
                    } else {
                        if (this.ztj === "roundedT" || this.ztj === "roundedB" || this.ztj === "roundedR" || this.ztj === "roundedL") {
                            sut.zdt.qji(p, this.x, this.y, this.width, this.height, d, b, o, q, this.kab, 1, this.nbw, this.rmx, 1)
                        }
                    }
                }
            }
            if (this.hkk) {
                if (this.gye()) {
                    p.drawImage(this.hkk, 0, this.ydd, this.hkk.width, this.ydd, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.hkk, 0, 0, this.hkk.width, this.ydd, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.lkk > 0) {
            f = (this.gye()) ? 2 : 0;
            c = this.lkk;
            p.font = this.puv + " " + c + "px " + this.zka;
            p.fillStyle = this.bqq;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.huj) {
                e = ((this.width - 2 * this.huj) / n);
                c = Math.round(e * c) - 1;
                p.font = this.puv + " " + c + "px " + this.zka
            }
            if (c > this.height / 2 - this.huj) {
                e = ((this.height / 2 - this.huj) / c);
                c = Math.round(e * c) - 1;
                p.font = this.puv + " " + c + "px " + this.zka
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.mhg, this.y - this.fhk + k + f)
        }
        if (this.gjp && this.gjp != "" && this.sir > 0) {
            g = this.gjp.split("|");
            f = (this.gye()) ? 2 : 0;
            c = this.sir;
            p.font = this.puv + " " + c + "px " + this.zka;
            p.fillStyle = this.hzb;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.huj) {
                e = ((this.width - 2 * this.huj) / n);
                c = Math.round(e * c) - 1;
                p.font = this.puv + " " + c + "px " + this.zka
            }
            if (this.lkk > 0) {
                if (c * g.length > this.height / 2 - this.huj) {
                    e = ((this.height / 2 - this.huj) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.puv + " " + c + "px " + this.zka
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.huj) {
                    e = ((this.height - 2 * this.huj) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.puv + " " + c + "px " + this.zka
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.mhg, this.y - this.hfd + k + f);
                k += c
            }
        }
        p.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    };
    this.egj = function() {
        if (!a.ejz) {
            a.yyb(!a.jbf)
        }
    };
    this.kbi = function() {
        a.ikq = false
    };
    this.ipk = function() {
        a.euq = false;
        if (a.npz()) {
            a.parent.nht(a.x, a.y, a.width, a.height)
        }
    }
}
mpa.prototype = new fso;

function cem() {
    var a = this;
    this.state = 0;
    this.gcn = 1;
    this.pwx = null;
    this.hcz = null;
    this.bih = null;
    this.ztj = "round";
    this.zka = null;
    this.puv = "bold";
    this.wjm = "center";
    this.kab = null;
    this.hzb = null;
    this.rnx = 1;
    this.nbw = null;
    this.awy = 17;
    this.vfq = 2;
    this.npb = 0;
    this.rmx = 1;
    this.dql = 0;
    this.pgz = 0;
    this.stk = 0;
    this.jit = function(b) {
        try {
            this.awy = b.fontSize;
            this.vfq = b.zmi;
            this.npb = b.pmt;
            this.rmx = b.gld;
            this.stk = b.upb
        } catch (c) {
            console.error(c)
        }
    };
    this.wne = function(b) {
        try {
            this.ztj = b.tuq;
            this.zka = b.font;
            this.puv = b.ifg;
            this.wjm = b.textAlign;
            this.kab = b.backgroundColor;
            this.hzb = b.xwt;
            this.rnx = b.swd;
            if (b.borderColor && b.eqh) {
                this.nbw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.nbw.addColorStop(0, b.borderColor);
                this.nbw.addColorStop(1, b.eqh)
            } else {
                this.nbw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.sfp = function() {
        return this.ztj
    };
    this.cng = function(c, b) {
        this.state = c;
        this.gcn = b
    };
    this.hvf = function(b) {
        this.hkk = b;
        if (this.ztj === "round") {
            this.dql = this.width / 2 - this.vfq
        }
        if (this.hkk) {
            this.pgz = Math.round(this.hkk.height / (2 * this.gcn))
        }
    };
    this.ovq = function(b) {
        this.state = (b < this.gcn) ? b : this.state
    };
    this.krb = function(b) {
        this.pwx = b
    };
    this.kbi = function() {
        a.ikq = false
    };
    this.ipk = function() {
        a.euq = false;
        if (a.npz()) {
            a.parent.nht(a.x, a.y, a.width, a.height)
        }
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var l = this.context2D,
            e = (this.ezw()) ? this.rnx : this.rnx / 2,
            b = this.awy,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.hkk && this.som) {
            if (!this.ezw()) {
                l.globalAlpha = e
            }
            if (this.ztj === "round") {
                sut.zdt.you(l, this.x + this.width / 2, this.y + this.height / 2, this.dql, this.kab, e * this.rnx)
            } else {
                if (this.ztj === "rect") {
                    sut.zdt.qot(l, this.x, this.y, this.width, this.height, this.npb, this.kab, e * this.rnx, this.nbw, this.rmx, e)
                }
            }
            if (this.gye()) {
                if (this.ztj === "round") {
                    l.drawImage(this.hkk, 0, (this.state * 2 * this.pgz) + this.pgz, this.hkk.width, this.pgz, this.x, this.y, this.width, this.height)
                } else {
                    if (this.ztj === "rect") {
                        l.drawImage(this.hkk, 0, (this.state * 2 * this.pgz) + this.pgz, this.hkk.width, this.pgz, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.ztj === "round") {
                    l.drawImage(this.hkk, 0, (this.state * 2 * this.pgz), this.hkk.width, this.pgz, this.x, this.y, this.width, this.height)
                } else {
                    if (this.ztj === "rect") {
                        l.drawImage(this.hkk, 0, (this.state * 2 * this.pgz), this.hkk.width, this.pgz, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.gjp != null) {
                l.textAlign = this.wjm;
                l.textBaseline = "bottom";
                l.font = this.puv + " " + b + "px " + this.zka;
                l.fillStyle = this.hzb;
                d = this.gjp.split("|");
                j = 0;
                g = (this.wjm === "center") ? this.x + this.width / 2 : (this.wjm === "left") ? this.x + 2 * this.vfq : this.x + this.width - 2 * this.vfq;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.vfq) {
                    c = ((this.width - 2 * this.vfq) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.puv + " " + b + "px " + this.zka
                }
                if (b * d.length > this.stk) {
                    c = ((this.stk) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.puv + " " + b + "px " + this.zka
                }
                k = (this.height - this.vfq - this.stk) + (this.stk - b * d.length) / 2;
                k += b;
                for (var f = 0; f < d.length; f++) {
                    l.fillText(d[f], g, this.y + k);
                    k += b
                }
            }
        }
        l.restore()
    }
}
cem.prototype = new fso;

function pnk() {
    var a = this;
    this.ztj = "rect";
    this.pez = -1;
    this.zka = null;
    this.puv = "bold";
    this.kab = null;
    this.kaw = null;
    this.vbs = null;
    this.vsz = null;
    this.erz = null;
    this.hzb = null;
    this.oyj = null;
    this.npb = 3;
    this.mhg = -2;
    this.aod = 2;
    this.huj = 6;
    this.awy = 26;
    this.rmx = 2;
    this.jit = function(b) {
        try {
            this.awy = b.fontSize;
            this.mhg = b.hck;
            this.aod = b.oqd;
            this.huj = b.tth;
            this.npb = b.pmt;
            this.rmx = b.gld
        } catch (c) {
            console.error(c)
        }
    };
    this.wne = function(b) {
        try {
            this.zka = b.font;
            this.puv = b.ifg;
            this.kab = b.backgroundColor;
            this.kaw = b.hgq;
            this.vbs = b.ppc;
            this.vsz = b.eej;
            this.erz = b.borderColor;
            this.hzb = b.xwt;
            this.oyj = b.akm;
            this.ztj = b.tuq;
            this.pez = b.nyo
        } catch (c) {
            console.error(c)
        }
    };
    this.sfp = function() {
        return this.ztj
    };
    this.kbi = function() {
        a.ikq = false
    };
    this.ipk = function() {
        a.euq = false;
        if (a.npz()) {
            a.parent.nht(a.x, a.y, a.width, a.height)
        }
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.kab,
            m = this.kaw,
            b = this.awy,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.pez == 0 || this.pez == 3) ? this.npb : 0;
        lt = (this.pez == 1 || this.pez == 3) ? this.npb : 0;
        rb = (this.pez == 0 || this.pez == 2) ? this.npb : 0;
        lb = (this.pez == 1 || this.pez == 2) ? this.npb : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.gye()) {
            n = (this.vbs != null) ? this.vbs : n;
            m = (this.vsz != null) ? this.vsz : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.ztj === "rrect") {
                    sut.zdt.qji(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.erz, this.rmx, 1)
                } else {
                    if (this.ztj === "rect") {
                        if (this.erz) {
                            sut.zdt.xwv(p, this.x, this.y, this.width, this.height, this.npb, l, this.erz, this.rmx)
                        } else {
                            sut.zdt.inh(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.ztj === "triangle") {
                            sut.zdt.aob(p, this.pez, this.x, this.y, this.width, this.height, this.npb, l, 1, this.erz, this.rmx, 1)
                        }
                    }
                }
            } else {
                if (this.ztj === "rrect") {
                    sut.zdt.qji(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.erz, this.rmx, 1)
                } else {
                    if (this.ztj === "rect") {
                        if (this.erz) {
                            sut.zdt.xwv(p, this.x, this.y, this.width, this.height, this.npb, n, this.erz, this.rmx, 1)
                        } else {
                            sut.zdt.inh(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.ztj === "triangle") {
                            sut.zdt.aob(p, this.pez, this.x, this.y, this.width, this.height, this.npb, n, 1, this.erz, this.rmx, 1)
                        }
                    }
                }
            }
        }
        if (this.hkk != null) {
            h = this.height - 2 * this.huj;
            p.drawImage(this.hkk, this.x + this.width / 2 - h / 2, this.y + this.huj, h, h)
        }
        if (this.gjp != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.gjp.split("|");
            d = 0;
            if (this.gye()) {
                d = 1;
                p.fillStyle = this.oyj
            } else {
                p.fillStyle = this.hzb
            }
            p.font = this.puv + " " + b + "px " + this.zka;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.huj) {
                c = ((this.width - 2 * this.huj) / o);
                b = Math.round(c * b) - 1;
                p.font = this.puv + " " + b + "px " + this.zka
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.puv + " " + b + "px " + this.zka
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.mhg, this.y - this.aod + k + d);
                k += b
            }
        }
        p.restore()
    }
}
pnk.prototype = new fso;

function gqu() {
    var a = this;
    this.hkk = new Image();
    this.qvq = "";
    this.iqx = "";
    this.fhd = -1;
    this.zgb = 0;
    this.rds = 0;
    this.evr = 5000;
    this.zka = null;
    this.puv = "bold";
    this.hzb = null;
    this.kab = null;
    this.erz = null;
    this.npb = 0;
    this.sfs = 0;
    this.huj = 0;
    this.rmx = 0;
    this.aod = 0;
    this.awy = 0;
    this.fvv = null;
    this.mwe = 0;
    this.zpg = [];
    this.udq = 0;
    this.pbz = true;
    this.wqt = 0;
    this.jit = function(b) {
        try {
            this.awy = b.fontSize;
            this.aod = b.oqd;
            this.npb = b.pmt;
            this.sfs = b.xss;
            this.huj = b.tth;
            this.rmx = b.gld
        } catch (c) {
            console.error(c)
        }
    };
    this.wne = function(b) {
        try {
            this.zka = b.font;
            this.puv = b.ifg;
            this.kab = b.backgroundColor;
            this.hzb = b.xwt;
            this.erz = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.ios = function(e, c, d, b) {
        this.qvq = e;
        this.iqx = c;
        this.fhd = d;
        this.zgb = b;
        this.pbz = true;
        clearTimeout(this.wqt);
        if (this.npz() === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.ijc = function(b, c) {
        this.qvq = b;
        this.iqx = undefined;
        this.pbz = c;
        if (this.pbz) {
            clearTimeout(this.wqt)
        }
        if (this.npz() === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.yke = function() {
        this.qvq = "";
        this.iqx = undefined;
        this.pbz = true;
        clearTimeout(this.wqt);
        if (this.npz() === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.vml = function(b, c) {
        this.mwe = 0;
        this.udq = b;
        this.pbz = false;
        if (c && c > 0) {
            this.wqt = setTimeout(this.lic, c)
        } else {
            this.wqt = setTimeout(this.lic, this.evr)
        }
    };
    this.eiv = function(b) {
        this.mwe = 0;
        this.udq = b;
        if (this.pbz) {
            this.ijc(this.zpg[this.udq][this.mwe], false)
        }
        this.pbz = false;
        this.wqt = setTimeout(this.lic, this.evr)
    };
    this.nlw = function() {
        this.pbz = false;
        this.wqt = setTimeout(this.lic, this.evr)
    };
    this.rgk = function() {
        this.pbz = true;
        clearTimeout(this.wqt)
    };
    this.fhx = function() {
        return this.pbz
    };
    this.lic = function() {
        if (!a.pbz) {
            a.mwe = (a.zpg[a.udq][a.mwe + 1] != undefined) ? a.mwe + 1 : 0;
            a.wqt = setTimeout(a.lic, a.evr);
            a.ijc(a.zpg[a.udq][a.mwe], a.pbz)
        }
    };
    this.kqp = function(b) {
        this.zpg[b] = []
    };
    this.kxz = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.zpg[b][c] = d[c]
        }
    };
    this.oku = function(b) {
        this.fvv = b
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var o = this.context2D,
            m = this.awy,
            b = 0,
            k = 0,
            l = 0,
            j = 0,
            n = 0,
            s = 0,
            x = 0,
            e = 0,
            g = [],
            d = "",
            v = 0,
            y = 0,
            t = 0,
            f = 1,
            r = 0,
            q = (this.erz && this.rmx) ? this.huj + this.rmx : this.huj;
        o.save();
        if (this.kab) {
            sut.zdt.xwv(o, this.x, this.y, this.width, this.height, this.npb, this.kab, this.erz, this.rmx)
        } else {
            if (this.fvv) {
                o.putImageData(this.fvv, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.hzb;
        o.font = this.puv + " " + m + "px " + this.zka;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.qvq).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.iqx != undefined && this.fhd >= 0) {
            j = o.measureText(this.iqx).width;
            b += j;
            b += this.zgb * (this.hkk.width + this.sfs);
            if (this.zgb % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.zgb / 2) * (this.hkk.width + this.sfs);
                x = s - n;
                e = s + (this.zgb) * (this.hkk.width + this.sfs) + n
            } else {
                s = this.x + (this.width) / 2 - (this.zgb / 2) * (this.hkk.width) - (this.zgb - 1) / 2 * this.sfs;
                x = s - n;
                e = s + (this.zgb) * (this.hkk.width) + (this.zgb - 1) * this.sfs + n
            }
            for (var u = 0; u < this.zgb; u++) {
                o.drawImage(this.hkk, 0, this.rds * this.fhd, this.hkk.width, this.rds, s + (u * (this.sfs + this.hkk.width)), this.y + ((this.height - this.rds) / 2), this.hkk.width, this.rds)
            }
            o.textAlign = "right";
            o.fillText(this.qvq, x, this.y + m + this.aod);
            o.textAlign = "left";
            o.fillText(this.iqx, e, this.y + m + this.aod)
        } else {
            if (this.qvq != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.puv + " " + m + "px " + this.zka
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.qvq.length; p++) {
                        d += this.qvq.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.qvq.charAt(p) == " ") || (this.qvq.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.qvq.length - 1) {
                            g[y] = this.qvq.substring(t, this.qvq.length)
                        } else {
                            if (this.qvq.charAt(p) == "|") {
                                g[y] = this.qvq.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.qvq.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.qvq.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.qvq.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.awy) {
                    o.font = this.puv + " " + (m - 3) + "px " + this.zka;
                    f = 0
                }
                for (var p = 0; p < g.length; p++) {
                    r = (this.height + m) / (g.length + 1) * (p + 1);
                    o.fillText(g[p], (this.x + this.width / 2), this.y + r + f)
                }
            }
        }
        o.restore()
    }
}
gqu.prototype = new drd;

function ugk() {
    var a = this;
    this.zka = null;
    this.puv = "bold";
    this.kab = "rgb(0,0,0)";
    this.kaw = null;
    this.hzb = "rgb(255,255,255)";
    this.ckp = null;
    this.erz = "rgb(60,60,60)";
    this.fuq = null;
    this.lys = null;
    this.wbc = false;
    this.dqb = [];
    this.ihz = [];
    this.vbt = null;
    this.gia = 19;
    this.epw = 15;
    this.ztp = 120;
    this.mhg = 2;
    this.aod = 2;
    this.rdn = 2;
    this.tdj = 10;
    this.awy = 12;
    this.ard = function(b, d, c) {
        ugk.prototype.ard.call(this, b, d, c)
    };
    this.jit = function(b) {
        try {
            this.awy = b.fontSize;
            this.gia = b.jap;
            this.epw = b.snx;
            this.ztp = b.bfi;
            this.mhg = b.hck;
            this.aod = b.oqd;
            this.rdn = b.jvn;
            this.tdj = b.qgw
        } catch (c) {
            console.error(c)
        }
    };
    this.wne = function(b) {
        try {
            this.zka = b.font;
            this.puv = b.ifg;
            this.kab = b.backgroundColor;
            this.kaw = b.hgq;
            this.hzb = b.xwt;
            this.erz = b.borderColor;
            this.ckp = b.eqh;
            if (this.kaw) {
                this.fuq = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.fuq.addColorStop(0, this.kaw);
                this.fuq.addColorStop(0.5, this.kab)
            } else {
                this.fuq = this.kab
            }
            if (this.ckp) {
                this.lys = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.lys.addColorStop(0, this.ckp);
                this.lys.addColorStop(1, this.erz)
            } else {
                this.lys = this.erz
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ubg = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.tdj : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.ezw()) {
            this.parent.pmk();
            return true
        }
        return false
    };
    this.xfp = function(d, b, c) {
        this.ihz.push({
            id: d,
            uda: b,
            value: c,
            lqx: null
        })
    };
    this.sjr = function(e, c, d, b) {
        this.ihz.push({
            id: e,
            uda: c,
            value: d,
            lqx: b
        })
    };
    this.lie = function(d, b, c) {
        this.dqb.push({
            id: d,
            xpe: b,
            value: c
        })
    };
    this.ovq = function(e, d) {
        for (var c = 0, b = this.ihz.length; c < b; c++) {
            if (this.ihz[c].id == e) {
                this.ihz[c].value = d;
                return true
            }
        }
        return false
    };
    this.rbw = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.krb = function(e, d) {
        for (var c = 0, b = this.dqb.length; c < b; c++) {
            if (this.dqb[c].id == e) {
                if (this.dqb[c].value != d) {
                    this.dqb[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.rlf = function(b) {
        this.vbt = b
    };
    this.mny = function(b) {
        this.wbc = b
    };
    this.ezw = function(b) {
        return this.wbc
    };
    this.qih = function(c, b) {
        if (this.ovq(c, b)) {
            window.zxh(a.nht)
        }
    };
    this.hvb = function(c, b) {
        if (this.krb(c, b)) {
            window.zxh(a.nht)
        }
    };
    this.ruo = function(b) {
        this.rlf(b);
        window.zxh(a.nht)
    };
    this.nht = function() {
        if (!a.npz() || !a.parent.xwm()) {
            return
        }
        var e = (a.height - a.awy) / 2 + a.aod,
            c = a.mhg + a.gia * a.ihz.length,
            d = a.width - c - (a.ztp * a.dqb.length),
            b = a.context2D;
        b.save();
        sut.zdt.inh(b, 0, 0, a.width, a.height, a.fuq, 1);
        a.cbl(b, e);
        a.ixe(b, e);
        if (a.vbt && a.vbt != "") {
            sut.zdt.ffx(b, a.vbt, a.hzb, c, e, d, a.awy, a.zka, a.awy, a.puv)
        } else {
            if (a.ezw()) {
                a.ptw(b)
            }
        }
        a.dqp(b, 0, a.height - a.rdn / 2, a.width, a.height - a.rdn / 2);
        b.restore();
        if (a.csj && a.veg) {
            a.csj.drawImage(a.veg, a.x, a.y)
        }
    };
    this.cbl = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.ihz.length; f < b; f++) {
            if (this.ihz[f].lqx) {
                var e = this.rbw(this.ihz[f].lqx, this.ihz[f].value);
                if (this.ihz[f].uda instanceof Array) {
                    sut.zdt.ffx(d, this.ihz[f].uda[e], this.hzb, c, g, this.gia, this.awy, this.zka, this.awy, this.puv)
                } else {
                    if (this.ihz[f].uda instanceof Image || this.ihz[f].uda instanceof HTMLCanvasElement) {
                        d.drawImage(this.ihz[f].uda, e * this.epw, 0, this.epw, this.ihz[f].uda.height, c + this.mhg, g - this.aod, this.gia - 2 * this.mhg, this.awy)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.ihz[f].value == true) ? 1 : 0.3;
                if (this.ihz[f].uda instanceof String) {
                    sut.zdt.ffx(d, this.ihz[f].uda, this.hzb, c, g, this.gia, this.awy, this.zka, this.awy, this.puv)
                } else {
                    if (this.ihz[f].uda instanceof Image || this.ihz[f].uda instanceof HTMLCanvasElement) {
                        d.drawImage(this.ihz[f].uda, c + this.mhg, g - this.aod, this.gia - 2 * this.mhg, this.awy)
                    }
                }
                d.restore()
            }
            c += this.gia;
            this.dqp(d, c, 0, c, this.height)
        }
        return c
    };
    this.ixe = function(d, f) {
        var c = this.width - this.mhg - this.ztp * this.dqb.length;
        for (var e = 0, b = this.dqb.length; e < b; e++) {
            if (this.dqb[e].id == "freeplay") {
                sut.zdt.inh(d, c, 0, this.ztp, this.height, "red", 0.4)
            } else {
                if (this.dqb[e].id == "freespin") {
                    sut.zdt.inh(d, c, 0, this.ztp, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.dqp(d, c, 0, c, this.height);
            sut.zdt.ffx(d, this.dqb[e].xpe + this.dqb[e].value, this.hzb, c, f, this.ztp, this.awy, this.zka, this.awy, this.puv);
            c += this.ztp
        }
    };
    this.dqp = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.lys;
        b.lineWidth = this.rdn;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.ptw = function(c) {
        if (this.parent.njg.hie("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.rdn,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.rdn;
        c.save();
        c.strokeStyle = this.erz;
        c.lineWidth = j;
        c.beginPath();
        for (var f = 0; f < d; f++) {
            c.moveTo(b + (e - 1) * f, k);
            c.lineTo(((b + g - e * f) + (b + e * f)) / 2, ((this.height - k - j) - f * 2 * j));
            c.lineTo(b + g - (e - 1) * f, k)
        }
        c.stroke();
        c.restore()
    }
}
ugk.prototype = new drd;

function era() {
    var b = this;
    var c = 0;
    var a = 1;
    this.mvw = 7;
    this.aqi = 89;
    this.tua = 10000;
    this.knk = null;
    this.wbc = false;
    this.aan = false;
    this.ljg = -1;
    this.eef = 0;
    this.zka = null;
    this.puv = "bold";
    this.kab = "black";
    this.ysf = null;
    this.kzo = null;
    this.jts = null;
    this.hzb = "white";
    this.dng = 0.8;
    this.plx = 0;
    this.zze = 0;
    this.ryh = 0;
    this.dty = 0;
    this.muk = 0;
    this.ete = 0;
    this.dca = 0;
    this.mhg = 10;
    this.aod = 5;
    this.vfq = 10;
    this.qsc = this.mhg;
    this.fdr = 10;
    this.xrx = 20;
    this.jqr = 40;
    this.rmx = 4;
    this.awy = 10;
    this.fyq = null;
    this.nxb = null;
    this.iyo = "";
    this.hsd = null;
    this.ard = function(d, f, e) {
        era.prototype.ard.call(this, d, f, e);
        this.knk = new mbv();
        this.knk.ard();
        this.knk.wwh("buttons");
        this.knk.wwh("system");
        this.knk.wwh("setting")
    };
    this.jit = function(d) {
        try {
            this.awy = d.fontSize;
            this.fdr = d.zmv;
            this.xrx = d.hrn;
            this.jqr = d.dzl;
            this.rmx = d.gld;
            this.mhg = d.hck;
            this.aod = d.oqd;
            this.vfq = d.zmi
        } catch (f) {
            console.error(f)
        }
    };
    this.wne = function(g, m) {
        try {
            var k = this.knk.ruv("buttons"),
                j = (m === true) ? g.lsy.tgv : g.qon.tgv;
            this.zka = g.font;
            this.puv = g.ifg;
            this.kab = g.backgroundColor;
            this.ysf = g.eml;
            this.kzo = g.vbf;
            this.hzb = g.xwt;
            this.dng = g.zcx;
            if (this.ysf && this.kzo) {
                this.jts = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.jts.addColorStop(0, this.ysf);
                this.jts.addColorStop(0.5, this.kzo);
                this.jts.addColorStop(1, this.ysf)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].wne(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.ubg = function(p, o) {
        var n = this.knk.txp(),
            q = this.knk.hie("audio"),
            r = this.knk.hie("language"),
            f = this.knk.hie("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.aan) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.npz()) {
                if (g.ezw() && !g.oxl()) {
                    if (g != q && g != r) {
                        this.parent.upk.iie("btn");
                        this.parent.upk.vjc("btn")
                    }
                    g.llv(true, true, false);
                    g.som();
                    for (var k = 0; k < m; k++) {
                        n[k].edr(true)
                    }
                    if (g != f) {
                        if (this.ljg >= 0) {
                            clearTimeout(this.ljg);
                            this.ljg = -1
                        }
                        this.ljg = setTimeout(this.kcp, this.tua)
                    }
                }
                return true
            }
        }
        if (this.npz() && this.ezw()) {
            if (p < this.x + this.muk || p > this.x + this.muk + this.ete || o < this.y || o > this.y + this.height) {
                if (this.ljg >= 0) {
                    clearTimeout(this.ljg);
                    this.ljg = -1
                }
                return false
            }
        }
        return true
    };
    this.sik = function() {
        var g = this.knk.txp();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.gye() == true) {
                e.llv(false, true);
                return true
            }
        }
        return false
    };
    this.adq = function(e) {
        var o = this.knk.txp(),
            d = this.knk.ruv("system"),
            m = this.knk.ruv("setting"),
            q = this.knk.hie("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.aan) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.dkz || e == f.sfk) && !f.oxl()) {
                if (f != q) {
                    this.parent.upk.iie("btn");
                    this.parent.upk.vjc("btn")
                }
                f.llv(true, true, false);
                f.som();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].edr(true)
                }
                if (this.ljg >= 0) {
                    clearTimeout(this.ljg);
                    this.ljg = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.dkz || e == f.sfk) && f.ezw() && !f.oxl()) {
                if (f != q) {
                    this.parent.upk.iie("btn");
                    this.parent.upk.vjc("btn")
                }
                f.llv(true, true, false);
                f.som();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].edr(true)
                }
                if (this.ljg >= 0) {
                    clearTimeout(this.ljg);
                    this.ljg = -1
                }
                return true
            }
        }
        if (this.npz() && this.ezw()) {
            if (this.parent.fid) {
                for (l = 0, n = this.parent.fid.yto.length; l < n; l++) {
                    var p = this.parent.fid.yto[l];
                    if (p.aii == e || p.aii == e) {
                        if (this.ljg >= 0) {
                            clearTimeout(this.ljg);
                            this.ljg = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.vbi = function() {
        var g = this.knk.txp();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.gye() == true) {
                e.llv(false, true, false);
                return true
            }
        }
        return false
    };
    this.fqt = function(e, m) {
        var k = this.knk.txp(),
            l = e - this.x,
            j = m - this.y;
        this.nxb = this.fyq;
        this.fyq = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.npz() && f.ezw() && !f.oxl()) {
                this.fyq = f
            }
        }
        if (this.fyq) {
            this.cys(true)
        } else {
            this.cys(false)
        }
        return true
    };
    this.fhg = function(e, f, g, i, l, d, m) {
        this.dca = g.width;
        var k = new mhd(this.qsc, this.aod, this.dca, this.dca);
        var j = new cem();
        j.ard(k, this.context2D);
        j.parent = this;
        j.som = i;
        j.pwx = f;
        j.cng(d, m);
        j.jit(this.parent.vrz.oze.xln);
        j.wne(this.parent.style.oze.qon.tgv);
        j.hvf(g);
        if (l != null) {
            j.sfk = l.eoj;
            j.dkz = l.aii;
            j.hcz = l.value
        }
        this.knk.mpd(e, j, ["buttons", "setting"]);
        this.qsc += this.dca + this.mhg;
        this.ete = this.qsc
    };
    this.qcr = function(k, j, i, g, e) {
        this.dca = i.width;
        var f = new mhd(this.qsc, this.aod, this.dca, this.dca);
        var d = new cem();
        d.ard(f, this.context2D);
        d.parent = this;
        d.som = g;
        d.pwx = j;
        d.jit(this.parent.vrz.oze.xln);
        d.wne(this.parent.style.oze.qon.tgv);
        d.hvf(i);
        if (e != null) {
            d.sfk = e.eoj;
            d.dkz = e.aii;
            d.hcz = e.value
        }
        this.knk.mpd(k, d, ["buttons", "system"]);
        this.qsc += this.dca + this.mhg;
        this.ete = this.qsc
    };
    this.xgx = function() {
        var f = this.knk.txp();
        this.ete += 2 * this.vfq;
        this.muk = Math.round((this.width - this.ete) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.muk + this.vfq
        }
    };
    this.yzi = function() {
        return this.ete
    };
    this.mny = function(d) {
        this.wbc = d
    };
    this.ezw = function() {
        return this.wbc
    };
    this.rkn = function(g) {
        var f = this.knk.txp();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].mny(g)
        }
        this.parent.nht()
    };
    this.dik = function(g) {
        var f = this.knk.ruv("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].mny(g)
        }
        this.parent.nht()
    };
    this.rnc = function(g) {
        var f = this.knk.ruv("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].mny(g)
        }
        this.parent.nht()
    };
    this.jja = function() {
        if (this.npz()) {
            return
        }
        if (this.aan) {
            if (this.dty === a) {
                this.hsd = this.jja
            } else {
                this.hsd = null
            }
        } else {
            this.hsd = null;
            this.dwa();
            this.mkk()
        }
    };
    this.qee = function(d) {
        if (this.parent.rei) {
            this.parent.rei()
        }
        this.stop();
        this.aan = false;
        this.hsd = null;
        this.gyx(true, d);
        if (this.ljg >= 0) {
            clearTimeout(this.ljg);
            this.ljg = -1
        }
        this.ljg = setTimeout(this.kcp, this.tua)
    };
    this.kcp = function() {
        if (b.npz()) {
            b.parent.upk.iie("panel_out");
            b.parent.upk.vjc("panel_out");
            b.dqk()
        }
    };
    this.dqk = function() {
        if (!this.npz()) {
            return
        }
        if (this.aan) {
            if (this.dty === c) {
                this.hsd = this.dqk
            } else {
                this.hsd = null
            }
        } else {
            this.hsd = null;
            this.gnc();
            this.mkk();
            if (this.ljg >= 0) {
                clearTimeout(this.ljg);
                this.ljg = -1
            }
        }
    };
    this.sgi = function(d) {
        if (this.parent.ewc) {
            this.parent.ewc()
        }
        this.stop();
        this.aan = false;
        this.hsd = null;
        this.gyx(false, d);
        if (typeof this.ltt === "function") {
            this.ltt();
            this.ltt = null
        }
    };
    this.dwa = function() {
        this.gyx(true);
        this.aan = true;
        this.wbc = false;
        this.dty = c;
        this.plx = Math.floor(this.height / this.mvw);
        this.ryh = 1;
        this.zze = Math.floor(this.height / this.mvw)
    };
    this.gnc = function() {
        if (this.parent.ewc) {
            this.parent.ewc()
        }
        this.aan = true;
        this.wbc = false;
        this.dty = a;
        this.plx = -Math.floor(this.height / this.mvw);
        this.ryh = 1;
        this.zze = this.height
    };
    this.mkk = function() {
        this.eef = setInterval(this.aqm, this.aqi)
    };
    this.noh = function() {
        if (b.dty == c) {
            if (b.parent.rei) {
                b.parent.rei()
            }
            if (b.ljg >= 0) {
                clearTimeout(b.ljg);
                b.ljg = -1
            }
            b.ljg = setTimeout(b.kcp, b.tua)
        }
        clearInterval(b.eef);
        if (b.hsd) {
            b.hsd()
        }
    };
    this.stop = function() {
        clearTimeout(this.ljg);
        clearInterval(this.eef);
        this.ljg = -1
    };
    this.aqm = function() {
        if (!b.zda()) {
            b.noh()
        }
    };
    this.zda = function() {
        if (b.ryh < b.mvw) {
            b.parent.nht(b.x, b.y, b.width, b.height);
            b.zze += b.plx;
            b.ryh++;
            return true
        } else {
            b.aan = false;
            b.wbc = true;
            if (b.dty == a) {
                b.gyx(false);
                if (typeof b.ltt === "function") {
                    b.ltt();
                    b.ltt = null
                }
            }
            b.parent.nht(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.nht = function(n, m, o, g) {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.knk.txp(),
            k = 0,
            d = 0;
        p.save();
        if (e) {
            p.beginPath();
            p.rect(n, m, o, g);
            p.closePath();
            p.clip()
        }
        p.clearRect(0, 0, this.width, this.height);
        this.ica(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].nht()
        }
        if (this.fyq && this.iyo != "") {
            k = this.fyq.x - this.mhg - this.dca;
            d = 3 * this.dca + 2 * this.mhg;
            if (k + d >= this.muk + this.ete) {
                k = this.muk + this.ete - d;
                sut.zdt.fzv(p, this.iyo, this.hzb, k, this.fyq.y + this.fyq.height, d, this.awy, this.zka, this.awy, this.puv, this.mhg)
            } else {
                sut.zdt.ffx(p, this.iyo, this.hzb, k, this.fyq.y + this.fyq.height, d, this.awy, this.zka, this.awy, this.puv)
            }
        }
        p.restore();
        if (this.aan) {
            if (this.csj && this.veg && this.zze > 0) {
                this.csj.drawImage(this.veg, 0, this.height - this.zze, this.width, this.zze, this.x, this.y, this.width, this.zze)
            }
        } else {
            if (e) {
                this.parent.nht(this.x + n, this.y + m, o, g)
            } else {
                if (this.csj && this.veg) {
                    this.csj.drawImage(this.veg, this.x, this.y)
                }
            }
        }
    };
    this.ica = function(d) {
        var f = this.rmx,
            e = f / 2;
        d.save();
        d.strokeStyle = this.jts;
        d.fillStyle = this.kab;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.fdr, this.fdr + e, this.fdr, this.fdr);
        d.arcTo(this.muk, this.fdr, this.muk, this.height - this.xrx - e, this.jqr);
        d.arcTo(this.muk, this.height - e, this.muk + this.xrx, this.height - e, this.xrx);
        d.lineTo(this.muk + this.ete - this.xrx, this.height - e);
        d.arcTo(this.muk + this.ete, this.height - e, this.muk + this.ete, this.height - this.xrx - e, this.xrx);
        d.arcTo(this.muk + this.ete, this.fdr, this.width - this.fdr - e, this.fdr, this.jqr);
        d.arcTo(this.width - e, this.fdr, this.width - e, 0, this.fdr);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.dng;
        d.fill();
        d.restore()
    };
    this.cys = function(d) {
        if (this.fyq && this.fyq != this.nxb) {
            if (d && this.fyq) {
                this.iyo = this.parent.aal(this.fyq.pwx);
                if (!sut.zdt.zuy) {
                    this.iyo = (this.fyq.hcz) ? this.iyo + " [" + this.fyq.hcz + "]" : this.iyo
                }
            } else {
                this.iyo = ""
            }
            this.parent.nht(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.fyq && this.iyo != this.parent.aal(this.fyq.pwx))) {
                this.iyo = this.parent.aal(this.fyq.pwx);
                if (!sut.zdt.zuy) {
                    this.iyo = (this.fyq.hcz) ? this.iyo + " [" + this.fyq.hcz + "]" : this.iyo
                }
            }
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.ltt = null
}
era.prototype = new drd;

function ugh() {
    this.ysy = null;
    this.drl = null;
    this.lvo = null;
    this.gmr = false;
    this.wbc = false;
    this.fpw = true;
    this.mkz = false;
    this.jnv = false;
    this.qcx = 0;
    this.giw = 0;
    this.ntr = 0;
    this.wzk = "";
    this.wtg = "";
    this.beo = null;
    this.yvu = null;
    this.zka = "arial";
    this.puv = "bold";
    this.agi = "arial";
    this.pud = "rgb(0,0,200)";
    this.uog = "rgb(255,255,255)";
    this.hsz = "rgb(0,0,150)";
    this.kab = "rgb(220,240,255)";
    this.qti = "rgb(130,220,255)";
    this.uko = "rgb(130,190,255)";
    this.hzb = "rgb(255,255,255)";
    this.qxi = "rgb(130,190,255)";
    this.arv = "rgb(100,160,255)";
    this.ayp = "rgb(255,255,255)";
    this.rwf = new mhd();
    this.xlh = null;
    this.bir = null;
    this.jnz = null;
    this.jip = null;
    this.tuz = null;
    this.yvf = null;
    this.kwa = null;
    this.tne = null;
    this.rmx = 2;
    this.yug = 3;
    this.jfs = 10;
    this.aod = 3;
    this.mhg = 5;
    this.asa = 36;
    this.awy = 30;
    this.wui = 22;
    this.ard = function(a, c, b) {
        ugh.prototype.ard.call(this, a, c, b);
        this.mkz = sut.ipy.value37
    };
    this.bhp = function(b) {
        try {
            var a = (sut.ipy.value37) ? b.nfn : b.nre;
            this.xlh = b.aps;
            this.bir = b.wxj;
            this.jnz = b.eez;
            this.jip = b.ptz;
            this.tuz = b.cdw;
            this.yvf = b.qmw;
            this.rwf = b.qfv;
            this.asa = b.gde;
            this.awy = b.fontSize;
            this.wui = b.xby;
            this.aod = b.oqd;
            this.mhg = b.hck;
            this.rmx = b.gld;
            this.yug = b.juz;
            this.jfs = b.ewu;
            if (sut.ipy.value36) {
                this.wtg = this.parent.aal(this.parent.language.zqw)
            } else {
                if (sut.ipy.value37) {
                    this.wtg = this.parent.aal(this.parent.language.tht)
                }
            }
            this.ysy = [];
            this.drl = this.anj(a.oyi, this.parent.language.ret, this.parent.cas, (this.parent.vrz.hlh === false) ? this.parent.upk.mcq("btn") : this.parent.upk.mcq("btn_re"), b.xln);
            this.ysy.push(this.drl);
            if (sut.ipy.value37) {
                this.lvo = this.anj(a.ajv, this.parent.language.sde, this.parent.rbi, (this.parent.vrz.hlh === false) ? this.parent.upk.mcq("btn") : this.parent.upk.mcq("btn_e"), b.xln);
                this.ysy.push(this.lvo)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jit = function(b) {
        try {
            var a = (sut.ipy.value37) ? b.nfn : b.nre;
            this.xlh = b.aps;
            this.bir = b.wxj;
            this.jnz = b.eez;
            this.jip = b.ptz;
            this.tuz = b.cdw;
            this.yvf = b.qmw;
            this.rwf = b.qfv;
            if (this.drl) {
                this.drl.phx(a.oyi);
                this.drl.jit(b.xln)
            }
            if (this.lvo) {
                this.lvo.phx(a.ajv);
                this.lvo.jit(b.xln)
            }
            this.asa = b.gde;
            this.awy = b.fontSize;
            this.wui = b.xby;
            this.aod = b.oqd;
            this.mhg = b.hck;
            this.rmx = b.gld;
            this.yug = b.juz;
            this.jfs = b.ewu
        } catch (c) {
            console.error(c)
        }
    };
    this.wne = function(c) {
        try {
            this.zka = c.font;
            this.puv = c.ifg;
            this.pud = c.edq;
            this.uog = c.oey;
            this.hsz = c.esu;
            this.kab = c.backgroundColor;
            this.qti = c.fpi;
            this.uko = c.okb;
            this.hzb = c.xwt;
            this.qxi = c.wmy;
            this.arv = c.hvu;
            this.ayp = c.fyx;
            this.beo = c.mas;
            this.yvu = c.sih;
            for (var b = 0, a = this.ysy.length; b < a; b++) {
                this.ysy[b].wne((this.parent.vrz.had === true) ? c.rpw : c.tgv)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.ubg = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.ysy.length; f < b; f++) {
            var a = this.ysy[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.npz() === true) {
                if (a.ezw() === true && a.oxl() === false && this.fpw) {
                    a.llv(true, true);
                    this.parent.upk.iie("btn");
                    this.parent.upk.vjc("btn");
                    a.som();
                    for (var e = 0; e < b; e++) {
                        this.ysy[e].edr(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.yvf.x && c <= this.yvf.x + this.yvf.width && g >= this.yvf.y && g <= this.yvf.y + this.yvf.height && this.mkz && this.wbc) {
            this.qbs()
        }
        return true
    };
    this.sik = function() {};
    this.adq = function() {};
    this.vbi = function() {};
    this.anj = function(d, f, e, a, c) {
        var b = new mpa();
        b.ard(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.som = e;
        b.jit(c);
        return b
    };
    this.rkn = function(c) {
        this.wbc = c;
        for (var b = 0, a = this.ysy.length; b < a; b++) {
            this.ysy[b].mny(c)
        }
    };
    this.qbs = function() {
        this.fpw = !this.fpw;
        this.parent.nht()
    };
    this.kmf = function(d, a, c, b) {
        this.jnv = false;
        this.ooh = true;
        this.wzk = this.wbd(b);
        this.qcx = d;
        this.giw = a;
        this.ntr = c;
        if (this.npz()) {
            this.rkn(true);
            this.nht()
        }
    };
    this.wbd = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.tus(d) + ":" + this.tus(a) + ":" + this.tus(c)
    };
    this.tus = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.oeo = function(a, b) {
        this.jnv = a;
        if (b && b === true) {
            this.nht()
        }
    };
    this.gyx = function(a, b) {
        this.ooh = false;
        if (sut.ipy.value37) {
            this.fpw = false
        }
        this.oeo(a, false);
        ugh.prototype.gyx.call(this, a, b)
    };
    this.nht = function(j, f, k, d) {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.upk.mcq("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.kab;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.rwf.x, this.rwf.y, this.rwf.x + this.rwf.width, this.rwf.y);
            g.addColorStop(0.2, this.beo);
            g.addColorStop(1, this.yvu);
            l.fillStyle = g;
            l.save();
            if (this.parent.vuj === sut.vrz.pke) {
                l.translate(this.rwf.width / 2, this.rwf.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.rwf.width / 2, -this.rwf.height / 2)
            }
            l.fillRect(this.rwf.x, this.rwf.y, this.rwf.width, this.rwf.height);
            l.drawImage(c, this.rwf.x, this.rwf.y, this.rwf.width, this.rwf.height);
            l.restore()
        } else {
            if (this.parent.vrz.had === true) {
                sut.zdt.inh(l, this.rwf.x, this.rwf.y, this.rwf.width, this.rwf.height, this.beo, 1)
            }
        }
        sut.zdt.xwv(l, this.xlh.x, this.xlh.y, this.xlh.width, this.xlh.height, 0, this.qti);
        sut.zdt.ffx(l, this.wtg, this.hzb, this.xlh.x, this.xlh.y + this.aod, this.xlh.width, this.xlh.height, this.zka, this.asa, this.puv);
        sut.zdt.xwv(l, this.bir.x, this.bir.y, this.bir.width, this.bir.height, 0, this.qti);
        if (sut.ipy.value36) {
            sut.zdt.ujb(l, this.parent.aal(this.parent.language.ghk), this.hzb, this.bir.x, this.bir.y + this.aod, this.bir.width, this.bir.height, this.zka, this.awy, this.puv, this.mhg)
        } else {
            if (sut.ipy.value37) {
                sut.zdt.ujb(l, this.parent.aal(this.parent.language.tpr), this.hzb, this.bir.x, this.bir.y + this.aod, this.bir.width, this.bir.height, this.zka, this.awy, this.puv, this.mhg)
            }
        }
        sut.zdt.xwv(l, this.jnz.x, this.jnz.y, this.jnz.width, this.jnz.height, 0, this.uko);
        sut.zdt.ujb(l, this.parent.aal(this.parent.language.ukk), this.hzb, this.jnz.x, this.jnz.y + this.aod, this.jnz.width, this.jnz.height, this.zka, this.awy, this.puv, this.mhg);
        sut.zdt.xwv(l, this.jip.x, this.jip.y, this.jip.width, this.jip.height, 0, this.qti);
        sut.zdt.ujb(l, this.parent.aal(this.parent.language.rbu), this.hzb, this.jip.x, this.jip.y + this.aod, this.jip.width, this.jip.height, this.zka, this.awy, this.puv, this.mhg);
        if (this.mkz) {
            this.bqi(l)
        }
        if (this.ooh) {
            if (sut.ipy.value36) {
                sut.zdt.fzv(l, this.qcx, this.hzb, this.bir.x, this.bir.y + this.aod, this.bir.width, this.bir.height, this.zka, this.awy, this.puv, this.mhg)
            } else {
                if (sut.ipy.value37) {
                    sut.zdt.fzv(l, this.wzk, this.hzb, this.bir.x, this.bir.y + this.aod, this.bir.width, this.bir.height, this.zka, this.awy, this.puv, this.mhg)
                }
            }
            sut.zdt.fzv(l, this.parent.gje(this.giw), this.hzb, this.jnz.x, this.jnz.y + this.aod, this.jnz.width, this.jnz.height, this.zka, this.awy, this.puv, this.mhg);
            sut.zdt.fzv(l, this.parent.gje(this.ntr), this.hzb, this.jip.x, this.jip.y + this.aod, this.jip.width, this.jip.height, this.zka, this.awy, this.puv, this.mhg)
        }
        for (var b = 0, e = this.ysy.length; b < e; b++) {
            this.ysy[b].nht()
        }
        if (this.jnv) {
            sut.zdt.qot(l, this.tuz.x, this.tuz.y, this.tuz.width, this.tuz.height, this.yug, this.pud, 0.3, this.hsz, this.rmx, 1);
            sut.zdt.ffx(l, this.parent.aal(this.parent.language.efq), this.uog, this.tuz.x, this.tuz.y, this.tuz.width, this.tuz.height, this.zka, this.awy, this.puv)
        }
        l.restore();
        if (this.csj && this.veg) {
            if (a) {
                this.csj.drawImage(this.veg, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.csj.drawImage(this.veg, this.x, this.y)
            }
        }
    };
    this.bqi = function(b) {
        var c = Math.round(this.yvf.height / 2),
            a = Math.round(this.yvf.x + c),
            d = Math.round(this.yvf.y + c / 2);
        b.save();
        sut.zdt.xwv(b, this.yvf.x, this.yvf.y, this.yvf.width, this.yvf.height, this.jfs, this.qxi, this.arv, this.rmx);
        sut.zdt.ffx(b, this.parent.language.edm, this.hzb, this.yvf.x + this.yvf.height, this.yvf.y, this.yvf.width - this.yvf.height, this.yvf.height, this.zka, this.wui, this.puv);
        sut.zdt.inh(b, a, d, c, c, null, 0, this.ayp, this.rmx, 1);
        if (this.fpw) {
            sut.zdt.inh(b, a + c / 4, d + c / 4, c / 2, c / 2, this.ayp, 1)
        }
        b.restore()
    }
}
ugh.prototype = new drd;

function ccz() {
    this.mcx = "";
    this.gjp = "";
    this.hkk = null;
    this.bkz = "sans-serif";
    this.sqn = "sans-serif";
    this.puv = "bold";
    this.iny = null;
    this.hzb = null;
    this.erz = null;
    this.ckp = null;
    this.kab = null;
    this.esi = 16;
    this.sir = 20;
    this.cbu = 0;
    this.hfd = 0;
    this.rmx = 2;
    this.fbh = 3;
    this.ngx = 3;
    this.poc = 3;
    this.lgj = 3;
    this.ard = function(a, e, b, d, c) {
        ccz.prototype.ard.call(this, a, e, b);
        this.mcx = d;
        this.gjp = c
    };
    this.jit = function(a) {
        try {
            this.esi = a.roi;
            this.sir = a.wid;
            this.cbu = a.apl;
            this.hfd = a.xlm;
            this.rmx = a.gld;
            this.fbh = a.qbx;
            this.ngx = a.nhf;
            this.poc = a.jxx;
            this.lgj = a.lsg
        } catch (b) {
            console.error(b)
        }
    };
    this.wne = function(a) {
        try {
            this.bkz = a.dbj;
            this.sqn = a.npj;
            this.puv = a.ifg;
            this.iny = a.baz;
            this.hzb = a.xwt;
            this.erz = a.borderColor;
            this.ckp = a.eqh;
            this.kab = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.xsy = function(a, b) {
        this.gjp = a;
        if (b && b === true && this.context2D != null && this.npz() === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.mpg = function(a, b) {
        this.mcx = a;
        if (b && b === true && this.context2D != null && this.npz() === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.ckp) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.erz);
            b.addColorStop(1, this.ckp);
            sut.zdt.qji(a, this.x, this.y, this.width, this.height, this.fbh, this.ngx, this.poc, this.lgj, this.kab, 1, b, this.rmx, 1)
        } else {
            sut.zdt.qji(a, this.x, this.y, this.width, this.height, this.fbh, this.ngx, this.poc, this.lgj, this.kab, 1, this.erz, this.rmx, 1)
        }
        if (this.mcx != null) {
            sut.zdt.ffx(a, this.mcx, this.iny, this.x + this.rmx, this.y + this.cbu, this.width - 2 * this.rmx, this.height, this.bkz, this.esi, this.puv)
        }
        if (this.gjp != null) {
            if (this.mcx != null) {
                sut.zdt.ffx(a, this.gjp, this.hzb, this.x + this.rmx, this.y + this.hfd, this.width - 2 * this.rmx, this.height, this.sqn, this.sir, this.puv)
            } else {
                sut.zdt.ffx(a, this.gjp, this.hzb, this.x + this.rmx, this.y + this.rmx, this.width - 2 * this.rmx, this.height, this.sqn, this.sir, this.puv)
            }
        }
        if (this.hkk) {
            a.drawImage(this.hkk, 0, 0, this.hkk.width, this.hkk.height, this.x + this.rmx, this.y + this.rmx, this.width - 2 * this.rmx, this.height - 2 * this.rmx)
        }
        a.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    }
}
ccz.prototype = new drd;

function zfi() {
    var a = this;
    this.dfm = "LOADING ... ";
    this.hwq = "ERROR";
    this.trw = null;
    this.hkx = null;
    this.yiq = false;
    this.sxb = false;
    this.vtz = true;
    this.som = null;
    this.vyb = null;
    this.eks = null;
    this.eef = 0;
    this.mug = 0;
    this.wfe = false;
    this.pod = 0;
    this.wbq = 60;
    this.lws = 0;
    this.zka = "arial";
    this.puv = "bold";
    this.anw = "black";
    this.xoi = "rgb(0,100,10)";
    this.jky = "rgb(80,255,100)";
    this.pgo = "rgb(120,120,120)";
    this.jhw = "red";
    this.uoy = "white";
    this.hzb = "yellow";
    this.awy = 14;
    this.ayl = 18;
    this.ylt = 20;
    this.mrj;
    this.skl;
    this.aom;
    this.ojv;
    this.vfq = 5;
    this.mhg = 12;
    this.aod = 5;
    this.hjl = 2;
    this.hhi = new mhd();
    this.awb = new mhd();
    this.uvi = [];
    this.sjl = 0;
    this.ubd = 20;
    this.ard = function(b, d, c) {
        zfi.prototype.ard.call(this, b, d, c);
        this.vyb = document.createElement("canvas");
        this.eks = this.vyb.getContext("2d")
    };
    this.jit = function(b) {
        try {
            this.awy = b.fontSize;
            this.ayl = b.osl;
            this.ylt = b.owk;
            this.vfq = b.zmi;
            this.mhg = b.hck;
            this.aod = b.oqd;
            this.hjl = b.nxk;
            this.mrj = b.hsx;
            this.skl = b.pdw;
            this.aom = b.yyg;
            this.ojv = b.aai;
            this.hhi = b.tlz;
            if (this.awb.width > 0 && this.awb.height) {
                this.skr()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.wne = function(b) {
        try {
            this.zka = b.font;
            this.puv = b.ifg;
            this.anw = b.backgroundColor;
            this.xoi = b.wkt;
            this.jky = b.kbk;
            this.pgo = b.mol;
            this.jhw = b.mes;
            this.uoy = b.nxm;
            this.hzb = b.xwt;
            this.hkx = b.hkx
        } catch (c) {
            console.error(c)
        }
    };
    this.ubg = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.awb.x && d <= this.awb.x + this.awb.width && c >= this.awb.y && c <= this.awb.y + this.awb.height) {
            this.som();
            return true
        }
        return false
    };
    this.nht = function(b) {
        if (b && b >= 0) {
            this.mug = b
        }
        if (!this.npz()) {
            return
        }
        if (sut.ipy.value45 == sut.eyq.cin) {
            this.bdf()
        } else {
            if (sut.ipy.value45 == sut.eyq.ons) {
                this.hdb()
            }
        }
    };
    this.bdf = function() {
        if (this.yiq) {
            var c = this.context2D,
                b = this.aom.width / 100;
            c.save();
            if (this.sxb === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.upk.mcq("splash"), 0, 0, this.width, this.height);
            if (this.hkx) {
                sut.zdt.inh(c, this.vfq, this.vfq, this.width - 2 * this.vfq, this.height - 2 * this.vfq, this.hkx, 0.3)
            }
            if (this.trw != null && this.trw != "") {
                this.png(this.ojv, true)
            } else {
                if (this.wfe) {
                    sut.zdt.inh(c, this.hhi.x, this.hhi.y, this.hhi.width, this.hhi.height, this.anw, 0.7);
                    c.drawImage(this.vyb, this.hhi.x + this.hhi.width * (1 - this.uvi[this.sjl]) / 2, this.hhi.y + this.hhi.height * (1 - this.uvi[this.sjl]) / 2, this.hhi.width * this.uvi[this.sjl], this.hhi.height * this.uvi[this.sjl])
                } else {
                    if (this.vtz === true) {
                        if (this.sxb === false) {
                            sut.zdt.inh(c, this.mrj.x, this.mrj.y, this.mrj.width, this.mrj.height, this.anw, 0.7)
                        }
                        var e = this.dfm + " " + this.mug + "%";
                        var d = c.createLinearGradient(this.aom.x, this.aom.y, this.aom.x + this.aom.width, this.aom.y);
                        d.addColorStop(0, this.xoi);
                        d.addColorStop(1, this.jky);
                        sut.zdt.ffx(c, e, this.uoy, this.skl.x, this.skl.y, this.skl.width, this.skl.height, this.zka, this.awy, this.puv);
                        sut.zdt.qot(c, this.aom.x - this.hjl, this.aom.y, this.aom.width + 2 * this.hjl, this.aom.height, this.hjl, this.anw, 0.8, this.pgo, this.hjl, 0.8);
                        sut.zdt.inh(c, this.aom.x, this.aom.y + this.hjl / 2, b * this.mug, this.aom.height - this.hjl, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.hdb = function() {
        if (this.yiq) {
            var c = this.context2D,
                b = this.aom.width / 100;
            c.save();
            if (this.sxb === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.upk.mcq("splash"), 0, 0, this.width, this.height);
            if (this.trw != null && this.trw != "") {
                this.png(this.ojv, true)
            } else {
                if (this.wfe) {
                    c.drawImage(this.parent.upk.mcq("continue"), this.hhi.x, this.hhi.y, this.hhi.width, this.hhi.height);
                    c.drawImage(this.vyb, this.hhi.x + this.hhi.width * (1 - this.uvi[this.sjl]) / 2, this.hhi.y + this.hhi.height * (1 - this.uvi[this.sjl]) / 2, this.hhi.width * this.uvi[this.sjl], this.hhi.height * this.uvi[this.sjl])
                } else {
                    if (this.vtz === true) {
                        sut.zdt.inh(c, this.aom.x, this.aom.y, this.aom.width, this.aom.height, "rgb(0,0,0)", 0.5);
                        sut.zdt.inh(c, this.aom.x, this.aom.y, b * this.mug, this.aom.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.png = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.awy,
            k = this.trw,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.ayl * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.puv + " " + d + "px " + this.zka;
        for (var p = s; p < k.length; p++) {
            f += k.charAt(p);
            u = l.measureText(f).width;
            if (k.charAt(p) == " ") {
                t = p
            }
            if (p == k.length - 1) {
                o[v] = k.substring(s, k.length)
            } else {
                if (k.charAt(p) == "|") {
                    o[v] = k.substring(s, p);
                    v++;
                    s = p + 1;
                    f = k.substring(p + 1, p + 1)
                } else {
                    if (u >= c.width - 2 * this.mhg) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.aod)) {
            w = (c.height - j - this.aod) / b;
            d = Math.round(d * w) - 1;
            l.font = this.puv + " " + d + "px " + this.zka;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.puv + " " + d + "px " + this.zka;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.aod));
            c.height = j + b + this.aod;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            sut.zdt.inh(l, c.x, c.y, c.width, c.height, this.anw, 0.7)
        }
        if (this.hwq != null) {
            l.font = this.puv + " " + this.ayl + "px " + this.zka;
            l.fillStyle = this.jhw;
            l.textBaseline = "bottom";
            l.fillText(this.hwq, c.x + c.width / 2, c.y + this.ayl + this.aod)
        }
        l.font = this.puv + " " + d + "px " + this.zka;
        l.fillStyle = this.uoy;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.mhg), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.wgp = function() {
        return (this.wfe)
    };
    this.cio = function() {
        for (var b = 0; b < this.ubd; b++) {
            this.uvi[b] = 1 - Math.sin(Math.PI * b / (this.ubd - 1)) * 0.04
        }
        this.uvi[this.ubd - 1] = 1;
        this.wfe = true;
        this.sjl = 0;
        this.skr();
        this.eef = setInterval(this.ngj, this.wbq);
        this.nht()
    };
    this.ngj = function() {
        a.nht();
        a.sjl = (a.sjl < a.ubd - 1) ? a.sjl + 1 : 0
    };
    this.stop = function() {
        this.wfe = false;
        clearTimeout(this.eef)
    };
    this.skr = function() {
        var b = this.eks;
        this.awb = this.hhi;
        this.vyb.width = Math.round(this.awb.width);
        this.vyb.height = Math.round(this.awb.height);
        b.save();
        b.clearRect(0, 0, this.vyb.width, this.vyb.height);
        sut.zdt.gaf(b, this.parent.language.ynb, this.hzb, 0, 0, this.vyb.width, this.vyb.height, this.zka, this.ylt, this.puv, "center", true);
        b.restore()
    }
}
zfi.prototype = new drd;

function mtk() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.cen = null;
    this.lme = null;
    this.wzy = null;
    this.hzj = null;
    this.cvf = null;
    this.swa = [];
    this.jlo = 0;
    this.nsj = [];
    this.plo = [];
    this.ztc = 0;
    this.uia = false;
    this.uji = false;
    this.ard = function() {
        this.cen = document.getElementById("messageOverlay");
        this.lme = document.getElementById("messagePanel");
        this.wzy = document.getElementById("messageTitle");
        this.hzj = document.getElementById("messageText");
        this.cvf = document.getElementById("btne");
        if (this.cvf) {
            this.cvf.innerHTML = "\u00D7";
            this.cvf.onclick = this.dqk;
            this.cvf.ontouchend = this.dqk
        }
        for (var f = 0; f < 4; f++) {
            this.swa[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.wne = function(f) {
        try {
            this.nsj = f.zdf
        } catch (g) {
            console.error(g)
        }
    };
    this.jit = function(j) {
        try {
            if (this.lme) {
                sut.zdt.lja(this.lme, j.fkh)
            }
            if (this.wzy) {
                this.wzy.style.fontSize = j.roi + "px";
                sut.zdt.lja(this.wzy, j.aps)
            }
            if (this.hzj) {
                this.hzj.style.fontSize = j.wid + "px";
                sut.zdt.lja(this.hzj, j.qmw)
            }
            if (this.cvf) {
                sut.zdt.lja(this.cvf, j.uws)
            }
            for (var g = 0, f = this.swa.length; g < f; g++) {
                this.swa[g].style.fontSize = j.xln.fontSize + "px";
                this.swa[g].style.top = j.nxw.y + "px";
                this.swa[g].style.height = j.nxw.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.jja = function(j) {
        this.plo.length = 0;
        this.ztc = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.plo[g] = j[g]
        }
        this.ucl(this.plo[this.ztc])
    };
    this.dqk = function() {
        if (b.lme) {
            b.uji = false;
            b.lme.style.display = "none";
            b.cen.style.display = "none";
            sut.yxh.hea();
            sut.yxh.ocv = false
        }
    };
    this.ucl = function(l) {
        var n = this.plo.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.adk === sut.ife.udy || l.adk === sut.ife.zkc) {
            this.jlo = d;
            this.uia = (l.DisplayType == sut.fcv.ysm.ocq) ? true : false
        } else {
            if (l.adk === sut.ife.boe || l.adk === sut.ife.czk || l.adk === sut.ife.okj || l.adk === sut.ife.roulette.wjn || l.adk === sut.ife.roulette.ali) {
                this.jlo = a;
                this.uia = false
            } else {
                if (l.adk === sut.ife.bpj || l.adk === sut.ife.bzq) {
                    this.jlo = c;
                    this.uia = false
                } else {
                    if (l.adk === sut.ife.wen || l.adk === sut.ife.jpq || l.adk === sut.ife.qiy) {
                        this.jlo = e;
                        this.uia = false
                    }
                }
            }
        }
        if (l.Title && this.wzy) {
            this.wzy.style.color = this.nsj[this.jlo];
            this.wzy.innerHTML = l.Title
        }
        if (l.Text && this.hzj) {
            this.hzj.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.swa[0].innerHTML = "\u2039";
            this.swa[0].onclick = this.ehn;
            this.swa[0].ontouchend = this.ehn;
            this.swa[0].style.display = "inline-block";
            this.swa[this.swa.length - 1].innerHTML = "\u203A";
            this.swa[this.swa.length - 1].onclick = this.wxl;
            this.swa[this.swa.length - 1].ontouchend = this.wxl;
            this.swa[this.swa.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.swa.length - 1 : this.swa.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.swa[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.swa[g].innerHTML = sut.yxh.language.uxb
                    } else {
                        if (j == "continue") {
                            this.swa[g].innerHTML = sut.yxh.language.ynb.replace(/ /g, "")
                        } else {
                            this.swa[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.swa[g].onclick = sut.yxh.nst;
                    this.swa[g].ontouchend = sut.yxh.nst
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.adk === sut.ife.udy) {
                            this.swa[g].onclick = this.uon.bind(this, l.Buttons[k].Link);
                            this.swa[g].ontouchend = this.uon.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.adk === sut.ife.zkc || l.adk === sut.ife.wen || l.adk === sut.ife.jpq) {
                                this.swa[g].onclick = this.ilh;
                                this.swa[g].ontouchend = this.ilh
                            } else {
                                if (l.adk === sut.ife.bpj || l.adk === sut.ife.bzq || l.adk === sut.ife.qiy) {
                                    this.swa[g].onclick = this.tha;
                                    this.swa[g].ontouchend = this.tha
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.swa[g].onclick = sut.yxh.vjp;
                            this.swa[g].ontouchend = sut.yxh.vjp
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === sut.fcv.wyc.uao) {
                                    this.swa[g].onclick = this.owe.bind(this, l.Buttons[k].Link);
                                    this.swa[g].ontouchend = this.owe.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === sut.fcv.wyc.plr) {
                                        this.swa[g].onclick = this.uon.bind(this, l.Buttons[k].Link);
                                        this.swa[g].ontouchend = this.uon.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === sut.fcv.wyc.qkv) {
                                            this.swa[g].onclick = this.ikp.bind(this, l.Buttons[k].Link);
                                            this.swa[g].ontouchend = this.ikp.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.swa[g].style.display = "inline-block"
            } else {
                this.swa[g].style.display = "none"
            }
        }
        this.cvf.style.display = (this.uia) ? "inline-block" : "none";
        if (this.lme) {
            this.uji = true;
            this.lme.style.display = "block";
            this.cen.style.display = "block";
            sut.yxh.hea();
            sut.yxh.ocv = true
        }
    };
    this.npz = function() {
        if (this.uji) {
            return true
        }
        return false
    };
    this.ilh = function() {
        b.dqk();
        sut.yxh.mqf(sut.yxh.state)
    };
    this.uon = function(f) {
        var g = null;
        if (f) {
            g = sut.zdt.fkz("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        if (sut.yxh.rmj) {
            sut.yxh.rmj.nfb({
                sender: sut.yxh.fzw,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        b.dqk();
        sut.yxh.weu()
    };
    this.ikp = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = sut.zdt.fkz("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.swa.length; g < f; g++) {
                b.swa[g].disabled = true
            }
            k.onload = function() {
                b.dqk();
                for (var m = 0, l = b.swa.length; m < l; m++) {
                    b.swa[m].disabled = false
                }
                sut.yxh.weu()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.swa.length; m < l; m++) {
                    b.swa[m].disabled = false
                }
            }
        }
        if (sut.yxh.rmj) {
            sut.yxh.rmj.nfb({
                sender: sut.yxh.fzw,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        k.send()
    };
    this.tha = function() {
        window.location.reload()
    };
    this.owe = function(f) {
        if (sut.yxh.rmj) {
            sut.yxh.rmj.nfb({
                sender: sut.yxh.fzw,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        window.parent.postMessage('CloseGame',"*");	
    };
    this.ehn = function() {
        b.ztc = (b.ztc > 0) ? b.ztc - 1 : b.plo.length - 1;
        b.ucl(b.plo[b.ztc])
    };
    this.wxl = function() {
        b.ztc = (b.ztc < b.plo.length - 1) ? b.ztc + 1 : 0;
        b.ucl(b.plo[b.ztc])
    }
}
sut.ipy = new Settings();
sut.zdt = new uyo();

function tup() {
    this.kyt = "";
    this.apr = "";
    this.uyh = null;
    this.canvas = null;
    this.context2D = null;
    this.bje = null;
    this.ajg = null;
    this.iwg = null;
    this.rya = null;
    this.yxv = null;
    this.ums = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.uyt = 0;
    this.jio = 0;
    this.jiw = false;
    this.width = 0;
    this.height = 0;
    this.ilm = 0;
    this.exa = 0;
    this.ggf = 1;
    this.krr = 1;
    this.vgk = false;
    this.pgr = false;
    this.style = null;
    this.vrz = null;
    this.vuj = -1;
    this.kiy = false;
    this.vir = false;
    this.wsu = false;
    this.jrz = false;
    this.ocv = false;
    this.gej = false;
    this.pep = false;
    this.bbf = false;
    this.ccj = "";
    this.jon = "";
    this.szt = "";
    this.ldb = "";
    this.oqj = "";
    this.ced = "";
    this.hni = "1_1_60";
    try {
        if (sut.ipy.value19) {
            this.ccj = sessionStorage.sessionValue2;
            this.jon = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.szt = sessionStorage.sessionValue2
            } else {
                this.ccj = sessionStorage.sessionValue2;
                this.jon = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.szt = sessionStorage.sessionValue2
                } else {
                    this.szt = ""
                }
            }
        }
    } catch (b) {}
    this.ofw = null;
    this.zbf = null;
    this.hep = false;
    this.qox = null;
    this.upk = null;
    this.njg = null;
    this.lni = true;
    this.lah = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.xgq = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.xgq = this.lah.length - 1
                } else {
                    this.xgq = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.xgq = this.lah.length - 1
        }
    } catch (b) {
        this.xgq = 0
    }
    this.ujm = 0;
    this.language = new ubk();
    this.vmm = 0;
    this.tvd = 1;
    this.hxs = this.tvd;
    this.jvb = [sut.ngc.bvd, sut.ngc.vak, sut.ngc.ytw];
    this.mvn = (sut.zdt.cwr()) ? 0 : this.jvb.length - 1;
    try {
        if (localStorage.localValue1) {
            this.mvn = Number(localStorage.localValue1);
            if (!sut.zdt.cwr() && this.jvb[this.mvn] === sut.ngc.bvd) {
                this.mvn = this.jvb.length - 1
            }
        }
    } catch (b) {}
    this.hip = false;
    this.fzw = "";
    this.xtu = "";
    this.jma = 0;
    this.state = 0;
    this.lek = false;
    this.kcq = 5000;
    this.nnx = 0;
    this.abj = 0;
    this.ojq = 0;
    this.twx = 0;
    this.azf = false;
    this.huy = false;
    this.dni = false;
    this.fid = null;
    this.boi = 0;
    this.nrx = 0;
    this.irh = 0;
    this.hdy = -1;
    this.lmw = -1;
    this.jqb = 0;
    this.maw = null;
    this.neq = [];
    this.qyu = [];
    this.rmj = null;
    this.rfw = false;
    this.djx = 0;
    this.kix = 0;
    this.upi = false;

    function a(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var d = "[\\?&]" + e + "=([^&#]*)";
        var g = new RegExp(d);
        var f = g.exec(window.location.href);
        if (f == null) {
            return ""
        } else {
            return f[1]
        }
    }
    this.ard = function(d) {
        this.fhs();
        sut.zdt.imf();
        sut.zdt.gwe();
        this.izm();
        if (!this.azf) {
            this.brp()
        }
        this.jju(this.pfs(d.vrz));
        this.urn();
        this.zhs();
        this.kkq();
        this.esj();
        this.mlr();
        this.kan();
        this.vvy();
        this.gzh();
        this.jax();
        this.afa();
        return this
    };
    this.kkq = function() {};
    this.fhs = function() {};
    this.gzh = function() {
        try {
            if (sut.ipy.value64 && !this.dni) {
                this.qox = new ias();
                this.qox.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.izm = function() {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && sut.ipy.value8) {
                sessionStorage.sessionValue5 = sut.ipy.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.ced = sessionStorage.sessionValue8;
                if (sut.ipy.value72) {
                    var o = sut.ipy.value72[this.ced];
                    if (sut.ipy.value21.e === true && o) {
                        sut.ipy.value21.s = o.s;
                        sut.ipy.value21.m = o.m;
                        sut.ipy.value21.ts = o.ts;
                        sut.ipy.value21.cs = o.cs
                    }
                    if (sut.ipy.value76 && sut.ipy.value76.f === true && o) {
                        sut.ipy.value76.s = o.s;
                        sut.ipy.value76.m = o.m;
                        sut.ipy.value76.ts = o.ts;
                        sut.ipy.value76.cs = o.cs
                    }
                }
            }
            if (this.fhi()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.oqj = sessionStorage.sessionValue7
            }
            var f = a("scale");
            if (f == "proportional" || f == "default") {
                sessionStorage.sessionValue22 = f
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (sut.zdt.zuy) ? sut.ipy.value51.m : sut.ipy.value51.d
            }
            var i = a("sessionTime");
            if (i != "") {
                sessionStorage.sessionValue15 = i
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = sut.ipy.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (sut.ipy.value39 > 0) {
                sessionStorage.sessionValue17 = sut.ipy.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var g = sessionStorage.sessionValue18.split(";");
                if (g.length == 2) {
                    this.djx = Number(g[0]);
                    this.kix = Number(g[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.kix) {
                    this.kix = Number(s);
                    this.djx = new Date().getTime() - (this.kix * 1000);
                    sessionStorage.sessionValue18 = this.djx + ";" + this.kix
                }
            }
            if (sut.ipy.value86 === true) {
                var q = a("selfTestURL");
                if (q != "") {
                    sessionStorage.sessionValue19 = q
                }
                var m = a("limitsURL");
                if (m != "") {
                    sessionStorage.sessionValue20 = m
                }
                var l = a("pauseURL");
                if (l != "") {
                    sessionStorage.sessionValue21 = l
                }
            }
        } catch (k) {
            console.error(k.ife)
        }
    };
    this.vvy = function() {
        if (!(sut.zdt.scy == sut.os.knd && sut.zdt.elu == sut.qfs.jmy)) {
            document.ontouchstart = sut.yxh.iay
        }
        if (sut.zdt.elu != sut.qfs.vna && sut.zdt.elu != sut.qfs.jmy) {
            document.ontouchmove = sut.yxh.clp;
            document.ontouchend = sut.yxh.lyd
        }
        if (!sut.zdt.wvx) {
            document.onmousedown = sut.yxh.azm;
            document.onmouseup = sut.yxh.lyc;
            document.onmousemove = sut.yxh.lfm
        }
        document.onkeydown = sut.yxh.bso;
        document.onkeyup = sut.yxh.npe;
        document.oncontextmenu = sut.yxh.wfj;
        this.gej = (this.idd() && sut.zdt.cho() && sut.zdt.zuy);
        if (sut.zdt.oxx() === false && sut.zdt.scy === sut.os.hqy && sut.zdt.swp() === true && screen.width <= 414 && this.cpm()) {
            this.jqb = setInterval(this.auk, 1000)
        }
    };
    this.iay = function(d) {
        if (sut.yxh.kiy === true) {
            sut.yxh.qfk();
            sut.yxh.hcj()
        }
        sut.yxh.ubg(d)
    };
    this.lyd = function(d) {
        if (sut.yxh.kiy === true) {
            if (sut.yxh.gej) {
                sut.yxh.yyz()
            } else {
                sut.yxh.sik(d)
            }
        } else {
            if (sut.yxh.pep) {
                sut.yxh.arr()
            }
        }
    };
    this.clp = function(d) {
        sut.yxh.xfr(d)
    };
    this.azm = function(d) {
        window.focus();
        if (sut.yxh.kiy === true) {
            sut.yxh.qfk();
            sut.yxh.hcj()
        }
        sut.yxh.ubg(d)
    };
    this.lyc = function(d) {
        if (sut.yxh.kiy === true) {
            sut.yxh.sik(d)
        }
    };
    this.lfm = function(d) {};
    this.bso = function(d) {
        if ((d.keyCode == 122 && (sut.zdt.scy == sut.os.itf || sut.zdt.scy == sut.os.yqc)) || (d.keyCode == 70 && d.ctrlKey && sut.zdt.scy == sut.os.phg)) {
            return
        }
        sut.yxh.qfk();
        sut.yxh.hcj();
        sut.yxh.adq(d)
    };
    this.npe = function(d) {
        sut.yxh.vbi(d)
    };
    this.wfj = function() {
        return false
    };
    this.ubg = function(d) {};
    this.sik = function(d) {};
    this.adq = function(d) {};
    this.vbi = function(d) {};
    this.xfr = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.unb = function() {
        var f = sut.yxh.njg.hie("topb"),
            e = sut.yxh.njg.hie("settings"),
            d = sut.yxh.njg.hie("topi"),
            g = sut.yxh.njg.hie("gameb");
        if (sut.zdt.elu == sut.qfs.vna || sut.zdt.elu == sut.qfs.qgm) {
            sut.yxh.pgr = (window.innerWidth == window.outerWidth)
        } else {
            if (sut.zdt.elu == sut.qfs.tcw || sut.zdt.elu == sut.qfs.xqq) {
                sut.yxh.pgr = (window.innerHeight >= window.outerHeight)
            } else {
                if (sut.zdt.elu == sut.qfs.fus) {
                    sut.yxh.pgr = (document.fullscreenElement) ? true : false
                } else {
                    if (sut.zdt.zuy) {
                        if (sut.zdt.elu == sut.qfs.aec || sut.zdt.elu == sut.qfs.sun || sut.zdt.elu == sut.qfs.pob) {
                            sut.yxh.pgr = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (sut.zdt.elu == sut.qfs.jmy) {
                                sut.yxh.pgr = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.ovq("fullscreen", sut.yxh.pgr)
        }
        if (f) {
            f.knk.pck("fullscreen", "#ovq", [(sut.yxh.pgr) ? 1 : 0])
        }
        if (e) {
            e.knk.pck("fullscreen", "#ovq", [(sut.yxh.pgr) ? 1 : 0])
        }
        if (g) {
            g.knk.pck("fullscreen", "#ovq", [(sut.yxh.pgr) ? 1 : 0])
        }
        sut.yxh.jgb();
        sut.yxh.zck();
        sut.yxh.yww();
        if (sut.zdt.swp() === true && sut.zdt.oxx() === false) {
            document.body.style.height = "5000px"
        }
        if (!sut.zdt.oxx() && sut.zdt.elu === sut.qfs.pob && sut.yxh.jio < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.wcz = function() {
        sut.yxh.unb();
        sut.yxh.auk()
    };
    this.auk = function() {
        if (sut.zdt.swp() === true && sut.zdt.oxx() === false) {
            if (sut.yxh.cpm() === true) {
                var f = document.getElementById("slideUpOverlay"),
                    e = document.getElementById("slideElem1"),
                    d = document.getElementById("slideElem2");
                if (f && e && d) {
                    if (window.innerHeight < screen.width) {
                        e.className = "slideUpAnim1";
                        d.className = "slideUpAnim2";
                        f.style.display = "block";
                        document.ontouchstart = null;
                        document.ontouchend = null;
                        document.ontouchmove = null;
                        if (window.ontouchmove == null) {
                            sut.yxh.unb();
                            window.ontouchmove = sut.yxh.wcz
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = sut.yxh.iay;
                        document.ontouchmove = sut.yxh.clp;
                        document.ontouchend = sut.yxh.lyd;
                        if (window.ontouchmove != null) {
                            sut.yxh.unb();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.nkr = function(g) {
        var j = document.getElementById("rotateOverlay"),
            e = document.getElementById("rotatePanel"),
            k = document.getElementById("rotate"),
            f = document.getElementById("rotateInfo"),
            d = 500,
            l = 700,
            n = window.innerHeight / d,
            m = window.innerWidth / l,
            i = (n < m) ? n : m;
        if (j && k) {
            if (g === true) {
                if (i < 1) {
                    sut.zdt.lbs(e, i, i)
                }
                f.innerHTML = sut.yxh.language.han;
                k.className = "rotateAnim";
                j.style.display = "block";
                sut.yxh.ocv = true
            } else {
                j.style.display = "none";
                k.className = null;
                sut.yxh.ocv = false
            }
        }
    };
    this.ifr = function() {
        var d = sut.yxh.njg.hie("settings");
        sut.yxh.unb();
        if (d) {
            d.knk.pck("adjustment", "#ovq", [(sut.yxh.vuj === sut.vrz.hix) ? 0 : 1]);
            d.nht()
        }
        if (sut.yxh.hip === true) {
            sut.yxh.ocv = true;
            sut.yxh.dyw(true);
            sut.yxh.nkr(true)
        } else {
            sut.yxh.ocv = false;
            sut.yxh.dyw((sut.yxh.lah[sut.yxh.xgq] === 0));
            sut.yxh.nkr(false)
        }
    };
    this.jgb = function() {
        this.uyt = window.innerWidth, this.jio = window.innerHeight;
        this.jiw = false;
        if (sut.zdt.oxx() == true && sut.ipy.value69 === true) {
            if (sut.zdt.zyy() === true) {
                this.jiw = true;
                this.uyt = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.jio = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.uyt > this.jio) {
                    this.jio *= 0.98
                }
            } else {
                if (sut.zdt.swp() === true) {
                    this.jiw = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.uyt = 1024;
                            this.jio = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.uyt = 736;
                                this.jio = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.uyt = 667;
                                    this.jio = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.uyt = 768;
                            this.jio = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.uyt = 414;
                                this.jio = 628
                            } else {
                                if (screen.height === 667) {
                                    this.uyt = 375;
                                    this.jio = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.yww = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.uyt,
            d = this.jio;
        this.vgk = (this.pgr || i < this.width || d < this.height || this.vrz.oqm);
        g = this.dqg(this.vgk);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.vgk) {
            if (this.vrz.ksz || sessionStorage.sessionValue22 == "proportional") {
                if (f > e) {
                    this.ggf = e;
                    this.krr = e
                } else {
                    this.ggf = f;
                    this.krr = f
                }
            } else {
                this.ggf = f;
                this.krr = e
            }
        } else {
            this.ggf = 1;
            this.krr = 1
        }
        sut.zdt.lbs(this.canvas, this.ggf, this.krr);
        if (this.bje != null) {
            sut.zdt.lbs(this.bje, this.ggf, this.krr, ((this.vrz.bje.fkh.x) - ((this.vrz.bje.fkh.x + this.vrz.bje.bea) / 2 * (1 - this.ggf))), ((this.vrz.bje.fkh.y) - ((this.vrz.bje.fkh.y + this.vrz.bje.vaz) / 2 * (1 - this.krr))))
        }
        if (this.iwg != null) {
            sut.zdt.lbs(this.iwg, this.ggf, this.krr)
        }
        if (this.vgk) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.ggf))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.krr))) / 2
        } else {
            this.offsetLeft = this.uyh.offsetLeft;
            this.offsetTop = this.uyh.offsetTop
        }
    };
    this.zck = function() {
        if (this.qpy() === true) {
            var e = null;
            if (this.jvb[this.mvn] === sut.ngc.bvd) {
                if (window.orientation === -90) {
                    e = sut.vrz.pke
                } else {
                    e = sut.vrz.hix
                }
            } else {
                if (this.jvb[this.mvn] === sut.ngc.vak) {
                    e = sut.vrz.pke
                } else {
                    if (this.jvb[this.mvn] === sut.ngc.ytw) {
                        e = sut.vrz.hix
                    }
                }
            }
            this.hip = (this.jio > this.uyt);
            this.jju(e);
            this.hgc(false);
            if (this.jrz === true) {
                this.nht()
            } else {
                this.njg.pck("loading", "#nht")
            }
        } else {
            if (sut.zdt.zuy) {
                var f = (this.uyt > this.jio) ? this.tvd : this.vmm,
                    d = this.vrz.mus,
                    e = null;
                if (f != this.hxs) {
                    this.hxs = f;
                    if (this.azf) {
                        e = (this.hxs == this.tvd) ? sut.vrz.zmt : sut.vrz.hkc
                    } else {
                        e = (this.hxs == this.tvd) ? sut.ipy.value33 : sut.ipy.value32
                    }
                    this.jju(e);
                    this.hgc((d != this.vrz.mus) || this.azf);
                    if (this.jrz === true) {
                        if (this.azf && this.huy) {
                            this.wvg(this.aal(this.language.kwu))
                        } else {
                            this.nht()
                        }
                    } else {
                        this.njg.pck("loading", "#nht")
                    }
                }
            } else {
                if (!this.azf) {
                    e = (this.pgr) ? sut.ipy.value15 : sut.ipy.value14;
                    this.jju(e);
                    this.hgc(false);
                    if (this.jrz === true) {
                        this.nht()
                    } else {
                        this.njg.pck("loading", "#nht")
                    }
                }
            }
        }
    };
    this.qpy = function() {
        return false
    };
    this.cpm = function() {
        return false
    };
    this.jju = function(d) {};
    this.urn = function() {
        this.style = new itj()
    };
    this.dqg = function(d) {
        var e = 0;
        if (sut.zdt.zyy() && window.innerWidth > window.innerHeight && d) {
            if (this.kiy === true && document.body.style.backgroundColor !== this.style.xnp.backgroundColor) {
                document.body.style.backgroundColor = this.style.xnp.backgroundColor
            }
        }
        return e
    };
    this.iow = function() {
        if (sut.zdt.zyy() && !sut.zdt.oxx() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.kxi = function() {
        return false
    };
    this.esj = function() {
        if (sut.zdt.wvx) {
            this.upk = new mix()
        } else {
            this.upk = new rgx()
        }
        this.upk.ard();
        this.upk.pqb(this.dkf())
    };
    this.mlr = function() {
        this.njg = new mbv();
        this.njg.ard();
        this.njg.wwh("jackpots")
    };
    this.dkf = function() {
        var d = new ybt();
        d.ard();
        return d
    };
    this.brp = function() {
        this.fid = new qlc()
    };
    this.zhs = function() {
        try {
            var d = a("lang"),
                f = a("uselang"),
                o = [],
                p = [];
            if (d != "") {
                sessionStorage.sessionValue1 = d
            }
            if (f != "") {
                sessionStorage.sessionValue11 = f
            }
            if (sessionStorage.sessionValue11) {
                o = sessionStorage.sessionValue11.split(",");
                for (var l = 0, m = o.length; l < m; l++) {
                    for (var k = 0, g = sut.ipy.value5.length; k < g; k++) {
                        if (o[l] === sut.ipy.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(sut.ipy.value5[0])
                }
                sut.ipy.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    sut.ipy.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = sut.zdt.gle();
                if (this.hig(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === sut.language.EN && this.hig(sut.language.US)) {
                        sessionStorage.sessionValue1 = sut.language.US
                    } else {
                        if (q === sut.language.DE && this.hig(sut.language.AT)) {
                            sessionStorage.sessionValue1 = sut.language.AT
                        } else {
                            if (q === sut.language.ES && this.hig(sut.language.MX)) {
                                sessionStorage.sessionValue1 = sut.language.MX
                            } else {
                                if (q === sut.language.ES && this.hig(sut.language.CO)) {
                                    sessionStorage.sessionValue1 = sut.language.CO
                                } else {
                                    if (q === sut.language.ES && this.hig(sut.language.CL)) {
                                        sessionStorage.sessionValue1 = sut.language.CL
                                    } else {
                                        if (q === sut.language.ES && this.hig(sut.language.VE)) {
                                            sessionStorage.sessionValue1 = sut.language.VE
                                        } else {
                                            if (q === sut.language.EN && this.hig(sut.language.BR)) {
                                                sessionStorage.sessionValue1 = sut.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = sut.ipy.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.hig(sessionStorage.sessionValue1)) {
                for (var l = 0, m = sut.ipy.value5.length; l < m; l++) {
                    if (sut.ipy.value5[l] == sessionStorage.sessionValue1) {
                        this.ujm = l;
                        break
                    }
                }
                this.language = this.rjg(sessionStorage.sessionValue1)
            } else {
                this.ujm = 0;
                this.language = this.rjg(sut.ipy.value5[this.ujm]);
                sessionStorage.sessionValue1 = sut.ipy.value5[this.ujm]
            }
        } catch (n) {
            this.ujm = 0;
            this.language = this.rjg(sut.ipy.value5[this.ujm]);
            console.error(n.ife)
        }
    };
    this.jax = function() {
        var d = (sut.ipy.value45 == sut.eyq.cin) ? this.vrz.eyq.yxh : this.vrz.eyq.tzt;
        this.uyh = document.getElementById("gameArea");
        if (this.jiw === false) {
            this.uyh.style.marginTop = (-d.fkh.height / 2) + "px";
            this.uyh.style.marginLeft = (-d.fkh.width / 2) + "px"
        } else {
            this.uyh.style.left = "0px";
            this.uyh.style.top = "0px";
            this.uyh.style.marginTop = ((window.innerHeight - d.fkh.height) / 2) + "px";
            this.uyh.style.marginLeft = ((window.innerWidth - d.fkh.width) / 2) + "px"
        }
        this.uyh.style.width = (d.fkh.width > window.innerWidth) ? window.innerWidth + "px" : d.fkh.width + "px";
        this.uyh.style.height = (d.fkh.height > window.innerHeight) ? window.innerHeight + "px" : d.fkh.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.fkh.width);
        this.canvas.height = Math.round(d.fkh.height);
        this.context2D = this.canvas.getContext("2d");
        this.iwg = document.getElementById("gameOverlay");
        if (this.iwg) {
            this.iwg.style.width = d.fkh.width + "px";
            this.iwg.style.height = d.fkh.height + "px"
        }
        this.opb(d)
    };
    this.opb = function(e) {
        var f = new zfi(),
            d = (sut.ipy.value45 == sut.eyq.cin) ? this.style.eyq.yxh : this.style.eyq.tzt;
        f.ard(e.fkh, this.context2D);
        f.parent = this;
        f.som = (sut.zdt.zuy) ? this.fdz : this.arr;
        f.dfm = (this.azf) ? this.language.gse : this.language.tyl;
        f.hwq = this.language.error;
        f.jit(e);
        f.wne(d);
        this.njg.mpd("loading", f)
    };
    this.nqv = function() {
        var d = new ugk();
        d.ard(this.vrz.tsh.fkh, null, this.context2D);
        d.parent = this;
        d.jit(this.vrz.tsh);
        d.wne(this.style.tsh);
        if (sessionStorage.sessionValue15 == "true" && sut.ipy.value49) {
            d.lie("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || sut.ipy.value49) {
                d.lie("time", "", "--:--")
            }
        }
        if (this.fhi()) {
            d.lie("freeplay", "", this.language.xti)
        } else {
            d.lie("id", "", "")
        }
        this.njg.mpd("topi", d)
    };
    this.opq = function() {
        var d = new era();
        d.ard(this.vrz.oze.fkh, null, this.context2D);
        d.parent = this;
        d.jit(this.vrz.oze);
        d.wne(this.style.oze, false);
        d.gyx(false);
        this.njg.mpd("topb", d)
    };
    this.llz = function() {};
    this.vdf = function() {
        var d = new ugh();
        d.ard(this.vrz.zqw.fkh, null, this.context2D);
        d.parent = this;
        d.bhp(this.vrz.zqw);
        d.wne(this.style.zqw);
        d.gyx(false);
        this.njg.mpd("stats", d)
    };
    this.ifm = function() {
        this.rya = new mtk();
        this.rya.ard();
        this.rya.wne(this.style.rya);
        this.rya.jit(this.vrz.rya)
    };
    this.brt = function() {
        this.yxv = new apm();
        this.yxv.ard();
        this.yxv.wne(this.style.yxv);
        this.yxv.jit(this.vrz.yxv)
    };
    this.jzq = function() {
        if (this.ucp()) {
            this.ums.qdf = document.getElementById("jurisdictionDiv");
            this.ums.bnq = document.getElementById("btnsp");
            this.ums.rez = document.getElementById("btnsl");
            this.ums.onp = document.getElementById("btnst");
            if (this.ums.bnq) {
                this.ums.bnq.innerHTML = this.language.gxz;
                this.ums.bnq.onclick = this.aho;
                this.ums.bnq.ontouchend = this.aho
            }
            if (this.ums.rez) {
                this.ums.rez.innerHTML = this.language.bgm;
                this.ums.rez.onclick = this.oqe;
                this.ums.rez.ontouchend = this.oqe
            }
            if (this.ums.onp) {
                this.ums.onp.innerHTML = this.language.brm;
                this.ums.onp.onclick = this.lxj;
                this.ums.onp.ontouchend = this.lxj
            }
            this.kjo();
            this.hea()
        }
    };
    this.nih = function(e) {
        var d = new hlb();
        d.ard(this.vrz.qng.fkh, null, this.context2D);
        d.parent = this;
        d.aqm = true;
        if (e) {
            d.rjs(e)
        }
        d.bhp(this.vrz.qng);
        d.hzt(this.language);
        d.wne(this.style.qng);
        d.jit(this.vrz.qng);
        d.gyx(false);
        this.njg.mpd("autop", d)
    };
    this.ifp = function(d) {
        var e = new gpz();
        e.ard(this.vrz.asq.fkh, null, this.context2D);
        e.parent = this;
        if (d) {
            e.wub(d)
        }
        e.gyx(false);
        this.njg.mpd("settings", e)
    };
    this.hgc = function(d) {};
    this.eof = function() {
        var d = this.njg.hie("stats");
        if (d) {
            d.phx(this.vrz.zqw.fkh);
            d.jit(this.vrz.zqw)
        }
    };
    this.pai = function() {
        if (this.rya) {
            this.rya.jit(this.vrz.rya)
        }
    };
    this.ofe = function() {
        if (this.yxv) {
            this.yxv.jit(this.vrz.yxv)
        }
    };
    this.kjo = function() {
        var d = null,
            e = 0;
        if (this.ums) {
            d = this.vrz.tey;
            if (this.ums.qdf) {
                sut.zdt.lja(this.ums.qdf, d.qfv)
            }
            if (this.ums.bnq) {
                this.ums.bnq.style.fontSize = d.xln.fontSize + "px";
                this.ums.bnq.style.textIndent = d.xln.textIndent + "px";
                sut.zdt.lja(this.ums.bnq, d.zdl)
            }
            if (this.ums.rez) {
                this.ums.rez.style.fontSize = d.xln.fontSize + "px";
                this.ums.rez.style.textIndent = d.xln.textIndent + "px";
                sut.zdt.lja(this.ums.rez, d.lvv)
            }
            if (this.ums.onp) {
                this.ums.onp.style.fontSize = d.xln.fontSize + "px";
                this.ums.onp.style.textIndent = d.xln.textIndent + "px";
                sut.zdt.lja(this.ums.onp, d.teq)
            }
            if (this.ums.qdf) {
                e = (d.qfv.width - d.qfv.height) / 2;
                if (this.vuj == sut.vrz.pke) {
                    this.ums.qdf.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.ums.qdf.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.mvg = function() {
        var d = this.njg.hie("autop");
        if (d) {
            d.phx(this.vrz.qng.fkh);
            d.jit(this.vrz.qng)
        }
    };
    this.nhi = function() {
        var d = this.njg.hie("settings");
        if (d) {
            d.phx(this.vrz.asq.fkh);
            d.jit(this.vrz.asq)
        }
    };
    this.hcv = function() {
        var d = this.njg.hie("topi");
        if (d) {
            d.phx(this.vrz.tsh.fkh);
            d.jit(this.vrz.tsh)
        }
    };
    this.oio = function() {
        var d = this.njg.hie("topb");
        if (d) {
            d.phx(this.vrz.oze.fkh);
            d.jit(this.vrz.oze)
        }
    };
    this.zuf = function() {
        var e = this.njg.hie("loading"),
            d = (sut.ipy.value45 == sut.eyq.cin) ? this.vrz.eyq.yxh : this.vrz.eyq.tzt;
        if (e) {
            this.canvas.width = 0;
            if (this.jiw === false) {
                this.uyh.style.marginTop = (-d.fkh.height / 2) + "px";
                this.uyh.style.marginLeft = (-d.fkh.width / 2) + "px"
            } else {
                this.uyh.style.left = "0px";
                this.uyh.style.top = "0px";
                this.uyh.style.marginTop = ((this.jio - d.fkh.height) / 2) + "px";
                this.uyh.style.marginLeft = ((this.uyt - d.fkh.width) / 2) + "px"
            }
            this.uyh.style.width = (d.fkh.width > this.uyt) ? this.uyt + "px" : d.fkh.width + "px";
            this.uyh.style.height = (d.fkh.height > this.jio) ? this.jio + "px" : d.fkh.height + "px";
            this.canvas.width = Math.round(d.fkh.width);
            this.canvas.height = Math.round(d.fkh.height);
            if (this.iwg) {
                this.iwg.style.width = d.fkh.width + "px";
                this.iwg.style.height = d.fkh.height + "px"
            }
            e.phx(d.fkh);
            e.jit(d)
        }
    };
    this.kan = function() {
        if (sut.zdt.zuy && !sut.zdt.wvx) {
            if (!this.upk.yet && sut.zdt.elu != sut.qfs.zfd) {
                this.lni = false;
                this.xgq = 0
            }
        }
    };
    this.pfs = function(d) {
        if (sut.zdt.zuy) {
            if (!this.azf) {
                return sut.vrz.wan
            } else {
                if (!this.dni) {
                    return sut.vrz.zmt
                }
            }
        }
        return d
    };
    this.hzi = function() {
        var d = this.njg.hie("loading");
        this.unb();
        if (d) {
            d.yiq = true
        }
        if ((sut.zdt.elu === sut.qfs.aec || sut.zdt.elu === sut.qfs.xqq || sut.zdt.elu === sut.qfs.fwe) && sut.zdt.scy === sut.os.knd && sut.zdt.zma === true) {
            if (this.upk.yet === false || sut.zdt.cho() === false || sut.zdt.omw() === false) {
                sut.fun = sut.jhe.wib
            }
        }
        if (sut.fun == 0) {
            if (this.lni === true && sut.zdt.xxp().length === 0) {
                this.lni = false
            }
            if (d) {
                d.nht(0)
            }
            this.uco();
            if (this.lni === true) {
                this.pek()
            }
            this.upk.start()
        } else {
            if (d) {
                if (sut.fun == sut.jhe.tvv && sut.zdt.elu === sut.qfs.pob) {
                    d.trw = this.language.ewj;
                    d.nht(0)
                } else {
                    if (sut.fun == sut.ife.tas) {
                        d.trw = this.language.std;
                        d.nht(0)
                    } else {
                        d.trw = this.language.fhz;
                        if (sut.zdt.scy === sut.os.knd || sut.zdt.scy === sut.os.yqc) {
                            if (sut.fun != sut.jhe.tvv && sessionStorage.sessionValue1 === sut.language.TR) {
                                d.trw += "|Google Chrome" + this.language.wuw
                            } else {
                                if (sut.fun != sut.jhe.tvv && (sessionStorage.sessionValue1 === sut.language.GE || sessionStorage.sessionValue1 === sut.language.HU)) {
                                    d.trw += "|" + this.language.ocu + " Google Chrome" + this.language.muo
                                } else {
                                    d.trw += "|" + this.language.wuw + " Google Chrome"
                                }
                            }
                        } else {
                            if (sut.zdt.scy === sut.os.itf || sut.zdt.scy === sut.os.yqc) {
                                if (sut.fun != sut.jhe.tvv && sessionStorage.sessionValue1 === sut.language.TR) {
                                    d.trw += "|Google Chrome, Mozilla Firefox" + this.language.wuw
                                } else {
                                    if (sut.fun != sut.jhe.tvv && (sessionStorage.sessionValue1 === sut.language.GE || sessionStorage.sessionValue1 === sut.language.HU)) {
                                        d.trw += "|" + this.language.ocu + " Google Chrome, Mozilla Firefox" + this.language.muo
                                    } else {
                                        d.trw += "|" + this.language.wuw + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + sut.fun);
                        d.nht(0)
                    }
                }
            }
        }
    };
    this.uco = function() {};
    this.pek = function() {};
    this.afa = function() {
        var e = this.kyt + this.vrz.type + "/",
            d = this.njg.hie("loading");
        if (!this.azf) {
            this.upk.ksn("continue", sut.ipy.value30 + "/basic/images/" + this.vrz.type + "/btn_continue.png")
        }
        if (sut.ipy.value45 == sut.eyq.cin) {
            e += "load.jpg"
        } else {
            if (sut.ipy.value45 == sut.eyq.ons) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.sxb = true
            }
        }
        this.upk.ksn("splash", e);
        this.upk.qwn()
    };
    this.ruh = function() {};
    this.hig = function(e) {
        for (var d = 0; d < sut.ipy.value5.length; d++) {
            if (sut.ipy.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.dxp = function() {
        sut.yxh.vir = true;
        if (!sut.yxh.azf) {
            sut.yxh.efz();
            if (sut.yxh.vbb()) {
                sut.yxh.fll()
            }
        } else {
            sut.yxh.bco()
        }
        sut.yxh.connect()
    };
    this.efz = function() {};
    this.bco = function() {};
    this.connect = function() {
        this.ofw.connect(this.fzw, this.ccj, this.jon, this.szt, this.hni, this.oqj, this.ced)
    };
    this.nel = function(d) {
        if (typeof d === "undefined") {
            sut.yxh.ofw.nel(0)
        } else {
            sut.yxh.ofw.nel(d)
        }
    };
    this.nja = function(d) {
        this.abj = 0;
        this.ojq = 0;
        this.twx = d;
        clearInterval(this.boi);
        this.boi = setInterval(this.oed, 1000)
    };
    this.oed = function() {
        var d = sut.yxh.njg.hie("loading");
        sut.yxh.abj++;
        sut.yxh.ojq = Math.round(sut.ipy.value47 / 1000) - sut.yxh.abj;
        sut.yxh.ojq = (sut.yxh.ojq > 0) ? sut.yxh.ojq : 0;
        if (!sut.yxh.kiy) {
            if (d) {
                d.trw = sut.yxh.language.gsd + "|" + sut.yxh.language.aar + ": " + sut.yxh.twx + " (" + sut.yxh.ojq + " sec)";
                d.nht(0)
            }
        }
    };
    this.ssx = function() {
        return sut.ipy.value74
    };
    this.nht = function(d, g, e, f) {};
    this.xwm = function() {
        return (this.jrz === true && this.kiy === true && this.hip === false)
    };
    this.wvg = function(e) {
        var d = this.njg.hie("history");
        this.jrz = true;
        if (this.kiy) {
            if (this.vrz.efi) {
                sut.zdt.inh(this.context2D, this.vrz.yxh.fkh.x - this.vrz.yxh.gld, this.vrz.yxh.fkh.y - this.vrz.yxh.gld, this.vrz.yxh.fkh.width + 2 * this.vrz.yxh.gld, this.vrz.yxh.fkh.height + 2 * this.vrz.yxh.gld, "black", 1)
            }
            sut.zdt.ffx(this.context2D, e, "white", this.vrz.yxh.fkh.x, this.vrz.yxh.fkh.y, this.vrz.yxh.fkh.width, this.vrz.yxh.fkh.height, "arial", 28, "bold");
            if (d) {
                d.nht()
            }
        }
    };
    this.vjp = function() {
        if (sut.yxh.rya) {
            sut.yxh.rya.dqk()
        }
        sut.yxh.jyt(false);
        sut.yxh.gzz.rkn(false);
        sut.yxh.gzz.knk.pck("exit", "#mny", [true]);
        if (sut.zdt.ejt()) {
            sut.zdt.glz();
            setTimeout(sut.yxh.unb, 1400)
        }
        if (sut.ipy.value67 > 0) {
            sut.yxh.nel(sut.ipy.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null" && sut.yxh.rmj) {
                sut.yxh.rmj.qrz({
                    sender: sut.yxh.fzw,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.parent.postMessage('CloseGame',"*");	
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null" && sut.yxh.rmj) {
                    sut.yxh.rmj.kek({
                        sender: sut.yxh.fzw,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.parent.postMessage('CloseGame',"*");	
                    }
                }
            }
        }
    };
    this.nst = function() {
        clearTimeout(sut.yxh.hdy);
        sut.yxh.jyt(false);
        if (sut.yxh.gzz) {
            sut.yxh.gzz.rkn(false)
        }
        if (!sut.yxh.azf) {
            sut.yxh.stop();
            if (sut.yxh.gzz) {
                sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.efq]);
                sut.yxh.nht()
            }
            if (sut.yxh.qpy() === true && sut.zdt.ejt()) {
                sut.zdt.glz();
                setTimeout(sut.yxh.unb, 800);
                setTimeout(sut.yxh.ofw.mdw.close, 800)
            } else {
                sut.yxh.ofw.mdw.close()
            }
        } else {
            sut.yxh.ofw.close()
        }
    };
    this.kdz = function() {
        sut.yxh.gej = true
    };
    this.yyz = function() {
        if (sut.zdt.zuy == true) {
            if (sut.yxh.gej == true) {
                sut.yxh.gej = false;
                sut.zdt.glz();
                setTimeout(sut.yxh.unb, 1400)
            }
        } else {
            sut.zdt.glz();
            setTimeout(sut.yxh.unb, 1400)
        }
    };
    this.bhs = function() {
        var e = (sut.yxh.qpy() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == sut.language.ES || sessionStorage.sessionValue1 == sut.language.CO || sessionStorage.sessionValue1 == sut.language.CL || sessionStorage.sessionValue1 == sut.language.MX || sessionStorage.sessionValue1 == sut.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == sut.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == sut.language.PT || sessionStorage.sessionValue1 == sut.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == sut.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == sut.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == sut.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (sut.yxh.sfc != "") {
            var f = null,
                g = "",
                d = "";
            if (sut.yxh.sfc != "") {
                g += "rtp=" + sut.yxh.sfc
            }
            if (sut.yxh.bag != "") {
                g += (sut.yxh.sfc != "") ? "&" : "";
                g += "maxwin=" + ((sut.yxh.bag == "0") ? "0" : sut.yxh.mfm(Number(sut.yxh.bag) * sut.yxh.nfa()))
            }
            d = encodeURIComponent(g);
            f = window.open(sut.ipy.value30 + "/gamerules/" + i + "/" + e + "/" + sut.yxh.fzw.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = sut.ipy.value30 + "/gamerules/" + i + "/" + e + "/" + sut.yxh.fzw.toLowerCase() + ".html?" + d
            }
        }
    };
    this.xcy = function() {
        sut.yxh.hep = false;
        sut.yxh.xbh();
        sut.yxh.ufo();
        sut.yxh.typ()
    };
    this.cas = function() {
        var d = sut.yxh.njg.hie("stats");
        if (d) {
            d.oeo(true, true)
        }
        sut.yxh.zbf.close(true)
    };
    this.rbi = function() {
        var d = sut.yxh.njg.hie("stats");
        sut.yxh.stop();
        if (d && d.npz()) {
            d.oeo(true, true)
        }
        sut.yxh.ofw.mdw.close();
        if (sut.yxh.zbf) {
            sut.yxh.zbf.close(false)
        }
    };
    this.epp = function() {
        clearTimeout(sut.yxh.hdy);
        sut.yxh.gzz.rkn(false);
        sut.yxh.stop();
        sut.yxh.ofw.mdw.uab()
    };
    this.feo = function() {
        if (sut.yxh.huy) {
            return
        }
        var d = sut.yxh.njg.hie("history");
        if (d) {
            d.rkn(false)
        }
        sut.yxh.stop();
        sut.yxh.ofw.heh(sut.yxh.jma)
    };
    this.rbo = function() {
        if (sut.yxh.huy) {
            return
        }
        var d = sut.yxh.njg.hie("history");
        if (d) {
            d.rkn(false)
        }
        sut.yxh.stop();
        sut.yxh.ofw.tpw(sut.yxh.jma)
    };
    this.dzg = function() {
        var d = sut.yxh.njg.hie("history");
        if (d) {
            d.rkn(false)
        }
        sut.yxh.stop();
        clearInterval(sut.yxh.jqb);
        sut.yxh.sup();
        sut.yxh.ofw.close()
    };
    this.oup = function() {
        sut.yxh.upk.iie("btn");
        sut.yxh.upk.vjc("btn");
        sut.yxh.tru()
    };
    this.dlh = function() {
        var f = sut.yxh.njg.hie("topb"),
            e = sut.yxh.njg.hie("settings"),
            g = sut.yxh.njg.hie("gameb"),
            d = sut.yxh.njg.hie("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (sut.yxh.upk.yet === true) {
            sut.yxh.xgq = (sut.yxh.xgq === sut.yxh.lah.length - 1) ? 0 : sut.yxh.xgq + 1;
            sut.yxh.trj(sut.yxh.lah[sut.yxh.xgq])
        } else {
            sut.yxh.xgq = (sut.yxh.xgq === sut.yxh.lah.length - 1) ? 0 : sut.yxh.lah.length - 1;
            sut.yxh.dyw((sut.yxh.lah[sut.yxh.xgq] === 0))
        }
        sessionStorage.sessionValue6 = sut.yxh.xgq;
        if (sut.yxh.lah[sut.yxh.xgq] > 0) {
            sut.yxh.upk.vjc("audioon")
        }
        if (d) {
            d.qih("audio", sut.yxh.lah[sut.yxh.xgq])
        }
        if (f) {
            f.knk.pck("audio", "#ovq", [sut.yxh.xgq])
        }
        if (e) {
            e.knk.pck("audio", "#ovq", [sut.yxh.xgq])
        }
        if (g) {
            g.knk.pck("audio", "#ovq", [sut.yxh.xgq])
        }
        sut.yxh.nht()
    };
    this.fdz = function() {
        sut.yxh.pep = true
    };
    this.arr = function() {};
    this.nni = function() {
        var d = sut.yxh.njg.hie("settings");
        if (d) {
            if (d.npz()) {
                sut.yxh.mdo()
            } else {
                sut.yxh.vgb()
            }
            sut.yxh.upk.vjc("btn");
            if (sut.yxh.vrz.had === false) {
                sut.yxh.gzz.knk.pck("setting", "#yyb", [d.npz()])
            }
        }
    };
    this.yso = function() {
        var d = sut.yxh.njg.hie("settings"),
            e = "";
        sut.yxh.mvn = (sut.yxh.mvn < sut.yxh.jvb.length - 1) ? sut.yxh.mvn + 1 : (sut.zdt.cwr()) ? 0 : 1;
        localStorage.localValue1 = sut.yxh.mvn;
        sut.yxh.unb();
        if (d) {
            d.knk.pck("adjustment", "#ovq", [(sut.yxh.vuj === sut.vrz.hix) ? 0 : 1]);
            if (sut.yxh.jvb[sut.yxh.mvn] === sut.ngc.vak) {
                e = sut.yxh.language.left
            } else {
                if (sut.yxh.jvb[sut.yxh.mvn] === sut.ngc.ytw) {
                    e = sut.yxh.language.eex
                } else {
                    if (sut.yxh.jvb[sut.yxh.mvn] === sut.ngc.bvd) {
                        e = sut.yxh.language.aky
                    }
                }
            }
            d.knk.pck("adjustment", "#xsy", [e])
        }
    };
    this.aho = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.parent.postMessage('CloseGame',"*");	
        }
    };
    this.oqe = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
           window.parent.postMessage('CloseGame',"*");	
        }
    };
    this.lxj = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
           window.parent.postMessage('CloseGame',"*");	
        }
    };
    this.ucs = function(e, d) {
        this.gzz.knk.pck("creditd", "#xsy", [this.mfm(e), d])
    };
    this.zdv = function(e, d) {
        if (e > 0) {
            this.gzz.knk.pck("betd", "#xsy", [this.mfm(e), d])
        } else {
            this.gzz.knk.pck("betd", "#xsy", ["", d])
        }
    };
    this.kwb = function(e) {
        var d = this.njg.hie("topi");
        this.jma = e;
        if (d) {
            d.hvb("id", (e > 0) ? e : "")
        }
    };
    this.dpu = function() {
        var e = "",
            d = sut.yxh.njg.hie("topi");
        if (sut.ipy.value49) {
            e += sut.yxh.fre()
        }
        if (sut.ipy.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += sut.yxh.uuw()
        }
        if (sut.ipy.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.hvb("time", e)
        }
    };
    this.uuw = function() {
        return this.getTime(new Date().getTime() - this.ukh)
    };
    this.fre = function() {
        var d = new Date();
        return this.tus(d.getHours()) + ":" + this.tus(d.getMinutes())
    };
    this.getTime = function(e) {
        var g = e,
            d = 0,
            f = 0;
        d = Math.floor(e / (60000));
        g = e - d * 60000;
        f = Math.round(g / 1000);
        if (f >= 60) {
            f -= 60;
            d++
        }
        return this.tus(d) + ":" + this.tus(f)
    };
    this.tus = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.uka = function() {
        if (sessionStorage.sessionValue15 == "true" || sut.ipy.value49) {
            if (sut.ipy.value49) {
                this.fre()
            }
            this.ukh = (this.djx > 0) ? this.djx : new Date().getTime();
            this.dpu();
            this.nrx = setInterval(this.dpu, 1000)
        }
    };
    this.uzm = function() {
        clearInterval(this.nrx)
    };
    this.cgo = function(d) {
        this.ukh -= d
    };
    this.ikk = function(d, f) {
        var e = this.njg.hie("loading");
        if (e && e.trw == null) {
            if (f && f !== "") {
                e.hwq = f
            } else {
                e.hwq = this.language.error
            }
            e.trw = d;
            e.nht(this.upk.lfh())
        }
    };
    this.vgb = function() {};
    this.mdo = function() {};
    this.sgv = function() {};
    this.msl = function() {};
    this.tru = function() {
        var g = false,
            i = this.njg.hie("topb"),
            f = this.njg.hie("settings"),
            j = this.njg.hie("gameb"),
            d = this.njg.hie("topi");
        this.ujm = (this.ujm + 1 == sut.ipy.value5.length) ? 0 : this.ujm + 1;
        sessionStorage.sessionValue1 = sut.ipy.value5[this.ujm];
        this.language = this.rjg(sut.ipy.value5[this.ujm]);
        this.hzt();
        if (i && g == false) {
            var e = i.knk.hie("language");
            if (e) {
                e.hvf(this.qol(sut.ipy.value5[this.ujm]));
                g = true
            }
            i.cys(true)
        }
        if (f && g == false) {
            var e = f.knk.hie("language");
            if (e) {
                e.hvf(this.qol(sut.ipy.value5[this.ujm]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.knk.hie("language");
            if (e) {
                e.hvf(this.qol(sut.ipy.value5[this.ujm]));
                g = true
            }
        }
        if (g == false) {
            var e = this.gzz.knk.hie("lang");
            if (e) {
                e.hkk = this.qol(sut.ipy.value5[this.ujm])
            }
        }
        if (d) {
            d.ovq("language", sessionStorage.sessionValue1)
        }
        this.nht()
    };
    this.hzt = function() {};
    this.rjg = function(d) {
        if (d == sut.language.EN || d == sut.language.US) {
            return new qjj()
        } else {
            if (d == sut.language.ES || d == sut.language.CO || d == sut.language.MX || d == sut.language.CL || d == sut.language.VE) {
                return new qpr()
            } else {
                if (d == sut.language.DE || d == sut.language.AT) {
                    return new iee()
                } else {
                    if (d == sut.language.PT || d == sut.language.BR) {
                        return new ush()
                    } else {
                        if (d == sut.language.RU) {
                            return new piu()
                        } else {
                            if (d == sut.language.EE) {
                                return new uou()
                            } else {
                                if (d == sut.language.TR) {
                                    return new qri()
                                } else {
                                    if (d == sut.language.CZ) {
                                        return new oqi()
                                    } else {
                                        if (d == sut.language.GR) {
                                            return new kfl()
                                        } else {
                                            if (d == sut.language.BG) {
                                                return new zfq()
                                            } else {
                                                if (d == sut.language.GE) {
                                                    return new bnc()
                                                } else {
                                                    if (d == sut.language.HU) {
                                                        return new tvc()
                                                    } else {
                                                        if (d == sut.language.RO) {
                                                            return new yxa()
                                                        } else {
                                                            if (d == sut.language.FR) {
                                                                return new nwx()
                                                            } else {
                                                                if (d == sut.language.HR) {
                                                                    return new ook()
                                                                } else {
                                                                    if (d == sut.language.IT) {
                                                                        return new sxw()
                                                                    } else {
                                                                        if (d == sut.language.SE) {
                                                                            return new crl()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.qol = function(d) {
        if (d) {
            return this.upk.mcq(d)
        }
        return null
    };
    this.okp = function() {
        this.upk.aed()
    };
    this.sup = function() {};
    this.dyw = function(d) {
        this.upk.jwd(d)
    };
    this.trj = function(d) {
        this.upk.ngf(d)
    };
    this.qrv = function() {
        this.llz();
        var d = this.njg.hie("history");
        this.kiy = true;
        this.huy = true;
        if (d) {
            d.fym(true)
        }
        this.wvg(this.aal(this.language.kwu))
    };
    this.jol = function() {
        loadGame("hist_" + sut.yxh.fzw.toLowerCase(), sut.ipy.value30 + "/" + sut.yxh.fzw.toLowerCase() + "/src/hist_" + sut.yxh.fzw.toLowerCase(), "UTF-8");
        removeGame(sut.yxh.fzw.toLowerCase(), sut.ipy.value30 + "/" + sut.yxh.fzw.toLowerCase() + "/src/" + sut.yxh.fzw.toLowerCase())
    };
    this.lgu = function() {
        var d = "./history_" + this.fzw.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
       window.parent.postMessage('CloseGame',"*");	
    };
    this.kfv = function() {
        var d = null;
        if (sut.yxh.dni) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            if (sut.yxh.rmj) {
                sut.yxh.rmj.kek({
                    sender: sut.yxh.fzw,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
			window.parent.postMessage('CloseGame',"*");	
            sut.yxh.tvg();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(sut.yxh.fzw.toLowerCase(), sut.ipy.value30 + "/" + sut.yxh.fzw.toLowerCase() + "/src/" + sut.yxh.fzw.toLowerCase());
            removeGame("hist_" + sut.yxh.fzw.toLowerCase(), sut.ipy.value30 + "/" + sut.yxh.fzw.toLowerCase() + "/src/hist_" + sut.yxh.fzw.toLowerCase());
            loadMenu("menu", sut.ipy.value1001, "UTF-8", true)
        }
    };
    this.gyj = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            if (sut.yxh.rmj) {
                sut.yxh.rmj.kek({
                    sender: sut.yxh.fzw,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            d = decodeURIComponent(sessionStorage.sessionValue5);
			window.parent.postMessage('CloseGame',"*");	
            sut.yxh.tvg();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(sut.yxh.fzw.toLowerCase(), sut.ipy.value30 + "/" + sut.yxh.fzw.toLowerCase() + "/src/" + sut.yxh.fzw.toLowerCase());
            removeGame("hist_" + sut.yxh.fzw.toLowerCase(), sut.ipy.value30 + "/" + sut.yxh.fzw.toLowerCase() + "/src/hist_" + sut.yxh.fzw.toLowerCase());
            loadMenu("menu", sut.ipy.value1001, "UTF-8", false)
        }
    };
    this.tvg = function() {
        if (!sut.yxh.azf && sut.ipy.value83) {
            sessionStorage.clear()
        }
    };
    this.wlc = function(f) {
        var g = null;
        if (this.rya) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.adk !== sut.ife.udy) {
                    if (g.adk === sut.ife.boe || g.adk === sut.ife.okj) {
                        g.Title = this.language.gfa;
                        g.Text = (g.adk === sut.ife.boe) ? this.language.lbx : this.language.zph;
                        g.Buttons = [{
                            Text: this.language.uxb,
                            Action: "quit"
                        }]
                    } else {
                        if (g.adk === sut.ife.czk) {
                            g.Title = this.language.tht;
                            g.Text = this.language.asc + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.qrl;
                                g.Buttons = [{
                                    Text: this.aal(this.language.ygy),
                                    Action: "history"
                                }, {
                                    Text: this.language.uxb,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.uxb,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.adk === sut.ife.wen || g.adk === sut.ife.jpq || g.adk === sut.ife.qiy) {
                                g.Title = this.zxm;
                                if (g.adk === sut.ife.wen) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.arg
                                } else {
                                    if (g.adk === sut.ife.jpq) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.kyh) + " " + this.language.freerounds_info2 + "\n\n" + this.language.arg
                                    } else {
                                        if (g.adk === sut.ife.qiy) {
                                            g.Text = this.language.freerounds_played + ": " + this.kyh + "\n" + this.language.freerounds_win + ": " + this.gje(this.jen)
                                        }
                                    }
                                }
                                g.Buttons = [{
                                    Text: this.language.ok,
                                    Action: "continue"
                                }]
                            }
                        }
                    }
                    if (g.adk === sut.ife.bpj || g.adk === sut.ife.bzq) {
                        g.Title = this.language.yai;
                        g.Text = this.language.ktu;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.adk === sut.ife.zkc) {
                            g.Title = this.language.pwx;
                            g.Text = this.language.tcg;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.adk === sut.ife.roulette.wjn || g.adk === sut.ife.roulette.ali) {
                                g.Title = this.language.gfa;
                                g.Text = (g.adk === sut.ife.roulette.wjn) ? this.language.xin : this.language.tqg;
                                g.Buttons = [{
                                    Text: this.language.uxb,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.rya.jja(f)
        }
    };
    this.stop = function() {
        this.uzm();
        this.umj();
        this.fzz();
        clearTimeout(this.irh);
        if (!this.azf) {
            clearInterval(this.jqb)
        }
        this.njg.pck("autop", "#stop");
        this.njg.pck("settings", "#stop");
        this.njg.pck("topb", "#stop")
    };
    this.fhi = function() {
        var d = false;
        if (this.ldb.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.ccj == "freeplay" && this.jon == "freeplay") {
                d = true
            } else {
                if (this.szt && (this.szt == "b71d982ffcbe56eb8cd11fa05963bbee" || this.szt.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (sut.ipy.value68 != null && this.ced.toLowerCase() === sut.ipy.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            sut.ipy.value21.e = false;
            if (sut.ipy.value76) {
                sut.ipy.value76.f = false
            }
        }
        return d
    };
    this.igv = function() {
        return (sut.ipy.value65 > 0)
    };
    this.idd = function() {
        return (this.azf === false)
    };
    this.ezm = function() {
        return false
    };
    this.etm = function() {
        if (sut.yxh.igv() && sut.yxh.ezm()) {
            clearTimeout(sut.yxh.hdy);
            sut.yxh.hdy = setTimeout(sut.yxh.nst, sut.ipy.value65)
        }
    };
    this.qfk = function() {
        if (sut.yxh.igv() && sut.yxh.hdy >= 0) {
            if (sut.yxh.ezm()) {
                clearTimeout(sut.yxh.hdy);
                sut.yxh.hdy = setTimeout(sut.yxh.nst, sut.ipy.value65)
            } else {
                clearTimeout(sut.yxh.hdy);
                sut.yxh.hdy = -1
            }
        }
    };
    this.umj = function() {
        if (sut.yxh.igv()) {
            clearTimeout(sut.yxh.hdy);
            sut.yxh.hdy = -1
        }
    };
    this.kbm = function() {
        return false
    };
    this.hkr = function() {
        return false
    };
    this.gce = function() {
        if (sut.yxh.kbm() && sut.yxh.hkr() && sut.yxh.lmw < 0) {
            clearTimeout(sut.yxh.lmw);
            sut.yxh.lmw = setTimeout(sut.yxh.ddr, sut.yxh.kcq)
        }
    };
    this.hcj = function() {
        if (sut.yxh.kbm() && sut.yxh.lmw >= 0) {
            if (sut.yxh.hkr()) {
                clearTimeout(sut.yxh.lmw);
                sut.yxh.lmw = setTimeout(sut.yxh.ddr, sut.yxh.kcq)
            } else {
                clearTimeout(sut.yxh.lmw);
                sut.yxh.lmw = -1
            }
        }
    };
    this.fzz = function() {
        if (sut.yxh.kbm()) {
            clearTimeout(sut.yxh.lmw);
            sut.yxh.lmw = -1
        }
    };
    this.ddr = function() {};
    this.emy = function() {};
    this.nmu = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.hni.replace(/_*/g, ""));
        if (e > d) {
            this.hni = f
        }
    };
    this.jyt = function(g) {
        var e = (g && !this.dkj),
            f = this.njg.hie("topb"),
            d = this.njg.hie("topi");
        if (d) {
            d.mny(e)
        }
        if (f) {
            f.mny(e);
            f.rkn(e)
        }
    };
    this.mda = function(g) {
        var e = (g && !this.dkj),
            f = this.njg.hie("topb"),
            d = this.njg.hie("topi");
        if (d) {
            d.mny(e)
        }
        if (f) {
            f.mny(e);
            f.dik(e)
        }
    };
    this.mno = function(g) {
        var e = (g && !this.dkj),
            f = this.njg.hie("topb"),
            d = this.njg.hie("topi");
        if (d) {
            d.mny(e)
        }
        if (f) {
            f.mny(e);
            f.rnc(e)
        }
    };
    this.pmk = function() {
        var d = this.njg.hie("topb");
        if (d && !d.npz()) {
            this.upk.iie("panel_in");
            this.upk.vjc("panel_in");
            d.jja()
        }
    };
    this.xbh = function(d) {
        var e = this.njg.hie("topb");
        if (e && e.npz()) {
            this.upk.iie("panel_out");
            this.upk.vjc("panel_out");
            if (d) {
                e.ltt = d
            }
            e.dqk()
        }
    };
    this.gje = function(f) {
        if (this.nnx > 0) {
            return (f * this.nnx).toFixed(0).toString()
        } else {
            if (sut.ipy.value21.e == false || this.dni == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (sut.ipy.value21.m != 1) {
                    e = f * sut.ipy.value21.m;
                    var g = sut.ipy.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = sut.ipy.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.vdj(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.mfm = function(f) {
        if (this.nnx > 0) {
            var e = (f * this.nnx).toFixed(0).toString();
            if (sut.ipy.value21.e == true && sut.ipy.value21.m == 1 && sut.ipy.value21.s && this.dni == false) {
                e = sut.ipy.value21.s + " " + e
            }
            return e
        } else {
            if (sut.ipy.value21.e == false || this.dni == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (sut.ipy.value21.m != 1) {
                    e = f * sut.ipy.value21.m;
                    var g = sut.ipy.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = sut.ipy.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.vdj(e, (d == 0) ? 0 : d + 1);
                if (sut.ipy.value21.s) {
                    e = sut.ipy.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.vdj = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (sut.ipy.value21.cs != null) {
                l = l.replace(/\./, sut.ipy.value21.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (sut.ipy.value21.ts != null) {
                        e += sut.ipy.value21.ts
                    }
                }
            }
            if (sut.ipy.value21.cs != null) {
                f = f.replace(/\./, sut.ipy.value21.cs)
            }
            return e + f
        }
    };
    this.qgl = function(f) {
        if (this.nnx > 0) {
            return (f * this.nnx).toFixed(0).toString()
        } else {
            if (sut.ipy.value76.f == false || this.dni == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (sut.ipy.value76.m != 1) {
                    e = f * sut.ipy.value76.m;
                    var g = sut.ipy.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = sut.ipy.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.pqp(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.amu = function(f) {
        if (this.nnx > 0) {
            var e = (f * this.nnx).toFixed(0).toString();
            if (sut.ipy.value76.f == true && sut.ipy.value76.m == 1 && sut.ipy.value76.s && this.dni == false) {
                e = sut.ipy.value76.s + " " + e
            }
            return e
        } else {
            if (sut.ipy.value76.f == false || this.dni == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (sut.ipy.value76.m != 1) {
                    e = f * sut.ipy.value76.m;
                    var g = sut.ipy.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = sut.ipy.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.pqp(e, (d == 0) ? 0 : d + 1);
                if (sut.ipy.value76.s) {
                    e = sut.ipy.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.pqp = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (sut.ipy.value76.cs != null) {
                l = l.replace(/\./, sut.ipy.value76.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (sut.ipy.value76.ts != null) {
                        e += sut.ipy.value76.ts
                    }
                }
            }
            if (sut.ipy.value76.cs != null) {
                f = f.replace(/\./, sut.ipy.value76.cs)
            }
            return e + f
        }
    };
    this.aal = function(d) {
        if (d && sessionStorage.sessionValue1 !== sut.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.ybj = function() {
        for (var f = 0, d = this.ofw.mdw.ejn.length, e = null, g = 0; f < d; f++) {
            e = this.ofw.mdw.ejn[f];
            g = e.xpe.substring(e.xpe.length - 1);
            this.njg.mpd(e.xpe, this.zkn(this.vrz.maw.fkh[d - 1][e.fkh], (d > 2) ? this.vrz.maw.tgg : this.vrz.maw.display, this.style.maw.yon[e.fkh], e.mcx, e.value, this.upk.mcq((d > 2) ? e.xpe + "_smalldsp" : e.xpe + "_dsp"), (d <= 2) ? [this.upk.mcq("jackpot_frame")] : (Number(g) <= 2) ? [this.upk.mcq("jackpot_topframe")] : [this.upk.mcq("jackpot_bottomframe")], (d > 2) ? this.upk.mcq(e.xpe + "_sym") : null), ["jackpots"])
        }
        this.njg.mpd("jwp", this.zkn(this.vrz.maw.cmv.fkh, this.vrz.maw.cmv, this.style.maw.cmv, null, null, null, [this.upk.mcq("jackpot_win_0"), this.upk.mcq("jackpot_win_1"), this.upk.mcq("jackpot_win_2")], null));
        this.njg.pck("jwp", "#gyx", [false]);
        if (this.bgc()) {
            this.njg.mpd("mjwp", this.iqo(this.vrz.maw.vab.fkh, this.vrz.maw.vab, this.style.maw.vab, this.upk.mcq("mj_bg"), this.upk.mcq("mj_font"), this.upk.mcq("mj_label"), [this.upk.mcq("mj_0"), this.upk.mcq("mj_1"), this.upk.mcq("mj_2"), this.upk.mcq("mj_3"), this.upk.mcq("mj_4"), this.upk.mcq("mj_5")]));
            this.njg.pck("mjwp", "#gyx", [false])
        }
    };
    this.aje = function() {
        var e = this.njg.ruv("jackpots"),
            f = this.njg.hie("jwp"),
            k = this.njg.hie("mjwp");
        for (var j = 0, d = this.ofw.mdw.ejn.length, g = null; j < d; j++) {
            g = this.ofw.mdw.ejn[j];
            e[j].phx(this.vrz.maw.fkh[d - 1][g.fkh]);
            e[j].jit((d > 2) ? this.vrz.maw.tgg : this.vrz.maw.display)
        }
        if (f) {
            f.phx(this.vrz.maw.cmv.fkh);
            f.jit(this.vrz.maw.cmv)
        }
        if (k) {
            k.phx(this.vrz.maw.vab.fkh);
            k.jit(this.vrz.maw.vab)
        }
    };
    this.zkn = function(k, i, e, l, m, f, d, g) {
        var j = new cdi();
        j.ard(k, null, this.context2D);
        j.parent = this;
        j.nue = f;
        j.man = d;
        j.xbf = g;
        j.mpg(l);
        j.hfb(m);
        j.wne(e);
        j.jit(i);
        return j
    };
    this.iqo = function(j, i, g, k, l, f, e) {
        var d = new anc();
        d.ard(j, null, this.context2D);
        d.parent = this;
        d.one = k;
        d.exf = l;
        d.eyx = f;
        d.lpl = e;
        d.wne(g);
        d.jit(i);
        return d
    };
    this.nnu = function(f) {
        if (this.aog() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.njg.pck(f[e].xpe, "#hfb", [f[e].value])
            }
            this.nht()
        }
    };
    this.upl = function(d) {
        if (this.aog() === true) {
            this.maw = {
                xpe: d.xpe,
                value: d.value,
                jzz: d.jzz
            }
        }
    };
    this.emt = function() {
        this.maw = null
    };
    this.lod = function() {
        return false
    };
    this.bgc = function() {
        return false
    };
    this.aog = function() {
        return (!this.azf && this.ofw.mdw.ejn.length > 0 && this.lod())
    };
    this.tmz = function() {
        return (this.maw != null)
    };
    this.ucp = function() {
        return (sut.ipy.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.aaw = function() {
        if (this.rng() && this.hxe()) {
            this.zat()
        }
    };
    this.hxe = function() {
        return false
    };
    this.rng = function() {
        if (this.azf) {
            return false
        }
        return (this.ofw.mdw.byt.length + this.ofw.mdw.beq.length > 0)
    };
    this.zat = function() {
        var g = null,
            e = this.ofw.mdw.byt.length,
            d = this.ofw.mdw.beq.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.ofw.mdw.byt.splice(f, 1)[0];
                g.adk = sut.ife.udy;
                this.qyu.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.ofw.mdw.beq.splice(f, 1)[0];
                g.adk = sut.ife.udy;
                this.qyu.push(g)
            }
            if (this.rya && !this.rya.npz()) {
                this.weu()
            }
        }
    };
    this.weu = function() {
        var d = null;
        if (this.qyu.length > 0) {
            d = this.qyu.shift();
            this.wlc([d])
        }
    };
    this.xbm = function() {
        if (sut.yxh.neq.length > 0) {
            sut.yxh.wlc(sut.yxh.neq)
        }
    };
    this.bbo = function() {
        this.qyu.length = 0
    };
    this.yfv = function() {
        this.neq.length = 0;
        if (this.yxv) {
            this.yxv.dqk()
        }
    };
    this.cal = function() {
        var f = null,
            d = this.ofw.mdw.neq.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.ofw.mdw.neq.splice(e, 1)[0];
                f.adk = sut.ife.udy;
                this.neq.push(f)
            }
            if (this.yxv) {
                this.yxv.jja(this.neq[0].Title, this.neq[0].Text, this.neq.length)
            }
        }
    };
    this.hea = function() {
        var d = false;
        if (this.rya && this.rya.npz()) {
            d = true
        }
        if (this.yxv && this.yxv.npz()) {
            d = true
        }
        if (this.ucp()) {
            d = true
        }
        if (this.iwg) {
            this.iwg.style.display = (d) ? "block" : "none"
        }
    };
    this.tkg = function() {
        this.jyt(false);
        this.gzz.rkn(false);
        this.gzz.knk.pck("info", "#yke");
        this.wlc([{
            adk: sut.ife.czk
        }])
    };
    this.gjd = function() {
        sut.yxh.rfw = true
    };
    this.fll = function() {
        this.zbf = new gpr().ard(this, sut.ipy.value6)
    };
    this.cda = function() {
        if (this.zbf) {
            this.zbf.connect(this.fzw, this.ccj, this.jon, this.szt, this.hni, true)
        }
    };
    this.typ = function() {
        if (sut.yxh.zbf) {
            sut.yxh.zbf.connect(sut.yxh.fzw, sut.yxh.ccj, sut.yxh.jon, sut.yxh.szt, sut.yxh.hni, false)
        }
    };
    this.ufo = function() {};
    this.zzl = function() {};
    this.svi = function(d) {
        if (!this.fhi() && !this.azf) {
            clearTimeout(this.irh);
            if (this.vbb()) {
                this.irh = setTimeout(this.ecu, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.irh = setTimeout(this.gjd, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.ecu = function() {
        sut.yxh.hep = true
    };
    this.vbb = function() {
        return sut.ipy.value36 || sut.ipy.value37
    }
}

function cko() {
    this.ard = function() {
        this.vsq("btn", this.nmb);
        this.vsq("audioon", this.nmb);
        this.vsq("panel_in", 0.25);
        this.vsq("panel_out", 0.25)
    }
}
cko.prototype = new ybt;

function eam() {
    this.xjt = {
        aii: 78,
        eoj: -1,
        value: "N",
        tgt: null
    };
    this.language = {
        aii: 76,
        eoj: -1,
        value: "L",
        tgt: null
    };
    this.yto = [this.audio, this.pgr, this.ygy, this.zqw, this.pqg, this.xjt, this.language]
}
eam.prototype = new qlc;

function ozu(g, c, f, e, i, a, d, b) {
    this.jze = g;
    this.ses = f;
    this.ueb = e;
    this.tfs = i;
    this.fzw = c;
    this.hni = a;
    this.oqj = d;
    this.ced = b;
    this.jma = 0;
    this.jzz = 0;
    this.win = 0;
    this.ctz = 0;
    this.ybc = 0;
    this.eqo = 0;
    this.nbh = 0;
    this.uul = [];
    this.pfj = false;
    this.jrx = -1;
    this.umo = -1;
    this.mrq = [];
    this.hpj = [];
    this.aql = [];
    this.tju = [];
    this.pqn = [];
    this.kbl = [];
    this.fab = [];
    this.ynv = [];
    this.fds = [];
    this.xjt = 0;
    this.dns = "";
    this.cxz = function(n) {
        if (n != null) {
            this.hel = 0;
            this.ujg = this.mjz(n);
            if (this.ujg == 0) {
                this.wcs = this.dvn(n);
                this.ife = this.mjz(n);
                this.jma = this.esm(n);
                this.jzz = this.esm(n);
                this.win = this.esm(n);
                this.ybc = this.esm(n);
                this.eqo = this.esm(n);
                this.nbh = this.esm(n);
                this.ctz = this.esm(n);
                this.pfj = (this.dvn(n) == 0) ? true : false;
                this.jrx = this.dvn(n);
                this.jrx = (this.jrx == 10) ? -1 : this.jrx;
                this.umo = this.dvn(n);
                this.umo = (this.umo == 10) ? -1 : this.umo;
                for (var m = 0; m < sut.iou.yay; m++) {
                    this.hpj[m] = this.dvn(n)
                }
                for (var m = 0; m < sut.iou.yay; m++) {
                    this.mrq[m] = this.dvn(n)
                }
                for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                    this.fab[m] = this.esm(n)
                }
                for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                    this.ynv[m] = this.esm(n)
                }
                for (var m = 0; m < sut.iou.yay; m++) {
                    this.aql[m] = this.esm(n)
                }
                for (var m = 0; m < sut.iou.yay; m++) {
                    this.tju[m] = this.esm(n)
                }
                for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                    this.pqn[m] = (this.dvn(n) == 0) ? true : false
                }
                var k = 0;
                var p = -1;
                for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                    k = this.dvn(n);
                    p = -1;
                    this.kbl[m] = [];
                    for (var l = 0; l < k; l++) {
                        p = this.dvn(n);
                        this.kbl[m][l] = (p == 99) ? -1 : p
                    }
                }
                k = this.dvn(n);
                p = -1;
                for (var l = 0; l < k; l++) {
                    p = this.dvn(n);
                    this.fds[l] = (p == 99) ? -1 : p
                }
                var o = this.dvn(n);
                for (var m = 0; m < o; m++) {
                    this.uul[m] = this.esm(n)
                }
                this.xjt = this.dvn(n);
                this.dns = this.qnw(n);
                if (sut.ipy.value21.e === true && sut.ipy.value21.s !== "") {
                    this.dns = ""
                }
                if (this.wcs == 0) {
                    this.qah("A/u250")
                } else {
                    this.ofw.ykn()
                }
            } else {
                if (this.ujg == 1) {
                    this.wcs = this.dvn(n);
                    this.ife = this.mjz(n);
                    this.jma = this.esm(n);
                    this.jzz = this.esm(n);
                    this.win = this.esm(n);
                    this.nbh = this.esm(n);
                    this.ctz = this.esm(n);
                    this.pfj = (this.dvn(n) == 0) ? true : false;
                    this.jrx = this.dvn(n);
                    this.jrx = (this.jrx == 10) ? -1 : this.jrx;
                    this.umo = this.dvn(n);
                    this.umo = (this.umo == 10) ? -1 : this.umo;
                    for (var m = 0; m < sut.iou.yay; m++) {
                        this.hpj[m] = this.dvn(n)
                    }
                    for (var m = 0; m < sut.iou.yay; m++) {
                        this.mrq[m] = this.dvn(n)
                    }
                    for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                        this.fab[m] = this.esm(n)
                    }
                    for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                        this.ynv[m] = this.esm(n)
                    }
                    for (var m = 0; m < sut.iou.yay; m++) {
                        this.aql[m] = this.esm(n)
                    }
                    for (var m = 0; m < sut.iou.yay; m++) {
                        this.tju[m] = this.esm(n)
                    }
                    for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                        this.pqn[m] = (this.dvn(n) == 0) ? true : false
                    }
                    var k = 0;
                    var p = -1;
                    for (var m = 0; m < sut.iou.yay * sut.iou.rxh; m++) {
                        k = this.dvn(n);
                        p = -1;
                        for (var l = 0; l < k; l++) {
                            p = this.dvn(n);
                            this.kbl[m][l] = (p == 99) ? -1 : p
                        }
                    }
                    k = this.dvn(n);
                    p = -1;
                    for (var l = 0; l < k; l++) {
                        p = this.dvn(n);
                        this.fds[l] = (p == 99) ? -1 : p
                    }
                    this.xjt = this.dvn(n);
                    if (this.ife == 0) {
                        if (this.wcs == sut.iou.gcn.mkt) {
                            this.ofw.ykn()
                        } else {
                            if (this.wcs == sut.iou.gcn.isw) {
                                this.ofw.qyr()
                            } else {
                                if (this.wcs == sut.iou.gcn.fde) {
                                    this.ofw.oyz()
                                } else {
                                    if (this.wcs == sut.iou.gcn.grb) {
                                        this.ofw.nlr()
                                    } else {
                                        if (this.wcs == sut.iou.gcn.vft) {
                                            this.ofw.lvk()
                                        } else {
                                            if (this.wcs == sut.iou.gcn.dij) {
                                                this.ofw.odk()
                                            } else {
                                                if (this.wcs == sut.iou.gcn.ztd) {
                                                    this.ofw.owu()
                                                } else {
                                                    if (this.wcs == sut.iou.gcn.sju) {
                                                        this.ofw.ylg()
                                                    } else {
                                                        if (this.wcs == sut.iou.gcn.owl) {
                                                            this.ofw.eja()
                                                        } else {
                                                            if (this.wcs == sut.iou.gcn.azy) {
                                                                this.ofw.eeg()
                                                            } else {
                                                                if (this.wcs == sut.iou.gcn.tyg) {
                                                                    this.ofw.gak()
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.ofw.acc(this.ife)
                    }
                } else {
                    if (this.ujg == 2) {} else {
                        if (this.ujg == 3) {
                            this.jzz = this.esm(n);
                            this.ofw.ucs()
                        } else {
                            if (this.ujg === 8) {
                                this.qah("8")
                            } else {
                                if (this.ujg == 9) {
                                    this.ofw.vkd.ldb = n.substring(this.hel)
                                } else {
                                    this.fun = this.mjz(n);
                                    this.ofw.xxr(n.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.icg = function(l, k, j, m) {
        this.qah("A/u281," + l + "," + k + "," + j + "," + m)
    };
    this.iag = function(k, j, l) {
        this.qah("A/u288," + k + "," + j + "," + l)
    };
    this.plq = function(k, j, l) {
        this.qah("A/u283," + k + "," + j + "," + l)
    };
    this.kcf = function(k, j, l) {
        this.qah("A/u284," + k + "," + j + "," + l)
    };
    this.split = function(k, j, l) {
        this.qah("A/u285," + k + "," + j + "," + l)
    };
    this.aeb = function(k, j, l) {
        this.qah("A/u286," + k + "," + j + "," + l)
    };
    this.zdc = function(j, k) {
        this.qah("A/u2810," + j + "," + k)
    };
    this.avn = function(j) {
        this.qah("A/u2811," + j)
    }
}
ozu.prototype = new wkq;

function lqt() {
    this.ard = function(a, b) {
        this.jze = b;
        this.vkd = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.ses = f;
        this.ueb = e;
        this.tfs = g;
        this.fzw = c;
        this.oqj = d;
        this.ced = b;
        this.mdw = new ozu(this.jze, c, f, e, g, a, d, b);
        this.mdw.ard(this)
    };
    this.icg = function(c, b, a) {
        this.mdw.icg(c, b, a, this.vkd.xjt)
    };
    this.iag = function(c, b) {
        var a = (b) ? 0 : 1;
        this.mdw.iag(c, a, this.vkd.xjt)
    };
    this.plq = function(b, a) {
        this.mdw.plq(b, a, this.vkd.xjt)
    };
    this.kcf = function(b, a) {
        this.mdw.kcf(b, a, this.vkd.xjt)
    };
    this.split = function(b, a) {
        this.mdw.split(b, a, this.vkd.xjt)
    };
    this.aqu = function(b, a) {
        this.mdw.aeb(b, a, this.vkd.xjt)
    };
    this.zdc = function(a) {
        this.mdw.zdc(a, this.vkd.xjt)
    };
    this.avn = function() {
        this.mdw.avn(this.vkd.xjt)
    };
    this.ykn = function() {
        for (var b = 0, a = this.mdw.uul.length; b < a; b++) {
            this.vkd.uul[b] = this.mdw.uul[b]
        }
        this.vkd.ybc = this.mdw.ybc;
        this.vkd.eqo = this.mdw.eqo;
        this.xux();
        this.vkd.dgn();
        this.vkd.wyf(this.mdw.wcs, this.mdw.jma, this.mdw.xjt)
    };
    this.qyr = function() {
        this.xux();
        this.vkd.trq();
        this.vkd.kwb(this.mdw.jma)
    };
    this.ylg = function() {
        this.xux();
        this.vkd.nmh();
        this.vkd.kwb(this.mdw.jma)
    };
    this.oyz = function() {
        this.xux();
        this.vkd.xuz();
        this.vkd.kwb(this.mdw.jma)
    };
    this.eja = function() {
        this.xux();
        this.vkd.jmo();
        this.vkd.kwb(this.mdw.jma)
    };
    this.nlr = function() {
        this.xux();
        this.vkd.qsy();
        this.vkd.kwb(this.mdw.jma)
    };
    this.lvk = function() {
        this.xux();
        this.vkd.bbv();
        this.vkd.kwb(this.mdw.jma)
    };
    this.odk = function() {
        this.xux();
        this.vkd.ehp();
        this.vkd.kwb(this.mdw.jma)
    };
    this.eeg = function() {
        this.xux();
        this.vkd.roy();
        this.vkd.kwb(this.mdw.jma)
    };
    this.gak = function() {
        this.vkd.state = this.mdw.wcs;
        this.vkd.jzz = this.mdw.jzz;
        this.vkd.nbh = this.mdw.nbh;
        this.vkd.win = this.mdw.win;
        this.vkd.ctz = this.mdw.ctz;
        this.vkd.hul()
    };
    this.xux = function() {
        this.vkd.state = this.mdw.wcs;
        this.vkd.jzz = this.mdw.jzz;
        this.vkd.nbh = this.mdw.nbh;
        this.vkd.win = this.mdw.win;
        this.vkd.ctz = this.mdw.ctz;
        this.vkd.pfj = this.mdw.pfj;
        this.vkd.jrx = this.mdw.jrx;
        this.vkd.umo = this.mdw.umo;
        for (var d = 0, a = this.mdw.mrq.length; d < a; d++) {
            this.vkd.mrq[d] = this.mdw.mrq[d]
        }
        for (var d = 0, a = this.mdw.hpj.length; d < a; d++) {
            this.vkd.hpj[d] = this.mdw.hpj[d]
        }
        for (var d = 0, a = this.mdw.fab.length; d < a; d++) {
            this.vkd.fab[d] = this.mdw.fab[d]
        }
        for (var d = 0, a = this.mdw.ynv.length; d < a; d++) {
            this.vkd.ynv[d] = this.mdw.ynv[d]
        }
        for (var d = 0, a = this.mdw.kbl.length; d < a; d++) {
            this.vkd.kbl[d] = [];
            for (var c = 0, b = this.mdw.kbl[d].length; c < b; c++) {
                this.vkd.kbl[d][c] = this.mdw.kbl[d][c]
            }
        }
        for (var d = 0, a = this.mdw.fds.length; d < a; d++) {
            this.vkd.fds[d] = this.mdw.fds[d]
        }
        for (var d = 0, a = this.mdw.pqn.length; d < a; d++) {
            this.vkd.pqn[d] = this.mdw.pqn[d]
        }
        for (var d = 0, a = this.mdw.aql.length; d < a; d++) {
            this.vkd.aql[d] = this.mdw.aql[d]
        }
        for (var d = 0, a = this.mdw.tju.length; d < a; d++) {
            this.vkd.tju[d] = this.mdw.tju[d]
        }
        this.vkd.dns = this.mdw.dns
    }
}
lqt.prototype = new gud;

function ibc() {
    this.hkk = new Image();
    this.gvv = 0;
    this.twg = 0;
    this.hzb = "rgb(220,200,0)";
    this.zka = "verdana";
    this.puv = "bold";
    this.wui = 10;
    this.asa = 15;
    this.mhg = 0;
    this.aod = 10;
    var a = 0;
    this.wne = function(b) {
        try {
            this.hzb = b.xwt;
            this.zka = b.font;
            this.puv = b.ifg
        } catch (c) {
            console.error(c)
        }
    };
    this.jit = function(b) {
        try {
            this.wui = b.xby;
            this.asa = b.gde;
            this.mhg = b.hck;
            this.aod = b.oqd;
            a = Math.round((this.height - 2 * this.aod) / 4)
        } catch (c) {
            console.error(c)
        }
    };
    this.osi = function(c, b) {
        this.gvv = c;
        this.twg = b
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.hkk != null) {
            b.drawImage(this.hkk, this.x, this.y)
        }
        sut.zdt.ffx(b, this.parent.language.ulo, this.hzb, this.x + this.mhg + 2, this.y + this.aod, this.width, a, this.zka, this.wui);
        sut.zdt.ffx(b, this.parent.gje(this.gvv), this.hzb, this.x + this.mhg + 2, this.y + this.aod + a, this.width, a, this.zka, this.asa, this.puv);
        sut.zdt.ffx(b, this.parent.language.ayb, this.hzb, this.x + this.mhg, this.y + this.aod + 2 * a, this.width, a, this.zka, this.wui);
        sut.zdt.ffx(b, this.parent.gje(this.twg), this.hzb, this.x + this.mhg, this.y + this.aod + 3 * a, this.width, a, this.zka, this.asa, this.puv);
        b.restore()
    }
}
ibc.prototype = new drd;

function vto() {
    var a = this;
    this.rcj = new mhd();
    this.kab = null;
    this.hzb = "white";
    this.zka = "verdana";
    this.puv = "bold";
    this.awy = 10;
    this.vfq = 6;
    this.dql = 0;
    this.ydd = 0;
    this.ard = function(c, i, f, b, g) {
        vto.prototype.ard.call(this, c, i, f, b, g);
        try {
            if (this.hkk != null) {
                this.ydd = Math.round(this.hkk.height / 2);
                this.rcj = new mhd(this.x + (this.width - this.hkk.width) / 2, this.y, this.hkk.width, this.ydd)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.wne = function(b) {
        try {
            this.zka = b.font;
            this.puv = b.ifg;
            this.kab = b.backgroundColor;
            this.hzb = b.xwt
        } catch (c) {
            console.error(c)
        }
    };
    this.jit = function(b) {
        try {
            this.awy = b.fontSize;
            this.vfq = b.zmi;
            if (this.hkk != null) {
                this.ydd = Math.round(this.hkk.height / 2);
                this.dql = this.ydd / 2 - this.vfq
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.phx = function(b) {
        vto.prototype.phx.call(this, b);
        try {
            this.rcj = new mhd(this.x + (this.width - this.hkk.width) / 2, this.y, this.hkk.width, this.ydd)
        } catch (c) {
            console.error(c)
        }
    };
    this.dux = function(b) {
        this.gyx(b);
        this.mny(b)
    };
    this.kbi = function() {
        a.ikq = false
    };
    this.ipk = function() {
        a.euq = false;
        if (a.npz()) {
            a.parent.nht(a.x, a.y, a.width, a.height)
        }
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var m = this.context2D,
            e = (this.ezw()) ? 1 : 0.5,
            d = null,
            b = this.awy,
            j = 0,
            l = this.height - this.ydd - 2,
            g = this.height - l + b,
            c = 1,
            k = null;
        m.save();
        if (!this.ezw()) {
            m.globalAlpha = e
        }
        sut.zdt.you(m, this.x + this.width / 2, this.y + this.ydd / 2, this.dql, this.kab, e);
        if (this.gye()) {
            m.drawImage(this.hkk, 0, this.ydd, this.hkk.width, this.ydd, this.x + (this.width - this.hkk.width) / 2, this.y, this.hkk.width, this.hkk.height / 2)
        } else {
            m.drawImage(this.hkk, 0, 0, this.hkk.width, this.ydd, this.x + (this.width - this.hkk.width) / 2, this.y, this.hkk.width, this.hkk.height / 2)
        }
        if (this.gjp != null) {
            d = this.gjp.split("|");
            m.font = this.puv + " " + b + "px " + this.zka;
            m.fillStyle = this.hzb;
            m.textAlign = "center";
            m.textBaseline = "bottom";
            for (var f = 0; f < d.length; f++) {
                k = m.measureText(d[f]);
                j = (k.width > j) ? k.width : j
            }
            if (b * d.length > l) {
                c = l / (b * d.length);
                b = Math.round(c * b) - 1;
                m.font = this.puv + " " + b + "px " + this.zka
            }
            if (j > this.width) {
                c = this.width / j;
                b = Math.round(c * b) - 1;
                m.font = this.puv + " " + b + "px " + this.zka
            }
            for (var f = 0; f < d.length; f++) {
                m.fillText(d[f], (this.x + Math.round(this.width / 2)), this.y + g);
                g += b + 1
            }
        }
        m.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    }
}
vto.prototype = new fso;

function nmn() {
    this.rzc = null;
    this.knk = null;
    this.wbc = false;
    this.hor = -1;
    this.blc = -1;
    this.dtg = null;
    this.rzm = null;
    this.vns = null;
    this.blv = null;
    this.fcg = null;
    this.zba = null;
    this.ard = function(a, c, b) {
        nmn.prototype.ard.call(this, a, c, b);
        this.fuz()
    };
    this.wne = function(a) {
        try {
            this.knk.dya("buttons", "#wne", [a.xln])
        } catch (b) {
            console.error(b)
        }
    };
    this.jit = function(a) {
        try {
            this.dtg = a.rhf;
            this.rzm = a.whf;
            this.vns = a.dsa;
            this.blv = a.tfu;
            this.fcg = a.gdk;
            this.zba = a.xof;
            this.knk.dya("buttons", "#jit", [a.xln])
        } catch (b) {
            console.error(b)
        }
    };
    this.ubg = function(n, m) {
        var b = n - this.x,
            a = m - this.y,
            k = this.knk.ruv("buttons"),
            o = this.parent.gzz.knk.ruv("buttons");
        for (var f = 0, g = k.length; f < g; f++) {
            var c = k[f];
            if (b >= c.rcj.x && b <= c.rcj.x + c.rcj.width && a >= c.rcj.y && a <= c.rcj.y + c.rcj.height && c.npz() === true && c.ezw() === true && c.oxl() === false) {
                c.llv(true, true, true);
                setTimeout(c.som, 200);
                for (var e = 0; e < g; e++) {
                    k[e].edr(true, true)
                }
                for (var e = 0, d = o.length; e < d; e++) {
                    o[e].edr(true, true)
                }
                return true
            }
        }
        return false
    };
    this.sik = function() {
        var d = this.knk.ruv("buttons");
        for (var c = 0, a = d.length; c < a; c++) {
            var b = d[c];
            if (b.gye() == true) {
                b.llv(false, true, false);
                return true
            }
        }
        return false
    };
    this.adq = function() {};
    this.vbi = function() {};
    this.fuz = function() {
        this.knk = new mbv();
        this.knk.ard();
        this.knk.wwh("buttons");
        this.knk.wwh("gbuttons");
        this.knk.wwh("ibuttons")
    };
    this.uvh = function(a) {
        this.knk.mpd("hit", this.anj(a.gdk.xxe, this.parent.upk.mcq("hit"), this.parent.vvn, this.parent.language.plq, a.xln), ["buttons", "gbuttons"]);
        this.knk.mpd("stand", this.anj(a.gdk.has, this.parent.upk.mcq("stand"), this.parent.yme, this.parent.language.kcf, a.xln), ["buttons", "gbuttons"]);
        this.knk.mpd("split", this.anj(a.gdk.nzr, this.parent.upk.mcq("split"), this.parent.wmb, this.parent.language.split, a.xln), ["buttons", "gbuttons"]);
        this.knk.mpd("double", this.anj(a.gdk.pvz, this.parent.upk.mcq("doubledown"), this.parent.ell, this.parent.language.aqu, a.xln), ["buttons", "gbuttons"]);
        this.knk.mpd("insyes", this.anj(a.xof.tuk, this.parent.upk.mcq("ins_yes"), this.parent.woo, this.parent.language.evu, a.xln), ["buttons", "ibuttons"]);
        this.knk.mpd("insno", this.anj(a.xof.ees, this.parent.upk.mcq("ins_no"), this.parent.bsj, this.parent.language.koo, a.xln), ["buttons", "ibuttons"])
    };
    this.anj = function(c, e, d, f, b) {
        var a = new vto();
        a.ard(c, this.context2D, null, e, f);
        a.parent = this;
        a.som = d;
        a.jit(b);
        return a
    };
    this.rkn = function(a) {
        this.wbc = a;
        this.hor = 1;
        this.ztf(this.blc);
        this.parent.nht()
    };
    this.sfg = function() {
        if (this.hor == 1) {
            this.rkn(this.wbc)
        }
    };
    this.ztf = function(a) {
        this.blc = a;
        if (a == sut.iou.gcn.fde) {
            this.mqc()
        } else {
            if (a == sut.iou.gcn.vft) {
                this.pho()
            } else {
                if (a == sut.iou.gcn.dij) {
                    this.yzq()
                } else {
                    if (a == sut.iou.gcn.ztd) {
                        this.kpx()
                    } else {
                        if (a == sut.iou.gcn.mtp) {
                            this.ern()
                        } else {
                            if (a == sut.iou.gcn.sju || (a == sut.iou.gcn.BJ && this.parent.blk.fxp())) {
                                this.yyi()
                            }
                        }
                    }
                }
            }
        }
    };
    this.mqc = function() {
        this.knk.dya("ibuttons", "#dux", [false]);
        this.knk.dya("gbuttons", "#gyx", [true]);
        this.knk.dya("gbuttons", "#mny", [false]);
        this.knk.pck("hit", "#mny", [true]);
        this.knk.pck("stand", "#mny", [true])
    };
    this.pho = function() {
        this.knk.dya("ibuttons", "#dux", [false]);
        this.knk.dya("gbuttons", "#gyx", [true]);
        this.knk.dya("gbuttons", "#mny", [false]);
        this.knk.pck("hit", "#mny", [true]);
        this.knk.pck("stand", "#mny", [true]);
        this.knk.pck("split", "#mny", [true])
    };
    this.yzq = function() {
        this.knk.dya("ibuttons", "#dux", [false]);
        this.knk.dya("gbuttons", "#gyx", [true]);
        this.knk.dya("gbuttons", "#mny", [false]);
        this.knk.pck("hit", "#mny", [true]);
        this.knk.pck("stand", "#mny", [true]);
        this.knk.pck("double", "#mny", [true])
    };
    this.kpx = function() {
        this.knk.dya("ibuttons", "#dux", [false]);
        this.knk.dya("gbuttons", "#gyx", [true]);
        this.knk.dya("gbuttons", "#mny", [false]);
        this.knk.pck("hit", "#mny", [true]);
        this.knk.pck("stand", "#mny", [true]);
        this.knk.pck("split", "#mny", [true]);
        this.knk.pck("double", "#mny", [true])
    };
    this.ern = function() {
        this.knk.dya("ibuttons", "#dux", [false]);
        this.knk.dya("gbuttons", "#gyx", [true]);
        this.knk.dya("gbuttons", "#mny", [false]);
        this.knk.pck("stand", "#mny", [true]);
        this.knk.pck("split", "#mny", [true])
    };
    this.yyi = function() {
        this.knk.dya("gbuttons", "#dux", [false]);
        this.knk.pck("insyes", "#dux", [true]);
        this.knk.pck("insno", "#dux", [true])
    };
    this.nht = function(c, g, e, f) {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var b = (c != null && g != null && e != null && f != null),
            d = this.context2D,
            a = this.parent.vrz.hox.fkh;
        d.save();
        if (b) {
            d.beginPath();
            d.rect(c, g, e, f);
            d.closePath();
            d.clip()
        }
        d.clearRect(0, 0, this.width, this.height);
        d.drawImage(this.rzc, this.x - a.x, this.y - a.y, this.width, this.height, 0, 0, this.width, this.height);
        this.knk.dya("buttons", "#nht");
        d.restore();
        if (this.csj && this.veg) {
            if (b) {
                this.csj.drawImage(this.veg, c, g, e, f, this.x + c, this.y + g, e, f)
            } else {
                this.csj.drawImage(this.veg, this.x, this.y)
            }
        }
    }
}
nmn.prototype = new drd;

function xxx() {
    var q = this;
    this.hkk = null;
    this.wpo = new mhd();
    this.qfe = 65;
    this.sbf = 90;
    var e = null;
    var n = null;
    var p = new mhd();
    var b = new mhd();
    var c = 0;
    var a = 0;
    var f = (sut.zdt.elu == sut.qfs.xqq && sut.zdt.yyc) ? false : true;
    var d = 0;
    var k = (f) ? 12 : 8;
    var j = (f) ? 6 : 4;
    var o = k;
    var l = 1;
    var m = 0;
    var g = 0;
    var i = 25;
    this.ard = function(r, t, s) {
        xxx.prototype.ard.call(this, r, t, s);
        e = document.createElement("canvas");
        n = e.getContext("2d")
    };
    this.wne = function(r) {};
    this.jit = function(r) {
        this.wpo = r.oou;
        this.qfe = r.qgg;
        this.sbf = r.lqz;
        e.width = Math.round(this.wpo.width);
        e.height = Math.round(this.wpo.height)
    };
    this.start = function(r) {
        o = (this.parent.tvk === true) ? j : k;
        d = o;
        m = 0;
        this.gyx(true);
        p.x = this.wpo.x;
        p.y = this.wpo.y;
        p.width = this.wpo.width;
        p.height = this.wpo.height;
        c = Math.floor(((r.x - this.x) - p.x) / o) + 1;
        a = Math.floor(((r.y - this.y) - p.y) / o) + 1;
        this.aqm()
    };
    this.stop = function() {
        if (f) {
            het(g)
        } else {
            clearTimeout(g)
        }
    };
    this.aqm = function() {
        var r = i,
            s = 0;
        if (!f) {
            if (d == o) {
                vcb = new Date().getTime()
            } else {
                s = new Date().getTime();
                r = i + ((o - d) * i - (s - vcb))
            }
        } else {
            if ((++m % l) != 0) {
                g = zxh(q.aqm);
                return
            }
        }
        if (d > 0) {
            d--;
            b = new mhd(p.x, p.y, p.width, p.height);
            p.x += c;
            p.y += a;
            q.dep(o - d);
            q.parent.ykp([p, b]);
            if (f) {
                g = zxh(q.aqm)
            } else {
                g = setTimeout(q.aqm, r)
            }
        } else {
            q.gyx(false);
            q.stop();
            q.parent.arl()
        }
    };
    this.dep = function(s) {
        var r = n;
        r.save();
        r.clearRect(0, 0, p.width, p.height);
        r.translate(p.width / 2, p.height / 2);
        r.rotate((6 * Math.PI / 10) + (Math.PI / (o * 2.5) * s));
        r.translate(-this.qfe / 2, -this.sbf / 2);
        r.drawImage(this.hkk, 0, 0, this.qfe, this.sbf);
        r.restore()
    };
    this.nht = function() {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var r = this.context2D;
        r.save();
        r.clearRect(0, 0, this.width, this.height);
        r.drawImage(e, p.x, p.y);
        r.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    }
}
xxx.prototype = new drd;

function bmd() {
    var o = this;
    this.hkk = null;
    this.wpo = new mhd();
    this.qfe = 65;
    this.sbf = 90;
    var m = new mhd();
    var b = 0;
    var a = 0;
    var n = 0;
    var d = (sut.zdt.elu == sut.qfs.xqq && sut.zdt.yyc) ? false : true;
    var c = 0;
    var i = (d) ? 12 : 8;
    var g = (d) ? 6 : 4;
    var l = i;
    var j = 1;
    var k = 0;
    var e = 0;
    var f = 25;
    this.wne = function(p) {};
    this.jit = function(p) {
        this.wpo = p.oou;
        this.qfe = p.qgg;
        this.sbf = p.lqz
    };
    this.gyx = function(p, q) {
        this.uji = (p && this.width > 0 && this.height > 0);
        this.parent.bje.style.zIndex = (p === true) ? 1 : -1;
        if (q && q === true) {
            this.parent.nht(this.x, this.y, this.width, this.height)
        }
    };
    this.start = function(p) {
        l = (this.parent.tvk === true) ? g : i;
        c = l;
        k = 0;
        this.gyx(true);
        m.x = this.wpo.x;
        m.y = this.wpo.y;
        m.width = this.wpo.width;
        m.height = this.wpo.height;
        b = Math.floor(((p.x - this.x) - m.x) / l) + 1;
        a = Math.floor(((p.y - this.y) - m.y) / l) + 1;
        this.aqm()
    };
    this.stop = function() {
        if (d) {
            het(e)
        } else {
            clearTimeout(e)
        }
    };
    this.aqm = function() {
        var p = f,
            q = 0;
        if (!d) {
            if (c == l) {
                vcb = new Date().getTime()
            } else {
                q = new Date().getTime();
                p = f + ((l - c) * f - (q - vcb))
            }
        } else {
            if ((++k % j) != 0) {
                e = zxh(o.aqm);
                return
            }
        }
        if (c > 0) {
            c--;
            m.x += b;
            m.y += a;
            o.dep(l - c);
            o.parent.ztz();
            if (d) {
                e = zxh(o.aqm)
            } else {
                e = setTimeout(o.aqm, p)
            }
        } else {
            o.gyx(false);
            o.stop();
            o.parent.arl()
        }
    };
    this.dep = function(p) {
        n = p
    };
    this.nht = function() {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var p = this.context2D;
        p.save();
        p.translate(m.x + this.qfe, m.y + this.sbf);
        p.rotate((6 * Math.PI / 10) + (Math.PI / (l * 2.5) * n));
        p.translate(-this.qfe / 2, -this.sbf / 2);
        p.drawImage(this.hkk, 0, 0, this.qfe, this.sbf);
        p.restore()
    }
}
bmd.prototype = new drd;

function kgv() {
    var l = this;
    this.wpo = new mhd();
    this.ols = new mhd();
    this.dri = 40;
    this.xte = -3;
    this.bze = null;
    this.hkh = null;
    var p = new mhd();
    var m = null;
    var r = null;
    var c = [];
    var k = 0;
    var a = 0;
    var b = (sut.zdt.elu == sut.qfs.xqq && sut.zdt.yyc) ? false : true;
    var f = (b) ? 25 : 16;
    var q = (b) ? 12 : 8;
    var g = f;
    var i = 0;
    var j = 0;
    var e = 0;
    var s = 25;
    var d = [];
    var o = null;
    var n = false;
    this.ard = function(t, v, u) {
        kgv.prototype.ard.call(this, t, v, u);
        m = document.createElement("canvas");
        r = m.getContext("2d")
    };
    this.wne = function(t) {
        try {
            this.bze = t.svo
        } catch (u) {
            console.error(u)
        }
    };
    this.jit = function(t) {
        try {
            this.wpo = t.oou;
            this.ols = new mhd(0, 0, t.zcj, t.zcj);
            this.dri = t.zcj;
            this.xte = t.sum;
            this.hkh = t.svo;
            m.width = Math.round(this.wpo.width);
            m.height = Math.round(this.wpo.height)
        } catch (u) {
            console.error(u)
        }
    };
    this.ksa = function(A, B, v, u, C, w, z) {
        var t = new qrq();
        t.ard(this.ols, r);
        t.hkk = B;
        t.value = A;
        t.x = u;
        t.y = C;
        t.wne(w);
        t.jit(z);
        t.est(v);
        t.gyx(true);
        return t
    };
    this.mtr = function() {
        var t = o.rect.x,
            z = o.rect.y,
            w = o.value,
            v = 0;
        azk = Math.abs(w);
        this.gyx(true);
        g = (this.parent.tvk === true) ? q : f;
        i = g;
        if (w > 0) {
            p.x = this.wpo.x;
            p.y = this.wpo.y;
            p.width = this.wpo.width;
            p.height = this.wpo.height;
            k = ((t - p.x) / g);
            a = Math.floor((z - p.y) / (g + 1));
            p.x -= (p.width - this.dri);
            p.y -= (p.height - this.dri)
        } else {
            p.x = this.wpo.x;
            p.y = this.wpo.y;
            p.width = this.wpo.width;
            p.height = this.wpo.height;
            k = ((p.x - t) / g);
            a = Math.floor((p.y - z) / (g + 1));
            p.x = t - (p.width - this.dri);
            p.y = z - (p.height - this.dri)
        }
        c = [];
        r.clearRect(0, 0, m.width, m.height);
        while (azk > 0) {
            for (var u = this.parent.uul.length - 1; u >= 0; u--) {
                if (azk >= this.parent.uul[u]) {
                    c[v] = this.ksa(this.parent.gje(this.parent.uul[u]), this.parent.upk.mcq("chip" + u), this.parent.uhu[u], 0, p.height - this.dri + (v * this.xte), this.bze, this.hkh);
                    azk -= this.parent.uul[u];
                    v++;
                    break
                }
            }
        }
        if (w < 0) {
            o.som(o.mby);
            if (n === false) {
                i = 0
            }
        } else {
            this.parent.nht()
        }
        this.aqm()
    };
    this.start = function(u) {
        d = [];
        for (var v = 0, t = u.length; v < t; v++) {
            d[v] = u[v]
        }
        o = d.shift();
        this.mtr()
    };
    this.stop = function() {
        if (b) {
            het(e)
        } else {
            clearTimeout(e)
        }
    };
    this.aqm = function() {
        var v = s,
            w = new Date().getTime(),
            x = new mhd(),
            u = new mhd();
        if (!b) {
            if (i == g) {
                j = new Date().getTime()
            } else {
                w = new Date().getTime();
                v = s + ((g - i) * s - (w - j))
            }
        }
        if (i > 1) {
            i--;
            x = new mhd(p.x + l.x, p.y + l.y, p.width, p.height);
            p.x = Math.round(p.x + k);
            p.y = Math.round(p.y + a);
            u = new mhd(p.x + l.x, p.y + l.y, p.width, p.height);
            l.parent.ykp([u, x]);
            if (b) {
                e = zxh(l.aqm)
            } else {
                e = setTimeout(l.aqm, v)
            }
        } else {
            l.gyx(false);
            l.stop();
            if (o.value > 0) {
                o.som(o.mby);
                l.parent.upk.vjc("jeton")
            } else {
                l.parent.nht()
            }
            if (d != null && d.length > 0) {
                o = d.shift();
                e = setTimeout(l.zfn, 500)
            } else {
                l.parent.yag()
            }
        }
    };
    this.zfn = function() {
        l.mtr()
    };
    this.nht = function() {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var t = this.context2D;
        t.save();
        t.clearRect(0, 0, this.width, this.height);
        this.ist();
        t.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    };
    this.ist = function() {
        var t = r;
        t.save();
        for (var u in c) {
            c[u].nht()
        }
        t.restore();
        this.context2D.drawImage(m, p.x, p.y)
    }
}
kgv.prototype = new drd;

function qrq() {
    this.hkk = new Image();
    this.value = 0;
    this.wbc = true;
    this.zka = "verdana";
    this.puv = "bold";
    this.gxq = "rgb(20,0,0)";
    this.awy = 11;
    this.vfq = 10;
    this.wne = function(a) {
        try {
            this.zka = a.font;
            this.puv = a.ifg;
            this.gxq = a.color
        } catch (b) {
            console.error(b)
        }
    };
    this.jit = function(a) {
        try {
            this.awy = a.fontSize;
            this.vfq = a.zmi
        } catch (b) {
            console.error(b)
        }
    };
    this.xsy = function(a, b) {
        this.value = a;
        if (b && b === true && this.context2D != null) {
            this.gyx(true, true)
        }
    };
    this.est = function(a) {
        this.gxq = a
    };
    this.cct = function() {
        return this.gxq
    };
    this.mny = function(a) {
        this.wbc = a
    };
    this.ezw = function() {
        return this.wbc
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (!this.wbc) {
            a.globalAlpha = 0.6
        } else {
            a.globalAlpha = 1
        }
        if (this.hkk != null) {
            a.drawImage(this.hkk, this.x, this.y, this.width, this.height)
        }
        sut.zdt.ffx(a, this.value, this.gxq, this.x + this.vfq, this.y + this.vfq, this.width - 2 * this.vfq, this.height - 2 * this.vfq, this.zka, this.awy, this.puv);
        a.restore()
    }
}
qrq.prototype = new drd;

function mfg() {
    this.bhw = null;
    this.zoc = null;
    this.rzc = null;
    this.knk = null;
    this.wbc = false;
    this.hor = -1;
    this.ehj = 0;
    this.ijd = true;
    this.xwk = "rgb(30,30,30)";
    this.uxf = new mhd();
    this.ard = function(a, c, b) {
        mfg.prototype.ard.call(this, a, c, b);
        this.fuz()
    };
    this.bhp = function(a) {
        try {
            this.uxf = a.xrz;
            this.uvh(a);
            this.xnt(a);
            this.mrf(a);
            this.xqv(a)
        } catch (b) {
            console.error(b)
        }
    };
    this.wne = function(f) {
        try {
            var k = this.knk.hie("info"),
                b = this.knk.ruv("displays"),
                g = this.knk.ruv("buttons"),
                c = this.knk.ruv("chips");
            this.xwk = f.yzf;
            if (k) {
                k.wne(f.pwx)
            }
            for (var d = 0, a = g.length; d < a; d++) {
                g[d].wne(f.tgv)
            }
            for (var d = 0, a = b.length; d < a; d++) {
                b[d].wne(f.display)
            }
            for (var d = 0, a = c.length; d < a; d++) {
                c[d].wne(f.svo);
                c[d].est(this.parent.uhu[d + 1])
            }
        } catch (j) {
            console.error(j)
        }
    };
    this.jit = function(f) {
        try {
            var c = {},
                b = this.knk.hie("info"),
                m = this.knk.hie("creditd"),
                l = this.knk.hie("betd"),
                k = this.knk.ruv("buttons"),
                a = this.knk.ruv("chips");
            if (sut.ipy.value57 === sut.ui.syh) {
                c = f.rin
            } else {
                c = f.fbw
            }
            this.uxf = f.xrz;
            if (m) {
                m.jit(f.display);
                m.phx(f.hhf)
            }
            if (l) {
                l.jit(f.display);
                l.phx(f.ztw)
            }
            if (b) {
                b.jit(f.pwx);
                b.phx(f.pwx.fkh)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].jit(f.xln)
            }
            for (var d = 0, g = a.length; d < g; d++) {
                a[d].jit(f.svo);
                a[d].phx(f.bub[d])
            }
            this.knk.pck("deal", "#phx", [c.sps]);
            this.knk.pck("clear", "#phx", [c.xsr]);
            this.knk.pck("double", "#phx", [c.pvz]);
            this.knk.pck("help", "#phx", [c.pdj]);
            this.knk.pck("exit", "#phx", [c.ajv])
        } catch (j) {
            console.error(j)
        }
    };
    this.ubg = function(q, o) {
        var n = this.knk.ruv("buttons"),
            a = this.knk.ruv("chips"),
            m = this.parent.njg.hie("buttonpanel"),
            p = this.knk.hie("deal"),
            c = this.knk.hie("credid"),
            k = q - this.x,
            f = o - this.y;
        for (var g = 0, l = a.length; g < l; g++) {
            var e = a[g];
            if (k >= e.x && k <= e.x + e.width && f >= e.y && f <= e.y + e.height && e.npz() && e.ezw()) {
                this.parent.vjv = g;
                this.parent.nht();
                return true
            }
        }
        for (var g = 0, l = n.length; g < l; g++) {
            var b = n[g];
            if (k >= b.rcj.x && k <= b.rcj.x + b.rcj.width && f >= b.rcj.y && f <= b.rcj.y + b.rcj.height && b.npz() && b.ezw() && !b.oxl()) {
                b.llv(true, true, false);
                for (var d = 0; d < l; d++) {
                    n[d].edr(true, true)
                }
                b.som();
                if (m != null && m.npz()) {
                    m.knk.dya("buttons", "#edr", [true, true])
                }
                return true
            }
        }
        if (p && p.ezw() && !p.oxl()) {
            if (c && k >= c.x && k <= c.x + c.width && f >= c.y && f <= c.y + c.height) {
                this.parent.fxv();
                return true
            }
        }
        return false
    };
    this.sik = function() {
        var d = this.knk.ruv("buttons");
        for (var c = 0, a = d.length; c < a; c++) {
            var b = d[c];
            if (b.gye() == true) {
                b.llv(false, true);
                return true
            }
        }
        return false
    };
    this.adq = function() {};
    this.vbi = function() {};
    this.fuz = function() {
        this.knk = new mbv();
        this.knk.ard();
        this.knk.wwh("displays");
        this.knk.wwh("buttons");
        this.knk.wwh("chips")
    };
    this.mrf = function(c) {
        for (var b = 1, a = this.parent.uul.length; b < a; b++) {
            this.knk.mpd("chip" + (b - 1), this.ksa(c.bub[b - 1], this.parent.gje(this.parent.uul[b]), this.parent.uhu[b], this.parent.upk.mcq("chip" + b), c.svo), ["chips"])
        }
    };
    this.xnt = function(a) {
        this.knk.mpd("creditd", this.yfj(a.hhf, (this.parent.fhi()) ? this.parent.language.xti : this.parent.language.jzz, this.parent.mfm(this.parent.jzz), a.display), ["displays"]);
        this.knk.mpd("betd", this.yfj(a.ztw, this.parent.language.nbh, this.parent.mfm(this.parent.nbh), a.display), ["displays"])
    };
    this.uvh = function(b) {
        var a = {};
        if (sut.ipy.value57 === sut.ui.syh) {
            a = b.rin
        } else {
            a = b.fbw
        }
        this.knk.mpd("deal", this.anj(a.sps, this.parent.upk.mcq("btn_de"), this.parent.nui, this.parent.language.icg, b.xln), ["buttons"]);
        this.knk.mpd("clear", this.anj(a.xsr, this.parent.upk.mcq("btn_c"), this.parent.zez, this.parent.language.qqf, b.xln), ["buttons"]);
        this.knk.mpd("double", this.anj(a.pvz, this.parent.upk.mcq("btn_db"), this.parent.fkw, this.parent.language.vxa, b.xln), ["buttons"]);
        this.knk.mpd("help", this.anj(a.pdj, this.parent.upk.mcq("btn_r"), this.parent.old, this.parent.language.lrl, b.xln), ["buttons"]);
        if (sut.ipy.value57 !== sut.ui.syh) {
            this.knk.mpd("exit", this.anj(a.ajv, this.parent.upk.mcq("btn_e"), this.parent.nst, (sut.ipy.value50.g === true) ? this.parent.language.uxb : this.parent.language.jyi, b.xln), ["buttons"])
        }
    };
    this.xqv = function(a) {
        var b = new gqu();
        b.ard(a.pwx.fkh, this.context2D);
        b.parent = this;
        b.jit(a.pwx);
        this.knk.mpd("info", b)
    };
    this.ksa = function(d, e, b, f, c) {
        var a = new qrq();
        a.ard(d, this.context2D);
        a.hkk = f;
        a.value = e;
        a.color = b;
        a.jit(c);
        return a
    };
    this.yfj = function(b, e, d, a) {
        var c = new ccz();
        c.ard(b, this.context2D, null, e, d);
        c.parent = this;
        c.jit(a);
        return c
    };
    this.anj = function(c, e, d, f, b) {
        var a = new vto();
        a.ard(c, this.context2D, null, e, f);
        a.parent = this;
        a.som = d;
        a.jit(b);
        return a
    };
    this.rkn = function(a) {
        this.wbc = a;
        this.hor = 1;
        this.knk.dya("buttons", "#mny", [a]);
        this.parent.nht()
    };
    this.rgf = function(a) {
        this.ijd = a;
        this.knk.dya("chips", "#mny", [a]);
        this.knk.dya("chips", "#gyx", [a]);
        this.parent.nht()
    };
    this.yhj = function(a) {
        this.wbc = a;
        this.hor = 2;
        this.knk.dya("buttons", "#mny", [false]);
        this.parent.nht()
    };
    this.sfg = function() {
        if (this.hor == 1) {
            this.rkn(this.wbc)
        } else {
            if (this.hor == 2) {
                this.yhj(this.wbc)
            }
        }
        this.parent.nht()
    };
    this.yee = function(b, a) {
        this.knk.pck("info", "#kqp", [a]);
        this.knk.pck("info", "#kxz", [b, a])
    };
    this.nht = function(l, j, m, e) {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            k = (c === true) ? new mhd(l, j, m, e) : new mhd(this.x, this.y, this.width, this.height),
            n = this.context2D,
            a = this.knk.txp(),
            b = this.knk.ruv("chips");
        n.save();
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        n.clearRect(0, 0, this.width, this.height);
        n.drawImage(this.rzc, this.rzc.width - this.width, this.rzc.height - this.height, this.width, this.height, 0, 0, this.width, this.height);
        if (this.ijd) {
            if (this.bhw) {
                n.drawImage(this.bhw, this.uxf.x, this.uxf.y)
            }
            for (var d = 0, f = b.length; d < f; d++) {
                if (d == this.parent.vjv && b[d].ezw()) {
                    n.drawImage(this.zoc, b[d].x - (this.zoc.width - b[d].width) / 2, b[d].y - (this.zoc.height - b[d].height) / 2)
                } else {
                    var g = b[d].width / 2;
                    sut.zdt.you(n, b[d].x + g + 1, b[d].y + g + 1, g, this.xwk, 1)
                }
            }
        }
        for (var d = 0, f = a.length; d < f; d++) {
            a[d].nht()
        }
        if (this.parent.hvv === true) {
            this.parent.sai(n, k)
        }
        n.restore();
        if (this.csj && this.veg) {
            if (c) {
                this.csj.drawImage(this.veg, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.csj.drawImage(this.veg, this.x, this.y)
            }
        }
    }
}
mfg.prototype = new drd;

function fel() {
    var a = this;
    this.knk = null;
    this.ztc = 0;
    this.vuv = [];
    this.kab = "rgb(0,0,0)";
    this.rnx = 0.7;
    this.erz = "rgb(190,140,0)";
    this.ckp = "rgb(200,130,50)";
    this.rmx = 3;
    this.npb = 5;
    this.ard = function(b, d, c) {
        fel.prototype.ard.call(this, b, d, c);
        this.uji = false;
        this.ztc = 0;
        this.vuv = [];
        this.fuz()
    };
    this.jit = function(f) {
        try {
            var d = this.knk.ruv("buttons"),
                c = 0,
                b = d.length;
            this.rmx = f.gld;
            this.npb = f.pmt;
            for (; c < b; c++) {
                d[c].jit(f.xln)
            }
            this.knk.pck("exit", "#phx", [f.ajv]);
            this.knk.pck("rules", "#phx", [f.ekf]);
            this.knk.pck("operation", "#phx", [f.jas])
        } catch (g) {
            console.error(g)
        }
    };
    this.wne = function(d) {
        try {
            var f = this.knk.ruv("buttons");
            this.kab = d.backgroundColor;
            this.rnx = d.swd;
            this.erz = d.borderColor;
            this.ckp = d.eqh;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].wne(d.tgv)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.ubg = function(l, k) {
        var g = this.knk.ruv("buttons"),
            b = l - this.x,
            m = k - this.y;
        for (var e = 0, f = g.length; e < f; e++) {
            var c = g[e];
            if (b >= c.x && b <= c.x + c.width && m >= c.y && m <= c.y + c.height && c.npz() == true) {
                if (c.ezw() && !c.oxl()) {
                    for (var d = 0; d < f; d++) {
                        g[d].edr(true);
                        g[d].llv((g[d] == c), false, false)
                    }
                    this.nht();
                    this.parent.upk.iie("btn");
                    this.parent.upk.vjc("btn");
                    c.som();
                    return true
                }
            }
        }
        return false
    };
    this.sik = function() {
        var e = this.knk.ruv("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.gye() == true) {
                return true
            }
        }
        return false
    };
    this.adq = function() {};
    this.vbi = function() {};
    this.nym = function(b, c) {
        if (c && c === true) {
            this.vuv.unshift(b);
            this.ztc++
        } else {
            this.vuv.push(b)
        }
    };
    this.gtb = function(b) {
        if (b && b === true) {
            this.vuv.shift();
            this.ztc--
        } else {
            this.vuv.pop()
        }
    };
    this.fuz = function() {
        this.knk = new mbv();
        this.knk.ard();
        this.knk.wwh("buttons")
    };
    this.uvh = function(d, c, b) {
        this.knk.mpd("exit", this.anj(d.ajv, this.parent.language.kxy, b, this.rph, d.xln, c.xln), ["buttons"]);
        this.knk.mpd("rules", this.anj(d.ekf, this.parent.language.wxr, b, this.bhs, d.xln, c.xln), ["buttons"]);
        this.knk.mpd("operation", this.anj(d.jas, this.parent.language.jwl, b, this.ecz, d.xln, c.xln), ["buttons"])
    };
    this.anj = function(f, i, b, g, e, d) {
        var c = new pnk();
        c.ard(f, this.context2D);
        c.parent = this;
        c.som = g;
        c.wne(d);
        c.jit(e);
        return c
    };
    this.nht = function(k, g, l, d) {
        if (!this.npz() || !this.parent.xwm()) {
            return
        }
        var m = this.context2D,
            b = (k != null && g != null && l != null && d != null),
            j = null,
            f = this.knk.ruv("buttons");
        m.save();
        if (b) {
            m.beginPath();
            m.rect(k, g, l, d);
            m.closePath();
            m.clip()
        }
        m.clearRect(0, 0, this.width, this.height);
        if (this.kab != null) {
            j = m.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
            j.addColorStop(1, this.erz);
            j.addColorStop(0, this.ckp);
            sut.zdt.qot(m, 0, 0, this.width, this.height, this.npb, this.kab, this.rnx, j, this.rmx, 1)
        }
        if (this.ztc < this.vuv.length) {
            this.vuv[this.ztc].nht()
        }
        for (var c = 0, e = f.length; c < e; c++) {
            f[c].nht()
        }
        m.restore();
        if (this.csj && this.veg) {
            if (b) {
                this.csj.drawImage(this.veg, k, g, l, d, this.x + k, this.y + g, l, d)
            } else {
                this.csj.drawImage(this.veg, this.x, this.y)
            }
        }
    };
    this.pph = function(b, c) {
        this.knk.dya("buttons", "#gyx", [b]);
        if (c && c === true) {
            this.nht()
        }
    };
    this.rkn = function(b) {
        this.knk.dya("buttons", "#mny", [b])
    };
    this.ehr = function(b) {
        if (b > this.vuv.length - 1) {
            b = 0
        }
        this.ztc = b;
        if (this.ztc === 0) {
            this.knk.pck("rules", "#llv", [true, false, false])
        } else {
            if (this.ztc === 0) {
                this.knk.pck("operation", "#llv", [true, false, false])
            }
        }
        this.knk.pck("exit", "#llv", [false, false, false])
    };
    this.rph = function() {
        a.parent.vog()
    };
    this.bhs = function() {
        a.ztc = 0;
        a.parent.nht()
    };
    this.ecz = function() {
        a.ztc = 1;
        a.parent.nht()
    }
}
fel.prototype = new drd;

function wkd() {
    this.hkk = new Image();
    this.mcx = null;
    this.ghe = [];
    this.bkz = "verdana";
    this.zka = "verdana";
    this.puv = "bold";
    this.ysf = "black";
    this.hzb = "rgb(255,186,55)";
    this.cir = "verdana";
    this.vci = "bold italic";
    this.lqo = "rgb(255,220,150)";
    this.xlh = null;
    this.jar = [];
    this.esi = 22;
    this.awy = 12;
    this.whm = 1;
    this.bhz = 10;
    this.mrj = new mhd(0, 410, 700, 20);
    this.ttb = [];
    this.nfm = 0;
    this.ard = function(b, d, c, a) {
        this.hkk = a;
        this.ghe = [];
        this.jar = [];
        wkd.prototype.ard.call(this, b, d, c)
    };
    this.jit = function(a) {
        try {
            this.esi = a.roi;
            this.awy = a.fontSize;
            this.whm = a.lineWidth;
            this.bhz = a.ibi;
            this.xlh = a.aps;
            this.jar = a.qug;
            this.mrj = a.hsx
        } catch (b) {
            console.error(b)
        }
    };
    this.wne = function(a) {
        try {
            this.zka = a.font;
            this.bkz = a.dbj;
            this.hzb = a.xwt;
            this.ysf = a.eml;
            this.cir = a.ylb;
            this.vci = a.ild;
            this.lqo = a.xeb
        } catch (b) {
            console.error(b)
        }
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.hzb;
        if (this.ysf) {
            a.strokeStyle = this.ysf
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.whm;
        a.font = this.puv + " " + this.awy + "px " + this.zka;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        if (this.hkk) {
            a.drawImage(this.hkk, 0, 0)
        }
        if (this.mcx && this.xlh) {
            sut.zdt.ffx(a, this.parent.aal(this.mcx.toUpperCase), this.hzb, this.xlh.x, this.xlh.y, this.xlh.width, this.xlh.height, this.bkz, this.esi, this.puv)
        }
        for (var b = 0; b < this.ghe.length; b++) {
            this.gaf(this.ghe[b], this.jar[b], this.awy, this.zka)
        }
        sut.zdt.ffx(a, this.parent.aal(this.parent.language.ngg), this.lqo, this.mrj.x, this.mrj.y, this.mrj.width, this.mrj.height, this.cir, this.bhz, this.vci);
        a.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    };
    this.nhh = function(j, f, g, c, e) {
        var a = this.context2D,
            b = 0;
        this.ttb = [];
        a.save();
        a.font = this.puv + " " + g + "px " + c;
        this.ksd(a, g, j, f, c);
        for (var d = 0; d < this.ttb.length; d++) {
            b = (f.height + this.nfm) / (this.ttb.length + 1) * (d + 1);
            a.fillText(this.ttb[d], (f.x), f.y + b);
            if (this.ysf != null && a.lineWidth >= 1) {
                a.strokeText(this.ttb[d], (f.x), f.y + b)
            }
        }
        a.restore()
    };
    this.gaf = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.ttb = [];
        a.save();
        a.font = this.puv + " " + f + "px " + c;
        this.ksd(a, f, g, e, c);
        for (var d = 0; d < this.ttb.length; d++) {
            b = (e.height + this.nfm) / (this.ttb.length + 1) * (d + 1);
            a.fillText(this.ttb[d], (e.x + e.width / 2), e.y + b);
            if (this.ysf != null && a.lineWidth >= 1) {
                a.strokeText(this.ttb[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.ksd = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.nfm = o;
        if (this.nfm * n > g.height) {
            a = g.height / (this.nfm * n);
            this.nfm = Math.round(a * this.nfm) - 1;
            m.font = this.puv + " " + this.nfm + "px " + b;
            n = m.measureText(l).width / g.width;
            n = (n > Math.round(n)) ? Math.round(n) + 1 : Math.round(n)
        }
        for (var e = c; e < l.length; e++) {
            j += l.charAt(e);
            k = m.measureText(j).width;
            if (l.charAt(e) == " ") {
                f = e
            }
            if (e == l.length - 1) {
                this.ttb[d] = l.substring(c, l.length)
            } else {
                if (k >= g.width) {
                    this.ttb[d] = l.substring(c, f);
                    d++;
                    c = f + 1;
                    j = l.substring(f + 1, e)
                }
            }
        }
    }
}
wkd.prototype = new drd;

function tsg() {
    var a = 99;
    var b = this;
    this.gij = true;
    this.osr = false;
    this.dza = [];
    this.wfe = false;
    this.eef = 0;
    this.kaf = 8;
    this.jal = 4;
    this.ubd = this.kaf;
    this.sjl = 0;
    this.nzy = -1;
    this.iic = -1;
    this.bvc = -1;
    this.izz = 0;
    this.epz = 0;
    this.zka = "sans-serif";
    this.puv = "bold";
    this.duu = "rgb(0,0,0)";
    this.jtj = "rgb(255,255,255)";
    this.hyd = 0.6;
    this.hyf = 16;
    this.trg = null;
    this.xlq = 0;
    this.nfs = 0;
    this.awy = 20;
    this.hte = 2;
    this.kov = 14;
    this.pgv = 6;
    this.ggl = 24;
    this.kxw = 26;
    var d = null;
    var c = null;
    this.ard = function(e, g, f) {
        tsg.prototype.ard.call(this, e, g, f);
        d = document.createElement("canvas");
        c = d.getContext("2d")
    };
    this.wne = function(f) {
        try {
            this.zka = f.qgf.font;
            this.puv = f.qgf.ifg;
            this.duu = f.qgf.backgroundColor;
            this.jtj = f.qgf.borderColor;
            this.hyd = f.qgf.swd
        } catch (g) {
            console.error(g)
        }
    };
    this.jit = function(f) {
        try {
            this.trg = f.lhn;
            this.hyf = f.dcw.hck;
            this.xlq = f.dcw.width;
            this.nfs = f.dcw.height;
            this.awy = f.qgf.fontSize;
            this.hte = f.qgf.gld;
            this.kov = f.qgf.woa;
            this.pgv = f.qgf.zmi;
            this.ggl = f.qgf.width;
            this.kxw = f.qgf.height;
            d.width = this.xlq;
            d.height = this.nfs
        } catch (g) {
            console.error(g)
        }
    };
    this.jab = function() {
        this.dza.length = 0
    };
    this.lqe = function(g) {
        this.dza = [];
        for (var f = 0, e = g.length; f < e; f++) {
            if (g[f] >= 0) {
                this.dza[f] = g[f]
            }
        }
    };
    this.jft = function(g, e) {
        var f = this.hbt();
        if (!e) {
            this.dza[f] = g
        } else {
            this.nzy = g;
            this.bvc = f;
            if (this.gij) {
                this.dza[f] = a;
                this.oor()
            } else {
                this.ppw()
            }
        }
    };
    this.oor = function() {
        var f = this.vrx(this.dza),
            g = this.url(f),
            e = this.dza.length - 1;
        this.wfe = true;
        this.ubd = (this.parent.tvk === true) ? this.jal : this.kaf;
        this.sjl = this.ubd - 1;
        this.izz = this.trg.x + (e * g);
        this.epz = this.trg.y;
        this.parent.nht();
        this.eef = zxh(this.aqm)
    };
    this.oaq = function() {
        this.wfe = false;
        het(this.eef)
    };
    this.aqm = function() {
        b.sjl--;
        var e = new mhd(b.x + b.izz, b.y + b.epz, b.xlq, b.nfs);
        b.parent.ykp([e]);
        if (b.sjl > 0) {
            b.eef = zxh(b.aqm)
        } else {
            b.ppw()
        }
    };
    this.ppw = function() {
        b.wfe = false;
        b.dza[b.bvc] = b.nzy;
        b.parent.nht();
        b.parent.dvu()
    };
    this.sex = function() {
        return this.mfo(this.dza)
    };
    this.mfo = function(k) {
        var j = 0,
            g = 0,
            e = -1,
            f = 0;
        for (f = 0; f < k.length; f++) {
            if (k[f] < 0 || k[f] == a) {
                break
            }
            e = this.jmv(k[f]);
            if (e == 11) {
                g++
            } else {
                j += e
            }
        }
        for (f = 0; f < g; f++) {
            if (j + 11 > 21) {
                j += 1
            } else {
                if ((j + 11 == 21) && (f < (g - 1))) {
                    j += 1
                } else {
                    j += 11
                }
            }
        }
        return j
    };
    this.fxp = function() {
        return (this.dza.length > 0 && this.jmv(this.dza[0]) == 11)
    };
    this.jmv = function(e) {
        if (e == this.parent.ptx) {
            return 0
        }
        var f = (e >> 2);
        if (f < 8) {
            f += 2
        } else {
            if (f >= 8 && f < 12) {
                f = 10
            } else {
                f = 11
            }
        }
        return f
    };
    this.hbt = function() {
        return this.vrx(this.dza)
    };
    this.vrx = function(g) {
        var f = 0;
        for (var e = g.length; f < e; f++) {
            if (g[f] < 0 || g[f] == this.parent.ptx) {
                return f
            }
        }
        return f
    };
    this.qeg = function() {
        var g = new mhd(this.trg.x, this.trg.y, this.trg.width, this.trg.height),
            e = this.hbt() + 1,
            f = 0;
        if (e > 0) {
            f = Math.abs(this.url(e));
            g.x += f * (e)
        }
        g.x += this.x;
        g.y += this.y;
        return g
    };
    this.url = function(e) {
        if (e >= 9) {
            return Math.floor(140 / e)
        } else {
            return this.hyf
        }
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var e = this.context2D;
        e.save();
        e.clearRect(0, 0, this.width, this.height);
        this.ihy(e);
        if (this.wfe) {
            this.zhj(this.izz, this.epz)
        }
        e.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    };
    this.ihy = function(o) {
        if (this.dza.length == 0 || this.dza[0] == -1) {
            return
        }
        var j = this.xlq,
            e = this.nfs,
            f = this.vrx(this.dza),
            k = this.url(f),
            n = this.mfo(this.dza),
            g = (n < 21) ? "white" : (n == 21) ? "yellow" : "red";
        for (var l = 0, m = this.dza.length; l < m; l++) {
            if (this.dza[l] >= 0 && this.dza[l] != a) {
                o.drawImage(this.parent.upk.mcq("cards"), this.parent.qxw[this.dza[l]] * j, 0, j, e, this.trg.x + (l * k), this.trg.y, j, e)
            }
        }
        if (!this.wfe && n == 21 && f == 2) {
            o.drawImage(this.parent.upk.mcq("blackjack"), this.trg.x + ((f - 1) * k), this.trg.y + (e - this.parent.upk.mcq("blackjack").height) / 2)
        }
        if (n > 0) {
            sut.zdt.you(o, this.trg.x + this.pgv, this.trg.y + e - this.pgv, this.kov, this.duu, this.hyd, this.jtj, this.hte, this.hyd);
            sut.zdt.ffx(o, n, g, this.trg.x - this.pgv, this.trg.y + e - 3 * this.pgv, this.ggl, this.kxw, this.zka, this.awy, this.puv)
        }
    };
    this.zhj = function(e, m) {
        var g = this.xlq,
            k = this.nfs,
            f = c,
            i = 0,
            l = 10;
        f.save();
        f.clearRect(0, 0, g, k);
        if (this.wfe) {
            var j = g / (this.ubd / 2);
            if (this.sjl > this.ubd / 2) {
                f.drawImage(this.parent.upk.mcq("cardback"), 0, 0, g, k, (g - (this.sjl - (this.ubd / 2)) * j) / 2, 0, (this.sjl - (this.ubd / 2)) * j, k)
            } else {
                if (this.sjl < this.ubd / 2 && this.sjl > 0) {
                    f.drawImage(this.parent.upk.mcq("cards"), this.parent.qxw[this.nzy] * g, 0, g, k, (g - ((this.ubd / 2 - this.sjl) * j)) / 2, 0, ((this.ubd / 2 - this.sjl) * j), k)
                }
            }
        }
        f.restore();
        if (this.osr) {
            if (this.sjl > this.ubd / 2) {
                i = this.ubd - this.sjl;
                this.context2D.drawImage(d, 0, 0, d.width, d.height, e - (l * i / 2), m - (l * i / 2), d.width + (l * i), d.height + (l * i))
            } else {
                if (this.sjl < this.ubd / 2 && this.sjl > 0) {
                    i = this.sjl;
                    this.context2D.drawImage(d, 0, 0, d.width, d.height, e - (l * i / 2), m - (l * i / 2), d.width + (l * i), d.height + (l * i))
                } else {
                    this.context2D.drawImage(d, e, m)
                }
            }
        } else {
            this.context2D.drawImage(d, e, m)
        }
    }
}
tsg.prototype = new drd;

function ajw() {
    var a = 99;
    var b = this;
    this.xtj = null;
    this.gij = true;
    this.siq = false;
    this.oha = false;
    this.tvj = false;
    this.osr = false;
    this.id = -1;
    this.pqn = 0;
    this.kbl = [];
    this.dio = [];
    this.iag = 0;
    this.ynv = [];
    this.pwx = [];
    this.rgg = 0;
    this.wbc = false;
    this.wfe = false;
    this.cti = [];
    this.eef = 0;
    this.kaf = 8;
    this.jal = 4;
    this.ubd = this.kaf;
    this.sjl = 0;
    this.nzy = -1;
    this.iic = -1;
    this.bvc = -1;
    this.izz = 0;
    this.epz = 0;
    this.cir = "sans-serif";
    this.vvl = "sans-serif";
    this.bno = "verdana";
    this.wmc = "sans-serif";
    this.puv = "bold";
    this.ayp = "rgb(240,240,240)";
    this.ntg = "rgb(255,255,255)";
    this.iuj = "rgb(0,0,0)";
    this.duu = "rgb(0,0,0)";
    this.jtj = "rgb(255,255,255)";
    this.hyd = 0.6;
    this.ade = "rgb(255,255,255)";
    this.jui = "rgb(255,200,0)";
    this.lqu = "white";
    this.gxl = "rgb(0,0,0)";
    this.phj = [];
    this.dhx = [];
    this.azw = new mhd();
    this.mrj = new mhd();
    this.pzs = 14;
    this.thx = 5, this.jgw = 18;
    this.qwt = 5;
    this.nsf = 20;
    this.kov = 14;
    this.hte = 2;
    this.pgv = 6;
    this.ggl = 24;
    this.kxw = 26;
    this.wwa = 16, this.dna = 4, this.pup = 2;
    this.bhz = 14;
    this.obq = 14;
    this.ccp = 5;
    this.xmr = 11;
    this.hyf = 16;
    this.rwo = -20;
    this.xlq = 0;
    this.nfs = 0;
    this.qbd = 0;
    this.xte = -3;
    this.dri = 40;
    this.hkh = null;
    var d = null;
    var c = null;
    this.ard = function(f, j, g) {
        ajw.prototype.ard.call(this, f, j, g);
        for (var e = 0; e < sut.iou.rxh; e++) {
            this.kbl[e] = [];
            this.dio[e] = 0;
            this.ynv[e] = 0;
            this.pwx[e] = ""
        }
        this.iag = 0;
        d = document.createElement("canvas");
        c = d.getContext("2d")
    };
    this.wne = function(f) {
        try {
            this.puv = f.ifg;
            this.cir = f.pwx.font;
            this.ayp = f.pwx.xwt;
            this.vvl = f.mby.font;
            this.ntg = f.mby.xwt;
            this.iuj = f.mby.backgroundColor;
            this.wmc = f.qgf.font;
            this.duu = f.qgf.backgroundColor;
            this.jtj = f.qgf.borderColor;
            this.hyd = f.qgf.swd;
            this.ade = f.cfn.borderColor;
            this.jui = f.cfn.backgroundColor;
            this.bno = f.nbh.font;
            this.lqu = f.nbh.xwt;
            this.gxl = f.nbh.backgroundColor
        } catch (g) {
            console.error(g)
        }
    };
    this.jit = function(f) {
        try {
            this.phj = f.zog;
            this.dhx = f.bub;
            this.azw = f.ctj;
            this.mrj = f.pwx.fkh;
            this.bhz = f.pwx.fontSize;
            this.pzs = f.mby.fontSize;
            this.thx = f.mby.oqd, this.jgw = f.mby.height;
            this.qwt = f.mby.pmt;
            this.nsf = f.qgf.fontSize;
            this.kov = f.qgf.woa;
            this.hte = f.qgf.gld;
            this.pgv = f.qgf.zmi;
            this.ggl = f.qgf.width;
            this.kxw = f.qgf.height;
            this.wwa = f.cfn.width, this.dna = f.cfn.oqd, this.pup = f.cfn.gld;
            this.obq = f.nbh.fontSize;
            this.ccp = f.nbh.pmt;
            this.xmr = f.nbh.oqd;
            this.hyf = f.dcw.hck;
            this.rwo = f.dcw.oqd;
            this.xlq = f.dcw.width;
            this.nfs = f.dcw.height;
            this.qbd = f.nsw;
            this.xte = f.sum;
            this.dri = f.zcj;
            this.hkh = f.svo;
            d.width = this.xlq;
            d.height = this.nfs
        } catch (g) {
            console.error(g)
        }
    };
    this.ubg = function(e, i) {
        var g = e - this.x,
            f = i - this.y;
        if (this.mrj.ngh(g, f)) {
            this.voi(this.parent.uul[this.parent.vjv + 1], 0);
            this.parent.zdv(this.parent.ayu(), true);
            return true
        }
        return false
    };
    this.sik = function(e, f) {};
    this.adq = function() {};
    this.vbi = function() {};
    this.ksa = function(j, k, g, i, f, l) {
        var e = new qrq();
        e.ard(new mhd(0, 0, this.dri, this.dri), this.context2D);
        e.hkk = k;
        e.value = j;
        e.x = f;
        e.y = l;
        e.est(g);
        e.jit(i);
        return e
    };
    this.rti = function() {
        for (var e = 0; e < sut.iou.rxh; e++) {
            this.kbl[e].length = 0;
            this.pwx[e] = ""
        }
        this.tvj = false
    };
    this.jab = function() {
        for (var e = 0; e < sut.iou.rxh; e++) {
            this.kbl[e].length = 0;
            this.dio[e] = 0;
            this.ynv[e] = 0;
            this.pwx[e] = ""
        }
        this.pqn = 0;
        this.iag = 0;
        this.tvj = false
    };
    this.heb = function() {
        if (this.rgg > 0) {
            this.dio[0] = this.rgg;
            return true
        }
        return false
    };
    this.vxa = function() {
        if (this.dio[0] > 0) {
            if (2 * this.dio[0] <= this.parent.eqo) {
                this.dio[0] += this.dio[0];
                return 2
            } else {
                this.dio[0] = this.parent.eqo;
                return 1
            }
        }
        return 0
    };
    this.oud = function() {
        var f = 0;
        this.pqn = 0;
        this.iag = 0;
        this.rgg = 0;
        for (var e = 0; e < sut.iou.rxh; e++) {
            if (this.dio[e] > 0) {
                f = 1
            }
            this.dio[e] = 0
        }
        return f
    };
    this.voi = function(f, e) {
        if (this.parent.jzz < this.parent.ayu() + f) {
            this.parent.gzz.knk.pck("info", "#ijc", [this.parent.language.wsl, true]);
            this.parent.gzz.knk.pck("info", "#vml", [0]);
            this.parent.upk.iie("limit");
            this.parent.upk.vjc("limit")
        } else {
            if ((this.parent.yzt && this.parent.ayu() + f > this.parent.eqo) || (!this.parent.yzt && this.dio[e] + f > this.parent.eqo)) {
                this.parent.gzz.knk.pck("info", "#ijc", [this.parent.language.ayb + " " + this.parent.gje(this.parent.eqo), true]);
                this.parent.gzz.knk.pck("info", "#vml", [0]);
                this.parent.upk.iie("limit");
                this.parent.upk.vjc("limit")
            } else {
                this.dio[e] += f;
                this.parent.nht();
                this.parent.upk.iie("jeton");
                this.parent.upk.vjc("jeton")
            }
        }
    };
    this.rbl = function(e) {
        if (this.dio[e] > 0) {
            this.dio[e] = 0;
            this.parent.nht()
        }
    };
    this.bqk = function() {
        var e = 0;
        for (var f = 0; f < sut.iou.rxh; f++) {
            e += this.dio[f]
        }
        e += this.iag;
        return e
    };
    this.lqe = function(f, j) {
        this.kbl[f] = [];
        for (var g = 0, e = j.length; g < e; g++) {
            if (j[g] >= 0) {
                this.kbl[f][g] = j[g]
            }
        }
    };
    this.jft = function(e, i, f) {
        var g = this.hbt(e);
        if (!f) {
            this.kbl[e][g] = i
        } else {
            this.nzy = i;
            this.iic = e;
            this.bvc = g;
            if (this.gij) {
                this.kbl[e][g] = a;
                this.oor()
            } else {
                this.ppw()
            }
        }
    };
    this.oor = function() {
        var g = (this.vrx(this.kbl[this.iic]) < 2) ? 2 : this.vrx(this.kbl[this.iic]),
            j = this.url(g),
            e = this.wfy(g),
            f = this.kbl[this.iic].length - 1;
        this.wfe = true;
        this.ubd = (this.parent.tvk === true) ? this.jal : this.kaf;
        this.sjl = this.ubd - 1;
        this.izz = this.phj[this.pqn][this.iic].x - Math.round(j * (g - 1) / 2) + (f * j);
        this.epz = this.phj[this.pqn][this.iic].y + (f * e);
        this.parent.nht();
        this.eef = zxh(this.aqm)
    };
    this.oaq = function() {
        this.wfe = false;
        het(this.eef)
    };
    this.aqm = function() {
        b.sjl--;
        var e = new mhd(b.x + b.izz, b.y + b.epz, b.xlq, b.nfs);
        b.parent.ykp([e]);
        if (b.sjl > 0) {
            b.eef = zxh(b.aqm)
        } else {
            b.ppw()
        }
    };
    this.ppw = function() {
        b.wfe = false;
        b.kbl[b.iic][b.bvc] = b.nzy;
        b.parent.nht();
        if (b.hbt(0) == 2 && b.sex(0) == 21 && b.pqn == 0) {
            b.parent.upk.vjc("blackjack");
            setTimeout(b.parent.dvu, 1000)
        } else {
            b.parent.dvu()
        }
    };
    this.gvx = function(e, f) {
        this.ynv[e] = f;
        if (this.ynv[e] == this.dio[e]) {
            this.pwx[e] = this.parent.language.push
        } else {
            if (this.ynv[e] > 0) {
                this.pwx[e] = this.parent.language.win
            } else {
                this.pwx[e] = this.parent.language.vxe
            }
        }
    };
    this.sex = function(e) {
        return this.mfo(this.kbl[e])
    };
    this.mfo = function(k) {
        var j = 0,
            g = 0,
            e = -1,
            f = 0;
        for (f = 0; f < k.length; f++) {
            if (k[f] < 0 || k[f] == a) {
                break
            }
            e = this.jmv(k[f]);
            if (e == 11) {
                g++
            } else {
                j += e
            }
        }
        for (f = 0; f < g; f++) {
            if (j + 11 > 21) {
                j += 1
            } else {
                if ((j + 11 == 21) && (f < (g - 1))) {
                    j += 1
                } else {
                    j += 11
                }
            }
        }
        return j
    };
    this.jmv = function(e) {
        var f = (e >> 2);
        if (f < 8) {
            f += 2
        } else {
            if (f >= 8 && f < 12) {
                f = 10
            } else {
                f = 11
            }
        }
        return f
    };
    this.foo = function() {
        return this.dhx
    };
    this.vks = function() {
        return this.azw
    };
    this.hbt = function(e) {
        return this.vrx(this.kbl[e])
    };
    this.jhc = function(e) {
        return this.clj(this.dio[e])
    };
    this.qeg = function(e) {
        var i = new mhd(this.phj[this.pqn][e].x, this.phj[this.pqn][e].y, this.phj[this.pqn][e].width, this.phj[this.pqn][e].height),
            f = this.hbt(e);
        if (f > 0) {
            var g = Math.abs(this.url(f));
            var j = Math.abs(this.wfy(f));
            i.x -= Math.round(g * (f) / 2);
            i.y -= j * (f);
            i.width += g * (f);
            i.height += j * (f)
        }
        i.x += this.x;
        i.y += this.y;
        return i
    };
    this.srw = function(e) {
        var g = (this.vrx(this.kbl[e]) + 1 < 2) ? 2 : this.vrx(this.kbl[e]) + 1,
            i = this.url(g),
            f = this.wfy(g);
        return (new mhd(this.x + this.phj[this.pqn][e].x - Math.round(i * (g) / 2) + (g * i), this.y + this.phj[this.pqn][e].y + (g * f), this.phj[this.pqn][e].width, this.phj[this.pqn][e].height))
    };
    this.nwq = function(e) {
        if (this.dio[e] == 0) {
            return null
        }
        var g = new mhd(this.dhx[this.pqn][e].x, this.dhx[this.pqn][e].y, this.dhx[this.pqn][e].width, this.dhx[this.pqn][e].height),
            f = this.jhc(e);
        if (f > 0) {
            var i = Math.abs(this.xte);
            g.y -= i * (f - 1);
            g.height += i * (f - 1)
        }
        g.x += this.x;
        g.y += this.y;
        return g
    };
    this.vrx = function(g) {
        var f = 0;
        for (var e = g.length; f < e; f++) {
            if (g[f] < 0) {
                return f
            }
        }
        return f
    };
    this.clj = function(e) {
        var j = e,
            g = 0;
        while (j > 0) {
            for (var f = this.parent.uul.length - 1; f >= 0; f--) {
                if (j >= this.parent.uul[f]) {
                    j -= this.parent.uul[f];
                    g++;
                    break
                }
            }
        }
        return g
    };
    this.url = function(e) {
        if (this.pqn == 2) {
            return 0
        } else {
            if (this.pqn == 1) {
                if (e >= 3) {
                    return Math.floor(40 / e)
                }
            } else {
                if (e >= 7) {
                    return Math.floor(100 / e)
                }
            }
        }
        return this.hyf
    };
    this.wfy = function(e) {
        if (e > 5) {
            return Math.floor(100 / e) * (-1)
        }
        return this.rwo
    };
    this.nht = function() {
        if (!this.npz()) {
            return
        }
        var f = this.context2D;
        f.save();
        f.clearRect(0, 0, this.width, this.height);
        this.eyc(f);
        for (var g = 0, e = this.kbl.length; g < e; g++) {
            this.ihy(f, g)
        }
        for (var g = 0, e = this.dio.length; g < e; g++) {
            this.npq(f, g)
        }
        this.qog(f);
        if (this.tvj) {
            for (var g = 0, e = this.ynv.length; g < e; g++) {
                this.hwe(f, g)
            }
        }
        if (this.wfe) {
            this.zhj(this.izz, this.epz)
        }
        f.restore();
        if (this.csj && this.veg) {
            this.csj.drawImage(this.veg, this.x, this.y)
        }
    };
    this.npq = function(f, l) {
        if (this.dio[l] <= 0) {
            return
        }
        var j = 0,
            k = this.dio[l];
        this.cti.length = 0;
        while (k > 0) {
            if (this.parent.uul.length > 0) {
                for (var g = this.parent.uul.length - 1; g >= 0; g--) {
                    if (k >= this.parent.uul[g]) {
                        if ((j % 3) == 0) {
                            this.qbd = 1
                        } else {
                            if ((j % 4) == 0) {
                                this.qbd = -1
                            } else {
                                this.qbd = 0
                            }
                        }
                        this.cti[j] = this.ksa(this.parent.gje(this.parent.uul[g]), this.parent.upk.mcq("chip" + g), this.parent.uhu[g], this.hkh, this.dhx[this.pqn][l].x + this.qbd, this.dhx[this.pqn][l].y + (j * this.xte));
                        k -= this.parent.uul[g];
                        j++;
                        break
                    }
                }
            }
        }
        for (var g = 0, e = this.cti.length; g < e; g++) {
            this.cti[g].nht()
        }
        sut.zdt.qot(f, this.dhx[this.pqn][l].x - 3, this.dhx[this.pqn][l].y + this.dri + this.xmr, this.dri + 6, this.obq + 1, this.ccp, this.gxl, 0.6);
        sut.zdt.ffx(f, this.parent.gje(this.dio[l]), this.lqu, this.dhx[this.pqn][l].x - 3, this.dhx[this.pqn][l].y + this.dri + this.xmr, this.dri + 6, this.obq + 1, this.bno, this.obq, this.puv)
    };
    this.qog = function(e) {
        if (this.iag <= 0) {
            return
        }
        var g = 0,
            j = this.iag;
        this.cti.length = 0;
        while (j > 0) {
            if (this.parent.uul.length > 0) {
                for (var f = this.parent.uul.length - 1; f >= 0; f--) {
                    if (j >= this.parent.uul[f]) {
                        if ((g % 3) == 0) {
                            this.qbd = 1
                        } else {
                            if ((g % 4) == 0) {
                                this.qbd = -1
                            } else {
                                this.qbd = 0
                            }
                        }
                        this.cti[g] = this.ksa(this.parent.gje(this.parent.uul[f]), this.parent.upk.mcq("chip" + f), this.parent.uhu[f], this.hkh, this.azw.x + this.qbd, this.azw.y + (g * this.xte));
                        j -= this.parent.uul[f];
                        g++;
                        break
                    }
                }
            }
        }
        for (var f in this.cti) {
            this.cti[f].nht()
        }
        sut.zdt.qot(e, this.azw.x, this.azw.y + this.dri + this.xmr, this.dri, this.obq + 1, this.ccp, this.gxl, 0.6);
        sut.zdt.ffx(e, this.parent.gje(this.iag), this.lqu, this.azw.x, this.azw.y + this.dri + this.xmr, this.dri, this.obq + 1, this.bno, this.obq, this.puv)
    };
    this.ihy = function(s, g) {
        if (this.kbl[g].length == 0 || this.kbl[g][0] == -1) {
            return
        }
        var k = this.xlq,
            e = this.nfs,
            j = (this.vrx(this.kbl[g]) < 2) ? 2 : this.vrx(this.kbl[g]),
            r = this.mfo(this.kbl[g]),
            o = (r < 21) ? "white" : (r == 21) ? "yellow" : "rgb(150,150,150)",
            m = this.url(j),
            f = this.wfy(j);
        if (this.oha && this.id == this.parent.jrx && g == this.parent.umo) {
            var q = this.phj[this.pqn][g].x - Math.round(m * (j - 1) / 2) + ((j - 1) * m) + (k) / 2,
                p = this.phj[this.pqn][g].y + ((j - 1) * f);
            s.save();
            s.strokeStyle = this.ade;
            s.fillStyle = this.jui;
            s.lineWidth = this.pup;
            s.beginPath();
            s.moveTo(q + this.wwa / 2, p - this.wwa - this.dna);
            s.lineTo(q, p - this.dna);
            s.lineTo(q - this.wwa / 2, p - this.wwa - this.dna);
            s.closePath();
            s.fill();
            s.stroke();
            s.restore()
        }
        for (var l = 0, n = this.kbl[g].length; l < n; l++) {
            if (this.kbl[g][l] >= 0 && this.kbl[g][l] != a) {
                s.drawImage(this.parent.upk.mcq("cards"), this.parent.qxw[this.kbl[g][l]] * k, 0, k, e, this.phj[this.pqn][g].x - Math.round(m * (j - 1) / 2) + (l * m), this.phj[this.pqn][g].y + (l * f), k, e)
            }
        }
        if (!this.wfe && r == 21 && this.pqn == 0 && j == 2) {
            s.drawImage(this.parent.upk.mcq("blackjack"), this.phj[this.pqn][g].x - Math.round(m * (j - 1) / 2) + ((j - 1) * m), this.phj[this.pqn][g].y + ((j - 1) * f) + (e - this.parent.upk.mcq("blackjack").height) / 2)
        }
        if (r > 0) {
            sut.zdt.you(s, this.phj[this.pqn][g].x - Math.round(m * (j - 1) / 2) + this.pgv, this.phj[this.pqn][g].y + e - this.pgv, this.kov, this.duu, this.hyd, this.jtj, this.hte, this.hyd);
            sut.zdt.ffx(s, r, o, this.phj[this.pqn][g].x - Math.round(m * (j - 1) / 2) - this.pgv, this.phj[this.pqn][g].y + e - 3 * this.pgv, this.ggl, this.kxw, this.wmc, this.nsf, this.puv)
        }
    };
    this.hwe = function(e, j) {
        if (this.pwx[j] == "" || this.ynv[j] == 0) {
            return
        }
        var i = 1,
            g = this.vrx(this.kbl[j]),
            f = this.wfy(g);
        sut.zdt.qot(e, this.phj[this.pqn][j].x - this.hyf / 2, this.phj[this.pqn][j].y + ((g - 1) * f) - this.jgw - this.thx, this.phj[this.pqn][j].width + this.hyf, this.jgw, this.qwt, this.iuj, 0.6);
        sut.zdt.ffx(e, this.pwx[j], this.ntg, this.phj[this.pqn][j].x - this.hyf / 2, this.phj[this.pqn][j].y + ((g - 1) * f) - this.jgw - this.thx + i, this.phj[this.pqn][j].width + this.hyf, this.jgw, this.vvl, this.pzs, this.puv)
    };
    this.eyc = function(g) {
        var j = 12,
            l = this.parent.language.htm,
            f = l.split("|");
        g.save();
        if ((this.parent.state == sut.iou.gcn.mkt || this.parent.state == sut.iou.gcn.tyg) && this.dio[0] == 0) {
            if (this.xtj) {
                g.drawImage(this.xtj, this.id * this.xtj.width / 3, this.xtj.height / 2, this.xtj.width / 3, this.xtj.height / 2, this.mrj.x, this.mrj.y, this.xtj.width / 3, this.xtj.height / 2)
            }
            for (var k = 0, e = f.length; k < e; k++) {
                sut.zdt.ffx(g, f[k], this.ayp, this.mrj.x + j, this.mrj.y + j + (this.mrj.height) * k / (e + 2), this.mrj.width - 2 * j, (this.mrj.height) / e, this.cir, this.bhz, this.puv)
            }
        } else {
            if (this.xtj) {
                g.drawImage(this.xtj, this.id * this.xtj.width / 3, 0, this.xtj.width / 3, this.xtj.height / 2, this.mrj.x, this.mrj.y, this.xtj.width / 3, this.xtj.height / 2)
            }
        }
        g.restore()
    };
    this.zhj = function(e, m) {
        var g = this.xlq,
            k = this.nfs,
            f = c,
            i = 0,
            l = 10;
        f.save();
        f.clearRect(0, 0, g, k);
        if (this.wfe) {
            var j = g / (this.ubd / 2);
            if (this.sjl > this.ubd / 2) {
                f.drawImage(this.parent.upk.mcq("cardback"), 0, 0, g, k, (g - (this.sjl - (this.ubd / 2)) * j) / 2, 0, (this.sjl - (this.ubd / 2)) * j, k)
            } else {
                if (this.sjl < this.ubd / 2 && this.sjl > 0) {
                    f.drawImage(this.parent.upk.mcq("cards"), this.parent.qxw[this.nzy] * g, 0, g, k, (g - ((this.ubd / 2 - this.sjl) * j)) / 2, 0, ((this.ubd / 2 - this.sjl) * j), k)
                }
            }
        }
        f.restore();
        if (this.osr) {
            if (this.sjl > this.ubd / 2) {
                i = this.ubd - this.sjl;
                this.context2D.drawImage(d, 0, 0, d.width, d.height, e - (l * i / 2), m - (l * i / 2), d.width + (l * i), d.height + (l * i))
            } else {
                if (this.sjl < this.ubd / 2 && this.sjl > 0) {
                    i = this.sjl;
                    this.context2D.drawImage(d, 0, 0, d.width, d.height, e - (l * i / 2), m - (l * i / 2), d.width + (l * i), d.height + (l * i))
                } else {
                    this.context2D.drawImage(d, e, m)
                }
            }
        } else {
            this.context2D.drawImage(d, e, m)
        }
    }
}
ajw.prototype = new drd;
sut.iou = {
    gcn: {
        mkt: 0,
        cvi: 1,
        isw: 2,
        fde: 3,
        grb: 4,
        vft: 5,
        dij: 6,
        ztd: 7,
        sju: 8,
        owl: 9,
        azy: 10,
        tyg: 11,
        BJ: 12,
        sgg: 13,
        mtp: 14
    },
    yay: 3,
    rxh: 3
};

function qmh() {
    this.kyt = sut.ipy.value30 + "/blackjack/images/";
    this.apr = sut.ipy.value30 + "/blackjack/sounds/";
    this.fzw = "BlackJack";
    this.xtu = "Black Jack";
    this.tqu = 0;
    this.ayi = 0;
    this.bob = 0;
    this.alo = 0;
    this.jem = 0;
    this.gnt = 0;
    this.vjv = 0;
    this.gzz = null;
    this.aka = null;
    this.ccy = null;
    this.fiw = null;
    this.jis = [];
    this.blk = null;
    this.jzn = null;
    this.taz = null;
    this.lxm = null;
    this.fcz = null;
    this.zzp = null;
    this.ieg = null;
    this.abi = true;
    this.jzz = 0;
    this.win = 0;
    this.ctz = 0;
    this.ybc = 0;
    this.eqo = 0;
    this.nbh = 0;
    this.uul = [];
    this.qxw = [0, 13, 26, 39, 1, 14, 27, 40, 2, 15, 28, 41, 3, 16, 29, 42, 4, 17, 30, 43, 5, 18, 31, 44, 6, 19, 32, 45, 7, 20, 33, 46, 8, 21, 34, 47, 9, 22, 35, 48, 10, 23, 36, 49, 11, 24, 37, 50, 12, 25, 38, 51, 52];
    this.ptx = 52;
    this.yzt = false;
    this.jrx = -1;
    this.umo = -1;
    this.mrq = [];
    this.hpj = [];
    this.aql = [];
    this.tju = [];
    this.pqn = [];
    this.kbl = [];
    this.fab = [];
    this.ynv = [];
    this.fds = [];
    this.sjt = 0;
    this.kti = 0;
    this.pfj = false;
    this.tyz = false;
    this.snr = 0;
    this.yha = 0;
    this.nkx = 0;
    this.xeo = 0;
    this.bnn = 10;
    this.oqf = 50;
    this.gvf = null;
    this.ukv = null;
    this.kex = false;
    this.abj = 0;
    this.ojq = 0;
    this.twx = 0;
    this.boi = 0;
    this.abn = 0;
    this.uhu = [];
    this.xjt = 0;
    this.qds = true;
    this.tvk = false;
    this.sth = true;
    this.hvv = false;
    this.dns = "";
    this.kkq = function() {
        this.nmu("1_0_11")
    };
	
	
	gameController=this;
	
    this.ubg = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.ocv) {
            return
        }
        var m = 0,
            l = 0,
            c = false,
            f = this.njg.hie("loading"),
            j = this.njg.hie("buttonpanel"),
            a = this.njg.hie("stats"),
            o = this.njg.hie("topb"),
            k = this.njg.hie("topi"),
            n = null;
        if (b.touches) {
            var e = b.touches[0];
            c = true;
            if (!this.vgk) {
                m = e.pageX - this.offsetLeft;
                l = e.pageY - this.offsetTop
            } else {
                m = Math.round((e.pageX - this.offsetLeft) / this.ggf);
                l = Math.round((e.pageY - this.offsetTop) / this.krr)
            }
        } else {
            if (b.which != 1) {
                return
            }
            if (!this.vgk) {
                m = b.pageX - this.offsetLeft;
                l = b.pageY - this.offsetTop
            } else {
                m = Math.round((b.pageX - this.offsetLeft) / this.ggf);
                l = Math.round((b.pageY - this.offsetTop) / this.krr)
            }
        }
        if (this.kiy === true) {
            n = this.gzz.knk.hie("clear");
            if (o && o.npz()) {
                if (o.ubg(m, l)) {
                    clearTimeout(this.abn);
                    return
                } else {
                    this.xbh();
                    return
                }
            }
            if (a && a.npz()) {
                if (a.ubg(m, l)) {
                    return
                }
            }
            if (k) {
                if (k.ubg(m, l, c)) {
                    return
                }
            }
            if (this.gzz != null) {
                if (this.gzz.ubg(m, l)) {
                    return
                }
            }
            if (this.fcz != null && this.fcz.npz()) {
                if (this.fcz.ubg(m, l)) {
                    return
                }
            }
            if (j && j.npz()) {
                if (j.ubg(m, l)) {
                    return
                }
            }
            if (this.jis != null && (this.gzz != null && n && n.ezw() && !n.oxl())) {
                for (var d = 0, g = this.jis.length; d < g; d++) {
                    if (this.jis[d].ubg(m, l)) {
                        return
                    }
                }
            }
        } else {
            if (f && f.npz()) {
                if (f.ubg(m, l)) {
                    return
                }
            }
        }
    };
    this.sik = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.ocv) {
            return
        }
        var a = this.njg.hie("buttonpanel"),
            c = this.njg.hie("topb");
        if (this.kiy === true) {
            if (this.gzz != null) {
                if (this.gzz.sik()) {
                    return
                }
            }
            if (this.fcz != null && this.fcz.npz()) {
                if (this.fcz.sik()) {
                    return
                }
            }
            if (a && a.npz()) {
                if (a.sik()) {
                    return
                }
            }
            if (c && c.npz()) {
                if (c.sik()) {
                    return
                }
            }
        }
    };
    this.adq = function(a) {
        if (a.preventDefault) {
            a.preventDefault()
        }
        if (a.stopPropagation) {
            a.stopPropagation()
        }
        if (this.ocv) {
            return
        }
        var b = this.njg.hie("topb");
        if (b) {
            if (b.adq(a.keyCode)) {
                return
            }
        }
    };
    this.vbi = function(a) {
        if (a.preventDefault) {
            a.preventDefault()
        }
        if (a.stopPropagation) {
            a.stopPropagation()
        }
        if (this.ocv) {
            return
        }
        var b = this.njg.hie("topb");
        if (b) {
            if (b.vbi()) {
                return
            }
        }
    };
    this.zck = function() {
        if (sut.zdt.zuy) {
            var b = (this.uyt > this.jio) ? this.tvd : this.vmm,
                a = null;
            if (b != this.hxs) {
                this.hxs = b;
                if (this.azf) {
                    a = (this.hxs == this.tvd) ? sut.vrz.zmt : sut.vrz.hkc
                } else {
                    a = (this.hxs == this.tvd) ? sut.ipy.value33 : sut.ipy.value32
                }
                this.jju(a);
                this.hgc();
                if (this.jrz === true) {
                    if (this.azf && this.huy) {
                        this.wvg(this.aal(this.language.kwu))
                    } else {
                        this.nht()
                    }
                } else {
                    this.njg.pck("loading", "#nht")
                }
            }
        } else {
            if (!this.azf) {
                a = (this.pgr) ? sut.ipy.value15 : sut.ipy.value14;
                this.jju(a);
                this.hgc();
                if (this.jrz === true) {
                    this.nht()
                } else {
                    this.njg.pck("loading", "#nht")
                }
            }
        }
    };
    this.dkf = function() {
        var a = new cko();
        a.ard();
        return a
    };
    this.brp = function() {
        this.fid = new eam()
    };
    this.bhm = function() {
        this.xai()
    };
    this.cun = function() {
        if (this.vrz.ryi) {
            this.nqv();
            this.opq()
        }
        if (this.azf) {
            this.llz()
        } else {
            this.ymd();
            this.xpb();
            this.ifm();
            if (this.vbb()) {
                this.vdf()
            }
        }
        this.jys();
        this.dtu();
        this.rau();
        this.xvi();
        this.cyj();
        this.qof();
        this.ggc()
    };
    this.dgn = function() {
        if (!this.wsu) {
            if (this.jiw === false) {
                this.uyh.style.marginTop = (-this.height / 2 + this.iow()) + "px";
                this.uyh.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.uyh.style.left = "0px";
                this.uyh.style.top = "0px";
                this.uyh.style.marginTop = ((this.jio - this.height) / 2 + this.iow()) + "px";
                this.uyh.style.marginLeft = ((this.uyt - this.width) / 2) + "px"
            }
            this.uyh.style.width = (this.width > this.uyt) ? this.uyt + "px" : this.width + "px";
            this.uyh.style.height = (this.height > this.jio) ? this.jio + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.kxi() === true && typeof WebGL2D != "undefined") {
                try {
                    this.bje = document.getElementById("canvas2");
                    this.bje.width = Math.round(this.vrz.bje.fkh.width);
                    this.bje.height = Math.round(this.vrz.bje.fkh.height);
                    WebGL2D.enable(this.bje);
                    this.ajg = this.bje.getContext("webgl-2d");
                    this.upi = true;
                    this.canvas.style.zIndex = 0;
                    this.bje.style.zIndex = 1
                } catch (a) {
                    this.bje = null;
                    this.ajg = null;
                    this.upi = false
                }
            }
            if (this.iwg) {
                this.iwg.style.width = this.width + "px";
                this.iwg.style.height = this.height + "px"
            }
            this.offsetLeft = this.uyh.offsetLeft;
            this.offsetTop = this.uyh.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.wsu = true
        }
    };
    this.ymd = function() {
        this.fcz = new fel();
        this.fcz.ard(this.vrz.lrl.fkh, null, this.context2D);
        this.fcz.parent = this;
        this.fcz.wne(this.style.lrl);
        this.fcz.jit(this.vrz.lrl);
        this.fcz.pph(false);
        this.fcz.gyx(false)
    };
    this.llz = function() {
        var a = new oyq();
        a.ard(this.vrz.ygy.fkh, null, this.context2D);
        a.parent = this;
        a.bhp(this.vrz.ygy);
        a.wne(this.style.ygy);
        this.njg.mpd("history", a)
    };
    this.nqv = function() {
        qmh.prototype.nqv.call(this);
        var a = this.njg.hie("topi");
        if (a) {
            a.sjr("language", this.upk.mcq("icon_l"), sessionStorage.sessionValue1, [sut.language.EN, sut.language.DE, sut.language.RU, sut.language.EE, sut.language.ES, sut.language.TR, sut.language.CZ, sut.language.GR, sut.language.AT, sut.language.US, sut.language.BG, sut.language.CO, sut.language.MX, sut.language.CL, sut.language.VE, sut.language.BR, sut.language.GE, sut.language.HU, sut.language.RO, sut.language.PT, sut.language.FR, sut.language.HR, sut.language.IT, sut.language.SE]);
            if (sut.ipy.value27 && this.lni) {
                a.sjr("audio", this.upk.mcq("icon_a"), this.lah[this.xgq], this.lah)
            }
            if (sessionStorage.sessionValue14 == "true" && sut.zdt.cho()) {
                a.xfp("fullscreen", this.upk.mcq("icon_f"), this.pgr)
            }
            if (sut.ipy.value28 && this.sth) {
                a.xfp("turbo", this.upk.mcq("icon_t"), this.tvk)
            }
        }
    };
    this.opq = function() {
        qmh.prototype.opq.call(this);
        var a = this.njg.hie("topb");
        if (a) {
            if (sut.ipy.value5.length > 1) {
                a.fhg("language", this.language.language, this.qol(sut.ipy.value5[this.ujm]), this.oup, this.fid.language, 0, 1)
            }
            if (sut.ipy.value27 && this.lni) {
                a.fhg("audio", this.language.audio, this.upk.mcq("btn_a"), this.dlh, this.fid.audio, this.xgq, this.lah.length)
            }
            if (sessionStorage.sessionValue14 == "true" && sut.zdt.cho()) {
                a.fhg("fullscreen", this.language.pgr, this.upk.mcq("btn_f"), this.yyz, this.fid.pgr, (this.pgr) ? 1 : 0, 2)
            }
            if (sut.ipy.value28 && this.sth) {
                a.fhg("turbo", this.language.tvk, this.upk.mcq("btn_t"), this.ixt, this.fid.tvk, (this.tvk) ? 1 : 0, 2)
            }
            if (sut.ipy.value12 && !this.fhi()) {
                a.qcr("history", this.language.ygy, this.upk.mcq("btn_h"), this.epp, this.fid.ygy)
            }
            if (sut.ipy.value36 && !this.fhi()) {
                a.qcr("statistic", this.language.zqw, this.upk.mcq("btn_st"), this.xcy, this.fid.zqw)
            }
            a.xgx()
        }
    };
    this.jys = function() {
        this.gzz = new mfg();
        this.gzz.ard(this.vrz.hox.fkh, null, this.context2D);
        this.gzz.parent = this;
        this.gzz.rzc = this.upk.mcq("control_back");
        this.gzz.bhw = this.upk.mcq("chipPanel");
        this.gzz.zoc = this.upk.mcq("chipFrame");
        this.gzz.bhp(this.vrz.hox);
        this.gzz.wne(this.style.hox);
        this.gzz.yee(this.gvf, 0)
    };
    this.dtu = function() {
        var a = new nmn();
        a.ard(this.vrz.dgp.fkh, null, this.context2D);
        a.parent = this;
        a.rzc = this.upk.mcq("control_back");
        a.uvh(this.vrz.dgp);
        a.wne(this.style.dgp);
        a.jit(this.vrz.dgp);
        a.gyx(false);
        this.njg.mpd("buttonpanel", a)
    };
    this.rau = function() {
        this.aka = new ajw();
        this.aka.ard(this.vrz.aka.fkh, null, this.context2D);
        this.aka.jit(this.vrz.aka);
        this.ccy = new ajw();
        this.ccy.ard(this.vrz.ccy.fkh, null, this.context2D);
        this.ccy.jit(this.vrz.ccy);
        this.fiw = new ajw();
        this.fiw.ard(this.vrz.fiw.fkh, null, this.context2D);
        this.fiw.jit(this.vrz.fiw);
        this.jis = [this.aka, this.ccy, this.fiw];
        for (var b = 0, a = this.jis.length; b < a; b++) {
            this.jis[b].parent = this;
            this.jis[b].id = b;
            this.jis[b].gij = this.qds;
            this.jis[b].xtj = this.upk.mcq("betinfo");
            this.jis[b].wne(this.style.fzn)
        }
    };
    this.xvi = function() {
        this.blk = new tsg();
        this.blk.ard(this.vrz.blk.fkh, null, this.context2D);
        this.blk.parent = this;
        this.blk.gij = this.qds;
        this.blk.wne(this.style.blk);
        this.blk.jit(this.vrz.blk)
    };
    this.cyj = function() {
        this.jzn = new ibc();
        this.jzn.ard(this.vrz.jzn.fkh, this.context2D);
        this.jzn.hkk = this.upk.mcq("shield");
        this.jzn.parent = this;
        this.jzn.wne(this.style.jzn);
        this.jzn.jit(this.vrz.jzn);
        this.jzn.osi(this.ybc, this.eqo)
    };
    this.qof = function() {
        if (this.upi === false) {
            this.taz = new xxx();
            this.taz.ard(this.vrz.taz.fkh, null, this.context2D);
            this.taz.parent = this;
            this.taz.hkk = this.upk.mcq("cardback");
            this.taz.wne(this.style.taz);
            this.taz.jit(this.vrz.taz);
            this.taz.gyx(false)
        } else {
            this.taz = new bmd();
            this.taz.ard(this.vrz.zlv.fkh, this.ajg);
            this.taz.parent = this;
            this.taz.hkk = this.upk.mcq("cardback");
            this.taz.wne(this.style.taz);
            this.taz.jit(this.vrz.zlv);
            this.taz.gyx(false)
        }
    };
    this.ggc = function() {
        this.lxm = new kgv();
        this.lxm.ard(this.vrz.lxm.fkh, null, this.context2D);
        this.lxm.parent = this;
        this.lxm.wne(this.style.lxm);
        this.lxm.jit(this.vrz.lxm);
        this.lxm.gyx(false)
    };
    this.xai = function() {
        this.gvf = [];
        if (this.fhi() === false && this.dns != "") {
            this.gvf.push(this.dns)
        }
        this.gvf.push(this.language.ulo + " " + this.gje(this.ybc) + " " + this.language.ayb + " " + this.gje(this.eqo));
        this.gvf.push(this.language.zce);
        this.gvf.push(this.language.gaj)
    };
    this.wyf = function(b, a, c) {
        this.kiy = true;
        this.kex = false;
        this.state = b;
        this.jma = a;
        clearInterval(this.boi);
        if (this.lni) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.xgq = 0
            }
            if (this.upk.yet === true) {
                this.trj(this.lah[this.xgq])
            } else {
                this.dyw((this.lah[this.xgq] === 0))
            }
        }
        this.bhm();
        this.cun();
        this.gzz.knk.pck("creditd", "#xsy", [this.jzz]);
        this.gzz.knk.pck("betd", "#xsy", [this.nbh]);
        this.uka();
        this.svi();
        window.zxh(this.fvz)
    };
    this.fvz = function() {
        sut.yxh.unb();
        sut.yxh.kwb(sut.yxh.jma);
        sut.yxh.cps(false);
        if (sut.zdt.scy === sut.os.knd && sut.zdt.elu !== sut.qfs.aec) {
            sut.yxh.wlc([{
                adk: sut.ife.zkc
            }])
        } else {
            sut.yxh.mqf(sut.yxh.state)
        }
        sut.yxh.hzt();
        sut.yxh.jrz = true;
        sut.yxh.nht();
        if (sut.ipy.value37 && !sut.yxh.fhi()) {
            sut.yxh.cda()
        }
    };
    this.hgc = function() {
        if (this.wsu) {
            this.eut();
            this.jdf()
        } else {
            this.zuf()
        }
    };
    this.eut = function() {
        this.canvas.width = 0;
        if (this.jiw === false) {
            this.uyh.style.marginTop = (-this.height / 2 + this.iow()) + "px";
            this.uyh.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.uyh.style.left = "0px";
            this.uyh.style.top = "0px";
            this.uyh.style.marginTop = ((this.jio - this.height) / 2 + this.iow()) + "px";
            this.uyh.style.marginLeft = ((this.uyt - this.width) / 2) + "px"
        }
        this.uyh.style.width = (this.width > this.uyt) ? this.uyt + "px" : this.width + "px";
        this.uyh.style.height = (this.height > this.jio) ? this.jio + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.iwg) {
            this.iwg.style.width = this.width + "px";
            this.iwg.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.jdf = function() {
        this.ljv();
        if (!this.azf) {
            this.uym();
            this.pai();
            if (this.vbb()) {
                this.eof()
            }
        }
        if (this.vrz.ryi) {
            this.hcv();
            this.oio()
        }
        if (this.azf) {
            this.llz()
        }
        this.bty();
        this.fnv();
        this.zia();
        this.nrr();
        this.bpq();
        this.kjx();
        if (this.azf) {
            this.xpq()
        }
    };
    this.ljv = function() {
        if (this.gzz) {
            this.gzz.phx(this.vrz.hox.fkh);
            this.gzz.jit(this.vrz.hox)
        }
    };
    this.uym = function() {
        if (this.fcz) {
            this.fcz.phx(this.vrz.lrl.fkh);
            this.fcz.jit(this.vrz.lrl)
        }
    };
    this.nrr = function() {
        var a = this.njg.hie("buttonpanel");
        if (a) {
            a.phx(this.vrz.dgp.fkh);
            a.jit(this.vrz.dgp);
            if (a.npz()) {
                a.ztf(this.mrq[this.jrx])
            }
        }
    };
    this.bty = function() {
        if (this.aka) {
            this.aka.phx(this.vrz.aka.fkh);
            this.aka.jit(this.vrz.aka)
        }
        if (this.ccy) {
            this.ccy.phx(this.vrz.ccy.fkh);
            this.ccy.jit(this.vrz.ccy)
        }
        if (this.fiw) {
            this.fiw.phx(this.vrz.fiw.fkh);
            this.fiw.jit(this.vrz.fiw)
        }
    };
    this.fnv = function() {
        if (this.blk) {
            this.blk.phx(this.vrz.blk.fkh);
            this.blk.jit(this.vrz.blk)
        }
    };
    this.zia = function() {
        if (this.jzn) {
            this.jzn.phx(this.vrz.jzn.fkh);
            this.jzn.jit(this.vrz.jzn)
        }
    };
    this.bpq = function() {
        if (this.taz) {
            if (this.upi === false) {
                this.taz.phx(this.vrz.taz.fkh);
                this.taz.jit(this.vrz.taz)
            } else {
                this.taz.phx(this.vrz.zlv.fkh);
                this.taz.jit(this.vrz.zlv)
            }
        }
    };
    this.kjx = function() {
        if (this.lxm) {
            this.lxm.phx(this.vrz.lxm.fkh);
            this.lxm.jit(this.vrz.lxm)
        }
    };
    this.xpq = function() {};
    this.jju = function(a) {
        this.vrz = this.cki(a);
        this.width = this.vrz.canvas.fkh.width;
        this.height = this.vrz.canvas.fkh.height
    };
    this.cki = function(a) {
        this.vuj = a;
        if (a == sut.vrz.pmr) {
            return new vko()
        } else {
            if (a == sut.vrz.zvz) {
                return new nwe()
            } else {
                if (a == sut.vrz.smc) {
                    return new bii()
                } else {
                    if (a == sut.vrz.mwo) {
                        return new enp()
                    } else {
                        if (a == sut.vrz.hkc) {
                            return new xff()
                        } else {
                            if (a == sut.vrz.vou) {
                                return new jrf()
                            } else {
                                if (a == sut.vrz.qzd) {
                                    return new cwh()
                                } else {
                                    if (a == sut.vrz.zmt) {
                                        return new oqk()
                                    } else {
                                        if (a == sut.vrz.wan) {
                                            return new iyh()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.urn = function() {
        this.style = new yar();
        this.uhu = this.style.uhu
    };
    this.esj = function() {
        qmh.prototype.esj.call(this);
        if (this.idd() === true) {
            this.upk.zvm(true)
        }
    };
    this.ruh = function() {
        var b = sut.ipy.value30 + "/basic/images/" + this.vrz.type + "/";
        for (var a = 0; a < sut.ipy.value5.length; a++) {
            this.upk.ksn(sut.ipy.value5[a], b + "btn_" + sut.ipy.value5[a] + ".png")
        }
    };
    this.pek = function() {
        var b = sut.ipy.value30 + "/basic/sounds/";
        this.upk.plc("silence", null, false, b + "silence");
        this.upk.plc("btn", null, false, b + "btn");
        this.upk.plc("audioon", null, false, b + "audio_on");
        this.upk.plc("collect", null, false, this.apr + "collect");
        this.upk.plc("turn", null, false, this.apr + "turn");
        this.upk.plc("deal1", null, false, this.apr + "deal");
        this.upk.plc("deal2", null, false, this.apr + "deal");
        this.upk.plc("fast_turn", null, false, this.apr + "fast_turn");
        this.upk.plc("fast_deal1", null, false, this.apr + "fast_deal");
        this.upk.plc("fast_deal2", null, false, this.apr + "fast_deal");
        this.upk.plc("jeton", null, false, this.apr + "jeton");
        this.upk.plc("split", null, false, this.apr + "split");
        this.upk.plc("blackjack", null, false, this.apr + "blackjack");
        this.upk.plc("bust", null, false, this.apr + "bust");
        this.upk.plc("insurance", this.znk, false, this.apr + "insurance");
        this.upk.plc("insurancepays", this.ejp, false, this.apr + "insurance_pays");
        this.upk.plc("placebets", null, false, this.apr + "place_bets");
        this.upk.plc("dealerwin", null, false, this.apr + "dealer_wins");
        this.upk.plc("limit", null, false, this.apr + "limit");
        for (var a = 0; a <= 21; a++) {
            this.upk.plc("number" + a, null, false, this.apr + a)
        }
    };
    this.uco = function() {
        var a = this.kyt + this.vrz.type + "/";
        this.upk.ksn("icon", a + "icon_out.png");
        this.upk.ksn("back", a + "main_green.jpg");
        this.upk.ksn("h_l", a + "highlight_l_green.png");
        this.upk.ksn("h_c", a + "highlight_c_green.png");
        this.upk.ksn("h_r", a + "highlight_r_green.png");
        this.upk.ksn("betinfo", a + "bet_green.png");
        this.upk.ksn("control_back", a + "control.png");
        this.upk.ksn("cards", a + "carddeck.png");
        this.upk.ksn("cardback", a + "cardback.png");
        this.upk.ksn("blackjack", a + "blackjack.jpg");
        this.upk.ksn("shield", a + "shield.png");
        this.upk.ksn("chipPanel", a + "chipPanel.png");
        this.upk.ksn("help", a + "help.png");
        this.upk.fsg(a, "gui_desktop_v25.json")
    };
    this.efz = function() {
        this.ofw = new lqt().ard(this, sut.ipy.value6)
    };
    this.bco = function() {
        this.ofw = new dmr().ard(this, sut.ipy.value6)
    };
    this.ykp = function(c) {
        if (sut.yxh.xwm() && !sut.yxh.kex) {
            var b = sut.yxh.context2D;
            b.save();
            if (c != null && c.length > 0) {
                b.beginPath();
                for (var d = 0, a = c.length; d < a; d++) {
                    b.rect(c[d].x, c[d].y, c[d].width, c[d].height)
                }
                b.closePath();
                b.clip()
            }
            b.drawImage(sut.yxh.upk.mcq("back"), sut.yxh.vrz.yxh.fkh.x, sut.yxh.vrz.yxh.fkh.y);
            for (var d = 0, a = sut.yxh.jis.length; d < a; d++) {
                if (sut.yxh.jis[d].siq) {
                    b.drawImage(sut.yxh.upk.mcq("h_" + ((d == 0) ? "r" : (d == 1) ? "c" : "l")), sut.yxh.vrz.mju[d].x, sut.yxh.vrz.mju[d].y)
                }
            }
            for (var d = 0, a = sut.yxh.jis.length; d < a; d++) {
                sut.yxh.jis[d].nht()
            }
            if (sut.yxh.blk) {
                sut.yxh.blk.nht()
            }
            if (sut.yxh.taz) {
                sut.yxh.taz.nht()
            }
            if (sut.yxh.lxm) {
                sut.yxh.lxm.nht()
            }
            b.restore()
        }
    };
    this.nht = function(k, g, m, d) {
        if (sut.yxh.xwm() && (!sut.yxh.kex || sut.yxh.azf)) {
            var b = (k != null && g != null && m != null && d != null),
                j = (b === true) ? new mhd(k, g, m, d) : new mhd(sut.yxh.vrz.yxh.fkh.x, sut.yxh.vrz.yxh.fkh.y, sut.yxh.vrz.yxh.fkh.width, sut.yxh.vrz.yxh.fkh.height),
                o = sut.yxh.context2D,
                l = (sut.yxh.dni === true) ? sut.yxh.style.yxh.wrb : sut.yxh.style.yxh.backgroundColor,
                a = sut.yxh.njg.hie("stats"),
                p = sut.yxh.njg.hie("history"),
                n = sut.yxh.njg.hie("topb"),
                f = sut.yxh.njg.hie("topi"),
                e = sut.yxh.njg.hie("buttonpanel");
            sut.yxh.hvv = false;
            o.save();
            if (b) {
                o.beginPath();
                o.rect(k, g, m, d);
                o.closePath();
                o.clip()
            }
            o.clearRect(0, 0, sut.yxh.width, sut.yxh.height);
            if (sut.yxh.vrz.efi) {
                sut.zdt.inh(sut.yxh.context2D, sut.yxh.vrz.yxh.fkh.x - sut.yxh.vrz.yxh.gld, sut.yxh.vrz.yxh.fkh.y - sut.yxh.vrz.yxh.gld, sut.yxh.vrz.yxh.fkh.width + 2 * sut.yxh.vrz.yxh.gld, sut.yxh.vrz.yxh.fkh.height + 2 * sut.yxh.vrz.yxh.gld, l, 1)
            }
            if (p) {
                p.nht()
            }
            if (f) {
                f.nht()
            }
            o.drawImage(sut.yxh.upk.mcq("back"), sut.yxh.vrz.yxh.fkh.x, sut.yxh.vrz.yxh.fkh.y);
            if (sut.yxh.jzn) {
                sut.yxh.jzn.nht()
            }
            for (var c in sut.yxh.jis) {
                if (sut.yxh.jis[c].siq) {
                    o.drawImage(sut.yxh.upk.mcq("h_" + ((c == 0) ? "r" : (c == 1) ? "c" : "l")), sut.yxh.vrz.mju[c].x, sut.yxh.vrz.mju[c].y)
                }
            }
            for (var c in sut.yxh.jis) {
                sut.yxh.jis[c].nht()
            }
            if (sut.yxh.gzz) {
                sut.yxh.gzz.nht()
            }
            if (sut.yxh.blk) {
                sut.yxh.blk.nht()
            }
            if (a) {
                a.nht()
            }
            if (e) {
                e.nht()
            }
            if (sut.yxh.fcz) {
                sut.yxh.fcz.nht()
            }
            if (sut.yxh.upi === false && sut.yxh.taz) {
                sut.yxh.taz.nht()
            }
            if (sut.yxh.lxm) {
                sut.yxh.lxm.nht()
            }
            if (n) {
                n.nht()
            }
            o.restore();
            if (this.upi === true) {
                this.ztz()
            }
        }
    };
    this.sai = function(a, b) {
        this.hvv = true;
        sut.zdt.inh(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.ztz = function() {
        var a = this.ajg;
        if (this.xwm()) {
            a.save();
            if (this.taz) {
                this.taz.nht()
            }
            a.restore()
        }
    };
    this.hqa = function() {
        this.ucs(this.jzz, false);
        this.zdv(this.ayu(), false)
    };
    this.mqf = function(d) {
        this.lek = true;
        if (d == sut.iou.gcn.mkt || d == sut.iou.gcn.tyg) {
            this.etm();
            this.jyt(true);
            this.gzz.rkn(true);
            this.gzz.rgf(true);
            this.gzz.knk.pck("info", "#eiv", [0]);
            this.mzs();
            this.nht()
        } else {
            if (d >= sut.iou.gcn.isw && d <= sut.iou.gcn.azy) {
                if (d != sut.iou.gcn.azy) {
                    this.gzz.yhj(true)
                }
                for (var c = 0, a = this.jis.length; c < a; c++) {
                    this.jis[c].pqn = this.hpj[c];
                    this.jis[c].iag = this.aql[c];
                    for (var b = 0; b < sut.iou.rxh; b++) {
                        this.jis[c].lqe(b, this.kbl[c * sut.iou.rxh + b]);
                        this.jis[c].dio[b] = this.fab[c * sut.iou.rxh + b]
                    }
                }
                this.blk.lqe(this.fds);
                this.nht();
                if (d == sut.iou.gcn.isw) {
                    if (this.blk.fxp()) {
                        if (this.lni) {
                            this.upk.vjc("insurance")
                        } else {
                            setTimeout(this.znk, 1000)
                        }
                        this.gzz.knk.pck("info", "#ijc", [this.language.pws, true])
                    } else {
                        this.wrx()
                    }
                } else {
                    if (d == sut.iou.gcn.fde || d == sut.iou.gcn.vft) {
                        this.wrx()
                    } else {
                        if (d == sut.iou.gcn.grb || d == sut.iou.gcn.dij || d == sut.iou.gcn.owl) {
                            this.lxx()
                        } else {
                            if (d == sut.iou.gcn.sju) {
                                this.myw();
                                if (this.jrx == sut.iou.yay) {
                                    if (this.pfj) {
                                        this.dzc(this.jrx, true);
                                        this.ofw.zdc(this.jrx)
                                    } else {
                                        this.uwv();
                                        this.wrx()
                                    }
                                } else {
                                    if (this.mrq[this.jrx] == sut.iou.gcn.sju || this.mrq[this.jrx] == sut.iou.gcn.BJ) {
                                        if (this.lni) {
                                            this.upk.vjc("insurance")
                                        } else {
                                            setTimeout(this.znk, 1000)
                                        }
                                        this.gzz.knk.pck("info", "#ijc", [this.language.pws, true])
                                    } else {
                                        while (this.jrx < sut.iou.yay && this.mrq[this.jrx] !== sut.iou.gcn.sju) {
                                            this.myw()
                                        }
                                        if (this.jrx == sut.iou.yay) {
                                            if (this.pfj) {
                                                this.dzc(this.jrx, true);
                                                this.ofw.zdc(this.jrx)
                                            } else {
                                                this.uwv();
                                                if (this.mrq[this.jrx] == sut.iou.gcn.BJ) {
                                                    this.yme()
                                                } else {
                                                    this.wrx()
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (d == sut.iou.gcn.azy) {
                                    this.bvz()
                                }
                            }
                        }
                    }
                }
            }
        }
        this.hqa()
    };
    this.trq = function() {
        this.lek = false;
        this.abi = true;
        this.gzz.yhj(true);
        for (var b = 0, a = this.jis.length; b < a; b++) {
            this.jis[b].rgg = this.fab[b * sut.iou.rxh]
        }
        this.ucs(this.jzz, false);
        this.zdv(this.nbh, false);
        this.gzz.knk.pck("info", "#ijc", [this.language.osx, true]);
        this.nht();
        this.sjt = this.hbt(this.kbl[this.jrx * sut.iou.yay + this.umo]) - this.jis[this.jrx].hbt(this.umo);
        this.jgj()
    };
    this.xuz = function() {
        this.lek = false;
        this.abi = true;
        this.gzz.yhj(true);
        this.ped(true);
        this.sjt = this.hbt(this.kbl[this.jrx * sut.iou.yay + this.umo]) - this.jis[this.jrx].hbt(this.umo);
        this.jgj()
    };
    this.qsy = function() {
        this.lek = false;
        this.abi = true;
        this.gzz.yhj(true);
        this.ped(true);
        this.lxx()
    };
    this.bbv = function() {
        var a = this.umo + 1;
        this.lek = false;
        this.abi = true;
        this.gzz.yhj(true);
        this.ucs(this.jzz, false);
        this.zdv(this.nbh, false);
        this.ped(true);
        this.jis[this.jrx].pqn = this.hpj[this.jrx];
        if (this.hpj[this.jrx] == 2 && this.umo == 0) {
            this.jis[this.jrx].kbl[this.umo + 1].length = 0;
            this.jis[this.jrx].lqe(this.umo + 2, this.kbl[this.jrx * sut.iou.rxh + this.umo + 2]);
            this.jis[this.jrx].dio[this.umo + 2] = this.fab[this.jrx * sut.iou.rxh + this.umo + 2]
        }
        this.jis[this.jrx].kbl[this.umo].pop();
        this.jis[this.jrx].dio[a] = this.fab[this.jrx * sut.iou.rxh + a];
        this.jis[this.jrx].jft(a, this.kbl[(this.jrx * sut.iou.yay) + a][this.jis[this.jrx].hbt(a)], false);
        this.upk.vjc("jeton");
        this.nht();
        this.kti = 2;
        this.sjt = this.hbt(this.kbl[this.jrx * sut.iou.yay + this.umo]) - this.jis[this.jrx].hbt(this.umo);
        if (this.sjt > 0) {
            this.bob = setTimeout(this.jgj, 500)
        }
    };
    this.ehp = function() {
        this.lek = false;
        this.abi = true;
        this.gzz.yhj(true);
        this.ucs(this.jzz, false);
        this.zdv(this.nbh, false);
        this.ped(true);
        this.jis[this.jrx].dio[this.umo] = this.fab[this.jrx * sut.iou.rxh + this.umo];
        this.upk.vjc("jeton");
        this.nht();
        this.sjt = this.hbt(this.kbl[this.jrx * sut.iou.yay + this.umo]) - this.jis[this.jrx].hbt(this.umo);
        if (this.sjt > 0) {
            this.bob = setTimeout(this.jgj, 500)
        }
    };
    this.jmo = function() {
        this.lek = false;
        this.abi = true;
        this.gzz.yhj(true);
        this.ped(true);
        this.sjt = this.hbt(this.kbl[this.jrx * sut.iou.yay + this.umo]) - this.jis[this.jrx].hbt(this.umo);
        this.jgj()
    };
    this.nmh = function() {
        this.lek = false;
        this.abi = true;
        this.gzz.yhj(true);
        this.ucs(this.jzz, false);
        this.zdv(this.nbh, false);
        this.ped(true);
        if (this.aql[this.jrx] > 0) {
            this.jis[this.jrx].iag = this.aql[this.jrx];
            this.upk.vjc("jeton");
            this.nht()
        }
        this.myw();
        if (this.jrx == sut.iou.yay) {
            if (this.pfj) {
                this.dzc(this.jrx, true);
                this.ofw.zdc(this.jrx)
            } else {
                this.uwv();
                if (this.mrq[this.jrx] == sut.iou.gcn.BJ) {
                    this.yme()
                } else {
                    this.wrx()
                }
            }
        } else {
            this.xpp();
            this.ugq();
            this.wec()
        }
    };
    this.roy = function() {
        this.lek = false;
        this.abi = true;
        this.bvz()
    };
    this.hul = function() {
        if (this.win > 0 || this.ctz > 0) {
            this.nqf()
        } else {
            this.bsr()
        }
    };
    this.sbg = function(b, d) {
        var c = this.njg.hie("stats"),
            a = this.njg.hie("history");
        if (b == "authfailed") {
            b = this.language.lgr
        } else {
            if (b.toLowerCase().indexOf("active") == 0) {
                b = this.language.hfa
            }
        }
        if (this.vir) {
            if (!this.azf) {
                if (c && c.npz()) {
                    c.rkn(false);
                    c.gyx(false)
                }
                this.cps(false);
                if (this.gzz != null) {
                    this.gzz.knk.pck("info", "#ijc", [b, true]);
                    this.uzm()
                } else {
                    this.ikk(b)
                }
            } else {
                this.stop();
                this.llz();
                if (a) {
                    a.fym(true)
                }
                this.wvg(this.aal(b))
            }
        } else {
            this.ikk(b)
        }
        if (d) {
            if (!this.azf && this.ofw.mdw.fun == 0 && sut.ipy.value46 > 0) {
                this.nel((this.wsu) ? sut.ipy.value71 : sut.ipy.value47)
            } else {
                setTimeout(this.nst, sut.ipy.value10)
            }
        }
    };
    this.rft = function(a) {
        if (a == sut.ife.tos) {
            this.gzz.knk.pck("info", "#ijc", [this.language.wsl, true])
        } else {
            if (a == sut.ife.bej) {
                this.gzz.knk.pck("info", "#ijc", [this.language.zub + " " + this.ybc, true])
            } else {
                if (a >= sut.ife.boe) {
                    this.gzz.knk.pck("info", "#yke");
                    this.gzz.rgf(false);
                    this.gzz.rkn(false);
                    this.jyt(false)
                }
            }
        }
        if (a < sut.ife.boe) {
            this.abi = true;
            this.jyt(true)
        } else {
            this.wlc([{
                adk: a
            }])
        }
    };
    this.slv = function(a) {
        this.jzz = a;
        this.ucs(a, true);
        if (this.jzz > 0) {
            this.umj()
        } else {
            this.etm()
        }
    };
    this.nzf = function() {
        if (this.pfj) {
            this.dzc(this.jrx, true);
            this.ofw.zdc(this.jrx)
        } else {
            this.uwv();
            this.wrx()
        }
    };
    this.jgj = function() {
        var a = null;
        sut.yxh.jyt(false);
        sut.yxh.gzz.yhj(false);
        if (sut.yxh.jrx < sut.iou.yay) {
            a = sut.yxh.jis[sut.yxh.jrx].srw(sut.yxh.umo)
        } else {
            a = sut.yxh.blk.qeg()
        }
        if ((sut.yxh.sjt & 1) == 0) {
            if (sut.yxh.tvk === true) {
                sut.yxh.upk.vjc("fast_deal1")
            } else {
                sut.yxh.upk.vjc("deal1")
            }
        } else {
            if (sut.yxh.tvk === true) {
                sut.yxh.upk.vjc("fast_deal2")
            } else {
                sut.yxh.upk.vjc("deal2")
            }
        }
        sut.yxh.taz.start(a)
    };
    this.arl = function() {
        this.wyj()
    };
    this.wyj = function() {
        if (this.jrx < sut.iou.yay) {
            this.jis[this.jrx].jft(this.umo, this.kbl[(this.jrx * sut.iou.yay) + this.umo][this.jis[this.jrx].hbt(this.umo)], true)
        } else {
            this.blk.jft(this.fds[this.blk.hbt()], true)
        }
    };
    this.dvu = function() {
        if (sut.yxh.state == sut.iou.gcn.isw) {
            var b = 100,
                a = sut.yxh.jrx;
            sut.yxh.tqw();
            if (sut.yxh.jrx == a) {
                sut.yxh.uwv()
            }
            if ((sut.yxh.jrx < sut.iou.yay && sut.yxh.sjt > 0) || (sut.yxh.jrx == sut.iou.yay && sut.yxh.sjt > 1)) {
                if (sut.yxh.jrx < sut.iou.yay) {
                    sut.yxh.ayi = setTimeout(sut.yxh.jgj, b)
                } else {
                    sut.yxh.sjt--;
                    sut.yxh.etb()
                }
            } else {
                if (sut.yxh.jrx == sut.iou.yay) {
                    sut.yxh.uwv();
                    if (sut.yxh.blk.fxp()) {
                        if (sut.yxh.lni) {
                            sut.yxh.upk.vjc("insurance")
                        } else {
                            setTimeout(sut.yxh.znk, 1000)
                        }
                        sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.pws, true])
                    } else {
                        sut.yxh.bob = setTimeout(sut.yxh.wrx, 500)
                    }
                }
            }
        } else {
            sut.yxh.sjt--;
            if (sut.yxh.sjt > 0) {
                if (sut.yxh.jrx < sut.iou.yay) {
                    sut.yxh.ayi = setTimeout(sut.yxh.jgj, 100)
                } else {
                    sut.yxh.etb()
                }
            } else {
                if (sut.yxh.jrx == sut.iou.yay && sut.yxh.blk.hbt() >= 1) {
                    sut.yxh.etb()
                } else {
                    if (sut.yxh.state == sut.iou.gcn.fde) {
                        sut.yxh.wrx()
                    } else {
                        if (sut.yxh.state == sut.iou.gcn.vft) {
                            sut.yxh.kti--;
                            if (sut.yxh.kti > 0) {
                                sut.yxh.umo++;
                                sut.yxh.sjt = sut.yxh.hbt(sut.yxh.kbl[sut.yxh.jrx * sut.iou.yay + sut.yxh.umo]) - sut.yxh.jis[sut.yxh.jrx].hbt(sut.yxh.umo);
                                sut.yxh.ayi = setTimeout(sut.yxh.jgj, 200)
                            } else {
                                sut.yxh.umo--;
                                sut.yxh.wrx()
                            }
                        } else {
                            if (sut.yxh.state == sut.iou.gcn.dij) {
                                sut.yxh.upk.vjc("number" + sut.yxh.jis[sut.yxh.jrx].sex(sut.yxh.umo));
                                sut.yxh.bob = setTimeout(sut.yxh.lxx, 1000)
                            } else {
                                if (sut.yxh.state == sut.iou.gcn.owl) {
                                    sut.yxh.upk.vjc("bust");
                                    sut.yxh.bob = setTimeout(sut.yxh.lxx, 1000)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.lxx = function() {
        var a = sut.yxh.ply(sut.yxh.jrx);
        if (a > 0) {
            sut.yxh.umo = a
        } else {
            sut.yxh.tqw()
        }
        if (sut.yxh.jrx == sut.iou.yay) {
            sut.yxh.dzc(sut.yxh.jrx, true);
            sut.yxh.ofw.zdc(sut.yxh.jrx)
        } else {
            if (sut.yxh.mrq[sut.yxh.jrx] == sut.iou.gcn.BJ) {
                sut.yxh.yme()
            } else {
                sut.yxh.wrx();
                sut.yxh.dzc(sut.yxh.jrx, true)
            }
        }
    };
    this.bvz = function() {
        if (this.blk.hbt() >= 1) {
            this.sjt = this.hbt(this.fds) - this.blk.hbt();
            this.bob = setTimeout(this.etb, 500)
        } else {
            this.upk.vjc("dealerwin");
            this.bob = setTimeout(this.whn, 1500)
        }
    };
    this.wrx = function() {
        if (sut.yxh.mrq[sut.yxh.jrx] != sut.iou.gcn.BJ) {
            sut.yxh.upk.vjc("number" + sut.yxh.jis[sut.yxh.jrx].sex(sut.yxh.umo))
        }
        sut.yxh.usr()
    };
    this.etb = function() {
        var a = sut.yxh.blk.hbt(),
            b = 0;
        clearTimeout(sut.yxh.bob);
        if (a >= 2) {
            b = sut.yxh.blk.sex();
            if (b > 21) {
                sut.yxh.upk.vjc("bust")
            } else {
                if (b == 21 && a == 2) {
                    sut.yxh.upk.vjc("blackjack")
                } else {
                    sut.yxh.upk.vjc("number" + sut.yxh.blk.sex())
                }
            }
            if (sut.yxh.sjt > 0) {
                sut.yxh.bob = setTimeout(sut.yxh.jgj, 800)
            } else {
                sut.yxh.whn()
            }
        } else {
            sut.yxh.ayi = setTimeout(sut.yxh.jgj, 100)
        }
    };
    this.usr = function() {
        if (this.mrq[this.jrx] == sut.iou.gcn.BJ || this.mrq[this.jrx] == sut.iou.gcn.grb) {
            this.dzc(this.jrx, true);
            this.nht();
            this.bob = setTimeout(this.yme, 1000)
        } else {
            this.xpp();
            this.ugq();
            this.bob = setTimeout(this.wec, 800)
        }
    };
    this.xpp = function() {
        var a = sut.yxh.njg.hie("buttonpanel");
        sut.yxh.dzc(sut.yxh.jrx, true);
        sut.yxh.pkp(sut.yxh.mrq[sut.yxh.jrx]);
        if (a) {
            a.ztf(sut.yxh.mrq[sut.yxh.jrx]);
            a.gyx(true, true)
        }
    };
    this.ugq = function() {
        this.gzz.knk.pck("info", "#yke");
        this.bol(this.jrx, true)
    };
    this.lwh = function() {};
    this.ped = function(a) {
        var b = this.njg.hie("buttonpanel");
        this.gzz.knk.pck("info", "#yke");
        if (a) {
            if (b) {
                b.rkn(false);
                b.gyx(false, true)
            }
            this.bol(-1, true)
        }
    };
    this.dzc = function(c, d) {
        for (var b = 0, a = this.jis.length; b < a; b++) {
            this.jis[b].siq = (b == c)
        }
        if (d && d === true) {
            this.nht()
        }
    };
    this.bol = function(c, d) {
        for (var b = 0, a = this.jis.length; b < a; b++) {
            this.jis[b].oha = (b == c)
        }
        if (d && d === true) {
            this.nht()
        }
    };
    this.wec = function() {
        if (sut.yxh.jrx < sut.iou.yay) {
            sut.yxh.njg.pck("buttonpanel", "#rkn", [true]);
            sut.yxh.jyt(true);
            sut.yxh.gzz.yhj(true)
        }
    };
    this.znk = function() {
        var a = sut.yxh.njg.hie("buttonpanel");
        sut.yxh.dzc(sut.yxh.jrx, true);
        sut.yxh.pkp(sut.yxh.mrq[sut.yxh.jrx]);
        if (a) {
            a.ztf(sut.yxh.mrq[sut.yxh.jrx]);
            a.rkn(true);
            a.gyx(true, true)
        }
        sut.yxh.jyt(true);
        sut.yxh.gzz.yhj(true);
        sut.yxh.ugq()
    };
    this.whn = function() {
        for (var d = 0, b = sut.yxh.ynv.length; d < b; d++) {
            if (sut.yxh.fab[d] > 0) {
                var c = Math.floor(d / sut.iou.rxh),
                    a = d - (c * sut.iou.yay);
                sut.yxh.jis[c].gvx(a, sut.yxh.ynv[d])
            }
        }
        for (var d = 0, b = sut.yxh.jis.length; d < b; d++) {
            sut.yxh.jis[d].tvj = true
        }
        if (sut.yxh.win > 0) {
            sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.aal(sut.yxh.language.tex) + ": " + sut.yxh.gje(sut.yxh.win), true])
        }
        sut.yxh.nht();
        sut.yxh.jla()
    };
    this.jla = function() {
        this.jrx = 0;
        this.umo = 0;
        if (this.fab[0] == 0) {
            this.kxf()
        }
        if (this.jzh() && (this.blk.hbt() == 2 && this.blk.sex() == 21)) {
            this.ayi = setTimeout(this.yrz, 1000)
        } else {
            this.ayi = setTimeout(this.ejp, 1000)
        }
    };
    this.yrz = function() {
        sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.afd + " " + sut.yxh.gje(sut.yxh.ctz), true]);
        if (sut.yxh.lni) {
            sut.yxh.upk.vjc("insurancepays")
        } else {
            setTimeout(sut.yxh.ejp, 1000)
        }
    };
    this.lbp = function() {
        var a = sut.yxh.njg.hie("buttonpanel");
        if (sut.yxh.state >= sut.iou.gcn.isw && sut.yxh.state <= sut.iou.gcn.owl) {
            sut.yxh.pkp(sut.yxh.mrq[sut.yxh.jrx]);
            if (a) {
                a.ztf(sut.yxh.mrq[sut.yxh.jrx]);
                a.rkn(true);
                a.gyx(true, true)
            }
            sut.yxh.ugq()
        } else {
            sut.yxh.gzz.knk.pck("info", "#nlw")
        }
    };
    this.jzh = function() {
        for (var b = 0, a = this.jis.length; b < a; b++) {
            if (this.jis[b].iag > 0) {
                return true
            }
        }
        return false
    };
    this.ejp = function() {
        if (sut.yxh.jrx < sut.iou.yay) {
            var f = sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo],
                e = sut.yxh.jis[sut.yxh.jrx].ynv[sut.yxh.umo],
                d = sut.yxh.jis[sut.yxh.jrx].iag,
                g = sut.yxh.tju[sut.yxh.jrx];
            var b = new mhd(sut.yxh.jis[sut.yxh.jrx].x + sut.yxh.jis[sut.yxh.jrx].foo()[sut.yxh.jis[sut.yxh.jrx].pqn][sut.yxh.umo].x, sut.yxh.jis[sut.yxh.jrx].y + sut.yxh.jis[sut.yxh.jrx].foo()[sut.yxh.jis[sut.yxh.jrx].pqn][sut.yxh.umo].y, sut.yxh.jis[sut.yxh.jrx].foo()[sut.yxh.jis[sut.yxh.jrx].pqn][sut.yxh.umo].width, sut.yxh.jis[sut.yxh.jrx].foo()[sut.yxh.jis[sut.yxh.jrx].pqn][sut.yxh.umo].height);
            var a = {
                value: (e > 0) ? e - f : -f,
                mby: e,
                rect: b,
                som: sut.yxh.snj
            };
            if (d > 0 && sut.yxh.umo == 0) {
                b = new mhd(sut.yxh.jis[sut.yxh.jrx].x + sut.yxh.jis[sut.yxh.jrx].vks().x, sut.yxh.jis[sut.yxh.jrx].y + sut.yxh.jis[sut.yxh.jrx].vks().y, sut.yxh.jis[sut.yxh.jrx].vks().width, sut.yxh.jis[sut.yxh.jrx].vks().height);
                var c = {
                    value: g - d,
                    mby: (g > 0) ? g : 0,
                    rect: b,
                    som: sut.yxh.abq
                };
                if (e != f) {
                    sut.yxh.lxm.start([c, a])
                } else {
                    sut.yxh.lxm.start([c])
                }
            } else {
                if (e != f) {
                    sut.yxh.lxm.start([a])
                } else {
                    sut.yxh.yag()
                }
            }
        } else {
            sut.yxh.qqf()
        }
    };
    this.yag = function() {
        this.kxf();
        this.ayi = setTimeout(this.ejp, 500)
    };
    this.snj = function(a) {
        sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo] = a;
        sut.yxh.nht()
    };
    this.abq = function(a) {
        sut.yxh.jis[sut.yxh.jrx].iag = a;
        sut.yxh.nht()
    };
    this.qqf = function() {
        for (var b = 0, a = this.jis.length; b < a; b++) {
            this.jis[b].rti()
        }
        this.blk.jab();
        this.nht();
        setTimeout(this.avn, 400);
        this.etm()
    };
    this.avn = function() {
        for (var b = 0, a = sut.yxh.jis.length; b < a; b++) {
            sut.yxh.jis[b].jab()
        }
        sut.yxh.nht();
        sut.yxh.ofw.avn()
    };
    this.nqf = function() {
        this.tyz = false;
        this.xeo = 0;
        this.bnn = 10;
        this.snr = this.win + this.ctz;
        this.yha = this.jzz - this.snr;
        this.nkx = this.snr;
        this.vcb = new Date().getTime();
        this.jem = setTimeout(this.nlg, 70)
    };
    this.nlg = function() {
        var a = Math.round(sut.yxh.nkx / sut.yxh.bnn),
            b = sut.yxh.oqf,
            c = 0;
        if (sut.yxh.nkx > 0) {
            if (!sut.yxh.tyz) {
                sut.yxh.upk.vjc("collect");
                sut.yxh.tyz = true
            }
            sut.yxh.nkx -= a;
            if (sut.yxh.nkx < 0) {
                sut.yxh.nkx = 0
            }
            sut.yxh.ucs(sut.yxh.yha + (sut.yxh.snr - sut.yxh.nkx), true);
            sut.yxh.xeo++;
            sut.yxh.bnn -= 1;
            c = new Date().getTime();
            b = sut.yxh.oqf + (sut.yxh.xeo * sut.yxh.oqf - (c - sut.yxh.vcb));
            sut.yxh.jem = setTimeout(sut.yxh.nlg, b)
        } else {
            clearTimeout(sut.yxh.jem);
            sut.yxh.upk.iie("collect");
            setTimeout(sut.yxh.bsr, 500);
            sut.yxh.tyz = false
        }
    };
    this.bsr = function() {
        sut.yxh.cps(true);
        sut.yxh.wkh();
        sut.yxh.mqx();
        sut.yxh.zdv(sut.yxh.ayu(), false);
        sut.yxh.nht();
        sut.yxh.gzz.knk.pck("info", "#vml", [0])
    };
    this.mqx = function() {
        var c = false;
        for (var b = 0, a = this.jis.length; b < a; b++) {
            c |= this.jis[b].heb()
        }
        if (c) {
            this.upk.vjc("jeton")
        }
    };
    this.kxf = function() {
        var c = false;
        for (var b = this.jrx * sut.iou.rxh + this.umo + 1, a = this.fab.length; b < a && !c; b++) {
            if (this.fab[b] > 0) {
                c = true;
                this.jrx = Math.floor(b / sut.iou.rxh);
                this.umo = b - (this.jrx * sut.iou.rxh)
            }
        }
        if (!c) {
            this.jrx = sut.iou.yay
        }
    };
    this.tym = function() {
        var c = false;
        for (var b = (this.jrx + 1) * sut.iou.rxh, a = this.fab.length; b < a && !c; b++) {
            if (this.fab[b] > 0) {
                c = true;
                this.jrx = Math.floor(b / sut.iou.rxh);
                this.umo = b - (this.jrx * sut.iou.rxh)
            }
        }
        if (!c) {
            this.jrx = sut.iou.yay
        }
    };
    this.tqw = function() {
        var c = false;
        for (var b = (this.jrx + 1) * sut.iou.rxh, a = this.fab.length; b < a && !c; b++) {
            if (this.fab[b] > 0 && this.pqn[b]) {
                c = true;
                this.jrx = Math.floor(b / sut.iou.rxh);
                this.umo = b - (this.jrx * sut.iou.rxh)
            }
        }
        if (!c) {
            this.jrx = sut.iou.yay
        }
    };
    this.myw = function() {
        var c = false;
        for (var b = this.jrx + 1, a = this.jis.length; b < a && !c; b++) {
            if (this.jis[b].dio[0] > 0) {
                c = true;
                this.jrx = b
            }
        }
        if (!c) {
            this.jrx = sut.iou.yay
        }
    };
    this.ply = function(b) {
        var d = b * sut.iou.rxh,
            a = d,
            c = a + sut.iou.rxh - 1;
        for (; a <= c; a++) {
            if (this.fab[a] > 0 && this.pqn[a]) {
                return (a - d)
            }
        }
        return -1
    };
    this.uwv = function() {
        var c = false;
        for (var b = 0, a = this.fab.length; b < a && !c; b++) {
            if (this.fab[b] > 0 && this.pqn[b]) {
                c = true;
                this.jrx = Math.floor(b / sut.iou.rxh);
                this.umo = b - (this.jrx * sut.iou.rxh)
            }
        }
        if (!c) {
            this.jrx = sut.iou.yay
        }
    };
    this.hbt = function(c) {
        var b = 0;
        for (var a = c.length; b < a; b++) {
            if (c[b] < 0) {
                return b
            }
        }
        return b
    };
    this.pkp = function(a) {
        this.ukv = [];
        if (a == sut.iou.gcn.fde) {
            this.ukv[0] = this.language.plq;
            this.ukv[1] = this.language.kcf
        } else {
            if (a == sut.iou.gcn.vft) {
                this.ukv[0] = this.language.plq;
                this.ukv[1] = this.language.kcf;
                this.ukv[2] = this.language.split
            } else {
                if (a == sut.iou.gcn.dij) {
                    this.ukv[0] = this.language.plq;
                    this.ukv[1] = this.language.kcf;
                    this.ukv[2] = this.language.aqu
                } else {
                    if (a == sut.iou.gcn.ztd) {
                        this.ukv[0] = this.language.plq;
                        this.ukv[1] = this.language.kcf;
                        this.ukv[2] = this.language.split;
                        this.ukv[3] = this.language.aqu
                    } else {
                        if (a == sut.iou.gcn.mtp) {
                            this.ukv[0] = this.language.kcf;
                            this.ukv[1] = this.language.split
                        } else {
                            if (a == sut.iou.gcn.sju) {
                                this.ukv[0] = this.language.evu;
                                this.ukv[1] = this.language.koo
                            }
                        }
                    }
                }
            }
        }
        this.gzz.yee(this.ukv, 1)
    };
    this.wkh = function() {
        this.gvf = [];
        if (this.dns != "" && this.fhi() === false) {
            this.gvf.push(this.dns)
        }
        this.gvf.push(this.language.ulo + " " + this.gje(this.ybc) + " " + this.language.ayb + " " + this.gje(this.eqo));
        this.gvf.push(this.language.zce);
        this.gvf.push(this.language.gaj);
        if (this.win > 0) {
            this.gvf.push(this.language.zng + ": " + this.gje(this.win));
            this.gzz.knk.pck("info", "#ijc", [this.language.zng + ": " + this.gje(this.win), true])
        } else {
            this.gzz.knk.pck("info", "#ijc", [this.language.oex, true])
        }
        this.gzz.yee(this.gvf, 0)
    };
    this.cps = function(a) {
        if (this.gzz) {
            this.gzz.rkn(a);
            this.gzz.rgf(a)
        }
        this.njg.pck("buttonpanel", "#rkn", [a]);
        this.jyt(a)
    };
    this.ayu = function() {
        var b = 0;
        for (var c = 0, a = this.jis.length; c < a; c++) {
            b += this.jis[c].bqk()
        }
        return b
    };
    this.xcq = function() {
        if (this.ayu() == 0) {
            this.gzz.knk.pck("info", "#ijc", [this.language.zce, true]);
            this.gzz.knk.pck("info", "#vml", [0]);
            this.upk.vjc("placebets")
        } else {
            if (this.jzz < this.ayu()) {
                this.gzz.knk.pck("info", "#ijc", [this.language.wsl, true]);
                this.gzz.knk.pck("info", "#vml", [0]);
                this.upk.iie("limit");
                this.upk.vjc("limit")
            } else {
                if (this.ayu() > this.eqo) {
                    this.gzz.knk.pck("info", "#ijc", [this.language.ayb + " " + this.gje(this.eqo), true]);
                    this.gzz.knk.pck("info", "#vml", [0]);
                    this.upk.iie("limit");
                    this.upk.vjc("limit")
                } else {
                    this.gzz.knk.pck("info", "#ijc", [this.language.ulo + " " + this.gje(this.ybc), true]);
                    this.gzz.knk.pck("info", "#vml", [0]);
                    this.upk.iie("limit");
                    this.upk.vjc("limit")
                }
            }
        }
    };
    this.zdv = function(a, b) {
        this.gzz.knk.pck("betd", "#xsy", [this.mfm(a), b])
    };
    this.ucs = function(b, a) {
        this.gzz.knk.pck("creditd", "#xsy", [this.mfm(b), a])
    };
    this.nui = function() {
        if (sut.yxh.abi) {
            if (sut.yxh.rfw) {
                sut.yxh.tkg();
                return
            } else {
                if (sut.yxh.hep) {
                    sut.yxh.xcy();
                    return
                }
            }
            sut.yxh.abi = false;
            sut.yxh.cps(false);
            if (sut.yxh.jzz >= sut.yxh.ayu() && sut.yxh.ayu() >= sut.yxh.ybc && ((sut.yxh.yzt && sut.yxh.ayu() <= sut.yxh.eqo) || (!sut.yxh.yzt && sut.yxh.aka.bqk() <= sut.yxh.eqo && sut.yxh.ccy.bqk() <= sut.yxh.eqo && sut.yxh.fiw.bqk() <= sut.yxh.eqo))) {
                sut.yxh.ofw.icg(sut.yxh.aka.bqk(), sut.yxh.ccy.bqk(), sut.yxh.fiw.bqk())
            } else {
                sut.yxh.xcq();
                sut.yxh.abi = true;
                sut.yxh.cps(true)
            }
        }
    };
    this.zez = function() {
        var c = 0;
        for (var b = 0, a = sut.yxh.jis.length; b < a; b++) {
            c += sut.yxh.jis[b].oud()
        }
        if (c > 0) {
            sut.yxh.upk.iie("jeton");
            sut.yxh.upk.vjc("jeton")
        }
        sut.yxh.zdv(sut.yxh.ayu(), false);
        sut.yxh.nht()
    };
    this.fkw = function() {
        var c = 0;
        for (var b = 0, a = sut.yxh.jis.length; b < a; b++) {
            c |= sut.yxh.jis[b].vxa()
        }
        if ((c & 1) != 0) {
            sut.yxh.upk.iie("limit");
            sut.yxh.upk.vjc("limit")
        } else {
            if ((c & 2) != 0) {
                sut.yxh.upk.iie("jeton");
                sut.yxh.upk.vjc("jeton")
            }
        }
        sut.yxh.zdv(sut.yxh.ayu(), false);
        sut.yxh.nht()
    };
    this.vvn = function() {
        if (sut.yxh.abi) {
            sut.yxh.abi = false;
            sut.yxh.cps(false);
            sut.yxh.ofw.plq(sut.yxh.jrx, sut.yxh.umo)
        }
    };
    this.yme = function() {
        if (sut.yxh.abi) {
            sut.yxh.abi = false;
            sut.yxh.cps(false);
            sut.yxh.ofw.kcf(sut.yxh.jrx, sut.yxh.umo)
        }
    };
    this.wmb = function() {
        if (sut.yxh.abi) {
            sut.yxh.abi = false;
            sut.yxh.cps(false);
            if (sut.yxh.jzz >= sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo] && (!sut.yxh.yzt || (sut.yxh.ayu() + sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo]) <= sut.yxh.eqo)) {
                sut.yxh.ofw.split(sut.yxh.jrx, sut.yxh.umo)
            } else {
                sut.yxh.ped(true);
                if (sut.yxh.jzz < sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo]) {
                    sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.wsl, true])
                } else {
                    if (sut.yxh.yzt && (sut.yxh.ayu() + sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo]) > sut.yxh.eqo) {
                        sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.ayb + " " + sut.yxh.gje(sut.yxh.eqo), true])
                    }
                }
                sut.yxh.abi = true;
                sut.yxh.jyt(true);
                sut.yxh.gzz.yhj(true);
                sut.yxh.bob = setTimeout(sut.yxh.lbp, 2000)
            }
        }
    };
    this.ell = function() {
        if (sut.yxh.abi) {
            sut.yxh.abi = false;
            sut.yxh.cps(false);
            if (sut.yxh.jzz >= sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo] && (!sut.yxh.yzt || (sut.yxh.ayu() + sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo]) <= sut.yxh.eqo)) {
                sut.yxh.ofw.aqu(sut.yxh.jrx, sut.yxh.umo)
            } else {
                sut.yxh.ped(true);
                if (sut.yxh.jzz < sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo]) {
                    sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.wsl, true])
                } else {
                    if (sut.yxh.yzt && (sut.yxh.ayu() + sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo]) > sut.yxh.eqo) {
                        sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.ayb + " " + sut.yxh.gje(sut.yxh.eqo), true])
                    }
                }
                sut.yxh.abi = true;
                sut.yxh.jyt(true);
                sut.yxh.gzz.yhj(true);
                sut.yxh.bob = setTimeout(sut.yxh.lbp, 2000)
            }
        }
    };
    this.woo = function() {
        if (sut.yxh.abi) {
            sut.yxh.abi = false;
            sut.yxh.cps(false);
            if (sut.yxh.jzz >= sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo] / 2 && (!sut.yxh.yzt || (sut.yxh.ayu() + sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo] / 2) <= sut.yxh.eqo)) {
                sut.yxh.ofw.iag(sut.yxh.jrx, true)
            } else {
                sut.yxh.ped(true);
                if (sut.yxh.jzz < sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo] / 2) {
                    sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.wsl, true])
                } else {
                    if (sut.yxh.yzt && (sut.yxh.ayu() + sut.yxh.jis[sut.yxh.jrx].dio[sut.yxh.umo] / 2) > sut.yxh.eqo) {
                        sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.ayb + " " + sut.yxh.gje(sut.yxh.eqo), true])
                    }
                }
                sut.yxh.abi = true;
                sut.yxh.jyt(true);
                sut.yxh.gzz.yhj(true);
                sut.yxh.bob = setTimeout(sut.yxh.lbp, 2000)
            }
        }
    };
    this.bsj = function() {
        if (sut.yxh.abi) {
            sut.yxh.abi = false;
            sut.yxh.cps(false);
            sut.yxh.ofw.iag(sut.yxh.jrx, false)
        }
    };
    this.nst = function() {
        sut.yxh.cps(false);
        if (!sut.yxh.azf) {
            sut.yxh.stop();
            if (sut.yxh.gzz) {
                sut.yxh.gzz.knk.pck("info", "#ijc", [sut.yxh.language.efq, true]);
                sut.yxh.nht()
            }
            sut.yxh.ofw.mdw.close()
        } else {
            sut.yxh.ofw.close()
        }
    };
    this.epp = function() {
        sut.yxh.cps(false);
        sut.yxh.stop();
        sut.yxh.ofw.mdw.uab()
    };
    this.old = function() {
        sut.yxh.bch()
    };
    this.ixt = function() {
        var b = sut.yxh.njg.hie("topb"),
            a = sut.yxh.njg.hie("topi");
        sut.yxh.tvk = !sut.yxh.tvk;
        if (a) {
            a.qih("turbo", sut.yxh.tvk)
        }
        if (b) {
            b.knk.pck("turbo", "#ovq", [(sut.yxh.tvk) ? 1 : 0])
        }
    };
    this.arr = function() {
        if (sut.yxh.upk.anh() && !sut.yxh.bbf) {
            sut.yxh.pep = false;
            sut.yxh.bbf = true;
            sut.yxh.njg.pck("loading", "#stop");
            setTimeout(sut.yxh.dxp, 100);
            sut.yxh.upk.vjc("silence");
            if (sut.zdt.cho() && sut.zdt.zuy) {
                sut.yxh.yyz()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.bch = function() {
        this.ped(false);
        this.gzz.yhj(true);
        this.gzz.rgf(false);
        this.njg.pck("buttonpanel", "#rkn", [false]);
        this.jyt(false);
        this.fcz.ehr(0);
        this.fcz.pph(true);
        this.fcz.rkn(true);
        this.fcz.gyx(true);
        this.nht()
    };
    this.vog = function() {
        this.fcz.pph(false);
        this.fcz.rkn(false);
        if (this.state == sut.iou.gcn.mkt || this.state == sut.iou.gcn.tyg) {
            this.gzz.rkn(true);
            this.gzz.rgf(true);
            this.jyt(true);
            this.gzz.knk.pck("info", "#nlw")
        } else {
            this.gzz.yhj(true);
            this.jyt(true);
            this.njg.pck("buttonpanel", "#rkn", [true]);
            if (this.state != sut.iou.gcn.azy) {
                this.ugq()
            }
        }
        this.fcz.gyx(false);
        this.nht()
    };
    this.xpb = function() {
        this.tum();
        this.ymv();
        this.fcz.uvh(this.vrz.lrl, this.style.lrl, this.upk.mcq("btn_s"))
    };
    this.tum = function() {
        this.zzp = new wkd();
        this.zzp.ard(this.vrz.lrl.dkd.fkh, this.fcz.context2D, null, null);
        this.zzp.parent = this;
        this.zzp.wne(this.style.lrl.xjb);
        this.zzp.jit(this.vrz.lrl.dkd);
        this.zzp.ghe[0] = this.language.oir;
        this.zzp.ghe[1] = this.language.tjd;
        this.zzp.ghe[2] = this.language.xsq;
        this.zzp.ghe[3] = this.language.xct;
        this.zzp.ghe[4] = this.language.frb;
        this.zzp.ghe[5] = this.language.ezz;
        this.zzp.ghe[6] = this.language.hgr;
        this.zzp.ghe[7] = this.language.ckl;
        this.zzp.ghe[8] = this.language.uuy;
        this.zzp.ghe[9] = this.language.pia;
        this.zzp.ghe[10] = this.language.bdy;
        this.fcz.nym(this.zzp)
    };
    this.ymv = function() {
        this.ieg = new wkd();
        this.ieg.ard(this.vrz.lrl.jwl.fkh, this.fcz.context2D, null, this.upk.mcq("help"));
        this.ieg.parent = this;
        this.ieg.wne(this.style.lrl.xjb);
        this.ieg.jit(this.vrz.lrl.jwl);
        this.ieg.ghe[0] = this.language.dui;
        this.ieg.ghe[1] = this.language.pqq;
        this.ieg.ghe[2] = this.language.nbp;
        this.ieg.ghe[3] = this.language.gcz;
        this.ieg.ghe[4] = this.language.gzv;
        this.ieg.ghe[5] = this.language.zif;
        this.ieg.ghe[6] = this.language.doz;
        this.ieg.ghe[7] = this.language.lgo;
        this.ieg.ghe[8] = this.language.ocz;
        this.fcz.nym(this.ieg)
    };
    this.rjg = function(a) {
        if (a == sut.language.EN || a == sut.language.US) {
            return new ucw()
        } else {
            if (a == sut.language.ES || a == sut.language.CO || a == sut.language.MX || a == sut.language.CL || a == sut.language.VE) {
                return new qkc()
            } else {
                if (a == sut.language.DE || a == sut.language.AT) {
                    return new aih()
                } else {
                    if (a == sut.language.PT || a == sut.language.BR) {
                        return new fjx()
                    } else {
                        if (a == sut.language.RU) {
                            return new svj()
                        } else {
                            if (a == sut.language.EE) {
                                return new fjs()
                            } else {
                                if (a == sut.language.TR) {
                                    return new fgj()
                                } else {
                                    if (a == sut.language.CZ) {
                                        return new sgm()
                                    } else {
                                        if (a == sut.language.GR) {
                                            return new iyc()
                                        } else {
                                            if (a == sut.language.BG) {
                                                return new dsl()
                                            } else {
                                                if (a == sut.language.GE) {
                                                    return new hum()
                                                } else {
                                                    if (a == sut.language.HU) {
                                                        return new dci()
                                                    } else {
                                                        if (a == sut.language.RO) {
                                                            return new mnt()
                                                        } else {
                                                            if (a == sut.language.FR) {
                                                                return new yjh()
                                                            } else {
                                                                if (a == sut.language.HR) {
                                                                    return new uum()
                                                                } else {
                                                                    if (a == sut.language.IT) {
                                                                        return new wnn()
                                                                    } else {
                                                                        if (a == sut.language.SE) {
                                                                            return new brx()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.hzt = function() {
        var d = this.njg.hie("stats"),
            c = this.njg.hie("topb"),
            a = this.njg.hie("topi"),
            b = this.njg.hie("buttonpanel");
        this.gvf = [];
        if (this.dns != "" && this.fhi() === false) {
            this.gvf.push(this.dns)
        }
        this.gvf.push(this.language.ulo + " " + this.gje(this.ybc) + " " + this.language.ayb + " " + this.gje(this.eqo));
        this.gvf.push(this.language.zce);
        this.gvf.push(this.language.gaj);
        if (this.win > 0) {
            this.gvf.push(this.language.zng + ": " + this.gje(this.win))
        }
        this.gzz.yee(this.gvf, 0);
        this.gzz.knk.pck("creditd", "#mpg", [(this.fhi()) ? this.language.xti : this.language.jzz]);
        this.gzz.knk.pck("betd", "#mpg", [this.language.nbh]);
        if (c) {
            c.knk.pck("language", "#krb", [this.language.language]);
            c.knk.pck("audio", "#krb", [this.language.audio]);
            c.knk.pck("turbo", "#krb", [this.language.tvk]);
            c.knk.pck("fullscreen", "#krb", [this.language.pgr]);
            c.knk.pck("history", "#krb", [this.language.ygy]);
            c.knk.pck("statistic", "#krb", [this.language.zqw]);
            c.knk.pck("deposit", "#krb", [this.language.pqg])
        }
        if (a) {
            a.krb("freeplay", this.language.xti)
        }
        if (d) {
            if (sut.ipy.value36) {
                d.mcx = this.aal(this.language.zqw)
            } else {
                if (sut.ipy.value37) {
                    d.mcx = this.aal(this.language.tht)
                }
            }
            if (d.drl != null) {
                d.drl.xsy(this.language.ret, false)
            }
            if (d.lvo != null) {
                d.lvo.xsy(this.language.sde, false)
            }
        }
        this.fcz.knk.pck("exit", "#xsy", [this.language.kxy, false]);
        this.fcz.knk.pck("rules", "#xsy", [this.language.wxr, false]);
        this.fcz.knk.pck("operation", "#xsy", [this.language.jwl, false]);
        if (this.zzp != null) {
            this.zzp.ghe[0] = this.language.oir;
            this.zzp.ghe[1] = this.language.tjd;
            this.zzp.ghe[2] = this.language.xsq;
            this.zzp.ghe[3] = this.language.xct;
            this.zzp.ghe[4] = this.language.frb;
            this.zzp.ghe[5] = this.language.ezz;
            this.zzp.ghe[6] = this.language.hgr;
            this.zzp.ghe[7] = this.language.ckl;
            this.zzp.ghe[8] = this.language.uuy;
            this.zzp.ghe[9] = this.language.pia;
            this.zzp.ghe[10] = this.language.bdy
        }
        if (this.ieg != null) {
            this.ieg.ghe[0] = this.language.dui;
            this.ieg.ghe[1] = this.language.pqq;
            this.ieg.ghe[2] = this.language.nbp;
            this.ieg.ghe[3] = this.language.gcz;
            this.ieg.ghe[4] = this.language.gzv;
            this.ieg.ghe[5] = this.language.zif;
            this.ieg.ghe[6] = this.language.doz;
            this.ieg.ghe[7] = this.language.lgo;
            this.ieg.ghe[8] = this.language.ocz
        }
        this.gzz.knk.pck("deal", "#xsy", [this.language.icg]);
        this.gzz.knk.pck("clear", "#xsy", [this.language.qqf]);
        this.gzz.knk.pck("double", "#xsy", [this.language.vxa]);
        this.gzz.knk.pck("help", "#xsy", [this.language.lrl]);
        this.gzz.knk.pck("exit", "#xsy", [(sut.ipy.value50.g === true) ? this.language.uxb : this.language.jyi]);
        if (b) {
            b.knk.pck("hit", "#xsy", [this.language.plq]);
            b.knk.pck("stand", "#xsy", [this.language.kcf]);
            b.knk.pck("split", "#xsy", [this.language.split]);
            b.knk.pck("double", "#xsy", [this.language.aqu]);
            b.knk.pck("insno", "#xsy", [this.language.koo]);
            b.knk.pck("insyes", "#xsy", [this.language.evu])
        }
    };
    this.ufo = function() {
        this.gzz.knk.pck("info", "#yke");
        this.cps(false);
        this.njg.pck("stats", "#gyx", [true, true])
    };
    this.zzl = function() {
        this.cps(true);
        this.njg.pck("stats", "#rkn", [false]);
        this.njg.pck("stats", "#gyx", [false, true]);
        this.gzz.knk.pck("info", "#eiv", [0])
    };
    this.mzs = function() {
        if (sut.ipy.value78) {
            if (sut.ipy.value78.t === true) {
                this.njg.pck("topb", "#gyx", [true]);
                this.rei()
            }
            if (sut.ipy.value78.d > 0) {
                this.abn = setTimeout(this.knr, sut.ipy.value78.d)
            }
        }
    };
    this.knr = function() {
        sut.yxh.xbh();
        clearTimeout(sut.yxh.abn)
    };
    this.rei = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                sut.yxh.xfr(a)
            };
            this.canvas.ontouchmove = function(a) {
                sut.yxh.xfr(a)
            }
        }
    };
    this.ewc = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.xfr = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        var a = 0,
            e = 0,
            c = this.njg.hie("topb");
        if (b.touches) {
            var d = b.touches[0];
            if (!this.vgk) {
                a = d.pageX - this.offsetLeft;
                e = d.pageY - this.offsetTop
            } else {
                a = Math.round((d.pageX - this.offsetLeft) / this.ggf);
                e = Math.round((d.pageY - this.offsetTop) / this.krr)
            }
        } else {
            if (!this.vgk) {
                a = b.pageX - this.offsetLeft;
                e = b.pageY - this.offsetTop
            } else {
                a = Math.round((b.pageX - this.offsetLeft) / this.ggf);
                e = Math.round((b.pageY - this.offsetTop) / this.krr)
            }
        }
        if (c && c.npz()) {
            c.fqt(a, e)
        }
    };
    this.stop = function() {
        qmh.prototype.stop.call(this);
        this.kex = true;
        this.ewc();
        clearTimeout(this.ayi);
        clearTimeout(this.bob);
        clearTimeout(this.tqu);
        clearTimeout(this.alo);
        clearTimeout(this.jem);
        clearTimeout(this.gnt);
        if (this.gzz) {
            this.gzz.knk.pck("info", "#yke")
        }
        if (this.taz) {
            this.taz.stop()
        }
        if (this.lxm) {
            this.lxm.stop()
        }
        if (this.blk) {
            this.blk.oaq()
        }
        for (var b = 0, a = this.jis.length; b < a; b++) {
            this.jis[b].oaq()
        }
        this.okp()
    };
    this.tru = function() {
        var c = this.njg.hie("topb"),
            a = this.njg.hie("topi");
        this.ujm = (this.ujm + 1 == sut.ipy.value5.length) ? 0 : this.ujm + 1;
        sessionStorage.sessionValue1 = sut.ipy.value5[this.ujm];
        this.language = this.rjg(sut.ipy.value5[this.ujm]);
        this.hzt();
        if (c) {
            var b = c.knk.hie("language");
            if (b) {
                b.hvf(this.qol(sut.ipy.value5[this.ujm]))
            }
            c.cys(true)
        }
        if (a) {
            a.ovq("language", sessionStorage.sessionValue1)
        }
        this.nht()
    };
    this.jyt = function(c) {
        var b = this.njg.hie("topb"),
            a = this.njg.hie("topi");
        if (a) {
            a.mny(c)
        }
        if (b) {
            b.mny(c);
            b.rkn(c)
        }
    };
    this.mda = function(c) {
        var b = this.njg.hie("topb"),
            a = this.njg.hie("topi");
        if (a) {
            a.mny(c)
        }
        if (b) {
            b.mny(c);
            b.dik(c)
        }
    };
    this.mno = function(c) {
        var b = this.njg.hie("topb"),
            a = this.njg.hie("topi");
        if (a) {
            a.mny(c)
        }
        if (b) {
            b.mny(c);
            b.rnc(c)
        }
    };
    this.ezm = function() {
        return (this.jzz == 0 && (this.state == sut.iou.gcn.mkt || this.state == sut.iou.gcn.tyg || (this.state == sut.iou.gcn.azy && this.win == 0)))
    };
    this.fxv = function() {
        if (sut.yxh.dns != "" && sut.yxh.fhi() === false) {
            sut.yxh.gzz.knk.pck("info", "#rgk");
            sut.yxh.gzz.knk.pck("info", "#eiv", [0])
        }
    };
    this.kxi = function() {
        if (this.azf === false && sut.zdt.swp() === true) {
            return true
        }
        return false
    }
}
qmh.prototype = new tup;

function vuf() {
    sut.quu = -1;
    sut.yxh = new qmh();
    sut.yxh.ard({
        vrz: sut.ipy.value14
    });
    window.focus()
}

function ltf() {
    if (sut.yxh != null) {
        if (sut.quu >= 0) {
            clearTimeout(sut.quu)
        }
        sut.quu = setTimeout(sut.yxh.unb, 200)
    }
}
window.onresize = ltf;
if (sut.ipy.value9) {
    window.onload = vuf
} else {
    vuf()
};