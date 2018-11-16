CREATE database clinica_medica;

USE clinica_medica;

CREATE TABLE patients (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  telefone CHAR(14) NOT NULL,
  celular CHAR(14) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE attendants (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  telefone CHAR(14) NOT NULL,
  email VARCHAR(100) NULL,
  PRIMARY KEY(id)
);

CREATE TABLE specialties (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE doctors (
  id BIGINT NOT NULL AUTO_INCREMENT,
  specialties_id BIGINT NOT NULL,
  name VARCHAR(100) NOT NULL,
  number_register INTEGER UNSIGNED NOT NULL,
  address VARCHAR(255) NOT NULL,
  celular CHAR(14) NULL,
  email VARCHAR(100) NULL,
  appointment_value FLOAT NULL,
  PRIMARY KEY(id),
  INDEX doctors_FKIndex1(specialties_id),
  FOREIGN KEY(specialties_id)
    REFERENCES specialties(id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE appointments (
  id BIGINT NOT NULL AUTO_INCREMENT,
  attendants_id BIGINT NOT NULL,
  patients_id BIGINT NOT NULL,
  doctors_id BIGINT NOT NULL,
  data_time DATETIME NOT NULL,
  value FLOAT NOT NULL,
  obs VARCHAR(255) NULL,
  PRIMARY KEY(id),
  INDEX appointments_FKIndex1(doctors_id),
  INDEX appointments_FKIndex2(patients_id),
  INDEX appointments_FKIndex3(attendants_id),
  FOREIGN KEY(doctors_id)
    REFERENCES doctors(id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(patients_id)
    REFERENCES patients(id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(attendants_id)
    REFERENCES attendants(id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

