const books = [
  {
    title: "12 Rules For Life",
    chapter: "3",
    author: "Jordan B. Peterson",
    genre: "self-help",
    picture: "src/img/12.jpg",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolor error rerum adipisci officia nobis maiores porro ",
  },
  {
    title: "Basic Economics",
    chapter: "5",
    author: "Thomas Sowell",
    genre: "Economics",
    picture: "src/img/basicE.jpeg",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolor error rerum adipisci officia nobis maiores porro ",
  },
  {
    title: "Laws of Human Nature",
    chapter: "6",
    author: "Robert greene",
    genre: "Psychology",
    picture: "src/img/lhm.jpg",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolor error rerum adipisci officia nobis maiores porro ",
  },
  // {
  //   title: "Sapiens",
  //   chapter: "4",
  //   author: "Yuval Harrari",
  //   genre: "history",
  //   picture: '',
  //   summary: '',
  // },
  // {
  //   title: "The Black Swan",
  //   chapter: "6",
  //   author: "Nassim Taleb",
  //   genre: "Psychology",
  //   picture: '',
  //   summary: '',
  // },
  // {
  //   title: "Deep Work",
  //   chapter: "3",
  //   author: "Cal Newport",
  //   genre: "self-help",
  //   picture: '',
  //   summary: '',
  // },
  // {
  //   title: "The Psychology of Money",
  //   chapter: 14,
  //   author: "morgan housel",
  //   genre: "finance",
  //   picture: '',
  //   summary: '',
  // },
  // {
  //   title: "americana",
  //   chapter: 4,
  //   author: "bhu srinivasan",
  //   genre: "history",
  //   picture: '',
  //   summary: '',
  // },
  // {
  //   title: "the selfish gene",
  //   chapter: 5,
  //   author: "richard dawkins",
  //   genre: "science",
  //   picture: '',
  //   summary: '',
  // }
];

function createHtmlElement(type, id, classArray, text) {
  const element = document.createElement(type);

  if (id) {
    element.id = id;
  }

  if (classArray) {
    classArray.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function appendHtmlElements(parent, children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}

function createCard(picture, title, chapter, author, genre, summary) {
  const card = createHtmlElement("div", null, ["card"], null);

  const upperCard = createHtmlElement("div", null, ["upper-card"], null);
  upperCard.style.backgroundImage = `url(${picture})`;

  const lowerCard = createHtmlElement("div", null, ["lower-card"], null);

  const bookImg = createHtmlElement("div", null, ["book-img"], null);
  const bookTitle = createHtmlElement("span", null, ["book-title"], title);

  appendHtmlElements(bookImg, [bookTitle]);
  appendHtmlElements(upperCard, [bookImg]);

  const lowerCardUp = createHtmlElement("div", null, ["lower-card-up"], null);

  const bookInfo = createHtmlElement("div", null, ["book-info"], null);
  const bookChapter = createHtmlElement(
    "span",
    null,
    ["book-chapter"],
    `Chapter ${chapter}`
  );
  const bookAuthor = createHtmlElement("span", null, ["book-author"], author);
  const bookGenre = createHtmlElement("span", null, ["book-genre"], genre);
  appendHtmlElements(bookInfo, [bookChapter, bookAuthor, bookGenre]);

  const cardIcons = createHtmlElement("div", null, ["card-icons"], null);

  const downlaodImg = createHtmlElement("img", null, null, null);
  downlaodImg.src = "src/icons/download-icon.svg";
  const readImg = createHtmlElement("img", null, null, null);
  readImg.src = "src/icons/read-icon.svg";

  appendHtmlElements(cardIcons, [downlaodImg, readImg]);

  appendHtmlElements(lowerCardUp, [bookInfo, cardIcons]);

  const lowerCardDown = createHtmlElement(
    "div",
    null,
    ["lower-card-down"],
    null
  );

  const bookSummary = createHtmlElement("p", null, null, summary);

  appendHtmlElements(lowerCardDown, [bookSummary]);

  appendHtmlElements(lowerCard, [lowerCardUp, lowerCardDown]);

  appendHtmlElements(card, [upperCard, lowerCard]);

  return card;
}

function renderCards(bookObject) {
  const bookCards = document.querySelector(".book-cards");

  bookObject.forEach((book) => {
    bookCards.appendChild(
      createCard(
        book.picture,
        book.title,
        book.chapter,
        book.author,
        book.genre,
        book.summary
      )
    );
  });
}

renderCards(books);
