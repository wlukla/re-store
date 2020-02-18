export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Rework',
        author: 'David Heinemeier Hansson and Jason Fried'
      },
      {
        id: 2,
        title: 'Undercover Economist',
        author: 'Tim Harford',
      },
      {
        id: 3,
        title: 'What If?',
        author: 'Randall Munroe',
      }
    ];
  }
}
