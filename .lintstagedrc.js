module.exports = {
  '*.{json,js,ts,css,scss,md,yml,sh,xml}|Dockerfile|.gitignore': [
    'prettier --cache --write',
  ],
};
