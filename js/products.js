//get products
const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
    console.log(data.products);
  } catch (err) {
    console.log(err);
  }
};

getProducts();
//loading products
window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  displayProductItems(products);
  console.log(products);
});

const categoryCenter = document.querySelector(".category__center");

//display products
const displayProductItems = (items) => {
  let displayProduct = items.map((product) => {
    return ` <div class="product category__product">
    <div class="product__header">
      <img
        src=${product.image}
        alt=""
      />
    </div>
    <div class="product__footer">
      <h3>${product.title}</h3>
      <div class="rating">
        <svg>
          <use
            xlink:href="./images/sprite.svg#icon-star-full"
          ></use>
        </svg>
        <svg>
          <use
            xlink:href="./images/sprite.svg#icon-star-full"
          ></use>
        </svg>
        <svg>
          <use
            xlink:href="./images/sprite.svg#icon-star-full"
          ></use>
        </svg>
        <svg>
          <use
            xlink:href="./images/sprite.svg#icon-star-full"
          ></use>
        </svg>
        <svg>
          <use
            xlink:href="./images/sprite.svg#icon-star-full"
          ></use>
        </svg>
      </div>
      <div class="product__price">
        <h4>$${product.price}</h4>
        <a href="#">
          <button class="product__btn" type="button">
            Add To Cart
          </button>
        </a>
      </div>
    </div>
    <ul>
      <li>
        <a href="#">
          <svg>
            <use
              xlink:href="./images/sprite.svg#icon-eye"
            ></use>
          </svg>
        </a>
      </li>

      <li>
        <a href="#">
          <svg>
            <use
              xlink:href="./images/sprite.svg#icon-heart-o"
            ></use>
          </svg>
        </a>
      </li>

      <li>
        <a>
          <svg>
            <use
              xlink:href="./images/sprite.svg#icon-loop2"
            ></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>`;
  });
  displayProduct = displayProduct.join("");
  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
};

//filtering
const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.querySelector("#category");

if (categoryContainer) {
  categoryContainer.addEventListener("click", async (e) => {
    const target = e.target.closest(".section__title");
    console.log(target);
    if (!target) return;

    const id = target.dataset.id;
    console.log(id);

    const products = await getProducts();

    if (id) {
      //remove active from buttons
      filterBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      //add active to active-filter-btn
      target.classList.add("active");

      //load
      let menuCategory = products.filter((product) => {
        if (product.category === id) {
          return product;
        }
      });
      if (id === "All Products") {
        displayProductItems(products);
      } else {
        displayProductItems(menuCategory);
      }
    }
  });
}
