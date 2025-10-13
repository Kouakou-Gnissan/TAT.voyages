let currentPage = 1;
const itemsPerPage = 6;
let filteredArticles = [];

document.addEventListener('DOMContentLoaded', function() {
    initBlog();
    setupEventListeners();
});

function initBlog() {
    filteredArticles = [...blogDB];
    renderArticles();
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

    const searchInput = document.getElementById('search-blog');
    searchInput.addEventListener('input', function() {
        filterArticles(this.value);
    });
}

function filterByCategory(category) {
    if (category === 'all') {
        filteredArticles = [...blogDB];
    } else {
        filteredArticles = blogDB.filter(article => article.category === category);
    }
    currentPage = 1;
    renderArticles();
    updatePagination();
}

function filterArticles(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredArticles = blogDB.filter(article => 
        article.title.toLowerCase().includes(term) || 
        article.excerpt.toLowerCase().includes(term) ||
        article.author.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderArticles();
    updatePagination();
}

function performSearch() {
    const searchTerm = document.getElementById('search-blog').value;
    filterArticles(searchTerm);
}

function renderArticles() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentArticles = filteredArticles.slice(startIndex, endIndex);
    
    const container = document.getElementById('blog-container');
    container.innerHTML = currentArticles.map(article => `
        <article class="blog-article" data-category="${article.category}">
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}">
                ${article.featured ? '<div class="article-badge">À la une</div>' : ''}
                <div class="article-overlay">
                    <button class="btn read-article-btn" onclick="openArticleDetail(${article.id})">
                        Lire l'article
                    </button>
                </div>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${getCategoryLabel(article.category)}</span>
                    <span class="article-date">${article.date}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <div class="article-author">
                        <i class="ri-user-line"></i>
                        <span>${article.author}</span>
                    </div>
                    <div class="article-read-time">
                        <i class="ri-time-line"></i>
                        <span>${article.readTime}</span>
                    </div>
                </div>
                <button class="btn article-btn" onclick="openArticleDetail(${article.id})">
                    Lire la suite
                </button>
            </div>
        </article>
    `).join('');
    
    updatePaginationInfo();
}

function getCategoryLabel(category) {
    const labels = {
        'conseils': 'Conseils',
        'aventures': 'Récits',
        'guides': 'Guides',
        'inspiration': 'Inspiration'
    };
    return labels[category] || category;
}

function updatePagination() {
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
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
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderArticles();
    updatePagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updatePaginationInfo() {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, filteredArticles.length);
    const totalItems = filteredArticles.length;
    
    document.getElementById('start-item').textContent = startItem;
    document.getElementById('end-item').textContent = endItem;
    document.getElementById('total-items').textContent = totalItems;
}

function openArticleDetail(articleId) {
    localStorage.setItem('currentArticleId', articleId);
    window.location.href = 'article-detail.html';
}