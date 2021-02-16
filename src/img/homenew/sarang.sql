-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2020 at 04:04 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sarang`
--

-- --------------------------------------------------------

--
-- Table structure for table `component`
--

CREATE TABLE `component` (
  `component_id` int(11) NOT NULL,
  `component_type` varchar(255) DEFAULT NULL,
  `component_family` varchar(255) DEFAULT NULL,
  `component_name` varchar(255) DEFAULT NULL,
  `component_no` varchar(255) DEFAULT NULL,
  `component_desc` varchar(255) DEFAULT NULL,
  `rawmaterial` varchar(255) DEFAULT NULL,
  `rawmaterial_diameter` varchar(255) DEFAULT NULL,
  `rawmaterial_length` varchar(255) DEFAULT NULL,
  `rawmaterial_weight` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `component`
--

INSERT INTO `component` (`component_id`, `component_type`, `component_family`, `component_name`, `component_no`, `component_desc`, `rawmaterial`, `rawmaterial_diameter`, `rawmaterial_length`, `rawmaterial_weight`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'Child Component', '1', 'Pivet 1001', 'Pivet 1001', 'Pivet 1001 Desc', '1', ' 45', '20', '20', '1608050878543', '1', NULL, NULL, '1'),
(2, 'Parent Component', '1', 'Pivet 1002', 'Pivet 1002', 'Pivet 1002 Desc', '', '', '', '', '1608052015516', '1', NULL, NULL, '1');

-- --------------------------------------------------------

--
-- Table structure for table `componentfamily`
--

CREATE TABLE `componentfamily` (
  `cf_id` int(11) NOT NULL,
  `component_family` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `componentfamily`
--

INSERT INTO `componentfamily` (`cf_id`, `component_family`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'Pivet', '1608048463945', '1', '1608048475578', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `component_child`
--

CREATE TABLE `component_child` (
  `cc_id` int(11) NOT NULL,
  `child_component` varchar(255) DEFAULT NULL,
  `child_component_quantity` varchar(255) DEFAULT NULL,
  `component_id` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `component_child`
--

INSERT INTO `component_child` (`cc_id`, `child_component`, `child_component_quantity`, `component_id`, `status`) VALUES
(13, '1', '2', '2', '1');

-- --------------------------------------------------------

--
-- Table structure for table `component_process`
--

CREATE TABLE `component_process` (
  `cp_id` int(11) NOT NULL,
  `process_id` varchar(255) NOT NULL,
  `processdesc` varchar(255) DEFAULT NULL,
  `porder` varchar(255) DEFAULT NULL,
  `rorder` varchar(255) DEFAULT NULL,
  `component_id` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `component_process`
--

INSERT INTO `component_process` (`cp_id`, `process_id`, `processdesc`, `porder`, `rorder`, `component_id`, `status`) VALUES
(38, '1', 'Test Process', '1', '10', '1', '1'),
(56, '1', 'Test Process', '1', '10', '2', '1'),
(57, '2', 'Test Process', '2', '10', '2', '1'),
(58, '3', 'Test Process', '3', '20', '2', '1');

-- --------------------------------------------------------

--
-- Table structure for table `contractor`
--

CREATE TABLE `contractor` (
  `contractor_id` int(11) NOT NULL,
  `contractor_name` varchar(255) DEFAULT NULL,
  `contractor_type` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `pin_code` varchar(255) DEFAULT NULL,
  `google_location` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `process_name` varchar(255) DEFAULT NULL,
  `billing_company_name` varchar(255) DEFAULT NULL,
  `gst_number` varchar(255) DEFAULT NULL,
  `pan_number` varchar(255) DEFAULT NULL,
  `bank_account_number` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `bank_ifsc_code` varchar(255) DEFAULT NULL,
  `bank_branch_name` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contractor`
--

INSERT INTO `contractor` (`contractor_id`, `contractor_name`, `contractor_type`, `address`, `city`, `pin_code`, `google_location`, `contact_number`, `process_name`, `billing_company_name`, `gst_number`, `pan_number`, `bank_account_number`, `bank_name`, `bank_ifsc_code`, `bank_branch_name`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'RK Enterprises', 'Contractor', 'Sivakasi', 'Sivakasi', '', '', '', '2,1,3', 'RK Enterprises', '', '', '', '', '', '', '1607990518002', '2', '1607990786526', '2', '1');

-- --------------------------------------------------------

--
-- Table structure for table `contractor_process`
--

