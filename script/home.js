
    // <h1>E-commerce Website with Async/Await Syntax</h1>
    // <div id="articles-list"></div>

   
        // Fetch articles from API using async/await syntax
        async function fetchArticles() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const articles = await response.json();
                // Display articles
                const articlesList = document.getElementById('articles-list');
                articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.innerHTML = `<h2>${article.title.slice(0,23)}</h2>
                    <img src =${article.image}>
                    <p>${article.description.slice(0,30)}</p>
                    <button onclick="addTo()">Add To Cart</button>
                    <p>Price: $${article.price}</p>`;
                    articlesList.appendChild(articleElement);
                    

                    // article.classlist.add('article-box')
                });
            } catch (error) {
                console.error('There was a problem fetching articles:', error);
            }
        }

        fetchArticles();
   

        let count = 0;
        const addTo = () =>{
         count++; 
         document.getElementById('addToCart').innerText = count;
         
         console.log(articleSrc);   
        }
