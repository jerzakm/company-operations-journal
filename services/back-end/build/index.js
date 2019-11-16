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

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar app = __webpack_require__(/*! express */ \"express\")();\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config({ path: '.env' });\r\nmongoose.connect(process.env.DATABASE, {\r\n    useNewUrlParser: true,\r\n    useCreateIndex: true,\r\n    useUnifiedTopology: true\r\n});\r\nmongoose.connection.on('error', function (err) {\r\n    console.error('Database connection error:', err);\r\n});\r\n__webpack_require__(/*! ./models/Story.ts */ \"./src/models/Story.ts\");\r\n__webpack_require__(/*! ./models/Comment.ts */ \"./src/models/Comment.ts\");\r\n__webpack_require__(/*! ./models/User.ts */ \"./src/models/User.ts\");\r\n__webpack_require__(/*! ./handlers/passport */ \"./src/handlers/passport.js\");\r\napp.use(cors());\r\napp.use(bodyParser.json());\r\napp.get('/', function (req, res) {\r\n    res.end('hello world!');\r\n});\r\napp.use('/', __webpack_require__(/*! ./routes/users.ts */ \"./src/routes/users.ts\"));\r\napp.use('/', __webpack_require__(/*! ./routes/auth.ts */ \"./src/routes/auth.ts\"));\r\napp.use('/stories', __webpack_require__(/*! ./routes/stories.ts */ \"./src/routes/stories.ts\"));\r\napp.use(function (req, res) {\r\n    res\r\n        .status(404)\r\n        .json({\r\n        message: 'not found'\r\n    });\r\n});\r\napp.use(function (err, req, res, next) {\r\n    var error = {\r\n        status: err.status || 500,\r\n        message: err.message || 'Something went wrong!'\r\n    };\r\n    if (true) {\r\n        error['stack'] = err.stack;\r\n    }\r\n    res\r\n        .status(err.status || 500)\r\n        .json(error);\r\n});\r\nvar port = process.env.PORT || 5000;\r\napp.listen(port, function () { return console.log(\"app backend is running on port \" + port); });\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/Comment.ts":
/*!*******************************!*\
  !*** ./src/models/Comment.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar commentSchema = new mongoose.Schema({\r\n    content: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    score: {\r\n        type: Number,\r\n        \"default\": 0\r\n    },\r\n    story: {\r\n        type: mongoose.Schema.Types.ObjectId,\r\n        ref: 'Story'\r\n    },\r\n    parent: {\r\n        type: mongoose.Schema.Types.ObjectId,\r\n        ref: 'Comment'\r\n    },\r\n    user: {\r\n        type: mongoose.Schema.Types.ObjectId,\r\n        ref: 'User'\r\n    },\r\n    createdAt: {\r\n        type: Date,\r\n        \"default\": Date.now\r\n    }\r\n}, {\r\n    toJSON: { virtuals: true }\r\n});\r\ncommentSchema.virtual('replies', {\r\n    ref: 'Comment',\r\n    localField: '_id',\r\n    foreignField: 'parent'\r\n});\r\nfunction autoPopulate(next) {\r\n    this.populate('replies');\r\n    this.populate('user');\r\n    next();\r\n}\r\ncommentSchema.pre('find', autoPopulate);\r\ncommentSchema.pre('findOne', autoPopulate);\r\nmodule.exports = mongoose.model('Comment', commentSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/Comment.ts?");

/***/ }),

