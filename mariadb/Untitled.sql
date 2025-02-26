CREATE TABLE `Usuarios` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(80),
  `username` varchar(50),
  `senha` varchar(30),
  `id_tipoUsuario` integer
);

CREATE TABLE `TiposUsuarios` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `descricao` varchar(50),
  `nivel` integer
);

ALTER TABLE `Usuarios` ADD FOREIGN KEY (`id_tipoUsuario`) REFERENCES `TiposUsuarios` (`id`);
