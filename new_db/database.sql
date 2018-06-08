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
Create database auction;
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
  `HinhAnh` binary(1) NOT NULL,
  `MoTa` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`CatID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaisp`
--

LOCK TABLES `loaisp` WRITE;
/*!40000 ALTER TABLE `loaisp` DISABLE KEYS */;
INSERT INTO `loaisp` VALUES (1,'Thiết bị điện tử - viễn thông','h','Bao gồm các sản phẩm thuộc lĩnh vực công nghệ, điện tử, viễn thông, . . .'),(2,'Thiết bị gia dụng','h','Bao gồm các sản phẩm thuộc lĩnh vực đồ điện, gia dụng, . . .');
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
  `GiaHienTai` int(21) NOT NULL,
  `GiaMuaNgay` int(21) NOT NULL,
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
INSERT INTO `products` VALUES (1,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',1,30000000,26000000,'2018-05-20 00:00:00','2018-05-31 00:00:00',1,1,1,'Mô tả iphone',2),
(2,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',9,25000000,26000000,'2018-05-21 00:00:00','2018-08-31 00:00:00',1,1,1,'Mô tả iphone',2),
(3,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',8,22000000,26000000,'2018-05-1 00:00:00','2018-08-20 00:00:00',1,1,1,'Mô tả iphone',2),
(4,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',9,28000000,26000000,'2018-05-7 00:00:00','2018-07-25 00:00:00',1,1,1,'Mô tả iphone',2),
(5,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',6,27500000,26000000,'2018-05-9 00:00:00','2018-11-20 00:00:00',1,1,1,'Mô tả iphone',2),
(6,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',7,21000000,26000000,'2018-05-5 00:00:00','2018-10-31 00:00:00',1,1,1,'Mô tả iphone',2),
(7,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',2,24000000,26000000,'2018-05-25 00:00:00','2018-08-31 00:00:00',1,1,1,'Mô tả iphone',2),
(8,'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg',0,24500000,26000000,'2018-05-3 00:00:00','2018-07-20 00:00:00',1,1,1,'Mô tả iphone',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `UsID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UsName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `LoaiUser` tinyint(1) NOT NULL,
  `Email` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Password` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` int(11) DEFAULT '0',
  PRIMARY KEY (`UsID`),
  UNIQUE KEY `email_UNIQUE` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Người Mua A',0,NULL,'',NULL),(2,'Người Bán B',1,NULL,'',NULL),(3,'Trần Quốc Dũng',1,'dungtran6665@gmail.com','e10adc3949ba59abbe56e057f20f883e',1),(51,'Trần Quốc Dũng',1,'tqdungit97@gmail.com','202cb962ac59075b964b07152d234b70',0);
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

-- Dump completed on 2018-06-06 22:33:08
