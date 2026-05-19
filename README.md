{
  "info": {
    "_postman_id": "d9b6eb5f-5894-43c0-9a32-89fba25227e6",
    "name": "NOTE API",
    "description": "### Welcome to Postman! This is your first collection. \n\nCollections are your starting point for building and testing APIs. You can use this one to:\n\n• Group related requests\n• Test your API in real-world scenarios\n• Document and share your requests\n\nUpdate the name and overview whenever you’re ready to make it yours.\n\n[Learn more about Postman Collections.](https://learning.postman.com/docs/collections/collections-overview/)",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "53419907",
    "_collection_link": "https://go.postman.co/collection/53419907-d9b6eb5f-5894-43c0-9a32-89fba25227e6?source=collection_link"
  },
  "item": [
    {
      "name": "Get All Notes",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes?search=api",
          "protocol": "https",
          "host": [
            "betechified-advanced-class-group-1-mar26",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "notes"
          ],
          "query": [
            {
              "key": "search",
              "value": "api"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Get Note",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0af386bb0d5ade64668126",
          "protocol": "https",
          "host": [
            "betechified-advanced-class-group-1-mar26",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "notes",
            "6a0af386bb0d5ade64668126"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Create Note",
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "method": "GET",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n\"title\": \"Meet\",\r\n  \"content\": \"Discuss backend\",\r\n  \"category\": \"Work\",\r\n  \"tags\": [\"backends\", \"api\"]\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0ae9fce4a1e14861ce52f6",
          "protocol": "https",
          "host": [
            "betechified-advanced-class-group-1-mar26",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "notes",
            "6a0ae9fce4a1e14861ce52f6"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Update Note",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": " {\r\n       \r\n        \"title\": \"Backend intergration\",\r\n        \"content\": \"Build simple HTML interface for notes app\",\r\n        \"category\": \"Personal\",\r\n        \"tags\": [\r\n            \"frontend\",\r\n            \"ui\"\r\n        ]\r\n }",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0b25469d2a9b71ed4f221b",
          "protocol": "https",
          "host": [
            "betechified-advanced-class-group-1-mar26",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "notes",
            "6a0b25469d2a9b71ed4f221b"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Delete Note",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0b29d8d40ab58bbb5db154",
          "protocol": "https",
          "host": [
            "betechified-advanced-class-group-1-mar26",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "notes",
            "6a0b29d8d40ab58bbb5db154"
          ]
        }
      },
      "response": []
    }
  ]
}


  {
      "name": "Delete Note",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0b29d8d40ab58bbb5db154",
          "protocol": "https",
          "host": [
            "betechified-advanced-class-group-1-mar26",
            "onrender",
            "com"
          ],
          "path": [
            "api",
            "notes",
            "6a0b29d8d40ab58bbb5db154"
          ]
        }
      },
      "response": []
    }


    # 📝 Notes API Documentation

## Base URL

```http
https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes
```

---

# 📌 Overview

The Notes API allows users to:

* Create notes
* Retrieve notes
* Search notes
* Paginate notes
* Update notes
* Delete notes

---

# 📂 Data Model

| Field    | Type             | Required |
| -------- | ---------------- | -------- |
| title    | String           | ✅ Yes    |
| content  | String           | ✅ Yes    |
| category | String           | ❌ No     |
| tags     | Array of Strings | ❌ No     |

---

# 🚀 Endpoints

---

# 1️⃣ Get All Notes

Retrieve all notes with optional search and pagination.

## Endpoint

```http
GET /api/notes
```

## Example Request

```http
GET https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes
```

---

# 🔍 Search Notes

Search notes by title or content.

## Example

```http
GET https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes?search=api
```

---

# 📄 Pagination

Retrieve notes page by page.

## Example

```http
GET https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes?page=2&limit=5
```

---

# 🔍 Pagination + Search Together

## Example

```http
GET https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes?search=backend&page=1&limit=5
```

---

# ✅ Success Response

```json
{
  "success": true,
  "count": 2,
  "total": 10,
  "page": 1,
  "pages": 5,
  "notes": [
    {
      "_id": "6a0af386bb0d5ade64668126",
      "title": "Meeting",
      "content": "Discuss backend API",
      "category": "Work",
      "tags": ["backend", "api"]
    }
  ]
}
```

---

# 2️⃣ Get Single Note

Retrieve one note by ID.

## Endpoint

```http
GET /api/notes/:id
```

## Example

```http
GET https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0af386bb0d5ade64668126
```

---

# ✅ Success Response

```json
{
  "success": true,
  "note": {
    "_id": "6a0af386bb0d5ade64668126",
    "title": "Meeting",
    "content": "Discuss backend API",
    "category": "Work"
  }
}
```

---

# 3️⃣ Create Note

Create a new note.

## Endpoint

```http
POST /api/notes
```

## Example Request

```http
POST https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes
```

## Request Body

```json
{
  "title": "Meet",
  "content": "Discuss backend",
  "category": "Work",
  "tags": ["backend", "api"]
}
```

---

# ✅ Success Response

```json
{
  "success": true,
  "note": {
    "_id": "6a0ae9fce4a1e14861ce52f6",
    "title": "Meet",
    "content": "Discuss backend",
    "category": "Work",
    "tags": ["backend", "api"]
  }
}
```

---

# 4️⃣ Update Note

Update an existing note.

## Endpoint

```http
PUT /api/notes/:id
```

## Example

```http
PUT https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0b25469d2a9b71ed4f221b
```

## Request Body

```json
{
  "title": "Backend integration",
  "content": "Build simple HTML interface for notes app",
  "category": "Personal",
  "tags": ["frontend", "ui"]
}
```

---

# ✅ Success Response

```json
{
  "success": true,
  "note": {
    "_id": "6a0b25469d2a9b71ed4f221b",
    "title": "Backend integration",
    "content": "Build simple HTML interface for notes app"
  }
}
```

---

# 5️⃣ Delete Note

Delete a note by ID.

## Endpoint

```http
DELETE /api/notes/:id
```

## Example

```http
DELETE https://betechified-advanced-class-group-1-mar26.onrender.com/api/notes/6a0b29d8d40ab58bbb5db154
```

---

# ✅ Success Response

```json
{
  "success": true,
  "message": "Note deleted successfully"
}
```

---

# ⚠️ Error Responses

## Validation Error

```json
{
  "message": "\"title\" is required"
}
```

---

## Note Not Found

```json
{
  "message": "Note not found"
}
```

---

# 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Joi Validation
* Render Deployment

---

# 📬 Postman Collection

Postman Collection Link:

https://go.postman.co/collection/53419907-d9b6eb5f-5894-43c0-9a32-89fba25227e6?source=collection_link
