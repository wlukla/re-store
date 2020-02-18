export default class BookstoreService {

  _booksList = [
    {
      id: 1,
      title: 'Rework',
      author: 'David Heinemeier Hansson and Jason Fried',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71SqvmjaM3L.jpg',
    },
    {
      id: 2,
      title: 'Undercover Economist',
      author: 'Tim Harford',
      price: 14,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81vAoBSuiLL.jpg',
    },
    {
      id: 3,
      title: 'What If?',
      author: 'Randall Munroe',
      price: 17,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71ZC0Vf4EeL.jpg',
    }
  ];

  getBooks() {
    return new Promise((resolve,) => {
      setTimeout(() => {
        resolve(this._booksList);
      }, 700)
    })
  }
}
