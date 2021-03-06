-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: auction
-- ------------------------------------------------------
-- Server version	5.7.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP database IF EXISTS auction;
create database auction;
use auction;
--
-- Table structure for table `detail`
--

DROP TABLE IF EXISTS `detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail`
--

LOCK TABLES `detail` WRITE;
/*!40000 ALTER TABLE `detail` DISABLE KEYS */;
INSERT INTO `detail` VALUES (1,'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',1),(2,'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',1),(3,'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',1),(4,'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',1),(5,'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',1);
/*!40000 ALTER TABLE `detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaisp`
--

DROP TABLE IF EXISTS `loaisp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loaisp` (
  `CatID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CatName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `MoTa` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`CatID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaisp`
--

LOCK TABLES `loaisp` WRITE;
/*!40000 ALTER TABLE `loaisp` DISABLE KEYS */;
INSERT INTO `loaisp` VALUES (1,'Thiết bị điện tử - viễn thông','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg','Bao gồm các sản phẩm thuộc lĩnh vực công nghệ, điện tử, viễn thông, . . .'),(2,'Thiết bị gia dụng','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg','Bao gồm các sản phẩm thuộc lĩnh vực đồ điện, gia dụng, . . .');
/*!40000 ALTER TABLE `loaisp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `ProID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ProName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` text COLLATE utf8_unicode_ci NOT NULL,
  `SlRaGia` int(5) DEFAULT NULL,
  `GiaHienTai` BIGINT(20) NOT NULL,
  `GiaMuaNgay` BIGINT(20) NOT NULL,
  `NgayBD` datetime NOT NULL,
  `NgayKT` datetime NOT NULL,
  `CatID` int(11) NOT NULL,
  `SPMoi` tinyint(1) DEFAULT NULL,
  `NguoiGiuGiaID` int(11) NOT NULL,
  `MoTa` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `NguoiBanID` int(11) NOT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',1,30000000,260000000,'2018-05-20 00:00:00','2018-8-31 12:45:32',1,1,1,'Mô tả iphone',2),
(2,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',9,25000000,260000000,'2018-05-21 03:30:00','2018-08-31 05:12:00',1,1,1,'Mô tả iphone',2),
(3,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',8,22000000,260000000,'2018-05-01 06:29:00','2018-08-20 07:24:00',1,1,1,'Mô tả iphone',2),
(4,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',9,28000000,260000000,'2018-05-07 04:21:00','2018-07-25 03:54:00',1,1,1,'Mô tả iphone',2),
(5,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',6,27500000,260000000,'2018-05-09 02:24:00','2018-11-20 06:32:00',1,1,1,'Mô tả iphone',2),
(6,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',7,21000000,260000000,'2018-05-05 12:33:00','2018-10-31 01:21:00',1,1,1,'Mô tả iphone',2),
(7,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',2,24000000,260000000,'2018-05-25 09:35:00','2018-08-31 09:46:00',1,1,1,'Mô tả iphone',2),
(8,'Iphone 9 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',0,24500000,260000000,'2018-05-03 01:12:00','2018-07-20 08:34:00',1,1,1,'Mô tả iphone',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;	
--
-- Table structure for table `dsyeuthich`
--

DROP TABLE IF EXISTS `dsyeuthich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dsyeuthich` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CatName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `MoTa` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `NguoiThichID` int(11) NOT NULL,
  `ProID` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dsyeuthich`
--

LOCK TABLES `dsyeuthich` WRITE;
/*!40000 ALTER TABLE `dsyeuthich` DISABLE KEYS */;
INSERT INTO `dsyeuthich` VALUES (1,'Iphone 10','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 'Mô tả Iphone 10',4,2),
(2,'Iphone 4','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg','Mô tả Iphone 4',2,2);
/*!40000 ALTER TABLE `dsyeuthich` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `lichsudaugia`
--

DROP TABLE IF EXISTS `lichsudaugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lichsudaugia` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nguoidg_id` int(11) NOT NULL,
  `sanpham_id` int(11) NOT NULL,
  `ngaydg` datetime NOT NULL,
  `sotien` float NOT NULL,
  `CatName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `dsyeuthich`
--


LOCK TABLES `lichsudaugia` WRITE;
/*!40000 ALTER TABLE `lichsudaugia` DISABLE KEYS */;
INSERT INTO `lichsudaugia` VALUES (1, 3, 2, '2018-05-20 04:43:26',20000,'Iphone 8'),
(2, 4,3,'2018-05-21 12:32:32',30000, 'Iphone X');
/*!40000 ALTER TABLE `lichsudaugia` ENABLE KEYS */;
UNLOCK TABLES;



DROP TABLE IF EXISTS `daugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daugia` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nguoidg_id` int(11) NOT NULL,
  `sanpham_id` int(11) NOT NULL,
  `ngaydg` datetime NOT NULL,
  `sotien` float NOT NULL,
  `CatName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `daugia` WRITE;
/*!40000 ALTER TABLE `daugia` DISABLE KEYS */;
INSERT INTO `daugia` VALUES (1, 3, 2, '2018-05-20 04:43:26',20000,'Iphone 8'),
(2, 4,3,'2018-05-21 12:32:32',30000, 'Iphone X');
/*!40000 ALTER TABLE `daugia` ENABLE KEYS */;
UNLOCK TABLES;

-- Dumping data for table `dsyeuthich`
--

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `email` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` int(11) DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nguyễn Văn A',0,'nguyenvana@gmail.com','e10adc3949ba59abbe56e057f20f883e',1),
(2,'Trần Văn B',1,'tranvanb@gmail.com','e10adc3949ba59abbe56e057f20f883e',1),
(3,'Trần Quốc Dũng',1,'dungtran6665@gmail.com','e10adc3949ba59abbe56e057f20f883e',1),
(52,'Lép Đẹp Trai',0,'tqdungit97@gmail.com','e10adc3949ba59abbe56e057f20f883e',1),
(4,'Trường Duy',1,'cutruongduy97@gmail.com','e10adc3949ba59abbe56e057f20f883e',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;


-- Dump completed on 2018-06-16 22:31:05
