document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const items = Array.from(container.querySelectorAll('.item'));
  
    function sortItems(criteria, order = 'asc') {
      const sortedItems = items.sort((a, b) => {
        let aValue, bValue;
  
        switch (criteria) {
          case 'name':
            aValue = a.querySelector('.text b').textContent;
            bValue = b.querySelector('.text b').textContent;
            break;
          case 'description':
            aValue = a.querySelector('.text d').textContent.trim();
            bValue = b.querySelector('.text d').textContent.trim();
            break;
          case 'tribu':
            aValue = a.dataset.tribu;
            bValue = b.dataset.tribu;
            break;
          case 'id':
            aValue = a.dataset.id;
            bValue = b.dataset.id;
            break;
          default:
            return 0;
        }
  
        if (order === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
  
      container.innerHTML = '';
      sortedItems.forEach(item => container.appendChild(item));
    }
  
    // Exemple d'utilisation :
    document.getElementById('sortByNameAsc').addEventListener('click', () => sortItems('name', 'asc'));
    document.getElementById('sortByNameDesc').addEventListener('click', () => sortItems('name', 'desc'));
    document.getElementById('sortByDescriptionAsc').addEventListener('click', () => sortItems('description', 'asc'));
    document.getElementById('sortByDescriptionDesc').addEventListener('click', () => sortItems('description', 'desc'));
    document.getElementById('sortByTribu').addEventListener('click', () => sortItems('tribu', 'asc'));
    document.getElementById('sortByIdAsc').addEventListener('click', () => sortItems('id', 'asc'));
    document.getElementById('sortByIdDesc').addEventListener('click', () => sortItems('id', 'desc'));
  });
  