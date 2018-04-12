Installation:
* run playbook
* connect to vm via `vagrant ssh`
* go to `/var/www/vhosts/sulu`
* run `composer install` and enter "sulu" as mysql user+db+pw
* sulu root directory: sudo setfacl -R -m u:"www-data":rwX -m u:vagrant:rwX var/cache var/logs var/uploads var/uploads/* web/uploads web/uploads/* var/indexes var/sessions
* sulu root directory: sudo setfacl -dR -m u:"www-data":rwX -m u:vagrant:rwX var/cache var/logs var/uploads var/uploads/* web/uploads web/uploads/* var/indexes var/sessions
* run `bin/adminconsole sulu:build dev`
* go to "/var/www/vhosts/sulu" and execute `sudo chown -R www-data:vagrant .`
* open in browser on http://practice.sulu.local/admin
