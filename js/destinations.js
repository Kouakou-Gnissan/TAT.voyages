let currentPage = 1;
const itemsPerPage = 6;
let filteredDestinations = [];

document.addEventListener('DOMContentLoaded', function() {
    initPagination();
    setupEventListeners();
});

function initPagination() {
    filteredDestinations = [...destinationsDB];
    renderDestinations();
    updatePagination();
}

function setupEventListeners() {
    document.querySelectorAll('.category__card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.category__card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });

    const searchInput = document.getElementById('search-destinations');
    searchInput.addEventListener('input', function() {
        filterDestinations(this.value);
    });
}

function filterByCategory(category) {
    if (category === 'all') {
        filteredDestinations = [...destinationsDB];
    } else {
        filteredDestinations = destinationsDB.filter(dest => dest.category === category);
    }
    currentPage = 1;
    renderDestinations();
    updatePagination();
}

function filterDestinations(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredDestinations = destinationsDB.filter(dest => 
        dest.title.toLowerCase().includes(term) || 
        dest.description.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderDestinations();
    updatePagination();
}

function performSearch() {
    const searchTerm = document.getElementById('search-destinations').value;
    filterDestinations(searchTerm);
}

function renderDestinations() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDestinations = filteredDestinations.slice(startIndex, endIndex);
    
    const container = document.getElementById('destinations-container');
    container.innerHTML = currentDestinations.map(destination => `
        <div class="destination-item" data-category="${destination.category}">
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.title}">
                <div class="destination-badge">${getBadgeText(destination)}</div>
                <div class="destination-overlay">
                    <button class="btn quick-view-btn" onclick="openDestinationDetail(${destination.id})">
                        Voir détails
                    </button>
                </div>
            </div>
            <div class="destination-content">
                <div class="destination-header">
                    <h3>${destination.title}</h3>
                    <div class="destination-rating">
                        <i class="ri-star-fill"></i>
                        <span>${destination.rating}</span>
                    </div>
                </div>
                <p class="destination-description">${destination.description}</p>
                <div class="destination-meta">
                    <div class="meta-item">
                        <i class="ri-calendar-line"></i>
                        <span>${destination.duration} jours</span>
                    </div>
                    <div class="meta-item">
                        <i class="ri-flight-takeoff-line"></i>
                        <span>Vol inclus</span>
                    </div>
                </div>
                <div class="destination-footer">
                    <div class="destination-price">
                        <span class="price-from">À partir de</span>
                        <span class="price-amount">${destination.price}€</span>
                    </div>
                    <button class="btn destination-btn" onclick="openDestinationDetail(${destination.id})">
                        Voir offre
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    updatePaginationInfo();
}

function getBadgeText(destination) {
    if (destination.rating >= 4.8) return "Populaire";
    if (destination.price > 1500) return "Luxe";
    return "Nouveau";
}

function updatePagination() {
    const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination-numbers');
    const prevBtn = document.querySelector('.pagination-arrow.prev');
    const nextBtn = document.querySelector('.pagination-arrow.next');
    
    prevBtn.classList.toggle('disabled', currentPage === 1);
    nextBtn.classList.toggle('disabled', currentPage === totalPages || totalPages === 0);
    
    let paginationHTML = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <li>
                <a href="#" class="pagination-number ${i === currentPage ? 'active' : ''}" 
                   onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }
    
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderDestinations();
    updatePagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updatePaginationInfo() {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, filteredDestinations.length);
    const totalItems = filteredDestinations.length;
    
    document.getElementById('start-item').textContent = startItem;
    document.getElementById('end-item').textContent = endItem;
    document.getElementById('total-items').textContent = totalItems;
}

function openDestinationDetail(destinationId) {
    localStorage.setItem('currentDestinationId', destinationId);
    window.location.href = 'destination-detail.html';
}