/***/ "./src/models/Story.ts":
/*!*****************************!*\
  !*** ./src/models/Story.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar storySchema = new mongoose.Schema({\r\n    title: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    type: {\r\n        type: String,\r\n        \"enum\": ['link', 'text'],\r\n        required: true\r\n    },\r\n    content: String,\r\n    score: {\r\n        type: Number,\r\n        \"default\": 0\r\n    },\r\n    user: {\r\n        type: mongoose.Schema.Types.ObjectId,\r\n        ref: 'User'\r\n    },\r\n    createdAt: {\r\n        type: Date,\r\n        \"default\": Date.now\r\n    }\r\n}, {\r\n    toJSON: { virtuals: true }\r\n});\r\nstorySchema.virtual('commentsCount', {\r\n    ref: 'Comment',\r\n    localField: '_id',\r\n    foreignField: 'story',\r\n    count: true\r\n});\r\nfunction autoPopulate(next) {\r\n    this.populate('commentsCount');\r\n    this.populate('user');\r\n    next();\r\n}\r\nstorySchema.pre('find', autoPopulate);\r\nstorySchema.pre('findOne', autoPopulate);\r\nmodule.exports = mongoose.model('Story', storySchema);\r\n\n\n//# sourceURL=webpack:///./src/models/Story.ts?");

/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar userSchema = new mongoose.Schema({\r\n    username: {\r\n        type: String,\r\n        required: true,\r\n        unique: true\r\n    },\r\n    password: {\r\n        type: String,\r\n        required: true,\r\n        select: false\r\n    },\r\n    name: {\r\n        type: String,\r\n        required: true,\r\n        select: false\r\n    },\r\n    group: {\r\n        type: String,\r\n        required: true,\r\n        select: false\r\n    }\r\n});\r\nuserSchema.methods.verifyPassword = function (password) {\r\n    return bcrypt.compare(password, this.password);\r\n};\r\nuserSchema.methods.getToken = function () {\r\n    return jwt.sign({\r\n        id: this._id,\r\n        username: this.username\r\n    }, 'yoursecretkey', { expiresIn: '12h' });\r\n};\r\nuserSchema.pre('save', function (next) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var user, _a;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    user = this;\r\n                    _a = user;\r\n                    return [4 /*yield*/, bcrypt.hash(user.password, 10)];\r\n                case 1:\r\n                    _a.password = _b.sent();\r\n                    next();\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n});\r\nmodule.exports = mongoose.model('User', userSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/User.ts?");

/***/ }),

/***/ "./src/routes/auth.ts":
/*!****************************!*\
  !*** ./src/routes/auth.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar User = mongoose.model('User');\r\nvar router = express.Router();\r\nrouter.post('/login', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, isAuthenticated;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, User.findOne({ username: req.body.username }).select('+password')];\r\n            case 1:\r\n                user = _a.sent();\r\n                return [4 /*yield*/, (user && user.verifyPassword(req.body.password))];\r\n            case 2:\r\n                isAuthenticated = _a.sent();\r\n                if (!isAuthenticated) {\r\n                    next({\r\n                        status: 401,\r\n                        message: 'The username or password is wrong!'\r\n                    });\r\n                    return [2 /*return*/];\r\n                }\r\n                res.json({\r\n                    _id: user._id,\r\n                    username: user.username,\r\n                    token: user.getToken()\r\n                });\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nmodule.exports = router;\r\n\n\n//# sourceURL=webpack:///./src/routes/auth.ts?");

/***/ }),

