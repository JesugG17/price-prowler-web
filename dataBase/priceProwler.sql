CREATE DATABASE priceProwler;
use priceProwler;

CREATE TABLE users (
	mail nvarchar(50) not null unique,
	contrasenia nvarchar(20) not null
);
ALTER TABLE users
ADD CONSTRAINT pk_users PRIMARY KEY(mail);

CREATE TABLE userProfile(
	mail nvarchar(50),
	idUser int not null,
	names nvarchar(30) not null,
	apellidoPat nvarchar(20) not null,
	apellidoMat nvarchar(20) null,
	gender char(1) not null,
	age char(3) null
);

ALTER TABLE userProfile 
ADD CONSTRAINT pk_userProfile PRIMARY KEY(idUser),
CONSTRAINT fk_users_profile FOREIGN KEY(mail) REFERENCES users(mail);

CREATE TABLE products(
	idProduct int not null,
	productName nvarchar(250) not null,
	productDescription nvarchar(500) null,
	price int not null,
	link nvarchar(500) not null
);
ALTER TABLE products 
ADD CONSTRAINT pk_products PRIMARY KEY (idProduct);

CREATE TABLE wishList(
	idWishList int not null,
	idUser int not null,
	idProduct int not null,
	creationDate datetime not null,
	available bit not null
);

ALTER TABLE wishList
ADD CONSTRAINT pk_wishList PRIMARY KEY(idWishList),
CONSTRAINT fk_user_wishList FOREIGN KEY(idUser) REFERENCES userProfile(idUser),
CONSTRAINT fk_products_wishList FOREIGN KEY(idProduct) REFERENCES products(idProduct);

