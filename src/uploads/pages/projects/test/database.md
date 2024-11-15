---
layout: IT
title: RelaDB
image: /images/RelaDB.png
project: {author: 'D4r3d3vil', name: 'RelaDB'}
description: 'A set of python classes for working with a relational database system'
---
## About

 Rela DB is a lightweight and easy-to-use database management system designed specifically for Python developers. With SQLite compatibility, it provides a simple, fast API for managing database schemas, tables, and records, all within the familiar environment of Python. The best part is, it has complete type safety (no 🦶🏻🔫 ) and even documentation within the IDE (hover on any function to see args, desc, type, etc.).

### Inspiration
  
  I was working on my http server [FastHttp](https://github.com/D4r3d3vil/fasthttp) and I realized it needed a database. But, since it was lightweight, I didn't want a plain sql executor like python sqlite3, neither did I want an abstractaction that requires file classes.

## Code

### Installation

You can install Rela DB via pip:

```bash
pip install relaDB
```

### Getting Started

Let's start by creating a simple database and adding some tables to it.

```python
from relaDB import Database

# Initialize the database
db = Database()

# Create a table for storing user data
users_table = db.create("users", {"name": str, "age": int})

# Add some users to the table
users_table.add_row(name="Alice", age=30)
users_table.add_row(name="Bob", age=25)
users_table.add_row(name="Jimmy", age=16)
```

### Retrieving Data

Now, let's retrieve data from the `users` table.

```python
# Find a user by name
alice = users_table.find(lambda row: row.get("name") == "Alice")[0]
print(alice.get())  # Output: {'name': 'Alice', 'age': 30}

# Find users older than 18
adults = users_table.find(lambda row: row.get("age") > 18)
for user in adults:
    print(user.get())  # Output: {'name': 'Alice', 'age': 30}, {'name': 'Bob', 'age': 25}
```

### Updating Data

We can also update or add in existing records in the table.

```python
# Update Alice's age
alice.add_field("age", 31)
print(alice.get())  # Output: {'name': 'Alice', 'age': 31}
```

### Deleting Data

Deleting records from the table is straightforward as well.

```python
# Delete users younger than 18
users_table.delete_row(lambda row: row.get("age") < 18)
```

### Advanced Usage

Rela DB supports more advanced operations such as deleting tables, saving and loading databases from files, and more. For now, the only extension supported is sqlite.

```python
# Save the database to a file
db.db_file = "users.sqlite3"
db.save()
```

Once you have saved it, you can load the database:

```python
# Load the database from a file
db = Database('users.sqlite3') # only do this if it's in another file or you haven't called Database()
db.load()
for user in db.get('users').find():
    print(user.get()) # This is left empty to get the entire row if you would like to get a specific value of the row such as name or age, pass it in as a parameter.
```

### Conclusion

Rela DB provides a simple and efficient way to manage databases in Python applications. With its intuitive API and seamless integration with SQLite, developers can focus on building their applications without worrying about the complexities of database management.

Give Rela DB a try in your next Python project and experience the simplicity and speed it offers!

That's it for now! Stay tuned for more updates and features in Rela DB. Happy coding! 🚀

---
**Rela DB** | *Your go-to solution for lightweight database management in Python* | [GitHub](https://github.com/D4r3d3vil/RelaDB)