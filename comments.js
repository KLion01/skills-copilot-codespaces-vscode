//Create web server  express
const express = require('express');
//Create web server with express
const router = express.Router();
//Import models
const Comment = require('../models/Comment');
const User = require('../models/User');
const Post = require('../models/Post');
//Import middleware
const auth = require('../middleware/auth');
//Import validator
const { check, validationResult } = require('express-validator');
