import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!){
   loginUser(email: $email, password: $password) {
     token
     user {
            _id
            username
     }
   }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
                  }
    }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($book: savedBook) {
    saveBook(input: $input) {
            _id
            username
            email
            savedBooks {
              authors
              description
               title
               bookId
               image
               link
              
            }
        }
   }
`;

export const REMOVE_BOOK = gql`
   mutation removeBook ($bookId: ID!){
      removeBook(bookID: $bookId) {
             _id
            username
            email
            bookCount
            savedBooks {
               description
               title
               bookId
               image
               link
               authors
            }
        }
    }
`;

