let recipes = [];
let filteredRecipes = [];
let currentPage = 1;
const itemsPerPage = 10;
let isGridView = true;

document.addEventListener('DOMContentLoaded', function() {
    fetchRecipes();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterAndDisplay);
    document.getElementById('filterSelect').addEventListener('change', filterAndDisplay);
    document.getElementById('sortSelect').addEventListener('change', filterAndDisplay);
    document.getElementById('layoutToggle').addEventListener('click', toggleLayout);
}

async function fetchRecipes() {
    try {
        const response = await fetch('https://dummyjson.com/recipes/');
        const data = await response.json();
        recipes = data.recipes;
        populateFilters();
        filterAndDisplay();
    } catch (error) {
        console.error('Error fetching recipes:', error);
        document.getElementById('cardsContainer').innerHTML = '<p class="text-center">Error loading recipes. Please try again later.</p>';
    }
}

function populateFilters() {
    const categories = [...new Set(recipes.map(recipe => recipe.cuisine))];
    const filterSelect = document.getElementById('filterSelect');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterSelect.appendChild(option);
    });
}

function filterAndDisplay() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    const sortValue = document.getElementById('sortSelect').value;

    filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm);
        const matchesFilter = !filterValue || recipe.cuisine === filterValue;
        return matchesSearch && matchesFilter;
    });

    // Sort
    filteredRecipes.sort((a, b) => {
        switch (sortValue) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'rating':
                return b.rating - a.rating;
            case 'prepTime':
                return a.prepTimeMinutes - b.prepTimeMinutes;
            default:
                return 0;
        }
    });

    currentPage = 1;
    displayRecipes();
    displayPagination();
}

function displayRecipes() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const recipesToShow = filteredRecipes.slice(startIndex, endIndex);

    recipesToShow.forEach(recipe => {
        const card = createCard(recipe);
        container.appendChild(card);
    });
}

function createCard(recipe) {
    const col = document.createElement('div');
    col.className = isGridView ? 'col-lg-4 col-md-6 mb-4' : 'col-12 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const img = document.createElement('img');
    img.src = recipe.image;
    img.className = 'card-img-top';
    img.alt = recipe.name;
    img.style.height = '200px';
    img.style.objectFit = 'cover';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = recipe.name;

    const rating = document.createElement('p');
    rating.className = 'card-text';
    rating.innerHTML = `<i class="fas fa-star text-warning"></i> ${recipe.rating} (${recipe.reviewCount} reviews)`;

    const details = document.createElement('p');
    details.className = 'card-text';
    details.innerHTML = `<small class="text-muted">Prep: ${recipe.prepTimeMinutes}min | Cook: ${recipe.cookTimeMinutes}min | ${recipe.difficulty}</small>`;

    const tags = document.createElement('p');
    tags.className = 'card-text';
    tags.innerHTML = `<small class="text-muted">${recipe.tags.join(', ')}</small>`;

    cardBody.appendChild(title);
    cardBody.appendChild(rating);
    cardBody.appendChild(details);
    cardBody.appendChild(tags);

    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
    if (totalPages <= 1) return;

    const ul = document.createElement('ul');
    ul.className = 'pagination justify-content-center';

    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    const prevLink = document.createElement('a');
    prevLink.className = 'page-link';
    prevLink.href = '#';
    prevLink.textContent = 'Previous';
    prevLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayRecipes();
            displayPagination();
        }
    });
    prevLi.appendChild(prevLink);
    ul.appendChild(prevLi);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        const link = document.createElement('a');
        link.className = 'page-link';
        link.href = '#';
        link.textContent = i;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayRecipes();
            displayPagination();
        });
        li.appendChild(link);
        ul.appendChild(li);
    }

    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    const nextLink = document.createElement('a');
    nextLink.className = 'page-link';
    nextLink.href = '#';
    nextLink.textContent = 'Next';
    nextLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayRecipes();
            displayPagination();
        }
    });
    nextLi.appendChild(nextLink);
    ul.appendChild(nextLi);

    pagination.appendChild(ul);
}

function toggleLayout() {
    isGridView = !isGridView;
    const button = document.getElementById('layoutToggle');
    button.innerHTML = isGridView ? '<i class="fas fa-th"></i> Grid' : '<i class="fas fa-list"></i> List';
    displayRecipes();
}
