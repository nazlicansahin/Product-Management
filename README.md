# Product Management Website 


Welcome to the Product Management Website project, built using Next.js NodeJS and MongoDB. This web application provides a platform to efficiently manage and showcase your products. With a user-friendly interface and seamless integration, you can easily add, edit, delete your products.

This read.me Includes
- How it works Video
- NextJS usage
- API's
- What did I learn while doing this project?
- What should I learn
## How It Works Video Link 

https://youtu.be/EnTMd57SIqY

## Features

- **Product Listing:** Display your products in list with details.
- **Product Add:** adding product to database
- **Product Update:** uptadating product at database/ finds wit id
- **Product Delete:** delete product at database

# Getting Started
## Installation and Usage

#### 1. Clone the repository to your local machine.
#### 2. Install dependencies using `npm install` or `yarn install`.
```bash 
/* open terminal */
> cd my-app //first
> npm i  //second
> npm i  react-icons, mongoose,  //third
```

####  3. Configure your MongoDB connection in the `.env` file.

MONGODB_URI = Create your MongoDB project and cluster and database> connect > connect for visual studio
<your cluster name>

NEXTAUTH_SECRET = I wrote chracters randomly long and meaning does not matters.

NEXTAUTH_URL = http://localhost:3000   for use on your local
].
4. Run the application using cd my-app > npm run dev

#### 5. Access the application by navigating to `http://localhost:3000` in your browser.
### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies Used

- Next.js: A React framework for building server-rendered applications.
- MongoDB: A NoSQL database for storing and managing product data.
- NodeJS: a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications.
- React: React is a library allows developers to create large web applications that can change data, without reloading the page.

## Future Enhancements

**Login/Register Page:** provides user authentication functionalities, including a login and registration system.
**Giving Roles:**  admin and user panel

## License

This project is licensed under the [MIT]. See the [LICENSE](link-to-license-file) file for details.

For questions or support, please contact [your contact information].


## API Usage

#### ADD 

**Endpoint:** `POST /api/register`

Register a new user by sending a JSON payload containing the user's information to MongoDB.

Example Request:
```json
POST /api/addProduct
{
    //prod _id giving by mongo db so I dont add as prop

  "title": "test",
  "description": "testprod",
  "stock": 23,

}

```

#### EDIT
**Endpoint:** `PUT /api/editProduct`

```http
{
  "email": "test@test.com",
  "password": "securepassword"
}

```


# What I learned

This is a fullstack task but I am not (just planning to be 😅) also my first contact with the backend, so good for me 🎉

   - I leraned best pratices of placing files in directory
   - I learned how to use Postman to testing my http request
   - I learned usage of MongoDb and implementation to project
   - I learned writing basic endpoints
   - I gained experience using tailwind
   - I learned how websites works (bakcand sides)


# What I could not learn and I should learn
- I should learn bring together both process below

- **Admin Dashboard:** Log in to an admin dashboard where you can manage products, add new items, and update existing information.

- **User Authentication:** Secure user authentication using Next.js authentication libraries, ensuring authorized access to the admin features.

- **Access token usage at database**




## Acknowledgements

Feel free to explore the application, and we welcome any feedback or contributions to enhance its functionality and user experience.

For questions or support, please contact https://nazlican.dev/connectme 

