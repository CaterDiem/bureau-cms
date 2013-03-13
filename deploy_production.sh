rm -rf app/cache/prod/*
app/console cache:clear --env prod
app/console assets:install --env prod
app/console assetic:dump --env prod
chmod -R go+rw app/cache/prod/
