DROP TABLE IF NOT EXISTS `geo_ip`;

CREATE TABLE `geo_ip` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(15) unsigned NOT NULL,
  `continent` varchar(64) NOT NULL,
  `country` varchar(64) NOT NULL,
  `region` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
