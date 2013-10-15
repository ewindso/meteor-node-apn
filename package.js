Package.describe({
  summary: "Meteor smart package for node-apn"
});

Npm.depends({
  apn: "1.4.1"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');

  api.export('Apn','server');
});
