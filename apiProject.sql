-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2023 at 05:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_user`
--

CREATE TABLE `api_user` (
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `lastLogin` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `api_user`
--

INSERT INTO `api_user` (`name`, `email`, `password`, `lastLogin`) VALUES
('Onejohi', 'onejohi@example.com', '123456', '2023-11-26 10:51:24');

-- --------------------------------------------------------

--
-- Table structure for table `drugs`
--

CREATE TABLE `drugs` (
  `drug_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drugs`
--

INSERT INTO `drugs` (`drug_id`, `name`, `description`, `category_id`, `price`) VALUES
(1, 'Paracetamol', 'Common painkiller', 1, 200),
(2, 'Ibuprofen', 'Non-steroid anti-inflammatory', 3, 150),
(3, 'Amoxicillin', 'Antibiotic for bacterial infections', 2, 999),
(4, 'Metronidazole', 'Antibiotic', 2, 800),
(5, 'Claritin', 'Anit- histamine for allergies', 4, 296);

-- --------------------------------------------------------

--
-- Table structure for table `drug_categories`
--

CREATE TABLE `drug_categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drug_categories`
--

INSERT INTO `drug_categories` (`category_id`, `name`) VALUES
(1, 'Painkillers'),
(2, 'Antibiotics'),
(3, 'Anti-inflammatory'),
(4, 'Anti-allergics');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `patient_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `drugs` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `purchaseDate` date NOT NULL DEFAULT current_timestamp(),
  `lastLogin` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`patient_id`, `name`, `age`, `password`, `email`, `drugs`, `gender`, `purchaseDate`, `lastLogin`) VALUES
(100, 'John Doe', 35, '1234', 'john@example.com', 'Paracetamol, Ibuprofen', 'Male', '2023-11-25', '2023-11-25 13:33:51'),
(101, 'Jane Smith', 28, '5678', 'jane@test.com', 'Amoxicillin', 'Female', '2022-07-31', '2021-01-31 15:21:01'),
(102, 'Bob Williams', 42, '4321', 'bob.williams@mail.com', 'Metronidazole', 'Male', '1999-12-29', '2001-07-30 09:13:24'),
(103, 'Sara Johnson', 62, '8765', 'johnsonsara@example.com', 'Paracetamol, Ibuprofen, Metronidazole', 'Female', '2020-01-05', '2023-11-22 04:09:41'),
(104, 'Billy Joel', 60, '9890', 'joel@gmail.com', 'Paracetamol', 'Male', '2023-11-26', '2023-11-26 15:47:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_user`
--
ALTER TABLE `api_user`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `drugs`
--
ALTER TABLE `drugs`
  ADD PRIMARY KEY (`drug_id`);

--
-- Indexes for table `drug_categories`
--
ALTER TABLE `drug_categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`patient_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `drugs`
--
ALTER TABLE `drugs`
  MODIFY `drug_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `drug_categories`
--
ALTER TABLE `drug_categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
