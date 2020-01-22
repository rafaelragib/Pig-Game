/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score=[0,0];
var active=0;
var roundScore=0;
//document.querySelector('#current-'+active).textContent=dice;

document.querySelector('.dice').style.display='none';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function()
	{
		var dice=Math.floor(Math.random()*6)+1;
		//console.log(dice);
		document.querySelector('.dice').src='dice-'+dice+'.png';
		document.querySelector('.dice').style.display='block';
		roundScore+=dice;
		document.getElementById('current-'+active).textContent=roundScore;
		if(dice===1)
		{
			roundScore=0;
			document.getElementById('current-'+active).textContent=roundScore;
			active===0 ? active=1 : active=0;
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			document.querySelector('.dice').style.display='none';
			
		}
	});