
const exp_name_lst = [
    'internship1',
    'internship2',
    'internship3',
    'research',
    'projteam'
] 

const timeline_lst = [] 
for (const exp_name of exp_name_lst) {
    timeline_lst.push(document.getElementById(exp_name));
}
console.log(timeline_lst); 

const timeline_dot_lst = []; 
for (const exp_name of exp_name_lst) {
    timeline_dot_lst.push(document.getElementById(exp_name + '-dot'));
}

const exp_item_lst = [] 
for (const exp_name of exp_name_lst) {
    exp_item_lst.push(document.getElementById(exp_name + '-item'));
}


const scrollpane = document.getElementById('scrollpane'); 

for (let i = 0; i < timeline_lst.length; i++) {
    timeline_lst[i].onclick = function(event) {
        // Perform action
        console.log(exp_name_lst[i] + ' was clicked');

        const rel_top = exp_item_lst[i].offsetTop - scrollpane.offsetTop; 
        
        scrollpane.scrollTop = rel_top;

        console.log(scrollpane.scrollTop);
    };
    
    timeline_lst[i].addEventListener('mouseover', function() {
        timeline_dot_lst[i].style.width = '40%';
    });
    timeline_lst[i].addEventListener('mouseout', function() {
        timeline_dot_lst[i].style.width = '20%';
    });
}


