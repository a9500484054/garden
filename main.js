import Garden  from "./generationGarden/Garden.js";

const garden = new Garden();

document.addEventListener('DOMContentLoaded', () => {

    const controlPanelElement = document.getElementById('control-panel');
    const treesCountInput = controlPanelElement.querySelector('#treesCountInput');
    const yearsCountInput = controlPanelElement.querySelector('#yearsCountInput');

    treesCountInput.addEventListener('input', (event) => {
        if(event.target.value >  100)  event.target.value  = 100;
    });

    yearsCountInput.addEventListener('input', (event) => {
        if(event.target.value >  100)  event.target.value  = 365;
    });

    controlPanelElement.querySelector('.generation-garden-btn').addEventListener('click', () => {
        garden.generatorsGarden('#garden', treesCountInput.value, yearsCountInput.value);
        document.querySelector('.generation-garden-wrapper').classList.add('d-none');
        document.querySelector('.admin-garden-wrapper').classList.remove('d-none');
        document.querySelector('.step-garden-btn').classList.add('d-none');
        document.querySelector('.reset-garden-btn').classList.add('d-none');
        garden.startGarden();
        startGardenBtn.classList.add('d-none')
        controlPanelElement.querySelector('.stop-garden-btn').classList.remove('d-none')
        document.querySelector('.step-garden-btn').classList.add('d-none');
        document.querySelector('.reset-garden-btn').classList.add('d-none');
    });

    
    const startGardenBtn = controlPanelElement.querySelector('.start-garden-btn')
    startGardenBtn.addEventListener('click', () => {
        console.log('startGardenBtn')
        garden.startGarden();
        startGardenBtn.classList.add('d-none')
        controlPanelElement.querySelector('.stop-garden-btn').classList.remove('d-none')
        document.querySelector('.step-garden-btn').classList.add('d-none');
        document.querySelector('.reset-garden-btn').classList.add('d-none');
        document.querySelector('.tree-info').classList.add('d-none');
    });
    
    const stopGardenBtn = controlPanelElement.querySelector('.stop-garden-btn')
    stopGardenBtn.addEventListener('click', () => {
        console.log('stopGardenBtn ')
        garden.pauseGarden();
        stopGardenBtn.classList.add('d-none');
        startGardenBtn.classList.remove('d-none');
        document.querySelector('.step-garden-btn').classList.remove('d-none');
        document.querySelector('.generation-garden-wrapper').classList.add('d-none');
        document.querySelector('.reset-garden-btn').classList.remove('d-none');
    });
    
    const сontinueGardenBtn = controlPanelElement.querySelector('.сontinue-garden-btn')
    сontinueGardenBtn.addEventListener('click', () => {
        console.log('сontinueGardenBtn ')
        garden.startGarden();
        
    });

    const stepGardenBtn = controlPanelElement.querySelector('.step-garden-btn')
    stepGardenBtn.addEventListener('click', () => {
        console.log('stepGardenBtn ')
        garden.passDay();
    });

    const resetGardenBtn = controlPanelElement.querySelector('.reset-garden-btn')
    resetGardenBtn.addEventListener('click', () => {
        console.log('resetGardenBtn ')
        document.querySelector('.admin-garden-wrapper').classList.add('d-none');
        document.querySelector('.generation-garden-wrapper').classList.remove('d-none');
        document.getElementById('start-timer-garden').textContent = 0;
        document.getElementById('end-timer-garden').textContent = 0;
        garden.resetGarden();
        garden.gardenAnalytics();
    });

    document.addEventListener('click', (event) => {
        if(event.target.closest('.tree')) {
            const tree = event.target.closest('.tree');
            const id = tree.id
            garden.showInfoTree(id);
            document.querySelector('.tree-info').classList.remove('d-none');
        }
    });

});
