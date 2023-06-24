use flyme;

create table voos(
	id int primary key auto_increment,
    companhia_aerea varchar(150) not null,
    origem varchar(150) not null,	
    destino varchar(150) not null,
    data_horario datetime not null,
    duracao int not null,
    assentos int not null,
    classe enum("econômica", "executiva", "primeira") not null,
	valor float not null
) ENGINE = InnoDB;	

select * from voos;

delete from voos;