/***/ "./src/routes/stories.ts":
/*!*******************************!*\
  !*** ./src/routes/stories.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar router = express.Router();\r\nvar Story = mongoose.model('Story');\r\nvar Comment = mongoose.model('Comment');\r\nrouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var stories, _a, _b, _c;\r\n    return __generator(this, function (_d) {\r\n        switch (_d.label) {\r\n            case 0: return [4 /*yield*/, Story\r\n                    .find()\r\n                    .limit(+req.query.limit || 10)\r\n                    .skip(+req.query.offset || 0)\r\n                    .sort(req.query.sort === 'top' ?\r\n                    {\r\n                        'score': -1\r\n                    } :\r\n                    {\r\n                        'createdAt': -1\r\n                    })];\r\n            case 1:\r\n                stories = _d.sent();\r\n                _b = (_a = res).json;\r\n                _c = {\r\n                    data: stories\r\n                };\r\n                return [4 /*yield*/, Story.countDocuments()];\r\n            case 2:\r\n                _b.apply(_a, [(_c.totalCount = _d.sent(),\r\n                        _c)]);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/:storyId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var story;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Story.findOne({\r\n                    _id: req.params.storyId\r\n                })];\r\n            case 1:\r\n                story = _a.sent();\r\n                res.json(story);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/', passport.authenticate('jwt', {\r\n    session: false\r\n}), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var story;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, (new Story({\r\n                    title: req.body.title,\r\n                    type: req.body.type,\r\n                    content: req.body.content,\r\n                    user: req.user._id\r\n                }).save())];\r\n            case 1:\r\n                story = _a.sent();\r\n                res.json(story);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/:storyId', passport.authenticate('jwt', {\r\n    session: false\r\n}), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var story;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Story.findOne({\r\n                    _id: req.params.storyId\r\n                })];\r\n            case 1:\r\n                story = _a.sent();\r\n                if (!story.user.equals(req.user._id)) {\r\n                    res\r\n                        .status(401)\r\n                        .json({\r\n                        message: 'You cannot edit a story that you do not own!'\r\n                    });\r\n                    return [2 /*return*/];\r\n                }\r\n                story.title = req.body.title;\r\n                story.content = req.body.content;\r\n                return [4 /*yield*/, story.save()];\r\n            case 2:\r\n                story = _a.sent();\r\n                res.json(story);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter[\"delete\"]('/:storyId', passport.authenticate('jwt', {\r\n    session: false\r\n}), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var story;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Story.findOne({\r\n                    _id: req.params.storyId\r\n                })];\r\n            case 1:\r\n                story = _a.sent();\r\n                if (!story.user.equals(req.user._id)) {\r\n                    res\r\n                        .status(401)\r\n                        .json({\r\n                        message: 'You cannot delete a story that you do not own!'\r\n                    });\r\n                    return [2 /*return*/];\r\n                }\r\n                return [4 /*yield*/, Story.deleteOne({\r\n                        _id: story._id\r\n                    })];\r\n            case 2:\r\n                _a.sent();\r\n                res.json({\r\n                    message: 'deleted!'\r\n                });\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/:storyId/upvote', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var story;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Story.findOne({\r\n                    _id: req.params.storyId\r\n                })];\r\n            case 1:\r\n                story = _a.sent();\r\n                story.score = story.score + 1;\r\n                return [4 /*yield*/, story.save()];\r\n            case 2:\r\n                _a.sent();\r\n                res.json({\r\n                    message: 'upvoted!'\r\n                });\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/:storyId/comments', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var comments;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Comment.find({\r\n                    story: req.params.storyId,\r\n                    parent: null\r\n                })];\r\n            case 1:\r\n                comments = _a.sent();\r\n                res.json(comments);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/:storyId/comments', passport.authenticate('jwt', {\r\n    session: false\r\n}), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var comment;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, (new Comment({\r\n                    content: req.body.content,\r\n                    story: req.params.storyId,\r\n                    parent: req.body.parent,\r\n                    user: req.user._id\r\n                }).save())];\r\n            case 1:\r\n                comment = _a.sent();\r\n                return [4 /*yield*/, Comment.populate(comment, ['replies', 'user'])];\r\n            case 2:\r\n                comment = _a.sent();\r\n                res.json(comment);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/:storyId/comments/:commentId/upvote', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var comment;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Comment.findOne({\r\n                    _id: req.params.commentId,\r\n                    story: req.params.storyId\r\n                })];\r\n            case 1:\r\n                comment = _a.sent();\r\n                comment.score = comment.score + 1;\r\n                return [4 /*yield*/, comment.save()];\r\n            case 2:\r\n                _a.sent();\r\n                res.json({\r\n                    message: 'upvoted!'\r\n                });\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nmodule.exports = router;\r\n\n\n//# sourceURL=webpack:///./src/routes/stories.ts?");

/***/ }),

/***/ "./src/routes/users.ts":
/*!*****************************!*\
  !*** ./src/routes/users.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar router = express.Router();\r\nvar User = mongoose.model('User');\r\nrouter.post('/register', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, (new User({\r\n                        username: req.body.username,\r\n                        password: req.body.password,\r\n                        name: 'test',\r\n                        group: 'test'\r\n                    }).save())];\r\n            case 1:\r\n                user = _a.sent();\r\n                res.json({\r\n                    _id: user._id,\r\n                    username: user.username,\r\n                    token: user.getToken()\r\n                });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                if (err_1.code === 11000) {\r\n                    next({\r\n                        status: 409,\r\n                        message: 'This username already exists!'\r\n                    });\r\n                }\r\n                next();\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nmodule.exports = router;\r\n\n\n//# sourceURL=webpack:///./src/routes/users.ts?");

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