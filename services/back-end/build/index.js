module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/handlers/passport.js":
/*!**********************************!*\
  !*** ./src/handlers/passport.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const passport = __webpack_require__(/*! passport */ \"passport\")\r\nconst JwtStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").Strategy\r\nconst ExtractJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").ExtractJwt\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst User = mongoose.model('User')\r\n\r\nconst options = {\r\n  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),\r\n  secretOrKey: 'yoursecretkey'\r\n}\r\n\r\npassport.use(new JwtStrategy(options, async (jwtPayload, done) => {\r\n  try {\r\n    const user = await User.findOne({ _id: jwtPayload.id })\r\n    return done(null, user || false)\r\n  } catch (err) {\r\n    return done(err, false)\r\n  }\r\n}))\r\n\n\n//# sourceURL=webpack:///./src/handlers/passport.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var app = __webpack_require__(/*! express */ \"express\")();\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config({ path: '.env' });\r\nmongoose.connect(process.env.DATABASE, {\r\n    useNewUrlParser: true,\r\n    useCreateIndex: true,\r\n    useUnifiedTopology: true\r\n});\r\nmongoose.connection.on('error', function (err) {\r\n    console.error('Database connection error:', err);\r\n});\r\n__webpack_require__(/*! ./models/Story.js */ \"./src/models/Story.js\");\r\n__webpack_require__(/*! ./models/Comment.js */ \"./src/models/Comment.js\");\r\n__webpack_require__(/*! ./models/User.js */ \"./src/models/User.js\");\r\n__webpack_require__(/*! ./handlers/passport */ \"./src/handlers/passport.js\");\r\napp.use(cors());\r\napp.use(bodyParser.json());\r\napp.get('/', function (req, res) {\r\n    res.end('hello world!');\r\n});\r\napp.use('/', __webpack_require__(/*! ./routes/users */ \"./src/routes/users.js\"));\r\napp.use('/', __webpack_require__(/*! ./routes/auth */ \"./src/routes/auth.js\"));\r\napp.use('/stories', __webpack_require__(/*! ./routes/stories */ \"./src/routes/stories.js\"));\r\napp.use(function (req, res) {\r\n    res\r\n        .status(404)\r\n        .json({\r\n        message: 'not found'\r\n    });\r\n});\r\napp.use(function (err, req, res, next) {\r\n    var error = {\r\n        status: err.status || 500,\r\n        message: err.message || 'Something went wrong!'\r\n    };\r\n    if (true) {\r\n        error['stack'] = err.stack;\r\n    }\r\n    res\r\n        .status(err.status || 500)\r\n        .json(error);\r\n});\r\nvar port = process.env.PORT || 5000;\r\napp.listen(port, function () { return console.log(\"news app backend is running on port \" + port); });\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/Comment.js":
/*!*******************************!*\
  !*** ./src/models/Comment.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\n\r\nconst commentSchema = new mongoose.Schema({\r\n  content: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  score: {\r\n    type: Number,\r\n    default: 0\r\n  },\r\n  story: {\r\n    type: mongoose.Schema.ObjectId,\r\n    ref: 'Story'\r\n  },\r\n  parent: {\r\n    type: mongoose.Schema.ObjectId,\r\n    ref: 'Comment'\r\n  },\r\n  user: {\r\n    type: mongoose.Schema.ObjectId,\r\n    ref: 'User'\r\n  },\r\n  createdAt: {\r\n    type: Date,\r\n    default: Date.now\r\n  }\r\n}, {\r\n  toJSON: { virtuals: true }\r\n})\r\n\r\ncommentSchema.virtual('replies', {\r\n  ref: 'Comment',\r\n  localField: '_id',\r\n  foreignField: 'parent'\r\n})\r\n\r\nfunction autoPopulate (next) {\r\n  this.populate('replies')\r\n  this.populate('user')\r\n  next()\r\n}\r\n\r\ncommentSchema.pre('find', autoPopulate)\r\ncommentSchema.pre('findOne', autoPopulate)\r\n\r\nmodule.exports = mongoose.model('Comment', commentSchema)\r\n\n\n//# sourceURL=webpack:///./src/models/Comment.js?");

/***/ }),

