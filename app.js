// QuoteDaily App
(function() {
    'use strict';

    // Configuration
    const ITEMS_PER_PAGE = 12;
    
    // State
    let currentPage = 1;
    let filteredQuotes = [];
    let currentCategory = null;
    let searchQuery = '';

    // DOM Elements
    const quotesContainer = document.getElementById('quotesContainer');
    const noResults = document.getElementById('noResults');
    const searchInput = document.getElementById('searchInput');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageInfo = document.getElementById('pageInfo');
    const toast = document.getElementById('toast');

    // Initialize
    function init() {
        // Check if we're on a category page
        const path = window.location.pathname;
        const categoryMatch = path.match(/category\/(\w+)\.html/);
        
        if (categoryMatch) {
            currentCategory = categoryMatch[1];
            filteredQuotes = quotesData.filter(q => q.category === currentCategory);
        } else {
            filteredQuotes = [...quotesData];
        }

        renderQuotes();
        setupEventListeners();
        updatePagination();
    }

    // Setup event listeners
    function setupEventListeners() {
        if (searchInput) {
            searchInput.addEventListener('input', debounce(handleSearch, 300));
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => changePage(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => changePage(1));
        }
    }

    // Debounce function for search
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Handle search
    function handleSearch(e) {
        searchQuery = e.target.value.toLowerCase().trim();
        
        if (searchQuery === '') {
            if (currentCategory) {
                filteredQuotes = quotesData.filter(q => q.category === currentCategory);
            } else {
                filteredQuotes = [...quotesData];
            }
        } else {
            filteredQuotes = quotesData.filter(quote => {
                const matchesSearch = quote.text.toLowerCase().includes(searchQuery) ||
                                    quote.author.toLowerCase().includes(searchQuery);
                if (currentCategory) {
                    return matchesSearch && quote.category === currentCategory;
                }
                return matchesSearch;
            });
        }

        currentPage = 1;
        renderQuotes();
        updatePagination();
    }

    // Render quotes
    function renderQuotes() {
        if (!quotesContainer) return;

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const quotesToShow = filteredQuotes.slice(startIndex, endIndex);

        if (quotesToShow.length === 0) {
            quotesContainer.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        
        quotesContainer.innerHTML = quotesToShow.map(quote => `
            <article class="quote-card">
                <p class="quote-text">${escapeHtml(quote.text)}</p>
                <div class="quote-meta">
                    <span class="quote-category">${formatCategory(quote.category)}</span>
                    <button class="copy-btn" onclick="copyQuote(${quote.id})" aria-label="Copy quote">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy
                    </button>
                </div>
            </article>
        `).join('');
    }

    // Update pagination
    function updatePagination() {
        if (!pageInfo || !prevBtn || !nextBtn) return;

        const totalPages = Math.ceil(filteredQuotes.length / ITEMS_PER_PAGE) || 1;
        
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage >= totalPages;
    }

    // Change page
    function changePage(direction) {
        const totalPages = Math.ceil(filteredQuotes.length / ITEMS_PER_PAGE);
        const newPage = currentPage + direction;

        if (newPage >= 1 && newPage <= totalPages) {
            currentPage = newPage;
            renderQuotes();
            updatePagination();
            scrollToTop();
        }
    }

    // Scroll to top smoothly
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Copy quote to clipboard
    window.copyQuote = function(quoteId) {
        const quote = quotesData.find(q => q.id === quoteId);
        if (!quote) return;

        const textToCopy = quote.author 
            ? `"${quote.text}" — ${quote.author}`
            : quote.text;

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast();
                animateCopyButton(quoteId);
            }).catch(err => {
                fallbackCopy(textToCopy);
            });
        } else {
            fallbackCopy(textToCopy);
        }
    };

    // Fallback copy method
    function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Failed to copy:', err);
        }

        document.body.removeChild(textArea);
    }

    // Show toast notification
    function showToast() {
        if (!toast) return;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    // Animate copy button
    function animateCopyButton(quoteId) {
        const buttons = document.querySelectorAll('.copy-btn');
        buttons.forEach(btn => {
            if (btn.getAttribute('onclick') === `copyQuote(${quoteId})`) {
                const originalText = btn.innerHTML;
                btn.classList.add('copied');
                btn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                `;
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = originalText;
                }, 2000);
            }
        });
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Format category name
    function formatCategory(category) {
        const categoryNames = {
            inspirational: 'Inspirational',
            love: 'Love',
            life: 'Life',
            funny: 'Funny',
            positive: 'Positive',
            work: 'Work',
            social: 'Social'
        };
        return categoryNames[category] || category;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
