/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,active,roundScore,gameover,prevdice,winningscore,onedice;
init();

//rolling the dice here
document.querySelector('.btn-roll').addEventListener('click',function()
	{
		if(!gameover){
		//var dice=6;
		var dice=Math.floor(Math.random() * 6)+1 ;
		if(dice===1)
		{
			onedice=1;
		}	
		//console.log(dice);
		document.querySelector('.dice').src='dice-'+dice+'.png';
		document.querySelector('.dice').style.display='block';
		roundScore+=dice;
		var dice=Math.floor(Math.random() * 6)+1 ;
		document.querySelector('.dicesecond').src='dice-'+dice+'.png';
		document.querySelector('.dicesecond').style.display='block';
		roundScore+=dice;

		document.getElementById('current-'+active).textContent=roundScore;
		
		if(dice===1 && onedice===1)
		{
			onedice=0;
			nextPlayer();
			//document.querySelector('.dice').style.display='none';

		}
		//if player rolls 6 in a row.
		else if(dice===6 && prevdice===0)
			prevdice=6;
		else if(dice===6 && prevdice===6)
			{
				score[active]=0;
				document.getElementById('score-'+active).textContent=score[active];
				roundScore=0;
				prevdice=0;
				nextPlayer();
			}


	}

	});
document.querySelector('.btn-hold').addEventListener('click',function()
{
	winningscore=parseInt(document.querySelector('.winnerinput').value);
	winningscore
	if(!gameover){
	score[active]+=roundScore;
	document.getElementById('score-'+active).textContent=score[active];
	
	if(score[active]>=winningscore){
		document.getElementById('name-'+active).textContent='Winner!';
		document.querySelector('.dice').style.display='None';
		document.querySelector('.dicesecond').style.display='none';
		document.querySelector('.player-'+active+'-panel').classList.add('winner');
		document.querySelector('.player-'+active+'-panel').classList.remove('active');
		gameover=true;
	}
	else
	{
		nextPlayer();
	}
}


});

function nextPlayer()
{
	roundScore=0;
	prevdice=0;
			document.getElementById('current-'+active).textContent=roundScore;
			active===0 ? active=1 : active=0;
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
}
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
score=[0,0];
active=0;
roundScore=0;
gameover=false;
prevdice=0;
winningscore=0;
onedice=0;
//document.querySelector('#current-'+active).textContent=dice;

document.querySelector('.dice').style.display='none';
document.querySelector('.dicesecond').style.display='none';

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.add('active');

}