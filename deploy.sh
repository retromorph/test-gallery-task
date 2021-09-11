#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
yarn run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
 git push -f git@github.com:retromorph/test-gallery-task.git master:gh-pages

cd -