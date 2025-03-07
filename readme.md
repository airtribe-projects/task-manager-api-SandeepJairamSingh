# Task Scheduler API

## Overview
This is a simple **Task Management API** built with **Node.js and Express.js**, using **in-memory storage**. The API allows users to:
- **Create** tasks with a title, description, priority, and completion status.
- **Retrieve** tasks, with options for filtering by completion status and sorting by creation date.
- **Update** task details.
- **Delete** tasks.

## Prerequisites
- Install **Node.js** (v14 or higher)
- Install **Postman** (optional, for testing API requests)

## Setup Instructions
```sh
# Clone this repository
git clone https://github.com/airtribe-projects/airtribe-engineering-learners-task-manager-api-task-manager.git
cd task-scheduler-api

# Install dependencies
npm install

# Start the server
npm start
```

- The API will be available at:
```sh
http://localhost:3000
```

## API Endpoints

### Create a Task
**Endpoint: POST /tasks**

**Request Body:**
```json
{
  "title": "Create API documentation",
  "description": "Write detailed API documentation for the project",
  "priority": "high"
}
```

**Response Body:**
```json
{
  "id": 1,
  "title": "Create API documentation",
  "description": "Write detailed API documentation for the project",
  "completed": false,
  "priority": "high",
  "createdAt": "2024-03-04T12:00:00Z"
}
```

### Get All Tasks
**Endpoint: GET /tasks**

**Query Parameters:**

- ?completed=true (Filter tasks by completion status)
- ?sort=asc (Sort tasks by creation date in ascending order)

**Response Body:**
```json
[
  {
    "id": 1,
    "title": "Create API documentation",
    "description": "Write detailed API documentation for the project",
    "completed": false,
    "priority": "high",
    "createdAt": "2024-03-04T12:00:00Z"
  }
]
```

### Get Task by ID
**Endpoint: GET /tasks/:id**

**Example Request:** GET /tasks/1

**Response Body:**
```json
{
  "id": 1,
  "title": "Create API documentation",
  "description": "Write detailed API documentation for the project",
  "completed": false,
  "priority": "high",
  "createdAt": "2024-03-04T12:00:00Z"
}
```

### Update a Task
**Endpoint: PUT /tasks/:id**

**Example Request:** PUT /tasks/1

**Request Body:**
```json
{
  "completed": true
}
```

**Response Body:**
```json
{
  "id": 1,
  "title": "Create API documentation",
  "description": "Write detailed API documentation for the project",
  "completed": true,
  "priority": "high",
  "createdAt": "2024-03-04T12:00:00Z"
}
```

### Delete a Task
**Endpoint: DELETE /tasks/:id**

**Example Request:** DELETE /tasks/1

**Response Body:**
```json
{
  "message": "Task deleted successfully"
}
```

### Get Tasks by Priority
**Endpoint: GET /tasks/priority/:level**

**Example Request:** GET /tasks/priority/high

**Response Body:**
```json
[
  {
    "id": 2,
    "title": "Fix critical bug",
    "description": "Resolve issue in login module",
    "completed": false,
    "priority": "high",
    "createdAt": "2024-03-04T13:00:00Z"
  }
]
```