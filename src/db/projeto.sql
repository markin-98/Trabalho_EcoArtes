CREATE DATABASE  IF NOT EXISTS `projeto` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `projeto`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: projeto
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empreendedores`
--

DROP TABLE IF EXISTS `empreendedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empreendedores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empreendedores`
--

LOCK TABLES `empreendedores` WRITE;
/*!40000 ALTER TABLE `empreendedores` DISABLE KEYS */;
INSERT INTO `empreendedores` VALUES (1,'Washington','washington_jl@hotmail.com','123'),(2,'Junio','junio@123','123'),(23,'Nitai Nandi','nitainandi@gmail.com','123123'),(24,'Gerson Silva','fenoguru@gmail.com','789456'),(25,'Nitai Nandi','nitainandi1@gmail.com','123123'),(26,'João Silva','produtor@gmail.com','123123'),(27,'Pedro Rodrigues','produtor2@gmail.com','123123');
/*!40000 ALTER TABLE `empreendedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fabricam`
--

DROP TABLE IF EXISTS `fabricam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fabricam` (
  `emailprodutor` varchar(100) DEFAULT NULL,
  `idprodutor` int DEFAULT NULL,
  `idproduto` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fabricam`
--

LOCK TABLES `fabricam` WRITE;
/*!40000 ALTER TABLE `fabricam` DISABLE KEYS */;
INSERT INTO `fabricam` VALUES ('produtor@gmail.com',NULL,125),('produtor@gmail.com',NULL,126),('produtor@gmail.com',NULL,127),('produtor@gmail.com',NULL,128),('produtor@gmail.com',NULL,63),('produtor@gmail.com',NULL,86),('produtor@gmail.com',NULL,87),('produtor@gmail.com',NULL,105),('produtor2@gmail.com',NULL,129),('produtor2@gmail.com',NULL,130),('produtor2@gmail.com',NULL,131),('produtor2@gmail.com',NULL,132),('produtor2@gmail.com',NULL,133),('nitainandi@gmail.com',NULL,80),('nitainandi@gmail.com',NULL,81),('nitainandi@gmail.com',NULL,82),('nitainandi@gmail.com',NULL,83),('nitainandi@gmail.com',NULL,84),('nitainandi@gmail.com',NULL,85),('nitainandi@gmail.com',NULL,88),('nitainandi@gmail.com',NULL,95),('nitainandi@gmail.com',NULL,96),('nitainandi@gmail.com',NULL,97),('nitainandi@gmail.com',NULL,98),('nitainandi@gmail.com',NULL,99),('fenoguru@gmail.com',NULL,101),('fenoguru@gmail.com',NULL,102),('fenoguru@gmail.com',NULL,104),('fenoguru@gmail.com',NULL,106),('fenoguru@gmail.com',NULL,107);
/*!40000 ALTER TABLE `fabricam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritam`
--

DROP TABLE IF EXISTS `favoritam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritam` (
  `emailusuario` varchar(100) NOT NULL,
  `idproduto` int NOT NULL,
  `idusuario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritam`
--

LOCK TABLES `favoritam` WRITE;
/*!40000 ALTER TABLE `favoritam` DISABLE KEYS */;
INSERT INTO `favoritam` VALUES ('nitainandi1@gmail.com',133,NULL),('nitainandi1@gmail.com',95,NULL),('nitainandi1@gmail.com',88,NULL);
/*!40000 ALTER TABLE `favoritam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `imagem` varchar(50) DEFAULT NULL,
  `categoria` varchar(20) DEFAULT NULL,
  `descricao` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (63,'Semente de Oregano',15.99,'sOregano.jpg','plantas','Ideal para quem gosta de colocar a mão na terra e temperar as coisas do jeito certo. Esta semente de orégano é fácil de plantar e cresce rápido, trazendo um sabor autêntico às suas receitas.'),(80,'Inseticida 100% Natural 500 ML',32.99,'inseticida01.jpg','inseticidas','Os inseticidas são produtos desenvolvidos para o controle de insetos que causam danos às plantas, culturas e ambientes internos. Projetados para eliminar pragas de forma eficiente, eles estão disponíveis em fórmulas específicas para diferentes tipos de aplicação, como contato direto, ingestão ou ação residual. Seguir as instruções de uso e as práticas de segurança é essencial para garantir um resultado eficaz e ambientalmente responsável.'),(81,'Inseticida Natural Ervamix 50ml ',23.49,'inseticida02.jpg','inseticidas','Os inseticidas são produtos desenvolvidos para o controle de insetos que causam danos às plantas, culturas e ambientes internos. Projetados para eliminar pragas de forma eficiente, eles estão disponíveis em fórmulas específicas para diferentes tipos de aplicação, como contato direto, ingestão ou ação residual. Seguir as instruções de uso e as práticas de segurança é essencial para garantir um resultado eficaz e ambientalmente responsável.'),(82,'Inseticida Spray Repelente',99.99,'inseticida04.jpg','inseticidas','Os inseticidas são produtos desenvolvidos para o controle de insetos que causam danos às plantas, culturas e ambientes internos. Projetados para eliminar pragas de forma eficiente, eles estão disponíveis em fórmulas específicas para diferentes tipos de aplicação, como contato direto, ingestão ou ação residual. Seguir as instruções de uso e as práticas de segurança é essencial para garantir um resultado eficaz e ambientalmente responsável.'),(83,'Inseticida 500ml Neem Forth',25.99,'inseticida03.jpg','inseticidas','Os inseticidas são produtos desenvolvidos para o controle de insetos que causam danos às plantas, culturas e ambientes internos. Projetados para eliminar pragas de forma eficiente, eles estão disponíveis em fórmulas específicas para diferentes tipos de aplicação, como contato direto, ingestão ou ação residual. Seguir as instruções de uso e as práticas de segurança é essencial para garantir um resultado eficaz e ambientalmente responsável.'),(84,'Repelente Natural De Neem ',36.99,'inseticida05.jpg','inseticidas','Os inseticidas são produtos desenvolvidos para o controle de insetos que causam danos às plantas, culturas e ambientes internos. Projetados para eliminar pragas de forma eficiente, eles estão disponíveis em fórmulas específicas para diferentes tipos de aplicação, como contato direto, ingestão ou ação residual. Seguir as instruções de uso e as práticas de segurança é essencial para garantir um resultado eficaz e ambientalmente responsável.'),(85,'Semente de Tomate Cereja',9.99,'sTomate.jpg','plantas','Cultive seus próprios tomates cereja fresquinhos com estas sementes de alta qualidade. Cada pacote vem com o potencial de transformar seu quintal em uma mini-horta. Perfeito para saladas, molhos ou para comer direto do pé.'),(86,'Sementes de Alecrim Rosmarinho',4.99,'sAlecrim.jpg','plantas','Ideal para quem gosta de colocar a mão na terra e temperar as coisas do jeito certo. Esta semente de alecrim rosmarinho é fácil de plantar e cresce rápido, trazendo um sabor autêntico às suas receitas.'),(87,'Semente de Lavanda',8.99,'sLavanda.jpg','plantas','Ideal para quem gosta de um belo jardim em sua casa. Esta semente de lavanda é fácil de plantar e cresce rápido, trazendo uma cor a seu jardim.'),(88,'Sementes de Manjericão',6.99,'sManjericao.jpg','plantas','Ideal para quem gosta de colocar a mão na terra e temperar as coisas do jeito certo. Esta semente de manjericão é fácil de plantar e cresce rápido, trazendo um sabor autêntico às suas receitas.'),(95,'Fertilizante Orgânico Classe A',25.99,'fertilizante01.jpg','adubo','Fertilizantes são compostos cuidadosamente formulados para promover o crescimento saudável de plantas, fornecendo os nutrientes essenciais que o solo pode não oferecer em quantidade suficiente. Disponíveis em formatos líquidos, granulados ou em pó, eles auxiliam na melhoria da estrutura do solo, aumentam a resistência das plantas a doenças e otimizam a produtividade de hortas, jardins e paisagismo. Recomendado para aplicação com base nas necessidades específicas de cada tipo de planta.'),(96,'Fertilizante Bokashi Horta Korin',25.99,'fertilizante02.jpg','adubo','Fertilizantes são compostos cuidadosamente formulados para promover o crescimento saudável de plantas, fornecendo os nutrientes essenciais que o solo pode não oferecer em quantidade suficiente. Disponíveis em formatos líquidos, granulados ou em pó, eles auxiliam na melhoria da estrutura do solo, aumentam a resistência das plantas a doenças e otimizam a produtividade de hortas, jardins e paisagismo. Recomendado para aplicação com base nas necessidades específicas de cada tipo de planta.'),(97,'Fertilizante Orgânico Forth',45.99,'fertilizante03.jpg','adubo','Fertilizantes são compostos cuidadosamente formulados para promover o crescimento saudável de plantas, fornecendo os nutrientes essenciais que o solo pode não oferecer em quantidade suficiente. Disponíveis em formatos líquidos, granulados ou em pó, eles auxiliam na melhoria da estrutura do solo, aumentam a resistência das plantas a doenças e otimizam a produtividade de hortas, jardins e paisagismo. Recomendado para aplicação com base nas necessidades específicas de cada tipo de planta.'),(98,'Fertilizante Orgânico Simples',21.99,'fertilizante04.png','adubo','Fertilizantes são compostos cuidadosamente formulados para promover o crescimento saudável de plantas, fornecendo os nutrientes essenciais que o solo pode não oferecer em quantidade suficiente. Disponíveis em formatos líquidos, granulados ou em pó, eles auxiliam na melhoria da estrutura do solo, aumentam a resistência das plantas a doenças e otimizam a produtividade de hortas, jardins e paisagismo. Recomendado para aplicação com base nas necessidades específicas de cada tipo de planta.'),(99,'Fertilizante Ferti-Peixe 20 litros',199.99,'fertilizante05.jpg','adubo','Fertilizantes são compostos cuidadosamente formulados para promover o crescimento saudável de plantas, fornecendo os nutrientes essenciais que o solo pode não oferecer em quantidade suficiente. Disponíveis em formatos líquidos, granulados ou em pó, eles auxiliam na melhoria da estrutura do solo, aumentam a resistência das plantas a doenças e otimizam a produtividade de hortas, jardins e paisagismo. Recomendado para aplicação com base nas necessidades específicas de cada tipo de planta.'),(101,'Fertilizante Orgânico Ecocert',39.99,'fertilizante06.jpg','adubo','Fertilizantes são compostos cuidadosamente formulados para promover o crescimento saudável de plantas, fornecendo os nutrientes essenciais que o solo pode não oferecer em quantidade suficiente. Disponíveis em formatos líquidos, granulados ou em pó, eles auxiliam na melhoria da estrutura do solo, aumentam a resistência das plantas a doenças e otimizam a produtividade de hortas, jardins e paisagismo. Recomendado para aplicação com base nas necessidades específicas de cada tipo de planta.'),(102,'Sino dos Ventos Conchas Naturais',149.99,'artesanato01.jpg','artesanato','Cada brisa transforma seu quintal em uma sinfonia suave com este sino dos ventos feito de conchas genuínas. Artesanal e exclusivo, é como trazer um pedacinho do oceano para sua casa. Ideal para relaxar... Ou assustar um gato curioso.'),(104,'Sino dos Ventos Conchas',199.99,'artesanato03.jpg','artesanato','Sino feito de conchas e pedras encontradas em praia, especificamente do nordeste do Brasil'),(105,'Penca de coração',29.99,'artesanato04.jpg','artesanato','Uma peça rústica e encantadora, perfeita para trazer uma dose de romantismo a qualquer ambiente. Feita artesanalmente com corações de argila pintados à mão, esta penca é ideal para pendurar na porta ou decorar um cantinho especial. Dizem que cada coração atrai um desejo de amor verdadeiro... Ou pelo menos um bom papo na sala.'),(106,'Escultura Peixe Decorativo',69.99,'artesanato05.jpg','artesanato','Escultura de um peixe \"Boomerang\", feito com tecido de calça que tinha se rasgado, foi uma boa ideia de reutilizar!'),(107,'Forro decorativo de Folhas Naturais ',18.99,'artesanato06.jpg','artesanato','Um toque de frescor e sofisticação com este forro feito de folhas naturais prensadas e tratadas. Ideal para decorar mesas de jantar, criar um clima tropical ou impressionar na próxima reunião em casa. Só não vale usá-lo como prato de salada.'),(125,'Pote de Tampas de garrafa',3.49,'poteplastico.jpg','artesanato','Perfeito para quem adora reciclar ou simplesmente colecionar coisas únicas. Este pote cheio de tampinhas coloridas é ideal para projetos de artesanato ou apenas para exibir sua paixão por bebidas engarrafadas. Pode até virar moeda de troca em feiras de criatividade!'),(126,'Boneco de tampinha de garrafa',4.99,'palhacotampinha.png','artesanato','Uma obra-prima da criatividade sustentável. Feito com tampinhas de garrafa coloridas, este boneco é o presente perfeito para colecionadores ou fãs de arte reciclada. Movimentos limitados, mas cheio de personalidade! (Não recomendado para crianças que acham que tudo é brinquedo de morder.)'),(127,'Ukalele de garrafa de desinfetante',7.99,'ukalele.png','artesanato','Para os músicos que querem fazer um som sem gastar fortunas! Este ukulele feito de garrafa de desinfetante reciclada surpreende com sua acústica única. Pode não levar você ao Grammy, mas com certeza arrancará sorrisos em qualquer roda de amigos.'),(128,'Decoração flor de garrafa pet Azul',11.49,'florgarrafaazul.png','artesanato','Uma linda decoração de flor feita com garrafa pet de cor azul, pode-se pendurar no melhor local em sua casa para trazer um aspecto especial com um produto reciclado.'),(129,'Vaso pequeno de barro',5.99,'vasopequeno.png','artesanato','Feito à mão com o melhor barro da região, decorado com pintura de flor. Este vaso é perfeito para suas plantas pequenas ou para usar como peça decorativa.'),(130,'Vaso médio de barro',12.25,'vasocomum.png','artesanato','Feito à mão com o melhor barro da região, este vaso é perfeito para suas plantas ou para usar como peça decorativa. Resistente, funcional e com um charme rústico que combina com qualquer estilo.'),(131,'Vaso médio de barro com alça',19.99,'vasocomalca.jpeg','artesanato','Feito à mão com o melhor barro da região, com alças, este vaso é perfeito para suas plantas ou para usar como peça decorativa. Resistente, funcional e com um charme rústico que combina com qualquer estilo.'),(132,'Vassoura de garrafa pet',9.99,'vassourapet.png','artesanato','Diga adeus à sujeira e olá à sustentabilidade! Feita com cerdas resistentes de garrafa PET, esta vassoura é ideal para varrer qualquer ambiente. Durável, prática e amiga do meio ambiente, ela limpa até os cantos mais difíceis... E a consciência.'),(133,'Fogareiro artesanal com lata de refrigerante',3.49,'fogareiro.png','artesanato','Leve e eficiente, este fogareiro artesanal feito com lata de refrigerante é a solução perfeita para aventuras ao ar livre. Compacto, mas poderoso, é ideal para cozinhar ou aquecer. Só cuidado para não queimar o feijão... Ou a paciência.');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'teste ','teste@teste1','12345678910','Rua teste n 332','123'),(2,'testedois','teste@teste2','12345678900','rua teste 1234','123'),(3,'teste','teste@teste3','12345678910','rua teste 123','234'),(4,'teste Lima','teste@teste','3134556765','Puc','123'),(11,'nome','email@email','0','','123123'),(18,'Nitai Nandi','nitainandi1@gmail.com','0','','123123'),(19,'Gerson Silva','fenoguru@gmail.com','0','','789456');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-17 16:46:21
