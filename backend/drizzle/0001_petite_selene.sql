CREATE TABLE `activity` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`value` real NOT NULL
);
--> statement-breakpoint
CREATE TABLE `userActivity` (
	`username` text NOT NULL,
	`activityId` integer NOT NULL,
	`value` real NOT NULL,
	PRIMARY KEY(`activityId`, `username`),
	FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`activityId`) REFERENCES `activity`(`id`) ON UPDATE no action ON DELETE no action
);
