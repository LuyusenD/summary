let board = new Array(),
    score = 0

$(document).ready(function () {
  newgame()
})

function newgame() {
  //初始化棋盘格 / 随机生成两个格子数字
  init()
  console.log(board);
  generateOneNumber()
  generateOneNumber()
}

function init() {
  for(let i = 0; i < 4; i++) {
    board[i] = new Array()
    for(let j = 0; j < 4; j++) {
      //初始化二维数组的值
      board[i][j] = 0
      //初始化模板位置
      let dom = $(`#grid-cell-${i}-${j}`)
      dom.css('top', getPosTop(i,j))
      dom.css('left', getPosLeft(i,j))
    }
  }

  updateBoardView()
}

function updateBoardView() {
  //更新视图 生成number cell
  $('.number-cell').remove()
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      $('#grid-container').append(`<div class="number-cell" id="number-cell-${i}-${j}"></div>`)
      let numberCell = $(`#number-cell-${i}-${j}`)
      console.log(board[i][j] == 0);
      if (board[i][j] == 0) {
        numberCell.css('width','0px')
        numberCell.css('height','0px')
        numberCell.css('top', getPosTop(i,j) + 50)
        numberCell.css('left', getPosLeft(i,j) + 50)
      } else {
        numberCell.css('width','100px')
        numberCell.css('height','100px')
        numberCell.css('top', getPosTop(i,j))
        numberCell.css('left', getPosLeft(i,j))
        numberCell.css('background-color',getNumberBackgroundColor( board[i][j] ))
        numberCell.css('color',getNumberColor( board[i][j] ))
        numberCell.text( board[i][j] )
      }
    }
  }
}

function generateOneNumber() {
  if (nospace( board ))
    return false;
  //生成 随机位置
  let randx = parseInt( Math.floor(Math.random() * 4) )
  let randy = parseInt( Math.floor(Math.random() * 4) )

  while (true ) {
    if (board[randx][randy] == 0)
      break;

    randx = parseInt( Math.floor(Math.random() * 4) )
    randy = parseInt( Math.floor(Math.random() * 4) )
  }

  //生成 随机数字
  let randNumber = Math.random() < 0.5 ? 2 : 4

  //在随机位置显示随机数字
  board[randx][randy] = randNumber
  showNumberWithAnimation(randx,randy,randNumber)
  return true;
}

$(document).keydown(function (e) {
  //按键 操作
  switch (e.keyCode) {
    case 37: //left
      if (moveLeft()) {
        generateOneNumber();
        isgameover()
      }
      break;
    case 38: //up
      if (moveUp()) {
        generateOneNumber();
        isgameover()
      }
      break;
    case 39: //right
      if (moveRight()) {
        generateOneNumber();
        isgameover()
      }
      break;
    case 40: //down
      if (moveDown()) {
        generateOneNumber();
        isgameover()
      }
      break;
    default:
      alert('别什么都按按按按的')
      break;
  }
})


//封装 上下左右移动 函数
function moveLeft() {
  //canMoveLeft 判断是否可以移动left
  if (!canMoveLeft (board))
    return false
  
  //能向左移动  
  for(let i = 0; i < 4; i++)
    for(let j = 1; j < 4; j++) {
      if (board[i][j] != 0) {
        for(let k = 0; k < j; k++) {
          //判断左边的格子是否为空 并且 判断 当前位置到空格子的位置 中间是否有障碍物
          if ( board[i][k] == 0 && noBlockHorizontal(i , k , j , board)) {
            //move
            continue;
          //判断左边的格子是否与自己本身数值一直 并且 判断 当前位置到空格子的位置 中间是否有障碍物
          } else if (board[i][k] == board[i][j] && noBlockHorizontal(i , k , j , board)) {

          }
        }
      }
    }
  return true
}

function moveUp() {
  if (!canMove(board)) {

  }
}

function moveRight() {
  if (!canMove(board)) {

  }
}

function moveDown() {
  if (!canMove(board)) {

  }
}
