const projectsNav = document.getElementById('projects');
const aboutNav = document.getElementById('about');
const projectsBtn = document.getElementById('projectsBtn');
const aboutBtn = document.getElementById('aboutBtn');


function navToProjects(){
    aboutNav.classList.add('hidden');
    projectsNav.classList.remove('hidden');
    projectsBtn.classList.remove('bg-blue-100','text-blue-400');
    projectsBtn.classList.add('bg-blue-400','text-blue-100');
    aboutBtn.classList.remove('bg-blue-400','text-blue-100');
    aboutBtn.classList.add('bg-blue-100','text-blue-400');

}
function navToAbout(){
    projectsNav.classList.add('hidden');
    aboutNav.classList.remove('hidden');
    projectsBtn.classList.remove('bg-blue-400', 'text-blue-100');
    projectsBtn.classList.add('bg-blue-100', 'text-blue-400');
    aboutBtn.classList.remove('bg-blue-100', 'text-blue-400');
    aboutBtn.classList.add('bg-blue-400', 'text-blue-100');

    
}