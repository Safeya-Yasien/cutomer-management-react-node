# steps

1. create a new project using npm init
2. install express and mongoose
3. create a new file index.js
4. add typescript config
5. create a new file index.ts

# why i install express-validator

- in mongoose there is a validation function that you can use to validate the data before saving it to the database
  but i use express-validator to validate the email and phone number instead of validation function which needs regular expression (RegExp)

# why unique email and phone not work

- it's only conflict from database not from the code
  which i deleted all customers then restart the server and add a new customer with the same email and phone number it will work
