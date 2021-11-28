SELECT
  `BlogPost`.`id`,
  `BlogPost`.`title`,
  `BlogPost`.`content`,
  `BlogPost`.`userId`,
  `BlogPost`.`published`,
  `BlogPost`.`updated`,
  `user`.`id` AS `user.id`,
  `user`.`displayName` AS `user.displayName`,
  `user`.`email` AS `user.email`,
  `user`.`image` AS `user.image`
FROM
  `BlogPosts` AS `BlogPost`
  LEFT OUTER JOIN `Users` AS `user` ON `BlogPost`.`userId` = `user`.`id`;
SELECT
  `BlogPost`.`id`,
  `BlogPost`.`title`,
  `BlogPost`.`content`,
  `BlogPost`.`userId`,
  `BlogPost`.`published`,
  `BlogPost`.`updated`,
  `category`.`id` AS `category.id`,
  `category`.`name` AS `category.name`,
FROM
  `BlogPosts` AS `BlogPost`
  LEFT OUTER JOIN `Categories` AS `category` ON `BlogPost`.`userId` = `user`.`id`;