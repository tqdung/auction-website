-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 05, 2018 lúc 03:31 PM
-- Phiên bản máy phục vụ: 10.1.30-MariaDB
-- Phiên bản PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `auction`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail`
--

CREATE TABLE `detail` (
  `id` int(11) NOT NULL,
  `url` text NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `detail`
--

INSERT INTO `detail` (`id`, `url`, `product_id`) VALUES
(1, 'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 1),
(2, 'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 1),
(3, 'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 1),
(4, 'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 1),
(5, 'https://cdn4.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-a-300x300.jpg', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `detail`
--
ALTER TABLE `detail`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `detail`
--
ALTER TABLE `detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
