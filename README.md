# **📚 Recipe Book Application**

## **🌟 Overview**

The **Recipe Book Application** is a platform designed for food enthusiasts to manage, share, and discover their favorite culinary creations. This application allows users to store their personal recipes digitally, search through community-submitted dishes, and organize ingredients for easy meal planning.

It provides a clean, responsive interface to make cooking easier and more collaborative.

## **✨ Features**

* **User Authentication:** Secure user sign-up, login, and protected routes using JWTs.  
* **Recipe Management (CRUD):** Users can effortlessly Create, Read, Update, and Delete their own recipes.  
* **Detailed Recipe Views:** Each recipe includes fields for title, ingredients (with quantities), step-by-step instructions, and an image upload feature.  
* **Shopping List Generation:** Automatically compile a consolidated list of all necessary ingredients from selected recipes.  
* **Global Search:** Find recipes quickly by title, main ingredient, or category.  
* **Personal Collection:** Users can "save" or "favorite" recipes created by others to their personal collection.  
* **Responsive Design:** Optimized for viewing and use on both desktop and mobile devices.

## **💻 Technology Stack**

This project leverages the **MeteorJS** full-stack framework, which provides real-time data synchronization and a seamless development experience.

* **Core Framework:** **MeteorJS** (includes Node.js server, built-in MongoDB, and front-end integration).  
* **Frontend:** **Svelte** (for the UI, leveraging its reactive, compiler-driven approach).  
* **Styling:** **CSS** for a utility-first and responsive design approach.  
* **Database:** **MongoDB** (bundled with Meteor).

## **🚀 Getting Started**

Follow these steps to get a local copy of the project up and running.

### **Prerequisites**

You must have the following installed on your local machine:

* **Node.js** (LTS version recommended)  
* **Meteor:** Install via npm (npm install \-g meteor) or the official installer.

*(This project was developed on a Mac, but the installation steps should work on any operating system supporting Node.js and Meteor.)*

### **Installation**

1. **Clone the repository:**  
   git clone \[https://github.com/sarahjoy18/recipe-book.git\](https://github.com/sarahjoy18/recipe-book.git)  
   cd recipe-book

2. **Install Node Dependencies:**  
   Use the Meteor-specific npm command to install packages defined in package.json:  
   meteor npm install

3. **Configure Environment Variables (Optional):**  
   If you are connecting to an external MongoDB instance or setting specific server secrets, create a file named .env in the root directory.  
   MONGO\_URL="mongodb://127.0.0.1:27017/recipe\_db"  
   \# Other secrets or settings 

4. **Run the Application:**  
   Meteor handles the client and server startup, as well as the local MongoDB instance (if not specified otherwise).  
   meteor

The application will now be running at http://localhost:3000 (or http://localhost:4000, depending on Meteor's version/configuration).

## **🤝 Contributing**

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.  
2. Create your Feature Branch (git checkout \-b feature/AmazingFeature).  
3. Commit your Changes (git commit \-m 'feat: Add some AmazingFeature').  
4. Push to the Branch (git push origin feature/AmazingFeature).  
5. Open a Pull Request.

## **📄 License**

Distributed under the MIT License. See LICENSE for more information.

## **📧 Contact**

Sarah Joy (sarahjoy18) \- \[Your GitHub Profile Link\]

Project Link: https://www.google.com/search?q=https://github.com/sarahjoy18/recipe-book
