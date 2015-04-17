Package.describe({
  name: 'japetheape:class-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Tiny package to add class functionality to Meteor in general and to collections.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/japetheape/class-helpers',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore');
  api.use(['minimongo']);
  api.use('mongo', ['client', 'server']);
  api.addFiles('class-helpers.js');
  api.export('ClassHelpers');
});

Package.onTest(function(api) {
  api.use('tinytest');

  api.use('japetheape:class-helpers');
  api.addFiles('class-helpers-tests.js');
});
