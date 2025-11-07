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

### what is the problem in ip address cause this error

Error: querySrv ETIMEOUT \_mongodb.\_tcp.customercluster.xyrl1tf.mongodb.net

the error was in access point (access router) not the main router so i changed the DNS server address

- go to control panel
- open network and internet
- then choose your network
- go to properties
- go to internet protocol version 4
- choose the properties
- then choose the dns server
- then add the dns server address
- i added 8.8.8.8 and 1.1.1.1
- delete the dns server address cache
- restart the server
- you may need to restart the computer

# how to search customers by multiple fields

# how to solve this error any why appears <$regex has to be a string>

- this error appears in searchCustomers function when i use $regex
- so the solution is to easy make value or regex string even if it's a dynamic value or number you can use `${value}`
