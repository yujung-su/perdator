document.querySelector('.borders1').addEventListener('mouseenter', () => {
  // document.querySelector('.expander').classList.toggle('expanderr');
  document.querySelector('.mv1-1').classList.toggle('move1-1');
  document.querySelector('.mv1-2').classList.toggle('move1-2');
  document.querySelector('.mv1-3').classList.toggle('move1-3');
  document.querySelector('.mv1-4').classList.toggle('move1-4');
});
document.querySelector('.borders12').addEventListener('mouseenter', () => {
  document.querySelector('.mv2-1').classList.toggle('move2-1');
  // document.querySelector('.mv2-2').classList.toggle('move2-2');
});
document.querySelector('.borders13').addEventListener('mouseenter', () => {
  document.querySelector('.mv3-1').classList.toggle('move3-1');
  document.querySelector('.mv3-2').classList.toggle('move3-2');
  document.querySelector('.mv3-3').classList.toggle('move3-3');
  document.querySelector('.mv3-4').classList.toggle('move3-4');
  document.querySelector('.mv3-5').classList.toggle('move3-5');
  document.querySelector('.mv3-6').classList.toggle('move3-6');
});
document.querySelector('.borders14').addEventListener('mouseenter', () => {
  document.querySelector('.mv4-1').classList.toggle('move4-1');
  document.querySelector('.mv4-2').classList.toggle('move4-2');
  document.querySelector('.mv4-3').classList.toggle('move4-3');
});
document.querySelector('.borders15').addEventListener('mouseenter', () => {
  document.querySelector('.mv5-1').classList.toggle('move5-1');
  document.querySelector('.mv5-2').classList.toggle('move5-2');
  // document.querySelector('.mv5-3').classList.toggle('move5-3');
  // document.querySelector('.mv5-4').classList.toggle('move5-4');
  });

document.querySelector('.borders1').addEventListener('mouseleave', () => {
  // document.querySelector('.expander').classList.remove('expanderr');
  document.querySelector('.mv1-1').classList.remove('move1-1');
  document.querySelector('.mv1-2').classList.remove('move1-2');
  document.querySelector('.mv1-3').classList.remove('move1-3');
  document.querySelector('.mv1-4').classList.remove('move1-4');
});
document.querySelector('.borders12').addEventListener('mouseleave', () => {
  document.querySelector('.mv2-1').classList.remove('move2-1');
  // document.querySelector('.mv2-2').classList.remove('move2-2');
});
document.querySelector('.borders13').addEventListener('mouseleave', () => {
  document.querySelector('.mv3-1').classList.remove('move3-1');
  document.querySelector('.mv3-2').classList.remove('move3-2');
  document.querySelector('.mv3-3').classList.remove('move3-3');
  document.querySelector('.mv3-4').classList.remove('move3-4');
  document.querySelector('.mv3-5').classList.remove('move3-5');
  document.querySelector('.mv3-6').classList.remove('move3-6');
});
document.querySelector('.borders14').addEventListener('mouseleave', () => {
  document.querySelector('.mv4-1').classList.remove('move4-1');
  document.querySelector('.mv4-2').classList.remove('move4-2');
  document.querySelector('.mv4-3').classList.remove('move4-3');
});
document.querySelector('.borders15').addEventListener('mouseleave', () => {
  document.querySelector('.mv5-1').classList.remove('move5-1');
  document.querySelector('.mv5-2').classList.remove('move5-2');
  // document.querySelector('.mv5-3').classList.remove('move5-3');
  // document.querySelector('.mv5-4').classList.remove('move5-4');
});