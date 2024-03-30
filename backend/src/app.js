const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questionRoutes');
const topicRoutes = require('./routes/topicRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://bakkeshpruthvi49:9844@cluster0.it4pita.mongodb.net/dsa-tracker-db?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/', questionRoutes);
app.use('/', topicRoutes);
app.use('/', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// Database connection
// mongodb+srv://bakkeshpruthvi49:9844@cluster0.it4pita.mongodb.net/dsa-tracker-db?retryWrites=true&w=majority&appName=Cluster0
  