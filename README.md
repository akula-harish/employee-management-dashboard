##### Employee Management Dashboard #####  

 ** Project overview **

# Step1: Created Login Page

The Login Page is created to implement basic authentication as required in the assignment.
It ensures that:

- Only authenticated users can access the Dashboard
- Unauthenticated users are redirected to the Login page

Since the assignment allows mock authentication, no real backend API is used.

@@ Folder Structure For That@@  

src/
├── pages/
│   └── Login.jsx
│
├── components/
│   └── auth/
│       ├── LoginForm.jsx
│       └── LoginForm.css
│
├── context/
│   └── AuthContext.jsx


## -------------------------------------------------------  ##

# Step2: Created Dashboard Page

Accessing the Dashboard:

- After entering valid login credentials, the user is redirected to the Dashboard page
- The Dashboard route is protected, so it cannot be accessed without successful login

Dashboard Page Structure:

Inside the Dashboard page, two main components are rendered:

- SummaryCards
- EmployeeTable

1) SummaryCards Component:

The SummaryCards component displays high-level employee information
It shows:
- Total number of employees
- Active employees count
- Inactive employees count
- The values are calculated dynamically based on employee data
- This gives a quick overview of employee status after entering the dashboard.

2) EmployeeTable Component

- The EmployeeTable component displays the list of all employees
- At the top, a “+ Add Employee” button is shown
- Clicking this button opens the EmployeeForm component.

Add / Edit Employee (EmployeeForm Component):
The EmployeeForm is a reusable form used for both Add and Edit operations

The following fields are available in the form:

Full Name, Gender, Date of Birth, Profile Image upload, State selection (dropdown), Active / Inactive checkbox, Image preview is shown before saving, Basic validation is added to ensure required fields are filled.

Two buttons are provided:
1) Save – to store employee details
2) Cancel / Close – to close the form without saving.

Saving Employee Details
When the Save button is clicked:

- Employee details are stored in LocalStorage
- The employee list is updated immediately
- The new employee appears in the Employee Table

Employee Table Actions

Each employee row displays:

Employee ID, Profile Image, Name, Gender, Date of Birth, State, Active / Inactive status toggle

The following action buttons are available:

1) Edit – opens the EmployeeForm with existing data
2) Delete – removes employee after confirmation
3) Print – prints the employee list using browser print option

Search & Filter Functionality:

- A search input is provided to filter employees by name
- Dropdown filters are provided for:
    Gender
    Active / Inactive status
- Filters work together using combined filtering logic
- The filteredEmployees list is used to display only matching records.

State Management:

- Employee data is managed using Context API
- All employee information is stored in LocalStorage
- Data persists even after page refresh.

## ------------------------------------------------------------- ##



## Tech Stack Used
- React.js (JavaScript)
- React Router DOM
- Context API (for state management)
- LocalStorage (Mock API)
- HTML5 & CSS3


## Steps to Run the Project Locally

### 1. Prerequisites
Ensure the following are installed on your system:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Check versions using:
  bash:
    node -v
    npm -v



## 2. Install Dependencies
npm install


## 3. Start the Application
npm start
The application will be available at:
http://localhost:3000


## Assumptions & Design Decisions:
- Authentication is mocked using fixed credentials as permitted in the assignment.
- LocalStorage is used to simulate backend API behavior for employee data.
- Context API is used to manage global state instead of external libraries to keep the project simple.
- The same employee form component is reused for both Add and Edit operations.
- Browser print functionality is used for printing employee details.



## Login Credentials (Mock):
Email: harishhag8@gmail.com
Password: akula
