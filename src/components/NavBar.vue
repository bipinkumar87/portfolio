<template>
    <nav class="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#academic">Academic</a></li>
        <li><a href="#pro">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    overflow: hidden;
    position: fixed;
    width: 100%;
  }
  
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .navbar li {
    padding: 14px 20px;
  }
  
  .navbar a {
    color: white;
    text-align: center;
    text-decoration: none;
    display: block;
  }
  
  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }
  </style>
  