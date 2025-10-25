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

# how i convert first name and last name to full name

- i use virtual property to get the full name
- by using the virtual property, i can get the full name without saving it to the database
- virtual means that it's not saved to the database and it's not returned when you call the find method

# how i convert the \_id to id and hide \_\_v

- i use virtual property to get the id
- by using toJSON which i add transform function to remove the \_id property
- by using toObject which i add virtuals: true
- also i hide the \_\_v property by versionKey: false

# options error appears how i fix it

- by adding the options as any and add schemaOptions type from mongoose to the schema

# how to convert mongo timestamp to last update such as "a few seconds ago"

-
