const cp = require('child_process');

function git(command) {
  return cp.execSync(`git ${command}`, { encoding: 'utf8' }).trim();
}

process.env.NX_GIT_VERSION = git('describe --always');

module.exports = require('@nrwl/react/plugins/webpack');
