// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars={tutorialSidebar:[
 'Circuit-Basics',
 {type:'category',label:'水車・液体',collapsed:false,items:[
  'Suisya/Waterwheel-spec','Suisya/Liquid-Hold-Priority','Suisya/Waterfall-Priority','Suisya/VerticalDelay',
  {type:'category',label:'保持・出力回路',items:['Suisya/Simple-Latch','Suisya/OneShot-Latch','Suisya/Latch-Output','Suisya/OneShot']},
  {type:'category',label:'段階・クロック・計算',items:['Suisya/StepLoop','Suisya/Step-Selector','Suisya/Step-Stop','Suisya/1325s-Clock','Suisya/117s-Clock','Suisya/WaterPoison-ANDNOT','Suisya/Binary-Carry']}
 ]},
 {type:'category',label:'マグマ',collapsed:false,items:['Maguma/Area-Judgment','Maguma/Area-Behavior','Maguma/Area-Switch','Maguma/Magnet-Foundation','Maguma/Area-Application','Maguma/Area-Waterwheel','Maguma/Area-Selector']}
]};
export default sidebars;
