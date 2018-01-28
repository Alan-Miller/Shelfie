module.exports = app => {
  app.get('/api/shelves', (req, res) => {
    req.app.get('db').get_shelves().then(shelves => res.status(200).send(shelves));
  });

  app.get('/api/bins/:shelf_name', (req, res) => {
    req.app.get('db').get_bins([req.params.shelf_name]).then(bins => res.status(200).send(bins));
  });

  app.get('/api/shelf/:shelf_name/bin/:bin_num', (req, res) => {
    const { shelf_name, bin_num } = req.params;
    req.app.get('db').get_bin([shelf_name, +bin_num]).then(bin => {
      res.status(200).send(bin[0]);
    });
  });

  app.put('/api/shelf/:shelf_name/bin/:bin_num', (req, res) => {
    const { shelf_name, bin_num } = req.params;
    const { inv_name, inv_price_cents } = req.body;
    req.app.get('db').edit_bin(shelf_name, +bin_num, inv_name, +inv_price_cents).then(bin => {
      res.status(200).send(bin[0]);
    });
  });
}