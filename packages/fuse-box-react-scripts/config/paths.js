// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * Portions Copyright (c) 2017-present, Off Grid Networks. 
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end

var path = require('path');
var fs = require('fs');
var url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/offgridnetworks/fuse-box-create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}
var packageJson = require(resolveApp('package.json'));

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/offgridnetworks/fuse-box-create-react-app/issues/253.

// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders

// We will export `nodePaths` as an array of absolute paths.
// It will then be used by Webpack configs.
// Jest doesn’t need this because it already handles `NODE_PATH` out of the box.

// Note that unlike in Node, only *relative* paths from `NODE_PATH` are honored.
// Otherwise, we risk importing Node.js core modules into an app instead of Webpack shims.
// https://github.com/offgridnetworks/fuse-box-create-react-app/issues/1023#issuecomment-265344421

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp);

var envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  var hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return path + '/';
  } else {
    return path;
  }
}

function getPublicUrl() {
  return envPublicUrl || packageJson.homepage;
}

function getPackageDirectory(key, defaultdir) {
  var directories = packageJson.directories;
  if (directories && directories[key])
    return directories[key]
  else
    return defaultdir || key;
}

function resolveAppPackageDirectoryOrNull(key) {
  var directories = packageJson.directories;
  if (directories && directories[key])
    return resolveApp(directories[key])
  else
    return null
}


function getPackageDirectoryLast(key, defaultdir) {
  var directories = packageJson.directories;
  if (directories && directories[key]) {
    if (Array.isArray(directories[key]))
      return directories[key][directories[key].length - 1]
    else
      return directories[key]
  }
  else
    return defaultdir || key;
}

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// fuse-box-react-scripts needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath() {
  var publicUrl = getPublicUrl();
  var servedUrl = envPublicUrl || (
    publicUrl ? url.parse(publicUrl).pathname : '/'
  );
  return ensureSlash(servedUrl, true);
}

function resolveAppArray(pathitem) {

  if (Array.isArray(pathitem)) {
    var result = [];
    pathitem.forEach(function (item) {
      result.push(resolveApp(item));
    });
    return result;
  }

  return resolveApp(pathitem);
}

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp(getPackageDirectory('build')),
  Bundle: getPackageDirectory('bundle', path.join('static', 'js')).replace(/^[\/\\]/, ""),
  appConfig: resolveApp(getPackageDirectory('config')),
  appPublic: resolveAppArray(getPackageDirectory('public')),
  appStoriesJs: resolveAppPackageDirectoryOrNull('stories-js'),
  appStoriesBuild: resolveApp(getPackageDirectory('stories-build', 'build-storybook')),
  appHtml: function (file) { return resolveApp(path.join(getPackageDirectoryLast('public'), file)) },
  appIndexJs: resolveApp(path.join(getPackageDirectory('src'), 'index.js')),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp(getPackageDirectory('src')),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp(path.join(getPackageDirectory('src'), 'setupTests.js')),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  nodePaths: nodePaths,
  publicUrl: getPublicUrl(),
  servedPath: getServedPath(),
  appDirectory: appDirectory
};

// @remove-on-eject-begin
function resolveOwn(relativePath) {
  return path.resolve(__dirname, relativePath);
}

// config before eject: we're in ./node_modules/fuse-box-react-scripts/config/
module.exports.ownNodeModules = resolveOwn('../node_modules');

// @remove-on-eject-end
