-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 11, 2012 at 08:14 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `muzejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `lietotaji`
--

CREATE TABLE IF NOT EXISTS `lietotaji` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `vards` text NOT NULL,
  `uzvards` text NOT NULL,
  `lietotajvards` text NOT NULL,
  `parole` text NOT NULL,
  `epasts` text NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID` (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `lietotaji`
--

INSERT INTO `lietotaji` (`ID`, `vards`, `uzvards`, `lietotajvards`, `parole`, `epasts`) VALUES
(1, '', '', '', '', ''),
(2, '', '', '', '', ''),
(3, 'dafs', 'fad', 'a', 'normis@gmail.com', 'A'),
(4, 'dafs', 'fad', 'a', '202cb962ac59075b964b07152d234b70', 'normis@gmail.com'),
(5, 'dafs', 'fad', 'a', '47bce5c74f589f4867dbd57e9ca9f808', 'AAAA'),
(6, 'aaaa', 'a', 'a', '0cc175b9c0f1b6a831c399e269772661', 'a'),
(7, 'Normunds', 'Pauders', 'normis161', 'daa185897ac867fbbd9ca2dd72c736e0', 'normis@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
