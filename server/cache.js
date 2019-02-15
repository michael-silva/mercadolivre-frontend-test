import memoryCache from 'memory-cache';

const cache = (duration) => {
  return (req, res, next) => {
    if (req.method !== 'GET') {
      next();
      return;
    }

    const key = `__express__${req.originalUrl || req.url}`;
    const cachedContent = memoryCache.get(key);
    if (cachedContent) {
      res.send(cachedContent);
    }
    else {
      res.sendResponse = res.send;
      res.send = (body) => {
        memoryCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      }
      res.jsonResponse = res.json;
      res.json = (body) => {
        memoryCache.put(key, body, duration * 1000);
        res.jsonResponse(body);
      }
      next();
    }
  };
};

export default cache;
