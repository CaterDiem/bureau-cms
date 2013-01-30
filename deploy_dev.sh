app/console cache:clear --env dev
app/console assets:install --env dev
app/console assetic:dump --env dev
chmod -R go+rw app/cache
