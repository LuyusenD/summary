function showNumberWithAnimation(i,j,randNumber) {
  //根据位置 数值 渲染方块
  let numberCell = $(`#number-cell-${i}-${j}`)

  numberCell.css('background-color',getNumberBackgroundColor( randNumber ))
  numberCell.css('color',getNumberColor( randNumber ))
  numberCell.text( randNumber )

  numberCell.animate({
    width: "100px",
    height: "100px",
    top: getPosTop(i,j),
    left: getPosLeft(i,j)
  }, 50)
}