/***/ "./src/models/Story.js":
/*!*****************************!*\
  !*** ./src/models/Story.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\n\r\nconst storySchema = new mongoose.Schema({\r\n  title: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  type: {\r\n    type: String,\r\n    enum: ['link', 'text'],\r\n    required: true\r\n  },\r\n  content: String,\r\n  score: {\r\n    type: Number,\r\n    default: 0\r\n  },\r\n  user: {\r\n    type: mongoose.Schema.ObjectId,\r\n    ref: 'User'\r\n  },\r\n  createdAt: {\r\n    type: Date,\r\n    default: Date.now\r\n  }\r\n}, {\r\n  toJSON: { virtuals: true }\r\n})\r\n\r\nstorySchema.virtual('commentsCount', {\r\n  ref: 'Comment',\r\n  localField: '_id',\r\n  foreignField: 'story',\r\n  count: true\r\n})\r\n\r\nfunction autoPopulate (next) {\r\n  this.populate('commentsCount')\r\n  this.populate('user')\r\n  next()\r\n}\r\n\r\nstorySchema.pre('find', autoPopulate)\r\nstorySchema.pre('findOne', autoPopulate)\r\n\r\nmodule.exports = mongoose.model('Story', storySchema)\r\n\n\n//# sourceURL=webpack:///./src/models/Story.js?");

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\")\r\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\")\r\n\r\nconst userSchema = new mongoose.Schema({\r\n  username: {\r\n    type: String,\r\n    required: true,\r\n    unique: true\r\n  },\r\n  password: {\r\n    type: String,\r\n    required: true,\r\n    select: false\r\n  }\r\n})\r\n\r\nuserSchema.methods.verifyPassword = function (password) {\r\n  return bcrypt.compare(password, this.password)\r\n}\r\n\r\nuserSchema.methods.getToken = function () {\r\n  return jwt.sign(\r\n    {\r\n      id: this._id,\r\n      username: this.username\r\n    },\r\n    'yoursecretkey',\r\n    { expiresIn: '12h' }\r\n  )\r\n}\r\n\r\nuserSchema.pre('save', async function (next) {\r\n  this.password = await bcrypt.hash(this.password, 10)\r\n  next()\r\n})\r\n\r\nmodule.exports = mongoose.model('User', userSchema)\r\n\n\n//# sourceURL=webpack:///./src/models/User.js?");

/***/ }),

/***/ "./src/routes/auth.js":
/*!****************************!*\
  !*** ./src/routes/auth.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\")\r\nconst router = express.Router()\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst User = mongoose.model('User')\r\n\r\nrouter.post('/login', async (req, res, next) => {\r\n  const user = await User.findOne({ username: req.body.username }).select('+password')\r\n  const isAuthenticated = await (user && user.verifyPassword(req.body.password))\r\n  if (!isAuthenticated) {\r\n    next({\r\n      status: 401,\r\n      message: 'The username or password is wrong!'\r\n    })\r\n    return\r\n  }\r\n\r\n  res.json({\r\n    _id: user._id,\r\n    username: user.username,\r\n    token: user.getToken()\r\n  })\r\n})\r\n\r\nmodule.exports = router\r\n\n\n//# sourceURL=webpack:///./src/routes/auth.js?");

/***/ }),

