const menuData = [
    {
        id: 1,
        name: "Classic Smash Burger",
        category: "burger",
        price: 12.99,
        rating: 4.8,
        image: "images/hero_burger.png",
        description: "Double beef patty, melted cheese, secret sauce, crispy onions on a brioche bun."
    },
    {
        id: 2,
        name: "Truffle Mushroom Pizza",
        category: "pizza",
        price: 18.50,
        rating: 4.9,
        image: "images/pizza_food.png",
        description: "Wood-fired crust, wild mushrooms, truffle oil, mozzarella, and fresh thyme."
    },
    {
        id: 3,
        name: "Spicy Miso Ramen",
        category: "asian",
        price: 15.00,
        rating: 4.7,
        image: "images/ramen_bowl.png",
        description: "Rich pork broth, chashu, soft-boiled egg, scallions, and spicy chili paste."
    },
    {
        id: 4,
        name: "Dragon Sushi Roll",
        category: "asian",
        price: 19.99,
        rating: 4.9,
        image: "images/sushi_plate.png",
        description: "Eel and cucumber topped with sliced avocado, tobiko, and unagi sauce."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menuGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Render Menu Cards
    function renderMenu(filter = 'all') {
        menuGrid.innerHTML = '';
        const filteredData = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);
        
        filteredData.forEach((item, index) => {
            const delay = index * 0.1;
            const card = document.createElement('div');
            card.className = 'food-card';
            card.style.animationDelay = `${delay}s`;
            
            card.innerHTML = `
                <div class="food-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="food-img">
                    <div class="food-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="food-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="food-action">
                        <div class="food-rating">
                            <span class="star-icon">★</span> ${item.rating}
                        </div>
                        <button class="add-to-cart-btn" aria-label="Add to cart">+</button>
                    </div>
                </div>
            `;
            menuGrid.appendChild(card);
        });
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.getAttribute('data-filter'));
        });
    });

    // Initial render
    renderMenu();
});
