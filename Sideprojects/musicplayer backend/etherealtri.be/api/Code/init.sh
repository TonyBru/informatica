read -s rootpw

mysql -u admin -p${rootpw} -e 'CREATE DATABASE musicplayer'
mysql -u admin -p${rootpw} 'musicplayer' -e 'CREATE TABLE upw (uid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(256) NOT NULL, password VARCHAR(1024) NOT NULL)'
mysql -u admin -p${rootpw} 'musicplayer' -e 'CREATE TABLE plu (pid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, uid INT(6) NOT NULL, pname VARCHAR(256) NOT NULL)'
mysql -u admin -p${rootpw} 'musicplayer' -e 'CREATE TABLE spl (sid VARCHAR(30) NOT NULL, pid INT(6) NOT NULL, CONSTRAINT pk PRIMARY KEY (sid,pid))'
