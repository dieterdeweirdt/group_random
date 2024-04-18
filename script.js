const form = document.getElementById('numberOfGroups');
const groupContainer = document.getElementById('groupContainer');

var numberOfGroups = 0;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
    numberOfGroups = formData.get('numberOfGroups');
  generateGroupCards();
});

const generateGroupCards = () => {
 
  groupContainer.innerHTML = '';
  for (let i = 0; i < numberOfGroups; i++) {
    const groupCard = document.createElement('div');
    groupCard.classList.add('group-card');
    groupCard.innerHTML = `
      <h3>Group ${i + 1}</h3>
      <div class="timeslot"></div>
    `;
    groupContainer.appendChild(groupCard);
  }


}
document.getElementById('randomize').addEventListener('click', () => {
    const items = gsap.utils.toArray(".group-card");

  /*const groupCards = document.querySelectorAll('.group-card');
  const groupCardsArray = Array.from(groupCards);
  //const timeslots = document.querySelectorAll('.timeslot');
  //const timeslotsArray = Array.from(timeslots);
  groupCardsArray.sort(() => Math.random() - 0.5);
  groupCardsArray.forEach((groupCard, index) => {
    //groupCard.querySelector('.timeslot').textContent = `${9 + index}:00 - ${10 + index}:00`;
    groupCard.style.order = index;
  });*/

    // Get the state
    const state = Flip.getState(items);
     
    // Do the actual shuffling
    for(let i = items.length; i >= 0; i--) {
        groupContainer.appendChild(groupContainer.children[Math.random() * i | 0]);
    }
    
    // Animate the change
    Flip.from(state, {
      absolute: true,
      delay: .8,
      duration: .4,
    })  
  
    
});

