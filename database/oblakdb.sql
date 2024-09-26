-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 24, 2024 at 04:53 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oblakdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tonapsongs`
--

DROP TABLE IF EXISTS `tonapsongs`;
CREATE TABLE IF NOT EXISTS `tonapsongs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `filepath` varchar(255) NOT NULL,
  `album_cover` varchar(255) DEFAULT NULL,
  `uploaded_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `uploader_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tonapsongs`
--

INSERT INTO `tonapsongs` (`id`, `filename`, `filepath`, `album_cover`, `uploaded_at`, `uploader_name`) VALUES
(14, '1727196455707.mp3', '/uploads/1727196455707.mp3', '/uploads/1727196455782.jpg', '2024-09-24 16:47:35', 'Dance Monkey'),
(15, '1727196485907.mp3', '/uploads/1727196485907.mp3', '/uploads/1727196485965.jpg', '2024-09-24 16:48:05', 'Shape Of You'),
(16, '1727196516671.mp3', '/uploads/1727196516671.mp3', '/uploads/1727196516731.jpg', '2024-09-24 16:48:36', 'Blank Space');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