CREATE TABLE `contractor_process` (
  `contractorp_id` int(11) NOT NULL,
  `process_id` varchar(255) NOT NULL,
  `contractor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contractor_process`
--

INSERT INTO `contractor_process` (`contractorp_id`, `process_id`, `contractor`) VALUES
(6, '2', '1'),
(7, '1', '1'),
(8, '3', '1');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `d_id` int(11) NOT NULL,
  `driver_name` varchar(255) DEFAULT NULL,
  `driver_phone` varchar(255) DEFAULT NULL,
  `t_id` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`d_id`, `driver_name`, `driver_phone`, `t_id`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'Radhakrishnan', '9941856425', '1', '1607963334745', '2', '1607963342349', '2', '');

-- --------------------------------------------------------

--
-- Table structure for table `process`
--

CREATE TABLE `process` (
  `process_id` int(11) NOT NULL,
  `process_name` varchar(255) DEFAULT NULL,
  `process_description` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `process`
--

INSERT INTO `process` (`process_id`, `process_name`, `process_description`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'CUTTING', 'CUTTING THE PART', '1607944029603', '2', '1607944112382', '2', NULL),
(2, 'TURNING', 'TURNING', '1607944042153', '2', NULL, NULL, NULL),
(3, 'HOBBING', 'GREAR HOBBING', '1607944052412', '2', NULL, NULL, NULL),
(4, 'INDUCTION HARDENING', 'HEAT TREATMENT', '1607944061924', '2', NULL, NULL, NULL),
(5, 'CASE HARDENING', 'HEAT TREATMENT', '1607944072413', '2', NULL, NULL, NULL),
(6, 'DRILLING', 'DRILL', '1607944081379', '2', NULL, NULL, NULL),
(7, 'PHOSPHATING', 'COATING', '1607944093916', '2', NULL, NULL, NULL),
(8, 'MILLING', 'MILLING', '1607944100252', '2', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order`
--

CREATE TABLE `purchase_order` (
  `p_id` int(11) NOT NULL,
  `purchase_order_id` varchar(255) DEFAULT NULL,
  `vendor` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase_order`
--

INSERT INTO `purchase_order` (`p_id`, `purchase_order_id`, `vendor`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, '2020 / 01', '1', '1608171159694', '1', '', '', '1');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order_changes`
--

CREATE TABLE `purchase_order_changes` (
  `poc_id` int(11) NOT NULL,
  `p_id` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `active` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase_order_changes`
--

INSERT INTO `purchase_order_changes` (`poc_id`, `p_id`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `active`, `status`) VALUES
(1, '1', '1608171159694', '1', '', '', '0', '1'),
(2, '1', '1608171258629', '1', '', '', '0', '1'),
(3, '1', '1608171280830', '1', '', '', '0', '1'),
(5, '1', '1608171403154', '1', '', '', '0', '1'),
(6, '1', '1608171484796', '1', '', '', '0', '1'),
(7, '1', '1608173724503', '1', '', '', '0', '1'),
(8, '1', '1608173801279', '1', '', '', '0', '1'),
(10, '1', '1608173956058', '1', '', '', '0', '1'),
(11, '1', '1608173968635', '1', '', '', '0', '1'),
(12, '1', '1608173978379', '1', '', '', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order_item`
--

CREATE TABLE `purchase_order_item` (
  `purchase_item_id` int(11) NOT NULL,
  `p_id` varchar(255) DEFAULT NULL,
  `poc_id` varchar(255) DEFAULT NULL,
  `component` varchar(255) DEFAULT NULL,
  `componentName` varchar(255) DEFAULT NULL,
  `effectivefrom` varchar(255) DEFAULT NULL,
  `effectiveto` varchar(255) DEFAULT NULL,
  `id` varchar(255) DEFAULT NULL,
  `pricing_type` varchar(255) DEFAULT NULL,
  `process` varchar(255) DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase_order_item`
--

INSERT INTO `purchase_order_item` (`purchase_item_id`, `p_id`, `poc_id`, `component`, `componentName`, `effectivefrom`, `effectiveto`, `id`, `pricing_type`, `process`, `rate`, `status`) VALUES
(1, '1', '1', '2', 'Pivet 1002', '2020-12-01', '', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '20', '1'),
(2, '1', '1', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(3, '1', '1', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(4, '1', '2', '2', 'Pivet 1002', '2020-12-01', '', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '20', '1'),
(5, '1', '2', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(6, '1', '2', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(7, '1', '3', '2', 'Pivet 1002', '2020-12-01', '', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '20', '1'),
(8, '1', '3', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(9, '1', '3', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(10, '1', '4', '2', 'Pivet 1002', '2020-12-01', '', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '20', '1'),
(11, '1', '4', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(12, '1', '4', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(13, '1', '5', '2', 'Pivet 1002', '2020-12-01', '', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '20', '1'),
(14, '1', '5', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(15, '1', '5', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(16, '1', '6', '2', 'Pivet 1002', '2020-12-22', '2020-12-17', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '30', '1'),
(17, '1', '6', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(18, '1', '6', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(19, '1', '7', '2', 'Pivet 1002', '2020-12-22', '2020-12-17', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '30', '1'),
(20, '1', '7', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(21, '1', '7', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(22, '1', '8', '2', 'Pivet 1002', '2020-12-22', '2020-12-17', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '30', '1'),
(23, '1', '8', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(24, '1', '8', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(25, '1', '10', '2', 'Pivet 1002', '2020-12-22', '2020-12-17', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '30', '1'),
(26, '1', '10', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(27, '1', '10', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(28, '1', '11', '2', 'Pivet 1002', '2020-12-22', '2020-12-17', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '30', '1'),
(29, '1', '11', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(30, '1', '11', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1'),
(31, '1', '12', '2', 'Pivet 1002', '2020-12-22', '2020-12-17', '1608171139557', 'Bulk Pricing', ' CUTTING  (Test Process)  10, TURNING  (Test Process)  10, HOBBING  (Test Process)  20', '30', '1'),
(32, '1', '12', '2', 'Pivet 1002', '2020-12-01', '', '1608171149509', 'Individual Pricing', ' CUTTING  (Test Process)  10', '5', '1'),
(33, '1', '12', '2', 'Pivet 1002', '2020-12-01', '', '1608171157750', 'Individual Pricing', ' TURNING  (Test Process)  10', '7', '1');

-- --------------------------------------------------------

--
-- Table structure for table `rawtype`
--

CREATE TABLE `rawtype` (
  `rawtype_id` int(11) NOT NULL,
  `raw_material_type_name` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rawtype`
--

INSERT INTO `rawtype` (`rawtype_id`, `raw_material_type_name`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'FORGING', '1607941363676', '1', '1607943767417', '2', '1'),
(2, 'BLACK BAR', '1607941370242', '1', '1607943780540', '2', '1'),
(3, 'SHEET METAL', '1607941376155', '1', '1607943790219', '2', '1'),
(4, 'SHEET METAL', '1607942302807', '1', '1607943731717', '2', '0');

-- --------------------------------------------------------

--
-- Table structure for table `raw_material`
--

CREATE TABLE `raw_material` (
  `raw_material_id` int(11) NOT NULL,
  `raw_material_name` varchar(255) DEFAULT NULL,
  `raw_material_description` varchar(255) DEFAULT NULL,
  `raw_material_diameter` varchar(255) DEFAULT NULL,
  `raw_material_length` varchar(255) DEFAULT NULL,
  `raw_material_type` varchar(255) DEFAULT NULL,
  `raw_material_constant_factor` varchar(255) DEFAULT NULL,
  `raw_material_weight` varchar(255) DEFAULT NULL,
  `raw_material_identifier_name` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `raw_material`
--

INSERT INTO `raw_material` (`raw_material_id`, `raw_material_name`, `raw_material_description`, `raw_material_diameter`, `raw_material_length`, `raw_material_type`, `raw_material_constant_factor`, `raw_material_weight`, `raw_material_identifier_name`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'EN43B', 'EN43B', '50, 45, 44, 70', '', '2', '', '', '', '', '1607943860982', '1607943911418', '2', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstName`, `lastname`, `gender`, `email`, `password`, `number`) VALUES
(1, 'Radhakrishnan K', 'KK', 'M', 'hi@radhakrishnan.in', '$2b$10$/zXjNW0WwA7kXbqtWm744eNQ1lbwGnsD4rVPSb/kiN.g9wBnCQiz.', '9941856425'),
(2, 'Arvind', 'Maharajan', 'M', 'arvind@cimplify.in', '$2b$10$4vwOgpXnqnMH.IxG89BYdeJEBWMpj7gvIyzyuhMICP.7ggjQT98Vq', '9999721741'),
(3, 'Nishadhan', 'V', 'M', 'nishadhan.nish@gmail.com', '$2b$10$Us.AxItv20ggdgcsbCvEUOpuI43M3yux5BeVCc.y70w.a/rX.P21e', '9003322323'),
(4, 'Vairamuthu', 'Sarang', 'M', 'vm@sarangauto.com', '$2b$10$LOblWTIBmvfEwLmOhqWQHOhDSWqQ15oFSrnPiwVXhXtXBgS5hgU02', '9999721741');

-- --------------------------------------------------------

--
-- Table structure for table `transporter`
--

CREATE TABLE `transporter` (
  `t_id` int(11) NOT NULL,
  `transporter_name` varchar(255) NOT NULL,
  `transporter_contact_name` varchar(255) NOT NULL,
  `transporter_contact_phone` varchar(255) NOT NULL,
  `billing_company_name` varchar(255) NOT NULL,
  `gst_number` varchar(255) NOT NULL,
  `pan_number` varchar(255) NOT NULL,
  `bank_account_number` varchar(255) NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `bank_ifsc_code` varchar(255) NOT NULL,
  `bank_branch_name` varchar(255) NOT NULL,
  `record_create_timestamp` varchar(255) NOT NULL,
  `record_create_user_name` varchar(255) NOT NULL,
  `record_update_timestamp` varchar(255) NOT NULL,
  `record_update_user_name` varchar(255) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transporter`
--

INSERT INTO `transporter` (`t_id`, `transporter_name`, `transporter_contact_name`, `transporter_contact_phone`, `billing_company_name`, `gst_number`, `pan_number`, `bank_account_number`, `bank_name`, `bank_ifsc_code`, `bank_branch_name`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'AV Transport', 'Arvind Maharajan', '9941856425', 'AV Transport', '1023564855', '', '', '', '', '', '1607951530123', '2', '1607951559653', '2', '');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `vehicle_id` int(11) NOT NULL,
  `logistics_type` varchar(255) DEFAULT NULL,
  `vehicle_type` varchar(255) DEFAULT NULL,
  `vehicle_number` varchar(255) DEFAULT NULL,
  `load_capacity` varchar(255) NOT NULL,
  `t_id` varchar(255) DEFAULT NULL,
  `record_create_timestamp` varchar(255) DEFAULT NULL,
  `record_create_user_name` varchar(255) DEFAULT NULL,
  `record_update_timestamp` varchar(255) DEFAULT NULL,
  `record_update_user_name` varchar(255) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`vehicle_id`, `logistics_type`, `vehicle_type`, `vehicle_number`, `load_capacity`, `t_id`, `record_create_timestamp`, `record_create_user_name`, `record_update_timestamp`, `record_update_user_name`, `status`) VALUES
(1, 'Internal Vendor Logistics,External Vendor Logistics', 'Baleno RS', 'TN10 8788', '1.8', '1', '1607951587300', '2', '1607964119279', '2', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `component`
--
ALTER TABLE `component`
  ADD PRIMARY KEY (`component_id`);

--
-- Indexes for table `componentfamily`
--
ALTER TABLE `componentfamily`
  ADD PRIMARY KEY (`cf_id`);

--
-- Indexes for table `component_child`
--
ALTER TABLE `component_child`
  ADD PRIMARY KEY (`cc_id`);

--
-- Indexes for table `component_process`
--
ALTER TABLE `component_process`
  ADD PRIMARY KEY (`cp_id`);

--
-- Indexes for table `contractor`
--
ALTER TABLE `contractor`
  ADD PRIMARY KEY (`contractor_id`);

--
-- Indexes for table `contractor_process`
--
ALTER TABLE `contractor_process`
  ADD PRIMARY KEY (`contractorp_id`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`d_id`);

--
-- Indexes for table `process`
--
ALTER TABLE `process`
  ADD PRIMARY KEY (`process_id`);

--
-- Indexes for table `purchase_order`
--
ALTER TABLE `purchase_order`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `purchase_order_changes`
--
ALTER TABLE `purchase_order_changes`
  ADD PRIMARY KEY (`poc_id`);

--
-- Indexes for table `purchase_order_item`
--
ALTER TABLE `purchase_order_item`
  ADD PRIMARY KEY (`purchase_item_id`);

--
-- Indexes for table `rawtype`
--
ALTER TABLE `rawtype`
  ADD PRIMARY KEY (`rawtype_id`);

--
-- Indexes for table `raw_material`
--
ALTER TABLE `raw_material`
  ADD PRIMARY KEY (`raw_material_id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transporter`
--
ALTER TABLE `transporter`
  ADD PRIMARY KEY (`t_id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`vehicle_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `component`
--
ALTER TABLE `component`
  MODIFY `component_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `componentfamily`
--
ALTER TABLE `componentfamily`
  MODIFY `cf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `component_child`
--
ALTER TABLE `component_child`
  MODIFY `cc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `component_process`
--
ALTER TABLE `component_process`
  MODIFY `cp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `contractor`
--
ALTER TABLE `contractor`
  MODIFY `contractor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contractor_process`
--
ALTER TABLE `contractor_process`
  MODIFY `contractorp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `d_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `process`
--
ALTER TABLE `process`
  MODIFY `process_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `purchase_order`
--
ALTER TABLE `purchase_order`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `purchase_order_changes`
--
ALTER TABLE `purchase_order_changes`
  MODIFY `poc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `purchase_order_item`
--
ALTER TABLE `purchase_order_item`
  MODIFY `purchase_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `rawtype`
--
ALTER TABLE `rawtype`
  MODIFY `rawtype_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `raw_material`
--
ALTER TABLE `raw_material`
  MODIFY `raw_material_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transporter`
--
ALTER TABLE `transporter`
  MODIFY `t_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `vehicle_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
