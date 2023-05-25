// ChatGPT wrote this so dont blame us if it breaks
// Should have used Hotwire instead, no doubt
const rubyConfTh = document.getElementById('rubyConfTh');
const railsWorld = document.getElementById('railsWorld');
const rockyMtn = document.getElementById('rockyMtn');

railsWorld.addEventListener('mouseover', (e) => swapConfs(railsWorld, e));
rockyMtn.addEventListener('mouseover', (e) => swapConfs(rockyMtn, e));
railsWorld.addEventListener('touchstart', (e) => swapConfs(railsWorld, e));
rockyMtn.addEventListener('touchstart', (e) => swapConfs(rockyMtn, e));

function swapConfs(hoveredConf, e) {
    e.preventDefault();
    const rubyConfThNextSibling = rubyConfTh.nextElementSibling;
    const hoveredConfNextSibling = hoveredConf.nextElementSibling;
    
    hoveredConf.parentNode.insertBefore(rubyConfTh, hoveredConfNextSibling);
    rubyConfTh.parentNode.insertBefore(hoveredConf, rubyConfThNextSibling);
}