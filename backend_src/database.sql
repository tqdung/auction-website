SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
set foreign_key_checks=0;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `daugia`
--
DROP DATABASE IF EXISTS `auction`;
CREATE DATABASE auction;
-- --------------------------------------------------------
use auction;
--
-- Table structure for table `loaisp`
--


DROP TABLE IF EXISTS `loaisp`;
CREATE TABLE `loaisp` (
  `CatID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CatName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` binary NOT NULL,
  `MoTa` nvarchar(255),
  PRIMARY KEY (`CatID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `loaisp`
--
-- ----------------------------
-- Records of loaisp
-- ----------------------------
INSERT INTO `loaisp` VALUES ('1', 'Thiết bị điện tử - viễn thông', 'http://www.freeiconspng.com/uploads/mobile-phone-cell-icon-25.png','Bao gồm các sản phẩm thuộc lĩnh vực công nghệ, điện tử, viễn thông, . . .');
INSERT INTO `loaisp` VALUES ('2', 'Thiết bị gia dụng', 'https://www.freeiconspng.com/img/9520','Bao gồm các sản phẩm thuộc lĩnh vực đồ điện, gia dụng, . . .');

--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UsID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UsName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `LoaiUser` boolean NOT NULL,
  PRIMARY KEY (`UsID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--
-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Người Mua A', 0);
INSERT INTO `users` VALUES ('2', 'Người Bán B', 1);



--
-- Table structure for table `sp`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `ProID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ProName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` text NOT NULL,
  `SlRaGia` int(5),
  `GiaHienTai` int(21) NOT NULL,
  `GiaMuaNgay` int(21) NOT NULL,
  `NgayBD` datetime NOT NULL,
  `NgayKT` datetime NOT NULL,
  `CatID` int(11) NOT NULL,
  `SPMoi` boolean,
  `NguoiGiuGiaID` int(11) NOT NULL,
  `MoTa` nvarchar(255),
  `NguoiBanID` int(11) NOT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 31 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);
INSERT INTO `products` VALUES ('2', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);
INSERT INTO `products` VALUES ('3', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);
INSERT INTO `products` VALUES ('4', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);
INSERT INTO `products` VALUES ('5', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);
INSERT INTO `products` VALUES ('6', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);
INSERT INTO `products` VALUES ('7', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);
INSERT INTO `products` VALUES ('8', 'Iphone 8 256 Gb','https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 0, 20000000, 26000000, '2018-05-20', '2018-05-31', 1, 1, 1, 'Mô tả iphone', 2);

-- --------------------------------------------------------

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sp`
--

