= 1;
Executing (default):
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
  `user`.`image` AS `user.image`,
  `categories`.`id` AS `categories.id`,
  `categories`.`name` AS `categories.name`
FROM
  `BlogPosts` AS `BlogPost`
  LEFT OUTER JOIN `Users` AS `user` ON `BlogPost`.`userId` = `user`.`id`
  LEFT OUTER JOIN (
    `PostsCategories` AS `categories->PostsCategory`
    INNER JOIN `Categories` AS `categories` ON `categories`.`id` = `categories->PostsCategory`.`categoryId`
  ) ON `BlogPost`.`id` = `categories->PostsCategory`.`postId`
WHERE
  `BlogPost`.`id` = 'search';