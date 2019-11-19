var request = require('supertest');
var app = require('../app');

describe('Test /api/items request from an item id', function() {
  it('should get item information', async function(done) {
    var res = await request(app)
      .get('/api/items/MLA821329221')
      .expect('Content-Type', /json/);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('author');
    expect(res.body).toHaveProperty('item');
    done();
  });

  it('should get snpashot item information', async function(done) {
    var res = await request(app)
      .get('/api/items/MLA821329221')
      .expect('Content-Type', /json/);
    
    expect(res.body).toMatchSnapshot({
      item: expect.any(Object)
    });
    done();
  });

  it('should get an error', async function(done) {
    var res = await request(app)
      .get('/api/items/sdz.MLA821329221')
      .expect('Content-Type', /json/);
    
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('message');
    done();
  });

  it('should get a snapshot error', async function(done) {
    var res = await request(app)
      .get('/api/items/sdz.MLA821329221')
      .expect('Content-Type', /json/);
    
    expect(res.body).toMatchSnapshot();
    done();
  });
});

describe('Test /api/items request from query search', function() {
  it('should get item\'s list', async function(done) {
    var res = await request(app)
      .get('/api/items?q=zapatillas')
      .expect('Content-Type', /json/);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('author');
    expect(res.body).toHaveProperty('categories');
    expect(res.body).toHaveProperty('items');
    done();
  });

  it('should get item\'s list snpashot results', async function(done) {
    var res = await request(app)
      .get('/api/items?q=zapatillas')
      .expect('Content-Type', /json/);
    
    expect(res.body).toMatchSnapshot({
      items: expect.any(Array)
    });
    done();
  });
});