const Koa = require('koa');
const BodyParser = require("koa-bodyparser");
const serve = require('koa-static');
const Logger = require("koa-logger");
const cors = require('koa-cors');
const mount = require("koa-mount");

const app = new Koa();

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const static_pages = new Koa();
console.log(__dirname);
static_pages.use(serve("dist"));
app.use(mount("/", static_pages));

app.listen(3000, () => {
  console.log('==> 🌎  Listening on port 3000. Visit http://localhost:3000/');
});
