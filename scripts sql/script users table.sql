create database flyme;

use flyme;

create table users(
	id int primary key auto_increment,
    cpf varchar(11) unique not null,
    nome varchar(150) not null,
    email varchar(50) not null unique,
    senha varchar(100) not null,
    telefone varchar(20) not null,
    genero enum('feminino', 'masculino', 'outro'),
    data_nasc date not null
) ENGINE = InnoDB;

select * from users;

	


