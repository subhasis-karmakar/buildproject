#!/bin/bash
find /var/www/html -type d -exec chmod -R 775 {} \;
find /var/www/html -type f -exec chmod -R 664 {} \;
chown -R root:www-data /var/www/html
