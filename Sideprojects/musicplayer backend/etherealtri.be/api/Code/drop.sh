read -s rootpw
mysql -u admin -p${rootpw} -e 'DROP DATABASE musicplayer'
