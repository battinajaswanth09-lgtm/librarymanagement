let books = [
  "The Alchemist",
  "Harry Potter",
  "Rich Dad Poor Dad",
  "Wings of Fire",
  "Atomic Habits"
];

function addBook() {
  const name = document.getElementById('bookName').value;
  if (name === '') return alert('Enter book name');

  books.push(name);
  document.getElementById('bookName').value = '';
  displayBooks();
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

function displayBooks() {
  const list = document.getElementById('bookList');
  list.innerHTML = '';

  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.innerHTML = `📖 ${book} <button class="delete" onclick="deleteBook(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

// Load initial data
window.onload = displayBooks;