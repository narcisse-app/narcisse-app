module.exports = {
  '*.{json,js,ts,css,scss,md,yml,sh}|Dockerfile|.gitignore': [
    'prettier --cache --write',
  ],
};
