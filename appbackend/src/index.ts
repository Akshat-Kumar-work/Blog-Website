import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/singnup', (c) => {
  return c.text('Hello Hono!')
});

app.post('/api/v1/user/singnin', (c) => {
  return c.text('Hello Hono!')
});

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
});







app.post('/api/v1/blog/blog', (c) => {
  return c.text('Hello Hono!')
});








export default app