/***/ "./src/routes/stories.js":
/*!*******************************!*\
  !*** ./src/routes/stories.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\")\r\nconst router = express.Router()\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst passport = __webpack_require__(/*! passport */ \"passport\")\r\nconst Story = mongoose.model('Story')\r\nconst Comment = mongoose.model('Comment')\r\n\r\nrouter.get('/', async (req, res) => {\r\n  const stories = await Story\r\n    .find()\r\n    .limit(+req.query.limit || 10)\r\n    .skip(+req.query.offset || 0)\r\n    .sort(\r\n      req.query.sort === 'top' ?\r\n      {\r\n        'score': -1\r\n      } :\r\n      {\r\n        'createdAt': -1\r\n      }\r\n    )\r\n  res.json({\r\n    data: stories,\r\n    totalCount: await Story.countDocuments()\r\n  })\r\n})\r\n\r\nrouter.get('/:storyId', async (req, res) => {\r\n  const story = await Story.findOne({\r\n    _id: req.params.storyId\r\n  })\r\n  res.json(story)\r\n})\r\n\r\nrouter.post(\r\n  '/',\r\n  passport.authenticate('jwt', {\r\n    session: false\r\n  }),\r\n  async (req, res) => {\r\n    const story = await (new Story({\r\n      title: req.body.title,\r\n      type: req.body.type,\r\n      content: req.body.content,\r\n      user: req.user._id\r\n    }).save())\r\n    res.json(story)\r\n  }\r\n)\r\n\r\nrouter.put(\r\n  '/:storyId',\r\n  passport.authenticate('jwt', {\r\n    session: false\r\n  }),\r\n  async (req, res) => {\r\n    let story = await Story.findOne({\r\n      _id: req.params.storyId\r\n    })\r\n    if (!story.user.equals(req.user._id)) {\r\n      res\r\n        .status(401)\r\n        .json({\r\n          message: 'You cannot edit a story that you do not own!'\r\n        })\r\n      return\r\n    }\r\n    story.title = req.body.title\r\n    story.content = req.body.content\r\n    story = await story.save()\r\n    res.json(story)\r\n  }\r\n)\r\n\r\nrouter.delete(\r\n  '/:storyId',\r\n  passport.authenticate('jwt', {\r\n    session: false\r\n  }),\r\n  async (req, res) => {\r\n    let story = await Story.findOne({\r\n      _id: req.params.storyId\r\n    })\r\n    if (!story.user.equals(req.user._id)) {\r\n      res\r\n        .status(401)\r\n        .json({\r\n          message: 'You cannot delete a story that you do not own!'\r\n        })\r\n      return\r\n    }\r\n    await Story.deleteOne({\r\n      _id: story._id\r\n    })\r\n    res.json({\r\n      message: 'deleted!'\r\n    })\r\n  }\r\n)\r\n\r\nrouter.post('/:storyId/upvote', async (req, res) => {\r\n  let story = await Story.findOne({\r\n    _id: req.params.storyId\r\n  })\r\n  story.score = story.score + 1\r\n  await story.save()\r\n  res.json({\r\n    message: 'upvoted!'\r\n  })\r\n})\r\n\r\nrouter.get('/:storyId/comments', async (req, res) => {\r\n  const comments = await Comment.find({\r\n    story: req.params.storyId,\r\n    parent: null\r\n  })\r\n  res.json(comments)\r\n})\r\n\r\nrouter.post(\r\n  '/:storyId/comments',\r\n  passport.authenticate('jwt', {\r\n    session: false\r\n  }),\r\n  async (req, res) => {\r\n    let comment = await (new Comment({\r\n      content: req.body.content,\r\n      story: req.params.storyId,\r\n      parent: req.body.parent,\r\n      user: req.user._id\r\n    }).save())\r\n    comment = await Comment.populate(comment, ['replies', 'user'])\r\n    res.json(comment)\r\n  }\r\n)\r\n\r\nrouter.post('/:storyId/comments/:commentId/upvote', async (req, res) => {\r\n  let comment = await Comment.findOne({\r\n    _id: req.params.commentId,\r\n    story: req.params.storyId\r\n  })\r\n  comment.score = comment.score + 1\r\n  await comment.save()\r\n  res.json({\r\n    message: 'upvoted!'\r\n  })\r\n})\r\n\r\nmodule.exports = router\n\n//# sourceURL=webpack:///./src/routes/stories.js?");

/***/ }),

/***/ "./src/routes/users.js":
/*!*****************************!*\
  !*** ./src/routes/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\")\r\nconst router = express.Router()\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst User = mongoose.model('User')\r\n\r\nrouter.post('/register', async (req, res, next) => {\r\n  try {\r\n    const user = await (new User({\r\n      username: req.body.username,\r\n      password: req.body.password\r\n    }).save())\r\n    res.json({\r\n      _id: user._id,\r\n      username: user.username,\r\n      token: user.getToken()\r\n    })\r\n  } catch (err) {\r\n    if (err.code === 11000) {\r\n      next({\r\n        status: 409,\r\n        message: 'This username already exists!'\r\n      })\r\n    }\r\n    next()\r\n  }\r\n})\r\n\r\nmodule.exports = router\n\n//# sourceURL=webpack:///./src/routes/users.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ })

/******/ });