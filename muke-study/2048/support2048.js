function getPosTop(i,j) {
  return i * 120 + 20
}

function getPosLeft(i,j) {
  return j * 120 + 20
}

function getNumberBackgroundColor( number ) {
  switch( number ) {
    case 2: return '#eee4da';break;
    case 4: return '#ede0c8';break;
    case 8: return '#f2b179';break;
    case 16: return '#f59563';break;
    case 32: return '#f67c5f';break;
    case 64: return '#f65e3b';break;
    case 128: return '#edcf72';break;
    case 256: return '#edcc61';break;
    case 512: return '#9c0';break;
    case 1024: return '#33b5e5';break;
    case 2048: return '#09c';break;
    case 4096: return '#a6c';break;
    case 8192: return '#93c';break;
  }
  return 'black';
}

function getNumberColor(number) {
  if (number <= 4) 
    return '#776e65'
  return 'white';
}

function nospace( board ) {
  for(let i = 0; i < 4; i++)
    for(let j = 0; j < 4; j++)
        if (board[i][j] == 0 )
          return false
  return true;
}

function canMoveLeft( board ) {
  for(let i = 0; i < 4; i++)
    for(let j = 1; j < 4; j++)
      if (board[i][j] != 0)
        if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) //作比较 如果左边的格子为空 或者 左边的格子和自己的格子数值一样 那么就可以向左移动
          return true
  return false
}